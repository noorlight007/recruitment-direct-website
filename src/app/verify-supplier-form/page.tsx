import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Supplier Verification Form | RDUK",
  description: "Submit subcontractor and supplier compliance details for verification.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://rd1.co.uk/verify-supplier-form",
  },
};

export default function Page() {
  return <PageClient />;
}
