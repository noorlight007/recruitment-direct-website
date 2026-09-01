import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  getLocation,
  getAllLocations,
  regionOf,
  travelRadiusOf,
} from '@/lib/locations';
import { SECTORS, getSector } from '@/lib/sectors';
import { buildLocationFaqs } from '@/lib/locationFaqs';
import {
  employmentAgencySchema,
  faqSchema,
  locationBreadcrumbSchema,
} from '@/lib/schema';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

const SITE = 'https://rd1.co.uk';
const PHONE = '01324 613198';

interface Params {
  params: Promise<{ country: string; city: string }> | { country: string; city: string };
}

// ---------------------------------------------------------------------------
// STATIC GENERATION — unchanged behaviour, all 354 pages pre-rendered
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllLocations().map((l) => ({
    country: l.country,
    city: l.slug,
  }));
}

// ---------------------------------------------------------------------------
// METADATA
//
// Title uses "Agencies" (plural) — every town query in Search Console that
// converts is plural. Brand name dropped: it wins no non-brand clicks and
// costs characters.
// ---------------------------------------------------------------------------

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const resolvedParams = await params;
  const loc = getLocation(resolvedParams.country, resolvedParams.city);
  if (!loc) return {};

  const region = regionOf(loc);
  const url = `${SITE}/locations/${loc.country}/${loc.slug}`;

  const longTitle = `Recruitment Agencies in ${loc.name} | Temp, Contract & Permanent Staff`;
  const shortTitle = `Recruitment Agencies in ${loc.name} | Staff Supplied 24/7`;
  const title = longTitle.length <= 62 ? longTitle : shortTitle;

  // Names the locally-relevant sector so the description varies per town.
  const topSector =
    getSector(loc.prioritySectors?.[0] ?? '')?.name.toLowerCase() ?? 'healthcare';

  const description =
    `Looking for staff in ${loc.name}? Recruitment Direct UK supplies temporary, ` +
    `contract and permanent workers across ${region} — construction, logistics, ` +
    `${topSector} and more. Trusted since 2006. Call ${PHONE}.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Recruitment Direct UK',
      type: 'website',
      locale: 'en_GB',
      images: [
        { url: '/images/og-image.png', width: 1200, height: 630, alt: 'Recruitment Direct UK Ltd' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og-image.png'],
    },
    robots: { index: true, follow: true },
  };
}

// ---------------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------------

export default async function LocationPage({ params }: Params) {
  const resolvedParams = await params;
  const loc = getLocation(resolvedParams.country, resolvedParams.city);
  if (!loc) notFound();

  const region = regionOf(loc);
  const radius = travelRadiusOf(loc);
  const faqs = buildLocationFaqs(loc);

  const countryLabel =
    loc.country.charAt(0).toUpperCase() + loc.country.slice(1).replace(/-/g, ' ');

  const hireHref = `/find-staff?location=${encodeURIComponent(loc.name)}`;

  // Priority sectors first, then the rest.
  const priority = loc.prioritySectors ?? [];
  const orderedSectors = [
    ...priority.map((s) => getSector(s)).filter(Boolean),
    ...SECTORS.filter((s) => !priority.includes(s.slug)),
  ] as typeof SECTORS;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />
      <FloatingElements />

      <div className="flex-grow pt-20 sm:pt-28 pb-12 sm:pb-20">
        <main className="location-page max-w-5xl mx-auto px-4">
          {/* ---------------- Breadcrumbs ---------------- */}
          <nav aria-label="Breadcrumb" className="breadcrumbs">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/locations">Locations</Link></li>
              <li><Link href={`/locations/${loc.country}`}>{countryLabel}</Link></li>
              <li aria-current="page">{loc.name}</li>
            </ol>
          </nav>

          {/* ---------------- H1 + local intro ----------------
              Unique content leads the page. Nothing templated above this. */}
          <header className="location-hero">
            <p className="eyebrow">Temporary | Contract | Permanent Recruitment</p>
            <h1>Recruitment Agencies in {loc.name}</h1>

            {loc.localContext && <p className="local-context">{loc.localContext}</p>}

            <p>
              Recruitment Direct UK supplies temporary, contract and permanent staff to
              employers throughout {loc.name} and the wider {region} area
              {loc.employmentSites?.length
                ? `, including ${loc.employmentSites.slice(0, 2).join(' and ')}`
                : ''}
              . Most candidates we place in {loc.name} travel from within {radius} miles.
            </p>

            <div className="cta-row">
              <Link href={hireHref} className="btn-primary">
                Find Staff in {loc.name}
              </Link>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="btn-secondary">
                Call {PHONE}
              </a>
            </div>
          </header>

          {/* ---------------- Local employment market ---------------- */}
          {(loc.employmentSites?.length ||
            loc.transport?.length ||
            loc.districts?.length) && (
            <section aria-labelledby="market-heading">
              <h2 id="market-heading">The {loc.name} Employment Market</h2>

              {loc.employmentSites?.length ? (
                <>
                  <h3>Key employment sites</h3>
                  <ul>
                    {loc.employmentSites.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </>
              ) : null}

              {loc.transport?.length ? (
                <>
                  <h3>Transport and access</h3>
                  <ul>
                    {loc.transport.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </>
              ) : null}

              {loc.districts?.length ? (
                <>
                  <h3>Areas we cover around {loc.name}</h3>
                  <p>{loc.districts.join(', ')}.</p>
                </>
              ) : null}
            </section>
          )}

          {/* ---------------- Sector grid ----------------
              Replaces ~1,400 words of identical boilerplate that appeared on all
              354 pages. Four roles per sector; full lists live on the sector page. */}
          <section aria-labelledby="sectors-heading">
            <h2 id="sectors-heading">Recruitment Sectors in {loc.name}</h2>
            <p>
              We supply temporary, contract and permanent staff across every sector
              below in {loc.name}
              {priority.length ? '. The first three reflect local demand' : ''}.
            </p>

            <div className="sector-grid">
              {orderedSectors.map((s) => (
                <div key={s.slug} className="sector-card">
                  <h3>{s.name}</h3>
                  <p className="sector-roles">{s.topRoles.join(' · ')}</p>
                  {s.live ? (
                    <Link href={s.href}>{s.name} recruitment</Link>
                  ) : (
                    <span className="sector-pending">Coming soon</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ---------------- Contract types ---------------- */}
          <section aria-labelledby="types-heading">
            <h2 id="types-heading">
              Temporary, Contract and Permanent Recruitment in {loc.name}
            </h2>
            <div className="type-grid">
              <div>
                <h3>Temporary</h3>
                <p>
                  Cover for absence, seasonal peaks and short-notice demand in{' '}
                  {loc.name}, often starting within 24 hours.
                </p>
              </div>
              <div>
                <h3>Contract</h3>
                <p>
                  Fixed-term and project personnel for defined assignments across{' '}
                  {region}.
                </p>
              </div>
              <div>
                <h3>Permanent</h3>
                <p>
                  Screened, referenced permanent hires for employers in {loc.name},
                  from operatives to management.
                </p>
              </div>
            </div>
          </section>

          {/* ---------------- Why RDUK ---------------- */}
          <section aria-labelledby="why-heading">
            <h2 id="why-heading">Why Employers in {loc.name} Choose Us</h2>
            <ul>
              <li>Supplying staff since 2006</li>
              <li>24/7 AI-supported applicant screening</li>
              <li>Right to Work and compliance checks on every candidate</li>
              <li>Constructionline Gold, Cyber Essentials, ISO 9001, REC member</li>
              <li>High-volume capability for project and site starts</li>
              <li>Consultant-reviewed CVs, not automated CV dumps</li>
            </ul>
          </section>

          {/* ---------------- FAQs ---------------- */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading">{loc.name} Recruitment FAQs</h2>
            {faqs.map((f) => (
              <details key={f.question}>
                <summary><h3>{f.question}</h3></summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </section>

          {/* ---------------- Nearby towns ----------------
              Uses real neighbours from location data. The previous version served
              every Scottish town the Glasgow hub's satellite list regardless of
              actual geography (Coatbridge listed Renfrewshire towns). */}
          {loc.neighbours?.length ? (
            <section aria-labelledby="nearby-heading">
              <h2 id="nearby-heading">Recruitment Near {loc.name}</h2>
              <ul className="nearby-list">
                {loc.neighbours.map((n) => (
                  <li key={n.slug}>
                    <Link href={`/locations/${n.country}/${n.slug}`}>
                      Recruitment agencies in {n.name}
                    </Link>
                    <span className="nearby-distance">{n.miles} miles</span>
                  </li>
                ))}
              </ul>
              <p>
                <Link href={`/locations/${loc.country}`}>
                  All {countryLabel} locations
                </Link>
              </p>
            </section>
          ) : null}

          {/* ---------------- Closing CTA ---------------- */}
          <section className="closing-cta">
            <h2>Need Staff in {loc.name}?</h2>
            <p>
              Tell us the roles you need filled and our team will begin sourcing
              screened temporary, contract or permanent candidates.
            </p>
            <div className="cta-row">
              <Link href={hireHref} className="btn-primary">Find Staff</Link>
              <Link href="/contact" className="btn-secondary">Contact Our Team</Link>
            </div>
          </section>
        </main>
      </div>

      <Footer />

      {/* ---------------- Structured data ---------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(employmentAgencySchema(loc)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationBreadcrumbSchema(loc)),
        }}
      />
    </div>
  );
}
