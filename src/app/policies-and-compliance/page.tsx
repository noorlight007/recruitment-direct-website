// app/policies-and-compliance/page.tsx
//
// The route itself — save this file as
// app/policies-and-compliance/page.tsx (rename from
// policies-and-compliance-page.tsx when you drop it in).
//
// Sets its own title/meta/OG tags rather than inheriting the homepage's
// (the earlier SEO audit flagged /sectors doing exactly that — this page
// is built correctly from the start) and adds an ItemList JSON-LD block so
// the policy set is machine-readable too.

import type { Metadata } from "next";
import PoliciesHub from "@/components/PoliciesHub";
import { policies } from "@/lib/policies-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://rd1.co.uk";
const PAGE_URL = `${SITE_URL}/policies-and-compliance`;

export const metadata: Metadata = {
  title: "Policies & Compliance | Recruitment Direct UK",
  description:
    "All Recruitment Direct UK's policies, accreditations and compliance statements in one place — built for procurement and framework due diligence.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Policies & Compliance | Recruitment Direct UK",
    description:
      "Every policy and compliance statement covering how Recruitment Direct UK operates, in one searchable hub.",
    url: PAGE_URL,
    siteName: "Recruitment Direct UK",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Policies & Compliance | Recruitment Direct UK",
    description:
      "Every policy and compliance statement covering how Recruitment Direct UK operates, in one searchable hub.",
  },
};

export default function Page() {
  const livePolicies = policies.filter((p) => p.status === "live" && p.href);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Recruitment Direct UK — Policies & Compliance",
    url: PAGE_URL,
    itemListElement: livePolicies.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${SITE_URL}${p.href}`,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow pt-24 sm:pt-28 pb-16">
        <PoliciesHub />
      </main>
      <Footer />
    </div>
  );
}
