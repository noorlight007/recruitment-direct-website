import Link from 'next/link';
import type { SectorPageData } from '@/data/sectorPages';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

const PHONE = '01324 613198';
const SITE = 'https://rd1.co.uk';

// Towns to link into from sector pages. Keeps the 354-page location network
// connected to the commercial pages rather than sitting in isolation.
const FEATURED_LOCATIONS = [
  { name: 'Glasgow',    href: '/locations/scotland/glasgow' },
  { name: 'Edinburgh',  href: '/locations/scotland/edinburgh' },
  { name: 'Falkirk',    href: '/locations/scotland/falkirk' },
  { name: 'Manchester', href: '/locations/england/manchester' },
  { name: 'Birmingham', href: '/locations/england/birmingham' },
  { name: 'Leeds',      href: '/locations/england/leeds' },
  { name: 'Newcastle',  href: '/locations/england/newcastle' },
  { name: 'Cardiff',    href: '/locations/wales/cardiff' },
];

export default function SectorPage({ data }: { data: SectorPageData }) {
  const hireHref = `/find-staff?sector=${data.slug}`;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />
      <FloatingElements />

      <div className="flex-grow pt-20 sm:pt-28 pb-12 sm:pb-20">
        <main className="sector-page max-w-5xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="breadcrumbs">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/sectors">Sectors</Link></li>
              <li aria-current="page">{data.name}</li>
            </ol>
          </nav>

          <header className="sector-hero">
            <p className="eyebrow">Temporary | Contract | Permanent Recruitment</p>
            <h1>{data.h1}</h1>
            {data.intro.map((p, i) => <p key={i}>{p}</p>)}

            <div className="cta-row">
              <Link href={hireHref} className="btn-primary">
                Request {data.name} Staff
              </Link>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="btn-secondary">
                Call {PHONE}
              </a>
            </div>
          </header>

          {/* ---------------- Roles ---------------- */}
          <section aria-labelledby="roles-heading">
            <h2 id="roles-heading">{data.name} Roles We Recruit</h2>
            <div className="role-groups">
              {data.roleGroups.map((g) => (
                <div key={g.heading} className="role-group">
                  <h3>{g.heading}</h3>
                  <ul>
                    {g.roles.map((r) => <li key={r}>{r}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------- Environments / project types ---------------- */}
          <section aria-labelledby="served-heading">
            <h2 id="served-heading">{data.servedHeading}</h2>
            <div className="served-grid">
              {data.served.map((s) => (
                <div key={s.title} className="served-card">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------- Compliance ---------------- */}
          <section aria-labelledby="compliance-heading">
            <h2 id="compliance-heading">{data.complianceHeading}</h2>
            <ul className="compliance-list">
              {data.compliance.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </section>

          {/* ---------------- How it works ---------------- */}
          <section aria-labelledby="process-heading">
            <h2 id="process-heading">How We Supply {data.name} Staff</h2>
            <ol className="process-list">
              <li>
                <strong>Requirement received</strong> — by phone, WhatsApp, email or
                through the 24/7 request form.
              </li>
              <li>
                <strong>AI candidate search</strong> — matched against our database
                by role, tickets, location and availability.
              </li>
              <li>
                <strong>AI applicant call</strong> — candidates screened on right to
                work, qualifications and availability, day or night.
              </li>
              <li>
                <strong>Consultant review</strong> — a person checks every shortlist
                before it reaches you.
              </li>
              <li>
                <strong>Compliance checks</strong> — cards, tickets, references and
                background checks confirmed.
              </li>
              <li>
                <strong>Submitted to client</strong> — with everything verified.
              </li>
            </ol>
          </section>

          {/* ---------------- FAQs ---------------- */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading">{data.name} Recruitment FAQs</h2>
            {data.faqs.map((f) => (
              <details key={f.question}>
                <summary><h3>{f.question}</h3></summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </section>

          {/* ---------------- Locations ---------------- */}
          <section aria-labelledby="locations-heading">
            <h2 id="locations-heading">{data.name} Recruitment Across the UK</h2>
            <p>
              We supply {data.name.toLowerCase()} staff nationwide. Browse recruitment
              in your area:
            </p>
            <ul className="location-links">
              {FEATURED_LOCATIONS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{data.name} recruitment in {l.name}</Link>
                </li>
              ))}
            </ul>
            <p><Link href="/locations">View all locations</Link></p>
          </section>

          {/* ---------------- Closing CTA ---------------- */}
          <section className="closing-cta">
            <h2>Need {data.name} Staff?</h2>
            <p>
              Tell us the roles, the site and the start date. Our team will begin
              sourcing screened temporary, contract or permanent candidates straight
              away.
            </p>
            <div className="cta-row">
              <Link href={hireHref} className="btn-primary">Request Staff</Link>
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
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${SITE}${data.path}/#service`,
            name: `${data.name} Recruitment`,
            serviceType: `${data.name} recruitment`,
            provider: { '@id': `${SITE}/#organization` },
            areaServed: { '@type': 'Country', name: 'United Kingdom' },
            url: `${SITE}${data.path}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: data.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
              { '@type': 'ListItem', position: 2, name: 'Sectors', item: `${SITE}/sectors` },
              { '@type': 'ListItem', position: 3, name: data.name, item: `${SITE}${data.path}` },
            ],
          }),
        }}
      />
    </div>
  );
}
