import { useState } from 'react'
import Button from '../UI/Button'

export default function JoinRoom({ onJoin }) {
  const [username, setUsername] = useState('')
  const [roomCode, setRoomCode] = useState('')

  const handleJoin = (e) => {
    e.preventDefault()
    if (username.trim().length < 2 || roomCode.trim().length !== 6) return
    onJoin(roomCode.trim().toUpperCase(), username.trim().toUpperCase())
  }

  return (
    <form onSubmit={handleJoin} className="space-y-4">
      <div>
        <label className="block text-xs font-mono text-arena-muted mb-1.5 tracking-widest uppercase">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="RAVI_07"
          maxLength={16}
          className="w-full bg-arena-surface border border-arena-border rounded-lg px-4 py-2.5
                     text-arena-white font-mono text-sm placeholder-arena-muted
                     focus:outline-none focus:border-arena-pink transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-mono text-arena-muted mb-1.5 tracking-widest uppercase">
          Room Code
        </label>
        <input
          type="text"
          value={roomCode}
          onChange={e => setRoomCode(e.target.value.toUpperCase())}
          placeholder="AR74X2"
          maxLength={6}
          className="w-full bg-arena-surface border border-arena-border rounded-lg px-4 py-2.5
                     text-arena-white font-display font-bold text-xl tracking-widest text-center
                     placeholder-arena-muted focus:outline-none focus:border-arena-pink transition-colors"
        />
      </div>
      <Button type="submit" variant="danger" className="w-full justify-center">
        Join Battle
      </Button>
    </form>
  )
}
