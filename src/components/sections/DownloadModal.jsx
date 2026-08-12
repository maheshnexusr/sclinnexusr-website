import { useEffect, useId, useState } from 'react'
import { CheckCircle2, Loader2, TriangleAlert } from 'lucide-react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Modal } from '../ui/Modal'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function DownloadModal({ resource, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const consentId = useId()

  useEffect(() => {
    if (resource) {
      setName('')
      setEmail('')
      setConsent(false)
      setErrors({})
      setStatus('idle')
    }
  }, [resource])

  const submit = () => {
    const next = {}
    if (!name.trim()) next.name = 'Enter your full name.'
    if (!email.trim()) next.email = 'Enter your work email.'
    else if (!EMAIL_RE.test(email)) next.email = 'Enter a valid email address, like name@company.com.'
    if (!consent) next.consent = 'Tick the box so we can send you the file.'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setStatus('submitting')
    // Mock submission: an email containing "fail" demonstrates the error state.
    window.setTimeout(() => {
      setStatus(email.toLowerCase().includes('fail') ? 'error' : 'success')
    }, 900)
  }

  return (
    <Modal
      open={Boolean(resource)}
      onClose={onClose}
      title={resource ? `Download: ${resource.title}` : 'Download'}
    >
      {status === 'success' ? (
        <div className="py-4 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-primary-700" aria-hidden="true" />
          <h3 className="mt-4 text-lg font-semibold text-stone-900">Check your inbox</h3>
          <p className="mt-2 text-sm text-stone-600">
            We’ve sent <span className="font-medium">{resource?.title}</span> to {email}. If it
            hasn’t arrived in a few minutes, check your spam folder.
          </p>
          <Button className="mt-6" onClick={onClose}>
            Done
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-stone-600">
            Tell us where to send it and the file is yours — no calls unless you ask for one.
          </p>
          <Input
            label="Full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            error={errors.name}
            required
            autoComplete="name"
            placeholder="Jordan Rivera"
          />
          <Input
            label="Work email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={errors.email}
            required
            autoComplete="email"
            placeholder="name@company.com"
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
                SclinTech can email me this resource and occasional product updates. Unsubscribe
                any time.
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
              <span>Something went wrong sending the file. Try again in a moment.</span>
            </div>
          )}

          <Button
            className="w-full"
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
              'Send me the download'
            )}
          </Button>
        </div>
      )}
    </Modal>
  )
}
