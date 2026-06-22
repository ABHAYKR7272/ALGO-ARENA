import express from 'express'
import { Player } from '../db.js'

const router = express.Router()

// GET /api/leaderboard — top 50 players
router.get('/', async (req, res) => {
  try {
    const players = await Player.find().sort({ xp: -1 }).limit(50).select('username xp wins losses badge')
    res.json({ success: true, players })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

// GET /api/leaderboard/:username
router.get('/:username', async (req, res) => {
  try {
    const player = await Player.findOne({ username: req.params.username.toUpperCase() })
    if (!player) return res.status(404).json({ success: false, message: 'Player not found' })
    res.json({ success: true, player })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

export default router
