import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { home } from '../content/home'
import { site } from '../content/site'
import { getIcon } from '../utils/icons'
import { Card } from '../components/ui/Card'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { HeroCarousel } from '../components/sections/HeroCarousel'
import { ComplianceStrip } from '../components/sections/ComplianceStrip'
import { StatsBand } from '../components/sections/StatsBand'
import { Testimonials } from '../components/sections/Testimonials'
import { CtaBand } from '../components/sections/CtaBand'

export function HomePage() {
  useEffect(() => {
    document.title = 'SclinTech — Clinical Trial Software'
  }, [])

  return (
    <>
      <HeroCarousel slides={home.heroSlides} />
      <ComplianceStrip content={home.compliance} />
      <StatsBand content={home.stats} />

      <section className="border-t border-stone-200 bg-stone-50 py-20">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <SectionHeading
            title="The suite"
            sub="Six products, one data model. Start with what you need; nothing is reconciled between systems later."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.solutions.map((solution, index) => {
              const Icon = getIcon(solution.icon)
              return (
                <Reveal key={solution.name} delay={index * 0.05} className="h-full">
                  <Card className="group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-semibold text-stone-900">{solution.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{solution.tagline}</p>
                    {solution.to !== '#' && (
                      <Link
                        to={solution.to}
                        className="mt-4 inline-flex items-center gap-1.5 rounded text-sm font-medium text-primary-700 transition-colors hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                      >
                        Learn more
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                        <span className="sr-only"> about {solution.name}</span>
                      </Link>
                    )}
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <Testimonials content={home.testimonials} background="bg-white" />
      <CtaBand content={home.cta} />
    </>
  )
}
