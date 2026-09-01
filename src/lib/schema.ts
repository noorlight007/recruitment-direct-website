import type { LocationData } from './locations';
import { regionOf } from './locations';

const SITE = 'https://rd1.co.uk';

// RD1 has ONE premises. This address appears on every location page.
// NEVER generate a per-town address — that is a Google policy violation.
const HQ_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Herkimer House, Mill Road Industrial Estate',
  addressLocality: 'Linlithgow',
  addressRegion: 'West Lothian',
  postalCode: 'EH49 7SF',
  addressCountry: 'GB',
} as const;

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'Recruitment Direct UK Ltd',
  alternateName: 'Recruitment Direct',
  url: SITE,
  logo: `${SITE}/logo.png`,
  image: `${SITE}/images/og-image.png`,
  foundingDate: '2006',
  vatID: 'GB880406428',
  telephone: '+441324613198',
  email: 'sales@rd1.co.uk',
  address: HQ_ADDRESS,
  sameAs: [
    'https://www.linkedin.com/company/recruitment-direct/',
    'https://www.facebook.com/recruitmentdirect/',
  ],
});

export const employmentAgencySchema = (loc: LocationData) => ({
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  '@id': `${SITE}/locations/${loc.country}/${loc.slug}/#business`,
  name: `Recruitment Direct UK — ${loc.name}`,
  url: `${SITE}/locations/${loc.country}/${loc.slug}`,
  parentOrganization: { '@id': `${SITE}/#organization` },
  telephone: '+441324613198',
  email: 'sales@rd1.co.uk',
  priceRange: '££',
  address: HQ_ADDRESS,
  areaServed: {
    '@type': 'City',
    name: loc.name,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: regionOf(loc),
    },
  },
});

export interface Faq {
  question: string;
  answer: string;
}

export const faqSchema = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

export const locationBreadcrumbSchema = (loc: LocationData) => {
  const country =
    loc.country.charAt(0).toUpperCase() +
    loc.country.slice(1).replace(/-/g, ' ');

  const crumbs = [
    { name: 'Home', url: SITE },
    { name: 'Locations', url: `${SITE}/locations` },
    { name: country, url: `${SITE}/locations/${loc.country}` },
    { name: loc.name, url: `${SITE}/locations/${loc.country}/${loc.slug}` },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
};
