import { useEffect, useRef } from 'react'
import { Activity, ArrowRight } from 'lucide-react'
import { getIcon } from '../../utils/icons'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { cn } from '../../utils/cn'
import { DashboardPreview } from './DashboardPreview'

/* ------------------------------------------------------------------ */
/* "Gradient Mesh + Grid Flow" hero background                         */
/* Flowing perspective grid waves + drifting glow points; the wave     */
/* pattern repeats every WAVELEN px so the drift loop is seamless.     */
/* ------------------------------------------------------------------ */

const WAVELEN = 300
const H_LINES = 12
const V_LINES = 15

function wavePath(i) {
  const t = i / (H_LINES - 1)
  const base = 70 + Math.pow(t, 1.6) * 330
  const amp = 3 + t * 15
  const phase = i * 0.8
  let d = ''
  for (let x = -300; x <= 1800; x += 25) {
    const y = base + amp * Math.sin((x / WAVELEN) * Math.PI * 2 + phase)
    d += `${x === -300 ? 'M' : 'L'}${x} ${y.toFixed(1)} `
  }
  return d
}

function vertPath(j) {
  const t = j / (V_LINES - 1)
  const xb = -60 + t * 1320
  const xh = 600 + (xb - 600) * 0.45
  return `M ${xh.toFixed(1)} 70 Q ${((xh + xb) / 2).toFixed(1)} 280 ${xb.toFixed(1)} 430`
}

const WAVE_PATHS = Array.from({ length: H_LINES }, (_, i) => wavePath(i))
const VERT_PATHS = Array.from({ length: V_LINES }, (_, j) => vertPath(j))

/** Faint molecular network cluster for the top corners. */
function MoleculeCluster({ className, flip = false }) {
  const nodes = [
    [30, 96], [86, 40], [150, 76], [120, 148], [196, 128], [176, 30], [236, 66],
  ]
  const links = [
    [0, 1], [1, 2], [2, 3], [2, 4], [1, 5], [5, 6], [2, 6],
  ]
  return (
    <svg
      className={className}
      viewBox="0 0 260 180"
      fill="none"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="#22333F"
          strokeOpacity="0.10"
          strokeWidth="1"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 7 : 4.5}
          fill={i % 2 === 0 ? '#E9F9F0' : '#F1F5F4'}
          stroke={i % 2 === 0 ? '#1DBF61' : '#22333F'}
          strokeOpacity={i % 2 === 0 ? 0.22 : 0.14}
          strokeWidth="1.2"
        />
      ))}
    </svg>
  )
}

