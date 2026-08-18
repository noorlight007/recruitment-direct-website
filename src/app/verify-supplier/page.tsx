import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Verify a Supplier | RDUK",
  description: "Supplier verification portal for subcontractors and suppliers working with RDUK.",
  alternates: {
    canonical: "https://rd1.co.uk/verify-supplier",
  },
};

export default function Page() {
  return <PageClient />;
}
