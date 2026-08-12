import { useEffect, useId, useState } from 'react'
import { Check, CheckCircle2, Loader2, Quote, TriangleAlert } from 'lucide-react'
import { site } from '../content/site'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { Textarea } from '../components/ui/Textarea'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const interestOptions = [
  { value: 'platform', label: 'The whole platform' },
  { value: 'edc', label: 'EDC — Electronic Data Capture' },
  { value: 'ctms', label: 'CTMS — Clinical Trial Management' },
  { value: 'iwrs', label: 'IWRS / RTSM' },
  { value: 'epro', label: 'ePRO' },
  { value: 'econsent', label: 'eConsent' },
  { value: 'rsdv', label: 'rSDV' },
]

const expectations = [
  'A 45-minute walkthrough with a solutions engineer, not a salesperson',
  'Built around your study design — send a protocol synopsis if you like',
  'Straight answers on validation, hosting and pricing',
  'No obligation and no follow-up calls unless you ask for them',
]

export function RequestDemoPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: 'platform',
    message: '',
  })
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const consentId = useId()

  useEffect(() => {
    document.title = 'Request a Demo | SclinTech'
    window.scrollTo(0, 0)
  }, [])

  const set = (key) => (event) => setForm((f) => ({ ...f, [key]: event.target.value }))

  const submit = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your full name.'
    if (!form.email.trim()) next.email = 'Enter your work email.'
    else if (!EMAIL_RE.test(form.email))
      next.email = 'Enter a valid email address, like name@company.com.'
    if (!form.company.trim()) next.company = 'Enter your company or organisation.'
    if (!consent) next.consent = 'Tick the box so we can reply to your request.'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setStatus('submitting')
    // Mock submission: an email containing "fail" demonstrates the error state.
    window.setTimeout(() => {
      setStatus(form.email.toLowerCase().includes('fail') ? 'error' : 'success')
    }, 900)
  }

  return (
    <section className="bg-gradient-to-b from-white to-primary-50">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <Badge icon="calendarRange">Request a demo</Badge>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-stone-900 sm:text-5xl">
            See SclinTech on a study like yours
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
            Tell us a little about your work and we&rsquo;ll set up a session that shows the
            platform doing your studies, not a canned demo script.
          </p>
          <ul className="mt-8 space-y-3">
            {expectations.map((item) => (
              <li key={item} className="flex gap-3 text-stone-700">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary-700" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Card className="mt-10 p-6">
            <Quote className="h-6 w-6 text-primary-700/40" aria-hidden="true" />
            <blockquote className="mt-3 leading-relaxed text-stone-800">
              &ldquo;The demo used our own visit schedule. By the end of the call we were
              debating edit checks, not watching slides.&rdquo;
            </blockquote>
            <footer className="mt-4">
              <p className="text-sm font-medium text-stone-900">Clinical Data Manager</p>
              <p className="text-sm text-stone-500">Mid-size CRO</p>
            </footer>
          </Card>

          <p className="mt-8 text-sm text-stone-500">
            Prefer email? Write to{' '}
            <a
              href={`mailto:${site.contactEmail}`}
              className="rounded font-medium text-primary-700 hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            >
              {site.contactEmail}
            </a>{' '}
            and we&rsquo;ll take it from there.
          </p>
        </div>

        <Card className="h-fit p-8">
          {status === 'success' ? (
            <div className="py-6 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary-700" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold text-stone-900">Request received</h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                A solutions engineer will email you at{' '}
                <span className="font-medium">{form.email}</span> within one business day to find
                a time that works.
              </p>
              <Button className="mt-6" to="/">
                Back to the homepage
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-stone-900">Book your walkthrough</h2>
              <Input
                label="Full name"
                value={form.name}
                onChange={set('name')}
                error={errors.name}
                required
                autoComplete="name"
                placeholder="Jordan Rivera"
              />
              <Input
                label="Work email"
                type="email"
                value={form.email}
                onChange={set('email')}
                error={errors.email}
                required
                autoComplete="email"
                placeholder="name@company.com"
              />
              <Input
                label="Company or organisation"
                value={form.company}
                onChange={set('company')}
                error={errors.company}
                required
                autoComplete="organization"
                placeholder="Acme Clinical Research"
              />
              <Input
                label="Job title (optional)"
                value={form.role}
                onChange={set('role')}
                autoComplete="organization-title"
                placeholder="Clinical Data Manager"
              />
              <Select
                label="What do you want to see?"
                value={form.interest}
                onChange={set('interest')}
                options={interestOptions}
              />
              <Textarea
                label="Anything we should prepare? (optional)"
                value={form.message}
                onChange={set('message')}
                placeholder="Study phase, therapeutic area, timelines, systems you use today…"
                rows={3}
              />

              <div>
                <div className="flex items-start gap-2.5">
                  <input
                    id={consentId}
                    type="checkbox"
                    checked={consent}
                    onChange={(event) => setConsent(event.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-stone-300 text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                  />
                  <label htmlFor={consentId} className="text-sm text-stone-600">
                    SclinTech can contact me about this request. No newsletters unless I opt in.
                  </label>
                </div>
                {errors.consent && <p className="mt-1.5 text-sm text-red-600">{errors.consent}</p>}
              </div>

              {status === 'error' && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                >
                  <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Something went wrong sending your request. Try again in a moment.</span>
                </div>
              )}

              <Button
                className="w-full"
                size="lg"
                onClick={submit}
                disabled={status === 'submitting'}
                aria-busy={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  'Request a demo'
                )}
              </Button>
            </div>
          )}
        </Card>
      </div>
    </section>
  )
}
