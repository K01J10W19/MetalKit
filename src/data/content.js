/* Static content from the METAL KIT design (fully front-end, no CMS). */

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contacts', label: 'Contacts' },
];

/* Per-route <title> / description */
export const PAGE_META = {
  home: {
    title: 'Custom Metal Structures in Moscow & Region — METAL KIT',
    description: 'Custom carports, staircases, gazebos and hangars. In-house workshop, delivery and installation, 2-year warranty.',
  },
  services: {
    title: 'Services — METAL KIT',
    description: 'Carports, staircases, gazebos and hangars built to your design: survey, fabrication, installation.',
  },
  projects: {
    title: 'Completed projects — METAL KIT',
    description: 'Portfolio: carports, staircases and railings fabricated and installed by METAL KIT.',
  },
  contacts: {
    title: 'Contacts — METAL KIT',
    description: '80 Tolmacheva St, Ivanteevka · +7 (123) 458-90-11. Free on-site measurement.',
  },
  notFound: {
    title: 'Page not found — METAL KIT',
    description: 'This page doesn’t exist. Head back to METAL KIT’s home page.',
  },
};

export const FEATURES = ['Built in as little as 2 weeks', 'Fixed deadlines', 'Delivery & installation', '2-year warranty'];

/*
 * summary → home card caption; description + gallery → Services catalogue.
 * hasProjects toggles the "View projects" link (no hangars in the portfolio yet).
 */
export const SERVICES = [
  {
    slug: 'canopies',
    title: 'Carports',
    summary: 'shelter from rain and sun',
    description: 'Shelter from rain and sun. Built in as little as 2 weeks, delivered and installed.',
    img: '/images/services/canopy.webp',
    gallery: [
      { src: '/images/services/canopy-clean.webp', alt: 'Carport', width: 273, height: 209 },
      { src: '/images/projects/p-08.webp', alt: 'Lean-to canopy along the house', width: 273, height: 197 },
      { src: '/images/projects/p-12.webp', alt: 'Post-supported canopy', width: 273, height: 197 },
    ],
    hasProjects: true,
  },
  {
    slug: 'stairs',
    title: 'Staircases',
    summary: 'safe, sturdy structures for your home',
    description: 'Safe, sturdy structures for your home: outdoor and indoor staircases on a steel frame.',
    img: '/images/services/stairs.webp',
    gallery: [
      { src: '/images/services/stairs-clean.webp', alt: 'Staircase on a steel frame', width: 273, height: 209 },
      { src: '/images/projects/p-09.webp', alt: 'Outdoor staircase with canopy', width: 273, height: 197 },
      { src: '/images/projects/p-11.webp', alt: 'Staircase frame', width: 273, height: 197 },
    ],
    hasProjects: true,
  },
  {
    slug: 'gazebos',
    title: 'Gazebos',
    summary: 'cosy outdoor retreats for your plot',
    description: 'Cosy outdoor retreats for your plot: open gazebos and hip-roof canopies.',
    img: '/images/services/gazebo.webp',
    gallery: [
      { src: '/images/services/gazebo-clean.webp', alt: 'Gazebo with wrought-iron detailing', width: 273, height: 209 },
      { src: '/images/projects/p-07.webp', alt: 'Hip-roof canopy', width: 273, height: 197 },
    ],
    hasProjects: true,
  },
  {
    slug: 'hangars',
    title: 'Hangars',
    summary: 'durable structures for storage and utility use',
    description: 'Durable structures for storage and utility use: warehouses and covered shelters for machinery and materials.',
    img: '/images/services/hangar.webp',
    gallery: [{ src: '/images/services/hangar-clean.webp', alt: 'Corrugated-steel hangar', width: 273, height: 209 }],
    hasProjects: false,
  },
];

/* Rendered in this order: text, text, image, image, text, text (3 columns on lg) */
export const AUDIENCE = [
  { kind: 'text', n: '01', title: 'For private homeowners', text: 'For landscaping your property: carports, staircases, gazebos and hangars for storing tools and equipment.' },
  { kind: 'text', n: '02', title: 'For country-house owners', text: 'For landscaping your property: carports, staircases, gazebos and hangars for storing tools and equipment.' },
  { kind: 'image', src: '/images/audience/house-stairs.webp', alt: 'Metal staircase with a canopy at a private house', width: 275, height: 205 },
  { kind: 'image', src: '/images/audience/house-gate.webp', alt: 'Canopy and fencing at a property entrance', width: 275, height: 207 },
  { kind: 'text', n: '03', title: 'For land owners and new builds', text: 'Custom metal structures fabricated to the client’s needs' },
  { kind: 'text', n: '04', title: 'For small businesses and farms', text: 'Hangars, warehouses and covered shelters for machinery and materials.' },
];

