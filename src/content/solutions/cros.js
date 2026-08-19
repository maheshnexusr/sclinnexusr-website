export const cros = {
  slug: 'cros',
  meta: {
    title: 'ProEDC for CROs | Connected Clinical Study Operations',
    description:
      'ProEDC connects study operations, sites, subjects, clinical data, and oversight so CRO teams can manage studies efficiently from startup through database lock.',
  },
  breadcrumb: 'CROs',
  hero: {
    eyebrow: 'For CROs',
    headline: ['Run more studies', 'with less operational friction.'],
    sub: 'ProEDC connects study operations, sites, subjects, clinical data, and oversight so CRO teams can manage studies efficiently from startup through database lock.',
    primaryCta: { label: 'Request a Demo', to: '/request-demo' },
    secondaryCta: { label: 'Explore the Platform', to: '/platform/edc' },
    panel: {
      title: 'Study Operations · CRO View',
      badge: { text: 'Live', tone: 'green' },
      rows: [
        { label: 'Studies Managed', value: '12' },
        { label: 'Active Sites', sub: 'Across all studies', value: '84' },
        { label: 'Open Queries', value: '23', badge: { text: '6 due', tone: 'amber' } },
        { label: 'Audit Trail', badge: { text: 'Complete', tone: 'green' } },
      ],
    },
  },
  capabilities: {
    heading: 'Everything your study team needs, connected.',
    sub: 'Manage site, subject, and query workflows from one connected view, across every study you run.',
    items: [
      {
        icon: 'layers',
        title: 'Multi-study visibility',
        desc: 'Manage study activity and operational progress across projects.',
      },
      {
        icon: 'mapPin',
        title: 'Site management',
        desc: 'Track site activation, activity, enrollment, visits, and outstanding actions.',
      },
      {
        icon: 'calendarRange',
        title: 'Subject and visit tracking',
        desc: 'Keep visibility into subject progress and study milestones.',
      },
      {
        icon: 'listChecks',
        title: 'Query management',
        desc: 'Identify, assign, resolve, and monitor clinical data queries.',
      },
      {
        icon: 'workflow',
        title: 'Centralized workflows',
        desc: 'Connect study operations and data workflows instead of managing disconnected systems.',
      },
      {
        icon: 'history',
        title: 'Audit-ready operations',
        desc: 'Maintain traceability across study actions and changes.',
      },
    ],
  },
  workflow: {
    heading: 'Keep every study moving.',
    steps: [
      { title: 'Sponsor' },
      { title: 'CRO Team' },
      { title: 'Sites' },
      { title: 'Subjects' },
      { title: 'Clinical Data' },
      { title: 'Review & Lock' },
    ],
  },
  cta: {
    heading: 'Make study operations simpler with ProEDC.',
    buttonLabel: 'Request a Demo',
    buttonTo: '/request-demo',
  },
}
