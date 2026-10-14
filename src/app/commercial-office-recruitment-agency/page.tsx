import type { Metadata } from "next";
import CommercialSectorPageClient from "./page-client";

const DESCRIPTION =
  "Recruitment Direct UK supplies temporary, contract and permanent office administrators, receptionists, customer service, accounts and payroll staff across the UK.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Commercial and office recruitment",
  provider: {
    "@type": "EmploymentAgency",
    name: "Recruitment Direct UK Ltd",
    url: "https://rd1.co.uk",
  },
  areaServed: "GB",
  url: "https://rd1.co.uk/commercial-office-recruitment-agency",
};

export const metadata: Metadata = {
  title: "Commercial & Office Recruitment Agency | RDUK",
  description: DESCRIPTION,
  alternates: { canonical: "https://rd1.co.uk/commercial-office-recruitment-agency" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Commercial & Office Recruitment Agency | RDUK",
    description: DESCRIPTION,
    url: "https://rd1.co.uk/commercial-office-recruitment-agency",
    siteName: "Recruitment Direct UK",
    type: "website",
    images: [
      {
        url: "https://rd1.co.uk/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Recruitment Direct UK Logo",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial & Office Recruitment Agency | RDUK",
    description: DESCRIPTION,
    images: ["https://rd1.co.uk/images/og-image.png"],
  }
};

export default function CommercialSectorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CommercialSectorPageClient />
    </>
  );
}
