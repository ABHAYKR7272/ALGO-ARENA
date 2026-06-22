import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Lobby from '../components/Lobby/Lobby'
import { useBattle } from '../hooks/useBattle'

export default function Home() {
  const navigate = useNavigate()
  const { room, players, error, createRoom, joinRoom } = useBattle()

  // When both players join — navigate to battle
  if (players.length === 2) {
    navigate('/battle', { state: { room, players } })
  }

  return (
    <div className="grid-bg scanline min-h-screen flex flex-col items-center justify-center px-4">
      <div className="relative z-10 w-full max-w-md">
        {/* Hero */}
        <div className="text-center mb-10">
          <p className="font-mono text-xs tracking-[0.4em] text-arena-cyan/60 mb-3">
            REAL-TIME MULTIPLAYER DSA
          </p>
          <h1 className="font-display text-6xl sm:text-7xl font-black tracking-widest leading-none mb-2">
            <span className="text-arena-cyan">ALGO</span>
            <br />
            <span className="text-arena-white">ARENA</span>
          </h1>
          <p className="text-arena-muted text-sm font-mono mt-3">
            Battle your friends. Master algorithms. ⚔️
          </p>
        </div>

        {/* Card */}
        <div className="bg-arena-card border border-arena-border rounded-2xl p-6 backdrop-blur-sm">
          <Lobby
            onCreateRoom={createRoom}
            onJoinRoom={joinRoom}
            roomCode={room?.code}
            players={players}
            error={error}
          />
        </div>
      </div>
    </div>
  )
}
