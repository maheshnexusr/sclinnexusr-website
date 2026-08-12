import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import { Modal } from '../ui/Modal'

export function ProductHero({ content }) {
  const [videoOpen, setVideoOpen] = useState(false)
  const reduced = useReducedMotion()

  const fade = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: 'easeOut' },
        }

  const scrollToTarget = () => {
    document
      .getElementById(content.primaryCta.targetId)
      ?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <section className="bg-gradient-to-b from-white to-primary-50">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <motion.div {...fade(0)}>
            <Badge icon={content.eyebrow.icon}>{content.eyebrow.label}</Badge>
          </motion.div>
          <motion.h1
            {...fade(0.08)}
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-stone-900 sm:text-5xl"
          >
            {content.title}
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
            {content.description}
          </motion.p>
          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={scrollToTarget}>
              {content.primaryCta.label}
            </Button>
            <Button size="lg" variant="secondary" href={content.secondaryCta.href}>
              {content.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <motion.div {...fade(0.15)} className="relative">
          <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-card">
            <ImagePlaceholder
              label={content.media.label}
              ratio="16 / 10"
              tone="bg-primary-50 text-primary-800"
            />
          </div>
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label={`Play video: ${content.media.videoTitle}`}
            className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-primary-700 shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" aria-hidden="true" />
          </button>
        </motion.div>
      </div>

      <Modal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        title={content.media.videoTitle}
        maxWidth="max-w-3xl"
      >
        <ImagePlaceholder
          label={`${content.media.videoTitle} — video placeholder`}
          ratio="16 / 9"
          tone="bg-stone-900 text-stone-300"
          className="rounded-lg"
        />
      </Modal>
    </section>
  )
}
