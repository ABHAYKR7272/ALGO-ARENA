// Generate random room code
export const generateRoomCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  return Array.from({ length: 6 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join('')
}

// Format seconds to MM:SS
export const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0')
  const s = (seconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

// Sleep utility
export const sleep = (ms) => new Promise(r => setTimeout(r, ms))

// Shuffle array (for generating random problems)
export const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Generate random array for sorting visualization
export const generateRandomArray = (size = 20, min = 5, max = 100) =>
  Array.from({ length: size }, () =>
    Math.floor(Math.random() * (max - min + 1)) + min
  )

// Color by step type
export const stepColor = (type) => ({
  compare: '#00e5ff',
  swap:    '#ff2d78',
  sorted:  '#00ff88',
  pivot:   '#ffe600',
  default: '#3d5570',
}[type] || '#3d5570')
