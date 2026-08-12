import { useId } from 'react'
import { cn } from '../../utils/cn'

export function Textarea({ label, value, onChange, error, required, placeholder, rows = 4 }) {
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
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
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
