import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

const variants = {
  primary: 'bg-primary-700 text-white hover:bg-primary-800',
  secondary: 'border border-primary-700 text-primary-700 hover:bg-primary-50',
  inverse: 'bg-white text-stone-900 hover:bg-stone-100',
}

export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  to,
  href,
  className,
  children,
  ...rest
}) {
  const cls = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-60',
    size === 'lg' ? 'px-6 py-3 text-base' : 'px-5 py-2.5 text-sm',
    variants[variant],
    className,
  )
  if (to && to !== '#') {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href && href.startsWith('/')) {
    return (
      <Link to={href} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  )
}
