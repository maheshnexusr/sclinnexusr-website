import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'

export function StatCounter({ value, suffix = '', label }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const current = useCountUp(value, { start: inView })
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-semibold tracking-tight text-primary-700 lg:text-5xl">
        {current.toLocaleString('en-US')}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-stone-600">{label}</p>
    </div>
  )
}
