import { ShieldCheck } from 'lucide-react'

/**
 * Lightweight regulatory strip below the hero. Top padding leaves room for
 * the hero dashboard, which overlaps into this section.
 */
export function TrustStrip({ content }) {
  return (
    <section className="border-b border-stone-200 bg-stone-50 pb-12 pt-28 sm:pt-36">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
          {content.label}
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
          {content.items.map((name) => (
            <li
              key={name}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-navy-600 transition-colors hover:text-primary-700"
            >
              <ShieldCheck className="h-4 w-4 text-primary-600/80" aria-hidden="true" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
