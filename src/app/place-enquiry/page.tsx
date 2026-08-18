import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Submit Staff Enquiry | RDUK",
  description: "Submit a general recruitment enquiry to request staff for your company.",
  alternates: {
    canonical: "https://rd1.co.uk/place-enquiry",
  },
};

export default function Page() {
  return <PageClient />;
}
