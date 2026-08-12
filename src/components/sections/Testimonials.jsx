import { Quote } from 'lucide-react'
import { Card } from '../ui/Card'
import { Carousel } from '../ui/Carousel'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { cn } from '../../utils/cn'

export function Testimonials({ content, background = 'bg-stone-50' }) {
  return (
    <section className={cn(background, 'py-20')}>
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading title={content.title} />
        <Reveal className="mt-12">
          <Carousel
            label="Client testimonials"
            items={content.items}
            renderItem={(item) => (
              <Card key={item.quote} className="flex h-full flex-col p-8">
                <Quote className="h-7 w-7 text-primary-700/40" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-stone-800">
                  “{item.quote}”
                </blockquote>
                <footer className="mt-6">
                  <p className="font-medium text-stone-900">{item.role}</p>
                  <p className="text-sm text-stone-500">{item.org}</p>
                </footer>
              </Card>
            )}
          />
        </Reveal>
      </div>
    </section>
  )
}
