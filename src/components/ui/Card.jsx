import { cn } from '../../utils/cn'

export function Card({ className, children, ...rest }) {
  return (
    <div
      className={cn('rounded-xl border border-stone-200 bg-white shadow-card', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
