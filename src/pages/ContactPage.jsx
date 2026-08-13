import { useEffect, useState } from 'react'
import { ArrowRight, Mail, MailCheck } from 'lucide-react'
import { company } from '../content/company'
import { openEmailCompose } from '../utils/composeEmail'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { Textarea } from '../components/ui/Textarea'
import { Reveal } from '../components/ui/Reveal'

const { contact } = company

const interestOptions = [
  { value: '', label: 'Select an option' },
  ...contact.interests,
]

const blankForm = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  role: '',
  country: '',
  interest: '',
  message: '',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Builds the subject and body for the contact email. Optional fields that
 * are empty are dropped entirely so the email has no blank lines. */
function buildContactEmail(form) {
  const interestLabel =
    contact.interests.find((option) => option.value === form.interest)?.label ?? form.interest

  const subject = `SclinNexus Contact Request - ${form.firstName.trim()} ${form.lastName.trim()}`
  const body = [
    'Hello SclinNexus Team,',
    '',
    'I would like to get in touch regarding SclinNexus.',
    '',
    'Contact Details:',
    '',
    `First Name: ${form.firstName.trim()}`,
    `Last Name: ${form.lastName.trim()}`,
    `Work Email: ${form.email.trim()}`,
    form.company.trim() ? `Company: ${form.company.trim()}` : null,
    form.role.trim() ? `Job Title: ${form.role.trim()}` : null,
    form.country.trim() ? `Country: ${form.country.trim()}` : null,
    `Interested In: ${interestLabel}`,
    '',
    'Message:',
    '',
    form.message.trim(),
    '',
    'Regards,',
    `${form.firstName.trim()} ${form.lastName.trim()}`,
  ]
    .filter((line) => line !== null)
    .join('\n')

  return { subject, body }
}

export function ContactPage() {
  const [form, setForm] = useState(blankForm)
  const [errors, setErrors] = useState({})
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    document.title = contact.meta
    window.scrollTo(0, 0)
  }, [])

  // Writes the value and clears that field's error the moment the user
  // starts fixing it — no waiting for the next submit.
  const set = (key) => (event) => {
    const value = event.target.value
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => (e[key] ? { ...e, [key]: '' } : e))
  }

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'First name is required'
    if (!form.lastName.trim()) next.lastName = 'Last name is required'
    if (!form.email.trim()) next.email = 'Work email is required'
    else if (!EMAIL_RE.test(form.email)) next.email = 'Please enter a valid work email address'
    if (!form.interest) next.interest = 'Please select what you are interested in'
    if (!form.message.trim()) next.message = 'Please enter a short message'
    return next
  }

  const handleSubmit = (event) => {
    // Stop the browser's native form submission — nothing is posted anywhere.
    event.preventDefault()

    const next = validate()
    if (Object.keys(next).length > 0) {
      setErrors(next)
      return
    }

    // Open a pre-filled Gmail compose tab (mailto: fallback if the popup is
    // blocked). The user reviews the email and clicks Send themselves.
    const { subject, body } = buildContactEmail(form)
    openEmailCompose({ to: contact.email, subject, body })
    setOpened(true)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/70 via-white to-primary-50/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_0%,rgba(29,191,97,0.07),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-content gap-12 px-6 py-14 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
            {contact.hero.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#1A2831] sm:text-4xl lg:text-5xl">
            {contact.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
            {contact.hero.sub}
          </p>

          <div className="mt-9 rounded-2xl border border-primary-700/10 bg-primary-50/50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
              Get in Touch
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-3 inline-flex items-center gap-3 rounded font-semibold text-[#1A2831] transition-colors hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600/10 text-primary-700">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              {contact.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="h-fit p-7 sm:p-8">
            {opened ? (
              <div className="py-6 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  <MailCheck className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-xl font-semibold text-[#1A2831]">Message Prepared</h2>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-stone-600">
                  Your message has been prepared successfully. Please review the opened email
                  and click Send to complete your inquiry.
                </p>
                <Button
                  className="group mt-6"
                  onClick={() => {
                    setForm(blankForm)
                    setErrors({})
                    setOpened(false)
                  }}
                >
                  Submit Another Request
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Button>
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => setOpened(false)}
                    className="rounded text-sm font-medium text-primary-700 transition-colors hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                  >
                    Review or edit your details
                  </button>
                </div>
              </div>
            ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <h2 className="text-xl font-semibold text-[#1A2831]">Send us a message</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="First Name"
                  value={form.firstName}
                  onChange={set('firstName')}
                  error={errors.firstName}
                  required
                  autoComplete="given-name"
                  placeholder="Jordan"
                />
                <Input
                  label="Last Name"
                  value={form.lastName}
                  onChange={set('lastName')}
                  error={errors.lastName}
                  required
                  autoComplete="family-name"
                  placeholder="Rivera"
                />
              </div>
              <Input
                label="Work Email"
                type="email"
                value={form.email}
                onChange={set('email')}
                error={errors.email}
                required
                autoComplete="email"
                placeholder="name@company.com"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Company"
                  value={form.company}
                  onChange={set('company')}
                  autoComplete="organization"
                  placeholder="Acme Clinical Research"
                />
                <Input
                  label="Job Title"
                  value={form.role}
                  onChange={set('role')}
                  autoComplete="organization-title"
                  placeholder="Clinical Data Manager"
                />
              </div>
              <Input
                label="Country"
                value={form.country}
                onChange={set('country')}
                autoComplete="country-name"
                placeholder="United States"
              />
              <Select
                label="I'm interested in"
                value={form.interest}
                onChange={set('interest')}
                options={interestOptions}
                error={errors.interest}
                required
              />
              <Textarea
                label="Message"
                value={form.message}
                onChange={set('message')}
                error={errors.message}
                required
                placeholder="Tell us about your study, workflow or what you'd like to improve…"
                rows={4}
              />

              <Button type="submit" className="group w-full" size="lg">
                Send Message
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>

              <p className="text-xs leading-relaxed text-stone-500">
                Clicking “Send Message” opens your default email application with your details
                pre-filled — nothing is sent or stored by this website. {contact.privacyNote}
              </p>
            </form>
            )}
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
