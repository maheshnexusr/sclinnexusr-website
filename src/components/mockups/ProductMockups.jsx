import logoSrc from '../../assets/logo/SclinNexus_color_logo.png'

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

const badgeTones = {
  green: 'bg-primary-50 text-primary-700 ring-primary-600/20',
  amber: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  red: 'bg-red-50 text-red-700 ring-red-600/20',
  gray: 'bg-stone-100 text-stone-600 ring-stone-400/20',
  navy: 'bg-[#1A2831]/5 text-[#1A2831] ring-[#1A2831]/10',
}

export function MockBadge({ tone = 'gray', children }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${badgeTones[tone] ?? badgeTones.gray}`}
    >
      {children}
    </span>
  )
}

function Wordmark() {
  return (
    <span className="flex items-center gap-1.5">
      <img src={logoSrc} alt="" className="h-4 w-4 object-contain" />
      <span className="text-[11px] font-bold tracking-tight text-[#1A2831]">
        Sclin<span className="text-primary-600">Nexus</span>
      </span>
    </span>
  )
}

export function MockWindow({ url = 'app.sclinnexus.com', nav = [], active, children }) {
  return (
    <div className="select-none overflow-hidden rounded-2xl border border-stone-200 bg-white text-left shadow-xl shadow-stone-900/5">
      <div className="flex items-center gap-2 border-b border-stone-200 bg-stone-50 px-3.5 py-2">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-stone-300" />
          <span className="h-2 w-2 rounded-full bg-stone-300" />
          <span className="h-2 w-2 rounded-full bg-primary-400" />
        </span>
        <span className="ml-2 hidden rounded-md bg-white px-2.5 py-0.5 text-[10px] text-stone-400 ring-1 ring-stone-200 sm:block">
          {url}
        </span>
      </div>
      <div className="flex">
        {nav.length > 0 && (
          <div className="hidden w-36 shrink-0 flex-col gap-0.5 border-r border-stone-200 bg-stone-50/60 p-3 sm:flex">
            <div className="mb-2 px-1.5">
              <Wordmark />
            </div>
            {nav.map((item) => (
              <span
                key={item}
                className={`rounded-lg px-2 py-1.5 text-[11px] font-medium ${
                  item === active
                    ? 'bg-primary-600/10 text-primary-700'
                    : 'text-stone-500'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        )}
        <div className="min-w-0 flex-1 p-4">{children}</div>
      </div>
    </div>
  )
}

export function MockStat({ label, value, badge }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-2.5">
      <p className="text-[10px] font-medium uppercase tracking-wide text-stone-400">{label}</p>
      <div className="mt-1 flex items-center gap-1.5">
        {value != null && <p className="text-base font-bold text-[#1A2831]">{value}</p>}
        {badge && <MockBadge tone={badge.tone}>{badge.text}</MockBadge>}
      </div>
    </div>
  )
}

