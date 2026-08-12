import { Reveal } from '../ui/Reveal'
import { StatCounter } from '../ui/StatCounter'

export function StatsBand({ content }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {content.items.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-stone-600">{content.context}</p>
        </Reveal>
      </div>
    </section>
  )
}
