import { useState, useEffect, useCallback } from 'react'
import { useSocket } from './useSocket'
import { SOCKET_EVENTS, BATTLE_DURATION } from '../utils/constants'

export const useBattle = () => {
  const { emit, on } = useSocket()

  const [room,       setRoom]       = useState(null)
  const [players,    setPlayers]    = useState([])
  const [battleState, setBattleState] = useState('lobby') // lobby | selecting | battling | judging | ended
  const [mySteps,    setMySteps]    = useState([])
  const [oppSteps,   setOppSteps]   = useState([])
  const [timeLeft,   setTimeLeft]   = useState(BATTLE_DURATION)
  const [judgment,   setJudgment]   = useState(null)
  const [error,      setError]      = useState(null)

  useEffect(() => {
    const cleanups = [
      on(SOCKET_EVENTS.ROOM_CREATED,  (data) => { setRoom(data.room); setPlayers(data.players) }),
      on(SOCKET_EVENTS.ROOM_JOINED,   (data) => { setRoom(data.room); setPlayers(data.players) }),
      on(SOCKET_EVENTS.PLAYER_JOINED, (data) => setPlayers(data.players)),
      on(SOCKET_EVENTS.PLAYER_LEFT,   (data) => setPlayers(data.players)),
      on(SOCKET_EVENTS.BATTLE_START,  ()     => setBattleState('battling')),
      on(SOCKET_EVENTS.STEP_UPDATE,   (data) => {
        if (data.isOpponent) setOppSteps(prev => [...prev, data.step])
        else                 setMySteps(prev  => [...prev, data.step])
      }),
      on(SOCKET_EVENTS.TIMER_TICK,    (data) => setTimeLeft(data.timeLeft)),
      on(SOCKET_EVENTS.JUDGE_RESULT,  (data) => { setJudgment(data); setBattleState('ended') }),
      on(SOCKET_EVENTS.ERROR,         (data) => setError(data.message)),
    ]
    return () => cleanups.forEach(c => c())
  }, [on])

  const createRoom = useCallback((username) => {
    emit(SOCKET_EVENTS.CREATE_ROOM, { username })
  }, [emit])

  const joinRoom = useCallback((roomCode, username) => {
    emit(SOCKET_EVENTS.JOIN_ROOM, { roomCode, username })
  }, [emit])

  const sendStep = useCallback((step) => {
    emit(SOCKET_EVENTS.STEP_UPDATE, { step })
    setMySteps(prev => [...prev, step])
  }, [emit])

  const selectAlgo = useCallback((algoId) => {
    emit(SOCKET_EVENTS.ALGO_SELECTED, { algoId })
  }, [emit])

  return {
    room, players, battleState, mySteps, oppSteps,
    timeLeft, judgment, error,
    createRoom, joinRoom, sendStep, selectAlgo,
  }
}
