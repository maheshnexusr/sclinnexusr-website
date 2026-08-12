import { useId } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'

export function Select({ label, value, onChange, options, error, required }) {
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
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'mt-1.5 w-full appearance-none rounded-lg border bg-white px-3.5 py-2.5 pr-10 text-sm text-stone-900',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600',
            error ? 'border-red-400' : 'border-stone-300',
          )}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3.5 top-1/2 mt-0.5 h-4 w-4 -translate-y-1/2 text-stone-400"
          aria-hidden="true"
        />
      </div>
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
