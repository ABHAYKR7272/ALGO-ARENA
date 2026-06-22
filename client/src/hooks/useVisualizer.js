import { useState, useCallback, useRef } from 'react'
import { sleep } from '../utils/helpers'

export const useVisualizer = () => {
  const [array,        setArray]        = useState([])
  const [currentStep,  setCurrentStep]  = useState(0)
  const [isPlaying,    setIsPlaying]    = useState(false)
  const [speed,        setSpeed]        = useState(300) // ms per step
  const [highlightIdx, setHighlightIdx] = useState([])
  const playRef = useRef(false)

  const loadSteps = useCallback((steps, initialArray) => {
    setArray(initialArray)
    setCurrentStep(0)
    setIsPlaying(false)
    playRef.current = false
  }, [])

  const play = useCallback(async (steps) => {
    if (!steps?.length) return
    setIsPlaying(true)
    playRef.current = true

    for (let i = currentStep; i < steps.length; i++) {
      if (!playRef.current) break
      const step = steps[i]
      setCurrentStep(i)
      setHighlightIdx(step.indices || [])
      if (step.array) setArray(step.array)
      await sleep(speed)
    }

    setIsPlaying(false)
    playRef.current = false
  }, [currentStep, speed])

  const pause  = useCallback(() => { playRef.current = false; setIsPlaying(false) }, [])
  const reset  = useCallback(() => { setCurrentStep(0); setHighlightIdx([]); pause() }, [pause])

  return {
    array, currentStep, isPlaying, speed,
    highlightIdx, setSpeed, loadSteps, play, pause, reset,
  }
}
