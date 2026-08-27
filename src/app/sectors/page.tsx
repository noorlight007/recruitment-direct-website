import type { Metadata } from "next";
import SectorsPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Recruitment Sectors | Recruitment Direct UK Ltd",
  description: "Explore the core industries we support across Scotland and the UK, including construction, logistics, healthcare, engineering, and more.",
  alternates: {
    canonical: "https://rd1.co.uk/sectors",
  },
};

export default function SectorsPage() {
  return <SectorsPageClient />;
}
