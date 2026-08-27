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

  return {
    title: `Recruitment Agency Locations in ${countryName} | RDUK`,
    description: `Find temporary, contract and permanent recruitment services across ${countryName}. Explore our local recruitment hubs.`,
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
      title: `Recruitment Agency Locations in ${countryName} | RDUK`,
      description: `Find temporary, contract and permanent recruitment services across ${countryName}. Explore our local recruitment hubs.`,
      url: canonicalUrl,
      siteName: "Recruitment Direct UK",
      type: "website",
      images: [
        {
          url: "https://rd1.co.uk/logo.png",
          width: 1200,
          height: 630,
          alt: `Recruitment Direct UK - ${countryName}`,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `Recruitment Agency Locations in ${countryName} | RDUK`,
      description: `Find temporary, contract and permanent recruitment services across ${countryName}. Explore our local recruitment hubs.`,
      images: ["https://rd1.co.uk/logo.png"],
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
      notFound();
    }
  }

  const countryName = getCountryName(normalizedSlug);
  if (!countryName) {
    notFound();
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
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
              Recruitment Agency Locations in {countryName}
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 sm:mb-12">
              Explore our recruitment services and offices across {countryName}. We supply temporary, contract, and permanent staff for businesses and candidates in every major city and local hub.
            </p>

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
                      <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2">{hub.city} Hub</h3>
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
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}
