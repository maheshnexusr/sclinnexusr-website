export const dataManagers = {
  slug: 'data-managers',
  meta: {
    title: 'ProEDC for Data Managers | Cleaner Clinical Data, Faster Review',
    description:
      'ProEDC gives data managers the tools to design, validate, review, query, and maintain high-quality clinical data throughout the study lifecycle.',
  },
  breadcrumb: 'Data Managers',
  hero: {
    eyebrow: 'For Data Managers',
    headline: ['Cleaner data. Faster review.', 'Complete traceability.'],
    sub: 'ProEDC gives data managers the tools to design, validate, review, query, and maintain high-quality clinical data throughout the study lifecycle.',
    primaryCta: { label: 'Request a Demo', to: '/request-demo' },
    secondaryCta: { label: 'Explore the Platform', to: '/platform/edc' },
    illustration: 'cleanData',
  },
  capabilities: {
    heading: 'Built for the details behind reliable clinical data.',
    sub: 'From first entry to final export, keep clinical data clean, validated, and ready for review.',
    items: [
      {
        icon: 'fileEdit',
        title: 'Form and data management',
        desc: 'Design and manage electronic case report forms and clinical data workflows.',
      },
      {
        icon: 'badgeCheck',
        title: 'Real-time validation',
        desc: 'Apply validation and edit checks at the point of data entry.',
      },
      {
        icon: 'listChecks',
        title: 'Query management',
        desc: 'Identify inconsistencies, raise queries, track responses, and resolve issues.',
      },
      {
        icon: 'eye',
        title: 'Data review',
        desc: 'Monitor data quality and identify outstanding issues across subjects and sites.',
      },
      {
        icon: 'history',
        title: 'Audit trail',
        desc: 'Track changes with user, timestamp, action, and reason.',
      },
      {
        icon: 'download',
        title: 'Data export',
        desc: 'Prepare clean clinical data for downstream systems and analysis.',
      },
    ],
  },
  workflow: {
    heading: 'From captured data to inspection-ready data.',
    steps: [
      { title: 'Capture' },
      { title: 'Validate' },
      { title: 'Review' },
      { title: 'Query' },
      { title: 'Resolve' },
      { title: 'Verify' },
      { title: 'Export' },
    ],
  },
  cta: {
    heading: 'Build better clinical data with ProEDC.',
    buttonLabel: 'Request a Demo',
    buttonTo: '/request-demo',
  },
}
