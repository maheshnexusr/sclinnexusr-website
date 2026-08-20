import { useRef } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'

const PRODUCT_SLUGS = site.solutions.map((item) => item.to.split('/').pop())
const SOLUTION_SLUGS = site.solutionsMenu.map((item) => item.to.split('/').pop())

/**
 * Lateral direction for sibling product<->product or solution<->solution
 * navigation (e.g. EDC -> CTMS enters from the right, CTMS -> EDC from the
 * left). Any other route pair falls back to the default vertical transition.
 */
function lateralDirection(prevPath, nextPath) {
  const groups = [PRODUCT_SLUGS, SOLUTION_SLUGS]
  const prevSlug = prevPath?.split('/').pop()
  const nextSlug = nextPath?.split('/').pop()
  for (const slugs of groups) {
    const prevIndex = slugs.indexOf(prevSlug)
    const nextIndex = slugs.indexOf(nextSlug)
    if (prevIndex !== -1 && nextIndex !== -1 && prevIndex !== nextIndex) {
      return nextIndex > prevIndex ? 1 : -1
    }
  }
  return 0
}

const EASE = [0.22, 1, 0.36, 1]

const ENTER_TRANSITION = { duration: 0.65, ease: EASE }
const EXIT_TRANSITION = { duration: 0.45, ease: EASE }

function variantsFor(direction) {
  if (direction === 0) {
    return {
      initial: { opacity: 0, y: 25 },
      animate: { opacity: 1, y: 0, transition: ENTER_TRANSITION },
      exit: { opacity: 0, y: -20, scale: 0.99, transition: EXIT_TRANSITION },
    }
  }
  const x = direction > 0 ? 36 : -36
  return {
    initial: { opacity: 0, x },
    animate: { opacity: 1, x: 0, transition: ENTER_TRANSITION },
    exit: { opacity: 0, x: -x, scale: 0.99, transition: EXIT_TRANSITION },
  }
}

/**
 * Renders the current route's element (via useOutlet) inside an
 * AnimatePresence-managed wrapper keyed by pathname, so navigating away
 * plays an exit transition on the old page before the new one enters.
 * Lives inside the persistent layout shell (Header/Footer stay mounted and
 * untouched by this — only the routed content transitions).
 */
export function AnimatedOutlet() {
  const location = useLocation()
  const outlet = useOutlet()
  const reduced = useReducedMotion()
  const prevPathRef = useRef(location.pathname)

  const direction = lateralDirection(prevPathRef.current, location.pathname)
  prevPathRef.current = location.pathname

  if (reduced) return outlet

  const variants = variantsFor(direction)

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={location.pathname} initial={variants.initial} animate={variants.animate} exit={variants.exit}>
        {outlet}
      </motion.div>
    </AnimatePresence>
  )
}
