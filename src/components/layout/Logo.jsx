import { cn } from '../../utils/cn'
import logoSrc from '../../assets/logo/SclinNexus_color_logo.png'

export function Logo({ className, tone = 'dark' }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <img src={logoSrc} alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
      <span
        className={cn(
          'text-lg font-semibold tracking-tight',
          tone === 'light' ? 'text-white' : 'text-navy-900',
        )}
      >
        SclinNexus
      </span>
    </span>
  )
}
