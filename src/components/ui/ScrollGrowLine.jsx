import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'

/**
 * A connector line whose fill grows in step with scroll progress through
 * `containerRef` -- a literal progress-linked reveal (not a once-triggered
 * fade) for workflow/step diagrams. Renders a permanent faint track plus an
 * animated solid overlay that scales in from the start edge.
 */
export function ScrollGrowLine({ containerRef, className }) {
  const reduced = useReducedMotion()
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.55'],
    layoutEffect: false,
  })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <div aria-hidden="true" className={className}>
      <div className="absolute inset-0 bg-primary-600/15" />
      {!reduced && (
        <motion.div
          className="absolute inset-0 bg-primary-600"
          style={
            isDesktop
              ? { scaleX: progress, transformOrigin: 'left' }
              : { scaleY: progress, transformOrigin: 'top' }
          }
        />
      )}
    </div>
  )
}
