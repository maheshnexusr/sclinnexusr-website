import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { company } from '../content/company'
import { site } from '../content/site'
import { getIcon } from '../utils/icons'
import { Card } from '../components/ui/Card'
import { Reveal } from '../components/ui/Reveal'
import { PageHero } from '../components/sections/PageHero'

const { careers } = company

export function CareersPage() {
  useEffect(() => {
    document.title = careers.meta
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageHero eyebrow={careers.hero.eyebrow} title={careers.hero.title} sub={careers.hero.sub} />

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {careers.values.map((value, index) => {
              const Icon = getIcon(value.icon)
              return (
                <Reveal key={value.title} delay={index * 0.06} className="h-full">
                  <Card className="h-full p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 text-sm font-bold uppercase tracking-wide text-[#0B1730]">
                      {value.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{value.body}</p>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50 py-14 lg:py-16">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#0B1730] sm:text-4xl">
              {careers.openings.title}
            </h2>
          </Reveal>

          {careers.openings.jobs.length > 0 ? (
            <div className="mx-auto mt-10 max-w-3xl space-y-4">
              {careers.openings.jobs.map((job) => (
                <Reveal key={job.title}>
                  <Card className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-[#0B1730]">{job.title}</h3>
                      <p className="mt-1 text-sm text-stone-500">
                        {job.location} · {job.type}
                      </p>
                      {job.description && (
                        <p className="mt-2 text-sm text-stone-600">{job.description}</p>
                      )}
                    </div>
                    <a
                      href={job.applyHref}
                      className="group inline-flex w-fit items-center gap-1.5 rounded text-sm font-semibold text-primary-700 hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                    >
                      Apply
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </Card>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="mx-auto mt-10 max-w-lg text-center">
              <p className="text-lg font-semibold text-[#0B1730]">
                {careers.openings.emptyTitle}
              </p>
              <p className="mt-3 leading-relaxed text-stone-600">{careers.openings.emptyBody}</p>
              <a
                href={`mailto:${site.contactEmail}`}
                className="group mt-5 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              >
                {site.contactEmail}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
