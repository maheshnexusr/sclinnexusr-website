import { useEffect } from 'react'
import { Linkedin, Users } from 'lucide-react'
import { company } from '../content/company'
import { Card } from '../components/ui/Card'
import { Reveal } from '../components/ui/Reveal'
import { PageHero } from '../components/sections/PageHero'

const { leadership } = company

export function LeadershipPage() {
  useEffect(() => {
    document.title = leadership.meta
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageHero
        eyebrow={leadership.hero.eyebrow}
        title={leadership.hero.title}
        sub={leadership.hero.sub}
      />

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          {leadership.people.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {leadership.people.map((person) => (
                <Reveal key={person.name} className="h-full">
                  <Card className="h-full p-6">
                    {person.photo && (
                      <img
                        src={person.photo}
                        alt={person.name}
                        className="h-24 w-24 rounded-xl object-cover"
                      />
                    )}
                    <h2 className="mt-4 text-lg font-semibold text-[#1A2831]">{person.name}</h2>
                    <p className="text-sm font-medium text-primary-700">{person.title}</p>
                    {person.bio && (
                      <p className="mt-3 text-sm leading-relaxed text-stone-600">{person.bio}</p>
                    )}
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        aria-label={`${person.name} on LinkedIn`}
                        className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-colors hover:border-primary-600 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                      >
                        <Linkedin className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </Card>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="mx-auto max-w-lg text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                <Users className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-5 leading-relaxed text-stone-600">{leadership.emptyState}</p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
