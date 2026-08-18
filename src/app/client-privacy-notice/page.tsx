import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Client Privacy Notice | RDUK",
  description: "Privacy policy and data protection information for our clients and business partners.",
  alternates: {
    canonical: "https://rd1.co.uk/client-privacy-notice",
  },
};

export default function Page() {
  return <PageClient />;
}
