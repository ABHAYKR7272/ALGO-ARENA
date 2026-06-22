import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BattleRoom from '../components/Battle/BattleRoom'
import Button from '../components/UI/Button'
import { useBattle } from '../hooks/useBattle'
import { generateRandomArray } from '../utils/helpers'
import { ALGORITHMS } from '../utils/constants'

export default function Battle() {
  const { state }  = useLocation()
  const navigate   = useNavigate()
  const { timeLeft, mySteps, oppSteps, judgment, sendStep, selectAlgo } = useBattle()

  const [myArray,    setMyArray]    = useState(() => generateRandomArray(20))
  const [oppArray,   setOppArray]   = useState(() => generateRandomArray(20))
  const [myHighlight,  setMyHL]     = useState([])
  const [oppHighlight, setOppHL]    = useState([])
  const [myAlgo,     setMyAlgo]     = useState(null)
  const [algoChosen, setAlgoChosen] = useState(false)

  if (!state?.room) { navigate('/'); return null }

  const handleAlgoSelect = (algoId) => {
    setMyAlgo(algoId)
    setAlgoChosen(true)
    selectAlgo(algoId)
  }

  return (
    <div className="grid-bg min-h-screen pt-14">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">

        {/* Algorithm selection */}
        {!algoChosen && (
          <div className="mb-6 p-4 bg-arena-card border border-arena-yellow/30 rounded-xl">
            <p className="text-xs font-mono text-arena-yellow mb-3 tracking-widest">SELECT YOUR ALGORITHM</p>
            <div className="flex flex-wrap gap-2">
              {Object.values(ALGORITHMS).filter(a => a.category === 'sorting').map(algo => (
                <button
                  key={algo.id}
                  onClick={() => handleAlgoSelect(algo.id)}
                  className="px-4 py-2 rounded-lg border border-arena-border text-sm font-mono
                             text-arena-text hover:border-arena-cyan hover:text-arena-cyan transition-all"
                >
                  {algo.name}
                  <span className="ml-2 text-arena-muted text-xs">{algo.complexity}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Battle view */}
        <BattleRoom
          players={state.players}
          myArray={myArray}
          oppArray={oppArray}
          myHighlight={myHighlight}
          oppHighlight={oppHighlight}
          mySteps={mySteps.length}
          oppSteps={oppSteps.length}
          myAlgo={myAlgo}
          oppAlgo={null}
          timeLeft={timeLeft}
        />

        {/* Judgment result */}
        {judgment && (
          <div className="mt-6 p-5 bg-arena-green/06 border border-arena-green/30 rounded-xl text-center">
            <p className="font-display text-xl font-black text-arena-green mb-2">
              🏆 {judgment.winner} WINS!
            </p>
            <p className="text-sm text-arena-text font-mono">{judgment.reason}</p>
            <Button onClick={() => navigate('/')} className="mt-4">Back to Lobby</Button>
          </div>
        )}
      </div>
    </div>
  )
}
