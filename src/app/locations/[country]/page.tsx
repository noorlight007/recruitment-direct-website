import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import CountryPageClient from "@/components/CountryPageClient";
import { ChevronRight, ArrowLeft } from "lucide-react";
import locationsData from "@/data/locations.json";

function getCountryName(slug: string): string {
  switch (slug) {
    case "scotland":
      return "Scotland";
    case "england":
      return "England";
    case "wales":
      return "Wales";
    case "northern-ireland":
      return "Northern Ireland";
    case "republic-of-ireland":
      return "Republic of Ireland";
    default:
      return "";
  }
}

const validCountries = ["scotland", "england", "wales", "northern-ireland", "republic-of-ireland"];

export async function generateStaticParams() {
  return validCountries.map((country) => ({ country }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const countryName = getCountryName(country);
  
  if (!countryName) return {};

  return {
    title: `Recruitment Services Across ${countryName} | Recruitment Direct UK`,
    description: `Recruitment Direct UK provides temporary, contract, and permanent recruitment support throughout ${countryName}. Explore our active recruitment locations and find staff or jobs today.`,
    alternates: {
      canonical: `https://www.rd1.co.uk/locations/${country}/`,
    },
  };
}

const sectorsList = [
  { name: "Construction", url: "/sectors/construction" },
  { name: "Civil Engineering", url: "/sectors/engineering" },
  { name: "Engineering", url: "/sectors/engineering" },
  { name: "Renewable Energy", url: "/sectors/renewables" },
  { name: "Facilities Management", url: "/sectors/commercial" },
  { name: "Logistics", url: "/sectors/logistics" },
  { name: "Healthcare", url: "/sectors/healthcare" },
  { name: "Education", url: "/sectors/education" },
  { name: "IT & Technology", url: "/sectors/it-tech" },
  { name: "Commercial & Office", url: "/sectors/commercial" },
  { name: "Hospitality", url: "/sectors/commercial" },
];

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const countryName = getCountryName(country);

  if (!validCountries.includes(country)) {
    notFound();
  }

  // Filter locations and sort alphabetically by name
  const countryLocations = locationsData
    .filter((loc) => loc.country === country && loc.published)
    .sort((a, b) => a.name.localeCompare(b.name));

  const otherCountries = validCountries
    .filter((c) => c !== country)
    .map((c) => ({
      slug: c,
      name: getCountryName(c),
    }));

  const faqs = [
    {
      question: `Do you recruit temporary staff in ${countryName}?`,
      answer: `Yes, Recruitment Direct UK provides extensive temporary staffing services across ${countryName}. We supply fully vetted, framework-compliant temporary workers to meet peak demands, seasonal workloads, and urgent project timelines.`,
    },
    {
      question: `What industries do you recruit for in ${countryName}?`,
      answer: `We recruit across multiple sectors in ${countryName}, including Construction, Civil Engineering, Logistics, Engineering, Renewable Energy, Facilities Management, Healthcare, Education, IT & Technology, and Commercial Office Support.`,
    },
    {
      question: "How quickly can you supply workers?",
      answer: "We support rapid labor dispatch. Depending on the location and required skillsets, we can often supply vetted personnel within 24 hours. Our AI-powered screening technology helps source and clear compliant candidates quickly.",
    },
    {
      question: "Can I register online as a candidate?",
      answer: "Yes, candidates in any town or city can register directly on our website, upload their CV, and search for open vacancies in their region. Our team will review registrations and contact you for suitable placement opportunities.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.rd1.co.uk/locations/${country}/#webpage`,
        "url": `https://www.rd1.co.uk/locations/${country}/`,
        "name": `Recruitment Services Across ${countryName}`,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.rd1.co.uk/#website",
          "url": "https://www.rd1.co.uk/",
          "name": "Recruitment Direct UK"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.rd1.co.uk/locations/${country}/#breadcrumb`,
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": countryName,
            "item": `https://www.rd1.co.uk/locations/${country}/`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.rd1.co.uk/locations/${country}/#faq`,
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
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
          <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-16">
            
            {/* Header section with back navigation */}
            <div className="space-y-4">
              <nav className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/locations/" className="hover:text-white transition-colors duration-200">
                  Locations
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-[#d6b25e]">{countryName}</span>
              </nav>

              <Link
                href="/locations/"
                className="inline-flex items-center gap-2 text-sm text-[#d6b25e] hover:text-white transition-colors duration-200 font-semibold"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Country Selection
              </Link>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#0c1829] to-[#040913] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#d6b25e]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              <div className="relative z-10 space-y-6 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
                  Recruitment Services Across <span className="text-[#d6b25e]">{countryName}</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  Recruitment Direct UK is a premier staffing supplier across {countryName}, supplying temporary, contract, and permanent staff for major infrastructure, engineering projects, and local commercial needs. We operate nationwide networks with deep local compliance and screening capabilities.
                </p>
              </div>
            </div>

            {/* Dynamic Client Grid (Map + Search + Cards) */}
            <CountryPageClient
              countrySlug={country}
              countryName={countryName}
              locations={countryLocations}
            />

            {/* Sectors Section */}
            <section className="space-y-8">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <h2 className="text-3xl font-extrabold text-white">Sectors We Support</h2>
                <p className="text-gray-400">We source and vetting skilled candidates across multiple key industries.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sectorsList.map((sector, index) => (
                  <Link
                    key={`${sector.name}-${index}`}
                    href={sector.url}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-[#d6b25e]/30 hover:bg-white/10 transition-all duration-200 group"
                  >
                    <span className="text-white font-semibold group-hover:text-[#d6b25e] transition-colors">{sector.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Double CTA (Employer & Candidate) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Employer CTA */}
              <div className="bg-gradient-to-br from-[#0c1829] to-[#040913] border border-white/10 rounded-3xl p-8 md:p-12 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-3xl font-extrabold text-white">Looking for Staff?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Recruitment Direct UK provides temporary, contract, and permanent recruitment support throughout the country. We vet and screen candidates to ensure compliant placement.
                  </p>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link
                    href="/ai-hire-now"
                    className="bg-[#d6b25e] text-[#071424] hover:bg-white transition-colors duration-300 font-extrabold text-sm uppercase px-6 py-4 rounded-xl text-center flex-1"
                  >
                    Find Staff
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-[#d6b25e] text-[#d6b25e] hover:bg-[#d6b25e] hover:text-[#071424] transition-colors duration-300 font-extrabold text-sm uppercase px-6 py-4 rounded-xl text-center flex-1"
                  >
                    Contact RDUK
                  </Link>
                </div>
              </div>

              {/* Candidate CTA */}
              <div className="bg-gradient-to-br from-[#0c1829] to-[#040913] border border-white/10 rounded-3xl p-8 md:p-12 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-3xl font-extrabold text-white">Looking for Work?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Explore active job vacancies in your area or register your profile with us. Our specialist recruitment consultants will help connect you with your next opportunity.
                  </p>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link
                    href="/job-search"
                    className="bg-white/10 text-white border border-white/20 hover:bg-[#d6b25e] hover:text-[#071424] hover:border-transparent transition-colors duration-300 font-extrabold text-sm uppercase px-6 py-4 rounded-xl text-center flex-1"
                  >
                    Search Jobs
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-white/20 text-white hover:bg-white hover:text-[#071424] transition-colors duration-300 font-extrabold text-sm uppercase px-6 py-4 rounded-xl text-center flex-1"
                  >
                    Register with RDUK
                  </Link>
                </div>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <section className="space-y-8">
              <h2 className="text-3xl font-extrabold text-white text-center">Frequently Asked Questions</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-white/10 rounded-2xl p-6 bg-[#0c1829] cursor-pointer [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="list-none flex items-center justify-between text-white font-bold text-lg select-none">
                      {faq.question}
                      <span className="transition group-open:rotate-180">
                        <ChevronRight className="w-5 h-5 text-[#d6b25e] rotate-90 group-open:-rotate-90 transition-transform duration-200" />
                      </span>
                    </summary>
                    <p className="text-gray-400 text-sm leading-relaxed mt-4 pt-4 border-t border-white/5 cursor-default">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related Country Locations Links */}
            <section className="border-t border-white/10 pt-12 space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">Other Countries We Cover</h3>
              <div className="flex flex-wrap gap-4">
                {otherCountries.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/locations/${c.slug}/`}
                    className="bg-[#0c1829] border border-white/10 rounded-xl px-6 py-3 text-sm text-gray-400 hover:text-[#d6b25e] hover:border-[#d6b25e]/30 transition-all duration-200 font-semibold"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
