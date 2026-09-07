import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { LOCATIONS } from '@/data/locations';

const COUNTRY_SLUGS = new Set([
  'scotland',
  'england',
  'wales',
  'northern-ireland',
  'republic-of-ireland',
]);

const TOWN_TO_COUNTRY = new Map(
  LOCATIONS.map((l) => [l.slug, l.country] as const),
);

// Legacy paths that used a country segment we no longer use.
// /locations/ireland/dublin -> /locations/republic-of-ireland/dublin
// /locations/ireland/belfast -> /locations/northern-ireland/belfast
const LEGACY_COUNTRY_SEGMENTS = new Set(['ireland', 'eire', 'roi', 'ni', 'uk']);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ---- 1. Two-segment location URL: /locations/{country}/{town} ----
  const twoSegment = pathname.match(/^\/locations\/([^/]+)\/([^/]+)\/?$/);
  if (twoSegment) {
    const country = twoSegment[1].toLowerCase();
    const town = twoSegment[2].toLowerCase();

    // Legacy country segment (e.g., /locations/ireland/dublin)
    if (LEGACY_COUNTRY_SEGMENTS.has(country)) {
      const realCountry = TOWN_TO_COUNTRY.get(town);
      const url = request.nextUrl.clone();
      url.pathname = realCountry
        ? `/locations/${realCountry}/${town}`
        : (country === 'ni' ? '/locations/northern-ireland' : '/locations/republic-of-ireland');
      return NextResponse.redirect(url, 301);
    }

    // Valid canonical country slug (e.g., scotland, england, wales, etc.)
    if (COUNTRY_SLUGS.has(country)) {
      const actualCountry = TOWN_TO_COUNTRY.get(town);
      if (actualCountry === country) {
        return NextResponse.next();
      }
      const url = request.nextUrl.clone();
      // If town exists in a different country, redirect there; otherwise fallback to country hub
      url.pathname = actualCountry
        ? `/locations/${actualCountry}/${town}`
        : `/locations/${country}`;
      return NextResponse.redirect(url, 301);
    }

    // Unknown country segment (e.g., /locations/unknown/town)
    const realCountry = TOWN_TO_COUNTRY.get(town);
    const url = request.nextUrl.clone();
    url.pathname = realCountry
      ? `/locations/${realCountry}/${town}`
      : '/locations';
    return NextResponse.redirect(url, 301);
  }

  // ---- 2. Short-form town URL: /locations/falkirk or legacy country hub ----
  const short = pathname.match(/^\/locations\/([^/]+)\/?$/);
  if (short) {
    const slug = short[1].toLowerCase();
    if (COUNTRY_SLUGS.has(slug)) return NextResponse.next();
    if (LEGACY_COUNTRY_SEGMENTS.has(slug)) {
      const url = request.nextUrl.clone();
      url.pathname = slug === 'ni' ? '/locations/northern-ireland' : '/locations/republic-of-ireland';
      return NextResponse.redirect(url, 301);
    }

    const country = TOWN_TO_COUNTRY.get(slug);
    const url = request.nextUrl.clone();
    url.pathname = country ? `/locations/${country}/${slug}` : '/locations';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/locations/:path*',
};
