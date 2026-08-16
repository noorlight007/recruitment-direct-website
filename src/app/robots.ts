import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/locations/admin/",
        "*/feed/",
        "/feed/",
      ],
    },
    sitemap: "https://rd1.co.uk/sitemap.xml",
  };
}