export const ABOUT = [
  'Over that time we’ve delivered hundreds of projects for private clients, helping them equip their properties with practical, reliable structures. Our team are qualified specialists with more than 10 years of experience who control quality at every stage, from design to installation.',
  'We fabricate everything in our own workshop, so we keep to deadlines and can vouch for every part. We work under contract, fix the price and timeline, and give a 2-year warranty. Any form of payment is accepted, and we handle delivery and installation.',
];

/* accent: filled amber numeral (01 and 05 in the reference), the rest are outlined */
export const STEPS = [
  { n: '01', title: 'Submit a request', text: 'Leave your details or give us a call', accent: true },
  { n: '02', title: 'Get a quote', text: 'An exact price in 5 minutes' },
  { n: '03', title: 'On-site survey', text: 'We measure on site for free' },
  { n: '04', title: 'Contract', text: 'We lock in price, timeline and terms' },
  { n: '05', title: 'Fabrication', text: 'Made in our own workshop', accent: true },
  { n: '06', title: 'Installation', text: 'Professional turnkey installation' },
];

export const FAQ = [
  { q: 'How much does a structure cost?', a: 'The price depends on several factors: size, structural complexity, chosen materials and extras (forged details, coatings, reinforced frames). For an exact price, submit a request — the estimate takes no more than 5 minutes.' },
  { q: 'How long does fabrication take?', a: 'From 2 weeks. Deadlines are fixed in the contract and we keep them — all fabrication happens in our own workshop.' },
  { q: 'How does payment work?', a: 'We work under contract: price and timeline are fixed before work begins. Any form of payment is accepted.' },
  { q: 'What warranty do you give?', a: 'We give a 2-year warranty. Qualified specialists with over 10 years of experience control quality at every stage, from design to installation.' },
  { q: 'How do I order?', a: 'Submit a request on the site or call us: a specialist will contact you within 15 minutes, calculate the price and book a free on-site measurement.' },
];

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'canopies', label: 'Canopies' },
  { id: 'stairs', label: 'Staircases' },
  { id: 'fences', label: 'Railings' },
];

export const PROJECTS = [
  ['Wrought-iron stair railing', 'stairs'],
  ['Entrance porch with railing', 'stairs'],
  ['Wrought-iron fence', 'fences'],
  ['Double carport', 'canopies'],
  ['Porch canopy', 'canopies'],
  ['Terrace railing', 'fences'],
  ['Hip-roof canopy', 'canopies'],
  ['Lean-to canopy along the house', 'canopies'],
  ['Outdoor staircase with canopy', 'stairs'],
  ['Arched canopy', 'canopies'],
  ['Staircase frame', 'stairs'],
  ['Post-supported canopy', 'canopies'],
].map(([title, category], i) => ({
  id: i + 1,
  title,
  category,
  img: '/images/projects/p-' + String(i + 1).padStart(2, '0') + '.webp',
}));

export const CONTACTS = {
  address: '80 Tolmacheva St, Ivanteevka',
  mapUrl: 'https://yandex.ru/maps/?text=%D0%98%D0%B2%D0%B0%D0%BD%D1%82%D0%B5%D0%B5%D0%B2%D0%BA%D0%B0%2C%20%D1%83%D0%BB.%20%D0%A2%D0%BE%D0%BB%D0%BC%D0%B0%D1%87%D0%B5%D0%B2%D0%B0%2080',
  phone: '+7 (123) 458-90-11',
  phoneRaw: '+71234589011',
  email: 'info@metal-kit.ru',
};

export const SOCIALS = [
  { label: 'WhatsApp', href: 'https://wa.me/71234589011', icon: 'whatsapp' },
  { label: 'Telegram', href: 'https://t.me/+71234589011', icon: 'telegram' },
];
