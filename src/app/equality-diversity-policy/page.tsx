import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Equality, Diversity and Inclusion Policy | Recruitment Direct UK",
  description: "Equality, Diversity and Inclusion Policy promoting fair treatment, non-discrimination, and equal opportunity in recruitment.",
  alternates: {
    canonical: "https://rd1.co.uk/equality-diversity-policy",
  },
  openGraph: {
    title: "Equality, Diversity and Inclusion Policy | Recruitment Direct UK",
    description: "Equality, Diversity and Inclusion Policy promoting fair treatment, non-discrimination, and equal opportunity in recruitment.",
    url: "https://rd1.co.uk/equality-diversity-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
