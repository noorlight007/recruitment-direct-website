import type { Metadata } from "next";
import EducationAgencyPage from "./page-client";

export const metadata: Metadata = {
  title: "Education Recruitment Agency | Recruitment Direct",
  description: "Education Recruitment Agency supplying supply teachers, teaching assistants and learning support workers across the UK. Trusted since 2006.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Education Recruitment Agency UK | Recruitment Direct UK",
    description: "Education Recruitment Agency supplying temporary, contract and permanent teaching assistants, supply teachers and learning support workers across the UK.",
    url: "https://rd1.co.uk/education-recruitment-agency",
    images: [
      {
        url: "https://rd1.co.uk/images/Educations.png",
        width: 1200,
        height: 630,
        alt: "Education Recruitment Agency UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Recruitment Agency UK | Recruitment Direct UK",
    description: "Education Recruitment Agency supplying temporary, contract and permanent teaching assistants, supply teachers and learning support workers across the UK.",
    images: ["https://rd1.co.uk/images/Educations.png"],
  },
};

export default function Page() {
  return <EducationAgencyPage />;
}
