import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { site } from '../content/site'
import { Logo } from '../components/layout/Logo'
import { Button } from '../components/ui/Button'

export function SignInPage() {
  useEffect(() => {
    document.title = 'Sign In | SclinTech'
    const id = window.setTimeout(() => {
      window.location.replace(site.appUrl)
    }, 1200)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <div className="theme-signin flex min-h-screen flex-col bg-slate-50">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-5 lg:px-8">
        <Link
          to="/"
          aria-label="SclinTech home"
          className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
        >
          <Logo />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 rounded text-sm font-medium text-slate-600 transition-colors hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to the site
        </Link>
      </div>

      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 text-center shadow-card">
          <Loader2
            className="mx-auto h-8 w-8 animate-spin text-primary-700 motion-reduce:hidden"
            aria-hidden="true"
          />
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
            Taking you to sign in
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            You&rsquo;ll sign in on the secure SclinNexus portal. If nothing happens, use the
            button below.
          </p>
          <Button className="mt-6 w-full" size="lg" href={site.appUrl}>
            Continue to sign in
          </Button>
          <p className="mt-6 text-xs text-slate-500">
            Accounts are provisioned by your study administrator. Contact{' '}
            <a
              href={`mailto:${site.supportEmail}`}
              className="rounded font-medium text-primary-700 hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            >
              {site.supportEmail}
            </a>{' '}
            for access.
          </p>
        </div>
      </main>
    </div>
  )
}
