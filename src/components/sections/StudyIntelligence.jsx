import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'

function EnrollmentSpark() {
  return (
    <svg viewBox="0 0 260 80" className="mt-5 h-20 w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="si-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1DBF61" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1DBF61" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 72 C30 66 45 60 70 52 C100 43 115 44 145 33 C175 23 200 22 230 14 L260 9 L260 80 L0 80 Z"
        fill="url(#si-area)"
      />
      <path
        d="M0 72 C30 66 45 60 70 52 C100 43 115 44 145 33 C175 23 200 22 230 14 L260 9"
        fill="none"
        stroke="#1DBF61"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="260" cy="9" r="3.5" fill="#1DBF61" />
    </svg>
  )
}

function QualityBars() {
  const bars = [78, 84, 82, 88, 91, 89, 94.6]
  return (
    <svg viewBox="0 0 260 80" className="mt-5 h-20 w-full" aria-hidden="true">
      {bars.map((v, i) => (
        <rect
          key={i}
          x={i * 38 + 8}
          y={80 - (v / 100) * 76}
          width="20"
          height={(v / 100) * 76}
          rx="4"
          fill={i === bars.length - 1 ? '#1DBF61' : '#C8D4DC'}
        />
      ))}
    </svg>
  )
}

function QueriesTrend() {
  return (
    <svg viewBox="0 0 260 80" className="mt-5 h-20 w-full" preserveAspectRatio="none" aria-hidden="true">
      {[20, 40, 60].map((y) => (
        <line key={y} x1="0" x2="260" y1={y} y2={y} stroke="#E7EBEE" strokeWidth="1" />
      ))}
      <path
        d="M0 18 C25 24 40 30 65 28 C95 26 110 40 140 44 C170 48 195 52 225 58 L260 62"
        fill="none"
        stroke="#22333F"
        strokeWidth="2"
        strokeDasharray="1 0"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="260" cy="62" r="3.5" fill="#1DBF61" />
    </svg>
  )
}

const modules = [
  {
    label: 'Enrollment',
    value: '1,248 / 1,500',
    chip: { text: '83% of target', tone: 'bg-primary-50 text-primary-800 ring-primary-600/25' },
    caption: 'Enrolled subjects against the study target, across all sites.',
    chart: EnrollmentSpark,
  },
  {
    label: 'Data Quality',
    value: '94.6%',
    chip: { text: 'Excellent', tone: 'bg-primary-50 text-primary-800 ring-primary-600/25' },
    caption: 'Clean, verified data points as a share of everything captured.',
    chart: QualityBars,
  },
  {
    label: 'Open Queries',
    value: '37',
    chip: { text: '−9 this week', tone: 'bg-navy-100 text-navy-800 ring-navy-400/30' },
    caption: 'Trending down as sites answer within the review cycle.',
    chart: QueriesTrend,
  },
]

export function StudyIntelligence({ content }) {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            {content.titleLead}
            <br />
            <span className="text-primary-700">{content.titleTail}</span>
          </h2>
          <p className="mt-4 text-lg text-stone-600">{content.sub}</p>
          <Link
            to={content.cta.to}
            className="group mt-4 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            {content.cta.label}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {modules.map((mod, index) => {
            const Chart = mod.chart
            return (
              <Reveal key={mod.label} delay={index * 0.08} className="h-full">
                <Card className="h-full p-6 transition-colors duration-300 hover:border-primary-600">
                  <p className="text-sm font-medium text-stone-500">{mod.label}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <p className="text-3xl font-bold tracking-tight text-navy-900">{mod.value}</p>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${mod.chip.tone}`}
                    >
                      {mod.chip.text}
                    </span>
                  </div>
                  <Chart />
                  <p className="mt-4 text-xs leading-relaxed text-stone-500">{mod.caption}</p>
                </Card>
              </Reveal>
            )
          })}
        </div>

        <p className="mt-6 text-xs text-stone-400">Dashboard data shown for illustration.</p>
      </div>
    </section>
  )
}
