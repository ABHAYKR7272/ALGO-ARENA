import { useEffect, useRef } from 'react'
import { stepColor } from '../../utils/helpers'

export default function ArrayVisualizer({ array = [], highlightIdx = [], label = 'Player', color = '#00e5ff' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !array.length) return
    const ctx    = canvas.getContext('2d')
    const W      = canvas.width
    const H      = canvas.height
    const maxVal = Math.max(...array, 1)
    const barW   = (W - (array.length + 1) * 2) / array.length

    ctx.clearRect(0, 0, W, H)

    // Background grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.03)'
    ctx.lineWidth   = 1
    for (let y = H; y > 0; y -= 30) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
    }

    array.forEach((val, i) => {
      const x       = 2 + i * (barW + 2)
      const barH    = (val / maxVal) * (H - 20)
      const y       = H - barH
      const isHigh  = highlightIdx.includes(i)
      const barColor = isHigh ? color : 'rgba(255,255,255,0.08)'

      // Bar fill
      ctx.fillStyle = barColor
      ctx.beginPath()
      ctx.roundRect(x, y, barW, barH, [3, 3, 0, 0])
      ctx.fill()

      // Glow on highlighted bar
      if (isHigh) {
        ctx.shadowColor = color
        ctx.shadowBlur  = 12
        ctx.fillStyle   = color + '40'
        ctx.beginPath()
        ctx.roundRect(x, y, barW, barH, [3, 3, 0, 0])
        ctx.fill()
        ctx.shadowBlur = 0
      }

      // Value label on top (only if bars are wide enough)
      if (barW > 18) {
        ctx.fillStyle   = isHigh ? color : 'rgba(255,255,255,0.25)'
        ctx.font        = `${Math.min(barW * 0.5, 11)}px "Share Tech Mono"`
        ctx.textAlign   = 'center'
        ctx.fillText(val, x + barW / 2, y - 4)
      }
    })
  }, [array, highlightIdx, color])

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-mono" style={{ color }}>{label}</span>
        <span className="text-xs text-arena-muted font-mono">{array.length} elements</span>
      </div>
      <canvas
        ref={canvasRef}
        width={600}
        height={180}
        className="w-full rounded-lg bg-arena-surface border border-arena-border"
      />
    </div>
  )
}
