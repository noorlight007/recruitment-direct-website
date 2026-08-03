import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export const metadata: Metadata = {
  title: "Recruitment Agency Falkirk | Temporary & Permanent Staff | RDUK",
  description: "Recruitment agency in Falkirk supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare and commercial sectors.",
  alternates: {
    canonical: "https://rd1.co.uk/locations/falkirk",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Recruitment Agency Falkirk | Temporary & Permanent Staff | RDUK",
    description: "Recruitment agency in Falkirk supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare and commercial sectors.",
    url: "https://rd1.co.uk/locations/falkirk",
    siteName: "Recruitment Direct UK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment Agency Falkirk | Temporary & Permanent Staff | RDUK",
    description: "Recruitment agency in Falkirk supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare and commercial sectors.",
  },
};

export default function FalkirkLocationsPage() {
  const falkirkSchema = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "name": "Recruitment Direct UK Ltd",
    "telephone": "01324 613198",
    "email": "sales@rd1.co.uk",
    "url": "https://rd1.co.uk/locations/falkirk",
    "logo": "https://rd1.co.uk/logo.png",
    "image": "https://rd1.co.uk/logo.png",
    "sameAs": [
      "https://www.facebook.com/recruitmentdirectukltd",
      "https://www.linkedin.com/company/recruitment-direct-uk-ltd"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Herkimer House, Mill Road Industrial Estate",
      "addressLocality": "Linlithgow",
      "postalCode": "EH49 7SF",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Falkirk and Central Scotland"
    },
    "serviceType": [
      "Temporary recruitment",
      "Contract recruitment",
      "Permanent recruitment"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rd1.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://rd1.co.uk/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Falkirk",
        "item": "https://rd1.co.uk/locations/falkirk"
      }
    ]
  };

  const sectors = [
    { name: "Construction", desc: "Supplying site managers, quantity surveyors, and skilled tradespeople for civil engineering and building developments." },
    { name: "Engineering", desc: "Sourcing experienced design, mechanical, structural, and electrical engineers for industrial frameworks." },
    { name: "Renewable Energy", desc: "Providing project teams, technical specialists, and operations personnel for green energy initiatives." },
    { name: "Facilities Management", desc: "Providing building maintenance, cleaning, security, and operations personnel for commercial estates." },
    { name: "Logistics", desc: "Connecting logistics hubs with HGV drivers, warehouse operators, and supply chain coordinators." },
    { name: "Healthcare", desc: "Supplying nurses, support workers, and residential care staff to meet critical demand safely." },
    { name: "Education", desc: "Sourcing qualified teachers, supply staff, and educational support assistants for schools." },
    { name: "IT & Tech", desc: "Supplying developers, support specialists, network engineers, and technology leaders." },
    { name: "Commercial & Office", desc: "Providing administration, customer service, accounting, and office support professionals." },
    { name: "Hospitality", desc: "Staffing hotels, corporate events, catering operations, and kitchen teams with experienced hosts." }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(falkirkSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <Navbar />
        <FloatingElements />

        <div className="flex-grow pt-28 pb-20">
          <main className="city-page-main">
            {/* Breadcrumbs */}
            <nav className="city-breadcrumbs" aria-label="Breadcrumb">
              <div className="container">
                <ol className="flex items-center gap-2 text-sm text-white/60 mb-8">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  </li>
                  <span className="separator text-white/40">/</span>
                  <li>
                    <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
                  </li>
                  <span className="separator text-white/40">/</span>
                  <li className="current text-[#D4AF37] font-semibold">Falkirk</li>
                </ol>
              </div>
            </nav>

            {/* Hero Section */}
            <section className="city-hero max-w-5xl mx-auto px-4 mb-12">
              <div className="container">
                <p className="eyebrow text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-3">
                  Temporary | Contract | Permanent Staffing Solutions
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Recruitment Agency Falkirk
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  Welcome to Recruitment Direct UK Ltd, a leading recruitment agency in Falkirk supplying high-caliber temporary, contract, and permanent staff. From our regional hubs, we support businesses and candidates across Falkirk, Grangemouth, Larbert, Stenhousemuir, Bonnybridge, Denny, Polmont, Bo'ness, Linlithgow, and surrounding Central Scotland areas.
                </p>
                <p className="text-base text-white/70 leading-relaxed mb-8">
                  Leveraging our proprietary AI recruitment workflow with human verification, we quickly source, screen, and place reliable personnel. Our Falkirk operations connect local employers with site-ready candidates, reducing time-to-hire and ensuring 100% compliance.
                </p>
                <div className="cta-row flex flex-wrap gap-4">
                  <Link className="button button-primary bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-navy font-bold py-3 px-6 rounded-xl transition-all" href="/ai-hire-now">
                    Request Staff
                  </Link>
                  <Link className="button button-secondary bg-white/5 hover:bg-white/10 text-white font-bold py-3 px-6 rounded-xl border border-white/10 transition-all" href="/contact">
                    Contact Our Falkirk Team
                  </Link>
                </div>
              </div>
            </section>

            {/* Content Section */}
            <section className="city-employer-support max-w-5xl mx-auto px-4 mb-16">
              <div className="container bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Temporary, Contract and Permanent Recruitment in Falkirk
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  We supply fully vetted personnel across Central Scotland, supporting Grangemouth's industrial infrastructure, Linlithgow business parks, and local developments in Denny, Larbert, and Bonnybridge. Our local consultants understand the regional market dynamics and deliver compliant staffing options.
                </p>
                <ul className="grid md:grid-cols-2 gap-3 text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37]">✓</span> Urgent temporary staffing support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37]">✓</span> Skilled contract engineers & trades
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37]">✓</span> Rigorous pre-employment compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37]">✓</span> High-volume workplace solutions
                  </li>
                </ul>
              </div>
            </section>

            {/* Sectors Grid */}
            <section className="city-sectors max-w-5xl mx-auto px-4 mb-16">
              <div className="container">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  Recruitment Sectors We Support in Falkirk
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {sectors.map((sector) => (
                    <div key={sector.name} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#D4AF37]/50 transition-all">
                      <h4 className="text-lg font-bold text-[#D4AF37] mb-2">{sector.name}</h4>
                      <p className="text-sm text-white/70 leading-relaxed">{sector.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact details */}
            <section className="max-w-5xl mx-auto px-4 text-center">
              <div className="p-8 bg-gradient-to-r from-navy/50 to-blue-950/30 border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-2">Speak to Our Local Specialists</h3>
                <p className="text-white/60 text-sm mb-4">Located at Herkimer House, Linlithgow, serving Falkirk & Central Scotland.</p>
                <div className="flex flex-wrap justify-center gap-8 text-white font-semibold">
                  <div>
                    <span className="block text-xs text-[#D4AF37] uppercase">Call Us</span>
                    <a href="tel:01324613198" className="text-lg hover:underline">01324 613198</a>
                  </div>
                  <div>
                    <span className="block text-xs text-[#D4AF37] uppercase">Email Us</span>
                    <a href="mailto:sales@rd1.co.uk" className="text-lg hover:underline">sales@rd1.co.uk</a>
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
