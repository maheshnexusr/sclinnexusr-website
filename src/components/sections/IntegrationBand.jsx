import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function IntegrationBand({ content }) {
  return (
    <section className="border-y border-primary-100 bg-primary-50 py-20">
      <Reveal className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          {content.title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-stone-700">{content.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            size="lg"
            to={content.primaryCta.href.startsWith('/') ? content.primaryCta.href : undefined}
            href={content.primaryCta.href.startsWith('/') ? undefined : content.primaryCta.href}
          >
            {content.primaryCta.label}
          </Button>
          <Button
            size="lg"
            variant="secondary"
            to={content.secondaryCta.href.startsWith('/') ? content.secondaryCta.href : undefined}
            href={content.secondaryCta.href.startsWith('/') ? undefined : content.secondaryCta.href}
          >
            {content.secondaryCta.label}
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
