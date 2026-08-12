import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { cn } from '../../utils/cn'

export function Carousel({ items, renderItem, perViewDesktop = 2, label = 'Carousel' }) {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const perView = isDesktop ? perViewDesktop : 1
  const pageCount = Math.max(1, Math.ceil(items.length / perView))
  const [page, setPage] = useState(0)
  const current = Math.min(page, pageCount - 1)
  const reduced = useReducedMotion()

  const go = (next) => setPage(Math.max(0, Math.min(pageCount - 1, next)))

  const arrowCls =
    'flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-600 transition-colors hover:border-primary-700 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 disabled:pointer-events-none disabled:opacity-40'

  return (
    <div aria-roledescription="carousel" aria-label={label}>
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${current * 100}%` }}
          transition={reduced ? { duration: 0 } : { type: 'tween', duration: 0.45, ease: 'easeInOut' }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(event, info) => {
            if (info.offset.x < -60) go(current + 1)
            else if (info.offset.x > 60) go(current - 1)
          }}
        >
          {Array.from({ length: pageCount }, (_, p) => (
            <div
              key={p}
              role="group"
              aria-roledescription="slide"
              aria-label={`${p + 1} of ${pageCount}`}
              className="w-full shrink-0 px-1"
              aria-hidden={p !== current || undefined}
            >
              <div className={perView === 2 ? 'grid h-full grid-cols-2 gap-6' : 'h-full'}>
                {items
                  .slice(p * perView, p * perView + perView)
                  .map((item, i) => renderItem(item, p * perView + i))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous slide"
          disabled={current === 0}
          onClick={() => go(current - 1)}
          className={arrowCls}
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current}
              onClick={() => go(i)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600',
                i === current ? 'bg-primary-700' : 'bg-stone-300 hover:bg-stone-400',
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          disabled={current === pageCount - 1}
          onClick={() => go(current + 1)}
          className={arrowCls}
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
