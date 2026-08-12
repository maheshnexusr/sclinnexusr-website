import { cn } from '../../utils/cn'

/** Regulatory strip: label on the left, standards with captions across the row. */
export function TrustStrip({ content }) {
  return (
    <section className="border-y border-stone-200 bg-stone-50 py-9">
      <div className="mx-auto flex max-w-content flex-col items-center gap-7 px-6 lg:flex-row lg:gap-10 lg:px-8">
        <p className="shrink-0 text-center text-lg font-bold leading-snug tracking-tight text-navy-900 lg:max-w-[13rem] lg:text-left">
          {content.label}
          <span
            aria-hidden="true"
            className="mx-auto mt-2 block h-0.5 w-10 rounded-full bg-primary-600 lg:mx-0"
          />
        </p>

        <ul className="grid w-full grid-cols-3 gap-y-6 sm:grid-cols-6">
          {content.items.map((item, index) => (
            <li
              key={`${item.value}-${item.caption}`}
              className={cn(
                'px-2 text-center',
                index % 3 !== 0 && 'border-l border-stone-200',
                index > 0 && 'sm:border-l sm:border-stone-200',
              )}
            >
              <p className="text-lg font-bold tracking-tight text-navy-900">{item.value}</p>
              <p className="mt-0.5 text-xs text-stone-500">{item.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
