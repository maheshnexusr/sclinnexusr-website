import { useId } from 'react'
import { cn } from '../../utils/cn'

export function Input({
  label,
  type = 'text',
  value,
  onChange,
  error,
  required,
  autoComplete,
  placeholder,
}) {
  const id = useId()
  const errorId = `${id}-error`
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-stone-700">
        {label}
        {required && (
          <span aria-hidden="true" className="text-stone-400">
            {' '}
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'mt-1.5 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600',
          error ? 'border-red-400' : 'border-stone-300',
        )}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
