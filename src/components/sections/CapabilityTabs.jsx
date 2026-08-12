import { Check } from 'lucide-react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Button } from '../ui/Button'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Tabs } from '../ui/Tabs'

export function CapabilityTabs({ content }) {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const items = content.tabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    panel: (
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-stone-900">{tab.title}</h3>
          <p className="mt-3 text-stone-600">{tab.intro}</p>
          <ul className="mt-6 space-y-3">
            {tab.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-stone-700">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary-700" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <ImagePlaceholder
          label={tab.screenshot}
          ratio="4 / 3"
          tone="bg-white text-stone-500"
          className="rounded-xl border border-stone-200 shadow-card"
        />
      </div>
    ),
  }))

  return (
    <section id="capabilities" className="scroll-mt-16 bg-stone-50 py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} sub={content.sub} />
        <Reveal className="mt-12">
          <Tabs items={items} orientation={isDesktop ? 'vertical' : 'horizontal'} />
        </Reveal>
        <div className="mt-12 text-center">
          <Button size="lg" href={content.cta.href}>
            {content.cta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
