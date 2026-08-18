import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Accreditations & Compliance | Recruitment Direct UK",
  description: "Our certifications and compliance standards including Constructionline Gold, ISO 9001:2015, Cyber Essentials, and REC Membership.",
  alternates: {
    canonical: "https://rd1.co.uk/accreditations",
  },
};

export default function Page() {
  return <PageClient />;
}
