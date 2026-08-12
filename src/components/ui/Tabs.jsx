import { useId, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../utils/cn'

export function Tabs({ items, orientation = 'horizontal', listClassName, panelClassName }) {
  const baseId = useId()
  const [activeId, setActiveId] = useState(items[0]?.id)
  const tabRefs = useRef({})
  const wrapperRef = useRef(null)
  const [height, setHeight] = useState('auto')
  const reduced = useReducedMotion()
  const active = items.find((item) => item.id === activeId) ?? items[0]

  useLayoutEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const update = () => setHeight(el.offsetHeight)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [activeId])

  const onKeyDown = (event) => {
    const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight'
    const prevKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft'
    const index = items.findIndex((item) => item.id === active.id)
    let next = null
    if (event.key === nextKey) next = items[(index + 1) % items.length]
    else if (event.key === prevKey) next = items[(index - 1 + items.length) % items.length]
    else if (event.key === 'Home') next = items[0]
    else if (event.key === 'End') next = items[items.length - 1]
    if (next) {
      event.preventDefault()
      setActiveId(next.id)
      tabRefs.current[next.id]?.focus()
    }
  }

  return (
    <div
      className={
        orientation === 'vertical'
          ? 'flex flex-col gap-8 lg:flex-row lg:gap-12'
          : 'flex flex-col gap-8'
      }
    >
      <div
        role="tablist"
        aria-orientation={orientation}
        onKeyDown={onKeyDown}
        className={cn(
          orientation === 'vertical'
            ? 'flex shrink-0 gap-2 overflow-x-auto pb-1 lg:w-60 lg:flex-col lg:overflow-visible lg:pb-0'
            : 'flex gap-2 overflow-x-auto pb-1',
          listClassName,
        )}
      >
        {items.map((item) => {
          const selected = item.id === active.id
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[item.id] = el
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(item.id)}
              className={cn(
                'whitespace-nowrap rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600',
                selected
                  ? 'bg-primary-700 text-white'
                  : 'text-stone-600 hover:bg-stone-200/60 hover:text-stone-900',
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <motion.div
        className="min-w-0 flex-1 overflow-hidden"
        initial={false}
        animate={{ height }}
        transition={reduced ? { duration: 0 } : { duration: 0.35, ease: 'easeInOut' }}
      >
        <div ref={wrapperRef} className="relative">
          <AnimatePresence initial={false}>
            <motion.div
              key={active.id}
              role="tabpanel"
              id={`${baseId}-panel-${active.id}`}
              aria-labelledby={`${baseId}-tab-${active.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%' }}
              transition={reduced ? { duration: 0 } : { duration: 0.3 }}
              className={panelClassName}
            >
              {active.panel}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
