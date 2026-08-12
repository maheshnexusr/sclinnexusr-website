import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export function useCountUp(target, { duration = 1500, start = true } = {}) {
  const reduced = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    if (reduced) {
      setValue(target)
      return
    }
    let frame
    const t0 = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration, start, reduced])

  return value
}
