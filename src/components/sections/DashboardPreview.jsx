import {
  Bell,
  CalendarCheck,
  ClipboardList,
  Database,
  FileText,
  History,
  LayoutDashboard,
  MessageSquareWarning,
  PieChart,
  Users,
} from 'lucide-react'
import { cn } from '../../utils/cn'
import logoSrc from '../../assets/logo/SclinNexus_color_logo.png'

const sideNav = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Subjects' },
  { icon: FileText, label: 'Forms' },
  { icon: MessageSquareWarning, label: 'Queries' },
  { icon: CalendarCheck, label: 'Visits' },
  { icon: PieChart, label: 'Reports' },
  { icon: History, label: 'Audit Trail' },
]

const kpis = [
  { value: '1,248', label: 'Subjects Enrolled', delta: '+32 this week', up: true },
  { value: '86%', label: 'Forms Complete', bar: 86 },
  { value: '37', label: 'Open Queries', delta: '−9 this week', up: true },
  { value: '18', label: 'Active Sites', delta: '3 countries' },
]

const sites = [
  { id: 'S-004', name: 'Boston General', enrolled: 142, pct: 96 },
  { id: 'S-011', name: 'Charité Berlin', enrolled: 128, pct: 91 },
  { id: 'S-002', name: 'Apollo Hyderabad', enrolled: 117, pct: 88 },
  { id: 'S-017', name: 'Seoul St. Mary’s', enrolled: 94, pct: 82 },
]

const quality = [
  { icon: FileText, label: 'Forms', value: '12,480' },
  { icon: CalendarCheck, label: 'Visits', value: '3,214' },
  { icon: Database, label: 'Data Points', value: '486k' },
  { icon: ClipboardList, label: 'Protocol Deviations', value: '12' },
]

function EnrollmentChart() {
  return (
    <svg viewBox="0 0 400 130" className="h-28 w-full sm:h-32" preserveAspectRatio="none">
      <defs>
        <linearGradient id="dp-enroll" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1DBF61" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#1DBF61" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[26, 52, 78, 104].map((y) => (
        <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#E7EBEE" strokeWidth="1" />
      ))}
      {/* target */}
      <path
        d="M0 118 L400 22"
        fill="none"
        stroke="#22333F"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        opacity="0.35"
      />
      {/* actual */}
      <path
        d="M0 122 C40 116 60 108 90 100 C130 89 150 88 190 74 C230 60 250 62 290 48 C330 35 355 34 400 30 L400 130 L0 130 Z"
        fill="url(#dp-enroll)"
      />
      <path
        d="M0 122 C40 116 60 108 90 100 C130 89 150 88 190 74 C230 60 250 62 290 48 C330 35 355 34 400 30"
        fill="none"
        stroke="#1DBF61"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="400" cy="30" r="4" fill="#1DBF61" />
    </svg>
  )
}

