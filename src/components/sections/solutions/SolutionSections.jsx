import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { site } from '../../../content/site'
import { getIcon } from '../../../utils/icons'
import { getIllustration } from '../../../utils/illustrations'
import { Button } from '../../ui/Button'
import { Reveal } from '../../ui/Reveal'

const NAVY = 'text-[#0B1730]'

function SectionHeading({ heading, sub }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${NAVY}`}>{heading}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">{sub}</p>}
    </div>
  )
}

/** Original editorial illustration anchoring the hero — no card frame, no glow. */
function SolutionIllustration({ name }) {
  const Illustration = getIllustration(name)
  if (!Illustration) return null
  return (
    <div className="relative mx-auto max-w-md lg:mx-0">
      <span
        aria-hidden="true"
        className="pe-float absolute -left-4 top-4 h-3 w-3 rounded-full bg-primary-300/70"
      />
      <span
        aria-hidden="true"
        className="pe-float-delay absolute -right-2 bottom-8 h-2.5 w-2.5 rounded-full bg-primary-600/50"
      />
      <Illustration className="h-auto w-full" />
    </div>
  )
}

/* 01 — Hero: eyebrow, headline, description, CTAs, product-card visual */
export function SolutionHero({ content }) {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-primary-50/70 via-white to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_55%_at_50%_0%,rgba(8,120,249,0.08),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-content items-center gap-12 px-6 py-14 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
            {content.eyebrow}
          </p>
          <h1
            className={`mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${NAVY}`}
          >
            {content.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">{content.sub}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to={content.primaryCta.to} size="lg" className="group">
              {content.primaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
            <Button
              to={content.secondaryCta.to}
              variant="secondary"
              size="lg"
              className="group bg-white"
            >
              {content.secondaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <SolutionIllustration name={content.illustration} />
        </Reveal>
      </div>
    </section>
  )
}

/* 02 — Capability grid */
export function SolutionCapabilities({ content }) {
  return (
    <section className="py-16 lg:py-20">
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

/* 03 — Workflow: horizontal on desktop (column count adapts to step count),
 * a single stacked column on mobile. */
export function SolutionWorkflow({ content }) {
  const steps = content.steps
  return (
    <section className="bg-stone-50/60 py-16 lg:py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal>
          <SectionHeading heading={content.heading} sub={content.sub} />
        </Reveal>
        <div className="relative mt-12" style={{ '--sol-steps': steps.length }}>
          <style>{`
            .sol-workflow-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
            @media (min-width: 1024px) {
              .sol-workflow-grid {
                grid-template-columns: repeat(var(--sol-steps), minmax(0, 1fr));
                gap: 1rem;
              }
            }
          `}</style>
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-0 h-full w-0.5 bg-primary-600/15 lg:left-0 lg:top-[19px] lg:h-0.5 lg:w-full"
          />
          <ol className="sol-workflow-grid relative">
            {steps.map((step, i) => (
              <li key={step.title} className="relative">
                <Reveal delay={i * 0.08} className="flex gap-4 lg:block">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white ring-4 ring-stone-50 lg:ring-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="lg:mt-4">
                    <p className={`text-sm font-semibold ${NAVY}`}>{step.title}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* 04 — Cross-solution links: "One platform. Every clinical team." */
export function SolutionPlatformConnection({ currentSlug }) {
  return (
    <section className="bg-primary-50/40 py-16 lg:py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            heading="One platform. Every clinical team."
            sub="Whether you're a sponsor, CRO, site, or data manager, ProEDC connects the workflows that keep clinical trials moving."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.solutionsMenu.map((item, i) => {
            const Icon = getIcon(item.icon)
            const slug = item.to.split('/').pop()
            const isCurrent = slug === currentSlug
            return (
              <Reveal key={item.name} delay={i * 0.06}>
                <Link
                  to={item.to}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={`flex h-full flex-col rounded-2xl border p-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 ${
                    isCurrent
                      ? 'border-primary-600 bg-white shadow-md shadow-primary-600/10'
                      : 'border-stone-200 bg-white/70 hover:border-primary-600/40 hover:bg-white'
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      isCurrent ? 'bg-primary-600 text-white' : 'bg-primary-600/10 text-primary-700'
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className={`mt-4 text-base font-bold ${NAVY}`}>{item.name}</p>
                  <ul className="mt-3 space-y-1.5">
                    {item.tags.map((tag) => (
                      <li key={tag} className="flex items-center gap-2 text-xs text-stone-500">
                        <span
                          className="h-1 w-1 shrink-0 rounded-full bg-primary-600/60"
                          aria-hidden="true"
                        />
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {isCurrent && (
                    <span className="mt-3 inline-flex w-fit rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-semibold text-primary-700">
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

/* 05 — Final CTA (content-driven per page) */
export function SolutionCTA({ content }) {
  return (
    <section className="pb-16 lg:pb-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-primary-600/15 bg-primary-50/60 px-6 py-10 text-center sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
              Ready to see ProEDC in action?
            </p>
            <h2 className={`mt-3 text-2xl font-bold tracking-tight sm:text-3xl ${NAVY}`}>
              {content.heading}
            </h2>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button to={content.buttonTo} size="lg" className="group">
                {content.buttonLabel}
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
