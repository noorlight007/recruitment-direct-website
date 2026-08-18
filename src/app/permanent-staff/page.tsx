import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Permanent Staff Recruitment | RDUK",
  description: "Find permanent talent for your business. We source and place pre-screened professionals.",
  alternates: {
    canonical: "https://rd1.co.uk/permanent-staff",
  },
};

export default function Page() {
  return <PageClient />;
}
