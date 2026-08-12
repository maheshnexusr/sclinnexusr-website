import { ArrowRight, MailQuestion } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

/**
 * Compact support/contact strip before the footer. Deliberately quiet:
 * one horizontal row on desktop, a short stack on mobile.
 */
export function SupportStrip({ content }) {
  return (
    <section className="bg-white py-12 lg:py-14">
      <Reveal className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex flex-col gap-5 rounded-2xl border border-primary-700/10 bg-primary-50/50 px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600/10 text-primary-700">
              <MailQuestion className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-navy-900">{content.title}</p>
              <p className="text-sm text-stone-500">{content.sub}</p>
            </div>
          </div>

          <span aria-hidden="true" className="hidden h-9 w-px bg-primary-700/10 lg:block" />

          <a
            href={`mailto:${content.email}`}
            className="rounded font-semibold text-primary-700 transition-colors hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            {content.email}
          </a>

          <span aria-hidden="true" className="hidden h-9 w-px bg-primary-700/10 lg:block" />

          <a
            href={`mailto:${content.email}`}
            className="group inline-flex items-center gap-1.5 rounded text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            {content.cta.label}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
