import { useRef } from 'react'
import { useScroll } from 'framer-motion'

/** Scroll progress of `ref`'s element through the viewport, for scroll-linked (not once-triggered) motion. */
export function useScrollProgress(offset = ['start end', 'end start']) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset, layoutEffect: false })
  return { ref, scrollYProgress }
}
