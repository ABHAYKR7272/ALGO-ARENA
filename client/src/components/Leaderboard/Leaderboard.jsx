import PlayerCard from './PlayerCard'

export default function Leaderboard({ players = [] }) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 px-4 pb-2 border-b border-arena-border">
        <span className="text-xs font-mono text-arena-muted tracking-widest">#</span>
        <span className="text-xs font-mono text-arena-muted tracking-widest col-span-2">PLAYER</span>
        <span className="text-xs font-mono text-arena-muted tracking-widest text-right">XP</span>
      </div>
      {players.map((p, i) => <PlayerCard key={p.username} player={p} rank={i + 1} />)}
      {players.length === 0 && (
        <div className="text-center py-12 text-arena-muted font-mono text-sm">
          No players yet. Be the first!
        </div>
      )}
    </div>
  )
}
