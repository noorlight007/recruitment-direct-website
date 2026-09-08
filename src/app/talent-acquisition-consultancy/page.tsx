import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export const metadata: Metadata = {
  title: "Talent Acquisition Consultancy | Hourly, Half Day & Full Day Engagements | Recruitment Direct UK",
  description:
    "Flexible, UK wide talent acquisition consultancy from Recruitment Direct UK. Hourly, half day and full day engagements covering sourcing, screening and benchmarking. Not full HR outsourcing.",
  alternates: {
    canonical: "https://www.rd1.co.uk/talent-acquisition-consultancy",
  },
  openGraph: {
    type: "website",
    title: "Talent Acquisition Consultancy | Recruitment Direct UK",
    description:
      "Hourly, half day and full day talent acquisition consultancy. Hiring support and benchmarking without a full HR outsourcing contract.",
    url: "https://www.rd1.co.uk/talent-acquisition-consultancy",
    siteName: "Recruitment Direct UK Ltd",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Talent Acquisition Consultancy",
  serviceType: "Talent Acquisition Consultancy",
  description:
    "Hourly, half day and full day talent acquisition consultancy. Sourcing, screening, benchmarking and hiring support for organisations that want a recruitment partner, not full HR outsourcing.",
  provider: {
    "@type": "Organization",
    name: "Recruitment Direct UK Ltd",
    url: "https://www.rd1.co.uk",
    sameAs: ["https://www.rd1.co.uk/accreditations"],
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Corporate HR, talent acquisition and procurement teams",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is talent acquisition consultancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Talent acquisition consultancy is hands on recruitment support such as sourcing, screening, shortlisting and hiring process advice, provided by an external specialist on a paid for time basis rather than a percentage placement fee or a full outsourced HR contract.",
      },
    },
    {
      "@type": "Question",
      name: "How is Recruitment Direct UK's talent acquisition consultancy billed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's billed hourly, half day or full day depending on the scope of the work, with exact terms confirmed at quote stage.",
      },
    },
    {
      "@type": "Question",
      name: "Does this include full HR outsourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It covers talent acquisition only, including sourcing, screening and hiring support. It does not include employee relations, payroll, disciplinary or grievance handling, or HR policy management.",
      },
    },
    {
      "@type": "Question",
      name: "Is Recruitment Direct UK accredited?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Recruitment Direct UK holds REC Corporate Membership, ISO 9001:2015 certification, Constructionline Gold and Cyber Essentials accreditation.",
      },
    },
    {
      "@type": "Question",
      name: "Is this service available UK wide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Recruitment Direct UK's talent acquisition consultancy is available to organisations across the UK and is not limited to any one region.",
      },
    },
    {
      "@type": "Question",
      name: "Who is talent acquisition consultancy for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Organisations that need experienced recruitment support for a defined period or project, such as a hiring surge, a restructure or a benchmarking exercise, without committing to a full RPO or HR outsourcing contract.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.rd1.co.uk/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Clients",
      item: "https://www.rd1.co.uk/clients",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Talent Acquisition Consultancy",
      item: "https://www.rd1.co.uk/talent-acquisition-consultancy",
    },
  ],
};