export function MockTable({ columns, rows }) {
  return (
    <div className="overflow-hidden rounded-xl border border-stone-200">
      <table className="w-full text-left text-[11px]">
        <thead>
          <tr className="border-b border-stone-200 bg-stone-50">
            {columns.map((col) => (
              <th key={col} className="whitespace-nowrap px-2.5 py-1.5 font-semibold text-stone-500">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-stone-100 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="whitespace-nowrap px-2.5 py-1.5 text-stone-600">
                  {cell && typeof cell === 'object' ? (
                    <MockBadge tone={cell.tone}>{cell.text}</MockBadge>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function MockBars({ title, values, labels }) {
  const max = Math.max(...values)
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-3">
      <p className="text-[11px] font-semibold text-[#1A2831]">{title}</p>
      <div className="mt-2 flex h-20 gap-1.5">
        {values.map((v, i) => (
          <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
            <div
              className={`w-full rounded-t ${i === values.length - 1 ? 'bg-primary-300' : 'bg-primary-600'}`}
              style={{ height: `${(v / max) * 82}%` }}
            />
            {labels && <span className="text-[8px] text-stone-400">{labels[i]}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

/* Generic compact panel used by the alternating feature sections. */
export function FeaturePanel({ panel }) {
  return (
    <div className="select-none overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg shadow-stone-900/5">
      <div className="flex items-center justify-between gap-2 border-b border-stone-200 bg-stone-50/80 px-4 py-2.5">
        <span className="flex items-center gap-2">
          <img src={logoSrc} alt="" className="h-3.5 w-3.5 object-contain" />
          <span className="text-xs font-semibold text-[#1A2831]">{panel.title}</span>
        </span>
        {panel.badge && <MockBadge tone={panel.badge.tone}>{panel.badge.text}</MockBadge>}
      </div>
      <div className="divide-y divide-stone-100">
        {panel.rows.map((row, i) => (
          <div key={i} className="flex items-center justify-between gap-3 px-4 py-2.5">
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-[#1A2831]">{row.label}</p>
              {row.sub && <p className="truncate text-[11px] text-stone-400">{row.sub}</p>}
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {row.value && <span className="text-[11px] text-stone-500">{row.value}</span>}
              {row.badge && <MockBadge tone={row.badge.tone}>{row.badge.text}</MockBadge>}
            </div>
          </div>
        ))}
      </div>
      {panel.footer && (
        <div className="border-t border-stone-200 bg-stone-50/60 px-4 py-2 text-[11px] text-stone-400">
          {panel.footer}
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Product hero mockups                                                */
/* ------------------------------------------------------------------ */

function EdcMock() {
  return (
    <MockWindow nav={['Dashboard', 'Subjects', 'Sites', 'Queries', 'Data Quality']} active="Dashboard">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-bold text-[#1A2831]">
          Study: ONC-2026-01 <span className="ml-1 font-normal text-stone-400">Oncology · Phase II</span>
        </p>
        <MockBadge tone="green">Active</MockBadge>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <MockStat label="Subjects" value="248" />
        <MockStat label="Sites" value="18" />
        <MockStat label="Open Queries" value="12" badge={{ text: '3 due', tone: 'amber' }} />
        <MockStat label="Forms Complete" value="94%" />
      </div>
      <div className="mt-3 grid gap-2 lg:grid-cols-2">
        <MockBars
          title="Enrollment Progress"
          values={[8, 14, 22, 31, 38, 47, 52]}
          labels={['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']}
        />
        <MockTable
          columns={['Subject ID', 'Visit', 'Status', 'Query Status']}
          rows={[
            ['SCR-1024', 'Week 12', { text: 'Complete', tone: 'green' }, { text: 'No queries', tone: 'gray' }],
            ['SCR-1031', 'Week 8', { text: 'In Progress', tone: 'amber' }, { text: '1 open', tone: 'red' }],
            ['SCR-1042', 'Week 12', { text: 'Complete', tone: 'green' }, { text: 'Resolved', tone: 'green' }],
          ]}
        />
      </div>
    </MockWindow>
  )
}

function CtmsMock() {
  const milestones = ['Study Start', 'Site Activation', 'Enrollment', 'Last Patient', 'Database Lock']
  return (
    <MockWindow nav={['Study Overview', 'Sites', 'Milestones', 'Visits', 'Action Items']} active="Study Overview">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-bold text-[#1A2831]">Study Overview · CARD-2026-03</p>
        <MockBadge tone="green">On Track</MockBadge>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <MockStat label="Study Status" badge={{ text: 'Conduct', tone: 'green' }} />
        <MockStat label="Active Sites" value="24" />
        <MockStat label="Upcoming Visits" value="9" />
        <MockStat label="Action Items" value="7" badge={{ text: '2 overdue', tone: 'amber' }} />
      </div>
      <div className="mt-3 rounded-xl border border-stone-200 bg-white p-3">
        <p className="text-[11px] font-semibold text-[#1A2831]">Milestones</p>
        <div className="mt-3 flex items-center">
          {milestones.map((m, i) => (
            <div key={m} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex w-full items-center">
                <div className={`h-0.5 flex-1 ${i === 0 ? 'bg-transparent' : i <= 2 ? 'bg-primary-500' : 'bg-stone-200'}`} />
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-white ${i <= 2 ? 'bg-primary-600' : 'bg-stone-300'}`}
                />
                <div className={`h-0.5 flex-1 ${i === milestones.length - 1 ? 'bg-transparent' : i < 2 ? 'bg-primary-500' : 'bg-stone-200'}`} />
              </div>
              <span className="text-center text-[8px] font-medium leading-tight text-stone-500">{m}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2">
        <MockTable
          columns={['Site', 'Status', 'Enrolled', 'Next Visit']}
          rows={[
            ['Site 101 · Boston', { text: 'Active', tone: 'green' }, '22', 'Aug 18'],
            ['Site 204 · Berlin', { text: 'Active', tone: 'green' }, '17', 'Aug 21'],
            ['Site 310 · Pune', { text: 'Activating', tone: 'amber' }, '—', '—'],
          ]}
        />
      </div>
    </MockWindow>
  )
}

function RtsmMock() {
  return (
    <MockWindow nav={['Randomization', 'Treatments', 'Inventory', 'Shipments']} active="Randomization">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-bold text-[#1A2831]">Randomization Dashboard · NEU-2026-07</p>
        <MockBadge tone="green">Blinded</MockBadge>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <MockStat label="Subjects" value="164" />
        <MockStat label="Randomized" value="151" />
        <MockStat label="Treatment Arms" value="3" />
        <MockStat label="Kits Available" value="212" badge={{ text: 'Resupply set', tone: 'green' }} />
      </div>
      <div className="mt-3">
        <MockTable
          columns={['Site', 'Kit Type', 'Available', 'Allocated', 'Shipped']}
          rows={[
            ['Site 101', 'Kit A', '34', '12', { text: 'In transit', tone: 'amber' }],
            ['Site 204', 'Kit B', '41', '18', { text: 'Delivered', tone: 'green' }],
            ['Site 310', 'Kit A', '8', '6', { text: 'Requested', tone: 'gray' }],
          ]}
        />
      </div>
    </MockWindow>
  )
}

function EproMock() {
  const items = [
    { label: 'Pain Level', done: true },
    { label: 'Quality of Life', done: true },
    { label: 'Symptom Diary', done: true },
    { label: 'Sleep Assessment', done: false },
    { label: 'Medication Log', done: false },
  ]
  return (
    <div className="mx-auto w-64 select-none">
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#1A2831] bg-white shadow-2xl shadow-stone-900/15">
        <div className="flex justify-center bg-[#1A2831] pb-1.5">
          <span className="h-1 w-16 rounded-full bg-white/20" />
        </div>
        <div className="p-4">
          <Wordmark />
          <p className="mt-3 text-sm font-bold text-[#1A2831]">Today’s Assessments</p>
          <p className="text-[11px] text-stone-400">Tuesday · Week 12</p>
          <div className="mt-2.5 space-y-1.5">
            {items.map((item) => (
              <div
                key={item.label}
                className={`flex items-center justify-between rounded-xl border px-3 py-2 ${
                  item.done ? 'border-primary-600/20 bg-primary-50/60' : 'border-stone-200 bg-white'
                }`}
              >
                <span className="text-[11px] font-medium text-[#1A2831]">{item.label}</span>
                <MockBadge tone={item.done ? 'green' : 'gray'}>{item.done ? 'Done' : 'To do'}</MockBadge>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl bg-stone-50 p-2.5">
            <div className="flex items-center justify-between text-[10px] font-medium text-stone-500">
              <span>Progress</span>
              <span className="text-primary-700">3 / 5 completed</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-stone-200">
              <div className="h-full w-3/5 rounded-full bg-primary-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function EconsentMock() {
  const sections = [
    { label: 'Study Information', done: true },
    { label: 'Risks', done: true },
    { label: 'Benefits', done: true },
    { label: 'Questions', done: true },
    { label: 'Signature', done: false },
  ]
  return (
    <MockWindow nav={['Consent Forms', 'Participants', 'Versions', 'Audit Trail']} active="Consent Forms">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-bold text-[#1A2831]">Informed Consent · Subject 1024</p>
          <p className="text-[11px] text-stone-400">Main ICF · Version 3.1</p>
        </div>
        <MockBadge tone="amber">Pending Signature</MockBadge>
      </div>
      <div className="mt-3 space-y-1.5">
        {sections.map((s) => (
          <div
            key={s.label}
            className={`flex items-center justify-between rounded-xl border px-3 py-2 ${
              s.done ? 'border-primary-600/20 bg-primary-50/50' : 'border-stone-200 bg-white'
            }`}
          >
            <span className="text-[11px] font-medium text-[#1A2831]">{s.label}</span>
            <MockBadge tone={s.done ? 'green' : 'gray'}>{s.done ? 'Reviewed' : 'Awaiting'}</MockBadge>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl border border-dashed border-stone-300 bg-stone-50/60 px-3 py-2.5">
        <span className="text-[11px] text-stone-500">Participant signature</span>
        <span className="rounded-lg bg-primary-600 px-2.5 py-1 text-[10px] font-semibold text-white">
          Sign electronically
        </span>
      </div>
    </MockWindow>
  )
}

function RsdvMock() {
  return (
    <MockWindow nav={['Source Review', 'Subjects', 'Discrepancies', 'Audit Trail']} active="Source Review">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-bold text-[#1A2831]">
          Source Review · Subject 1024 <span className="font-normal text-stone-400">· Visit: Week 12</span>
        </p>
        <MockBadge tone="green">Reviewer access</MockBadge>
      </div>
      <div className="mt-3">
        <MockTable
          columns={['Data Point', 'Source Value', 'EDC Value', 'Review Status']}
          rows={[
            ['Systolic BP', '128 mmHg', '128 mmHg', { text: 'Verified', tone: 'green' }],
            ['Weight', '74.2 kg', '74.2 kg', { text: 'Verified', tone: 'green' }],
            ['Heart Rate', '81 bpm', '78 bpm', { text: 'Discrepancy', tone: 'red' }],
            ['Visit Date', '04 Aug 2026', '04 Aug 2026', { text: 'Needs Review', tone: 'amber' }],
          ]}
        />
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <MockStat label="Verified" value="42" />
        <MockStat label="Needs Review" value="6" />
        <MockStat label="Discrepancies" value="1" badge={{ text: 'Flagged', tone: 'red' }} />
      </div>
    </MockWindow>
  )
}

export const heroMocks = {
  edc: EdcMock,
  ctms: CtmsMock,
  'iwrs-rtsm': RtsmMock,
  epro: EproMock,
  econsent: EconsentMock,
  rsdv: RsdvMock,
}
