import type { Metadata } from "next";
import Index from "./page-client";

export const metadata: Metadata = {
  title: "Recruitment Agency Scotland & UK | Recruitment Direct UK Ltd",
  description: "Recruitment Direct UK supplies temporary, contract and permanent staff across Scotland and the UK. Sourcing candidates since 2006.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rd1.co.uk",
  },
  openGraph: {
    title: "Recruitment Agency Scotland & UK | Recruitment Direct UK Ltd",
    description: "Recruitment Direct UK supplies temporary, contract and permanent staff across Scotland and the UK. Sourcing candidates since 2006.",
    url: "https://rd1.co.uk/",
    siteName: "Recruitment Direct UK",
    type: "website",
    images: [
      {
        url: "https://rd1.co.uk/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Recruitment Direct UK Ltd Logo",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment Agency Scotland & UK | Recruitment Direct UK Ltd",
    description: "Recruitment Direct UK supplies temporary, contract and permanent staff across Scotland and the UK. Sourcing candidates since 2006.",
    images: ["https://rd1.co.uk/images/og-image.png"],
  },
};

export default function Page() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Recruitment Direct UK Ltd",
    "alternateName": "RDUK",
    "url": "https://rd1.co.uk",
    "logo": "https://rd1.co.uk/logo.png",
    "sameAs": [
      "https://www.facebook.com/recruitmentdirect/",
      "https://www.linkedin.com/company/recruitment-direct/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-1324-613198",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "English"
    }
  };

  const agencySchema = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "name": "Recruitment Direct UK Ltd",
    "url": "https://rd1.co.uk",
    "telephone": "01324 613198",
    "logo": "https://rd1.co.uk/logo.png",
    "image": "https://rd1.co.uk/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Herkimer House, Mill Road Industrial Estate",
      "addressLocality": "Linlithgow",
      "addressRegion": "West Lothian",
      "postalCode": "EH49 7SF",
      "addressCountry": "GB"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:30",
      "closes": "17:30"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
      />
      <Index />
    </>
  );
}
