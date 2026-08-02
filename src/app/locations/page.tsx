import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { ChevronRight, MapPin } from "lucide-react";

export const metadata = {
  title: "Recruitment Locations Across the UK and Ireland | Recruitment Direct UK",
  description: "Recruitment Direct UK provides temporary, contract and permanent staffing solutions across Scotland, England, Wales, Northern Ireland, and the Republic of Ireland.",
  alternates: {
    canonical: "https://www.rd1.co.uk/locations/",
  },
};

const countries = [
  {
    name: "Scotland",
    slug: "scotland",
    description: "Comprehensive temporary, contract, and permanent recruitment coverage throughout Scotland, including Edinburgh, Glasgow, Falkirk, Aberdeen, and the Highlands.",
    bgGradient: "from-[#1e3c72] to-[#2a5298]",
  },
  {
    name: "England",
    slug: "england",
    description: "Strategic staffing solutions across England, connecting businesses with skilled professionals in London, Manchester, Birmingham, Leeds, and other commercial hubs.",
    bgGradient: "from-[#4b6cb7] to-[#182848]",
  },
  {
    name: "Wales",
    slug: "wales",
    description: "Dedicated recruitment services across Wales, supporting key industrial and office sectors in Cardiff, Swansea, Wrexham, Newport, and surrounding regions.",
    bgGradient: "from-[#2c3e50] to-[#3498db]",
  },
  {
    name: "Northern Ireland",
    slug: "northern-ireland",
    description: "Leading staffing and personnel supply throughout Northern Ireland, serving employers and jobseekers in Belfast, Lisburn, Bangor, and Londonderry.",
    bgGradient: "from-[#0f2027] to-[#203a43]",
  },
  {
    name: "Republic of Ireland",
    slug: "republic-of-ireland",
    description: "Vetted and compliant recruitment services in the Republic of Ireland, focusing on Dublin, Cork, Limerick, Galway, and regional employment hubs.",
    bgGradient: "from-[#11998e] to-[#38ef7d]",
  },
];

export default function LocationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.rd1.co.uk/locations/#webpage",
        "url": "https://www.rd1.co.uk/locations/",
        "name": "Recruitment Locations Across the UK and Ireland",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.rd1.co.uk/#website",
          "url": "https://www.rd1.co.uk/",
          "name": "Recruitment Direct UK"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.rd1.co.uk/locations/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.rd1.co.uk/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://www.rd1.co.uk/locations/"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.rd1.co.uk/#organization",
        "name": "Recruitment Direct UK",
        "url": "https://www.rd1.co.uk/",
        "logo": "https://www.rd1.co.uk/logo.png",
        "sameAs": [
          "https://linkedin.com",
          "https://facebook.com"
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <Navbar />
        <FloatingElements />

        <main className="flex-grow pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-medium">
              <Link href="/" className="hover:text-white transition-colors duration-200">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#d6b25e]">Locations</span>
            </nav>

            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
                Recruitment Services Across the <span className="text-[#d6b25e]">UK and Ireland</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Recruitment Direct UK supplies qualified temporary, contract, and permanent staff for businesses throughout England, Scotland, Wales, Northern Ireland, and the Republic of Ireland. Select a country to explore local coverage.
              </p>
            </div>

            {/* Country Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countries.map((country) => (
                <div
                  key={country.slug}
                  className="bg-gradient-to-br from-[#0c1829] to-[#040913] border border-white/10 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-[#d6b25e]/30 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="p-8 space-y-6">
                    {/* Visual Graphic Representation */}
                    <div className={`h-36 rounded-2xl bg-gradient-to-br ${country.bgGradient} flex items-center justify-center relative overflow-hidden shadow-inner`}>
                      <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                      <div className="relative z-10 flex flex-col items-center space-y-2">
                        <MapPin className="w-10 h-10 text-white drop-shadow-md" />
                        <span className="text-white font-bold tracking-wider uppercase text-xs opacity-80">RDUK Regional Map</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white group-hover:text-[#d6b25e] transition-colors duration-200">
                      {country.name}
                    </h2>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {country.description}
                    </p>
                  </div>

                  <div className="p-8 pt-0">
                    <Link
                      href={`/locations/${country.slug}/`}
                      className="inline-flex items-center gap-2 text-sm text-[#d6b25e] hover:text-white font-semibold transition-colors duration-200 group/link"
                    >
                      View Locations 
                      <ChevronRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Extra Section: Local Sourcing Power */}
            <div className="mt-20 bg-gradient-to-r from-[#071324] to-[#040913] border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Looking to partner with Recruitment Direct?</h2>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                We operate a robust national framework supporting thousands of vetted workers. Our AI screening technology ensures we find compliant candidates near your projects in record time.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Link
                  href="/ai-hire-now"
                  className="bg-[#d6b25e] text-[#071424] hover:bg-white transition-colors duration-300 font-extrabold text-sm uppercase px-8 py-4 rounded-xl"
                >
                  Find Staff
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#d6b25e] text-[#d6b25e] hover:bg-[#d6b25e] hover:text-[#071424] transition-colors duration-300 font-extrabold text-sm uppercase px-8 py-4 rounded-xl"
                >
                  Contact RDUK
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
