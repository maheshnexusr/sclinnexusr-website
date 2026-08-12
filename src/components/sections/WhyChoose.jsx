import { getIcon } from '../../utils/icons'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'

/** Compact "Why Choose SclinNexus?" band: four horizontal icon cards. */
export function WhyChoose({ content }) {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
            {content.title}
          </h2>
          <p className="mt-2 text-stone-600">{content.sub}</p>
        </Reveal>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => {
            const Icon = getIcon(item.icon)
            return (
              <Reveal key={item.title} delay={index * 0.05} className="h-full">
                <Card className="flex h-full items-start gap-4 p-5 transition-colors duration-300 hover:border-primary-600">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <h3 className="text-sm font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-stone-500">{item.body}</p>
                  </span>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
