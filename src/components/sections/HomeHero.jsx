import { Activity, ArrowRight } from 'lucide-react'
import { getIcon } from '../../utils/icons'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { cn } from '../../utils/cn'
import { DashboardPreview } from './DashboardPreview'

/** Data-network corner motif derived from the logo geometry. */
function NetworkMotif({ className, flip = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 420"
      fill="none"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path
        d="M-20 60 L70 120 L36 210 L120 260 L84 350 L180 400"
        stroke="#1DBF61"
        strokeOpacity="0.16"
        strokeWidth="1.5"
      />
      <path
        d="M40 -10 L110 80 L210 60 L250 160 L200 240 L290 300"
        stroke="#22333F"
        strokeOpacity="0.10"
        strokeWidth="1"
      />
      {[
        [70, 120],
        [36, 210],
        [120, 260],
        [84, 350],
        [110, 80],
        [210, 60],
        [250, 160],
        [200, 240],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="4"
          fill={i % 2 === 0 ? '#1DBF61' : '#22333F'}
          fillOpacity={i % 2 === 0 ? 0.3 : 0.15}
        />
      ))}
      {/* dotted cluster */}
      {Array.from({ length: 24 }, (_, i) => (
        <circle
          key={`d-${i}`}
          cx={20 + (i % 6) * 14}
          cy={300 + Math.floor(i / 6) * 14}
          r="1.5"
          fill="#1DBF61"
          fillOpacity="0.18"
        />
      ))}
    </svg>
  )
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* light wash of the logo green across the hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/80 via-primary-50/30 to-primary-50/70" />
      <div className="absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(ellipse_55%_55%_at_50%_0%,rgba(29,191,97,0.10),transparent_70%)]" />
      {/* connected data-network motifs on the outer edges */}
      <NetworkMotif className="absolute -left-10 top-16 hidden h-[420px] w-[320px] lg:block" />
      <NetworkMotif className="absolute -right-10 top-24 hidden h-[420px] w-[320px] lg:block" flip />
    </div>
  )
}

/** Connected product strip anchoring the hero. EDC carries the strongest weight. */
function ProductStrip({ items }) {
  return (
    <ol className="mt-9 flex flex-wrap items-stretch justify-center gap-y-4 lg:flex-nowrap">
      {items.map((item, index) => {
        const Icon = getIcon(item.icon)
        return (
          <li key={item.name} className="flex items-center">
            {index > 0 && (
              <span aria-hidden="true" className="relative mx-1.5 hidden h-px w-7 bg-primary-600/40 lg:block">
                <span className="absolute -top-[2.5px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary-600/70" />
              </span>
            )}
            <span
              className={cn(
                'flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left transition-colors',
                item.featured
                  ? 'border-primary-600 bg-primary-50 shadow-[0_0_0_4px_rgba(29,191,97,0.10)]'
                  : 'border-transparent',
              )}
            >
              <span
                className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
                  item.featured
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-primary-700 ring-1 ring-stone-200',
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold leading-tight text-navy-900">
                  {item.name}
                </span>
                <span className="block max-w-[8.5rem] text-[11px] leading-snug text-stone-500">
                  {item.desc}
                </span>
              </span>
            </span>
          </li>
        )
      })}
    </ol>
  )
}

export function HomeHero({ content }) {
  return (
    <section className="relative bg-white">
      <HeroBackdrop />

      <div className="relative mx-auto max-w-content px-6 pb-16 pt-14 text-center sm:pt-16 lg:px-8 lg:pt-20">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
            <Activity className="h-4 w-4 text-primary-600" aria-hidden="true" />
            {content.eyebrow}
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-[2.4rem] font-bold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl xl:text-[66px]">
            {content.titleLead}
            <br className="hidden sm:block" /> {content.titleTail}{' '}
            <span className="text-primary-700">{content.titleAccent}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[42.5rem] text-lg leading-relaxed text-stone-600 sm:text-xl">
            {content.description}
          </p>

          {/* Product label row */}
          <ul className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5">
            {content.products.map((name, index) => (
              <li key={name} className="flex items-center gap-2.5">
                {index > 0 && (
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-primary-600" />
                )}
                <span className="text-sm font-semibold tracking-wide text-navy-800">{name}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

        {/* Product visual anchors the hero */}
        <Reveal delay={0.15} className="relative mt-12 lg:mt-14">
          <div className="relative mx-auto max-w-[1100px]">
            <div
              aria-hidden="true"
              className="absolute -inset-x-6 bottom-6 top-16 rounded-[40px] bg-primary-600/10 blur-3xl"
            />
            <DashboardPreview className="relative" />
          </div>
        </Reveal>

        {/* Connected product strip */}
        <Reveal delay={0.25}>
          <ProductStrip items={content.strip} />
        </Reveal>
      </div>
    </section>
  )
}
