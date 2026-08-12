import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

/** Shared hero for company/contact pages: light green wash, centered type. */
export function PageHero({ eyebrow, title, sub, primaryCta, secondaryCta }) {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-primary-50/70 to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(29,191,97,0.08),transparent_70%)]"
      />
      <Reveal className="relative mx-auto max-w-3xl px-6 pb-14 pt-16 text-center lg:pb-16 lg:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#1A2831] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {sub && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">{sub}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {primaryCta && (
              <Button size="lg" href={primaryCta.href} to={primaryCta.to} className="group">
                {primaryCta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            )}
            {secondaryCta && (
              <Button
                size="lg"
                variant="secondary"
                href={secondaryCta.href}
                to={secondaryCta.to}
                className="group bg-white"
              >
                {secondaryCta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            )}
          </div>
        )}
      </Reveal>
    </section>
  )
}
