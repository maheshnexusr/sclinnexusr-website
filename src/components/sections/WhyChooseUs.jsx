import { getIcon } from '../../utils/icons'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function WhyChooseUs({ content }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading title={content.title} />
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => {
            const Icon = getIcon(item.icon)
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div>
                  <Icon className="h-7 w-7 text-primary-700" strokeWidth={1.75} aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
