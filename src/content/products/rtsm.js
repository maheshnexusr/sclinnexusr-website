export const rtsm = {
  slug: 'iwrs-rtsm',
  meta: {
    title: 'ProEDC IWRS / RTSM | Randomization & Trial Supply',
    description: 'Manage subject randomization and investigational product supply with ProEDC IWRS / RTSM.',
  },
  breadcrumb: 'IWRS / RTSM',
  hero: {
    eyebrow: 'Randomization & Trial Supply',
    headline: ['Randomize subjects.', 'Keep trial supply in control.'],
    sub: 'ProEDC IWRS / RTSM helps study teams manage subject randomization and investigational product supply through a controlled, traceable workflow.',
    secondaryLabel: 'Explore IWRS / RTSM',
  },
  why: {
    heading: 'Randomization and supply, on the same record.',
    sub: 'Assignment, blinding and inventory work from one controlled workflow instead of separate systems.',
    cards: [
      { title: 'Controlled Randomization', desc: 'Assign subjects according to the rules the study defines.' },
      { title: 'Blinding Support', desc: 'Manage treatment allocation within blinding workflows.' },
      { title: 'Supply Visibility', desc: 'See study supply across sites in one place.' },
      { title: 'Traceable Workflow', desc: 'Keep randomization and supply actions traceable end to end.' },
    ],
  },
  capabilities: {
    heading: 'From randomization to resupply.',
    items: [
      { icon: 'shuffle', title: 'Randomization', desc: 'Assign subjects according to study-defined rules.' },
      { icon: 'lock', title: 'Treatment Management', desc: 'Manage treatment allocation and blinding workflows.' },
      { icon: 'package', title: 'Inventory', desc: 'Track study supply across sites.' },
      { icon: 'truck', title: 'Shipments', desc: 'Monitor supply movement and delivery.' },
      { icon: 'fileCheck', title: 'Dispensing', desc: 'Support controlled study-product dispensing.' },
      { icon: 'refreshCw', title: 'Resupply', desc: 'Help maintain appropriate site inventory.' },
    ],
  },
  features: [
    {
      heading: 'Randomize with confidence.',
      sub: 'Subjects are randomized according to study-defined rules, with eligibility confirmed first and every assignment recorded.',
      points: [
        'Eligibility confirmation before assignment',
        'Randomization per the study design',
        'Blinding maintained through the workflow',
      ],
      panel: {
        title: 'Randomization · NEU-2026-07',
        badge: { text: 'Blinded', tone: 'navy' },
        rows: [
          { label: 'Subject SCR-2041', sub: 'Eligibility confirmed', badge: { text: 'Randomized', tone: 'green' } },
          { label: 'Subject SCR-2042', sub: 'Screening in progress', badge: { text: 'Pending', tone: 'amber' } },
          { label: 'Treatment Arms', value: '3 arms' },
          { label: 'Assignments Today', value: '4', badge: { text: 'Recorded', tone: 'green' } },
        ],
      },
    },
    {
      heading: 'Keep supply where the study needs it.',
      sub: 'Site inventory, shipments and delivery status stay visible, so supply questions are answered from the system, not from email threads.',
      points: [
        'Kit-level inventory per site',
        'Shipment status from request to delivery',
        'Resupply to maintain site inventory levels',
      ],
      panel: {
        title: 'Supply · Site 204 · Berlin',
        badge: { text: 'Healthy', tone: 'green' },
        rows: [
          { label: 'Kit A', value: '41 available', badge: { text: 'OK', tone: 'green' } },
          { label: 'Kit B', value: '9 available', badge: { text: 'Low', tone: 'amber' } },
          { label: 'Shipment #SH-0871', sub: '24 kits · dispatched 08 Aug', badge: { text: 'In transit', tone: 'amber' } },
          { label: 'Resupply Request', sub: 'Kit B · 30 kits', badge: { text: 'Approved', tone: 'green' } },
        ],
      },
    },
    {
      heading: 'Dispense under control.',
      sub: 'Dispensing follows the subject’s assignment, and every kit movement stays traceable from depot to subject.',
      points: [
        'Dispensing tied to the subject’s assignment',
        'Kit accountability across the chain',
        'Actions recorded for later review',
      ],
      panel: {
        title: 'Dispensing · Subject SCR-2041',
        badge: { text: 'Visit Week 4', tone: 'navy' },
        rows: [
          { label: 'Kit K-10422 dispensed', sub: 'Site 204 · pharmacist', value: 'Today' },
          { label: 'Kit K-10388 returned', sub: 'Unused · logged', value: 'Week 2' },
          { label: 'Next Dispensing', value: 'Week 8', badge: { text: 'Scheduled', tone: 'gray' } },
          { label: 'Accountability', badge: { text: 'Traceable', tone: 'green' } },
        ],
      },
    },
  ],
  workflow: {
    heading: 'From enrollment to treatment.',
    steps: [
      { title: 'Subject Enrollment' },
      { title: 'Eligibility Confirmation' },
      { title: 'Randomization' },
      { title: 'Treatment Assignment' },
      { title: 'Supply Allocation' },
      { title: 'Inventory Tracking' },
    ],
  },
  faq: [
    {
      q: 'What is IWRS / RTSM?',
      a: 'IWRS (interactive web response system) / RTSM (randomization and trial supply management) is the system a study uses to randomize subjects and manage investigational product supply — assignments, inventory, shipments and dispensing.',
    },
    {
      q: 'How does randomization work?',
      a: 'Once eligibility is confirmed, subjects are assigned according to the randomization rules defined for the study, with blinding maintained through the workflow and every assignment recorded.',
    },
    {
      q: 'How is study supply tracked?',
      a: 'Study supply is tracked at kit level per site, with shipments monitored from request to delivery so teams can see where investigational product is at any point.',
    },
    {
      q: 'How are inventory levels managed?',
      a: 'Site inventory is visible centrally, and resupply workflows help maintain appropriate stock at each site as the study progresses.',
    },
    {
      q: 'Can RTSM work with EDC?',
      a: 'ProEDC IWRS / RTSM is part of the same connected platform as ProEDC EDC, so randomization and supply can work around the same subject record as data capture.',
    },
  ],
}
