import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, Menu, Search } from 'lucide-react'
import { site } from '../../content/site'
import { useClickOutside } from '../../hooks/useClickOutside'
import { Button } from '../ui/Button'
import { Logo } from './Logo'
import { MegaMenu } from './MegaMenu'
import { MobileDrawer } from './MobileDrawer'
import { cn } from '../../utils/cn'

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [query, setQuery] = useState('')
  const headerRef = useRef(null)

  useClickOutside(headerRef, () => {
    setMegaOpen(false)
    setSearchOpen(false)
  })

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMegaOpen(false)
        setSearchOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const navLinkCls =
    'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-navy-800 transition-colors hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600'

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur"
    >
      <div className="relative mx-auto flex h-16 max-w-content items-center gap-4 px-6 lg:px-8">
        <Link
          to="/"
          aria-label="SclinNexus home"
          className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
        >
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden flex-1 lg:block">
          <ul className="flex justify-center">
            {site.nav.map((item) =>
              item.megaMenu ? (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={megaOpen}
                    onClick={() => {
                      setMegaOpen((open) => !open)
                      setSearchOpen(false)
                    }}
                    className={cn(navLinkCls, megaOpen && 'text-primary-700')}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn('h-4 w-4 transition-transform', megaOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ) : (
                <li key={item.label}>
                  <a href={item.href} className={navLinkCls}>
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1.5 lg:ml-0">
          <button
            type="button"
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => {
              setSearchOpen((open) => !open)
              setMegaOpen(false)
            }}
            className="rounded-lg p-2 text-stone-600 transition-colors hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <a
            href={site.appUrl}
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-navy-800 transition-colors hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 md:inline-flex"
          >
            Sign In
          </a>
          <Button href="/request-demo" className="group hidden sm:inline-flex">
            Request a Demo
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
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

        <AnimatePresence>{megaOpen && <MegaMenu onNavigate={() => setMegaOpen(false)} />}</AnimatePresence>

        {searchOpen && (
          <div className="absolute right-6 top-full mt-2 w-80 max-w-[calc(100vw-3rem)] rounded-xl border border-stone-200 bg-white p-4 shadow-card lg:right-8">
            <label htmlFor="site-search" className="text-sm font-medium text-stone-700">
              Search the site
            </label>
            <input
              id="site-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Products, resources, articles…"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            />
            <p className="mt-2 text-xs text-stone-500">
              Search is limited in this preview build.
            </p>
          </div>
        )}
      </div>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  )
}
