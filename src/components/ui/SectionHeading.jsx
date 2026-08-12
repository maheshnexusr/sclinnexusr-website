import { Badge } from './Badge'
import { Reveal } from './Reveal'

export function SectionHeading({ eyebrow, title, sub }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg text-stone-600">{sub}</p>}
    </Reveal>
  )
}
