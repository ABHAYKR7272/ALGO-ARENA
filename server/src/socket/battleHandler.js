import { createRoom, joinRoom, getRoom, getRoomBySocket, deleteRoom, updatePlayerStep } from './roomManager.js'
import { SOCKET_EVENTS } from '../../shared/constants.js'
import { runAlgorithm }  from '../controllers/battleController.js'
import { callAIJudge }   from '../controllers/aiJudge.js'

export const registerBattleHandlers = (io, socket) => {

  // Create room
  socket.on(SOCKET_EVENTS.CREATE_ROOM, ({ username }) => {
    try {
      const room = createRoom(socket, username)
      socket.join(room.code)
      socket.emit(SOCKET_EVENTS.ROOM_CREATED, { room: { code: room.code }, players: room.players })
      console.log(`[Room] ${username} created ${room.code}`)
    } catch (err) {
      socket.emit(SOCKET_EVENTS.ERROR, { message: err.message })
    }
  })

  // Join room
  socket.on(SOCKET_EVENTS.JOIN_ROOM, ({ roomCode, username }) => {
    try {
      const result = joinRoom(roomCode, socket, username)
      if (result.error) return socket.emit(SOCKET_EVENTS.ERROR, { message: result.error })

      socket.join(roomCode)
      io.to(roomCode).emit(SOCKET_EVENTS.PLAYER_JOINED, { players: result.room.players })
      socket.emit(SOCKET_EVENTS.ROOM_JOINED, { room: { code: roomCode }, players: result.room.players })
      console.log(`[Room] ${username} joined ${roomCode}`)

      // Auto-start battle when 2 players ready
      setTimeout(() => {
        io.to(roomCode).emit(SOCKET_EVENTS.BATTLE_START, {
          problem: { type: 'sorting', size: 20, description: 'Sort this array using your preferred algorithm' }
        })
      }, 1500)

    } catch (err) {
      socket.emit(SOCKET_EVENTS.ERROR, { message: err.message })
    }
  })

  // Algorithm selected — run C++ engine
  socket.on(SOCKET_EVENTS.ALGO_SELECTED, async ({ algoId }) => {
    try {
      const room = getRoomBySocket(socket.id)
      if (!room) return

      const steps = await runAlgorithm(algoId)
      socket.emit('algo_steps', { steps })

      // Broadcast to opponent
      socket.to(room.code).emit('opp_algo_selected', { algoId })

    } catch (err) {
      socket.emit(SOCKET_EVENTS.ERROR, { message: 'Algorithm failed: ' + err.message })
    }
  })

  // Step update — player solved N steps
  socket.on(SOCKET_EVENTS.STEP_UPDATE, ({ step }) => {
    const room = getRoomBySocket(socket.id)
    if (!room) return
    updatePlayerStep(room.code, socket.id, step)
    socket.to(room.code).emit(SOCKET_EVENTS.STEP_UPDATE, { step, isOpponent: true })
  })

  // Disconnect cleanup
  socket.on('disconnect', () => {
    const room = getRoomBySocket(socket.id)
    if (!room) return
    socket.to(room.code).emit(SOCKET_EVENTS.PLAYER_LEFT, {
      players: room.players.filter(p => p.id !== socket.id)
    })
    console.log(`[Room] Player disconnected from ${room.code}`)
  })
}
