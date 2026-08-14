import { useEffect, useState } from 'react'
import { ArrowRight, Newspaper } from 'lucide-react'
import { company } from '../content/company'
import { Card } from '../components/ui/Card'
import { Reveal } from '../components/ui/Reveal'
import { PageHero } from '../components/sections/PageHero'
import { cn } from '../utils/cn'

const { news } = company

export function NewsPage() {
  const [category, setCategory] = useState('All')

  useEffect(() => {
    document.title = news.meta
    window.scrollTo(0, 0)
  }, [])

  const visible =
    category === 'All'
      ? news.articles
      : news.articles.filter((article) => article.category === category)

  return (
    <>
      <PageHero eyebrow={news.hero.eyebrow} title={news.hero.title} sub={news.hero.sub} />

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter news by category">
              {news.categories.map((name) => (
                <button
                  key={name}
                  type="button"
                  aria-pressed={category === name}
                  onClick={() => setCategory(name)}
                  className={cn(
                    'rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600',
                    category === name
                      ? 'bg-primary-700 text-white'
                      : 'border border-stone-300 text-stone-600 hover:border-primary-600 hover:text-primary-700',
                  )}
                >
                  {name}
                </button>
              ))}
            </div>
          </Reveal>

          {visible.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((article) => (
                <Reveal key={article.title} className="h-full">
                  <Card className="flex h-full flex-col p-6 transition-colors hover:border-primary-600">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-700">
                      {article.category}
                    </p>
                    <h2 className="mt-2 font-semibold text-[#0B1730]">{article.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-4">
                      <span className="text-xs text-stone-400">{article.date}</span>
                      <a
                        href={article.href}
                        className="group inline-flex items-center gap-1 rounded text-sm font-semibold text-primary-700 hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                      >
                        Read Article
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="mx-auto mt-14 max-w-lg text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                <Newspaper className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-5 leading-relaxed text-stone-600">{news.emptyState}</p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
