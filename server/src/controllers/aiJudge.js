import Groq from 'groq-sdk'

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

export const callAIJudge = async ({ player1, player2, algoId1, algoId2, steps1, steps2 }) => {
  const prompt = `You are an expert DSA judge for ALGO ARENA, a competitive programming platform.

Two players just completed a sorting battle:

Player 1: ${player1}
- Algorithm: ${algoId1}
- Total steps: ${steps1}

Player 2: ${player2}
- Algorithm: ${algoId2}
- Total steps: ${steps2}

Analyze their performance. Consider:
1. Algorithm efficiency (time complexity)
2. Number of steps taken
3. Suitability of chosen algorithm

Respond ONLY with a JSON object, no extra text:
{
  "winner": "<player1_username or player2_username or DRAW>",
  "reason": "<1-2 sentences explaining why this player won, mentioning algorithm names and step counts>",
  "player1Analysis": "<brief analysis of player1 approach>",
  "player2Analysis": "<brief analysis of player2 approach>",
  "tip": "<one actionable tip for the losing player>"
}`

  try {
    const response = await groq.chat.completions.create({
      model: 'llama3-8b-8192',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 300,
    })

    const text = response.choices[0]?.message?.content?.trim()
    const clean = text.replace(/```json|```/g, '').trim()
    return JSON.parse(clean)

  } catch (err) {
    console.error('[AI Judge] Error:', err.message)
    // Fallback: simple step-count comparison
    const winner = steps1 < steps2 ? player1 : steps2 < steps1 ? player2 : 'DRAW'
    return {
      winner,
      reason: `${winner === 'DRAW' ? 'Both players' : winner} performed better with fewer steps (${Math.min(steps1, steps2)} vs ${Math.max(steps1, steps2)}).`,
      player1Analysis: `Used ${algoId1} with ${steps1} steps.`,
      player2Analysis: `Used ${algoId2} with ${steps2} steps.`,
      tip: 'Try a more efficient algorithm next time!'
    }
  }
}
