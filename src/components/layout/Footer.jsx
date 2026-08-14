import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Youtube } from 'lucide-react'
import { site } from '../../content/site'
import { Logo } from './Logo'

const socials = [
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'X (Twitter)', icon: Twitter, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
]

function FooterLink({ to, children }) {
  const cls =
    'text-sm text-[#A9C2DB] transition-colors hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded'
  if (to && to !== '#') {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <a href={to || '#'} className={cls}>
      {children}
    </a>
  )
}

export function Footer() {
  const { footer } = site
  return (
    <footer className="border-t border-[#142642] bg-[#061226]">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A9C2DB]">
              {footer.description}
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#24344F] text-[#A9C2DB] transition-colors hover:border-primary-600 hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <p className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink to={link.to}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#142642] pt-6 sm:flex-row">
          <p className="text-xs text-[#7C97B5]">
            © 2026 ProEDC Pvt. Ltd. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {footer.legal.map((item) => (
              <li key={item.label}>
                <a
                  href={item.to}
                  className="rounded text-xs text-[#7C97B5] transition-colors hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
