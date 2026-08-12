import {
  Building2,
  ClipboardList,
  Database,
  Lock,
  SearchCheck,
  UserPlus,
} from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const stepIcons = [ClipboardList, Building2, UserPlus, Database, SearchCheck, Lock]

function Node({ Icon }) {
  return (
    <span className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_0_0_6px_rgba(29,191,97,0.15)]">
      <Icon className="h-5 w-5 text-primary-700" aria-hidden="true" />
    </span>
  )
}

export function TrialJourney({ content }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      {/* subtle brand pattern */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_0%,rgba(29,191,97,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="relative mx-auto max-w-content px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-600">
            The Clinical Trial Journey
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-navy-300">{content.sub}</p>
        </Reveal>

        {/* Desktop: horizontal timeline */}
        <Reveal className="mt-16 hidden lg:block">
          <ol className="relative grid grid-cols-6 gap-6">
            <div
              aria-hidden="true"
              className="absolute left-[8%] right-[8%] top-6 h-px bg-gradient-to-r from-primary-600/20 via-primary-600/60 to-primary-600/20"
            />
            {content.steps.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <li key={step.title} className="relative flex flex-col items-center text-center">
                  <Node Icon={Icon} />
                  <span className="mt-5 text-xs font-semibold tracking-[0.2em] text-primary-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1.5 font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-300">{step.description}</p>
                </li>
              )
            })}
          </ol>
        </Reveal>

        {/* Mobile / tablet: vertical timeline */}
        <Reveal className="mt-12 lg:hidden">
          <ol className="relative space-y-10">
            <div
              aria-hidden="true"
              className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-primary-600/20 via-primary-600/60 to-primary-600/20"
            />
            {content.steps.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <li key={step.title} className="relative flex gap-5">
                  <Node Icon={Icon} />
                  <div className="pt-0.5">
                    <span className="text-xs font-semibold tracking-[0.2em] text-primary-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 font-semibold text-white">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-300">
                      {step.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
