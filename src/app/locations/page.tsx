import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/data/cities";
import LocationsClient from "./LocationsClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export const metadata: Metadata = {
  title: "Our Locations | Recruitment Direct UK",
  description: "Find our office locations and recruitment services across England, Scotland, Wales, Ireland and Northern Ireland.",
};

const VALID_COUNTRIES = [
  { name: "Scotland", slug: "scotland" },
  { name: "England", slug: "england" },
  { name: "Wales", slug: "wales" },
  { name: "Northern Ireland", slug: "northern-ireland" },
  { name: "Republic of Ireland", slug: "republic-of-ireland" },
];

export default function LocationsPage() {
  const hubs = cities.filter((c) => c.isHub);

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
                <li className="current text-[#D4AF37] font-semibold">Locations</li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Our Recruitment Locations
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 sm:mb-12">
              Recruitment Direct UK provides temporary, contract, and permanent staffing services nationwide. Explore our coverage map and local recruitment hubs.
            </p>

            {/* Interactive Map (Client-side) */}
            <div className="mb-10 sm:mb-16">
              <LocationsClient />
            </div>

            {/* Text Directory (Server-side rendered, indexable by crawlers) */}
            <div className="border-t border-white/10 pt-8 sm:pt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Locations Directory</h2>

              {/* Countries Grid */}
              <div className="mb-8 sm:mb-12">
                <h3 className="text-lg sm:text-xl font-bold text-[#D4AF37] mb-4">Countries Covered</h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {VALID_COUNTRIES.map((country) => (
                    <Link
                      key={country.slug}
                      href={`/locations/${country.slug}`}
                      className="p-4 sm:p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all block"
                    >
                      <span className="text-sm sm:text-base font-bold text-white block">{country.name}</span>
                      <span className="text-[10px] sm:text-xs text-white/60 mt-1 block">View local hubs and spokes</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Hubs Grid */}
              {hubs.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-lg sm:text-xl font-bold text-[#D4AF37] mb-4">Major Local Hubs</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                    {hubs.map((hub) => (
                      <Link
                        key={hub.slug}
                        href={hub.path}
                        className="p-2.5 sm:p-3 bg-white/5 border border-white/10 rounded-lg hover:text-[#D4AF37] hover:border-[#D4AF37]/35 transition-all text-xs sm:text-sm block text-center sm:text-left"
                      >
                        {hub.city} Hub
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Comprehensive Directory of All 300+ Towns */}
              <div className="border-t border-white/10 mt-12 pt-8 sm:pt-12">
                <h3 className="text-lg sm:text-xl font-bold text-[#D4AF37] mb-4">Browse All 300+ Locations</h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                  We supply temporary, contract, and permanent staff across all regions. Explore our complete directory of local hubs and surrounding towns below:
                </p>

                <div className="space-y-8">
                  {VALID_COUNTRIES.map((country) => {
                    const countryCities = cities.filter((c) => c.countrySlug === country.slug);
                    const countryHubs = countryCities.filter((c) => c.isHub);

                    if (countryCities.length === 0) return null;

                    return (
                      <div key={country.slug} className="bg-white/5 rounded-2xl p-5 sm:p-7 border border-white/10">
                        <h4 className="text-base sm:text-lg font-bold text-white mb-5 pb-2.5 border-b border-white/10 flex items-center justify-between">
                          <span>{country.name}</span>
                          <Link
                            href={`/locations/${country.slug}`}
                            className="text-xs font-semibold text-[#D4AF37] hover:underline"
                          >
                            View {country.name} Overview →
                          </Link>
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                          {countryHubs.map((hub) => {
                            const spokes = countryCities.filter((c) => !c.isHub && c.hubSlug === hub.slug);
                            return (
                              <div key={hub.slug} className="space-y-2">
                                <h5 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                                  <Link href={hub.path} className="hover:underline hover:text-[#D4AF37] transition-all">
                                    {hub.city} Hub
                                  </Link>
                                </h5>

                                <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-white/60 pl-3.5">
                                  <Link
                                    href={hub.path}
                                    className="hover:text-white transition-colors underline decoration-[#D4AF37]/45"
                                  >
                                    {hub.city} (Main)
                                  </Link>
                                  {spokes.map((spoke) => (
                                    <span key={spoke.slug} className="flex items-center gap-2">
                                      <span className="text-white/20">•</span>
                                      <Link
                                        href={spoke.path}
                                        className="hover:text-white transition-colors"
                                      >
                                        {spoke.city}
                                      </Link>
                                    </span>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}
