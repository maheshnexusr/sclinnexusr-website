import { getIcon } from '../../utils/icons'

export function Badge({ icon, children }) {
  const Icon = icon ? getIcon(icon) : null
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-800 ring-1 ring-inset ring-primary-700/15">
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      {children}
    </span>
  )
}
