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
  // Pre-render country slugs
  const countryParams = VALID_COUNTRIES.map((slug) => ({ country: slug }));
  
  // Pre-render flat city slugs for instant redirection
  const cityParams = cities.map((city) => ({ country: city.slug }));
  
  return [...countryParams, ...cityParams];
}

export async function generateMetadata({
  params,
}: CountryPageProps): Promise<Metadata> {
  const { country } = await params;
  const normalizedCountry = country.toLowerCase();

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

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />
      <FloatingElements />

      <div className="flex-grow pt-28 pb-20">
        <main className="max-w-5xl mx-auto px-4">
          <nav className="city-breadcrumbs" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/60 mb-8">
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

          <h1 className="text-4xl font-extrabold text-white mb-6 leading-tight">
            Recruitment Agency Locations in {countryName}
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-12">
            Explore our recruitment services and offices across {countryName}. We supply temporary, contract, and permanent staff for businesses and candidates in every major city and local hub.
          </p>

          {hubs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Major Recruitment Hubs</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hubs.map((hub) => (
                  <Link
                    key={hub.slug}
                    href={hub.path}
                    className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all block"
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{hub.city} Hub</h3>
                    <p className="text-xs text-white/60">View local roles and services</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {spokes.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Local Areas & Towns Covered</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {spokes.map((spoke) => (
                  <Link
                    key={spoke.slug}
                    href={spoke.path}
                    className="p-3 bg-white/5 border border-white/10 rounded-lg hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all text-sm block"
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
  );
}
