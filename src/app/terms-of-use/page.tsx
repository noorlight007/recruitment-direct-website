import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Terms of Website Use | RDUK",
  description: "Terms and conditions governing the use of the Recruitment Direct UK website.",
  alternates: {
    canonical: "https://rd1.co.uk/terms-of-use",
  },
};

export default function Page() {
  return <PageClient />;
}
