import { useState } from 'react'
import Button from '../UI/Button'

export default function CreateRoom({ onCreate }) {
  const [username, setUsername] = useState('')

  const handleCreate = (e) => {
    e.preventDefault()
    if (username.trim().length < 2) return
    onCreate(username.trim().toUpperCase())
  }

  return (
    <form onSubmit={handleCreate} className="space-y-4">
      <div>
        <label className="block text-xs font-mono text-arena-muted mb-1.5 tracking-widest uppercase">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="MATRIX_99"
          maxLength={16}
          className="w-full bg-arena-surface border border-arena-border rounded-lg px-4 py-2.5
                     text-arena-white font-mono text-sm placeholder-arena-muted
                     focus:outline-none focus:border-arena-cyan transition-colors"
        />
      </div>
      <Button type="submit" className="w-full justify-center">
        Create Battle Room
      </Button>
    </form>
  )
}