export default function TalentAcquisitionConsultancyPage() {
  return (
    <div className="min-h-screen bg-white text-[#374151] font-sans">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <FloatingElements />
      <Navbar />

      <main className="rd-tac pt-4 md:pt-6 pb-20">
        <div className="max-w-[960px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#6b7280] pt-4 mb-2">
            <Link href="/" className="hover:text-[#0b0f19] transition-colors">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/clients" className="hover:text-[#0b0f19] transition-colors">
              Clients
            </Link>{" "}
            / <span className="text-[#0b0f19]">Talent Acquisition Consultancy</span>
          </nav>

          {/* Hero Section */}
          <section className="py-7 md:py-8">
            <span className="inline-block font-heading font-bold text-xs tracking-[0.06em] uppercase text-[#0b0f19] bg-[#faf3e2] border border-[#c89528] px-3.5 py-1.5 rounded-full mb-4">
              Talent Acquisition Consultancy
            </span>
            <h1 className="font-heading font-extrabold text-[28px] sm:text-[34px] md:text-[42px] leading-[1.2] text-[#0b0f19] mb-4">
              Talent Acquisition Consultancy: Hourly, Half Day &amp; Full Day Engagements
            </h1>
            <p className="text-lg md:text-[19px] text-[#374151] leading-relaxed max-w-[760px] mb-5">
              <strong className="text-[#0b0f19]">
                Recruitment Direct UK provides UK wide talent acquisition consultancy on an hourly, half day or full day basis.
              </strong>{" "}
              Hands on hiring support, sourcing and market benchmarking for organisations that want a recruitment partner, not a full HR outsourcing contract.
            </p>

            <div className="text-[15px] text-[#374151] max-w-[760px] mb-7 p-4 md:p-[18px] bg-[#fafaf8] rounded-[10px] border border-[#e7e5df]">
              <strong className="text-[#0b0f19]">Whatever your team calls it, this is what we mean:</strong> a talent acquisition partner, embedded or fractional talent acquisition support, interim talent acquisition, a recruitment consultancy engagement, or an alternative to a full RPO contract. Different organisations use different terms for the same thing: paid for time recruitment support rather than a placement fee or a long term managed service contract.
            </div>

            <div className="flex flex-wrap gap-3.5 mb-11">
              <Link
                href="/ai-hire-now"
                className="inline-block px-6 py-3.5 rounded-lg font-heading font-extrabold text-[14.5px] uppercase tracking-[0.02em] text-[#071424] bg-gradient-to-r from-[#8a6417] via-[#f6d77d] to-[#6f4b10] border-2 border-[#f7d98a] shadow-sm hover:brightness-105 transition-all"
                style={{
                  background: "linear-gradient(135deg, #8a6417 0%, #c89528 24%, #f6d77d 50%, #c28b20 74%, #6f4b10 100%)",
                }}
              >
                Discuss a Consultancy Engagement
              </Link>
              <Link
                href="/accreditations"
                className="inline-block px-6 py-3.5 rounded-lg font-heading font-extrabold text-[14.5px] uppercase tracking-[0.02em] text-[#0b0f19] bg-white border-2 border-[#c89528] hover:bg-[#faf3e2] transition-colors"
              >
                See Our Accreditations
              </Link>
            </div>
          </section>

          {/* What this covers */}
          <section className="py-10 border-t border-[#e7e5df]">
            <h2 className="font-heading font-bold text-[25px] text-[#0b0f19] mb-4">
              What this covers
            </h2>
            <p className="max-w-[760px] leading-relaxed mb-4">
              If your organisation needs recruitment expertise for a defined period, such as a hiring surge, a restructure, a new site opening, or a gap while you recruit internally, without signing up to a full outsourced HR function, this is built for that. You get direct, experienced talent acquisition support charged for the time used, not a percentage placement fee and not a long term managed service contract.
            </p>

            <p className="font-medium text-[#0b0f19]">Service areas include:</p>
            <ul className="max-w-[760px] pl-5 mt-4 space-y-2 list-disc">
              <li>
                <strong className="text-[#0b0f19]">Sourcing and candidate search</strong> across your open roles, using the same sourcing tools and databases we use for standard placements.
              </li>
              <li>
                <strong className="text-[#0b0f19]">Screening and shortlisting</strong>, including structured interviews and skills based assessment where needed.
              </li>
              <li>
                <strong className="text-[#0b0f19]">Market and salary benchmarking</strong>, so you know what a role should cost before you advertise it.
              </li>
              <li>
                <strong className="text-[#0b0f19]">Hiring process design and review</strong>, tightening up a slow or leaky recruitment funnel.
              </li>
              <li>
                <strong className="text-[#0b0f19]">Talent pipelining</strong> for roles you expect to need again, so you are not starting from zero each time.
              </li>
              <li>
                <strong className="text-[#0b0f19]">Interview and assessment day support</strong>, including on site or embedded delivery for high volume hiring days.
              </li>
              <li>
                <strong className="text-[#0b0f19]">Job description and employer branding input</strong>, where a role is not attracting the right calibre of candidate.
              </li>
            </ul>
            <p className="mt-3.5 text-sm text-[#6b7280]">
              This list reflects the core of the service. If your organisation has a specific requirement outside these areas, ask when you enquire; scope is agreed and confirmed before any engagement starts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-6">
              <div className="border border-[#e7e5df] rounded-xl p-[22px] bg-[#fafaf8]">
                <h3 className="font-heading font-bold text-base text-[#0b0f19] uppercase tracking-[0.03em] mb-2">
                  Hourly
                </h3>
                <p className="text-[14.5px] text-[#6b7280] m-0">
                  Ad hoc advisory, a specific search, or short bursts of hands on recruitment support.
                </p>
              </div>
              <div className="border border-[#e7e5df] rounded-xl p-[22px] bg-[#fafaf8]">
                <h3 className="font-heading font-bold text-base text-[#0b0f19] uppercase tracking-[0.03em] mb-2">
                  Half Day
                </h3>
                <p className="text-[14.5px] text-[#6b7280] m-0">
                  Focused work such as a shortlisting session, a hiring process review, or market benchmarking for a role or team.
                </p>
              </div>
              <div className="border border-[#e7e5df] rounded-xl p-[22px] bg-[#fafaf8]">
                <h3 className="font-heading font-bold text-base text-[#0b0f19] uppercase tracking-[0.03em] mb-2">
                  Full Day
                </h3>
                <p className="text-[14.5px] text-[#6b7280] m-0">
                  Embedded, on site or intensive support such as a hiring day, an assessment centre, or a multi role recruitment sprint.
                </p>
              </div>
            </div>
            <p className="mt-5 text-[#6b7280] text-[14.5px]">
              Exact terms are confirmed at quote stage against the scope of work.{" "}
              <Link href="/ai-hire-now" className="text-[#0b0f19] underline decoration-[#c89528] underline-offset-2 hover:text-[#c89528]">
                Get in touch
              </Link>{" "}
              to discuss what you need.
            </p>
          </section>

          {/* What this isn't */}
          <section className="py-10 border-t border-[#e7e5df]">
            <div className="bg-[#f7f4ee] border-l-4 border-[#c89528] p-5 md:p-6 rounded-r-[10px] max-w-[760px]">
              <h2 className="font-heading font-bold text-[25px] text-[#0b0f19] mb-2">
                What this isn&apos;t
              </h2>
              <p className="m-0 text-[#374151] leading-relaxed">
                This is talent acquisition consultancy, not full HR outsourcing. Our consultants handle sourcing, screening, shortlisting, benchmarking and hiring process support, not employee relations, disciplinary or grievance casework, payroll, or ownership of your HR policies. If you need those, this isn&apos;t the right service to ask for. If you need hiring done well and flexibly, it is.
              </p>
            </div>
          </section>

          {/* Who this is for */}
          <section className="py-10 border-t border-[#e7e5df]">
            <h2 className="font-heading font-bold text-[25px] text-[#0b0f19] mb-4">
              Who this is for
            </h2>
            <p className="max-w-[760px] leading-relaxed">
              Large and mid sized organisations UK wide: corporate HR and talent acquisition teams, universities and colleges, public sector bodies procuring through a framework, and businesses running a hiring project that doesn&apos;t justify a full RPO contract. If you need a benchmarked, accredited supplier rather than an unverified new relationship, this is where that sits. Explore support by{" "}
              <Link href="/sectors" className="text-[#0b0f19] underline decoration-[#c89528] underline-offset-2 hover:text-[#c89528]">
                sector
              </Link>{" "}
              or find your nearest{" "}
              <Link href="/locations" className="text-[#0b0f19] underline decoration-[#c89528] underline-offset-2 hover:text-[#c89528]">
                local coverage
              </Link>{" "}
              if you would rather start with a standard staffing enquiry instead.
            </p>
          </section>

          {/* Accredited and compliant */}
          <section className="py-10 border-t border-[#e7e5df]">
            <h2 className="font-heading font-bold text-[25px] text-[#0b0f19] mb-4">
              Accredited and compliant
            </h2>
            <p className="max-w-[760px] leading-relaxed">
              Recruitment Direct UK holds REC Corporate Membership, ISO 9001:2015 certification, Constructionline Gold and Cyber Essentials accreditation. These are independent points of assurance that our compliance and quality standards have already been through external scrutiny before you engage us. See the full detail on our{" "}
              <Link href="/accreditations" className="text-[#0b0f19] underline decoration-[#c89528] underline-offset-2 hover:text-[#c89528]">
                accreditations
              </Link>{" "}
              and{" "}
              <Link href="/security" className="text-[#0b0f19] underline decoration-[#c89528] underline-offset-2 hover:text-[#c89528]">
                security
              </Link>{" "}
              pages, and our published{" "}
              <Link href="/policies-and-compliance" className="text-[#0b0f19] underline decoration-[#c89528] underline-offset-2 hover:text-[#c89528]">
                policies and compliance hub
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-3 mt-[22px]">
              <span className="border border-[#e7e5df] rounded-lg px-4 py-2.5 text-[13.5px] font-semibold text-[#0b0f19] bg-white">
                UK Wide Coverage
              </span>
              <span className="border border-[#e7e5df] rounded-lg px-4 py-2.5 text-[13.5px] font-semibold text-[#0b0f19] bg-white">
                REC Corporate Member
              </span>
              <span className="border border-[#e7e5df] rounded-lg px-4 py-2.5 text-[13.5px] font-semibold text-[#0b0f19] bg-white">
                ISO 9001:2015
              </span>
              <span className="border border-[#e7e5df] rounded-lg px-4 py-2.5 text-[13.5px] font-semibold text-[#0b0f19] bg-white">
                Constructionline Gold
              </span>
              <span className="border border-[#e7e5df] rounded-lg px-4 py-2.5 text-[13.5px] font-semibold text-[#0b0f19] bg-white">
                Cyber Essentials
              </span>
            </div>
          </section>

          {/* Frequently asked questions */}
          <section className="py-10 border-t border-[#e7e5df]">
            <h2 className="font-heading font-bold text-[25px] text-[#0b0f19] mb-4">
              Frequently asked questions
            </h2>

            <div className="divide-y divide-[#e7e5df]">
              <details open className="py-4 group">
                <summary className="cursor-pointer font-heading font-bold text-[16.5px] text-[#0b0f19] list-none flex justify-between items-center select-none">
                  <span>What is talent acquisition consultancy?</span>
                  <span className="text-[#c89528] text-2xl font-light leading-none group-open:hidden">+</span>
                  <span className="text-[#c89528] text-2xl font-light leading-none hidden group-open:inline">&minus;</span>
                </summary>
                <p className="mt-3 max-w-[720px] text-[#374151] leading-relaxed">
                  Talent acquisition consultancy is hands on recruitment support such as sourcing, screening, shortlisting and hiring process advice, provided by an external specialist on a paid for time basis rather than a percentage placement fee or a full outsourced HR contract.
                </p>
              </details>

              <details className="py-4 group">
                <summary className="cursor-pointer font-heading font-bold text-[16.5px] text-[#0b0f19] list-none flex justify-between items-center select-none">
                  <span>How is Recruitment Direct UK&apos;s talent acquisition consultancy billed?</span>
                  <span className="text-[#c89528] text-2xl font-light leading-none group-open:hidden">+</span>
                  <span className="text-[#c89528] text-2xl font-light leading-none hidden group-open:inline">&minus;</span>
                </summary>
                <p className="mt-3 max-w-[720px] text-[#374151] leading-relaxed">
                  It&apos;s billed hourly, half day or full day depending on the scope of the work, with exact terms confirmed at quote stage.
                </p>
              </details>

              <details className="py-4 group">
                <summary className="cursor-pointer font-heading font-bold text-[16.5px] text-[#0b0f19] list-none flex justify-between items-center select-none">
                  <span>Does this include full HR outsourcing?</span>
                  <span className="text-[#c89528] text-2xl font-light leading-none group-open:hidden">+</span>
                  <span className="text-[#c89528] text-2xl font-light leading-none hidden group-open:inline">&minus;</span>
                </summary>
                <p className="mt-3 max-w-[720px] text-[#374151] leading-relaxed">
                  No. It covers talent acquisition only, including sourcing, screening and hiring support. It does not include employee relations, payroll, disciplinary or grievance handling, or HR policy management.
                </p>
              </details>

              <details className="py-4 group">
                <summary className="cursor-pointer font-heading font-bold text-[16.5px] text-[#0b0f19] list-none flex justify-between items-center select-none">
                  <span>Is Recruitment Direct UK accredited?</span>
                  <span className="text-[#c89528] text-2xl font-light leading-none group-open:hidden">+</span>
                  <span className="text-[#c89528] text-2xl font-light leading-none hidden group-open:inline">&minus;</span>
                </summary>
                <p className="mt-3 max-w-[720px] text-[#374151] leading-relaxed">
                  Yes. Recruitment Direct UK holds REC Corporate Membership, ISO 9001:2015 certification, Constructionline Gold and Cyber Essentials accreditation.
                </p>
              </details>

              <details className="py-4 group">
                <summary className="cursor-pointer font-heading font-bold text-[16.5px] text-[#0b0f19] list-none flex justify-between items-center select-none">
                  <span>Is this service available UK wide?</span>
                  <span className="text-[#c89528] text-2xl font-light leading-none group-open:hidden">+</span>
                  <span className="text-[#c89528] text-2xl font-light leading-none hidden group-open:inline">&minus;</span>
                </summary>
                <p className="mt-3 max-w-[720px] text-[#374151] leading-relaxed">
                  Yes. Recruitment Direct UK&apos;s talent acquisition consultancy is available to organisations across the UK and is not limited to any one region.
                </p>
              </details>

              <details className="py-4 group">
                <summary className="cursor-pointer font-heading font-bold text-[16.5px] text-[#0b0f19] list-none flex justify-between items-center select-none">
                  <span>Who is talent acquisition consultancy for?</span>
                  <span className="text-[#c89528] text-2xl font-light leading-none group-open:hidden">+</span>
                  <span className="text-[#c89528] text-2xl font-light leading-none hidden group-open:inline">&minus;</span>
                </summary>
                <p className="mt-3 max-w-[720px] text-[#374151] leading-relaxed">
                  Organisations that need experienced recruitment support for a defined period or project, such as a hiring surge, a restructure or a benchmarking exercise, without committing to a full RPO or HR outsourcing contract.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <div
            className="rd-tac-final-cta-box rounded-2xl p-8 sm:p-10 text-center my-11 shadow-2xl relative z-10"
            style={{
              background: "radial-gradient(circle at 50% 0%, #132344 0%, #081120 35%, #020307 75%, #000000 100%)",
              color: "#ffffff",
            }}
          >
            <style>{`
              .rd-tac-final-cta-box h2,
              .rd-tac-final-cta-box .cta-heading {
                color: #ffffff !important;
                -webkit-text-fill-color: #ffffff !important;
              }
              .rd-tac-final-cta-box p,
              .rd-tac-final-cta-box .cta-sub {
                color: #cfcfcb !important;
                -webkit-text-fill-color: #cfcfcb !important;
              }
              .rd-tac-final-cta-box a.cta-btn {
                color: #071424 !important;
                -webkit-text-fill-color: #071424 !important;
              }
            `}</style>
            <h2
              className="cta-heading font-heading font-bold text-2xl sm:text-3xl mt-0 mb-3 !text-white"
              style={{
                color: "#ffffff",
                WebkitTextFillColor: "#ffffff",
              }}
            >
              Talk to us about a consultancy engagement
            </h2>
            <p
              className="cta-sub max-w-[560px] mx-auto mb-6 text-sm sm:text-base leading-relaxed !text-[#cfcfcb]"
              style={{
                color: "#cfcfcb",
                WebkitTextFillColor: "#cfcfcb",
              }}
            >
              Tell us the scope, hourly, half day or full day, and which sector or team it covers, and we will come back with a quote.
            </p>
            <Link
              href="/ai-hire-now"
              className="cta-btn inline-block px-7 py-3.5 rounded-lg font-heading font-extrabold text-[14.5px] uppercase tracking-[0.02em] shadow-md hover:brightness-110 transition-all !text-[#071424]"
              style={{
                background: "linear-gradient(135deg, #8a6417 0%, #c89528 24%, #f6d77d 50%, #c28b20 74%, #6f4b10 100%)",
                border: "2px solid #f7d98a",
                color: "#071424",
                WebkitTextFillColor: "#071424",
              }}
            >
              Discuss a Consultancy Engagement
            </Link>
          </div>

          {/* Related Links */}
          <p className="text-[14.5px] text-[#6b7280] max-w-[760px]">
            Related:{" "}
            <Link href="/clients" className="text-[#0b0f19] hover:text-[#c89528]">
              Client Staffing Services
            </Link>{" "}
            &middot;{" "}
            <Link href="/find-staff" className="text-[#0b0f19] hover:text-[#c89528]">
              Find Staff
            </Link>{" "}
            &middot;{" "}
            <Link href="/ai-recruitment" className="text-[#0b0f19] hover:text-[#c89528]">
              AI Recruitment
            </Link>{" "}
            &middot;{" "}
            <Link href="/sectors" className="text-[#0b0f19] hover:text-[#c89528]">
              Sectors We Support
            </Link>{" "}
            &middot;{" "}
            <Link href="/locations" className="text-[#0b0f19] hover:text-[#c89528]">
              UK Locations
            </Link>{" "}
            &middot;{" "}
            <Link href="/accreditations" className="text-[#0b0f19] hover:text-[#c89528]">
              Accreditations
            </Link>{" "}
            &middot;{" "}
            <Link href="/contact" className="text-[#0b0f19] hover:text-[#c89528]">
              Contact
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
