const rankColors = { 1: '#ffe600', 2: '#c0c0c0', 3: '#cd7f32' }
const rankEmoji  = { 1: '🏆', 2: '🥈', 3: '🥉' }

export default function PlayerCard({ player, rank }) {
  const color = rankColors[rank] || '#3d5570'
  return (
    <div className="grid grid-cols-4 items-center px-4 py-3 rounded-lg bg-arena-card border border-arena-border hover:border-arena-muted/40 transition-colors">
      <span className="font-display text-base font-black" style={{ color }}>
        {rankEmoji[rank] || `#${rank}`}
      </span>
      <div className="col-span-2">
        <div className="text-sm font-mono text-arena-white font-medium">{player.username}</div>
        <div className="text-xs font-mono text-arena-muted">{player.badge || 'Newcomer'}</div>
      </div>
      <div className="text-right">
        <div className="font-display text-sm font-bold text-arena-cyan">{player.xp}</div>
        <div className="text-xs text-arena-muted font-mono">XP</div>
      </div>
    </div>
  )
}
