import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Contact Us | Recruitment Direct UK",
  description: "Get in touch with Recruitment Direct UK for temporary, contract, and permanent staffing inquiries.",
  alternates: {
    canonical: "https://rd1.co.uk/contact",
  },
};

export default function Page() {
  return <PageClient />;
}
