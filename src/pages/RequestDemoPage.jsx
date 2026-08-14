import { useEffect, useId, useState } from 'react'
import { ArrowRight, Check, MailCheck, Quote } from 'lucide-react'
import { site } from '../content/site'
import { openEmailCompose } from '../utils/composeEmail'
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
  const [prepared, setPrepared] = useState(false)
  const consentId = useId()

  useEffect(() => {
    document.title = 'Request a Demo | ProEDC'
    window.scrollTo(0, 0)
  }, [])

  // Writes the value and clears that field's error as soon as the user
  // starts fixing it.
  const set = (key) => (event) => {
    const value = event.target.value
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => (e[key] ? { ...e, [key]: '' } : e))
  }

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

    // Open a pre-filled Gmail compose tab (mailto: fallback if the popup is
    // blocked). Nothing is sent or stored by the website — the user reviews
    // the email and clicks Send themselves.
    const interestLabel =
      interestOptions.find((option) => option.value === form.interest)?.label ?? form.interest
    const subject = `ProEDC Demo Request - ${form.company.trim()}`
    const body = [
      'Hello ProEDC Team,',
      '',
      'I would like to book a demo of ProEDC.',
      '',
      `Name: ${form.name.trim()}`,
      `Work Email: ${form.email.trim()}`,
      `Company: ${form.company.trim()}`,
      form.role.trim() ? `Job Title: ${form.role.trim()}` : null,
      `Interested In: ${interestLabel}`,
      form.message.trim() ? '' : null,
      form.message.trim() ? 'What to prepare:' : null,
      form.message.trim() ? form.message.trim() : null,
      '',
      'Regards,',
      form.name.trim(),
    ]
      .filter((line) => line !== null)
      .join('\n')

    openEmailCompose({ to: site.contactEmail, subject, body })
    setPrepared(true)
  }

  const resetForm = () => {
    setForm({ name: '', email: '', company: '', role: '', interest: 'platform', message: '' })
    setConsent(false)
    setErrors({})
    setPrepared(false)
  }

  return (
    <section className="bg-gradient-to-b from-white to-primary-50">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <Badge icon="calendarRange">Request a demo</Badge>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-stone-900 sm:text-5xl">
            See ProEDC on a study like yours
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
          {prepared ? (
            <div className="py-6 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                <MailCheck className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-xl font-semibold text-stone-900">Demo Request Prepared</h2>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-stone-600">
                Your demo request has been prepared successfully. Please review the opened email
                and click Send to complete your request.
              </p>
              <Button className="group mt-6" onClick={resetForm}>
                Submit Another Request
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => setPrepared(false)}
                  className="rounded text-sm font-medium text-primary-700 transition-colors hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                >
                  Review or edit your details
                </button>
              </div>
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
                    ProEDC can contact me about this request. No newsletters unless I opt in.
                  </label>
                </div>
                {errors.consent && <p className="mt-1.5 text-sm text-red-600">{errors.consent}</p>}
              </div>

              <Button className="group w-full" size="lg" onClick={submit}>
                Request a demo
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>

              <p className="text-xs leading-relaxed text-stone-500">
                Clicking &ldquo;Request a demo&rdquo; opens a pre-filled email for you to review
                and send — nothing is sent or stored by this website.
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  )
}
