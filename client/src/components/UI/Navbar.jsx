import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-arena-border bg-arena-bg/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link to="/" className="font-display font-black text-lg tracking-widest text-arena-cyan">
          ALGO<span className="text-white">ARENA</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/"           className="text-sm text-arena-muted hover:text-arena-text transition-colors">Home</Link>
          <Link to="/leaderboard" className="text-sm text-arena-muted hover:text-arena-text transition-colors">Leaderboard</Link>
        </div>
      </div>
    </nav>
  )
}
