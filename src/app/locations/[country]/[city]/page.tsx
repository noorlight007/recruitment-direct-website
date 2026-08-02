import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { ChevronRight, ArrowLeft, Phone, Mail, MapPin, CheckCircle, ShieldCheck, Clock, Users, Building, HelpCircle, Briefcase } from "lucide-react";
import locationsData from "@/data/locations.json";

interface FAQ {
  question: string;
  answer: string;
}

interface LocationRecord {
  id: string;
  name: string;
  slug: string;
  country: string;
  county: string;
  latitude: number;
  longitude: number;
  nearbyTowns: string[];
  population?: string;
  majorEmployers?: string[];
  industrialEstates?: string[];
  businessParks?: string[];
  majorRoads?: string[];
  railwayStations?: string[];
  airports?: string[];
  sectors: string[];
  heroImage?: string;
  published: boolean;
  
  customTitle?: string;
  customMetaDescription?: string;
  customH1?: string;
  customIntro?: string;
  customEmployerContent?: string;
  customCandidateContent?: string;
  customFaqs?: FAQ[];
}

function getCountryName(slug: string): string {
  switch (slug) {
    case "scotland": return "Scotland";
    case "england": return "England";
    case "wales": return "Wales";
    case "northern-ireland": return "Northern Ireland";
    case "republic-of-ireland": return "Republic of Ireland";
    default: return "";
  }
}

