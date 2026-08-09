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
              <li className="current text-[#D4AF37] font-semibold">Locations</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-extrabold text-white mb-6 leading-tight">
            Our Recruitment Locations
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-12">
            Recruitment Direct UK provides temporary, contract, and permanent staffing services nationwide. Explore our coverage map and local recruitment hubs.
          </p>

          {/* Interactive Map (Client-side) */}
          <div className="mb-16">
            <LocationsClient />
          </div>

          {/* Text Directory (Server-side rendered, indexable by crawlers) */}
          <div className="border-t border-white/10 pt-12">
            <h2 className="text-2xl font-bold text-white mb-8">Locations Directory</h2>

            {/* Countries Grid */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-4">Countries Covered</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {VALID_COUNTRIES.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/locations/${country.slug}`}
                    className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all block"
                  >
                    <span className="text-base font-bold text-white block">{country.name}</span>
                    <span className="text-xs text-white/60 mt-1 block">View local hubs and spokes</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Hubs Grid */}
            {hubs.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-4">Major Local Hubs</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {hubs.map((hub) => (
                    <Link
                      key={hub.slug}
                      href={hub.path}
                      className="p-3 bg-white/5 border border-white/10 rounded-lg hover:text-[#D4AF37] hover:border-[#D4AF37]/35 transition-all text-sm block"
                    >
                      {hub.city} Hub
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
