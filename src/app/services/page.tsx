import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Our Recruitment Services | RDUK",
  description: "Explore our full range of staffing services including temporary, contract, and permanent solutions.",
  alternates: {
    canonical: "https://rd1.co.uk/services",
  },
};

export default function Page() {
  return <PageClient />;
}
