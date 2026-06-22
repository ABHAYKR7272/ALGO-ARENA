const colors = {
  cyan:   'bg-arena-cyan/10   border-arena-cyan/30   text-arena-cyan',
  pink:   'bg-arena-pink/10   border-arena-pink/30   text-arena-pink',
  green:  'bg-arena-green/10  border-arena-green/30  text-arena-green',
  purple: 'bg-arena-purple/10 border-arena-purple/30 text-arena-purple',
  yellow: 'bg-arena-yellow/10 border-arena-yellow/30 text-arena-yellow',
}

export default function Badge({ children, color = 'cyan', className = '' }) {
  return (
    <span className={`
      inline-flex items-center px-2.5 py-0.5 rounded-full
      text-xs font-mono border ${colors[color]} ${className}
    `}>
      {children}
    </span>
  )
}