/** One corner grid field. `uid` keeps SMIL path ids unique per instance. */
function GridWaveField({ uid, className, style }) {
  const dotLines = [
    { line: 5, dur: '11s', begin: '0s' },
    { line: 8, dur: '9s', begin: '-4s' },
    { line: 10, dur: '12s', begin: '-7s' },
  ]
  return (
    <div className={className} style={style}>
      <svg
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
        fill="none"
        className="h-full w-full"
      >
        {/* static perspective verticals */}
        <g>
          {VERT_PATHS.map((d, j) => (
            <path key={j} d={d} stroke="#1DBF61" strokeOpacity="0.10" strokeWidth="0.7" />
          ))}
        </g>
        {/* drifting wave lines — translateX loops one full wavelength */}
        <g className="sn-grid-drift">
          {WAVE_PATHS.map((d, i) => (
            <path
              key={i}
              id={`${uid}-wave-${i}`}
              d={d}
              stroke={i % 3 === 2 ? '#0d9488' : '#1DBF61'}
              strokeOpacity={0.07 + (i / H_LINES) * 0.13}
              strokeWidth={i > H_LINES - 4 ? 0.9 : 0.6}
            />
          ))}
          {/* glow points traveling along grid lines */}
          {dotLines.map(({ line, dur, begin }) => (
            <g key={line}>
              <circle r="5" fill="#1DBF61" fillOpacity="0.12">
                <animateMotion dur={dur} begin={begin} repeatCount="indefinite">
                  <mpath href={`#${uid}-wave-${line}`} />
                </animateMotion>
              </circle>
              <circle r="1.8" fill="#1DBF61" fillOpacity="0.55">
                <animateMotion dur={dur} begin={begin} repeatCount="indefinite">
                  <mpath href={`#${uid}-wave-${line}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}

/** Rising light particles near the far edges. */
function RisingParticles() {
  const particles = [
    { left: '4%', delay: '0s', dur: '11s' },
    { left: '8%', delay: '4s', dur: '13s' },
    { left: '13%', delay: '8s', dur: '10s' },
    { left: '87%', delay: '2s', dur: '12s' },
    { left: '92%', delay: '6s', dur: '10s' },
    { left: '96%', delay: '9s', dur: '13s' },
  ]
  return (
    <>
      {particles.map((p, i) => (
        <span
          key={i}
          className="sn-rise absolute bottom-10 hidden h-1.5 w-1.5 rounded-full bg-primary-500/50 lg:block"
          style={{ left: p.left, animationDelay: p.delay, animationDuration: p.dur }}
        />
      ))}
    </>
  )
}

function HeroBackdrop() {
  const glowRef = useRef(null)
  const gridRef = useRef(null)

  /* Slight parallax on mouse move (skipped for reduced-motion users). */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const onMove = (e) => {
      const dx = e.clientX / window.innerWidth - 0.5
      const dy = e.clientY / window.innerHeight - 0.5
      if (glowRef.current)
        glowRef.current.style.transform = `translate3d(${dx * 16}px, ${dy * 10}px, 0)`
      if (gridRef.current)
        gridRef.current.style.transform = `translate3d(${dx * -10}px, ${dy * -6}px, 0)`
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes sn-grid-drift-kf { from { transform: translateX(0); } to { transform: translateX(-${WAVELEN}px); } }
        .sn-grid-drift { animation: sn-grid-drift-kf 10s linear infinite; }
        @keyframes sn-grid-bob-kf { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .sn-grid-bob { animation: sn-grid-bob-kf 12s ease-in-out infinite; }
        @keyframes sn-rise-kf {
          0% { transform: translateY(0); opacity: 0; }
          12% { opacity: 0.55; }
          70% { opacity: 0.25; }
          100% { transform: translateY(-280px); opacity: 0; }
        }
        .sn-rise { animation: sn-rise-kf 11s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .sn-grid-drift, .sn-wave-drift, .sn-grid-bob, .sn-rise { animation: none; }
        }
      `}</style>

      {/* gradient mesh base: soft washes of the logo green */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/90 via-primary-50/40 to-primary-50/80" />
      <div ref={glowRef} className="absolute inset-0 will-change-transform">
        <div className="absolute -top-44 left-[12%] h-[480px] w-[640px] rounded-full bg-primary-300/30 blur-[120px]" />
        <div className="absolute -top-32 right-[-8%] h-[440px] w-[600px] rounded-full bg-primary-200/40 blur-[110px]" />
        <div className="absolute bottom-[-120px] left-[38%] h-[380px] w-[560px] rounded-full bg-primary-200/30 blur-[120px]" />
        {/* radial glow behind the hero content */}
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_50%_50%_at_50%_18%,rgba(29,191,97,0.12),transparent_70%)]" />
      </div>

      {/* faint molecular clusters in the top corners */}
      <MoleculeCluster className="absolute left-6 top-10 hidden h-[130px] w-[190px] opacity-60 xl:block" />
      <MoleculeCluster className="absolute right-6 top-12 hidden h-[130px] w-[190px] opacity-60 xl:block" flip />

      {/* flowing 3D grid waves anchored bottom-left / bottom-right */}
      <div ref={gridRef} className="sn-grid-bob absolute inset-0 will-change-transform">
        <GridWaveField
          uid="gwl"
          className="absolute -bottom-8 -left-[12%] h-[300px] w-[62%] sm:h-[380px]"
          style={{
            WebkitMaskImage:
              'radial-gradient(115% 105% at 0% 100%, black 42%, transparent 76%)',
            maskImage: 'radial-gradient(115% 105% at 0% 100%, black 42%, transparent 76%)',
          }}
        />
        <GridWaveField
          uid="gwr"
          className="absolute -bottom-8 -right-[12%] h-[300px] w-[62%] sm:h-[380px]"
          style={{
            WebkitMaskImage:
              'radial-gradient(115% 105% at 0% 100%, black 42%, transparent 76%)',
            maskImage: 'radial-gradient(115% 105% at 0% 100%, black 42%, transparent 76%)',
            transform: 'scaleX(-1)',
          }}
        />
        <RisingParticles />
      </div>
    </div>
  )
}

/** Connected product strip anchoring the hero. EDC carries the strongest weight. */
function ProductStrip({ items }) {
  return (
    <ol className="mt-9 flex flex-wrap items-stretch justify-center gap-y-4 lg:flex-nowrap">
      {items.map((item, index) => {
        const Icon = getIcon(item.icon)
        return (
          <li key={item.name} className="flex items-center">
            {index > 0 && (
              <span aria-hidden="true" className="relative mx-1.5 hidden h-px w-7 bg-primary-600/40 lg:block">
                <span className="absolute -top-[2.5px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary-600/70" />
              </span>
            )}
            <span
              className={cn(
                'flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left transition-colors',
                item.featured
                  ? 'border-primary-600 bg-primary-50 shadow-[0_0_0_4px_rgba(29,191,97,0.10)]'
                  : 'border-transparent',
              )}
            >
              <span
                className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
                  item.featured
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-primary-700 ring-1 ring-stone-200',
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold leading-tight text-navy-900">
                  {item.name}
                </span>
                <span className="block max-w-[8.5rem] text-[11px] leading-snug text-stone-500">
                  {item.desc}
                </span>
              </span>
            </span>
          </li>
        )
      })}
    </ol>
  )
}

export function HomeHero({ content }) {
  return (
    <section className="relative bg-white">
      <HeroBackdrop />

      <div className="relative mx-auto max-w-content px-6 pb-16 pt-14 text-center sm:pt-16 lg:px-8 lg:pt-20">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-700">
            <Activity className="h-4 w-4 text-primary-600" aria-hidden="true" />
            {content.eyebrow}
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-[2.4rem] font-bold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl xl:text-[66px]">
            {content.titleLead}
            <br className="hidden sm:block" /> {content.titleTail}{' '}
            <span className="text-primary-700">{content.titleAccent}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[42.5rem] text-lg leading-relaxed text-stone-600 sm:text-xl">
            {content.description}
          </p>

          {/* Product label row */}
          <ul className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5">
            {content.products.map((name, index) => (
              <li key={name} className="flex items-center gap-2.5">
                {index > 0 && (
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-primary-600" />
                )}
                <span className="text-sm font-semibold tracking-wide text-navy-800">{name}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" href={content.primaryCta.href} className="group w-full sm:w-auto">
              {content.primaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              href={content.secondaryCta.href}
              className="group w-full bg-white sm:w-auto"
            >
              {content.secondaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
          </div>
        </Reveal>

        {/* Product visual anchors the hero */}
        <Reveal delay={0.15} className="relative mt-12 lg:mt-14">
          <div className="relative mx-auto max-w-[1100px]">
            <div
              aria-hidden="true"
              className="absolute -inset-x-6 bottom-6 top-16 rounded-[40px] bg-primary-600/10 blur-3xl"
            />
            <DashboardPreview className="relative" />
          </div>
        </Reveal>

        {/* Connected product strip */}
        <Reveal delay={0.25}>
          <ProductStrip items={content.strip} />
        </Reveal>
      </div>
    </section>
  )
}
