import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { cities } from "@/data/cities";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

type CountryPageProps = {
  params: Promise<{
    country: string;
  }>;
};

// Valid countries list
const VALID_COUNTRIES = ["scotland", "england", "wales", "northern-ireland", "republic-of-ireland"];

export function generateStaticParams() {
  return VALID_COUNTRIES.map((slug) => ({ country: slug }));
}

export async function generateMetadata({
  params,
}: CountryPageProps): Promise<Metadata> {
  const { country } = await params;
  const normalizedCountry = country.toLowerCase();

  if (normalizedCountry === "ireland") {
    permanentRedirect("/locations");
  }

  // If this is a redirect city, we don't want indexable metadata here
  if (!VALID_COUNTRIES.includes(normalizedCountry)) {
    return {
      robots: { index: false, follow: false }
    };
  }

  const countryName = getCountryName(normalizedCountry);
  if (!countryName) {
    return {};
  }

  const canonicalUrl = `https://rd1.co.uk/locations/${normalizedCountry}`;
  const fullTitle = `Recruitment Agency in ${countryName} | Temporary & Permanent Staff`;
  // Keep under ~60 characters so Google doesn't cut the title.
  const pageTitle = fullTitle.length <= 62 ? fullTitle : `Recruitment Agency in ${countryName} | RDUK`;
  const pageDescription =
    normalizedCountry === "scotland"
      ? "Recruitment Direct UK is a Scottish recruitment agency supplying temporary, contract and permanent staff across Scotland since 2006. Call 01324 613198."
      : `Recruitment Direct UK supplies temporary, contract and permanent staff across ${countryName}. Explore our local recruitment hubs or call 01324 613198.`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: normalizedCountry === "republic-of-ireland" ? {
        "en-IE": canonicalUrl,
        "x-default": canonicalUrl,
      } : {
        "en-GB": canonicalUrl,
        "x-default": canonicalUrl,
      }
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: "Recruitment Direct UK",
      type: "website",
      images: [
        {
          url: "https://rd1.co.uk/images/og-image.png",
          width: 1200,
          height: 630,
          alt: `Recruitment Direct UK - ${countryName}`,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["https://rd1.co.uk/images/og-image.png"],
    },
  };
}

function getCountryName(slug: string): string | null {
  if (slug === "wales") return "Wales";
  const match = cities.find((c) => c.countrySlug === slug);
  return match ? match.country : null;
}

