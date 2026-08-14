export const ctms = {
  slug: 'ctms',
  meta: {
    title: 'ProEDC CTMS | Clinical Trial Management',
    description: 'Manage study operations, sites, milestones and trial activities with ProEDC CTMS.',
  },
  breadcrumb: 'CTMS',
  hero: {
    eyebrow: 'Clinical Trial Management',
    headline: ['See the entire study.', 'Manage every milestone.'],
    sub: 'ProEDC CTMS gives sponsors, CROs and study teams a centralized view of study operations, sites, milestones, visits and activities.',
    secondaryLabel: 'Explore CTMS',
  },
  why: {
    heading: 'Clinical operations, connected.',
    sub: 'Run study operations from one place instead of spreadsheets, trackers and disconnected tools.',
    cards: [
      { title: 'Study Visibility', desc: 'Track study progress from one place.' },
      { title: 'Site Management', desc: 'Monitor site activity, status and performance.' },
      { title: 'Milestone Tracking', desc: 'Keep study timelines visible and actionable.' },
      { title: 'Operational Control', desc: 'Give teams a clear view of outstanding activities.' },
    ],
  },
  capabilities: {
    heading: 'Run the operational side of the study.',
    items: [
      { icon: 'network', title: 'Study Management', desc: 'Manage study information, milestones and operational plans.' },
      { icon: 'stethoscope', title: 'Site Management', desc: 'Track site activation, status and study activities.' },
      { icon: 'calendarRange', title: 'Visit Management', desc: 'Plan and monitor monitoring activities.' },
      { icon: 'listChecks', title: 'Action Items', desc: 'Assign, prioritize and track operational tasks.' },
      { icon: 'timer', title: 'Milestones', desc: 'Compare planned and actual study progress.' },
      { icon: 'barChart3', title: 'Reporting', desc: 'Give teams visibility into study operations.' },
    ],
  },
  features: [
    {
      heading: 'Know where every study stands.',
      sub: 'The study dashboard brings status, enrollment, sites, milestones and outstanding tasks into a single operational view.',
      points: [
        'Study status and enrollment at a glance',
        'Site and milestone progress in one view',
        'Outstanding tasks surfaced, not buried',
      ],
      panel: {
        title: 'Study Dashboard · CARD-2026-03',
        badge: { text: 'On Track', tone: 'green' },
        rows: [
          { label: 'Enrollment', value: '186 / 240', badge: { text: '78%', tone: 'green' } },
          { label: 'Active Sites', value: '24 / 28', badge: { text: '4 activating', tone: 'amber' } },
          { label: 'Next Milestone', sub: 'Last Patient In', value: 'Oct 2026' },
          { label: 'Open Action Items', value: '7', badge: { text: '2 overdue', tone: 'red' } },
        ],
      },
    },
    {
      heading: 'Keep site operations organized.',
      sub: 'Track each site from selection through activation to close-out, with status, enrollment and outstanding actions in one list.',
      points: [
        'Site status and activation dates tracked centrally',
        'Enrollment and visit activity per site',
        'Outstanding actions assigned to owners',
      ],
      panel: {
        title: 'Sites · CARD-2026-03',
        badge: { text: '28 sites', tone: 'navy' },
        rows: [
          { label: 'Site 101 · Boston', sub: 'Activated 12 Mar 2026', value: '22 enrolled', badge: { text: 'Active', tone: 'green' } },
          { label: 'Site 204 · Berlin', sub: 'Activated 02 Apr 2026', value: '17 enrolled', badge: { text: 'Active', tone: 'green' } },
          { label: 'Site 310 · Pune', sub: 'Contract in review', badge: { text: 'Activating', tone: 'amber' } },
          { label: 'Site 415 · Austin', sub: '3 outstanding actions', badge: { text: 'Follow up', tone: 'red' } },
        ],
      },
    },
    {
      heading: 'Stay ahead of milestones.',
      sub: 'Planned versus actual dates keep timelines honest, so slippage is visible while there is still time to act.',
      points: [
        'Planned and actual dates side by side',
        'Milestone status across the whole study',
        'Timeline visibility for sponsors and CROs',
      ],
      panel: {
        title: 'Milestones · CARD-2026-03',
        badge: { text: 'Q3 2026', tone: 'navy' },
        rows: [
          { label: 'First Site Activated', value: 'Mar 2026', badge: { text: 'Done', tone: 'green' } },
          { label: 'First Patient In', value: 'Apr 2026', badge: { text: 'Done', tone: 'green' } },
          { label: '50% Enrollment', value: 'Jul 2026', badge: { text: 'Done', tone: 'green' } },
          { label: 'Last Patient In', sub: 'Planned Oct 2026', badge: { text: 'Upcoming', tone: 'amber' } },
        ],
      },
    },
    {
      heading: 'Turn operational data into action.',
      sub: 'Reports and dashboards give study teams the operational picture they need to prioritize the week, not reconstruct it.',
      points: [
        'Operational reporting across studies and sites',
        'Action items assigned, prioritized and tracked',
        'A shared picture for sponsors, CROs and sites',
      ],
      panel: {
        title: 'Action Items · This Week',
        badge: { text: '7 open', tone: 'amber' },
        rows: [
          { label: 'Confirm Site 310 activation docs', sub: 'Owner: R. Chen', badge: { text: 'Overdue', tone: 'red' } },
          { label: 'Schedule Site 204 monitoring visit', sub: 'Owner: A. Gomez', badge: { text: 'Due Fri', tone: 'amber' } },
          { label: 'Review enrollment forecast', sub: 'Owner: Study Lead', badge: { text: 'Open', tone: 'gray' } },
          { label: 'Close Site 101 follow-up letter', sub: 'Owner: R. Chen', badge: { text: 'Done', tone: 'green' } },
        ],
      },
    },
  ],
  workflow: {
    heading: 'Plan. Activate. Monitor. Deliver.',
    steps: [
      { title: 'Study Setup' },
      { title: 'Site Selection' },
      { title: 'Site Activation' },
      { title: 'Trial Conduct' },
      { title: 'Monitoring' },
      { title: 'Closeout' },
    ],
  },
  faq: [
    {
      q: 'What is a CTMS?',
      a: 'A clinical trial management system (CTMS) is software for managing the operational side of a study — sites, milestones, visits, tasks and overall progress — as opposed to the clinical data itself.',
    },
    {
      q: 'Who uses ProEDC CTMS?',
      a: 'Sponsors, CROs and study teams use ProEDC CTMS to plan and track study operations, from site selection and activation through conduct and closeout.',
    },
    {
      q: 'How does CTMS support site management?',
      a: 'Each site is tracked with its status, activation progress, enrollment, visits and outstanding actions, giving teams one organized view of site operations.',
    },
    {
      q: 'How are milestones tracked?',
      a: 'Milestones are recorded with planned and actual dates, so study teams can compare progress against the plan and see upcoming or slipping milestones early.',
    },
    {
      q: 'Can CTMS connect with EDC?',
      a: 'ProEDC CTMS is part of the same connected platform as ProEDC EDC, so operational tracking and clinical data capture can work around a shared study context.',
    },
  ],
}
