import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Temporary Staffing Services | RDUK",
  description: "Responsive temporary staffing solutions to cover short-term demands and projects.",
  alternates: {
    canonical: "https://rd1.co.uk/temporary-staff",
  },
};

export default function Page() {
  return <PageClient />;
}
