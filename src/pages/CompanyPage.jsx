import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { company } from '../content/company'
import { site } from '../content/site'
import { getIcon } from '../utils/icons'
import { Card } from '../components/ui/Card'
import { Reveal } from '../components/ui/Reveal'
import { PageHero } from '../components/sections/PageHero'

const { about } = company

function StorySection() {
  const { story } = about
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
            Our Story
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1730] sm:text-4xl">
            {story.title}
          </h2>
          {story.body.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed text-stone-600">
              {paragraph}
            </p>
          ))}
          <Link
            to={story.cta.to}
            className="group mt-6 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            {story.cta.label}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="p-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0B1730]">
              Experience across
            </p>
            <ul className="mt-4 space-y-3">
              {story.expertise.map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone-700">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-600"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

function PlatformStorySection() {
  const { platformStory } = about
  return (
    <section className="border-y border-stone-200 bg-stone-50 py-14 lg:py-16">
      <div className="mx-auto max-w-content px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0B1730] sm:text-4xl">
            {platformStory.title}
          </h2>
          <p className="mt-4 text-lg text-stone-600">{platformStory.sub}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-y-4">
            {site.solutions.map((solution, index) => {
              const Icon = getIcon(solution.icon)
              const chip = (
                <span className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-white px-4 py-2.5 transition-colors hover:border-primary-600">
                  <Icon className="h-4 w-4 text-primary-700" aria-hidden="true" />
                  <span className="text-left">
                    <span className="block text-sm font-semibold text-[#0B1730]">
                      {solution.name}
                    </span>
                    <span className="block text-[11px] text-stone-500">{solution.short}</span>
                  </span>
                </span>
              )
              return (
                <li key={solution.name} className="flex items-center">
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="relative mx-1.5 hidden h-px w-6 bg-primary-600/40 lg:block"
                    >
                      <span className="absolute -top-[2.5px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary-600/70" />
                    </span>
                  )}
                  {solution.to !== '#' ? (
                    <Link
                      to={solution.to}
                      className="rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                    >
                      {chip}
                    </Link>
                  ) : (
                    chip
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

function WhySection() {
  const { why } = about
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0B1730] sm:text-4xl">
            {why.title}
          </h2>
          <p className="mt-3 text-lg text-stone-600">{why.sub}</p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="h-full">
              <Card className="h-full p-6 transition-colors duration-300 hover:border-primary-600">
                <p className="text-xs font-bold tracking-[0.2em] text-primary-600">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-[#0B1730]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function MissionVisionSection() {
  return (
    <section className="border-y border-primary-100 bg-primary-50/60 py-14 lg:py-16">
      <div className="mx-auto grid max-w-content gap-6 px-6 lg:grid-cols-2 lg:px-8">
        {[about.mission, about.vision].map((block, index) => (
          <Reveal key={block.title} delay={index * 0.08} className="h-full">
            <Card className="h-full p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
                {block.title}
              </p>
              <p className="mt-4 text-xl font-semibold leading-snug tracking-tight text-[#0B1730] sm:text-2xl">
                {block.statement}
              </p>
              <p className="mt-4 leading-relaxed text-stone-600">{block.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function CompanyPage() {
  useEffect(() => {
    document.title = about.meta
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        sub={about.hero.sub}
        primaryCta={{ label: about.hero.primaryCta.label, to: about.hero.primaryCta.href }}
        secondaryCta={{ label: about.hero.secondaryCta.label, to: about.hero.secondaryCta.href }}
      />
      <StorySection />
      <PlatformStorySection />
      <WhySection />
      <MissionVisionSection />
    </>
  )
}
