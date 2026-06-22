import { useEffect, useRef, useCallback } from 'react'
import { io } from 'socket.io-client'
import { SOCKET_EVENTS } from '../utils/constants'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

export const useSocket = () => {
  const socketRef = useRef(null)

  useEffect(() => {
    socketRef.current = io(SERVER_URL, {
      transports: ['websocket'],
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    })

    socketRef.current.on('connect', () => {
      console.log('[Socket] Connected:', socketRef.current.id)
    })

    socketRef.current.on('disconnect', (reason) => {
      console.log('[Socket] Disconnected:', reason)
    })

    return () => {
      socketRef.current?.disconnect()
    }
  }, [])

  const emit = useCallback((event, data) => {
    socketRef.current?.emit(event, data)
  }, [])

  const on = useCallback((event, handler) => {
    socketRef.current?.on(event, handler)
    return () => socketRef.current?.off(event, handler)
  }, [])

  const off = useCallback((event, handler) => {
    socketRef.current?.off(event, handler)
  }, [])

  return { socket: socketRef.current, emit, on, off }
}
