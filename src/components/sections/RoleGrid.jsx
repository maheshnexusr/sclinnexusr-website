import { getIcon } from '../../utils/icons'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

/** Four-role grid for the homepage: sponsors, CROs, sites and data managers. */
export function RoleGrid({ content }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading title={content.title} sub={content.sub} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((role, index) => {
            const Icon = getIcon(role.icon)
            return (
              <Reveal key={role.title} delay={index * 0.06} className="h-full">
                <Card className="group h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-600">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">{role.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{role.body}</p>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
