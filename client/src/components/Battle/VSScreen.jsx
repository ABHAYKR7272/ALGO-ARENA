import Timer from './Timer'

export default function VSScreen({ timeLeft }) {
  return (
    <div className="flex flex-col items-center justify-center px-3 gap-3 shrink-0">
      <div className="font-display text-2xl font-black text-arena-muted tracking-widest select-none">VS</div>
      <Timer timeLeft={timeLeft} />
    </div>
  )
}
