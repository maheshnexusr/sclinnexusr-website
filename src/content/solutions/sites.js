export const sites = {
  slug: 'sites',
  meta: {
    title: 'ProEDC for Sites | Simple Clinical Trial Workflows',
    description:
      'ProEDC helps site teams capture data, manage visits, respond to queries, and keep study activities moving without unnecessary complexity.',
  },
  breadcrumb: 'Sites',
  hero: {
    eyebrow: 'For Sites',
    headline: ['Simple clinical workflows', 'for busy study sites.'],
    sub: 'ProEDC helps site teams capture data, manage visits, respond to queries, and keep study activities moving without unnecessary complexity.',
    primaryCta: { label: 'Request a Demo', to: '/request-demo' },
    secondaryCta: { label: 'Explore the Platform', to: '/platform/edc' },
    illustration: 'siteVisit',
  },
  capabilities: {
    heading: 'Designed around the work sites actually do.',
    sub: 'Everything a coordinator or investigator needs for a visit, in one simple, connected workflow.',
    items: [
      {
        icon: 'clipboardList',
        title: 'Simple data capture',
        desc: 'Capture clinical data through intuitive forms and workflows.',
      },
      {
        icon: 'userCheck',
        title: 'Subject visibility',
        desc: 'Quickly understand subject status, visits, and outstanding forms.',
      },
      {
        icon: 'timer',
        title: 'Visit management',
        desc: 'Keep upcoming and completed study activities organized.',
      },
      {
        icon: 'listChecks',
        title: 'Query resolution',
        desc: 'Review and respond to data queries without switching between disconnected systems.',
      },
      {
        icon: 'workflow',
        title: 'Clear workflows',
        desc: 'Give coordinators and investigators the information they need at the right point in the study.',
      },
      {
        icon: 'history',
        title: 'Traceable actions',
        desc: 'Maintain a complete record of changes and study activity.',
      },
    ],
  },
  workflow: {
    heading: 'From patient visit to clean study data.',
    steps: [
      { title: 'Patient Visit' },
      { title: 'Data Entry' },
      { title: 'Validation' },
      { title: 'Query Resolution' },
      { title: 'Data Review' },
      { title: 'Clean Study Data' },
    ],
  },
  cta: {
    heading: 'Make every site workflow easier.',
    buttonLabel: 'Explore ProEDC',
    buttonTo: '/platform/edc',
  },
}
