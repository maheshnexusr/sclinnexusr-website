import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { getIcon } from '../../utils/icons'

export function MegaMenu({ onNavigate }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="absolute inset-x-0 top-full border-b border-stone-200 bg-white shadow-card"
    >
      <div className="mx-auto grid max-w-content gap-2 px-6 py-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {site.solutions.map((solution) => {
          const Icon = getIcon(solution.icon)
          return (
            <Link
              key={solution.name}
              to={solution.to}
              onClick={onNavigate}
              className="group flex gap-4 rounded-xl p-4 transition-colors hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-stone-900 group-hover:text-primary-700">
                  {solution.name}
                </span>
                <span className="mt-0.5 block text-sm leading-snug text-stone-500">
                  {solution.tagline}
                </span>
              </span>
            </Link>
          )
        })}
      </div>
    </motion.div>
  )
}
