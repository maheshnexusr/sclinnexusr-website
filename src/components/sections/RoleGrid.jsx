import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getIcon } from '../../utils/icons'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

/** Four-role grid for the homepage: sponsors, CROs, sites and data managers. */
export function RoleGrid({ content }) {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading title={content.title} sub={content.sub} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((role, index) => {
            const Icon = getIcon(role.icon)
            const cardCls =
              'group h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-600'
            const inner = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{role.body}</p>
                {role.to && (
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary-700">
                    Learn more
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                )}
              </>
            )
            return (
              <Reveal key={role.title} delay={index * 0.06} className="h-full">
                {role.to ? (
                  <Card
                    as={Link}
                    to={role.to}
                    className={`block ${cardCls} focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600`}
                  >
                    {inner}
                  </Card>
                ) : (
                  <Card className={cardCls}>{inner}</Card>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
