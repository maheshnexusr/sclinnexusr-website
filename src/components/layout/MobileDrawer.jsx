import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import { site } from '../../content/site'
import { getIcon } from '../../utils/icons'
import { Button } from '../ui/Button'
import { cn } from '../../utils/cn'

function Group({ label, open, onToggle, children }) {
  return (
    <div className="border-b border-stone-100">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-sm font-semibold text-[#0B1730] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
      >
        {label}
        <ChevronDown
          className={cn('h-4 w-4 text-stone-400 transition-transform', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>
      {open && <ul className="space-y-0.5 pb-3">{children}</ul>}
    </div>
  )
}

function DrawerLink({ to, icon, label, onClose }) {
  const Icon = getIcon(icon)
  const cls =
    'flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600'
  const inner = (
    <>
      <Icon className="h-4 w-4 text-primary-700" aria-hidden="true" />
      {label}
    </>
  )
  return (
    <li>
      {to && to !== '#' ? (
        <Link to={to} onClick={onClose} className={cls}>
          {inner}
        </Link>
      ) : (
        <a href="#" onClick={onClose} className={cls}>
          {inner}
        </a>
      )}
    </li>
  )
}

export function MobileDrawer({ open, onClose }) {
  const reduced = useReducedMotion()
  const [openGroup, setOpenGroup] = useState('platform')

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

            <div className="mt-4">
              <Group
                label="Platform"
                open={openGroup === 'platform'}
                onToggle={() => setOpenGroup((g) => (g === 'platform' ? null : 'platform'))}
              >
                {site.solutions.map((solution) => (
                  <DrawerLink
                    key={solution.name}
                    to={solution.to}
                    icon={solution.icon}
                    label={solution.name}
                    onClose={onClose}
                  />
                ))}
              </Group>

              <Group
                label="Company"
                open={openGroup === 'company'}
                onToggle={() => setOpenGroup((g) => (g === 'company' ? null : 'company'))}
              >
                {site.companyMenu.map((entry) => (
                  <DrawerLink
                    key={entry.label}
                    to={entry.to}
                    icon={entry.icon}
                    label={entry.label}
                    onClose={onClose}
                  />
                ))}
              </Group>

              <Link
                to="/contact"
                onClick={onClose}
                className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-sm font-semibold text-[#0B1730] hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              >
                Contact
              </Link>
            </div>

            <div className="mt-auto flex flex-col gap-2.5 border-t border-stone-200 pt-5">
              <Button to="/request-demo" onClick={onClose}>
                Request a Demo
              </Button>
              <Button variant="secondary" to="/signin" onClick={onClose}>
                Sign In
              </Button>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
