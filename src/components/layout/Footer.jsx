import { Link } from 'react-router-dom'
import { Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import { site } from '../../content/site'
import { Logo } from './Logo'

const socials = [
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'X (Twitter)', icon: Twitter, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
]

function FooterLink({ to, children }) {
  const cls =
    'text-sm text-navy-300 transition-colors hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded'
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
    <footer className="border-t border-navy-800 bg-navy-950">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              {footer.description}
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-300 transition-colors hover:border-primary-600 hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <p className="text-sm font-semibold text-white">{column.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink to={link.to}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="text-sm font-semibold text-white">Get in Touch</p>
            <ul className="mt-4 space-y-3 text-sm text-navy-300">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="rounded transition-colors hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                >
                  {footer.contact.email}
                </a>
              </li>
              {footer.contact.phones.map((phone) => (
                <li key={phone} className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                  <span>{phone}</span>
                </li>
              ))}
              {footer.contact.offices.map((office) => (
                <li key={office} className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                  <span>{office}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-6 sm:flex-row">
          <p className="text-xs text-navy-400">
            © 2026 SclinNexus Pvt. Ltd. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {footer.legal.map((item) => (
              <li key={item.label}>
                <a
                  href={item.to}
                  className="rounded text-xs text-navy-400 transition-colors hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
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
