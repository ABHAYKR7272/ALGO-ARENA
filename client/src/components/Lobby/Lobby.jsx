import { useState } from 'react'
import CreateRoom from './CreateRoom'
import JoinRoom from './JoinRoom'

export default function Lobby({ onCreateRoom, onJoinRoom, roomCode, players, error }) {
  const [tab, setTab] = useState('create')

  // Waiting room — room created, waiting for opponent
  if (roomCode && players.length === 1) {
    return (
      <div className="text-center space-y-6">
        <div>
          <p className="text-xs font-mono text-arena-muted tracking-widest mb-2">ROOM CODE</p>
          <div className="font-display text-4xl font-black text-arena-cyan tracking-[0.3em] bg-arena-cyan/06 border border-arena-cyan/20 rounded-xl py-4 px-6">
            {roomCode}
          </div>
        </div>
        <p className="text-sm text-arena-muted">Share this code with your opponent</p>
        <div className="flex items-center gap-3 justify-center">
          <div className="w-2 h-2 rounded-full bg-arena-cyan animate-pulse" />
          <span className="text-sm font-mono text-arena-text">Waiting for opponent...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex rounded-lg border border-arena-border overflow-hidden">
        {['create', 'join'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2.5 text-sm font-mono font-medium transition-all capitalize
              ${tab === t
                ? 'bg-arena-cyan/10 text-arena-cyan border-b-2 border-arena-cyan'
                : 'text-arena-muted hover:text-arena-text hover:bg-arena-surface'
              }`}
          >
            {t === 'create' ? 'Create Room' : 'Join Room'}
          </button>
        ))}
      </div>

      {error && (
        <div className="bg-arena-pink/10 border border-arena-pink/30 rounded-lg px-4 py-3 text-arena-pink text-sm font-mono">
          {error}
        </div>
      )}

      {tab === 'create'
        ? <CreateRoom onCreate={onCreateRoom} />
        : <JoinRoom onJoin={onJoinRoom} />
      }
    </div>
  )
}
