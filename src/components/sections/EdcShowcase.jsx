import { ArrowRight, Filter, MessageSquareWarning, Search } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { Tabs } from '../ui/Tabs'
import { cn } from '../../utils/cn'

/* ---- illustrative sample data (UI representation, not production values) ---- */

const subjects = [
  { id: 'SUBJ-0142', site: 'S-004 Boston General', visit: 'Cycle 3 Day 1', forms: 92, status: 'Enrolled' },
  { id: 'SUBJ-0139', site: 'S-011 Charité Berlin', visit: 'Cycle 2 Day 15', forms: 100, status: 'Completed' },
  { id: 'SUBJ-0151', site: 'S-002 Apollo Hyderabad', visit: 'Screening', forms: 34, status: 'Screening' },
  { id: 'SUBJ-0147', site: 'S-017 Seoul St. Mary’s', visit: 'Cycle 1 Day 8', forms: 78, status: 'Enrolled' },
  { id: 'SUBJ-0128', site: 'S-004 Boston General', visit: 'End of Treatment', forms: 96, status: 'Enrolled' },
]

const queries = [
  { text: 'Weight decreased >10% since baseline — please confirm value.', ref: 'Vitals · SUBJ-0142 · C3D1', age: '2d', status: 'Open' },
  { text: 'Concomitant medication end date is before start date.', ref: 'ConMeds · SUBJ-0151 · Screening', age: '1d', status: 'Open' },
  { text: 'AE severity grade missing for reported event.', ref: 'Adverse Events · SUBJ-0139 · C2D15', age: '4h', status: 'Answered' },
  { text: 'Lab value outside expected range — verify units.', ref: 'Local Labs · SUBJ-0147 · C1D8', age: '3d', status: 'Answered' },
]

const auditRows = [
  { time: '14:32:08', user: 'j.moreau (CRC)', action: 'Value changed', detail: 'Systolic BP: 181 → 118', reason: 'Transcription error' },
  { time: '14:31:52', user: 'j.moreau (CRC)', action: 'Query answered', detail: 'Vitals · SUBJ-0142', reason: 'Source verified' },
  { time: '13:05:17', user: 'a.rivera (DM)', action: 'Query raised', detail: 'Weight change >10% since baseline', reason: 'Edit check EC-204' },
  { time: '11:48:33', user: 'system', action: 'Form signed', detail: 'Cycle 2 Day 15 · SUBJ-0139', reason: 'E-signature (21 CFR Part 11)' },
]

const statusStyles = {
  Enrolled: 'bg-primary-50 text-primary-800 ring-primary-600/25',
  Completed: 'bg-navy-100 text-navy-800 ring-navy-400/30',
  Screening: 'bg-stone-100 text-stone-600 ring-stone-300',
}

function PanelShell({ title, meta, children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-card">
      <div className="flex flex-wrap items-center gap-3 border-b border-stone-100 px-4 py-3 sm:px-5">
        <p className="text-sm font-semibold text-navy-900">{title}</p>
        <p className="hidden text-xs text-stone-400 sm:block">{meta}</p>
        <span className="ml-auto flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-lg border border-stone-200 px-2.5 py-1.5 text-xs text-stone-400 sm:flex">
            <Search className="h-3.5 w-3.5" aria-hidden="true" /> Search
          </span>
          <span className="flex items-center gap-1.5 rounded-lg border border-stone-200 px-2.5 py-1.5 text-xs text-stone-400">
            <Filter className="h-3.5 w-3.5" aria-hidden="true" /> Filter
          </span>
        </span>
      </div>
      <div className="overflow-x-auto">{children}</div>
    </div>
  )
}

