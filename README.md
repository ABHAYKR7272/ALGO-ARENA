<div align="center">

```
 █████╗ ██╗      ██████╗  ██████╗      █████╗ ██████╗ ███████╗███╗   ██╗ █████╗ 
██╔══██╗██║     ██╔════╝ ██╔═══██╗    ██╔══██╗██╔══██╗██╔════╝████╗  ██║██╔══██╗
███████║██║     ██║  ███╗██║   ██║    ███████║██████╔╝█████╗  ██╔██╗ ██║███████║
██╔══██║██║     ██║   ██║██║   ██║    ██╔══██║██╔══██╗██╔══╝  ██║╚██╗██║██╔══██║
██║  ██║███████╗╚██████╔╝╚██████╔╝    ██║  ██║██║  ██║███████╗██║ ╚████║██║  ██║
╚═╝  ╚═╝╚══════╝ ╚═════╝  ╚═════╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝
```

**Real-time Multiplayer DSA Battle Platform**

[![React](https://img.shields.io/badge/React-18.2-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7-010101?style=for-the-badge&logo=socket.io)](https://socket.io)
[![C++](https://img.shields.io/badge/C++-17-00599C?style=for-the-badge&logo=c%2B%2B)](https://cplusplus.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Groq](https://img.shields.io/badge/Groq-AI_Judge-FF6B00?style=for-the-badge)](https://groq.com)

*Battle your friends. Visualize algorithms. Master DSA.*

**[🚀 Live Demo](https://algo-arena.vercel.app)** · **[🐛 Report Bug](../../issues)** · **[✨ Request Feature](../../issues)**

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Local Setup](#-local-setup-step-by-step)
  - [Step 1 — Clone the Repository](#step-1--clone-the-repository)
  - [Step 2 — Install Dependencies](#step-2--install-dependencies)
  - [Step 3 — MongoDB Atlas Setup](#step-3--mongodb-atlas-setup)
  - [Step 4 — Groq API Key](#step-4--groq-api-key)
  - [Step 5 — Environment Variables](#step-5--environment-variables)
  - [Step 6 — Build C++ Engine](#step-6--build-c-engine)
  - [Step 7 — Run the Project](#step-7--run-the-project)
- [Deployment](#-deployment)
  - [Deploy Client → Vercel](#1-deploy-client--vercel)
  - [Deploy Server → Railway](#2-deploy-server--railway)
  - [Connect Client to Live Server](#3-connect-client-to-live-server)
- [How It Works](#-how-it-works)
- [API Reference](#-api-reference)
- [Algorithms Implemented](#-algorithms-implemented)
- [Troubleshooting](#-troubleshooting)

---

## 🎯 About the Project

ALGO ARENA is a **real-time multiplayer platform** where two players battle each other by solving the same DSA problem using different algorithms. The platform visualizes every step of each algorithm live on canvas, and an **AI judge** (powered by Groq) analyzes both approaches to declare a winner with a detailed explanation.

Built as a **Summer Training Project** covering the complete DSA syllabus — Arrays, Sorting, Linked Lists, Stacks, Queues, Trees, Heaps, Graphs, and more.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ⚔️ **1v1 Real-time Battle** | Challenge anyone with a 6-digit room code |
| 🎬 **Live Algorithm Visualizer** | Canvas-based step-by-step animation |
| 🧠 **Groq AI Judge** | AI analyzes approaches and explains the winner |
| ⚡ **C++ DSA Engine** | Algorithms run in compiled C++17 for precision |
| 🏆 **Global Leaderboard** | XP system with badge progression |
| 📱 **Fully Responsive** | Works on mobile, tablet, and desktop |
| 🌐 **No Login Required** | Just a username to start playing |

---

## 🛠️ Tech Stack

```
┌─────────────────────────────────────────────────────┐
│                    FRONTEND                         │
│  React 18 + Vite  │  Tailwind CSS  │  D3.js        │
│  Socket.IO Client │  Framer Motion │  Canvas API   │
├─────────────────────────────────────────────────────┤
│                    BACKEND                          │
│  Node.js + Express │  Socket.IO Server             │
│  Groq SDK          │  Mongoose                     │
├─────────────────────────────────────────────────────┤
│                  DSA ENGINE                         │
│  C++17 (compiled binary)                           │
│  bubble_sort │ merge_sort │ dijkstra │ bfs │ dfs   │
├─────────────────────────────────────────────────────┤
│                  DATABASE                           │
│  MongoDB Atlas (free tier)                         │
├─────────────────────────────────────────────────────┤
│                  DEPLOYMENT                         │
│  Vercel (client)  │  Railway (server)              │
└─────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
algo-arena/
│
├── 📄 package.json              ← Root scripts (run both client + server)
├── 📄 .gitignore                ← Git ignore rules
├── 📄 README.md                 ← This file
│
├── 📁 shared/
│   └── constants.js             ← Socket events + XP values (used by both sides)
│
├── 📁 client/                   ← React Frontend
│   ├── 📄 package.json
│   ├── 📄 vite.config.js        ← Vite + proxy config
│   ├── 📄 tailwind.config.js    ← Custom arena color tokens
│   ├── 📄 postcss.config.js
│   ├── 📄 index.html            ← Entry HTML (Google Fonts loaded here)
│   ├── 📄 vercel.json           ← Vercel SPA routing config
│   ├── 📄 .env                  ← Client environment variables
│   │
│   └── 📁 src/
│       ├── 📄 main.jsx          ← React DOM entry point
│       ├── 📄 App.jsx           ← Router setup
│       │
│       ├── 📁 components/
│       │   ├── 📁 UI/
│       │   │   ├── Button.jsx   ← Reusable button (5 variants)
│       │   │   ├── Badge.jsx    ← Color-coded badge
│       │   │   ├── Modal.jsx    ← Overlay modal
│       │   │   └── Navbar.jsx   ← Top navigation bar
│       │   │
│       │   ├── 📁 Lobby/
│       │   │   ├── Lobby.jsx    ← Tab switcher (create/join)
│       │   │   ├── CreateRoom.jsx ← Create room form
│       │   │   └── JoinRoom.jsx   ← Join with code form
│       │   │
│       │   ├── 📁 Battle/
│       │   │   ├── BattleRoom.jsx  ← Full battle layout
│       │   │   ├── PlayerPanel.jsx ← One player's side
│       │   │   ├── VSScreen.jsx    ← Center VS + timer
│       │   │   └── Timer.jsx       ← SVG countdown ring
│       │   │
│       │   ├── 📁 Visualizer/
│       │   │   └── ArrayVisualizer.jsx ← Canvas bar chart animator
│       │   │
│       │   └── 📁 Leaderboard/
│       │       ├── Leaderboard.jsx  ← Full table
│       │       └── PlayerCard.jsx   ← Single player row
│       │
│       ├── 📁 hooks/
│       │   ├── useSocket.js     ← Socket.IO connection manager
│       │   ├── useBattle.js     ← Battle state + all socket events
│       │   └── useVisualizer.js ← Animation playback (play/pause/rewind)
│       │
│       ├── 📁 pages/
│       │   ├── Home.jsx         ← Landing + lobby page
│       │   ├── Battle.jsx       ← Battle arena page
│       │   └── NotFound.jsx     ← 404 page
│       │
│       ├── 📁 utils/
│       │   ├── constants.js     ← Algorithm list, socket events
│       │   ├── helpers.js       ← formatTime, generateArray, stepColor
│       │   └── api.js           ← Axios instance + API calls
│       │
│       └── 📁 styles/
│           ├── globals.css      ← Tailwind base + CSS variables + scrollbar
│           └── animations.css   ← keyframe animations
│
└── 📁 server/                   ← Node.js Backend
    ├── 📄 package.json
    ├── 📄 .env                  ← Server environment variables
    ├── 📄 railway.json          ← Railway deploy config
    │
    ├── 📁 src/
    │   ├── 📄 index.js          ← Express app + server startup
    │   ├── 📄 db.js             ← MongoDB connection + Player schema
    │   │
    │   ├── 📁 socket/
    │   │   ├── index.js         ← Socket.IO server init
    │   │   ├── roomManager.js   ← In-memory room store (create/join/delete)
    │   │   └── battleHandler.js ← All socket event handlers
    │   │
    │   ├── 📁 controllers/
    │   │   ├── battleController.js ← Calls C++ engine, JS fallback
    │   │   └── aiJudge.js          ← Groq API integration
    │   │
    │   ├── 📁 routes/
    │   │   ├── leaderboard.js   ← GET /api/leaderboard
    │   │   └── battle.js        ← POST /api/battle/result
    │   │
    │   └── 📁 middleware/
    │       └── errorHandler.js  ← Global error + 404 handler
    │
    └── 📁 cpp/
        ├── 📁 algorithms/
        │   ├── bubble_sort.cpp  ← Bubble sort with step tracking
        │   ├── bubble_sort.h
        │   ├── merge_sort.cpp   ← Merge sort with step tracking
        │   └── merge_sort.h
        │
        └── 📁 engine/
            ├── runner.cpp       ← Main C++ entry point (stdin/stdout JSON)
            └── CMakeLists.txt   ← CMake build config
```

---

## 🔧 Prerequisites

Before starting, make sure these are installed on your computer:

| Tool | Version | Check | Download |
|------|---------|-------|----------|
| **Node.js** | 18 or above | `node --version` | [nodejs.org](https://nodejs.org) |
| **npm** | 9 or above | `npm --version` | Comes with Node.js |
| **g++ / GCC** | C++17 support | `g++ --version` | See below |
| **Git** | Any | `git --version` | [git-scm.com](https://git-scm.com) |

### Installing g++ (C++ Compiler)

**Windows:**
```bash
# Option 1: Install MinGW-w64 from https://www.mingw-w64.org/
# Option 2: Install via chocolatey
choco install mingw

# Verify
g++ --version
```

**Ubuntu / WSL:**
```bash
sudo apt update && sudo apt install g++ build-essential -y
g++ --version
```

**Mac:**
```bash
xcode-select --install
g++ --version
```

---

## 💻 Local Setup — Step by Step

### Step 1 — Clone the Repository

```bash
# Clone from GitHub
git clone https://github.com/YOUR_USERNAME/algo-arena.git

# Go into the project folder
cd algo-arena
```

> After cloning, your folder will look like this:
> ```
> algo-arena/
> ├── client/
> ├── server/
> ├── shared/
> ├── package.json
> └── README.md
> ```

---

### Step 2 — Install Dependencies

```bash
# From the ROOT folder (algo-arena/), run:
npm run install:all
```

This one command installs packages for:
- Root (`concurrently` for running both servers)
- `client/` (React, Vite, Tailwind, Socket.IO client, etc.)
- `server/` (Express, Socket.IO, Mongoose, Groq SDK, etc.)

> ⏳ This takes 1–2 minutes. You will see npm logs for all three installs.

---

### Step 3 — MongoDB Atlas Setup

You need a **free** MongoDB database. Follow these steps:

1. Go to **[mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)**
2. Click **"Try Free"** → Sign up with Google or email
3. Choose **"Free"** tier (M0 Sandbox) → Click **"Create"**
4. Choose **AWS** as provider → any region → Click **"Create Cluster"**
5. Wait ~2 minutes for cluster to deploy
6. On the left sidebar → Click **"Database Access"**
7. Click **"Add New Database User"**
   - Username: `algoarena`
   - Password: click **"Autogenerate Secure Password"** → **copy it**
   - Role: **"Atlas Admin"**
   - Click **"Add User"**
8. On the left sidebar → Click **"Network Access"**
9. Click **"Add IP Address"** → Click **"Allow Access From Anywhere"** → Confirm
10. On the left sidebar → Click **"Database"**
11. Click **"Connect"** on your cluster → **"Drivers"**
12. Copy the connection string — looks like:
    ```
    mongodb+srv://algoarena:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
    ```
13. Replace `<password>` with the password you copied in step 7

> **Save this URI** — you will need it in Step 5.

---

### Step 4 — Groq API Key

Groq is free and very fast. Follow these steps:

1. Go to **[console.groq.com](https://console.groq.com)**
2. Click **"Sign In"** → Sign up with Google
3. On the dashboard → Click **"API Keys"** in the left sidebar
4. Click **"Create API Key"**
5. Give it a name: `algo-arena`
6. Copy the key — looks like: `gsk_xxxxxxxxxxxxxxxxxxxx`

> **Save this key** — you will need it in Step 5.

---

### Step 5 — Environment Variables

You need to create two `.env` files. These files store secret keys and are **never uploaded to GitHub**.

#### File 1: `client/.env`

Open the file `client/.env` in your code editor and fill it:

```env
VITE_SERVER_URL=http://localhost:3001
VITE_APP_NAME=ALGO ARENA
```

> ✅ That's it for the client `.env` — only 2 lines needed for local development.

#### File 2: `server/.env`

Open the file `server/.env` in your code editor and fill it:

```env
PORT=3001
MONGODB_URI=mongodb+srv://algoarena:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/algo-arena?retryWrites=true&w=majority
JWT_SECRET=make_up_any_long_random_string_here_like_this_abc123xyz789
GROQ_API_KEY=gsk_your_groq_key_here
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

> ⚠️ Replace:
> - `MONGODB_URI` → your full URI from Step 3
> - `GROQ_API_KEY` → your key from Step 4
> - `JWT_SECRET` → any random string (make it long)

---

### Step 6 — Build C++ Engine

The C++ engine needs to be compiled once before running.

```bash
# From the ROOT folder (algo-arena/)
npm run build:cpp
```

This runs:
```bash
cd server && g++ -O2 -std=c++17 -o cpp/engine/runner cpp/engine/runner.cpp cpp/algorithms/bubble_sort.cpp cpp/algorithms/merge_sort.cpp
```

You should see:
```
C++ engine built ✅
```

> ℹ️ If this step fails, the server has a **JavaScript fallback** built in — so the project still runs, but without the C++ engine. You can skip this step for now and fix it later.

---

### Step 7 — Run the Project

```bash
# From the ROOT folder (algo-arena/)
npm run dev
```

This starts both servers at the same time:

| Server | URL | What it does |
|--------|-----|-------------|
| **Client** | `http://localhost:5173` | React frontend |
| **Server** | `http://localhost:3001` | Node.js backend + Socket.IO |

Open your browser and go to: **`http://localhost:5173`**

You should see the ALGO ARENA home screen! 🎉

#### Test it:
1. Open `http://localhost:5173` in **two different browser tabs**
2. Tab 1 → Enter username → **"Create Room"** → Copy the 6-digit code
3. Tab 2 → Enter username → **"Join Room"** → Paste the code
4. Battle starts! ⚔️

---

## 🌐 Deployment

### 1. Deploy Client → Vercel

Vercel hosts the React frontend for **free**.

#### Step 1 — Push to GitHub

```bash
# From ROOT folder
git init
git add .
git commit -m "feat: initial ALGO ARENA release"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/algo-arena.git
git branch -M main
git push -u origin main
```

#### Step 2 — Connect to Vercel

1. Go to **[vercel.com](https://vercel.com)** → Sign up with GitHub
2. Click **"Add New Project"**
3. Find `algo-arena` in your GitHub repos → Click **"Import"**
4. Configure:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `client` ← **Important!** Change this to `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Environment Variables"** → Add:
   ```
   VITE_SERVER_URL = https://your-railway-url.railway.app
   VITE_APP_NAME   = ALGO ARENA
   ```
   > ⚠️ Leave `VITE_SERVER_URL` empty for now — you'll fill it after deploying the server in the next step.
6. Click **"Deploy"**

> ✅ Vercel will give you a URL like: `https://algo-arena-xyz.vercel.app`

---

### 2. Deploy Server → Railway

Railway hosts the Node.js backend for **free**.

#### Step 1 — Go to Railway

1. Go to **[railway.app](https://railway.app)** → Sign up with GitHub
2. Click **"New Project"**
3. Click **"Deploy from GitHub repo"**
4. Select `algo-arena`

#### Step 2 — Configure the Service

Railway will detect your repo. You need to tell it to only run the `server/` folder:

1. After project is created → Click on the service
2. Go to **"Settings"** tab
3. Under **"Root Directory"** → type `server`
4. Under **"Start Command"** → type `npm start`
5. Click **"Save"**

#### Step 3 — Add Environment Variables

1. Click **"Variables"** tab
2. Click **"Raw Editor"** and paste:
   ```
   PORT=3001
   MONGODB_URI=mongodb+srv://algoarena:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/algo-arena
   JWT_SECRET=your_long_random_secret_string
   GROQ_API_KEY=gsk_your_groq_key_here
   CLIENT_URL=https://your-vercel-url.vercel.app
   NODE_ENV=production
   ```
3. Replace all values with your real ones
4. Click **"Update Variables"**

#### Step 4 — Deploy

1. Go to **"Deployments"** tab
2. Click **"Deploy Now"**
3. Watch the logs — you should see:
   ```
   [DB] MongoDB connected
   [Server] Running on http://localhost:3001
   ```
4. Click **"Settings"** → **"Domains"** → Copy your Railway URL

> ✅ Railway gives you a URL like: `https://algo-arena-production.railway.app`

---

### 3. Connect Client to Live Server

Now go back to **Vercel** and update the environment variable:

1. Go to **vercel.com** → Your project → **"Settings"** → **"Environment Variables"**
2. Find `VITE_SERVER_URL` → Edit it → paste your Railway URL:
   ```
   VITE_SERVER_URL = https://algo-arena-production.railway.app
   ```
3. Go to **"Deployments"** → Click **"Redeploy"** → **"Redeploy"** (confirm)

> ✅ After redeploy, your live site is fully connected!

**Test your live deployment:**
1. Open `https://your-vercel-url.vercel.app` in two browser tabs
2. Create a room in one tab, join from the other
3. If battle starts → deployment is 100% working! 🎉

---

## ⚙️ How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                     BATTLE FLOW                             │
│                                                             │
│  Player 1           Server              Player 2            │
│     │                  │                   │                │
│     │── CREATE_ROOM ──▶│                   │                │
│     │◀─ ROOM_CREATED ──│                   │                │
│     │  (code: AR74X2)  │                   │                │
│     │                  │◀── JOIN_ROOM ─────│                │
│     │                  │─── PLAYER_JOINED ▶│                │
│     │◀─ PLAYER_JOINED ─│                   │                │
│     │                  │                   │                │
│     │◀──────────── BATTLE_START ───────────│                │
│     │                  │                   │                │
│     │── ALGO_SELECTED ▶│                   │                │
│     │  (bubble_sort)   │── C++ Engine ─────│                │
│     │                  │   runs algo       │                │
│     │◀─ algo_steps ────│                   │                │
│     │  (step array)    │                   │                │
│     │                  │                   │                │
│     │── STEP_UPDATE ──▶│─── STEP_UPDATE ──▶│  (live sync)  │
│     │                  │                   │                │
│     │◀──────────── JUDGE_RESULT ───────────│                │
│     │         (Groq AI analysis)           │                │
└─────────────────────────────────────────────────────────────┘
```

---

## 📡 API Reference

### Health Check
```
GET /api/health
Response: { "status": "ok", "time": "2024-..." }
```

### Leaderboard
```
GET /api/leaderboard
Response: { "success": true, "players": [...] }

GET /api/leaderboard/:username
Response: { "success": true, "player": { username, xp, wins, losses, badge } }
```

### Battle Result
```
POST /api/battle/result
Body: { "winner": "MATRIX_99", "loser": "RAVI_07", "isDraw": false }
Response: { "success": true, "message": "Result saved" }
```

### Socket Events
```
Emit:     create_room     │ { username }
Emit:     join_room       │ { roomCode, username }
Emit:     algo_selected   │ { algoId }
Emit:     step_update     │ { step }

Listen:   room_created    │ { room, players }
Listen:   room_joined     │ { room, players }
Listen:   player_joined   │ { players }
Listen:   battle_start    │ { problem }
Listen:   algo_steps      │ { steps, initialArray }
Listen:   step_update     │ { step, isOpponent }
Listen:   judge_result    │ { winner, reason, tip }
Listen:   error           │ { message }
```

---

## 🧮 Algorithms Implemented

| Algorithm | Category | Time Complexity | Space | File |
|-----------|----------|----------------|-------|------|
| Bubble Sort | Sorting | O(n²) | O(1) | `cpp/algorithms/bubble_sort.cpp` |
| Merge Sort | Sorting | O(n log n) | O(n) | `cpp/algorithms/merge_sort.cpp` |
| BFS | Graph | O(V+E) | O(V) | `cpp/algorithms/bfs.cpp` |
| DFS | Graph | O(V+E) | O(V) | `cpp/algorithms/dfs.cpp` |
| Dijkstra | Graph | O(V log V) | O(V) | `cpp/algorithms/dijkstra.cpp` |

Each algorithm outputs a **JSON array of steps**, where each step has:
```json
{
  "type": "compare | swap | sorted | merge | visit",
  "indices": [0, 3],
  "array": [5, 12, 3, ...]
}
```

---

## ❗ Troubleshooting

### "Cannot connect to server"
- Make sure `server` is running: `cd server && npm run dev`
- Check `client/.env` — `VITE_SERVER_URL` should be `http://localhost:3001`
- Check if port 3001 is blocked by firewall

### "MongoDB connection failed"
- Check `server/.env` — `MONGODB_URI` must be correct
- In MongoDB Atlas → Network Access → make sure `0.0.0.0/0` is allowed
- Check your username/password has no special characters that need URL encoding

### "C++ engine build failed"
- Make sure `g++` is installed: `g++ --version`
- On Windows, use MinGW and make sure it's in your PATH
- The JS fallback will be used automatically if C++ fails — project still works

### "Room not found" error
- Room codes expire when both players disconnect
- Make sure Player 2 joins before Player 1 closes the tab

### Port already in use
```bash
# Kill process on port 3001 (server)
npx kill-port 3001

# Kill process on port 5173 (client)
npx kill-port 5173
```

### Vercel deployment failing
- Make sure **Root Directory** is set to `client` in Vercel settings
- Check that `vercel.json` exists inside `client/`
- Make sure `VITE_SERVER_URL` environment variable is set in Vercel

### Railway deployment failing
- Make sure **Root Directory** is set to `server` in Railway settings
- Check all environment variables are set correctly
- Check Railway logs for specific error message

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

1. Fork the repo
2. Create your branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

Built with ❤️ as a Summer Training Project

**⚔️ May the best algorithm win ⚔️**

</div>
