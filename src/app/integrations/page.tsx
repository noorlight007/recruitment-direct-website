import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "AI Recruitment Integrations | RDUK",
  description: "Integrate our AI recruitment platform with your existing ATS and HR software systems.",
  alternates: {
    canonical: "https://rd1.co.uk/integrations",
  },
};

export default function Page() {
  return <PageClient />;
}
