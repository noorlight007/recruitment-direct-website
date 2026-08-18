import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "About Us | Recruitment Direct UK",
  description: "Learn about Recruitment Direct UK, supplying temporary, contract, and permanent staffing solutions across the UK since 2006.",
  alternates: {
    canonical: "https://rd1.co.uk/about",
  },
};

export default function Page() {
  return <PageClient />;
}