export async function generateStaticParams() {
  const typedLocations = locationsData as LocationRecord[];
  return typedLocations
    .filter((loc) => loc.published)
    .map((loc) => ({
      country: loc.country,
      city: loc.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; city: string }> }) {
  const { country, city } = await params;
  const typedLocations = locationsData as LocationRecord[];
  const loc = typedLocations.find((l) => l.country === country && l.slug === city && l.published);
  
  if (!loc) return {};

  const title = loc.customTitle || `Recruitment Agency in ${loc.name} | Temporary & Permanent Staff | RDUK`;
  
  const sectorsStr = loc.sectors.slice(0, 3).join(", ").toLowerCase();
  const description = loc.customMetaDescription || `Recruitment agency serving ${loc.name} and surrounding areas. Temporary, contract and permanent recruitment across ${sectorsStr} and other sectors.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.rd1.co.uk/locations/${country}/${city}/`,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ country: string; city: string }> }) {
  const { country, city } = await params;
  const typedLocations = locationsData as LocationRecord[];
  const loc = typedLocations.find((l) => l.country === country && l.slug === city && l.published);

  if (!loc) {
    notFound();
  }

  const countryName = getCountryName(country);

  // Find 6-8 geographically closest related locations in the same country
  const relatedLocations = typedLocations
    .filter((l) => l.country === country && l.slug !== city && l.published)
    .map((l) => {
      const distance = Math.sqrt(
        Math.pow(loc.latitude - l.latitude, 2) + Math.pow(loc.longitude - l.longitude, 2)
      );
      return { ...l, distance };
    })
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 8);

  // Generate dynamic, unique, local-SEO rich paragraphs (700-1200 words total content)
  const generatedIntro = loc.customIntro || `Recruitment Direct UK provides professional, compliant temporary, contract, and permanent recruitment services across ${loc.name} and the surrounding areas. As an established agency serving the ${loc.county} region, we specialize in delivering vetted staffing solutions designed for modern industrial, technical, and commercial demands. Our services in ${loc.name} are built on a solid network of local talent, rapid AI-driven screening, and an unwavering commitment to compliance. Whether you need immediate support for a short-term project or a strategic permanent hire, we connect employers with the right professionals quickly and efficiently. The town is highly accessible, linked by major roads such as ${loc.majorRoads?.join(" and ") || "key regional routes"}, and served by local transport infrastructure including ${loc.railwayStations?.join(" and ") || "nearby rail links"}, enabling us to draw candidates from a wide commuter pool.`;

  const generatedEmployerContent = loc.customEmployerContent || `For employers looking to hire staff in ${loc.name}, Recruitment Direct UK offers a streamlined path to qualified talent. We support local businesses operating out of key hubs such as ${loc.businessParks?.join(", ") || "local commercial parks"} and ${loc.industrialEstates?.join(", ") || "surrounding industrial zones"}. Our recruitment consultants leverage a nationwide database of over 100,000 active candidates alongside advanced, AI-powered applicant screening calls to identify high-potential individuals within minutes. Every candidate undergoes strict Right to Work (RTW) verifications, qualification checks, and reference tracking, ensuring you receive only fully compliant workers. From high-volume temporary labor supply to executive search and managed projects, we provide flexible workforce solutions tailored to your operational targets.`;

  const generatedCandidateContent = loc.customCandidateContent || `For candidates looking for jobs in ${loc.name}, our team provides dedicated support to help you take the next step in your career. We regularly recruit for rewarding opportunities in ${loc.name} across ${loc.sectors.slice(0, 4).join(", ")}, and other popular sectors. By registering with Recruitment Direct UK, you gain access to temporary, contract, and permanent roles with top employers in the ${loc.county} area, including leading companies in the ${loc.majorEmployers?.join(", ") || "regional industries"}. We believe in simplifying the job search process—offering online registration, rapid applicant profiling, and direct communication channels so you can find the right match for your skills and career aspirations.`;

  const defaultFaqs = [
    {
      question: `Do you recruit temporary staff in ${loc.name}?`,
      answer: `Yes, Recruitment Direct UK supplies temporary staff across ${loc.name} and the surrounding areas. All of our temporary workers are fully vetted, qualified, and compliant with current UK frameworks, ensuring they are ready to start work immediately.`,
    },
    {
      question: `What industries do you recruit for in ${loc.name}?`,
      answer: `We recruit for multiple key sectors in ${loc.name}, including ${loc.sectors.slice(0, 5).join(", ")}, and other commercial and industrial fields.`,
    },
    {
      question: "How quickly can you supply workers?",
      answer: "We support rapid labor dispatch. Depending on the specific role and availability, we can often deploy cleared personnel within 24 hours. Our AI-assisted candidate screening ensures rapid sourcing and compliance vetting.",
    },
    {
      question: "Can I register online?",
      answer: "Yes, candidates can register online by uploading their CV. Once registered, a local recruitment consultant will review your experience and match you with active jobs in your area.",
    },
  ];

  const faqs = loc.customFaqs && loc.customFaqs.length > 0 ? loc.customFaqs : defaultFaqs;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.rd1.co.uk/locations/${country}/${city}/#webpage`,
        "url": `https://www.rd1.co.uk/locations/${country}/${city}/`,
        "name": `Recruitment Agency in ${loc.name}`,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.rd1.co.uk/#website",
          "url": "https://www.rd1.co.uk/",
          "name": "Recruitment Direct UK"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.rd1.co.uk/locations/${country}/${city}/#breadcrumb`,
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
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": loc.name,
            "item": `https://www.rd1.co.uk/locations/${country}/${city}/`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.rd1.co.uk/locations/${country}/${city}/#faq`,
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "Organization",
        "@id": "https://www.rd1.co.uk/#organization",
        "name": "Recruitment Direct UK",
        "url": "https://www.rd1.co.uk/",
        "logo": "https://www.rd1.co.uk/logo.png"
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
          <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
            
            {/* Breadcrumb Navigation */}
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
                <Link href={`/locations/${country}/`} className="hover:text-white transition-colors duration-200">
                  {countryName}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-[#d6b25e]">{loc.name}</span>
              </nav>

              <Link
                href={`/locations/${country}/`}
                className="inline-flex items-center gap-2 text-sm text-[#d6b25e] hover:text-white transition-colors duration-200 font-semibold"
              >
                <ArrowLeft className="w-4 h-4" /> Back to {countryName} Locations
              </Link>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#0c1829] to-[#040913] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#d6b25e]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#d6b25e]" />
                  <span className="text-white/40 text-sm font-semibold uppercase tracking-wider">{loc.county}</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
                  {loc.customH1 || `Recruitment Agency in ${loc.name}`}
                </h1>
                
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
                  {generatedIntro}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/ai-hire-now"
                    className="bg-[#d6b25e] text-[#071424] hover:bg-white transition-colors duration-300 font-extrabold text-sm uppercase px-8 py-4 rounded-xl text-center"
                  >
                    Find Staff
                  </Link>
                  <Link
                    href="/job-search"
                    className="border border-[#d6b25e] text-[#d6b25e] hover:bg-[#d6b25e] hover:text-[#071424] transition-colors duration-300 font-extrabold text-sm uppercase px-8 py-4 rounded-xl text-center"
                  >
                    Search Jobs
                  </Link>
                </div>
              </div>
            </div>

            {/* Two Column Layout (Main content vs Sidebar CTA) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
              
              {/* Main Content Areas */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* 1. Local Recruitment Services */}
                <section className="space-y-4">
                  <h2 className="text-3xl font-extrabold text-white">
                    Recruitment Services in {loc.name}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Recruitment Direct UK provides temporary, contract, and permanent recruitment services across {loc.name} and the surrounding areas. We support employers with rapid staffing solutions and help candidates secure their next opportunity across multiple industries. Our key staffing methods include:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {[
                      { title: "Temporary Recruitment", desc: "Short-term labor supply to cover project peaks, holidays and sickness." },
                      { title: "Contract Recruitment", desc: "Specialist project-based professionals hired for set durations." },
                      { title: "Permanent Recruitment", desc: "Long-term placements vetted thoroughly to align with your culture." },
                      { title: "Executive Search", desc: "Targeted headhunting for senior leadership and technical director roles." },
                      { title: "High-volume Recruitment", desc: "Scale labor supply for major civil engineering and construction sites." },
                      { title: "Managed Recruitment Projects", desc: "End-to-end recruitment coordination handling all vetting and onboarding." }
                    ].map((svc) => (
                      <div key={svc.title} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                        <h4 className="font-bold text-white text-base">{svc.title}</h4>
                        <p className="text-xs text-gray-400">{svc.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 2. Sectors */}
                <section className="space-y-4">
                  <h2 className="text-3xl font-extrabold text-white">
                    Sectors We Recruit for in {loc.name}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We possess deep domain expertise in several high-demand sectors. All candidates supplied are vetted for compliance, safety certificates, and professional history specific to their field:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {loc.sectors.map((sector) => (
                      <div key={sector} className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#d6b25e] flex-shrink-0" />
                        <span className="text-white text-sm font-semibold">{sector}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 3. Employers */}
                <section className="space-y-4">
                  <h2 className="text-3xl font-extrabold text-white">
                    Recruitment Support for Employers in {loc.name}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {generatedEmployerContent}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/ai-hire-now"
                      className="bg-[#d6b25e] text-[#071424] hover:bg-white transition-colors duration-300 font-extrabold text-sm uppercase px-8 py-4 rounded-xl inline-block"
                    >
                      Request Staff
                    </Link>
                  </div>
                </section>

                {/* 4. Candidates */}
                <section className="space-y-4">
                  <h2 className="text-3xl font-extrabold text-white">
                    Jobs in {loc.name}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {generatedCandidateContent}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      href="/job-search"
                      className="border border-[#d6b25e] text-[#d6b25e] hover:bg-[#d6b25e] hover:text-[#071424] transition-colors duration-300 font-extrabold text-sm uppercase px-8 py-4 rounded-xl"
                    >
                      Search Jobs
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-white/10 text-white hover:bg-white hover:text-[#071424] transition-colors duration-300 font-extrabold text-sm uppercase px-8 py-4 rounded-xl"
                    >
                      Upload CV
                    </Link>
                  </div>
                </section>

                {/* 5. Nearby Areas */}
                <section className="space-y-4">
                  <h2 className="text-3xl font-extrabold text-white">
                    Areas We Cover Near {loc.name}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our regional recruitment reach extends beyond the immediate boundary of the town. We support employers and candidates throughout {loc.name} and nearby areas including {loc.nearbyTowns.join(", ")}, and other surrounding communities in {loc.county}.
                  </p>
                </section>

              </div>

              {/* Sidebar CTA Panel */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-b from-[#0c1829] to-[#040913] border border-white/10 rounded-3xl p-6 shadow-xl sticky top-28 space-y-6">
                  
                  <div className="space-y-2 text-center">
                    <Building className="w-12 h-12 text-[#d6b25e] mx-auto" />
                    <h3 className="text-xl font-bold text-white">Recruit Vetted Staff</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      We provide recruitment services across {loc.name} and the surrounding areas. Request staff 24/7 online.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <Clock className="w-4 h-4 text-[#d6b25e] flex-shrink-0" />
                      <span>24/7 dispatch available</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <ShieldCheck className="w-4 h-4 text-[#d6b25e] flex-shrink-0" />
                      <span>Strict Right to Work vetting</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <Users className="w-4 h-4 text-[#d6b25e] flex-shrink-0" />
                      <span>Sectors: {loc.sectors.slice(0, 2).join(" & ")}</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6 space-y-3">
                    <Link
                      href="/ai-hire-now"
                      className="bg-[#d6b25e] text-[#071424] hover:bg-white transition-colors duration-300 font-extrabold text-sm uppercase py-4 rounded-xl text-center block w-full shadow-lg"
                    >
                      AI Hire Now
                    </Link>
                    <Link
                      href="/contact"
                      className="border border-[#d6b25e] text-[#d6b25e] hover:bg-[#d6b25e] hover:text-[#071424] transition-colors duration-300 font-extrabold text-sm uppercase py-4 rounded-xl text-center block w-full"
                    >
                      Contact RDUK
                    </Link>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-center">
                    <span className="text-[10px] text-white/40 block mb-2 font-bold uppercase tracking-wider">National Sales Line</span>
                    <a href="tel:01324613198" className="text-white hover:text-[#d6b25e] font-bold text-lg transition-colors">
                      01324 613198
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Why choose RDUK */}
            <section className="bg-gradient-to-r from-[#071324] to-[#040913] border border-white/10 rounded-3xl p-8 md:p-12 space-y-8">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <h2 className="text-3xl font-extrabold text-white">Why Choose Recruitment Direct UK?</h2>
                <p className="text-gray-400">Partnering with RDUK gives you access to a modern, technology-led staffing system.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Established in 2006", desc: "Two decades of reliable staffing services across industrial sectors." },
                  { title: "Nationwide Coverage", desc: "Active candidate databases spanning Scotland, England, Wales, and Ireland." },
                  { title: "Experienced Consultants", desc: "Dedicated sector consultants who understand your specialized requirements." },
                  { title: "Technology-Led Vetting", desc: "AI-powered candidate screening and automated compliance workflows." }
                ].map((item) => (
                  <div key={item.title} className="space-y-2 text-center p-4">
                    <div className="w-10 h-10 rounded-full bg-[#d6b25e]/10 flex items-center justify-center mx-auto text-[#d6b25e]">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

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

            {/* Related Locations */}
            <section className="border-t border-white/10 pt-12 space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">Nearby Locations We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {relatedLocations.map((rl) => (
                  <Link
                    key={rl.slug}
                    href={`/locations/${country}/${rl.slug}/`}
                    className="bg-[#0c1829] border border-white/10 rounded-xl px-5 py-4 text-sm text-gray-400 hover:text-[#d6b25e] hover:border-[#d6b25e]/30 transition-all duration-200 font-semibold"
                  >
                    {rl.name}
                  </Link>
                ))}
              </div>
            </section>

            {/* Final Contact CTA */}
            <div className="bg-gradient-to-r from-[#0c1829] to-[#040913] border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl font-extrabold text-white">Looking for Staff or Your Next Job?</h2>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Get in touch with Recruitment Direct UK today. Our team is standing by to deliver rapid, compliant support for your business or job search.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Link
                  href="/ai-hire-now"
                  className="bg-[#d6b25e] text-[#071424] hover:bg-white transition-colors duration-300 font-extrabold text-sm uppercase px-8 py-4 rounded-xl"
                >
                  Find Staff
                </Link>
                <Link
                  href="/job-search"
                  className="border border-[#d6b25e] text-[#d6b25e] hover:bg-[#d6b25e] hover:text-[#071424] transition-colors duration-300 font-extrabold text-sm uppercase px-8 py-4 rounded-xl"
                >
                  Search Jobs
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 text-white hover:bg-white hover:text-[#071424] transition-colors duration-300 font-extrabold text-sm uppercase px-8 py-4 rounded-xl"
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
