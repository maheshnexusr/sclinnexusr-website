import { cn } from '../../utils/cn'

export function Card({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag
      className={cn('rounded-xl border border-stone-200 bg-white shadow-card', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
