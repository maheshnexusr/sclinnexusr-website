import { motion, useReducedMotion } from 'framer-motion'

const OFFSETS = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 32 },
  right: { x: -32 },
}

/**
 * Scroll-triggered entrance, played once. `direction` picks which axis the
 * content settles in from (default "up", the site-wide baseline); `scale`
 * adds a subtle zoom-in for sections that want a slightly stronger entrance
 * (e.g. hero). Distance can be overridden per-call for larger/smaller moves.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.55,
  direction = 'up',
  distance,
  scale,
  className,
}) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>

  const base = OFFSETS[direction] ?? OFFSETS.up
  const offset = distance != null ? { x: base.x && Math.sign(base.x) * distance, y: base.y && Math.sign(base.y) * distance } : base

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset, ...(scale != null ? { scale } : {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0, ...(scale != null ? { scale: 1 } : {}) }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
