import type { LocationData, CountrySlug } from '@/lib/locations';
import { cities } from '@/data/cities';

// ---------------------------------------------------------------------------
// LOCATION DATA
//
// Every field except slug/name/country is optional. Towns with only the three
// required fields still render a complete page — they just show less local
// detail. Enrich the highest-value towns first.
//
// HOW TO WIRE THIS UP:
// If the 354 towns already come from a feed/CSV/Mapword export, map that
// source into this array at build time and merge the enriched entries below
// over the top by slug. Do NOT maintain two hand-typed lists.
//
// RULES WHEN ADDING DATA:
//   - Verifiable facts only (estates, junctions, stations, districts, distances)
//   - NEVER invent client names, placement examples or local addresses
//   - Distances must be accurate — wrong neighbours are worse than none
// ---------------------------------------------------------------------------

export const ENRICHED: LocationData[] = [
  {
    slug: 'coatbridge',
    name: 'Coatbridge',
    country: 'scotland',
    region: 'North Lanarkshire',
    hubSlug: 'glasgow',
    population: 43950,
    prioritySectors: ['logistics', 'construction', 'facilities-management'],
    employmentSites: [
      'North Caldeen Road Industrial Estate',
      'Coatbridge Business Park',
      'Faraday Retail Park',
    ],
    transport: [
      'M8 motorway (Junction 8)',
      'A725 and A89 corridors',
      'Coatbridge Central and Coatbridge Sunnyside stations',
      'Glasgow city centre 9 miles west',
    ],
    districts: [
      'Gartsherrie', 'Townhead', 'Glenboig', 'Whifflet',
      'Old Monkland', 'Kirkshaws', 'Bargeddie', 'Coatdyke',
    ],
    neighbours: [
      { name: 'Airdrie',     slug: 'airdrie',     country: 'scotland', miles: 2 },
      { name: 'Bellshill',   slug: 'bellshill',   country: 'scotland', miles: 4 },
      { name: 'Motherwell',  slug: 'motherwell',  country: 'scotland', miles: 6 },
      { name: 'Cumbernauld', slug: 'cumbernauld', country: 'scotland', miles: 7 },
      { name: 'Glasgow',     slug: 'glasgow',     country: 'scotland', miles: 9 },
    ],
    travelRadius: 12,
    localContext:
      'Coatbridge sits in the Monklands area of North Lanarkshire, historically ' +
      'an ironworking centre and now dominated by distribution, warehousing and ' +
      'light manufacturing. Its position on the M8 between Glasgow and Edinburgh, ' +
      'with two stations on the North Clyde line, makes it a practical base for ' +
      'shift-based logistics and industrial work.',
  },

  {
    slug: 'bathgate',
    name: 'Bathgate',
    country: 'scotland',
    region: 'West Lothian',
    hubSlug: 'edinburgh',
    population: 22000,
    prioritySectors: ['construction', 'logistics', 'engineering'],
    employmentSites: [
      'Whitehill Industrial Estate',
      'Inchmuir Road Industrial Estate',
      'Bathgate Business Park',
    ],
    transport: [
      'M8 motorway (Junction 4)',
      'A89 and A801 corridors',
      'Bathgate station, Edinburgh–Glasgow via Airdrie line',
      'Edinburgh 19 miles east, Glasgow 27 miles west',
    ],
    districts: [
      'Blackburn', 'Armadale', 'Whitburn', 'Boghall',
      'Wester Inch', 'Balbardie', 'Livingston Village',
    ],
    neighbours: [
      { name: 'Livingston', slug: 'livingston', country: 'scotland', miles: 5 },
      { name: 'Linlithgow', slug: 'linlithgow', country: 'scotland', miles: 6 },
      { name: 'Broxburn',   slug: 'broxburn',   country: 'scotland', miles: 8 },
      { name: 'Falkirk',    slug: 'falkirk',    country: 'scotland', miles: 11 },
      { name: 'Edinburgh',  slug: 'edinburgh',  country: 'scotland', miles: 19 },
    ],
    travelRadius: 15,
    localContext:
      'Bathgate is the largest town in West Lothian, at the centre of the M8 ' +
      'corridor between Edinburgh and Glasgow. Since the closure of its motor ' +
      'plant the local economy has shifted toward construction, distribution and ' +
      'light engineering, with substantial ongoing housebuilding across West ' +
      'Lothian. Recruitment Direct UK is based six miles north in Linlithgow.',
  },

  {
    slug: 'enfield',
    name: 'Enfield',
    country: 'england',
    region: 'Greater London',
    hubSlug: 'london',
    prioritySectors: ['logistics', 'construction', 'facilities-management'],
    employmentSites: [
      'Brimsdown Industrial Estate',
      'Innova Park',
      'Enfield Distribution Park',
    ],
    transport: [
      'M25 (Junction 25) and A10 corridor',
      'Enfield Town, Enfield Chase and Brimsdown stations',
      'Central London 12 miles south',
    ],
    districts: [
      'Edmonton', 'Ponders End', 'Southgate', 'Palmers Green',
      'Winchmore Hill', 'Bush Hill Park', 'Enfield Lock', 'Cockfosters',
    ],
    neighbours: [
      { name: 'Barnet',    slug: 'barnet',    country: 'england', miles: 5 },
      { name: 'Waltham Cross', slug: 'waltham-cross', country: 'england', miles: 4 },
      { name: 'Cheshunt',  slug: 'cheshunt',  country: 'england', miles: 6 },
      { name: 'Tottenham', slug: 'tottenham', country: 'england', miles: 5 },
      { name: 'Harrow',    slug: 'harrow',    country: 'england', miles: 12 },
    ],
    travelRadius: 10,
    localContext:
      'Enfield is one of north London\u2019s largest industrial and distribution ' +
      'districts, anchored by Brimsdown Industrial Estate and the Lee Valley ' +
      'corridor. Warehousing, logistics and facilities operations dominate local ' +
      'employment, with continuous demand for shift-based temporary staff serving ' +
      'both London and the M25 corridor.',
  },
];

// Map 354 real locations from cities dataset
export const REAL_LOCATIONS: LocationData[] = cities.map((base) => ({
  slug: base.slug,
  name: base.city,
  country: base.countrySlug as CountrySlug,
  region: base.widerArea,
  hubSlug: base.hubSlug,
  districts: base.areas && base.areas.length > 0 ? base.areas : undefined,
}));

// Merge enriched data over base locations
export const LOCATIONS: LocationData[] = [
  ...REAL_LOCATIONS.map((base) => {
    const enriched = ENRICHED.find((e) => e.slug === base.slug);
    return enriched ? { ...base, ...enriched } : base;
  }),
  ...ENRICHED.filter((e) => !REAL_LOCATIONS.some((base) => base.slug === e.slug)),
];
