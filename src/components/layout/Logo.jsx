import { cn } from '../../utils/cn'
import logoLight from '../../assets/logo/proedc-logo-light.png'
import logoDark from '../../assets/logo/proedc-logo-dark.png'

/**
 * The official ProEDC logo lockup (shield mark + wordmark + tagline) used
 * across header, dashboard preview and footer. `tone="light"` selects the
 * white-text variant for dark surfaces; `compact` for tight spaces.
 */
export function Logo({ className, tone = 'dark', compact = false }) {
  return (
    <img
      src={tone === 'light' ? logoDark : logoLight}
      alt="ProEDC — One Platform. Every Clinical Trial."
      className={cn('w-auto object-contain', compact ? 'h-8' : 'h-10', className)}
    />
  )
}
