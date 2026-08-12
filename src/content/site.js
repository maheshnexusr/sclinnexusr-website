export const site = {
  name: 'SclinNexus',
  appUrl: 'https://sandbox.sclinnexus.com/',
  supportEmail: 'support@sclinnexus.com',
  contactEmail: 'hello@sclinnexus.com',
  nav: [
    { label: 'Platform', megaMenu: true },
    { label: 'Industries', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'Company', href: '#' },
  ],
  solutions: [
    {
      name: 'EDC',
      to: '/solutions/edc',
      icon: 'database',
      tagline: 'Electronic data capture for clean, inspection-ready study data.',
    },
    {
      name: 'CTMS',
      to: '/solutions/ctms',
      icon: 'calendarRange',
      tagline: 'Operational tracking for studies, sites, visits and milestones.',
    },
    {
      name: 'IWRS / RTSM',
      to: '#',
      icon: 'shuffle',
      tagline: 'Randomisation and trial supply, driven by the same subject record.',
    },
    {
      name: 'ePRO',
      to: '#',
      icon: 'smartphone',
      tagline: 'Patient-reported outcomes on the patient’s own device.',
    },
    {
      name: 'eConsent',
      to: '#',
      icon: 'fileCheck',
      tagline: 'Remote and on-site consent with a full signature trail.',
    },
    {
      name: 'rSDV',
      to: '#',
      icon: 'scanSearch',
      tagline: 'Remote source data verification without shipping binders.',
    },
  ],
  footer: {
    description:
      'SclinNexus builds validated software for running clinical trials. One platform for capture, operations and oversight, used by sponsors, CROs and sites in 28 countries.',
    columns: [
      {
        heading: 'Platform',
        links: [
          { label: 'EDC', to: '/solutions/edc' },
          { label: 'CTMS', to: '/solutions/ctms' },
          { label: 'IWRS / RTSM', to: '#' },
          { label: 'ePRO', to: '#' },
          { label: 'eConsent', to: '#' },
          { label: 'rSDV', to: '#' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'About us', to: '#' },
          { label: 'Leadership', to: '#' },
          { label: 'Careers', to: '#' },
          { label: 'News', to: '#' },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { label: 'Case studies', to: '#' },
          { label: 'Factsheets', to: '#' },
          { label: 'Articles', to: '#' },
          { label: 'Support', to: '#' },
        ],
      },
    ],
    contact: {
      email: 'hello@sclinnexus.com',
      phones: ['+1 (617) 555-0146', '+91 40 4455 0199'],
      offices: ['Boston, MA, United States', 'Hyderabad, India'],
    },
    legal: [
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Use', to: '#' },
      { label: 'Cookie Notice', to: '#' },
    ],
  },
}
