export const site = {
  name: 'ProEDC',
  appUrl: 'https://sandbox.proedc.com/',
  supportEmail: 'support@proedc.com',
  contactEmail: 'hello@proedc.com',
  nav: [
    { label: 'Platform', menu: 'platform' },
    { label: 'Company', menu: 'company' },
    { label: 'Contact', href: '/contact' },
  ],
  solutions: [
    {
      name: 'EDC',
      to: '/platform/edc',
      icon: 'database',
      short: 'Electronic Data Capture',
      tagline: 'Electronic data capture for clean, inspection-ready study data.',
    },
    {
      name: 'CTMS',
      to: '/platform/ctms',
      icon: 'calendarRange',
      short: 'Clinical Trial Management',
      tagline: 'Operational tracking for studies, sites, visits and milestones.',
    },
    {
      name: 'IWRS / RTSM',
      to: '/platform/iwrs-rtsm',
      icon: 'shuffle',
      short: 'Randomization & Trial Supply',
      tagline: 'Randomisation and trial supply, driven by the same subject record.',
    },
    {
      name: 'ePRO',
      to: '/platform/epro',
      icon: 'smartphone',
      short: 'Patient Reported Outcomes',
      tagline: 'Patient-reported outcomes on the patient’s own device.',
    },
    {
      name: 'eConsent',
      to: '/platform/econsent',
      icon: 'fileCheck',
      short: 'Electronic Consent',
      tagline: 'Remote and on-site consent with a full signature trail.',
    },
    {
      name: 'rSDV',
      to: '/platform/rsdv',
      icon: 'scanSearch',
      short: 'Remote Source Data Verification',
      tagline: 'Remote source data verification without shipping binders.',
    },
  ],
  companyMenu: [
    {
      label: 'About ProEDC',
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
          { label: 'EDC', to: '/platform/edc' },
          { label: 'CTMS', to: '/platform/ctms' },
          { label: 'IWRS / RTSM', to: '/platform/iwrs-rtsm' },
          { label: 'ePRO', to: '/platform/epro' },
          { label: 'eConsent', to: '/platform/econsent' },
          { label: 'rSDV', to: '/platform/rsdv' },
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
          { label: 'Privacy Policy', to: '/privacy-policy' },
          { label: 'Terms of Use', to: '/terms-of-service' },
          { label: 'Cookie Notice', to: '/cookie-policy' },
        ],
      },
    ],
    contact: {
      email: 'hello@proedc.com',
    },
    legal: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Use', to: '/terms-of-service' },
      { label: 'Cookie Notice', to: '/cookie-policy' },
    ],
  },
}
