import mongoose from 'mongoose'

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('[DB] MongoDB connected')
  } catch (err) {
    console.error('[DB] Connection failed:', err.message)
    process.exit(1)
  }
}

// Player schema
const playerSchema = new mongoose.Schema({
  username:  { type: String, required: true, unique: true, trim: true, uppercase: true },
  xp:        { type: Number, default: 0 },
  wins:      { type: Number, default: 0 },
  losses:    { type: Number, default: 0 },
  badge:     { type: String, default: 'Newcomer' },
  joinedAt:  { type: Date,   default: Date.now },
})

playerSchema.methods.addXP = function(amount) {
  this.xp += amount
  // Auto-badge upgrades
  if (this.xp >= 5000) this.badge = 'Legend'
  else if (this.xp >= 2000) this.badge = 'Master'
  else if (this.xp >= 1000) this.badge = 'Expert'
  else if (this.xp >= 300)  this.badge = 'Warrior'
  return this.save()
}

export const Player   = mongoose.model('Player', playerSchema)
export default connect
