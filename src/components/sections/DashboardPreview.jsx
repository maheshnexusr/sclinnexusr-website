import {
  ArrowDownRight,
  ArrowUpRight,
  Building2,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  FileText,
  History,
  LayoutDashboard,
  MessageSquareWarning,
  MoreVertical,
  PieChart,
  Settings,
  Users,
} from 'lucide-react'
import { cn } from '../../utils/cn'
import { Logo } from '../layout/Logo'

const sideNav = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Subjects' },
  { icon: Building2, label: 'Sites' },
  { icon: CalendarCheck, label: 'Visits' },
  { icon: FileText, label: 'Forms' },
  { icon: MessageSquareWarning, label: 'Queries' },
  { icon: PieChart, label: 'Reports' },
  { icon: History, label: 'Audit Trail' },
  { icon: Settings, label: 'Settings' },
]

const kpis = [
  { icon: Users, value: '1,248', label: 'Subjects', delta: '12% vs last 30 days', dir: 'up' },
  { icon: Building2, value: '18', label: 'Active Sites', delta: '8% vs last 30 days', dir: 'up' },
  { icon: ClipboardCheck, value: '86%', label: 'Data Complete', delta: '6% vs last 30 days', dir: 'up' },
  { icon: MessageSquareWarning, value: '37', label: 'Open Queries', delta: '5 vs last 30 days', dir: 'down' },
]

const sites = [
  { name: 'Site 101', pct: 92 },
  { name: 'Site 102', pct: 88 },
  { name: 'Site 103', pct: 75 },
  { name: 'Site 104', pct: 68 },
  { name: 'Site 105', pct: 55 },
]

const activity = [
  { text: 'Subject 1025 completed Visit 3', time: '2m ago' },
  { text: 'Site 103 resolved Query #321', time: '15m ago' },
  { text: 'Form CRF-12 updated', time: '1h ago' },
]

const metrics = [
  { label: 'Forms', value: '8,921' },
  { label: 'Visits', value: '12,480' },
  { label: 'Data Points', value: '156,430' },
  { label: 'Protocol Deviations', value: '14' },
]

function EnrollmentChart() {
  const months = ['Jan ’26', 'Feb ’26', 'Mar ’26', 'Apr ’26', 'May ’26', 'Jun ’26']
  const points = [
    [30, 128],
    [95, 112],
    [160, 100],
    [225, 84],
    [290, 62],
    [355, 46],
    [420, 34],
  ]
  const path = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x} ${y}`).join(' ')
  return (
    <svg viewBox="0 0 440 158" className="h-36 w-full sm:h-40">
      {/* gridlines + y labels */}
      {[
        { y: 34, label: '1,500' },
        { y: 66, label: '1,000' },
        { y: 98, label: '500' },
        { y: 130, label: '0' },
      ].map(({ y, label }) => (
        <g key={y}>
          <line x1="30" x2="432" y1={y} y2={y} stroke="#E7EBEE" strokeWidth="1" />
          <text x="24" y={y + 3} textAnchor="end" fontSize="8.5" fill="#74909F">
            {label}
          </text>
        </g>
      ))}
      {/* target (dashed) pulls ahead on the right */}
      <path
        d="M30 128 C120 116 200 100 280 78 C330 64 390 40 428 22"
        fill="none"
        stroke="#A2B5C1"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      {/* actual */}
      <path d={path} fill="none" stroke="#1DBF61" strokeWidth="2.5" strokeLinejoin="round" />
      {points.map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" fill="#fff" stroke="#1DBF61" strokeWidth="2" />
      ))}
      {/* x labels */}
      {months.map((m, i) => (
        <text key={m} x={30 + i * 78} y="148" fontSize="8.5" fill="#74909F">
          {m}
        </text>
      ))}
    </svg>
  )
}

function QualityRing() {
  const r = 30
  const c = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 76 76" className="h-20 w-20 shrink-0">
      <circle cx="38" cy="38" r={r} fill="none" stroke="#E7EBEE" strokeWidth="8" />
      <circle
        cx="38"
        cy="38"
        r={r}
        fill="none"
        stroke="#1DBF61"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${c * 0.946} ${c}`}
        transform="rotate(-90 38 38)"
      />
      <text x="38" y="43" textAnchor="middle" className="fill-navy-900" fontSize="15" fontWeight="700">
        94.6%
      </text>
    </svg>
  )
}

/**
 * Illustrative render of the SclinNexus EDC study dashboard.
 * Purely presentational — values are sample data, not production claims.
 */
