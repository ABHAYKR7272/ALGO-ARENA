import PlayerPanel from './PlayerPanel'
import VSScreen from './VSScreen'

export default function BattleRoom({ players, myArray, oppArray, myHighlight, oppHighlight, mySteps, oppSteps, myAlgo, oppAlgo, timeLeft }) {
  const me  = players[0]
  const opp = players[1]

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <PlayerPanel
          player={me}
          array={myArray}
          highlightIdx={myHighlight}
          steps={mySteps}
          algo={myAlgo}
          isYou
          color="#00e5ff"
        />
        <VSScreen timeLeft={timeLeft} />
        <PlayerPanel
          player={opp}
          array={oppArray}
          highlightIdx={oppHighlight}
          steps={oppSteps}
          algo={oppAlgo}
          isYou={false}
          color="#ff2d78"
        />
      </div>
    </div>
  )
}
