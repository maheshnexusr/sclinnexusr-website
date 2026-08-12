import { Activity, ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { DashboardPreview } from './DashboardPreview'

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* faint brand glow behind the headline */}
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(29,191,97,0.09),transparent_70%)]" />
      {/* fine grid, faded towards the edges */}
      <div className="absolute inset-x-0 top-0 h-[560px] bg-[linear-gradient(to_right,rgba(34,51,63,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,51,63,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_35%,transparent_100%)]" />
      {/* connected data nodes, echoing the logo geometry */}
      <svg
        className="absolute left-[4%] top-40 hidden h-40 w-40 text-primary-600/50 xl:block"
        viewBox="0 0 160 160"
        fill="none"
      >
        <path d="M20 130 L70 84 L118 100 L146 40" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="130" r="3.5" fill="currentColor" />
        <circle cx="70" cy="84" r="3.5" fill="currentColor" />
        <circle cx="118" cy="100" r="3.5" fill="currentColor" />
        <circle cx="146" cy="40" r="3.5" fill="currentColor" />
      </svg>
      <svg
        className="absolute right-[4%] top-56 hidden h-40 w-40 text-navy-300/60 xl:block"
        viewBox="0 0 160 160"
        fill="none"
      >
        <path d="M14 44 L64 70 L104 36 L148 88" stroke="currentColor" strokeWidth="1" />
        <circle cx="14" cy="44" r="3.5" fill="currentColor" />
        <circle cx="64" cy="70" r="3.5" fill="currentColor" />
        <circle cx="104" cy="36" r="3.5" fill="currentColor" />
        <circle cx="148" cy="88" r="3.5" fill="currentColor" />
      </svg>
    </div>
  )
}

export function HomeHero({ content }) {
  return (
    <section className="relative bg-white">
      <HeroBackdrop />

      <div className="relative mx-auto max-w-content px-6 pt-16 text-center sm:pt-20 lg:px-8 lg:pt-24">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
            <Activity className="h-4 w-4 text-primary-600" aria-hidden="true" />
            {content.eyebrow}
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-[2.4rem] font-bold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl xl:text-[68px]">
            {content.titleLead}
            <br className="hidden sm:block" /> {content.titleTail}{' '}
            <span className="text-primary-700">{content.titleAccent}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[44rem] text-lg leading-relaxed text-stone-600 sm:text-xl">
            {content.description}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" href={content.primaryCta.href} className="group w-full sm:w-auto">
              {content.primaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              href={content.secondaryCta.href}
              className="group w-full bg-white sm:w-auto"
            >
              {content.secondaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
          </div>
        </Reveal>

        {/* Product visual anchors the hero and overlaps into the trust strip below */}
        <Reveal delay={0.15} className="relative z-10 -mb-14 mt-14 sm:-mb-20 lg:mt-16">
          <div className="relative mx-auto max-w-5xl">
            <div
              aria-hidden="true"
              className="absolute -inset-x-6 bottom-6 top-16 rounded-[40px] bg-primary-600/10 blur-3xl"
            />
            <DashboardPreview className="relative" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
