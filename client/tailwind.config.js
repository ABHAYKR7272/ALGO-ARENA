/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        arena: {
          bg:      '#04080f',
          surface: '#080f1c',
          card:    '#0b1525',
          border:  '#112240',
          cyan:    '#00e5ff',
          purple:  '#9b59ff',
          pink:    '#ff2d78',
          green:   '#00ff88',
          orange:  '#ff7b00',
          yellow:  '#ffe600',
        }
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        display: ['Orbitron', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%':   { boxShadow: '0 0 5px #00e5ff33' },
          '100%': { boxShadow: '0 0 20px #00e5ff66, 0 0 40px #00e5ff22' }
        }
      }
    }
  },
  plugins: []
}
