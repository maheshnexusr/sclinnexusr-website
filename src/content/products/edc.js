/** @type {import('./schema').ProductContent} */
export const edc = {
  slug: 'edc',
  meta: {
    title: 'EDC — Electronic Data Capture | SclinNexus',
    breadcrumbSection: 'Solutions',
    breadcrumbLabel: 'EDC',
  },

  hero: {
    eyebrow: { icon: 'database', label: 'Electronic Data Capture' },
    title: 'Clean data from first entry to database lock',
    description:
      'SclinNexus EDC puts study build, data capture and cleaning in one validated system. Design forms without programmers, catch errors at the point of entry, and reach lock with your queries already closed.',
    primaryCta: { label: 'Explore capabilities', targetId: 'capabilities' },
    secondaryCta: { label: 'Download the factsheet', href: '#resources' },
    media: {
      label: 'EDC study dashboard — screenshot placeholder',
      videoTitle: 'SclinNexus EDC in 3 minutes',
    },
  },

  compliance: {
    label: 'Built for regulated research',
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

  stats: {
    items: [
      { value: 140, suffix: '+', label: 'Studies deployed' },
      { value: 28, suffix: '', label: 'Countries with active sites' },
      { value: 61000, suffix: '+', label: 'Subjects enrolled' },
      { value: 14, suffix: '', label: 'Median days to database lock' },
    ],
    context:
      'Counted across production studies on the platform since 2019. Database lock is measured from last patient visit to final lock, and the median includes teams running their first study on SclinNexus.',
  },

  capabilities: {
    eyebrow: 'Core capabilities',
    title: 'Everything between protocol and lock',
    sub: 'Five areas of the product carry a study from first form to final export. Each one is built for the person who actually does the work.',
    cta: { label: 'See EDC in a live demo', href: '/request-demo' },
    tabs: [
      {
        id: 'data-capture',
        label: 'Data Capture',
        title: 'Entry that works the way sites do',
        intro:
          'Coordinators enter data between patients, not at a desk. Forms respond instantly and flag problems before anyone moves on.',
        bullets: [
          'Dynamic forms with skip logic and calculated fields',
          'Edit checks fire at entry, not in an overnight batch',
          'Field-level audit trail with reason for change',
          'Role-based views so site staff see only their pages',
          'Works on tablets in clinic without a separate app',
        ],
        screenshot: 'Data capture form with inline edit check — screenshot placeholder',
      },
      {
        id: 'study-build',
        label: 'Study Build',
        title: 'From protocol to first patient in weeks',
        intro:
          'Data managers build studies themselves with a visual designer, a reusable form library and a validation report before go-live.',
        bullets: [
          'Drag-and-drop form designer, no programming queue',
          'Versioned form and study libraries for reuse across trials',
          'CDASH-aligned starting templates for common domains',
          'Automated build validation report before activation',
          'Sandbox preview of the study as any role, on any device',
        ],
        screenshot: 'Visual form designer — screenshot placeholder',
      },
      {
        id: 'validation-cleaning',
        label: 'Validation & Cleaning',
        title: 'Queries closed as the study runs',
        intro:
          'Cleaning happens continuously instead of piling up before lock. Every open issue has an owner, an age and a place in one queue.',
        bullets: [
          'Programmable edit checks with plain-language messages',
          'Queries raised, assigned and closed in a single manager',
          'Risk-based SDV worklists instead of 100% review',
          'Data review dashboards by site, form and subject',
          'Clean-status tracking per subject, export-ready at lock',
        ],
        screenshot: 'Query manager with ageing queue — screenshot placeholder',
      },
      {
        id: 'mid-study-changes',
        label: 'Mid-Study Changes',
        title: 'Amendments without downtime',
        intro:
          'Protocol amendments are a fact of life. EDC versions the change, shows you the blast radius, and rolls it out on your schedule.',
        bullets: [
          'Versioned form changes with a migration preview',
          'Site-by-site rollout, no all-or-nothing switch',
          'Impact report listing every affected field and subject',
          'Existing data carried forward, never re-entered',
          'A change log written for auditors, not just developers',
        ],
        screenshot: 'Amendment impact report — screenshot placeholder',
      },
      {
        id: 'reporting',
        label: 'Reporting',
        title: 'Answers without a request to IT',
        intro:
          'Enrolment, data quality and site performance are live views, and every export format your statisticians expect is built in.',
        bullets: [
          'Live enrolment and data-quality dashboards',
          'Scheduled extracts in CSV and SAS transport formats',
          'CDISC ODM export for downstream systems',
          'Custom listings built in the browser, no SQL',
          'REST API access for your own reporting stack',
        ],
        screenshot: 'Enrolment and quality dashboard — screenshot placeholder',
      },
    ],
  },

  process: {
    title: 'How a study runs on SclinNexus EDC',
    sub: 'Four stages, one system, no hand-offs between tools.',
    steps: [
      {
        title: 'Design forms',
        description: 'Build and validate the study in the visual designer.',
      },
      {
        title: 'Enter data',
        description: 'Sites capture visits with checks firing at entry.',
      },
      {
        title: 'Resolve queries',
        description: 'Data managers clean continuously in one queue.',
      },
      {
        title: 'Lock database',
        description: 'Freeze, sign and export with a full audit trail.',
      },
    ],
  },

  roles: {
    title: 'Built for every side of the study',
    sub: 'The same study, three very different jobs. Each role gets a view shaped around its work.',
    items: [
      {
        icon: 'briefcase',
        title: 'Sponsors',
        body: 'Portfolio-level oversight without asking for status decks. Live enrolment, data quality and site performance across every study, with read-only access that never touches the data.',
      },
      {
        icon: 'network',
        title: 'CROs',
        body: 'Run many studies without rebuilding each one. Shared form libraries, per-study permissions and a build process fast enough to win bids on start-up timelines.',
      },
      {
        icon: 'stethoscope',
        title: 'Site Teams',
        body: 'An hour of training, not a week. Clear visit worklists, forms that explain their own edit checks, and fewer queries coming back a month later.',
      },
    ],
  },

  addOns: {
    title: 'Products that pair with EDC',
    sub: 'Each add-on shares the EDC subject record, so nothing is reconciled between systems.',
    items: [
      {
        image: 'IWRS / RTSM module — image placeholder',
        title: 'IWRS / RTSM',
        description:
          'Randomisation and trial supply driven by the same subject record the EDC holds.',
        href: '#',
      },
      {
        image: 'ePRO module — image placeholder',
        title: 'ePRO',
        description:
          'Patient-reported outcomes captured on the patient’s own device, flowing straight into the study database.',
        href: '#',
      },
      {
        image: 'eConsent module — image placeholder',
        title: 'eConsent',
        description:
          'Remote and on-site consent with versioned documents and a complete signature trail.',
        href: '#',
      },
      {
        image: 'rSDV module — image placeholder',
        title: 'rSDV',
        description:
          'Remote source data verification so monitors review documents without travelling to site.',
        href: '#',
      },
    ],
  },

  integration: {
    title: 'One platform, one data model',
    body: 'EDC is the system of record for the whole SclinNexus suite. Randomisation, patient-reported outcomes, consent and monitoring all read and write the same subject data, so there is no nightly sync to break and no reconciliation step before lock.',
    primaryCta: { label: 'Explore the platform', href: '/' },
    secondaryCta: { label: 'Talk to our team', href: '/request-demo' },
  },

  resources: {
    title: 'Go deeper',
    sub: 'Evidence first: how real studies ran, what the system does, and what our team has learned.',
    caseStudies: [
      {
        thumbnail: 'Oncology case study cover — image placeholder',
        title: 'A phase II oncology study locked 11 days after last patient visit',
        href: '#',
      },
      {
        thumbnail: 'CRO case study cover — image placeholder',
        title: 'How a mid-size CRO cut study build time from 12 weeks to 4',
        href: '#',
      },
      {
        thumbnail: 'Amendment case study cover — image placeholder',
        title: 'Three protocol amendments, zero days of downtime',
        href: '#',
      },
    ],
    factsheets: [
      {
        thumbnail: 'EDC factsheet cover — image placeholder',
        title: 'SclinNexus EDC — product factsheet',
        href: '#',
      },
      {
        thumbnail: 'Validation factsheet cover — image placeholder',
        title: 'Validation pack: IQ, OQ and PQ documentation',
        href: '#',
      },
      {
        thumbnail: 'Security factsheet cover — image placeholder',
        title: 'Security, hosting and Part 11 compliance overview',
        href: '#',
      },
    ],
    articles: [
      {
        thumbnail: 'Article thumbnail — image placeholder',
        title: 'Why most database lock delays are created at study build',
        readMinutes: 7,
        excerpt:
          'The last month before lock is where delays surface, but rarely where they start. The edit checks you skip in week one become the queries you chase in month nine.',
        href: '#',
      },
      {
        thumbnail: 'Article thumbnail — image placeholder',
        title: 'A practical guide to risk-based SDV',
        readMinutes: 9,
        excerpt:
          '100% source verification is expensive and doesn’t catch what matters. Here is how teams decide what to verify, and how to defend that decision to an inspector.',
        href: '#',
      },
      {
        thumbnail: 'Article thumbnail — image placeholder',
        title: 'What auditors actually look for in an EDC audit trail',
        readMinutes: 6,
        excerpt:
          'Having an audit trail is table stakes. Being able to answer a specific question from it in under a minute is what ends an inspection finding before it starts.',
        href: '#',
      },
    ],
  },

  testimonials: {
    title: 'What study teams say',
    items: [
      {
        quote:
          'We locked our first database eleven days after last patient visit. Our previous system averaged six weeks.',
        role: 'Director of Clinical Data Management',
        org: 'Mid-size CRO',
      },
      {
        quote:
          'Site coordinators stopped calling us about the system. That is the highest compliment EDC software can get.',
        role: 'Clinical Data Lead',
        org: 'Oncology sponsor',
      },
      {
        quote:
          'Mid-study amendments used to mean a weekend of downtime. Now we roll them out site by site on a Tuesday.',
        role: 'Study Build Manager',
        org: 'Global CRO',
      },
      {
        quote:
          'The audit trail answered every question our inspector asked, on the spot, during the inspection.',
        role: 'Head of Quality Assurance',
        org: 'Biotech sponsor',
      },
    ],
  },

  whyUs: {
    title: 'Why teams choose SclinNexus',
    items: [
      {
        icon: 'shieldCheck',
        title: 'Validation-ready',
        body: 'Every release ships with an IQ/OQ/PQ documentation pack. Your validation team reviews and signs, they do not start from a blank page.',
      },
      {
        icon: 'timer',
        title: 'Fast to first patient',
        body: 'Reusable libraries and a build validation report mean typical studies go live in weeks. Your timeline stops depending on a vendor’s programming queue.',
      },
      {
        icon: 'headphones',
        title: 'A named human',
        body: 'Every account has a named data manager who knows your studies, not a ticket queue. Median response during business hours is under an hour.',
      },
      {
        icon: 'lock',
        title: 'Your data stays yours',
        body: 'Full exports in open formats at any time, including after you leave. No export fees, no held-hostage archives, no proprietary lock-in.',
      },
    ],
  },

  cta: {
    title: 'See your next study on SclinNexus EDC',
    tagline:
      'A 45-minute walkthrough with a solutions engineer, built around a study design like yours.',
    button: { label: 'Request a demo', href: '/request-demo' },
  },
}
