import { getIcon } from '../../utils/icons'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function RoleCards({ content }) {
  return (
    <section className="bg-stone-50 py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading title={content.title} sub={content.sub} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.items.map((role, index) => {
            const Icon = getIcon(role.icon)
            return (
              <Reveal key={role.title} delay={index * 0.08} className="h-full">
                <Card className="h-full p-8 transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-stone-900">{role.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-stone-600">{role.body}</p>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
