import ArrayVisualizer from '../Visualizer/ArrayVisualizer'
import Badge from '../UI/Badge'

export default function PlayerPanel({ player, array, highlightIdx, steps, algo, isYou, color }) {
  return (
    <div
      className="flex-1 rounded-xl p-4 border"
      style={{ borderColor: color + '30', background: color + '06' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: color }} />
          <span className="font-display text-xs font-bold tracking-widest" style={{ color }}>
            {player?.username || 'Waiting...'}
          </span>
          {isYou && <Badge color="cyan" className="text-xs">YOU</Badge>}
        </div>
        <div className="text-right">
          <div className="font-mono text-xs text-arena-muted">Steps</div>
          <div className="font-display text-sm font-bold" style={{ color }}>{steps}</div>
        </div>
      </div>

      {/* Algorithm badge */}
      {algo && (
        <div className="mb-3">
          <Badge color={isYou ? 'cyan' : 'pink'}>{algo}</Badge>
        </div>
      )}

      {/* Visualizer */}
      <ArrayVisualizer
        array={array}
        highlightIdx={highlightIdx}
        label={player?.username || '---'}
        color={color}
      />
    </div>
  )
}
