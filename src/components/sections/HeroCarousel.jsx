import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import { cn } from '../../utils/cn'

const headingCls =
  'mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-stone-900 sm:text-5xl'

export function HeroCarousel({ slides, interval = 7000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || paused || slides.length < 2) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => window.clearInterval(id)
  }, [reduced, paused, slides.length, interval])

  const go = (next) => setIndex((next + slides.length) % slides.length)

  const arrowCls =
    'flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-600 transition-colors hover:border-primary-700 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600'

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Platform highlights"
      className="bg-gradient-to-b from-white to-primary-50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="mx-auto max-w-content px-6 pb-16 pt-16 lg:px-8 lg:pt-20">
        <div className="grid">
          {slides.map((slide, i) => {
            const active = i === index
            const Heading = i === 0 ? 'h1' : 'p'
            return (
              <motion.div
                key={slide.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
                aria-hidden={!active || undefined}
                className="[grid-area:1/1]"
                initial={false}
                animate={
                  active
                    ? { opacity: 1, visibility: 'visible' }
                    : { opacity: 0, transitionEnd: { visibility: 'hidden' } }
                }
                transition={reduced ? { duration: 0 } : { duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                  <div>
                    <Badge icon={slide.eyebrow.icon}>{slide.eyebrow.label}</Badge>
                    <Heading
                      {...(Heading === 'p' ? { role: 'heading', 'aria-level': 2 } : {})}
                      className={headingCls}
                    >
                      {slide.title}
                    </Heading>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
                      {slide.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button size="lg" to={slide.primaryCta.to} href={slide.primaryCta.href}>
                        {slide.primaryCta.label}
                      </Button>
                      <Button
                        size="lg"
                        variant="secondary"
                        to={slide.secondaryCta.to}
                        href={slide.secondaryCta.href}
                      >
                        {slide.secondaryCta.label}
                      </Button>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-card">
                    <ImagePlaceholder
                      label={slide.media.label}
                      ratio="16 / 10"
                      tone="bg-primary-50 text-primary-800"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
            className={arrowCls}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600',
                  i === index ? 'bg-primary-700' : 'bg-stone-300 hover:bg-stone-400',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(index + 1)}
            className={arrowCls}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