export function DashboardPreview({ className }) {
  return (
    <div
      role="img"
      aria-label="Preview of the SclinNexus EDC study dashboard showing enrollment progress, site performance, data quality and study activity for a sample study"
      className={cn(
        'overflow-hidden rounded-2xl border border-stone-200 bg-white text-left shadow-[0_32px_96px_-32px_rgba(17,27,34,0.35)]',
        className,
      )}
    >
      {/* Mobile brand bar — keeps SclinNexus visible when the sidebar is hidden */}
      <div className="flex items-center bg-[#1A2831] px-4 py-2.5 md:hidden">
        <Logo tone="light" compact />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-48 shrink-0 flex-col rounded-l-2xl bg-[#1A2831] px-3 py-4 md:flex">
          <div className="px-2 pb-4">
            <Logo tone="light" compact />
          </div>
          <ul className="space-y-1">
            {sideNav.map(({ icon: Icon, label, active }) => (
              <li
                key={label}
                className={cn(
                  'flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium',
                  active ? 'bg-primary-600 text-white' : 'text-[#A2B5C1]',
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main pane */}
        <div className="min-w-0 flex-1">
          {/* Study header */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-stone-200 px-4 py-3 sm:px-5">
            <p className="text-sm font-semibold text-navy-900 sm:text-base">
              Study: <span className="font-bold">ONC-2026-01</span>
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-2.5 py-0.5 text-[11px] font-semibold text-primary-700 ring-1 ring-inset ring-primary-600/25">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
              Active
            </span>
            <span className="ml-auto flex items-center gap-2.5">
              <span className="hidden items-center gap-2 rounded-lg border border-stone-200 px-3 py-1.5 text-[11px] font-medium text-navy-700 sm:flex">
                May 20 – Jun 20, 2026
                <CalendarDays className="h-3.5 w-3.5 text-primary-700" />
              </span>
              <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[10px] font-medium text-stone-400">
                Illustrative
              </span>
              <MoreVertical className="h-4 w-4 text-stone-400" />
            </span>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-2 gap-2.5 p-3 sm:gap-3 sm:p-4 lg:grid-cols-4">
            {kpis.map(({ icon: Icon, value, label, delta, dir }) => (
              <div key={label} className="rounded-xl border border-stone-200 bg-white px-3.5 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-lg font-bold leading-tight tracking-tight text-navy-900 sm:text-xl">
                      {value}
                    </p>
                    <p className="truncate text-[11px] font-medium text-stone-500">{label}</p>
                  </div>
                </div>
                <p className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-primary-700">
                  {dir === 'up' ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {delta}
                </p>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid gap-2.5 px-3 pb-3 sm:gap-3 sm:px-4 sm:pb-4 lg:grid-cols-5">
            <div className="rounded-xl border border-stone-200 bg-white p-3.5 lg:col-span-3">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <p className="text-xs font-semibold text-navy-900">Enrollment Progress</p>
                <span className="flex items-center gap-3 text-[10px] text-stone-500">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-3 rounded-full bg-primary-600" /> Actual
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 border-t border-dashed border-navy-400" /> Target
                  </span>
                </span>
                <span className="ml-auto hidden items-center gap-1 rounded-lg border border-stone-200 px-2 py-1 text-[10px] font-medium text-navy-700 sm:flex">
                  Cumulative <ChevronDown className="h-3 w-3 text-stone-400" />
                </span>
              </div>
              <div className="mt-2">
                <EnrollmentChart />
              </div>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-3.5 lg:col-span-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-navy-900">Site Performance</p>
                <span className="hidden items-center gap-1 rounded-lg border border-stone-200 px-2 py-1 text-[10px] font-medium text-navy-700 sm:flex">
                  All Sites <ChevronDown className="h-3 w-3 text-stone-400" />
                </span>
              </div>
              <ul className="mt-3 space-y-2.5">
                {sites.map((s) => (
                  <li key={s.name} className="flex items-center gap-3 text-[11px]">
                    <span className="w-14 shrink-0 font-medium text-navy-800">{s.name}</span>
                    <span className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-stone-100">
                      <span
                        className="block h-full rounded-full bg-primary-600"
                        style={{ width: `${s.pct}%` }}
                      />
                    </span>
                    <span className="w-9 shrink-0 text-right font-semibold text-navy-900">
                      {s.pct}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid gap-2.5 px-3 pb-3 sm:gap-3 sm:px-4 sm:pb-4 lg:grid-cols-3">
            <div className="rounded-xl border border-stone-200 bg-white p-3.5">
              <p className="text-xs font-semibold text-navy-900">Data Quality</p>
              <div className="mt-2 flex items-center gap-4">
                <QualityRing />
                <div>
                  <p className="text-sm font-semibold text-navy-900">Excellent</p>
                  <p className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-primary-700">
                    <ArrowUpRight className="h-3 w-3" />
                    4.2% vs last 30 days
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-3.5">
              <p className="text-xs font-semibold text-navy-900">Study Activity</p>
              <ul className="mt-2.5 space-y-2.5">
                {activity.map((item) => (
                  <li key={item.text} className="flex items-center gap-2.5 text-[11px]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary-50 text-primary-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0 flex-1 truncate font-medium text-navy-800">
                      {item.text}
                    </span>
                    <span className="shrink-0 text-[10px] text-stone-400">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-3.5">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-navy-900">
                <ClipboardList className="h-3.5 w-3.5 text-primary-700" />
                Study Metrics
              </p>
              <dl className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="text-[10px] font-medium text-stone-500">{m.label}</dt>
                    <dd className="text-sm font-bold tracking-tight text-navy-900">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
