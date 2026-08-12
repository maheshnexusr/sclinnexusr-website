import { ArrowRight } from 'lucide-react'
import { Card } from '../ui/Card'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function AddOnGrid({ content }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading title={content.title} sub={content.sub} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="h-full">
              <Card className="group h-full overflow-hidden">
                <ImagePlaceholder label={item.image} ratio="16 / 10" />
                <div className="flex flex-col p-6">
                  <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.description}</p>
                  <a
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-1.5 rounded text-sm font-medium text-primary-700 transition-colors hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                  >
                    Read more
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    <span className="sr-only"> about {item.title}</span>
                  </a>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
