export const site = {
  name: 'ProEDC',
  appUrl: 'https://app.proedc.com/',
  supportEmail: 'help@proedc.com',
  contactEmail: 'help@proedc.com',
  nav: [
    { label: 'Platform', menu: 'platform' },
    { label: 'Solutions', menu: 'solutions' },
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
  solutionsMenu: [
    {
      name: 'For Sponsors',
      to: '/solutions/sponsors',
      icon: 'briefcase',
      short: 'Clinical trial oversight',
      tags: ['Study oversight', 'Data visibility', 'Compliance'],
    },
    {
      name: 'For CROs',
      to: '/solutions/cros',
      icon: 'network',
      short: 'Run more studies, less friction',
      tags: ['Study operations', 'Site management', 'Multi-study visibility'],
    },
    {
      name: 'For Sites',
      to: '/solutions/sites',
      icon: 'stethoscope',
      short: 'Simple site workflows',
      tags: ['Site workflows', 'Subject management', 'Visit workflows'],
    },
    {
      name: 'For Data Managers',
      to: '/solutions/data-managers',
      icon: 'clipboardList',
      short: 'Clean, query-ready data',
      tags: ['Data quality', 'Query management', 'Audit trail'],
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
          { label: 'For Sponsors', to: '/solutions/sponsors' },
          { label: 'For CROs', to: '/solutions/cros' },
          { label: 'For Sites', to: '/solutions/sites' },
          { label: 'For Data Managers', to: '/solutions/data-managers' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'About ProEDC', to: '/company' },
          { label: 'Contact', to: '/contact' },
          { label: 'Request a Demo', to: '/request-demo' },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { label: 'Sandbox', to: 'https://sandbox.proedc.com', external: true },
          { label: 'Documentation', to: 'https://docs.proedc.com', external: true },
          { label: 'Help Center', to: 'https://help.proedc.com', external: true },
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
      email: 'help@proedc.com',
    },
    legal: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Use', to: '/terms-of-service' },
      { label: 'Cookie Notice', to: '/cookie-policy' },
    ],
  },
}
