export const site = {
  name: 'SclinNexus',
  appUrl: 'https://sandbox.sclinnexus.com/',
  supportEmail: 'support@sclinnexus.com',
  contactEmail: 'hello@sclinnexus.com',
  nav: [
    { label: 'Platform', menu: 'platform' },
    { label: 'Company', menu: 'company' },
    { label: 'Contact', href: '/contact' },
  ],
  solutions: [
    {
      name: 'EDC',
      to: '/solutions/edc',
      icon: 'database',
      short: 'Electronic Data Capture',
      tagline: 'Electronic data capture for clean, inspection-ready study data.',
    },
    {
      name: 'CTMS',
      to: '/solutions/ctms',
      icon: 'calendarRange',
      short: 'Clinical Trial Management',
      tagline: 'Operational tracking for studies, sites, visits and milestones.',
    },
    {
      name: 'IWRS / RTSM',
      to: '#',
      icon: 'shuffle',
      short: 'Randomization & Trial Supply',
      tagline: 'Randomisation and trial supply, driven by the same subject record.',
    },
    {
      name: 'ePRO',
      to: '#',
      icon: 'smartphone',
      short: 'Patient Reported Outcomes',
      tagline: 'Patient-reported outcomes on the patient’s own device.',
    },
    {
      name: 'eConsent',
      to: '#',
      icon: 'fileCheck',
      short: 'Electronic Consent',
      tagline: 'Remote and on-site consent with a full signature trail.',
    },
    {
      name: 'rSDV',
      to: '#',
      icon: 'scanSearch',
      short: 'Remote Source Data Verification',
      tagline: 'Remote source data verification without shipping binders.',
    },
  ],
  companyMenu: [
    {
      label: 'About SclinNexus',
      to: '/company',
      icon: 'network',
      desc: 'Who we are and what we build',
    },
    {
      label: 'Our Story',
      to: '/company/our-story',
      icon: 'history',
      desc: 'From clinical expertise to connected technology',
    },
  ],
  footer: {
    description: 'Connected technology for modern clinical research.',
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
        heading: 'Solutions',
        links: [
          { label: 'For Sponsors', to: '#' },
          { label: 'For CROs', to: '#' },
          { label: 'For Sites', to: '#' },
          { label: 'For Biotech', to: '#' },
        ],
      },
      {
        heading: 'Legal',
        links: [
          { label: 'Privacy Policy', to: '#' },
          { label: 'Terms of Use', to: '#' },
          { label: 'Cookie Notice', to: '#' },
        ],
      },
    ],
    contact: {
      email: 'hello@sclinnexus.com',
    },
    legal: [
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Use', to: '#' },
      { label: 'Cookie Notice', to: '#' },
    ],
  },
}
