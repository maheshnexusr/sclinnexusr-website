import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function CtaBand({ content }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      {/* subtle green data/network pattern */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_100%,rgba(29,191,97,0.14),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <svg
          className="absolute -left-10 top-8 hidden h-44 w-56 text-primary-600/30 lg:block"
          viewBox="0 0 220 170"
          fill="none"
        >
          <path d="M10 140 L70 95 L125 115 L170 45 L210 70" stroke="currentColor" strokeWidth="1" />
          <circle cx="10" cy="140" r="3" fill="currentColor" />
          <circle cx="70" cy="95" r="3" fill="currentColor" />
          <circle cx="125" cy="115" r="3" fill="currentColor" />
          <circle cx="170" cy="45" r="3" fill="currentColor" />
          <circle cx="210" cy="70" r="3" fill="currentColor" />
        </svg>
        <svg
          className="absolute -right-8 bottom-10 hidden h-40 w-52 text-primary-600/30 lg:block"
          viewBox="0 0 220 170"
          fill="none"
        >
          <path d="M15 40 L75 80 L120 35 L175 105 L210 85" stroke="currentColor" strokeWidth="1" />
          <circle cx="15" cy="40" r="3" fill="currentColor" />
          <circle cx="75" cy="80" r="3" fill="currentColor" />
          <circle cx="120" cy="35" r="3" fill="currentColor" />
          <circle cx="175" cy="105" r="3" fill="currentColor" />
          <circle cx="210" cy="85" r="3" fill="currentColor" />
        </svg>
      </div>

      <Reveal className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[44px] lg:leading-tight">
          {content.title}
        </h2>
        <p className="mt-5 text-lg text-navy-300">{content.tagline}</p>
        <div className="mt-9">
          <Button size="lg" href={content.button.href} className="group">
            {content.button.label}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
