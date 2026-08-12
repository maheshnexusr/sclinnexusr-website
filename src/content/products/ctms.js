/**
 * Second product page, rendered from this object with zero component changes.
 * Sections it omits (compliance, roles, addOns, resources, testimonials,
 * whyUs) simply do not render.
 *
 * @type {import('./schema').ProductContent}
 */
export const ctms = {
  slug: 'ctms',
  meta: {
    title: 'CTMS — Clinical Trial Management | SclinNexus',
    breadcrumbSection: 'Solutions',
    breadcrumbLabel: 'CTMS',
  },

  hero: {
    eyebrow: { icon: 'calendarRange', label: 'Clinical Trial Management' },
    title: 'Every study, site and milestone in one working view',
    description:
      'SclinNexus CTMS is the operational backbone of the trial: site activation, monitoring visits, milestones and payments tracked in one place, with status that is current because it is where the work happens.',
    primaryCta: { label: 'Explore capabilities', targetId: 'capabilities' },
    secondaryCta: { label: 'Talk to our team', href: '/request-demo' },
    media: {
      label: 'CTMS portfolio dashboard — screenshot placeholder',
      videoTitle: 'SclinNexus CTMS in 3 minutes',
    },
  },

  stats: {
    items: [
      { value: 90, suffix: '+', label: 'Active studies managed' },
      { value: 2400, suffix: '+', label: 'Sites tracked' },
      { value: 4800, suffix: '+', label: 'Monitoring visits logged' },
    ],
    context:
      'Counted across production CTMS workspaces since 2021. A tracked site is one with an activation record and at least one logged contact or visit.',
  },

  capabilities: {
    eyebrow: 'Core capabilities',
    title: 'Operations, off the spreadsheet',
    sub: 'Four areas replace the study tracker, the site list, the visit log and the payment sheet — and keep them agreeing with each other.',
    cta: { label: 'See CTMS in a live demo', href: '/request-demo' },
    tabs: [
      {
        id: 'planning',
        label: 'Planning',
        title: 'Milestones that reflect reality',
        intro:
          'Country and site timelines roll up to study milestones automatically, so the plan and the status are the same document.',
        bullets: [
          'Study, country and site milestone templates',
          'Actuals roll up from site activity, not manual updates',
          'Critical-path view of what is actually blocking first patient',
          'Baseline versus current plan, kept side by side',
        ],
        screenshot: 'Milestone timeline view — screenshot placeholder',
      },
      {
        id: 'site-management',
        label: 'Site Management',
        title: 'One record per site, forever',
        intro:
          'Contacts, documents, feasibility history and performance live on the site record and carry over to the next study.',
        bullets: [
          'Site and investigator directory shared across studies',
          'Activation checklists with document tracking',
          'Enrolment versus commitment per site, live',
          'Site performance history for future feasibility',
        ],
        screenshot: 'Site record with activation checklist — screenshot placeholder',
      },
      {
        id: 'monitoring',
        label: 'Monitoring',
        title: 'Visits planned, logged and followed up',
        intro:
          'CRAs plan visits against monitoring plans, write reports in the system and track action items to closure.',
        bullets: [
          'Visit scheduling against the monitoring plan',
          'Structured visit reports with review and sign-off',
          'Action items tracked to closure, never lost in email',
          'Visit metrics by CRA, site and study',
        ],
        screenshot: 'Monitoring visit report — screenshot placeholder',
      },
      {
        id: 'payments',
        label: 'Payments',
        title: 'Site payments without the month-end scramble',
        intro:
          'Contracted budgets meet actual activity, so what each site is owed is a report, not a reconciliation project.',
        bullets: [
          'Contract budgets by visit and procedure',
          'Payable activity derived from tracked work',
          'Approval workflow with a full payment history',
          'Accrual and forecast exports for finance',
        ],
        screenshot: 'Site payments summary — screenshot placeholder',
      },
    ],
  },

  process: {
    title: 'How a study runs on SclinNexus CTMS',
    sub: 'From plan to close-out, the status is a by-product of the work.',
    steps: [
      {
        title: 'Plan the study',
        description: 'Set milestones and country footprint from templates.',
      },
      {
        title: 'Activate sites',
        description: 'Track feasibility, contracts and documents to green light.',
      },
      {
        title: 'Monitor',
        description: 'Plan visits, file reports, close action items.',
      },
      {
        title: 'Close out',
        description: 'Final visits, final payments, archived site records.',
      },
    ],
  },

  integration: {
    title: 'CTMS that reads the trial, not a spreadsheet about it',
    body: 'Because CTMS shares a platform with SclinNexus EDC, enrolment and data-quality numbers arrive from the study database itself. Monitoring plans respond to real site activity, and no one spends Friday reconciling two systems that should have agreed all along.',
    primaryCta: { label: 'See SclinNexus EDC', href: '/solutions/edc' },
    secondaryCta: { label: 'Talk to our team', href: '/request-demo' },
  },

  cta: {
    title: 'Run your portfolio on SclinNexus CTMS',
    tagline:
      'A walkthrough with a solutions engineer, using a portfolio shaped like yours.',
    button: { label: 'Request a demo', href: '/request-demo' },
  },
}
