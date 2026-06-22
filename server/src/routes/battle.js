import express from 'express'
import { Player } from '../db.js'
import { XP_WIN, XP_LOSE, XP_DRAW } from '../../shared/constants.js'

const router = express.Router()

// POST /api/battle/result — save battle result
router.post('/result', async (req, res) => {
  try {
    const { winner, loser, isDraw, player1, player2 } = req.body

    const upsert = async (username, won, draw) => {
      const xp = draw ? XP_DRAW : won ? XP_WIN : XP_LOSE
      let p = await Player.findOne({ username })
      if (!p) p = new Player({ username })
      if (won)  p.wins++
      else if (!draw) p.losses++
      await p.addXP(xp)
    }

    if (isDraw) {
      await Promise.all([upsert(player1, false, true), upsert(player2, false, true)])
    } else {
      await Promise.all([upsert(winner, true, false), upsert(loser, false, false)])
    }

    res.json({ success: true, message: 'Result saved' })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

export default router