export default async function CountryLocationsPage({
  params,
}: CountryPageProps) {
  const { country } = await params;
  const normalizedSlug = country.toLowerCase();

  // Redirect to lowercase URL if uppercase characters are detected
  if (country !== normalizedSlug) {
    permanentRedirect(`/locations/${normalizedSlug}`);
  }

  if (normalizedSlug === "ireland") {
    permanentRedirect("/locations");
  }

  // Check if it's a flat city route that needs redirecting
  if (!VALID_COUNTRIES.includes(normalizedSlug)) {
    const foundCity = cities.find(
      (c) => c.slug === normalizedSlug || c.city.toLowerCase() === normalizedSlug
    );
    if (foundCity) {
      permanentRedirect(foundCity.path);
    } else {
      permanentRedirect("/locations");
    }
  }

  const countryName = getCountryName(normalizedSlug);
  if (!countryName) {
    permanentRedirect("/locations");
  }

  const countryCities = cities.filter((c) => c.countrySlug === normalizedSlug);
  const hubs = countryCities.filter((c) => c.isHub);
  const spokes = countryCities.filter((c) => !c.isHub);

  const breadcrumbElements = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://rd1.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Locations",
      item: "https://rd1.co.uk/locations",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: countryName,
      item: `https://rd1.co.uk/locations/${normalizedSlug}`,
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbElements,
  };

  const hubNames = hubs.slice(0, 6).map((h) => h.city);
  const hubList = hubNames.length > 1
    ? `${hubNames.slice(0, -1).join(", ")} and ${hubNames[hubNames.length - 1]}`
    : hubNames[0] ?? countryName;

  const faqs = [
    {
      question: `Which areas of ${countryName} do you cover?`,
      answer: `We supply staff across ${countryName}, including ${hubList}, plus ${spokes.length} further towns and local areas listed on this page.`,
    },
    {
      question: "What types of staff can you supply?",
      answer: "Temporary, contract and permanent workers across construction, engineering, facilities management, logistics, healthcare, education, hospitality, renewable energy, IT and commercial roles.",
    },
    {
      question: "How are your workers paid?",
      answer: "Every worker is paid through our own PAYE payroll or, where genuinely self-employed in construction, engaged directly under the Construction Industry Scheme (CIS). We do not use umbrella companies.",
    },
    {
      question: "How do I request staff?",
      answer: "Use the Find Staff form or call 01324 613198 with the role, the location and how many people you need.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Recruitment agency",
    name: `Recruitment agency in ${countryName}`,
    provider: {
      "@type": "EmploymentAgency",
      name: "Recruitment Direct UK Ltd",
      url: "https://rd1.co.uk",
      telephone: "01324 613198",
    },
    areaServed: { "@type": "Country", name: countryName },
    url: `https://rd1.co.uk/locations/${normalizedSlug}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <Navbar />
        <FloatingElements />

        <div className="flex-grow pt-20 sm:pt-28 pb-12 sm:pb-20">
          <main className="max-w-5xl mx-auto px-4">
            <nav className="city-breadcrumbs" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/60 mb-6 sm:mb-8">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <span className="separator text-white/40">/</span>
                <li>
                  <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
                </li>
                <span className="separator text-white/40">/</span>
                <li className="current text-[#D4AF37] font-semibold capitalize">{countryName}</li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Recruitment Agency in {countryName}
            </h1>
            <div className="space-y-4 text-base sm:text-lg text-white/80 leading-relaxed mb-8 sm:mb-12">
              <p>
                Recruitment Direct UK Ltd is a {countryName === "Scotland" ? "Scottish " : ""}recruitment agency supplying temporary, contract and permanent staff across {countryName} since 2006. We cover every major city and local hub, from {hubList} to smaller towns across the region.
              </p>
              <p>
                We recruit for construction, engineering, civil engineering, facilities management, logistics, healthcare, education, hospitality, renewable energy, IT and commercial roles. All workers are paid through PAYE or engaged directly under CIS, and we hold REC Corporate Membership, ISO 9001 and Constructionline Gold accreditation.
              </p>
              <p>
                Need staff? <Link href="/find-staff" className="text-[#D4AF37] underline">Tell us the role, location and numbers</Link> or call <a href="tel:01324613198" className="text-[#D4AF37] underline">01324 613198</a>. Looking for work? <Link href="/job-search" className="text-[#D4AF37] underline">Search our live jobs</Link>.
              </p>
            </div>

            {hubs.length > 0 && (
              <div className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-4 sm:mb-6">Major Recruitment Hubs</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {hubs.map((hub) => (
                    <Link
                      key={hub.slug}
                      href={hub.path}
                      className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all block"
                    >
                      <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2">Recruitment Agency in {hub.city}</h3>
                      <p className="text-[10px] sm:text-xs text-white/60">View local roles and services</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {spokes.length > 0 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Local Areas & Towns Covered</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                  {spokes.map((spoke) => (
                    <Link
                      key={spoke.slug}
                      href={spoke.path}
                      className="p-2.5 sm:p-3 bg-white/5 border border-white/10 rounded-lg hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all text-xs sm:text-sm block text-center sm:text-left"
                    >
                      {spoke.city}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 sm:mt-16">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-5">
                {faqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="text-base sm:text-lg font-semibold text-white">{f.question}</h3>
                    <p className="text-white/70 leading-relaxed mt-1">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}
