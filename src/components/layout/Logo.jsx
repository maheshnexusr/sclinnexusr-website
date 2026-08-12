import { cn } from '../../utils/cn'
import logoSrc from '../../assets/logo/SclinNexus_color_logo.png'

/**
 * The single SclinNexus logo treatment used across header, dashboard preview
 * and footer. `tone="light"` for dark surfaces, `compact` for tight spaces.
 */
export function Logo({ className, tone = 'dark', compact = false }) {
  return (
    <span className={cn('inline-flex items-center', compact ? 'gap-1.5' : 'gap-2', className)}>
      <img
        src={logoSrc}
        alt=""
        aria-hidden="true"
        className={cn('object-contain', compact ? 'h-7 w-7' : 'h-9 w-9')}
      />
      <span
        className={cn(
          'font-semibold tracking-tight',
          compact ? 'text-sm' : 'text-lg',
          tone === 'light' ? 'text-white' : 'text-[#1A2831]',
        )}
      >
        SclinNexus
      </span>
    </span>
  )
}
