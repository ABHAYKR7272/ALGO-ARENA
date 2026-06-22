import 'dotenv/config'
import express from 'express'
import http from 'http'
import cors from 'cors'
import { initSocket } from './socket/index.js'
import connectDB from './db.js'
import leaderboardRoutes from './routes/leaderboard.js'
import battleRoutes from './routes/battle.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

const app    = express()
const server = http.createServer(app)

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json())

// Routes
app.use('/api/leaderboard', leaderboardRoutes)
app.use('/api/battle',      battleRoutes)
app.get('/api/health', (_, res) => res.json({ status: 'ok', time: new Date() }))

// 404 + error handler
app.use(notFound)
app.use(errorHandler)

// Socket.IO
initSocket(server)

// Start
const PORT = process.env.PORT || 3001
const start = async () => {
  await connectDB()
  server.listen(PORT, () => {
    console.log(`[Server] Running on http://localhost:${PORT}`)
  })
}
start()
