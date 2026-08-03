"use client";

import dynamic from "next/dynamic";

const UKCoverageMap = dynamic(() => import("@/components/UKCoverageMap"), {
  ssr: false,
});

export default function LocationsClient() {
  return <UKCoverageMap isEmbed={false} />;
}
