import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Contract Staffing Solutions | RDUK",
  description: "Flexible contract recruitment services to support projects and peak workloads across the UK.",
  alternates: {
    canonical: "https://rd1.co.uk/contract-staff",
  },
};

export default function Page() {
  return <PageClient />;
}
