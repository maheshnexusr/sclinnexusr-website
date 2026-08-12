import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function CtaBand({ content }) {
  return (
    <section className="bg-stone-900 py-20">
      <Reveal className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 text-lg text-stone-300">{content.tagline}</p>
        <div className="mt-8">
          <Button size="lg" href={content.button.href}>
            {content.button.label}
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
