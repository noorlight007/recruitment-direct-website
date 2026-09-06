import type { Metadata } from "next";
import SectorsPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Sectors We Recruit For | Recruitment Direct UK",
  description:
    "Explore the core industries we support across Scotland and the UK, including construction, logistics, healthcare, engineering, and more.",
  alternates: {
    canonical: "https://rd1.co.uk/sectors",
  },
  openGraph: {
    title: "Sectors We Recruit For | Recruitment Direct UK",
    description:
      "Explore the core industries we support across Scotland and the UK, including construction, logistics, healthcare, engineering, and more.",
    url: "https://rd1.co.uk/sectors",
    siteName: "Recruitment Direct UK",
    type: "website",
    images: [
      {
        url: "https://rd1.co.uk/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Recruitment Direct UK Sectors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sectors We Recruit For | Recruitment Direct UK",
    description:
      "Explore the core industries we support across Scotland and the UK, including construction, logistics, healthcare, engineering, and more.",
    images: ["https://rd1.co.uk/images/og-image.png"],
  },
};

export default function SectorsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Recruitment Direct UK — Sectors We Recruit For",
    url: "https://rd1.co.uk/sectors",
    description:
      "Specialist recruitment agency supplying temporary, contract and permanent personnel across 10 core industries.",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Construction Recruitment Agency", url: "https://rd1.co.uk/construction-recruitment-agency" },
      { "@type": "ListItem", position: 2, name: "Engineering Recruitment Agency", url: "https://rd1.co.uk/engineering-recruitment-agency" },
      { "@type": "ListItem", position: 3, name: "Renewable Energy Recruitment Agency", url: "https://rd1.co.uk/renewable-energy-recruitment-agency" },
      { "@type": "ListItem", position: 4, name: "Logistics & Driving Recruitment Agency", url: "https://rd1.co.uk/logistics-recruitment-agency" },
      { "@type": "ListItem", position: 5, name: "Healthcare Recruitment Agency", url: "https://rd1.co.uk/healthcare-recruitment-agency" },
      { "@type": "ListItem", position: 6, name: "Education Recruitment Agency", url: "https://rd1.co.uk/education-recruitment-agency" },
      { "@type": "ListItem", position: 7, name: "IT & Technology Recruitment Agency", url: "https://rd1.co.uk/it-technology-recruitment-agency" },
      { "@type": "ListItem", position: 8, name: "Commercial & Office Recruitment Agency", url: "https://rd1.co.uk/commercial-office-recruitment-agency" },
      { "@type": "ListItem", position: 9, name: "Facilities Management Recruitment Agency", url: "https://rd1.co.uk/facilities-management-recruitment-agency" },
      { "@type": "ListItem", position: 10, name: "Hospitality Recruitment Agency", url: "https://rd1.co.uk/hospitality-recruitment-agency" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SectorsPageClient />
    </>
  );
}
