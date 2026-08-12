import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { getIcon } from '../../utils/icons'
import { Reveal } from '../ui/Reveal'

const positions = [
  'left-1/2 top-0 -translate-x-1/2',
  'right-0 top-1/2 -translate-y-1/2',
  'bottom-0 left-1/2 -translate-x-1/2',
  'left-0 top-1/2 -translate-y-1/2',
]

function TraceabilityVisual({ satellites }) {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-md">
      {/* orbital rings */}
      <div className="absolute inset-[15%] rounded-full border border-dashed border-primary-600/30" />
      <div className="absolute inset-[30%] rounded-full border border-primary-600/15" />

      {/* center shield */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#1A2831] shadow-[0_0_0_10px_rgba(29,191,97,0.12),0_16px_40px_-12px_rgba(17,27,34,0.4)]">
          <ShieldCheck className="h-11 w-11 text-primary-600" />
        </div>
      </div>

      {/* satellites */}
      {satellites.map((item, index) => {
        const Icon = getIcon(item.icon)
        return (
          <div
            key={item.title}
            className={`absolute ${positions[index]} w-40 rounded-xl border border-stone-200 bg-white px-3.5 py-3 shadow-card`}
          >
            <p className="flex items-center gap-2 text-sm font-semibold text-navy-900">
              <Icon className="h-4 w-4 shrink-0 text-primary-700" />
              {item.title}
            </p>
            <p className="mt-0.5 pl-6 text-xs text-stone-500">{item.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export function ComplianceSpotlight({ content }) {
  return (
    <section className="border-y border-primary-100 bg-primary-50/60 py-14 lg:py-16">
      <div className="mx-auto grid max-w-content items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <TraceabilityVisual satellites={content.satellites} />
          {/* accessible summary of the visual */}
          <ul className="sr-only">
            {content.satellites.map((item) => (
              <li key={item.title}>
                {item.title}: {item.body}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
            Compliance & Traceability
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-stone-600">{content.sub}</p>
          <ul className="mt-7 space-y-3.5">
            {content.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-700">
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-primary-600"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to={content.cta.to}
            className="group mt-8 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            {content.cta.label}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
