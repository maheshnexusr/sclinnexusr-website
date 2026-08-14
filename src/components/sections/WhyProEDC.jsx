import { ArrowRight } from 'lucide-react'
import { getIcon } from '../../utils/icons'
import { Reveal } from '../ui/Reveal'
import { cn } from '../../utils/cn'
import logoSrc from '../../assets/logo/proedc-mark.png'

/** Central hub: the connected ProEDC study record. */
function Hub({ content }) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* soft brand halo */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full bg-primary-600/10 blur-3xl"
      />
      <div className="relative rounded-3xl border border-navy-800 bg-navy-900 p-8 text-center shadow-[0_0_0_8px_rgba(8,120,249,0.08),0_24px_64px_-24px_rgba(6,18,38,0.5)]">
        <img src={logoSrc} alt="" aria-hidden="true" className="mx-auto h-14 w-14 object-contain" />
        <p className="mt-4 text-lg font-semibold tracking-tight text-white">{content.title}</p>
        <p className="mt-1 text-sm text-navy-300">{content.caption}</p>
        <ul className="mt-6 grid grid-cols-3 gap-2">
          {content.products.map((name, index) => (
            <li
              key={name}
              className={cn(
                'rounded-lg px-2 py-2 text-[11px] font-semibold',
                index === 0
                  ? 'bg-primary-600/15 text-primary-600 ring-1 ring-inset ring-primary-600/40'
                  : 'bg-navy-800 text-navy-200',
              )}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ValueItem({ item, side }) {
  const Icon = getIcon(item.icon)
  /* Connection line towards the hub (desktop only). The dot marks the hub end. */
  const line = (
    <span
      aria-hidden="true"
      className="relative hidden h-px w-14 shrink-0 self-center bg-primary-200 transition-colors duration-300 group-hover:bg-primary-600 lg:block"
    >
      <span
        className={cn(
          'absolute -top-[3px] h-1.5 w-1.5 rounded-full bg-primary-300 transition-colors duration-300 group-hover:bg-primary-600',
          side === 'left' ? 'right-0' : 'left-0',
        )}
      />
    </span>
  )

  return (
    <div className="group flex items-center gap-3">
      {side === 'right' && line}
      <div className={cn('flex flex-1 gap-4', side === 'left' && 'lg:flex-row-reverse lg:text-right')}>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary-600 group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-semibold text-navy-900 transition-colors duration-300 group-hover:text-primary-800">
            {item.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{item.body}</p>
          <p className="mt-2 text-xs font-medium tracking-wide text-primary-700/70 transition-colors duration-300 group-hover:text-primary-700">
            {item.meta}
          </p>
        </div>
      </div>
      {side === 'left' && line}
    </div>
  )
}

/**
 * Editorial "Why ProEDC?" section: a central connected study record with
 * six value propositions radiating from it. Vertical sequence on mobile.
 */
export function WhyProEDC({ content }) {
  const left = content.items.slice(0, 3)
  const right = content.items.slice(3)

  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-16">
      {/* very subtle blue background shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_50%_45%,rgba(8,120,249,0.05),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-content px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 text-lg text-stone-600">{content.sub}</p>
        </Reveal>

        {/* Desktop: hub-and-spoke */}
        <Reveal className="mt-16 hidden lg:block">
          <div className="grid grid-cols-[1fr_minmax(20rem,24rem)_1fr] items-center gap-y-14">
            <div className="space-y-14">
              {left.map((item) => (
                <ValueItem key={item.title} item={item} side="left" />
              ))}
            </div>
            <Hub content={content.hub} />
            <div className="space-y-14">
              {right.map((item) => (
                <ValueItem key={item.title} item={item} side="right" />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Mobile / tablet: vertical sequence */}
        <div className="mt-12 lg:hidden">
          <Reveal>
            <Hub content={content.hub} />
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {content.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <ValueItem item={item} side="right" />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <Reveal className="mt-16 text-center lg:mt-20">
          <p className="mx-auto max-w-xl text-xl font-medium tracking-tight text-navy-900">
            {content.closing.statement}
          </p>
          <a
            href={content.closing.cta.href}
            className="group mt-5 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            {content.closing.cta.label}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
