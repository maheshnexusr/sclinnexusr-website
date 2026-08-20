export const epro = {
  slug: 'epro',
  meta: {
    title: 'ProEDC ePRO | Patient-Reported Outcomes',
    description: 'Capture patient-reported outcomes through simple digital assessments with ProEDC ePRO.',
  },
  breadcrumb: 'ePRO',
  hero: {
    eyebrow: 'Electronic Patient-Reported Outcomes',
    headline: ['Capture the patient perspective,', 'wherever the study takes place.'],
    sub: 'ProEDC ePRO enables participants to complete digital questionnaires and report outcomes through a simple, study-focused experience.',
    secondaryLabel: 'Explore ePRO',
    photo: {
      src: 'https://images.unsplash.com/photo-1712232420830-4a44967ba8d6?fm=jpg&q=80&w=1600&auto=format&fit=crop',
      alt: 'Study participant reporting outcomes on a personal device',
    },
  },
  why: {
    heading: 'Designed around the participant.',
    sub: 'The best patient-reported data comes from assessments people can actually complete.',
    cards: [
      { title: 'Patient Friendly', desc: 'Make assessments simple and easy to complete.' },
      { title: 'Real-Time Collection', desc: 'Capture responses closer to the moment they occur.' },
      { title: 'Reminders', desc: 'Help participants stay on schedule.' },
      { title: 'Connected Data', desc: 'Connect patient-reported information with the broader study workflow where supported.' },
    ],
  },
  capabilities: {
    heading: 'A simpler way to hear from participants.',
    items: [
      { icon: 'clipboardList', title: 'Assessments', desc: 'Deliver questionnaires and diaries configured for the study.' },
      { icon: 'smartphone', title: 'Mobile Experience', desc: 'Let participants respond on the device they already use.' },
      { icon: 'bell', title: 'Reminders', desc: 'Keep scheduled assessments on track.' },
      { icon: 'badgeCheck', title: 'Validation', desc: 'Apply study-defined validation to responses.' },
      { icon: 'workflow', title: 'Data Sync', desc: 'Connect responses with the study environment.' },
      { icon: 'eye', title: 'Review', desc: 'Give clinical teams visibility into available responses.' },
    ],
  },
  features: [
    {
      heading: 'Assessments participants can finish.',
      sub: 'Questionnaires and diaries are presented one clear step at a time, in a study-focused experience that works on the participant’s own device.',
      points: [
        'Clear, guided questionnaire experience',
        'Diaries and scheduled assessments in one place',
        'Progress visible to the participant',
      ],
      panel: {
        title: 'Today’s Assessments',
        badge: { text: '3 / 5 done', tone: 'green' },
        rows: [
          { label: 'Pain Level', sub: 'Daily · 2 min', badge: { text: 'Done', tone: 'green' } },
          { label: 'Quality of Life', sub: 'Weekly · 6 min', badge: { text: 'Done', tone: 'green' } },
          { label: 'Symptom Diary', sub: 'Daily · 3 min', badge: { text: 'Done', tone: 'green' } },
          { label: 'Sleep Assessment', sub: 'Daily · 2 min', badge: { text: 'To do', tone: 'gray' } },
        ],
      },
    },
    {
      heading: 'Reminders that keep studies on schedule.',
      sub: 'Participants are prompted when assessments are due, helping reduce missed entries without chasing.',
      points: [
        'Scheduled reminders for due assessments',
        'A clear view of what is outstanding',
        'Less follow-up burden for site teams',
      ],
      panel: {
        title: 'Schedule · Subject 2041',
        badge: { text: 'Week 12', tone: 'navy' },
        rows: [
          { label: 'Morning Diary', sub: 'Reminder sent 08:00', badge: { text: 'Completed', tone: 'green' } },
          { label: 'Evening Diary', sub: 'Reminder at 20:00', badge: { text: 'Scheduled', tone: 'gray' } },
          { label: 'Weekly QoL', sub: 'Due tomorrow', badge: { text: 'Upcoming', tone: 'amber' } },
          { label: 'Compliance This Week', value: '13 / 14' },
        ],
      },
    },
    {
      heading: 'Responses that reach the study team.',
      sub: 'Study-defined validation is applied to responses, and completed assessments connect with the study environment for clinical review.',
      points: [
        'Study-defined validation on responses',
        'Responses synced with the study environment',
        'Clinical teams review available responses',
      ],
      panel: {
        title: 'Responses · Site 101',
        badge: { text: 'Synced', tone: 'green' },
        rows: [
          { label: 'Subject 2041 · Pain Level', value: 'Today 08:12', badge: { text: 'Valid', tone: 'green' } },
          { label: 'Subject 2044 · QoL', value: 'Today 07:55', badge: { text: 'Valid', tone: 'green' } },
          { label: 'Subject 2038 · Symptom Diary', sub: 'Missed yesterday', badge: { text: 'Overdue', tone: 'amber' } },
          { label: 'Available for Review', value: '128 responses' },
        ],
      },
    },
  ],
  workflow: {
    heading: 'A simpler way to capture patient-reported data.',
    steps: [
      { title: 'Study Setup', desc: 'Configure assessments.' },
      { title: 'Patient Access', desc: 'Participants access their assigned assessments.' },
      { title: 'Assessment', desc: 'Complete questionnaires and diaries.' },
      { title: 'Validation', desc: 'Apply study-defined validation.' },
      { title: 'Data Sync', desc: 'Connect data with the study environment.' },
      { title: 'Review', desc: 'Clinical teams review available responses.' },
    ],
  },
  faq: [
    {
      q: 'What is ePRO?',
      a: 'ePRO (electronic patient-reported outcomes) lets study participants report outcomes — symptoms, quality of life, diaries — digitally instead of on paper, through assessments configured for the study.',
    },
    {
      q: 'How do participants complete assessments?',
      a: 'Participants access their assigned questionnaires and diaries through a simple, guided experience and complete them one step at a time.',
    },
    {
      q: 'Can participants use mobile devices?',
      a: 'Yes. The participant experience is designed mobile-first, so assessments can be completed on the participant’s own phone or tablet.',
    },
    {
      q: 'How are reminders handled?',
      a: 'Reminders are scheduled around due assessments, prompting participants when something needs attention and giving them a clear view of what is outstanding.',
    },
    {
      q: 'Can ePRO connect with EDC?',
      a: 'ProEDC ePRO is part of the same connected platform as ProEDC EDC, so patient-reported information can connect with the broader study workflow where supported.',
    },
  ],
}
