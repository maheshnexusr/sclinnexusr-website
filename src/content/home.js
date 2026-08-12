export const home = {
  heroSlides: [
    {
      eyebrow: { icon: 'activity', label: 'Clinical trial platform' },
      title: 'One platform for running compliant clinical trials',
      description:
        'Capture, operations and oversight for sponsors, CROs and sites — validated, audited and running in 28 countries.',
      primaryCta: { label: 'Explore EDC', to: '/solutions/edc' },
      secondaryCta: { label: 'Explore CTMS', to: '/solutions/ctms' },
      media: { label: 'Platform overview — screenshot placeholder' },
    },
    {
      eyebrow: { icon: 'database', label: 'Electronic Data Capture' },
      title: 'Clean data from first entry to database lock',
      description:
        'Design forms without programmers, catch errors at the point of entry, and reach lock with your queries already closed.',
      primaryCta: { label: 'See SclinTech EDC', to: '/solutions/edc' },
      secondaryCta: { label: 'Request a demo', href: '/request-demo' },
      media: { label: 'EDC study dashboard — screenshot placeholder' },
    },
    {
      eyebrow: { icon: 'calendarRange', label: 'Clinical Trial Management' },
      title: 'Every study, site and milestone in one working view',
      description:
        'Site activation, monitoring visits and payments tracked where the work happens, so status is never a stale spreadsheet.',
      primaryCta: { label: 'See SclinTech CTMS', to: '/solutions/ctms' },
      secondaryCta: { label: 'Request a demo', href: '/request-demo' },
      media: { label: 'CTMS portfolio dashboard — screenshot placeholder' },
    },
  ],

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
      { value: 6, suffix: '', label: 'Products on one data model' },
    ],
    context:
      'Counted across production studies on the platform since 2019. Every product reads and writes the same study record, so these numbers come from one database, not six.',
  },

  testimonials: {
    title: 'What teams run on SclinTech',
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
    title: 'Bring your next study to SclinTech',
    tagline:
      'A 45-minute walkthrough with a solutions engineer, built around a study design like yours.',
    button: { label: 'Request a demo', href: '/request-demo' },
  },
}
