import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Menu } from 'lucide-react'
import { site } from '../../content/site'
import { getIcon } from '../../utils/icons'
import { useClickOutside } from '../../hooks/useClickOutside'
import { Button } from '../ui/Button'
import { Logo } from './Logo'
import { MobileDrawer } from './MobileDrawer'
import { cn } from '../../utils/cn'

const navLinkCls =
  'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-[#24344F] transition-colors hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600'

function DropdownPanel({ children, wide = false }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? undefined : { opacity: 0, y: -6 }}
      transition={{ duration: 0.16, ease: 'easeOut' }}
      className={cn(
        'absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 rounded-2xl border border-stone-200 bg-white p-3 shadow-card',
        wide ? 'w-[34rem] max-w-[calc(100vw-2rem)]' : 'w-80 max-w-[calc(100vw-2rem)]',
      )}
    >
      {children}
    </motion.div>
  )
}

function MenuItem({ to, icon, title, desc, onNavigate }) {
  const Icon = getIcon(icon)
  const inner = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-[#0B1730]">{title}</span>
        <span className="mt-0.5 block truncate text-xs text-stone-500">{desc}</span>
      </span>
    </>
  )
  const cls =
    'flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-primary-50/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600'
  if (to && to !== '#') {
    return (
      <Link to={to} onClick={onNavigate} className={cls}>
        {inner}
      </Link>
    )
  }
  return (
    <a href="#" onClick={onNavigate} className={cls}>
      {inner}
    </a>
  )
}

export function Header() {
  const [openMenu, setOpenMenu] = useState(null) // 'platform' | 'company' | null
  const [drawerOpen, setDrawerOpen] = useState(false)
  const headerRef = useRef(null)

  useClickOutside(headerRef, () => setOpenMenu(null))

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpenMenu(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpenMenu(null)

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex h-[72px] max-w-content items-center gap-4 px-6 lg:px-8">
        <Link
          to="/"
          aria-label="ProEDC home"
          onClick={close}
          className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
        >
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden flex-1 lg:block">
          <ul className="flex justify-center">
            {site.nav.map((item) =>
              item.menu ? (
                <li key={item.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={openMenu === item.menu}
                    onClick={() => setOpenMenu((m) => (m === item.menu ? null : item.menu))}
                    className={cn(navLinkCls, openMenu === item.menu && 'text-primary-700')}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        openMenu === item.menu && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence>
                    {openMenu === item.menu && item.menu === 'platform' && (
                      <DropdownPanel wide>
                        <p className="px-3 pb-1 pt-1.5 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
                          Platform
                        </p>
                        <div className="grid sm:grid-cols-2">
                          {site.solutions.map((solution) => (
                            <MenuItem
                              key={solution.name}
                              to={solution.to}
                              icon={solution.icon}
                              title={solution.name}
                              desc={solution.short}
                              onNavigate={close}
                            />
                          ))}
                        </div>
                      </DropdownPanel>
                    )}
                    {openMenu === item.menu && item.menu === 'solutions' && (
                      <DropdownPanel>
                        <p className="px-3 pb-1 pt-1.5 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
                          Solutions
                        </p>
                        <div>
                          {site.solutionsMenu.map((entry) => (
                            <MenuItem
                              key={entry.name}
                              to={entry.to}
                              icon={entry.icon}
                              title={entry.name}
                              desc={entry.short}
                              onNavigate={close}
                            />
                          ))}
                        </div>
                      </DropdownPanel>
                    )}
                    {openMenu === item.menu && item.menu === 'company' && (
                      <DropdownPanel>
                        <p className="px-3 pb-1 pt-1.5 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
                          Company
                        </p>
                        <div>
                          {site.companyMenu.map((entry) => (
                            <MenuItem
                              key={entry.label}
                              to={entry.to}
                              icon={entry.icon}
                              title={entry.label}
                              desc={entry.desc}
                              onNavigate={close}
                            />
                          ))}
                        </div>
                      </DropdownPanel>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.label}>
                  <Link to={item.href} onClick={close} className={navLinkCls}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1.5 lg:ml-0">
          <Link
            to="/signin"
            onClick={close}
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-[#24344F] transition-colors hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 md:inline-flex"
          >
            Sign In
          </Link>
          <Button to="/request-demo" onClick={close} className="hidden sm:inline-flex">
            Request a Demo
          </Button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            className="rounded-lg p-2 text-stone-600 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  )
}
