// In-memory room store
const rooms = new Map()

const generateCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return code
}

export const createRoom = (hostSocket, username) => {
  let code
  do { code = generateCode() } while (rooms.has(code))

  const room = {
    code,
    host:    hostSocket.id,
    players: [{ id: hostSocket.id, username, score: 0, steps: 0, algo: null }],
    state:   'waiting',      // waiting | selecting | battling | judging | ended
    problem: null,
    startedAt: null,
  }
  rooms.set(code, room)
  return room
}

export const joinRoom = (code, guestSocket, username) => {
  const room = rooms.get(code)
  if (!room)                  return { error: 'Room not found' }
  if (room.players.length >= 2) return { error: 'Room is full' }
  if (room.state !== 'waiting') return { error: 'Battle already started' }

  room.players.push({ id: guestSocket.id, username, score: 0, steps: 0, algo: null })
  room.state = 'selecting'
  return { room }
}

export const getRoom    = (code)     => rooms.get(code)
export const deleteRoom = (code)     => rooms.delete(code)
export const getRoomBySocket = (sid) => [...rooms.values()].find(r => r.players.some(p => p.id === sid))
export const updatePlayerStep = (code, socketId, step) => {
  const room = rooms.get(code)
  if (!room) return
  const player = room.players.find(p => p.id === socketId)
  if (player) player.steps++
  return room
}
