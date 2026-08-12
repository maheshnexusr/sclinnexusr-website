import { cn } from '../../utils/cn'

export function ImagePlaceholder({
  label,
  ratio = '16 / 9',
  tone = 'bg-stone-100 text-stone-500',
  className,
}) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{ aspectRatio: ratio }}
      className={cn('flex w-full items-center justify-center overflow-hidden', tone, className)}
    >
      <span className="px-4 text-center text-sm font-medium">{label}</span>
    </div>
  )
}
