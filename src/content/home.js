export const home = {
  hero: {
    eyebrow: 'Clinical Trial Data Platform',
    titleLead: 'Run every study',
    titleTail: 'with',
    titleAccent: 'confidence.',
    description:
      'SclinNexus connects electronic data capture, study operations, randomization, consent and patient data into one compliant clinical trial platform.',
    primaryCta: { label: 'Request a Demo', href: '/request-demo' },
    secondaryCta: { label: 'Explore the Platform', href: '#platform' },
  },

  compliance: {
    label: 'Built for regulated clinical research',
    items: [
      'GDPR',
      'HIPAA',
      'FDA 21 CFR Part 11',
      'ICH-GCP',
      'GxP',
      'MedDRA',
      'CDISC',
      'GAMP 5',
    ],
  },

  platform: {
    titleLead: 'One platform.',
    titleTail: 'Every workflow. Connected.',
    sub: 'Everything your clinical team needs, connected to the same study record.',
    // Bullets sourced from the approved EDC product content.
    edcHighlights: [
      'Drag-and-drop form designer, no programming queue',
      'Edit checks fire at entry, not in an overnight batch',
      'Field-level audit trail with reason for change',
      'CDISC ODM export for downstream systems',
    ],
  },

  edcShowcase: {
    eyebrow: 'Electronic Data Capture',
    titleLead: 'Electronic Data Capture,',
    titleTail: 'built for real clinical studies.',
    sub: 'Design forms, capture data, manage queries and maintain a complete audit trail from one secure workspace.',
    cta: { label: 'Explore EDC', to: '/solutions/edc' },
  },

  stats: {
    items: [
      { value: 140, suffix: '+', label: 'Studies deployed' },
      { value: 28, suffix: '', label: 'Countries with active sites' },
      { value: 61000, suffix: '+', label: 'Subjects enrolled' },
      { value: 6, suffix: '', label: 'Products on one data model' },
    ],
    context:
      'Counted across production studies on the platform since 2019. Every product reads and writes the same study record, so these numbers come from one database, not six.',
  },

  roles: {
    title: 'Built for every role in clinical research.',
    sub: 'Powerful tools for the people who power progress.',
    items: [
      {
        icon: 'briefcase',
        title: 'Sponsors',
        body: 'See the full picture across studies, sites and timelines.',
      },
      {
        icon: 'network',
        title: 'CROs',
        body: 'Centralize operations and deliver studies on time.',
      },
      {
        icon: 'stethoscope',
        title: 'Sites',
        body: 'Intuitive tools for data entry, tasks and compliance.',
      },
      {
        icon: 'clipboardList',
        title: 'Data Managers',
        body: 'Clean data, fewer queries, faster database lock.',
      },
    ],
  },

  why: {
    title: 'Why SclinNexus?',
    sub: 'One connected platform designed to make clinical research simpler, more connected and easier to manage.',
    hub: {
      title: 'SclinNexus',
      caption: 'One study. One connected platform.',
      products: ['EDC', 'CTMS', 'IWRS / RTSM', 'ePRO', 'eConsent', 'rSDV'],
    },
    items: [
      {
        icon: 'workflow',
        title: 'One connected study record',
        body: 'Keep clinical data and workflows connected instead of managing disconnected systems.',
        meta: 'EDC · CTMS · IWRS/RTSM · ePRO · eConsent · rSDV',
      },
      {
        icon: 'calendarRange',
        title: 'Designed around clinical workflows',
        body: 'From study setup and site activation to data capture, review and database lock, SclinNexus supports the way clinical teams actually work.',
        meta: 'Setup → Activation → Enrollment → Capture → Review → Lock',
      },
      {
        icon: 'badgeCheck',
        title: 'Data you can trust',
        body: 'Built to support high-quality, traceable clinical data throughout the study lifecycle.',
        meta: 'Validation · Query management · Audit trail · Data review',
      },
      {
        icon: 'shieldCheck',
        title: 'Built for regulated research',
        body: 'Designed with security, traceability and controlled clinical workflows in mind.',
        meta: 'Role-based access · E-signatures · Audit trail · Data integrity',
      },
      {
        icon: 'activity',
        title: 'Visibility when you need it',
        body: 'Give sponsors, CROs and study teams a clearer view of study progress, data quality and operational performance.',
        meta: 'Enrollment · Data quality · Open queries · Site performance',
      },
      {
        icon: 'network',
        title: 'One platform that grows with your study',
        body: 'Start with the capabilities you need and connect additional clinical workflows as your study evolves.',
        meta: 'Start with EDC — connect more as your study evolves',
      },
    ],
    closing: {
      statement: 'Clinical research is complex. Your technology shouldn’t make it harder.',
      cta: { label: 'Explore the SclinNexus Platform', href: '#platform' },
    },
  },

  journey: {
    title: 'From first subject to database lock.',
    sub: 'One connected journey for every study.',
    steps: [
      {
        title: 'Study Setup',
        description: 'Build protocols, design eCRFs and configure workflows.',
      },
      {
        title: 'Site Activation',
        description: 'Onboard sites, set permissions and train teams.',
      },
      {
        title: 'Subject Enrollment',
        description: 'Screen, enroll and randomize with confidence.',
      },
      {
        title: 'Data Capture',
        description: 'Capture high-quality data with real-time validations.',
      },
      {
        title: 'Data Review',
        description: 'Resolve queries and monitor data quality.',
      },
      {
        title: 'Database Lock',
        description: 'Audit, approve and lock with a complete audit trail.',
      },
    ],
  },

  intelligence: {
    titleLead: 'Real-time intelligence.',
    titleTail: 'Better decisions.',
    sub: 'Dashboards and reports that help you stay ahead of issues and keep studies on track.',
    cta: { label: 'Explore dashboards', to: '/solutions/edc' },
  },

  complianceSpotlight: {
    title: 'Compliance and traceability built in.',
    sub: 'SclinNexus is designed for regulated research with security, traceability and compliance at every step.',
    // Each bullet is backed by approved product content (EDC capabilities & validation pack).
    bullets: [
      'Role-based access and permissions',
      'Electronic signatures and a field-level audit trail',
      'Data integrity and traceability, entry to export',
      'Validation workflows with IQ/OQ/PQ documentation',
    ],
    cta: { label: 'See compliance overview', to: '/solutions/edc' },
    satellites: [
      { icon: 'badgeCheck', title: 'Validation', body: 'Real-time checks' },
      { icon: 'fingerprint', title: 'Traceable Record', body: 'Data traceability' },
      { icon: 'history', title: 'Audit Trail', body: 'Every action recorded' },
      { icon: 'penLine', title: 'E-Signature', body: 'Secure approvals' },
    ],
  },

  testimonials: {
    title: 'What teams run on SclinNexus',
    items: [
      {
        quote:
          'We locked our first database eleven days after last patient visit. Our previous system averaged six weeks.',
        role: 'Director of Clinical Data Management',
        org: 'Mid-size CRO',
      },
      {
        quote:
          'Study status went from a Friday spreadsheet ritual to a page we open on Monday morning.',
        role: 'Chief Operating Officer',
        org: 'Specialty CRO',
      },
      {
        quote:
          'One vendor, one validation, one sign-in for sites. Our IT review went from months to weeks.',
        role: 'Head of Clinical IT',
        org: 'Global sponsor',
      },
      {
        quote:
          'Site coordinators stopped calling us about the system. That is the highest compliment this software can get.',
        role: 'Clinical Data Lead',
        org: 'Oncology sponsor',
      },
    ],
  },

  cta: {
    title: 'Bring your next study to SclinNexus',
    tagline:
      'A 45-minute walkthrough with a solutions engineer, built around a study design like yours.',
    button: { label: 'Request a Demo', href: '/request-demo' },
  },
}
