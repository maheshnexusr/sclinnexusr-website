export const edc = {
  slug: 'edc',
  meta: {
    title: 'ProEDC EDC | Electronic Data Capture',
    description: 'Capture, validate and manage clinical trial data with ProEDC EDC.',
  },
  breadcrumb: 'EDC',
  hero: {
    eyebrow: 'Electronic Data Capture',
    headline: ['Capture clinical data', 'with confidence.'],
    sub: 'ProEDC EDC helps clinical teams design, capture, validate and review study data through a connected electronic data capture workflow.',
    secondaryLabel: 'Explore EDC',
    illustration: 'capture',
  },
  why: {
    heading: 'Built for cleaner clinical data.',
    sub: 'Bring study forms, validation, subject data and data review into one controlled environment.',
    cards: [
      { title: 'Study Build', desc: 'Configure study forms and workflows efficiently.' },
      { title: 'Data Validation', desc: 'Apply validation rules to support accurate data capture.' },
      { title: 'Query Management', desc: 'Identify, manage and resolve data issues efficiently.' },
      { title: 'Data Review', desc: 'Give clinical teams better visibility into study data.' },
    ],
  },
  capabilities: {
    heading: 'Everything you need to manage study data.',
    items: [
      { icon: 'clipboardList', title: 'Study Designer', desc: 'Build and configure electronic case report forms.' },
      { icon: 'users', title: 'Subject Management', desc: 'Manage subject records and study visits.' },
      { icon: 'badgeCheck', title: 'Edit Checks', desc: 'Validate data during capture.' },
      { icon: 'listChecks', title: 'Query Management', desc: 'Track and resolve data discrepancies.' },
      { icon: 'eye', title: 'Data Review', desc: 'Review study data across subjects and visits.' },
      { icon: 'history', title: 'Audit Trail', desc: 'Maintain traceability of important study actions.' },
    ],
  },
  features: [
    {
      heading: 'Build studies without unnecessary complexity.',
      sub: 'Configure forms, visits and fields in a structured study build workflow, with validation rules defined alongside the data they protect.',
      points: [
        'Structured study and form configuration',
        'Visit schedules mapped to study design',
        'Field-level settings and validation rules',
      ],
      panel: {
        title: 'Study Build · ONC-2026-01',
        badge: { text: 'Draft', tone: 'gray' },
        rows: [
          { label: 'Screening Visit', sub: '4 forms · 32 fields', badge: { text: 'Configured', tone: 'green' } },
          { label: 'Week 4 Visit', sub: '6 forms · 48 fields', badge: { text: 'Configured', tone: 'green' } },
          { label: 'Week 12 Visit', sub: '5 forms · 41 fields', badge: { text: 'In review', tone: 'amber' } },
          { label: 'Validation Rules', sub: 'Range, required, consistency', value: '87 rules' },
        ],
      },
    },
    {
      heading: 'Validate data as it is captured.',
      sub: 'Edit checks run while data is entered, so issues surface at the point of capture and queries follow a clear, trackable status.',
      points: [
        'Edit checks applied during data entry',
        'Clear validation messages for site users',
        'Queries created, tracked and resolved in one place',
      ],
      panel: {
        title: 'Edit Checks · Week 4 Vitals',
        badge: { text: 'Live', tone: 'green' },
        rows: [
          { label: 'Systolic BP', value: '128 mmHg', badge: { text: 'Valid', tone: 'green' } },
          { label: 'Diastolic BP', value: '210 mmHg', badge: { text: 'Out of range', tone: 'red' } },
          { label: 'Query #Q-118', sub: 'Value outside expected range', badge: { text: 'Open', tone: 'amber' } },
          { label: 'Query #Q-104', sub: 'Missing visit date', badge: { text: 'Resolved', tone: 'green' } },
        ],
      },
    },
    {
      heading: 'Review the study with greater clarity.',
      sub: 'Follow subjects, data quality, query status and completion from a review view designed for clinical teams.',
      points: [
        'Subject overview across visits and forms',
        'Completion and data-quality status at a glance',
        'Query workload visible per site and subject',
      ],
      panel: {
        title: 'Data Review · Subject SCR-1024',
        badge: { text: 'Week 12', tone: 'navy' },
        rows: [
          { label: 'Forms Complete', value: '18 / 19', badge: { text: '95%', tone: 'green' } },
          { label: 'Open Queries', value: '1', badge: { text: 'Action needed', tone: 'amber' } },
          { label: 'Signatures', value: '17 / 19', badge: { text: 'Pending', tone: 'gray' } },
          { label: 'Last Activity', value: '04 Aug 2026' },
        ],
      },
    },
    {
      heading: 'Keep every change traceable.',
      sub: 'The audit trail records who changed what and when, with previous and new values preserved for review.',
      points: [
        'Timestamped record of study actions',
        'User, action, previous value and new value',
        'Traceability designed for inspection readiness',
      ],
      panel: {
        title: 'Audit Trail · Vitals Form',
        badge: { text: 'Read-only', tone: 'navy' },
        rows: [
          { label: 'Weight changed', sub: '74.6 kg → 74.2 kg · j.moore', value: '10:42' },
          { label: 'Query answered', sub: 'Q-118 · site coordinator', value: '09:15' },
          { label: 'Form signed', sub: 'Week 4 Vitals · Dr. Patel', value: 'Yesterday' },
          { label: 'Value entered', sub: 'Heart rate 78 bpm · j.moore', value: 'Yesterday' },
        ],
      },
    },
  ],
  workflow: {
    heading: 'From study setup to database lock.',
    steps: [
      { title: 'Study Setup' },
      { title: 'Form Configuration' },
      { title: 'Subject Enrollment' },
      { title: 'Data Capture' },
      { title: 'Data Review' },
      { title: 'Database Lock' },
    ],
  },
  faq: [
    {
      q: 'What is ProEDC EDC?',
      a: 'ProEDC EDC is an electronic data capture system for clinical studies. It gives study teams a controlled environment to design study forms, capture subject data, apply validation and review the study as it progresses.',
    },
    {
      q: 'How does ProEDC support study setup?',
      a: 'Studies are configured through a structured build workflow covering forms, visits, fields and validation rules, so the study design is in place before data capture begins.',
    },
    {
      q: 'How are validation rules managed?',
      a: 'Validation rules are defined during study build and applied as edit checks while data is entered, helping surface issues at the point of capture.',
    },
    {
      q: 'How are queries handled?',
      a: 'Data discrepancies can raise queries that are tracked through a clear status flow — from creation to response to resolution — visible to the teams responsible for them.',
    },
    {
      q: 'How is the audit trail maintained?',
      a: 'Important study actions are recorded with the user, timestamp, action and — for data changes — the previous and new values, providing traceability throughout the study.',
    },
  ],
}
