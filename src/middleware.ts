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

  // ---- 1. Legacy country segment: /locations/ireland/{town} ----
  const legacy = pathname.match(/^\/locations\/([^/]+)\/([^/]+)\/?$/);
  if (legacy) {
    const [, country, town] = legacy;

    if (LEGACY_COUNTRY_SEGMENTS.has(country.toLowerCase())) {
      const realCountry = TOWN_TO_COUNTRY.get(town.toLowerCase());
      const url = request.nextUrl.clone();

      // Town found — send it to the correct country path.
      // Town not found — send to the Ireland hub rather than 404.
      url.pathname = realCountry
        ? `/locations/${realCountry}/${town.toLowerCase()}`
        : '/locations/republic-of-ireland';

      return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
  }

  // ---- 2. Short-form town URL: /locations/falkirk or legacy country hub ----
  const short = pathname.match(/^\/locations\/([^/]+)\/?$/);
  if (short) {
    const slug = short[1].toLowerCase();
    if (COUNTRY_SLUGS.has(slug)) return NextResponse.next();
    if (LEGACY_COUNTRY_SEGMENTS.has(slug)) {
      const url = request.nextUrl.clone();
      url.pathname = '/locations/republic-of-ireland';
      return NextResponse.redirect(url, 301);
    }

    const country = TOWN_TO_COUNTRY.get(slug);
    if (!country) return NextResponse.next();

    const url = request.nextUrl.clone();
    url.pathname = `/locations/${country}/${slug}`;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/locations/:path*',
};
