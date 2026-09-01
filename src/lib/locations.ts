// Location data types + helpers.
//
// IMPORTANT: this file assumes location records come from whatever source
// already drives the 354 pages (the Mapword feed / CSV / JSON). Only the
// getLocation() implementation at the bottom needs pointing at that source.
//
// Every field except slug/name/country is OPTIONAL. Pages for towns with no
// enriched data still render correctly — they just show less local detail.

export type CountrySlug =
  | 'scotland'
  | 'england'
  | 'wales'
  | 'northern-ireland'
  | 'republic-of-ireland';

export interface Neighbour {
  name: string;
  slug: string;
  country: CountrySlug;
  miles: number;
}

export interface LocationData {
  slug: string;
  name: string;
  country: CountrySlug;

  /** County / council area, e.g. 'North Lanarkshire'. Falls back to country. */
  region?: string;

  /** Nearest flagship hub slug, e.g. 'glasgow'. */
  hubSlug?: string;

  /** Sector slugs that matter most locally, max 3, most important first. */
  prioritySectors?: string[];

  /** Named industrial estates / business parks. 2-4 items. */
  employmentSites?: string[];

  /** Motorways, A-roads, stations. 2-4 items. */
  transport?: string[];

  /** Districts and villages in the catchment. 6-10 items. */
  districts?: string[];

  /** Real neighbouring towns with accurate distances. 5-8 items. */
  neighbours?: Neighbour[];

  /** Typical candidate travel radius in miles. Defaults to 12. */
  travelRadius?: number;

  /** 2-3 sentences of genuine local labour-market context. */
  localContext?: string;

  population?: number;
}

export const COUNTRY_LABEL: Record<CountrySlug, string> = {
  scotland: 'Scotland',
  england: 'England',
  wales: 'Wales',
  'northern-ireland': 'Northern Ireland',
  'republic-of-ireland': 'Ireland',
};

/** Region if we have it, otherwise the country name. Never empty. */
export const regionOf = (loc: LocationData): string =>
  loc.region || COUNTRY_LABEL[loc.country];

export const travelRadiusOf = (loc: LocationData): number =>
  loc.travelRadius ?? 12;

// ---------------------------------------------------------------------------
// DATA SOURCE
//
// Replace the body of these two functions with reads from the existing
// location source. The rest of the codebase only touches these.
// ---------------------------------------------------------------------------

import { LOCATIONS } from '@/data/locations';

export function getLocation(
  country: string,
  city: string,
): LocationData | undefined {
  return LOCATIONS.find((l) => l.country === country && l.slug === city);
}

export function getAllLocations(): LocationData[] {
  return LOCATIONS;
}

/** Used by the short-URL redirect: find a town regardless of country. */
export function findLocationBySlug(slug: string): LocationData | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
