import { useEffect } from 'react'
import { company } from '../content/company'
import { Reveal } from '../components/ui/Reveal'
import { PageHero } from '../components/sections/PageHero'

const { story } = company

export function OurStoryPage() {
  useEffect(() => {
    document.title = story.meta
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageHero eyebrow={story.hero.eyebrow} title={story.hero.title} sub={story.hero.sub} />

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-2xl px-6">
          <ol className="relative space-y-12">
            <div
              aria-hidden="true"
              className="absolute bottom-5 left-[3.25rem] top-5 w-px bg-gradient-to-b from-primary-600/50 via-primary-600/30 to-primary-600/10"
            />
            {story.milestones.map((milestone, index) => (
              <Reveal key={milestone.title} delay={index * 0.06}>
                <li className="relative flex gap-6">
                  <span className="z-10 flex h-[6.5rem] w-[6.5rem] shrink-0 flex-col items-center justify-center rounded-2xl border border-primary-200 bg-primary-50/70 text-center">
                    <span className="text-lg font-bold tracking-tight text-primary-700">
                      {milestone.marker === '·' ? (
                        <span
                          aria-hidden="true"
                          className="block h-2.5 w-2.5 rounded-full bg-primary-600"
                        />
                      ) : (
                        milestone.marker
                      )}
                    </span>
                  </span>
                  <div className="pt-3">
                    <h2 className="text-lg font-semibold tracking-tight text-[#0B1730]">
                      {milestone.title}
                    </h2>
                    <p className="mt-2 leading-relaxed text-stone-600">{milestone.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
