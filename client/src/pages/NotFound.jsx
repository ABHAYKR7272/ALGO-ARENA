import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="font-display text-8xl font-black text-arena-cyan/20 mb-4">404</div>
      <h1 className="font-display text-2xl font-black text-arena-white mb-2">Arena not found</h1>
      <p className="text-arena-muted font-mono text-sm mb-6">This battle doesn't exist.</p>
      <Link to="/" className="text-arena-cyan text-sm font-mono hover:underline">
        ← Back to home
      </Link>
    </div>
  )
}
