import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else        document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-arena-card border border-arena-border rounded-2xl p-6 w-full max-w-md">
        {title && (
          <h2 className="font-display text-sm font-bold text-arena-cyan tracking-widest mb-4 uppercase">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  )
}
