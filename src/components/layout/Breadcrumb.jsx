import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-stone-200 bg-stone-50">
      <ol className="mx-auto flex max-w-content items-center gap-1.5 px-6 py-2.5 text-sm lg:px-8">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-stone-400" aria-hidden="true" />
              )}
              {isLast || !item.to ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className="font-medium text-stone-700"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="rounded text-stone-500 transition-colors hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
