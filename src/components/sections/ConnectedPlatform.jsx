import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { getIcon } from '../../utils/icons'
import { Reveal } from '../ui/Reveal'
import { Badge } from '../ui/Badge'

function EdcMiniForm() {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-stone-200 bg-white p-4 shadow-card"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-navy-900">Visit 3 — Vitals eCRF</p>
        <span className="rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-semibold text-primary-700 ring-1 ring-inset ring-primary-600/25">
          In progress
        </span>
      </div>
      <div className="mt-3 space-y-2.5">
        {[
          { label: 'Systolic BP (mmHg)', value: '118', ok: true },
          { label: 'Diastolic BP (mmHg)', value: '76', ok: true },
          { label: 'Heart rate (bpm)', value: '64', ok: true },
        ].map((field) => (
          <div key={field.label} className="flex items-center gap-3">
            <span className="w-36 shrink-0 text-[11px] text-stone-500">{field.label}</span>
            <span className="flex-1 rounded-md border border-stone-200 bg-stone-50 px-2.5 py-1.5 text-[11px] font-medium text-navy-900">
              {field.value}
            </span>
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary-600" />
          </div>
        ))}
      </div>
      <p className="mt-3 flex items-center gap-1.5 rounded-lg bg-primary-50 px-2.5 py-2 text-[11px] font-medium text-primary-800">
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary-600" />
        3 of 3 edit checks passed at entry
      </p>
    </div>
  )
}

/** Vertical + horizontal connector between the EDC card and the supporting products. */
function Connector() {
  return (
    <div aria-hidden="true" className="relative hidden h-14 lg:block">
      <div className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-primary-600/50" />
      <div className="absolute left-[10%] right-[10%] top-7 h-px bg-primary-600/50" />
      {[10, 30, 50, 70, 90].map((left) => (
        <div key={left} style={{ left: `${left}%` }} className="absolute top-7">
          <div className="h-7 w-px bg-primary-600/50" />
          <div className="absolute -top-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary-600" />
        </div>
      ))}
    </div>
  )
}

export function ConnectedPlatform({ content, solutions }) {
  const [edc, ...rest] = solutions
  const EdcIcon = getIcon(edc.icon)

  return (
    <section id="platform" className="scroll-mt-20 bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Badge icon="workflow">The Platform</Badge>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            {content.titleLead}
            <br />
            {content.titleTail}
          </h2>
          <p className="mt-5 text-lg text-stone-600">{content.sub}</p>
        </Reveal>

        {/* EDC — the core product, visually dominant */}
        <Reveal className="mt-11">
          <div className="group relative overflow-hidden rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50/80 via-white to-white p-7 transition-colors duration-300 hover:border-primary-600 sm:p-9 lg:p-10">
            <div className="grid items-center gap-9 lg:grid-cols-[1.15fr_1fr]">
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-card">
                    <EdcIcon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary-700">
                      Core product
                    </p>
                    <h3 className="text-xl font-semibold text-navy-900 sm:text-2xl">
                      {edc.name} — Electronic Data Capture
                    </h3>
                  </div>
                </div>
                <p className="mt-4 max-w-xl text-stone-600">{edc.tagline}</p>
                <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {content.edcHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary-600"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={edc.to}
                  className="mt-6 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                >
                  Explore EDC
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <EdcMiniForm />
            </div>
          </div>
        </Reveal>

        {/* Connection into the surrounding products */}
        <Connector />

        <Reveal>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-0 lg:grid-cols-5">
            {rest.map((solution) => {
              const Icon = getIcon(solution.icon)
              const inner = (
                <>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-navy-900">{solution.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-stone-500">
                    {solution.tagline}
                  </p>
                </>
              )
              const cardCls =
                'group block h-full rounded-xl border border-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-600 hover:bg-white hover:shadow-card'
              return (
                <li key={solution.name} className="h-full">
                  {solution.to !== '#' ? (
                    <Link
                      to={solution.to}
                      className={`${cardCls} focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600`}
                    >
                      {inner}
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary-700">
                        Learn more
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                        <span className="sr-only"> about {solution.name}</span>
                      </span>
                    </Link>
                  ) : (
                    <div className={cardCls}>{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
