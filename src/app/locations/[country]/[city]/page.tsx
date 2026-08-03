import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCity } from "@/data/cities";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

type CityPageProps = {
  params: Promise<{
    country: string;
    city: string;
  }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({
    country: city.countrySlug,
    city: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { country, city } = await params;
  const page = getCity(country, city);

  if (!page) {
    return {};
  }

  const canonicalUrl = `https://www.rd1.co.uk${page.path}`;

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      siteName: "Recruitment Direct UK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.metaDescription,
    },
  };
}

export default async function CityRecruitmentPage({
  params,
}: CityPageProps) {
  const { country, city } = await params;
  const page = getCity(country, city);

  if (!page) {
    notFound();
  }

  const canonicalUrl = `https://www.rd1.co.uk${page.path}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.rd1.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://www.rd1.co.uk/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.country,
        item: `https://www.rd1.co.uk/locations/${page.countrySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: page.city,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const agencySchema = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "name": `Recruitment Direct UK Ltd - ${page.city}`,
    "url": canonicalUrl,
    "telephone": "0345 067 8022",
    "logo": "https://www.rd1.co.uk/logo.png",
    "image": "https://www.rd1.co.uk/logo.png",
    "sameAs": [
      "https://www.facebook.com/recruitmentdirectukltd",
      "https://www.linkedin.com/company/recruitment-direct-uk-ltd"
    ],
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": page.city
    },
    "serviceType": [
      "Temporary recruitment",
      "Contract recruitment",
      "Permanent recruitment"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Recruitment Direct UK Ltd",
      "url": "https://www.rd1.co.uk"
    }
  };

  const organisationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Recruitment Direct UK Ltd",
    url: "https://www.rd1.co.uk",
    telephone: "0345 067 8022",
    foundingDate: "2006",
    areaServed: [page.city, page.country],
    serviceType: [
      "Temporary recruitment",
      "Contract recruitment",
      "Permanent recruitment",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(agencySchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationSchema),
        }}
      />

      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <Navbar />
        <FloatingElements />

        <div className="flex-grow pt-28 pb-20">
          <main className="city-page-main">
            <nav className="city-breadcrumbs" aria-label="Breadcrumb">
              <div className="container">
                <ol>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <span className="separator">/</span>
                  <li>
                    <Link href="/locations">Locations</Link>
                  </li>
                  <span className="separator">/</span>
                  <li>
                    <span className="capitalize">{page.country}</span>
                  </li>
                  <span className="separator">/</span>
                  <li className="current">{page.city}</li>
                </ol>
              </div>
            </nav>

            <section className="city-hero">
              <div className="container">
                <p className="eyebrow">
                  Temporary | Contract | Permanent Recruitment
                </p>

                <h1>Recruitment Agency in {page.city}</h1>

                {page.introduction.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="cta-row">
                  <Link className="button button-primary" href="/ai-hire-now">
                    Request Staff
                  </Link>

                  <Link className="button button-secondary" href="/contact">
                    Contact Our Recruitment Team
                  </Link>
                </div>
              </div>
            </section>

            <section className="city-employer-support">
              <div className="container">
                <h2>Recruiting Staff in {page.city}?</h2>

                <p>
                  Recruitment Direct UK helps employers recruit reliable and
                  appropriately experienced personnel across {page.city} and the
                  surrounding region.
                </p>

                <ul>
                  <li>Urgent temporary staff</li>
                  <li>Skilled contract personnel</li>
                  <li>Permanent employees</li>
                  <li>Project and high-volume workforces</li>
                  <li>Professional and technical specialists</li>
                  <li>Senior and management appointments</li>
                </ul>

                <p>
                  Our consultants manage candidate sourcing, applicant screening,
                  shortlisting and relevant compliance checks, helping employers
                  reduce recruitment administration and fill vacancies faster.
                </p>
              </div>
            </section>

            <section className="city-sectors">
              <div className="container">
                <h2>Recruitment Sectors in {page.city}</h2>

                <p>
                  We provide temporary, contract and permanent recruitment across
                  every core Recruitment Direct UK sector.
                </p>

                <div className="sector-grid">
                  {page.sectors.map((sector) => (
                    <article className="sector-card" key={sector.slug}>
                      <h3>{sector.heading}</h3>

                      <p>{sector.description}</p>

                      <h4>Roles we recruit include:</h4>

                      <ul>
                        {sector.roles.map((role) => (
                          <li key={role}>{role}</li>
                        ))}
                      </ul>

                      <Link href={`/sectors/${sector.slug}`}>
                        Learn more about {sector.name} recruitment
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="recruitment-services">
              <div className="container">
                <h2>
                  Temporary, Contract and Permanent Recruitment in {page.city}
                </h2>

                <div className="service-grid">
                  <article>
                    <h3>Temporary Recruitment</h3>
                    <p>
                      Access temporary personnel for urgent cover, seasonal
                      requirements, projects, increased workloads and ongoing
                      assignments.
                    </p>
                  </article>

                  <article>
                    <h3>Contract Recruitment</h3>
                    <p>
                      Recruit specialist contractors and fixed-term personnel for
                      defined projects, technical assignments and periods of
                      increased demand.
                    </p>
                  </article>

                  <article>
                    <h3>Permanent Recruitment</h3>
                    <p>
                      Find permanent employees with the experience, qualifications
                      and long-term suitability required by your organisation.
                    </p>
                  </article>
                </div>
              </div>
            </section>

            <section className="local-recruitment">
              <div className="container">
                <h2>Local Recruitment Support Across {page.city}</h2>

                {page.localMarket.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="areas-covered">
              <div className="container">
                <h2>Areas We Cover Around {page.city}</h2>

                <ul className="area-list">
                  {page.areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="why-rduk">
              <div className="container">
                <h2>Why Employers Choose Recruitment Direct UK</h2>

                <ul>
                  <li>Established recruitment company since 2006</li>
                  <li>Temporary, contract and permanent recruitment</li>
                  <li>Nationwide candidate sourcing</li>
                  <li>Every core RDUK recruitment sector covered</li>
                  <li>Experienced recruitment consultants</li>
                  <li>AI-supported applicant screening</li>
                  <li>Right to Work and relevant compliance checks</li>
                  <li>Fast response to urgent vacancies</li>
                  <li>High-volume recruitment capability</li>
                </ul>
              </div>
            </section>

            <section className="city-faqs">
              <div className="container">
                <h2>{page.city} Recruitment FAQs</h2>

                {page.faqs.map((faq) => (
                  <details key={faq.question} className="faq-details">
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="final-client-cta">
              <div className="container">
                <h2>Need Staff in {page.city}?</h2>

                <p>
                  Tell us which positions you need to fill and our recruitment team
                  will begin sourcing suitable temporary, contract or permanent
                  personnel.
                </p>

                <div className="cta-row">
                  <Link className="button button-primary" href="/ai-hire-now">
                    Request Staff
                  </Link>

                  <Link className="button button-secondary" href="/contact">
                    Contact Recruitment Direct UK
                  </Link>
                </div>
              </div>
            </section>

            <section className="city-internal-links">
              <div className="container">
                <h2>Recruitment Direct UK Information & Resources</h2>
                <div className="links-grid">
                  <div className="links-col">
                    <h3>Explore Locations</h3>
                    <ul>
                      {cities
                        .filter((c) => c.countrySlug === page.countrySlug && c.slug !== page.slug)
                        .slice(0, 4)
                        .map((c) => (
                          <li key={c.slug}>
                            <Link href={c.path}>Recruitment Agency in {c.city}</Link>
                          </li>
                        ))}
                      <li>
                        <Link href="/locations">View All Our Locations</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="links-col">
                    <h3>Recruitment Sectors</h3>
                    <ul>
                      <li>
                        <Link href="/sectors/construction">Construction Recruitment</Link>
                      </li>
                      <li>
                        <Link href="/sectors/engineering">Engineering Recruitment</Link>
                      </li>
                      <li>
                        <Link href="/sectors/logistics">Logistics & Driving Recruitment</Link>
                      </li>
                      <li>
                        <Link href="/sectors/healthcare">Healthcare & Care Recruitment</Link>
                      </li>
                      <li>
                        <Link href="/sectors/education">Education Sector Recruitment</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="links-col">
                    <h3>Employer Services</h3>
                    <ul>
                      <li>
                        <Link href="/why-choose-us">Why Choose RDUK</Link>
                      </li>
                      <li>
                        <Link href="/temporary-staff">Temporary Staff Supply</Link>
                      </li>
                      <li>
                        <Link href="/contract-staff">Contract Staff Supply</Link>
                      </li>
                      <li>
                        <Link href="/place-enquiry">Submit a Staffing Inquiry</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="links-col">
                    <h3>Agency Resources</h3>
                    <ul>
                      <li>
                        <Link href="/about">About Our Agency</Link>
                      </li>
                      <li>
                        <Link href="/job-search">Search Active Jobs</Link>
                      </li>
                      <li>
                        <Link href="/contact">Get in Touch / Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}