function QualityRing() {
  const r = 34
  const c = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 88 88" className="h-24 w-24 shrink-0">
      <circle cx="44" cy="44" r={r} fill="none" stroke="#E7EBEE" strokeWidth="9" />
      <circle
        cx="44"
        cy="44"
        r={r}
        fill="none"
        stroke="#1DBF61"
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray={`${c * 0.946} ${c}`}
        transform="rotate(-90 44 44)"
      />
      <text
        x="44"
        y="42"
        textAnchor="middle"
        className="fill-navy-900"
        fontSize="17"
        fontWeight="700"
      >
        94.6%
      </text>
      <text x="44" y="57" textAnchor="middle" fill="#52707F" fontSize="9">
        Data Quality
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
      aria-label="Preview of the SclinNexus EDC study dashboard showing enrollment, data quality and site performance for a sample study"
      className={cn(
        'overflow-hidden rounded-2xl border border-stone-200 bg-white text-left shadow-[0_32px_96px_-32px_rgba(17,27,34,0.35)]',
        className,
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-stone-200 bg-stone-50 px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
        </span>
        <span className="hidden flex-1 justify-center sm:flex">
          <span className="rounded-md bg-white px-4 py-1 text-[11px] text-stone-400 ring-1 ring-stone-200">
            app.sclinnexus.com/studies/onc-2026-01
          </span>
        </span>
        <span className="ml-auto rounded-full bg-stone-100 px-2.5 py-0.5 text-[10px] font-medium text-stone-400 sm:ml-0">
          Illustrative interface
        </span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-44 shrink-0 flex-col border-r border-navy-800 bg-navy-900 px-3 py-4 md:flex">
          <span className="flex items-center gap-2 px-2">
            <img src={logoSrc} alt="" className="h-6 w-6 object-contain" />
            <span className="text-xs font-semibold tracking-tight text-white">SclinNexus EDC</span>
          </span>
          <ul className="mt-5 space-y-0.5">
            {sideNav.map(({ icon: Icon, label, active }) => (
              <li
                key={label}
                className={cn(
                  'flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[11px] font-medium',
                  active
                    ? 'bg-primary-600/15 text-primary-600'
                    : 'text-navy-300',
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-auto rounded-lg bg-navy-800 px-2.5 py-2.5">
            <p className="text-[10px] font-medium text-navy-300">Study build</p>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-navy-700">
              <div className="h-full w-[92%] rounded-full bg-primary-600" />
            </div>
          </div>
        </aside>

        {/* Main pane */}
        <div className="min-w-0 flex-1 bg-stone-50/60">
          {/* Study header */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-stone-200 bg-white px-4 py-3 sm:px-5">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-stone-400">
                Study
              </p>
              <p className="flex items-center gap-2 text-sm font-semibold text-navy-900">
                ONC-2026-01
                <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-semibold text-primary-700 ring-1 ring-inset ring-primary-600/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                  Active
                </span>
              </p>
            </div>
            <p className="hidden text-[11px] text-stone-500 sm:block">
              Phase II Oncology · 18 sites · Protocol v3.1
            </p>
            <span className="ml-auto hidden items-center gap-3 sm:flex">
              <Bell className="h-3.5 w-3.5 text-stone-400" />
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-800 text-[10px] font-semibold text-white">
                DM
              </span>
            </span>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-2 gap-2.5 p-3 sm:gap-3 sm:p-4 lg:grid-cols-4">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-stone-200 bg-white px-3.5 py-3"
              >
                <p className="text-lg font-bold tracking-tight text-navy-900 sm:text-xl">
                  {kpi.value}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-stone-500">{kpi.label}</p>
                {kpi.bar ? (
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-stone-100">
                    <div
                      className="h-full rounded-full bg-primary-600"
                      style={{ width: `${kpi.bar}%` }}
                    />
                  </div>
                ) : (
                  <p
                    className={cn(
                      'mt-1.5 text-[10px] font-medium',
                      kpi.up ? 'text-primary-700' : 'text-stone-400',
                    )}
                  >
                    {kpi.delta}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid gap-2.5 px-3 pb-3 sm:gap-3 sm:px-4 sm:pb-4 lg:grid-cols-5">
            <div className="rounded-xl border border-stone-200 bg-white p-3.5 lg:col-span-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-navy-900">Enrollment Progress</p>
                <span className="flex items-center gap-3 text-[10px] text-stone-500">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-3 rounded-full bg-primary-600" /> Enrolled
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-0 w-3 border-t border-dashed border-navy-600" /> Target
                  </span>
                </span>
              </div>
              <div className="mt-2">
                <EnrollmentChart />
              </div>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-3.5 lg:col-span-2">
              <p className="text-xs font-semibold text-navy-900">Data Quality</p>
              <div className="mt-2 flex items-center gap-4">
                <QualityRing />
                <ul className="min-w-0 flex-1 space-y-1.5">
                  {quality.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-center gap-2 text-[11px]">
                      <Icon className="h-3 w-3 shrink-0 text-primary-700" />
                      <span className="truncate text-stone-500">{label}</span>
                      <span className="ml-auto font-semibold text-navy-900">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Site performance */}
          <div className="hidden px-4 pb-4 sm:block">
            <div className="rounded-xl border border-stone-200 bg-white p-3.5">
              <p className="text-xs font-semibold text-navy-900">Site Performance</p>
              <ul className="mt-2.5 space-y-2">
                {sites.map((s) => (
                  <li key={s.id} className="flex items-center gap-3 text-[11px]">
                    <span className="w-10 shrink-0 font-mono text-stone-400">{s.id}</span>
                    <span className="w-32 shrink-0 truncate font-medium text-navy-800">
                      {s.name}
                    </span>
                    <span className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-stone-100">
                      <span
                        className="block h-full rounded-full bg-primary-600"
                        style={{ width: `${s.pct}%` }}
                      />
                    </span>
                    <span className="w-16 shrink-0 text-right text-stone-500">
                      {s.enrolled} subj.
                    </span>
                    <span className="w-9 shrink-0 text-right font-semibold text-navy-900">
                      {s.pct}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
