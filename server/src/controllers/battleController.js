import { execFile } from 'child_process'
import { promisify } from 'util'
import path from 'path'
import { fileURLToPath } from 'url'

const execFileAsync = promisify(execFile)
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ENGINE_PATH = path.join(__dirname, '../../cpp/engine/runner')

// Generate random array
const randomArray = (size = 20) =>
  Array.from({ length: size }, () => Math.floor(Math.random() * 95) + 5)

// Run C++ DSA engine — returns steps array
export const runAlgorithm = async (algoId, size = 20) => {
  const arr = randomArray(size)
  try {
    const { stdout } = await execFileAsync(ENGINE_PATH, [algoId, JSON.stringify(arr)], {
      timeout: 5000
    })
    const steps = JSON.parse(stdout.trim())
    if (steps.error) throw new Error(steps.error)
    return { steps, initialArray: arr }
  } catch (err) {
    // Fallback: JS implementation if C++ not compiled yet
    console.warn('[Engine] C++ not available, using JS fallback:', err.message)
    return runAlgorithmJS(algoId, arr)
  }
}

// JS fallback (identical logic to C++ — for dev without compiler)
const runAlgorithmJS = (algoId, arr) => {
  const a = [...arr]
  const steps = []

  if (algoId === 'bubble_sort') {
    for (let i = 0; i < a.length - 1; i++) {
      let swapped = false
      for (let j = 0; j < a.length - i - 1; j++) {
        steps.push({ type: 'compare', indices: [j, j+1], array: [...a] })
        if (a[j] > a[j+1]) {
          ;[a[j], a[j+1]] = [a[j+1], a[j]]
          swapped = true
          steps.push({ type: 'swap', indices: [j, j+1], array: [...a] })
        }
      }
      steps.push({ type: 'sorted', indices: [a.length-1-i], array: [...a] })
      if (!swapped) break
    }
  }

  if (algoId === 'merge_sort') {
    const mergeSortJS = (arr, l, r) => {
      if (l >= r) return
      const m = Math.floor((l + r) / 2)
      mergeSortJS(arr, l, m)
      mergeSortJS(arr, m+1, r)
      const left  = arr.slice(l, m+1)
      const right = arr.slice(m+1, r+1)
      let i=0, j=0, k=l
      while (i < left.length && j < right.length) {
        steps.push({ type: 'compare', indices: [l+i, m+1+j], array: [...arr] })
        if (left[i] <= right[j]) arr[k++] = left[i++]
        else                     arr[k++] = right[j++]
        steps.push({ type: 'merge', indices: [k-1], array: [...arr] })
      }
      while (i < left.length)  arr[k++] = left[i++]
      while (j < right.length) arr[k++] = right[j++]
    }
    mergeSortJS(a, 0, a.length-1)
  }

  return { steps, initialArray: arr }
}
