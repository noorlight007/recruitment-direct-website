import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Equality, Diversity and Inclusion Policy | RDUK",
  description: "Our policy promoting equality and diversity in our workplace and recruitment processes.",
  alternates: {
    canonical: "https://rd1.co.uk/equality-diversity-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
