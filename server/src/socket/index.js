import { Server } from 'socket.io'
import { registerBattleHandlers } from './battleHandler.js'

export const initSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin:      process.env.CLIENT_URL,
      methods:     ['GET', 'POST'],
      credentials: true,
    }
  })

  io.on('connection', (socket) => {
    console.log('[Socket] Connected:', socket.id)
    registerBattleHandlers(io, socket)
  })

  return io
}
