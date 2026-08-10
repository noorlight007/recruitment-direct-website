"use client";

import { usePathname } from "next/navigation";

export default function DynamicCanonical() {
  const pathname = usePathname();
  
  // Clean pathname to remove any trailing slashes to match sitemap URL structures
  const cleanPath = pathname && pathname !== "/" ? pathname.replace(/\/+$/, "") : "";
  
  // URL-encode pathname segments to ensure they match the URL-encoded sitemap structures
  const encodedPath = cleanPath
    .split("/")
    .map((segment) => encodeURIComponent(decodeURIComponent(segment)))
    .join("/");

  const canonicalUrl = `https://rd1.co.uk${encodedPath}`;

  return <link rel="canonical" href={canonicalUrl} />;
}
