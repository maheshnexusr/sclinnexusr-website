export function ComplianceStrip({ content }) {
  return (
    <section className="border-y border-stone-200 bg-stone-50 py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-stone-500">
        {content.label}
      </p>

      <ul className="mx-auto mt-6 hidden max-w-content flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 md:flex">
        {content.items.map((name) => (
          <li
            key={name}
            className="text-sm font-semibold tracking-wide text-stone-400 transition-colors hover:text-primary-700"
          >
            {name}
          </li>
        ))}
      </ul>

      <div className="mt-6 overflow-hidden md:hidden" aria-hidden="true">
        <div className="marquee-track flex w-max gap-10 px-5">
          {[...content.items, ...content.items].map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="whitespace-nowrap text-sm font-semibold tracking-wide text-stone-400"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <ul className="sr-only md:hidden">
        {content.items.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  )
}
