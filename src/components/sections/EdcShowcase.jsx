import { ArrowRight, History, MessageSquareWarning, Users } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { FeaturePanel } from '../mockups/ProductMockups'

/* ---- illustrative sample data (UI representation, not production values) ---- */

const capabilities = [
  {
    icon: Users,
    name: 'Subject Management',
    panel: {
      title: 'Subjects · ONC-2026-01',
      badge: { text: '1,248 enrolled', tone: 'navy' },
      rows: [
        { label: 'SUBJ-0142', sub: 'S-004 Boston General · Cycle 3 Day 1', badge: { text: 'Enrolled', tone: 'green' } },
        { label: 'SUBJ-0139', sub: 'S-011 Charité Berlin · Cycle 2 Day 15', badge: { text: 'Completed', tone: 'navy' } },
        { label: 'SUBJ-0151', sub: 'S-002 Apollo Hyderabad · Screening', badge: { text: 'Screening', tone: 'gray' } },
        { label: 'SUBJ-0147', sub: 'S-017 Seoul St. Mary’s · Cycle 1 Day 8', badge: { text: 'Enrolled', tone: 'green' } },
      ],
      footer: 'Enrolled across 24 active sites',
    },
  },
  {
    icon: MessageSquareWarning,
    name: 'Query Management',
    panel: {
      title: 'Query Manager',
      badge: { text: '37 open', tone: 'amber' },
      rows: [
        { label: 'Weight change flagged', sub: 'Vitals · SUBJ-0142 · C3D1', badge: { text: 'Open', tone: 'gray' } },
        { label: 'ConMed dates inconsistent', sub: 'ConMeds · SUBJ-0151 · Screening', badge: { text: 'Open', tone: 'gray' } },
        { label: 'AE severity missing', sub: 'Adverse Events · SUBJ-0139 · C2D15', badge: { text: 'Answered', tone: 'green' } },
        { label: 'Lab value out of range', sub: 'Local Labs · SUBJ-0147 · C1D8', badge: { text: 'Answered', tone: 'green' } },
      ],
      footer: 'Median resolution time · 2.1 days',
    },
  },
  {
    icon: History,
    name: 'Audit Trail',
    panel: {
      title: 'Audit Trail',
      badge: { text: 'Part 11', tone: 'navy' },
      rows: [
        { label: 'Value changed', sub: 'Systolic BP: 181 → 118 · j.moreau', value: '14:32' },
        { label: 'Query answered', sub: 'Vitals · SUBJ-0142', value: '14:31' },
        { label: 'Query raised', sub: 'Edit check EC-204', value: '13:05' },
        { label: 'Form signed', sub: 'Cycle 2 Day 15 · SUBJ-0139', value: '11:48' },
      ],
      footer: 'Every action recorded with reason for change',
    },
  },
]

export function EdcShowcase({ content }) {
  return (
    <section className="border-y border-stone-200 bg-stone-50 py-14 lg:py-16">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Badge icon="database">{content.eyebrow}</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
                {content.titleLead}
                <br />
                {content.titleTail}
              </h2>
              <p className="mt-5 text-lg text-stone-600">{content.sub}</p>
            </div>
            <Button variant="secondary" to={content.cta.to} className="group w-fit bg-white">
              {content.cta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {capabilities.map((capability, i) => (
            <Reveal key={capability.name} delay={i * 0.08}>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600/10 text-primary-700">
                  <capability.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold text-navy-900">{capability.name}</p>
              </div>
              <FeaturePanel panel={capability.panel} />
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-xs text-stone-400">
          Interface shown with illustrative sample data.
        </p>
      </div>
    </section>
  )
}
