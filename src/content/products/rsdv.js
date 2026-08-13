export const rsdv = {
  slug: 'rsdv',
  meta: {
    title: 'SclinNexus rSDV | Remote Source Data Verification',
    description: 'Review source data remotely with controlled access and traceability using SclinNexus rSDV.',
  },
  breadcrumb: 'rSDV',
  hero: {
    eyebrow: 'Remote Source Data Verification',
    headline: ['Review source data without', 'unnecessary site visits.'],
    sub: 'SclinNexus rSDV helps authorized study teams review source information remotely while maintaining controlled access, traceability and study oversight.',
    secondaryLabel: 'Explore rSDV',
  },
  why: {
    heading: 'Verification without the travel overhead.',
    sub: 'Bring source review into a controlled remote workflow while keeping oversight where it belongs.',
    cards: [
      { title: 'Controlled Access', desc: 'Source information is available only to authorized reviewers.' },
      { title: 'Remote Review', desc: 'Support centralized review without unnecessary travel.' },
      { title: 'Clear Status', desc: 'See what is verified, pending or flagged at a glance.' },
      { title: 'Traceable Actions', desc: 'Every review action is recorded for oversight.' },
    ],
  },
  capabilities: {
    heading: 'A controlled remote review workflow.',
    items: [
      { icon: 'scanSearch', title: 'Source Document Access', desc: 'Access authorized source information.' },
      { icon: 'eye', title: 'Remote Review', desc: 'Support centralized review workflows.' },
      { icon: 'gitCompare', title: 'Data Comparison', desc: 'Compare source information with study data where supported.' },
      { icon: 'activity', title: 'Discrepancy Identification', desc: 'Flag information requiring review.' },
      { icon: 'listChecks', title: 'Review Status', desc: 'Track completed and pending reviews.' },
      { icon: 'fingerprint', title: 'Audit Trail', desc: 'Maintain traceability of review actions.' },
    ],
  },
  features: [
    {
      heading: 'Source and study data, side by side.',
      sub: 'Reviewers compare source values with study data in one view, so verification is a comparison — not a reconstruction.',
      points: [
        'Source and EDC values presented together',
        'Comparison supported where the study allows',
        'Review completed data point by data point',
      ],
      panel: {
        title: 'Source Review · Subject 1024',
        badge: { text: 'Week 12', tone: 'navy' },
        rows: [
          { label: 'Systolic BP', sub: 'Source 128 · EDC 128', badge: { text: 'Verified', tone: 'green' } },
          { label: 'Weight', sub: 'Source 74.2 · EDC 74.2', badge: { text: 'Verified', tone: 'green' } },
          { label: 'Heart Rate', sub: 'Source 81 · EDC 78', badge: { text: 'Discrepancy', tone: 'red' } },
          { label: 'Visit Date', sub: 'Source 04 Aug · EDC 04 Aug', badge: { text: 'Needs Review', tone: 'amber' } },
        ],
      },
    },
    {
      heading: 'Discrepancies surfaced, not buried.',
      sub: 'Information that does not match is flagged for review, giving monitors a worklist instead of a search.',
      points: [
        'Mismatches flagged during review',
        'Discrepancies tracked to resolution',
        'Review workload visible per subject and site',
      ],
      panel: {
        title: 'Discrepancies · Site 204',
        badge: { text: '3 open', tone: 'amber' },
        rows: [
          { label: 'Heart Rate · Subject 1024', sub: 'Source 81 · EDC 78', badge: { text: 'Open', tone: 'red' } },
          { label: 'Visit Date · Subject 1031', sub: 'One day difference', badge: { text: 'In review', tone: 'amber' } },
          { label: 'Weight · Subject 1029', sub: 'Resolved by site', badge: { text: 'Closed', tone: 'green' } },
          { label: 'Review Progress', value: '42 of 49 verified' },
        ],
      },
    },
    {
      heading: 'Oversight built into every action.',
      sub: 'Access is controlled, and each review action is recorded — who reviewed what, when and with what outcome.',
      points: [
        'Reviewer access controlled and authorized',
        'Review actions recorded with user and time',
        'A traceable record supporting study oversight',
      ],
      panel: {
        title: 'Review Log · Subject 1024',
        badge: { text: 'Read-only', tone: 'navy' },
        rows: [
          { label: 'Verified Systolic BP', sub: 'm.okafor · reviewer', value: '14:20' },
          { label: 'Flagged Heart Rate', sub: 'm.okafor · reviewer', value: '14:26' },
          { label: 'Access granted', sub: 'Week 12 documents', value: '13:58' },
          { label: 'Review completed', badge: { text: 'Logged', tone: 'green' } },
        ],
      },
    },
  ],
  workflow: {
    heading: 'A controlled approach to remote verification.',
    steps: [
      { title: 'Source Data Available' },
      { title: 'Reviewer Access' },
      { title: 'Source Review' },
      { title: 'EDC Comparison' },
      { title: 'Discrepancy Review' },
      { title: 'Completion & Audit Trail' },
    ],
  },
  faq: [
    {
      q: 'What is rSDV?',
      a: 'rSDV (remote source data verification) lets authorized study team members review source information remotely and compare it with study data, instead of performing all verification on site.',
    },
    {
      q: 'How does remote source review work?',
      a: 'Source information is made available to authorized reviewers, who review it against study data in a controlled workflow, flagging discrepancies and recording review outcomes.',
    },
    {
      q: 'Who can access source information?',
      a: 'Access is limited to authorized reviewers. Permissions are controlled, and access itself is recorded as part of the review trail.',
    },
    {
      q: 'How are review actions tracked?',
      a: 'Each review action — access, verification, flagging, completion — is recorded with the user and timestamp, maintaining traceability of the review process.',
    },
    {
      q: 'How does rSDV support study oversight?',
      a: 'Review status, discrepancies and the recorded review trail give study teams a clear picture of verification progress and a traceable basis for oversight decisions.',
    },
  ],
}
