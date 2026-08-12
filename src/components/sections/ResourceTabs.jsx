import { useState } from 'react'
import { Clock, Download, Eye } from 'lucide-react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Tabs } from '../ui/Tabs'
import { DownloadModal } from './DownloadModal'

export function ResourceTabs({ content }) {
  const [activeResource, setActiveResource] = useState(null)

  const gatedGrid = (items) => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="flex h-full flex-col overflow-hidden">
          <ImagePlaceholder label={item.thumbnail} ratio="16 / 10" />
          <div className="flex flex-1 flex-col p-5">
            <h3 className="flex-1 font-semibold leading-snug text-stone-900">{item.title}</h3>
            <div className="mt-4 flex items-center gap-2.5">
              <Button onClick={() => setActiveResource(item)}>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download
              </Button>
              <a
                href={item.href}
                aria-label={`View ${item.title}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-300 text-stone-600 transition-colors hover:border-primary-700 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )

  const articleList = (items) => (
    <div className="flex flex-col gap-4">
      {items.map((article) => (
        <Card key={article.title} className="overflow-hidden sm:flex">
          <div className="sm:w-56 sm:shrink-0">
            <ImagePlaceholder label={article.thumbnail} ratio="16 / 10" className="h-full" />
          </div>
          <div className="p-5 sm:p-6">
            <p className="flex items-center gap-1.5 text-xs font-medium text-stone-500">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {article.readMinutes} min read
            </p>
            <h3 className="mt-2 font-semibold leading-snug text-stone-900">
              <a
                href={article.href}
                className="rounded transition-colors hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              >
                {article.title}
              </a>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
              {article.excerpt}
            </p>
          </div>
        </Card>
      ))}
    </div>
  )

  const items = [
    { id: 'case-studies', label: 'Case Studies', panel: gatedGrid(content.caseStudies) },
    { id: 'factsheets', label: 'Factsheets', panel: gatedGrid(content.factsheets) },
    { id: 'articles', label: 'Articles', panel: articleList(content.articles) },
  ]

  return (
    <section id="resources" className="scroll-mt-16 bg-white py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading title={content.title} sub={content.sub} />
        <Reveal className="mt-12">
          <Tabs items={items} orientation="horizontal" listClassName="sm:justify-center" />
        </Reveal>
      </div>
      <DownloadModal resource={activeResource} onClose={() => setActiveResource(null)} />
    </section>
  )
}
