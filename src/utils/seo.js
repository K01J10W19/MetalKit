import { CONTACTS } from '@/data/content';

export const SITE = {
  name: 'METAL KIT',
  url: 'https://metal-kit.ru',
  // TODO: replace with a 1200×630 JPG/PNG share image
  ogImage: '/images/hero-1200.webp',
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: CONTACTS.phoneRaw,
  email: CONTACTS.email,
  areaServed: 'Moscow and Moscow Oblast',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '80 Tolmacheva St',
    addressLocality: 'Ivanteevka',
    addressRegion: 'Moscow Oblast',
    addressCountry: 'RU',
  },
};

export const faqJsonLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
});
