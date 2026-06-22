const variants = {
  primary:  'border-arena-cyan   text-arena-cyan   bg-arena-cyan/10   hover:bg-arena-cyan/20',
  danger:   'border-arena-pink   text-arena-pink   bg-arena-pink/10   hover:bg-arena-pink/20',
  success:  'border-arena-green  text-arena-green  bg-arena-green/10  hover:bg-arena-green/20',
  ghost:    'border-arena-border text-arena-text   bg-transparent     hover:bg-arena-surface',
}

export default function Button({ children, variant = 'primary', onClick, disabled, className = '', type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-5 py-2.5 rounded-lg border text-sm font-medium font-sans
        transition-all duration-200 active:scale-95
        disabled:opacity-40 disabled:cursor-not-allowed
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </button>
  )
}
