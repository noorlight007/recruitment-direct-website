"use client";

import { usePathname } from "next/navigation";

export default function DynamicCanonical() {
  const pathname = usePathname();
  
  // Clean pathname to remove any trailing slashes to match sitemap URL structures
  const cleanPath = pathname && pathname !== "/" ? pathname.replace(/\/+$/, "") : "";
  const canonicalUrl = `https://rd1.co.uk${cleanPath}`;

  return <link rel="canonical" href={canonicalUrl} />;
}
