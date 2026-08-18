import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Our Recruitment Process | RDUK",
  description: "How we source, screen, and supply qualified candidates to our clients.",
  alternates: {
    canonical: "https://rd1.co.uk/our-process",
  },
};

export default function Page() {
  return <PageClient />;
}
