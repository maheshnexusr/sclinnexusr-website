export const econsent = {
  slug: 'econsent',
  meta: {
    title: 'ProEDC eConsent | Electronic Informed Consent',
    description: 'Deliver digital informed consent with version control, signatures and traceability using ProEDC eConsent.',
  },
  breadcrumb: 'eConsent',
  hero: {
    eyebrow: 'Electronic Informed Consent',
    headline: ['Make informed consent simpler,', 'clearer and more connected.'],
    sub: 'ProEDC eConsent helps study teams deliver digital consent experiences while maintaining version control, signatures and traceability.',
    secondaryLabel: 'Explore eConsent',
  },
  why: {
    heading: 'Consent participants actually understand.',
    sub: 'Informed consent works best when the information is clear and the record is complete.',
    cards: [
      { title: 'Clearer Information', desc: 'Present study information in a digital, navigable format.' },
      { title: 'Version Control', desc: 'Keep consent document versions organized and current.' },
      { title: 'Digital Signatures', desc: 'Capture consent signatures electronically.' },
      { title: 'Full Traceability', desc: 'Maintain a complete record of consent actions.' },
    ],
  },
  capabilities: {
    heading: 'The consent workflow, end to end.',
    items: [
      { icon: 'fileCheck', title: 'Digital Consent Forms', desc: 'Present study information digitally.' },
      { icon: 'history', title: 'Version Control', desc: 'Track consent document versions.' },
      { icon: 'users', title: 'Participant Experience', desc: 'Make study information easier to navigate.' },
      { icon: 'penLine', title: 'Digital Signatures', desc: 'Capture consent signatures electronically.' },
      { icon: 'refreshCw', title: 'Re-Consent', desc: 'Support updated consent workflows when required.' },
      { icon: 'fingerprint', title: 'Audit Trail', desc: 'Maintain traceability of consent actions.' },
    ],
  },
  features: [
    {
      heading: 'Study information, presented clearly.',
      sub: 'Consent content is organized into sections participants can move through at their own pace, with questions raised before they sign.',
      points: [
        'Sectioned, navigable consent content',
        'Participants review at their own pace',
        'Questions captured before signature',
      ],
      panel: {
        title: 'Consent · Subject 1024',
        badge: { text: 'Version 3.1', tone: 'navy' },
        rows: [
          { label: 'Study Information', badge: { text: 'Reviewed', tone: 'green' } },
          { label: 'Risks', badge: { text: 'Reviewed', tone: 'green' } },
          { label: 'Benefits', badge: { text: 'Reviewed', tone: 'green' } },
          { label: 'Signature', badge: { text: 'Pending', tone: 'amber' } },
        ],
      },
    },
    {
      heading: 'Versions under control.',
      sub: 'Each consent document version is tracked, so teams always know which version a participant signed — and who still needs to re-consent after an update.',
      points: [
        'Document versions tracked centrally',
        'Signed version recorded per participant',
        'Re-consent workflows when documents change',
      ],
      panel: {
        title: 'ICF Versions · Main Study',
        badge: { text: 'v3.1 current', tone: 'green' },
        rows: [
          { label: 'Version 3.1', sub: 'Effective 01 Jul 2026', badge: { text: 'Current', tone: 'green' } },
          { label: 'Version 3.0', sub: 'Superseded', value: '212 signed' },
          { label: 'Re-consent Required', value: '14 participants', badge: { text: 'In progress', tone: 'amber' } },
          { label: 'Version 2.2', sub: 'Archived', value: '48 signed' },
        ],
      },
    },
    {
      heading: 'Signatures with a complete record.',
      sub: 'Signatures are captured electronically and every consent action is recorded, from presentation through investigator review.',
      points: [
        'Electronic signature capture',
        'Investigator review step included',
        'Every consent action recorded',
      ],
      panel: {
        title: 'Consent Record · Subject 1024',
        badge: { text: 'Traceable', tone: 'navy' },
        rows: [
          { label: 'Content presented', sub: 'v3.1 · site coordinator', value: '10:04' },
          { label: 'Participant signed', sub: 'Electronic signature', value: '10:31' },
          { label: 'Investigator reviewed', sub: 'Dr. Patel', value: '11:12' },
          { label: 'Consent record stored', badge: { text: 'Complete', tone: 'green' } },
        ],
      },
    },
  ],
  workflow: {
    heading: 'From information to informed consent.',
    steps: [
      { title: 'Present Study Information' },
      { title: 'Participant Reviews Content' },
      { title: 'Questions & Clarification' },
      { title: 'Digital Signature' },
      { title: 'Investigator Review' },
      { title: 'Consent Record' },
    ],
  },
  faq: [
    {
      q: 'What is eConsent?',
      a: 'eConsent (electronic informed consent) delivers the informed consent process digitally — presenting study information, capturing signatures electronically and keeping a traceable record of the process.',
    },
    {
      q: 'How are consent versions managed?',
      a: 'Consent documents are version-controlled, with the signed version recorded per participant. When a document is updated, re-consent workflows help teams manage who needs to sign the new version.',
    },
    {
      q: 'Can participants review consent remotely?',
      a: 'The consent experience is digital, so study teams can deliver it in the setting the study allows — on site or remotely, according to the study’s procedures.',
    },
    {
      q: 'How are signatures recorded?',
      a: 'Signatures are captured electronically and stored with the consent record, alongside the document version and the actions that led to the signature.',
    },
    {
      q: 'How is the consent history maintained?',
      a: 'Every consent action — presentation, review, signature, investigator review — is recorded with user and timestamp, forming a complete consent history for each participant.',
    },
  ],
}
