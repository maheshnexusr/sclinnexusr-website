import { cn } from '../../utils/cn'

export function Card({ as: Tag = 'div', interactive = false, className, children, ...rest }) {
  return (
    <Tag
      className={cn(
        'rounded-xl border border-stone-200 bg-white shadow-card',
        interactive &&
          'transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-600/40 hover:shadow-md',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
