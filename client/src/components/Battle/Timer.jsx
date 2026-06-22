import { formatTime } from '../../utils/helpers'

export default function Timer({ timeLeft, total = 180 }) {
  const pct      = timeLeft / total
  const radius   = 40
  const circum   = 2 * Math.PI * radius
  const dashOff  = circum * (1 - pct)
  const color    = timeLeft > 60 ? '#00e5ff' : timeLeft > 30 ? '#ffe600' : '#ff2d78'

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
          <circle cx="48" cy="48" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
          <circle
            cx="48" cy="48" r={radius}
            fill="none" stroke={color} strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circum}
            strokeDashoffset={dashOff}
            style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.5s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-lg font-black" style={{ color }}>
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>
      <span className="text-xs text-arena-muted font-mono tracking-widest">TIME LEFT</span>
    </div>
  )
}
