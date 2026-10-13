import type { Metadata } from "next";
import HealthcareAgencyPage from "./page-client";

const DESCRIPTION =
  "Healthcare recruitment agency supplying temporary, contract and permanent care assistants, support workers and care professionals across the UK since 2006.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Healthcare recruitment",
  provider: {
    "@type": "EmploymentAgency",
    name: "Recruitment Direct UK Ltd",
    url: "https://rd1.co.uk",
  },
  areaServed: "GB",
  url: "https://rd1.co.uk/healthcare-recruitment-agency",
};

export const metadata: Metadata = {
  title: "Healthcare Recruitment Agency UK | Recruitment Direct UK",
  description: DESCRIPTION,
  alternates: { canonical: "https://rd1.co.uk/healthcare-recruitment-agency" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Healthcare Recruitment Agency UK | Recruitment Direct UK",
    description: DESCRIPTION,
    url: "https://rd1.co.uk/healthcare-recruitment-agency",
    images: [
      {
        url: "https://rd1.co.uk/images/Healthcares.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Recruitment Agency UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Recruitment Agency UK | Recruitment Direct UK",
    description: DESCRIPTION,
    images: ["https://rd1.co.uk/images/Healthcares.png"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HealthcareAgencyPage />
    </>
  );
}