function SubjectsPanel() {
  return (
    <PanelShell title="Subjects" meta="Study ONC-2026-01 · 1,248 enrolled">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr className="border-b border-stone-100 text-xs uppercase tracking-wide text-stone-400">
            <th className="px-5 py-2.5 font-medium">Subject</th>
            <th className="px-3 py-2.5 font-medium">Site</th>
            <th className="px-3 py-2.5 font-medium">Current visit</th>
            <th className="px-3 py-2.5 font-medium">Forms</th>
            <th className="px-5 py-2.5 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((s) => (
            <tr key={s.id} className="border-b border-stone-50 last:border-0">
              <td className="px-5 py-3 font-mono text-xs font-medium text-navy-900">{s.id}</td>
              <td className="px-3 py-3 text-xs text-stone-500">{s.site}</td>
              <td className="px-3 py-3 text-xs text-stone-600">{s.visit}</td>
              <td className="px-3 py-3">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-16 overflow-hidden rounded-full bg-stone-100">
                    <span
                      className="block h-full rounded-full bg-primary-600"
                      style={{ width: `${s.forms}%` }}
                    />
                  </span>
                  <span className="text-xs text-stone-500">{s.forms}%</span>
                </span>
              </td>
              <td className="px-5 py-3">
                <span
                  className={cn(
                    'rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset',
                    statusStyles[s.status],
                  )}
                >
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </PanelShell>
  )
}

function QueriesPanel() {
  return (
    <PanelShell title="Query Manager" meta="37 open · median age 2.1 days">
      <ul className="min-w-[560px] divide-y divide-stone-50">
        {queries.map((q) => (
          <li key={q.text} className="flex items-center gap-4 px-5 py-3.5">
            <span
              className={cn(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                q.status === 'Open' ? 'bg-primary-50 text-primary-700' : 'bg-stone-100 text-stone-400',
              )}
            >
              <MessageSquareWarning className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-navy-900">{q.text}</span>
              <span className="mt-0.5 block text-xs text-stone-400">{q.ref}</span>
            </span>
            <span className="shrink-0 text-xs text-stone-400">{q.age}</span>
            <span
              className={cn(
                'shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset',
                q.status === 'Open'
                  ? 'bg-white text-navy-700 ring-stone-300'
                  : 'bg-primary-50 text-primary-800 ring-primary-600/25',
              )}
            >
              {q.status}
            </span>
          </li>
        ))}
      </ul>
    </PanelShell>
  )
}

function AuditPanel() {
  return (
    <PanelShell title="Audit Trail" meta="Every action recorded with reason for change">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr className="border-b border-stone-100 text-xs uppercase tracking-wide text-stone-400">
            <th className="px-5 py-2.5 font-medium">Time</th>
            <th className="px-3 py-2.5 font-medium">User</th>
            <th className="px-3 py-2.5 font-medium">Action</th>
            <th className="px-3 py-2.5 font-medium">Detail</th>
            <th className="px-5 py-2.5 font-medium">Reason</th>
          </tr>
        </thead>
        <tbody>
          {auditRows.map((row) => (
            <tr key={row.time} className="border-b border-stone-50 last:border-0">
              <td className="px-5 py-3 font-mono text-xs text-stone-400">{row.time}</td>
              <td className="px-3 py-3 text-xs font-medium text-navy-800">{row.user}</td>
              <td className="px-3 py-3">
                <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-[11px] font-semibold text-primary-800 ring-1 ring-inset ring-primary-600/25">
                  {row.action}
                </span>
              </td>
              <td className="px-3 py-3 text-xs text-stone-600">{row.detail}</td>
              <td className="px-5 py-3 text-xs text-stone-400">{row.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </PanelShell>
  )
}

export function EdcShowcase({ content }) {
  return (
    <section className="border-y border-stone-200 bg-stone-50 py-20 lg:py-24">
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

        <Reveal delay={0.1} className="mt-12">
          <Tabs
            items={[
              { id: 'subjects', label: 'Subject List', panel: <SubjectsPanel /> },
              { id: 'queries', label: 'Query Management', panel: <QueriesPanel /> },
              { id: 'audit', label: 'Audit Trail', panel: <AuditPanel /> },
            ]}
          />
          <p className="mt-4 text-xs text-stone-400">
            Interface shown with illustrative sample data.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
