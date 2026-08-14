import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { site } from '../../../content/site'
import { getIcon } from '../../../utils/icons'
import { Button } from '../../ui/Button'
import { Reveal } from '../../ui/Reveal'
import { FeaturePanel, heroMocks } from '../../mockups/ProductMockups'

const NAVY = 'text-[#0B1730]'

function SectionHeading({ eyebrow, heading, sub, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-2xl font-bold tracking-tight sm:text-3xl ${NAVY}`}>{heading}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">{sub}</p>}
    </div>
  )
}

/* 01 — Hero + product UI showcase */
export function ProductHero({ content, slug }) {
  const Mock = heroMocks[slug]
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/80 via-white to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(8,120,249,0.08),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-content px-6 pb-14 pt-14 lg:px-8 lg:pt-16">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
              {content.eyebrow}
            </p>
            <h1
              className={`mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${NAVY}`}
            >
              {content.headline.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">
              {content.sub}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button to="/request-demo" size="lg" className="group">
                Request a Demo
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
              <Button href="#capabilities" variant="secondary" size="lg" className="group">
                {content.secondaryLabel}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
        </Reveal>
        {Mock && (
          <Reveal delay={0.15}>
            <div className="mx-auto mt-12 max-w-4xl">
              <Mock />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

/* 03 — Why ProEDC [product] */
export function WhySection({ content }) {
  return (
    <section className="bg-primary-50/40 py-16 lg:py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal>
          <SectionHeading heading={content.heading} sub={content.sub} />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary-700">
                  {card.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 05 — Core capabilities */
export function CapabilityGrid({ content }) {
  return (
    <section id="capabilities" className="scroll-mt-24 py-16 lg:py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal>
          <SectionHeading heading={content.heading} sub={content.sub} />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, i) => {
            const Icon = getIcon(item.icon)
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-stone-200 bg-white p-6 transition-shadow hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600/10 text-primary-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className={`mt-4 text-base font-semibold ${NAVY}`}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* 06 — Alternating detailed feature sections */
export function FeatureSplits({ features }) {
  return (
    <section className="bg-stone-50/60 py-16 lg:py-20">
      <div className="mx-auto max-w-content space-y-16 px-6 lg:space-y-20 lg:px-8">
        {features.map((feature, i) => {
          const flip = i % 2 === 1
          return (
            <Reveal key={feature.heading}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={flip ? 'lg:order-2' : ''}>
                  <h3 className={`text-xl font-bold tracking-tight sm:text-2xl ${NAVY}`}>
                    {feature.heading}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-stone-600">{feature.sub}</p>
                  <ul className="mt-6 space-y-3">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-stone-700">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-600/10 text-primary-700">
                          <Check className="h-3 w-3" aria-hidden="true" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={flip ? 'lg:order-1' : ''}>
                  <FeaturePanel panel={feature.panel} />
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

/* 07 — Product workflow timeline */
export function WorkflowTimeline({ content }) {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal>
          <SectionHeading heading={content.heading} sub={content.sub} />
        </Reveal>
        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-0 h-full w-0.5 bg-primary-600/15 lg:left-0 lg:top-[19px] lg:h-0.5 lg:w-full"
          />
          <ol className="grid gap-8 lg:grid-cols-6 lg:gap-4">
            {content.steps.map((step, i) => (
              <li key={step.title} className="relative flex gap-4 lg:block">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white ring-4 ring-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="lg:mt-4">
                  <p className={`text-sm font-semibold ${NAVY}`}>{step.title}</p>
                  {step.desc && (
                    <p className="mt-1 text-xs leading-relaxed text-stone-500">{step.desc}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* 08 — Connected platform (shared, current product highlighted) */
export function ConnectedPlatform({ currentSlug }) {
  return (
    <section className="bg-primary-50/40 py-16 lg:py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            heading="Connected by ProEDC."
            sub="Your clinical trial should not be a collection of disconnected systems. ProEDC connects the workflows that matter across the study lifecycle."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 hidden max-w-3xl flex-col items-center sm:flex">
            <span className={`rounded-full border border-primary-600/25 bg-white px-5 py-1.5 text-sm font-bold ${NAVY}`}>
              Pro<span className="text-primary-600">EDC</span>
            </span>
            <span aria-hidden="true" className="h-5 w-0.5 bg-primary-600/25" />
            <span aria-hidden="true" className="h-0.5 w-4/5 bg-primary-600/25" />
            <div aria-hidden="true" className="flex w-4/5 justify-between">
              {site.solutions.map((s) => (
                <span key={s.name} className="h-4 w-0.5 bg-primary-600/25" />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {site.solutions.map((product, i) => {
            const Icon = getIcon(product.icon)
            const slug = product.to.split('/').pop()
            const isCurrent = slug === currentSlug
            return (
              <Reveal key={product.name} delay={i * 0.04}>
                <Link
                  to={product.to}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={`flex h-full flex-col rounded-2xl border p-4 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 ${
                    isCurrent
                      ? 'border-primary-600 bg-white shadow-md shadow-primary-600/10'
                      : 'border-stone-200 bg-white/70 hover:border-primary-600/40 hover:bg-white'
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      isCurrent ? 'bg-primary-600 text-white' : 'bg-primary-600/10 text-primary-700'
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <p className={`mt-3 text-sm font-bold ${NAVY}`}>{product.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-stone-500">{product.short}</p>
                  {isCurrent && (
                    <span className="mt-2 inline-flex w-fit rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-semibold text-primary-700">
                      You are here
                    </span>
                  )}
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* 09 — Security / compliance (shared) */
const complianceItems = ['21 CFR Part 11', 'ICH-GCP', 'GDPR', 'HIPAA', 'GxP', 'Audit Trails']

export function ComplianceCompact() {
  return (
    <section className="border-y border-stone-200 bg-white py-12">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <h2 className={`text-xl font-bold tracking-tight sm:text-2xl ${NAVY}`}>
                Built for controlled clinical research.
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                Designed to support controlled, traceable clinical workflows.
              </p>
            </div>
            <ul className="flex flex-wrap justify-center gap-2.5">
              {complianceItems.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-primary-600/20 bg-primary-50/60 px-4 py-1.5 text-xs font-semibold text-primary-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* 10 — FAQ accordion */
export function FaqAccordion({ items, productName }) {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            heading="Frequently asked questions"
            sub={`Common questions about ${productName}.`}
          />
        </Reveal>
        <div className="mt-10 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                >
                  <span className={`text-sm font-semibold sm:text-base ${NAVY}`}>{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-primary-700 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-stone-600">{item.a}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* 11 — Final CTA (shared, compact) */
export function FinalCta() {
  return (
    <section className="pb-16 lg:pb-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-primary-600/15 bg-primary-50/60 px-6 py-10 text-center sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
              Ready to explore ProEDC?
            </p>
            <h2 className={`mt-3 text-2xl font-bold tracking-tight sm:text-3xl ${NAVY}`}>
              See how ProEDC can fit your clinical workflow.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base">
              Talk with our team about your study requirements and explore the platform.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button to="/request-demo" size="lg" className="group">
                Request a Demo
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
              <Button to="/contact" variant="secondary" size="lg" className="group">
                Contact Us
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
