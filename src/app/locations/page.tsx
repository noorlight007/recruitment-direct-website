import type { Metadata } from "next";
import LocationsClient from "./LocationsClient";

export const metadata: Metadata = {
  title: "Our Locations | Recruitment Direct UK",
  description: "Find our office locations and recruitment services across England, Scotland, Wales, Ireland and Northern Ireland.",
  alternates: {
    canonical: "https://rd1.co.uk/locations",
  },
};

export default function LocationsPage() {
  return <LocationsClient />;
}
