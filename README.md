<div align="center">

# ⚔️ ALGO ARENA

**Real-time Multiplayer DSA Battle Platform**

[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=node.js)](https://nodejs.org)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7-010101?style=flat-square&logo=socket.io)](https://socket.io)
[![C++](https://img.shields.io/badge/C++-17-00599C?style=flat-square&logo=c%2B%2B)](https://cplusplus.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-8-47A248?style=flat-square&logo=mongodb)](https://mongodb.com)

*Battle your friends. Visualize algorithms. Master DSA.*

[Live Demo](https://algo-arena.vercel.app) · [Report Bug](issues) · [Request Feature](issues)

</div>

---

## ✨ Features

- **⚔️ Real-time 1v1 Battles** — challenge friends using a 6-digit room code
- **🎬 Live Algorithm Visualizer** — watch sorting steps animate in real-time on Canvas
- **🧠 AI Judge** — Groq AI analyzes both approaches and declares a winner with explanation  
- **⚡ C++ DSA Engine** — algorithms run in compiled C++17 for microsecond-precision step tracking
- **🏆 Global Leaderboard** — XP system with automatic badge progression
- **📱 Fully Responsive** — works on mobile, tablet, and desktop

## 🏗️ Architecture

```
algo-arena/
├── client/               # React + Vite + Tailwind frontend
│   └── src/
│       ├── components/   # Battle, Lobby, Visualizer, UI
│       ├── hooks/        # useSocket, useBattle, useVisualizer
│       ├── pages/        # Home, Battle, NotFound
│       └── utils/        # constants, helpers, api
│
├── server/               # Node.js + Express + Socket.IO backend
│   ├── src/
│   │   ├── socket/       # roomManager, battleHandler
│   │   ├── controllers/  # battleController, aiJudge
│   │   └── routes/       # leaderboard, battle
│   └── cpp/
│       ├── algorithms/   # bubble_sort.cpp, merge_sort.cpp, dijkstra.cpp ...
│       └── engine/       # runner.cpp — compiled binary entry point
│
└── shared/               # constants used by both client & server
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- g++ (C++17 support)
- MongoDB Atlas account (free)
- Groq API key (free at console.groq.com)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/algo-arena.git
cd algo-arena

# 2. Install all dependencies
npm run install:all

# 3. Setup environment variables
# client/.env
VITE_SERVER_URL=http://localhost:3001

# server/.env
PORT=3001
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_groq_key
CLIENT_URL=http://localhost:5173

# 4. Build C++ engine
npm run build:cpp

# 5. Run both client and server
npm run dev
```

Open `http://localhost:5173` 🎉

## 🧪 How It Works

1. **Player 1** creates a room → gets a 6-character code
2. **Player 2** enters the code → both connected via Socket.IO
3. Both select their algorithm (Bubble Sort, Merge Sort, etc.)
4. **C++ engine** runs the algorithm → returns step-by-step JSON
5. Frontend **animates each step** on Canvas in real-time
6. **Groq AI** analyzes both approaches → declares winner with explanation
7. XP awarded → **MongoDB leaderboard** updated

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS |
| Real-time | Socket.IO 4.7 |
| Backend | Node.js, Express |
| DSA Engine | C++17 (compiled binary) |
| AI Judge | Groq API (llama3-8b) |
| Visualizer | HTML5 Canvas, D3.js |
| Database | MongoDB + Mongoose |
| Deploy | Vercel (client) + Railway (server) |

## 📦 Deployment

**Client → Vercel**
```bash
cd client && npm run build
# Push to GitHub → connect to Vercel → auto-deploys
```

**Server → Railway**
```bash
# Push server/ to GitHub → connect to Railway
# Set environment variables in Railway dashboard
# Railway auto-detects Node.js and runs npm start
```

## 📄 License

MIT © 2024 — Built with ❤️ as a Summer Training Project
