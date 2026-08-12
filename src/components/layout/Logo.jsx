import { cn } from '../../utils/cn'

export function Logo({ className }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M3 12h4l2.5-6 4.5 12 2.5-6H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-stone-900">SclinTech</span>
    </span>
  )
}
