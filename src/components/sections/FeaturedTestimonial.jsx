import { Quote } from 'lucide-react'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'

/** Premium, typography-led testimonial: one featured quote plus supporting voices. */
export function FeaturedTestimonial({ content }) {
  const [featured, ...others] = content.items
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
            {content.title}
          </p>
          <Quote
            className="mx-auto mt-8 h-10 w-10 rotate-180 text-primary-600/30"
            aria-hidden="true"
          />
          <blockquote className="mt-6 text-2xl font-medium leading-snug tracking-tight text-navy-900 sm:text-3xl">
            “{featured.quote}”
          </blockquote>
          <footer className="mt-8">
            <p className="font-semibold text-navy-900">{featured.role}</p>
            <p className="mt-0.5 text-sm text-stone-500">{featured.org}</p>
          </footer>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {others.map((item, index) => (
            <Reveal key={item.quote} delay={index * 0.08} className="h-full">
              <Card className="flex h-full flex-col p-7">
                <Quote className="h-5 w-5 rotate-180 text-primary-600/40" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-stone-700">
                  “{item.quote}”
                </blockquote>
                <footer className="mt-5 border-t border-stone-100 pt-4">
                  <p className="text-sm font-semibold text-navy-900">{item.role}</p>
                  <p className="text-xs text-stone-500">{item.org}</p>
                </footer>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
