import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ProcessSteps({ content }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading title={content.title} sub={content.sub} />
        <Reveal className="mt-14">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-6 left-6 top-6 w-px bg-stone-200 lg:hidden"
            />
            <div
              aria-hidden="true"
              className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-stone-200 lg:block"
            />
            <ol className="flex flex-col gap-10 lg:flex-row">
              {content.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="relative flex gap-5 lg:flex-1 lg:flex-col lg:items-center lg:gap-0 lg:px-4 lg:text-center"
                >
                  <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary-700 bg-white font-semibold text-primary-700">
                    {index + 1}
                  </div>
                  <div className="lg:mt-5">
                    <h3 className="font-semibold text-stone-900">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-stone-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
