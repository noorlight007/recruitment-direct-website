import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Cookie Policy | RDUK",
  description: "Information about how we use cookies and tracking technologies on our website.",
  alternates: {
    canonical: "https://rd1.co.uk/cookie-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
