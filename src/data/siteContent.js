import { studentPhotos } from './assets';

export const aboutPoints = [
  'Personalized counselling based on education, age, budget and career goal.',
  'Country and course comparison before students make decisions.',
  'Admission support, document guidance and embassy-style preparation.',
  'Travel insurance, accommodation guidance and air ticketing support after approval.',
];

export const visaProcessSteps = [
  { id: 'consultation', step: 1, title: 'Consultation', description: 'Understand student profile, budget, study goal and preferred country.' },
  { id: 'university', step: 2, title: 'University', description: 'Compare countries, colleges, tuition fees, intakes and study pathway.' },
  { id: 'admission', step: 3, title: 'Admission', description: 'Apply to college, receive offer letter and guide payment requirements.' },
  { id: 'visa', step: 4, title: 'Visa', description: 'Prepare SOP, forms, financial documents, affidavits and appointment file.' },
  { id: 'departure', step: 5, title: 'Departure', description: 'After approval, arrange insurance, ticket and pre-departure guidance.' },
  { id: 'success', step: 6, title: 'Success', description: 'You arrive at your destination — APJ\'s journey with you is complete.' },
];

export const services = [
  { id: 'profile', icon: 'target', title: 'Profile Evaluation', description: 'Review education, age, English level, financial background and future plan.' },
  { id: 'country', icon: 'globe', title: 'Country Selection', description: 'Compare destinations, course options, tuition range and pathway suitability.' },
  { id: 'admission', icon: 'graduation', title: 'Admission Processing', description: 'Support for college application, offer letter and tuition payment guidance.' },
  { id: 'sop', icon: 'document', title: 'SOP & Letters', description: 'Embassy-style SOP, parent consent, sponsor affidavit and employment letters.' },
  { id: 'financial', icon: 'bank', title: 'Financial Guidance', description: 'Bank statement, balance confirmation and sponsor income document guidance.' },
  { id: 'visa', icon: 'passport', title: 'Visa File Preparation', description: 'Document order, form checking and appointment preparation support.' },
  { id: 'accommodation', icon: 'home', title: 'Accommodation Guidance', description: 'Help students understand accommodation options near the college or city.' },
  { id: 'travel', icon: 'plane', title: 'Travel & Pre-Departure', description: 'Insurance, air ticketing and guidance before the student travels.' },
];

export const faqs = [
  {
    id: 'guarantee',
    question: 'Can APJ guarantee visa approval?',
    answer: 'No consultancy can guarantee an embassy decision. APJ can guide students professionally and prepare a complete visa file.',
  },
  {
    id: 'select',
    question: 'Can I select a country after consultation?',
    answer: 'Yes. APJ can compare countries based on education level, financial ability, future goals and course availability.',
  },
  {
    id: 'support',
    question: 'Can APJ support accommodation and ticketing?',
    answer: 'Yes. After visa approval, APJ can guide students with accommodation options, travel insurance, ticketing and pre-departure preparation.',
  },
  {
    id: 'documents',
    question: 'What documents do I need to start?',
    answer: 'Bring your educational certificates, passport copy, and any financial documents. APJ will provide a tailored checklist during consultation.',
  },
];

export const testimonials = [
  {
    id: 'malindu',
    name: 'Malindu',
    country: 'Singapore',
    quote:
      'APJ Consultancy guided me through every step of my Singapore student visa process. The team was friendly, professional, and always ready to answer my questions. I am very thankful for their excellent support.',
    photo: studentPhotos.malindu,
  },
  {
    id: 'umaya',
    name: 'Umaya',
    country: 'Malta',
    quote:
      'I am very grateful to APJ Consultancy for making my dream of studying in Malta possible. They explained the process clearly and helped me prepare all the required documents correctly.',
    photo: studentPhotos.umaya,
  },
  {
    id: 'nipuni',
    name: 'Nipuni',
    country: 'Malta',
    quote:
      'APJ Consultancy gave me outstanding guidance throughout my Malta student visa journey. Their team was always available, supportive, and professional. I confidently recommend APJ Consultancy to future students.',
    photo: studentPhotos.nipuni,
  },
  {
    id: 'sachith',
    name: 'Sachith',
    country: 'Singapore',
    quote:
      'I had a smooth and stress-free experience with APJ Consultancy. They helped me with my admission, documents, and visa process. I highly recommend their service to any student planning to study in Singapore.',
    photo: studentPhotos.sachith,
  },
  {
    id: 'mithun',
    name: 'Mithun',
    country: 'Russia',
    quote:
      'APJ Consultancy provided great support for my university admission and visa process to Russia. The staff handled my documents carefully and kept me updated at every stage. I truly appreciate their dedication.',
    photo: studentPhotos.mithun,
  },
  {
    id: 'darshana',
    name: 'Darshana',
    country: 'Malta',
    quote:
      'My experience with APJ Consultancy was excellent. They supported me from the university application until my Malta visa approval. The team was professional, helpful, and trustworthy.',
    photo: studentPhotos.darshana,
  },
];

export const trustItems = [
  { id: 'experience', label: 'Trusted Since 2022', icon: 'calendar' },
  { id: 'branches', label: '2 Branch Offices', icon: 'location' },
  { id: 'verified', label: 'Verified Process', icon: 'shield' },
  { id: 'partners', label: 'Partner Universities', icon: 'university' },
];

export const partnerUniversities = [
  'Deakin University',
  'Seneca College',
  'Taylor\'s University',
  'University of Hertfordshire',
  'Paris School of Business',
  'Heriot-Watt Dubai',
];
