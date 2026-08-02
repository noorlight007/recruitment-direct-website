import type { MetadataRoute } from "next";
import { api } from "@/services/api";
import { cities } from "@/data/cities";

export const revalidate = 3600; // Cache sitemap for 1 hour

interface ApiJobItem {
  adId: number;
  postAt: string;
  slug?: string;
}

interface ApiResponse {
  items: ApiJobItem[];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://rd1.co.uk";

  const staticPages = [
    "",
    "/about",
    "/accreditations",
    "/ai-hire-now",
    "/ai-hire-now-form",
    "/ai-hire-now-statement",
    "/ai-screening-call-statement",
    "/ai-transparency-statement",
    "/ai-verify-cis",
    "/ai-volume-hiring",
    "/anti-bribery-policy",
    "/awr-policy",
    "/bias-fairness-statement",
    "/callpilot",
    "/candidate-privacy-notice",
    "/carbon-reduction-plan",
    "/client-privacy-notice",
    "/complaints-policy",
    "/construction-recruitment-agency",
    "/contact",
    "/contract-staff",
    "/cookie-policy",
    "/cyber-security-it-policy",
    "/data-breach-policy",
    "/data-protection-gdpr-policy",
    "/data-retention-policy",
    "/engineering-recruitment-agency",
    "/environmental-carbon-policy",
    "/equality-diversity-policy",
    "/health-safety-policy",
    "/human-review-statement",
    "/information-security-policy",
    "/integrations",
    "/job-search",
    "/modern-slavery-policy",
    "/news",
    "/open-credit-account",
    "/our-process",
    "/parmanent-staff",
    "/place-enquiry",
    "/privacy-policy",
    "/renewable-energy-recruitment-agency",
    "/right-to-work-policy",
    "/safeguarding-policy",
    "/sectors/commercial",
    "/sectors/construction",
    "/sectors/education",
    "/sectors/engineering",
    "/sectors/healthcare",
    "/sectors/it-tech",
    "/sectors/logistics",
    "/sectors/renewables",
    "/security",
    "/services",
    "/temporary-staff",
    "/terms-of-use",
    "/verify-supplier",
    "/verify-supplier-form",
    "/whistleblowing-policy",
    "/why-choose-us"
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  let jobUrls: MetadataRoute.Sitemap = [];

  try {
    const data = await api.get<ApiResponse>("/core/live/jobads");
    if (data && Array.isArray(data.items)) {
      jobUrls = data.items.map((job) => {
        const identifier = job.slug || job.adId.toString();
        // URL-encode special characters in the slug/ID path segment
        const encodedIdentifier = encodeURIComponent(identifier);
        
        return {
          url: `${baseUrl}/job-search/${encodedIdentifier}`,
          lastModified: job.postAt ? new Date(job.postAt) : new Date(),
          changeFrequency: "daily" as const,
          priority: 0.7,
        };
      });
    }
  } catch (error) {
    console.error("Failed to fetch jobs for sitemap generation:", error);
  }

  const locationUrls: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}${city.path}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...locationUrls, ...jobUrls];
}
