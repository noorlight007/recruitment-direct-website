import type { Metadata } from "next";
import ClientsPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Client Staffing Services | Recruitment Direct UK Ltd",
  description: "Find temporary, contract and permanent staffing solutions across the UK. Partner with RDUK to fulfill your business workforce requirements.",
  alternates: {
    canonical: "https://rd1.co.uk/clients",
  },
};

export default function ClientsPage() {
  return <ClientsPageClient />;
}
