import { Button } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <section className="bg-white py-28 text-center">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-700">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          We couldn’t find that page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-stone-600">
          The link may be out of date, or the page hasn’t been published yet.
        </p>
        <div className="mt-8">
          <Button size="lg" to="/">
            Back to the homepage
          </Button>
        </div>
      </div>
    </section>
  )
}
