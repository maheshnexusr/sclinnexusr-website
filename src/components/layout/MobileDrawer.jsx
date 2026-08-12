import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { site } from '../../content/site'
import { getIcon } from '../../utils/icons'

export function MobileDrawer({ open, onClose }) {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-stone-900/60 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={reduced ? { duration: 0 } : { duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <motion.nav
            aria-label="Mobile"
            className="ml-auto flex h-full w-80 max-w-[85vw] flex-col overflow-y-auto bg-white p-6"
            initial={reduced ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={reduced ? undefined : { x: '100%' }}
            transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">Menu</p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-md p-1 text-stone-500 hover:text-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-stone-400">
              Solutions
            </p>
            <ul className="mt-2 space-y-1">
              {site.solutions.map((solution) => {
                const Icon = getIcon(solution.icon)
                return (
                  <li key={solution.name}>
                    <Link
                      to={solution.to}
                      onClick={onClose}
                      className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-stone-700 hover:bg-stone-50 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                    >
                      <Icon className="h-4 w-4 text-primary-700" aria-hidden="true" />
                      <span className="text-sm font-medium">{solution.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 border-t border-stone-200 pt-4">
              <ul className="space-y-1">
                {site.nav
                  .filter((item) => !item.megaMenu)
                  .map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="block rounded-lg px-2 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
