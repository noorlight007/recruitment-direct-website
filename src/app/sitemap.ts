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
    "/ai-automated-decision-making-policy",
    "/ai-hire-now",
    "/ai-hire-now-form",
    "/ai-hire-now-statement",
    "/ai-recruitment",
    "/ai-screening-call-statement",
    "/ai-transparency-statement",
    "/ai-verify-cis",
    "/ai-volume-hiring",
    "/anti-bribery-corruption-policy",
    "/anti-harassment-sexual-harassment-policy",
    "/awr-compliance-statement",
    "/bias-fairness-statement",
    "/business-continuity-policy",
    "/callpilot",
    "/candidate-privacy-notice",
    "/carbon-reduction-plan",
    "/civil-engineering-recruitment-agency",
    "/client-privacy-notice",
    "/clients",
    "/complaints-policy",
    "/conflict-of-interest-policy",
    "/construction-recruitment-agency",
    "/contact",
    "/contract-staff",
    "/cookie-policy",
    "/cyber-security-it-policy",
    "/data-breach-policy",
    "/data-breach-response-procedure",
    "/data-protection-gdpr-policy",
    "/data-retention-policy",
    "/education-recruitment-agency",
    "/engineering-recruitment-agency",
    "/environmental-sustainability-policy",
    "/equality-diversity-inclusion-policy",
    "/facilities-management-recruitment-agency",
    "/find-staff",
    "/framework-and-tender-compliance",
    "/glaa-licence-statement",
    "/health-safety-policy",
    "/healthcare-recruitment-agency",
    "/hospitality-recruitment-agency",
    "/human-review-statement",
    "/information-security-policy",
    "/insurance-statement-of-cover",
    "/integrations",
    "/ir35-off-payroll-statement",
    "/it-technology-recruitment-agency",
    "/job-search",
    "/locations",
    "/logistics-recruitment-agency",
    "/lone-working-policy",
    "/modern-slavery-policy",
    "/national-minimum-wage-holiday-pay-policy",
    "/news",
    "/open-credit-account",
    "/our-process",
    "/permanent-staff",
    "/policies-and-compliance",
    "/privacy-policy",
    "/prompt-payment-policy",
    "/quality-policy",
    "/rec-code-of-practice-statement",
    "/renewable-energy-recruitment-agency",
    "/right-to-work-policy",
    "/risk-management-policy",
    "/safeguarding-policy",
    "/safer-recruitment-vetting-policy",
    "/sectors",
    "/commercial-office-recruitment-agency",
    "/security",
    "/services",
    "/social-value-statement",
    "/subject-access-request-procedure",
    "/supplier-subcontractor-due-diligence-policy",
    "/talent-acquisition-consultancy",
    "/temporary-staff",
    "/terms-of-use",
    "/tupe-policy",
    "/umbrella-company-due-diligence-policy",
    "/verify-supplier",
    "/verify-supplier-form",
    "/whistleblowing-policy",
    "/why-choose-us",
    "/working-time-regulations-policy"
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : path.includes("policy") || path.includes("statement") || path.includes("plan") ? 0.8 : 0.8,
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
          url: `${baseUrl}/job_details/${encodedIdentifier}`,
          lastModified: job.postAt ? new Date(job.postAt) : new Date(),
          changeFrequency: "daily" as const,
          priority: 0.7,
        };
      });
    }
  } catch (error) {
    console.error("Failed to fetch jobs for sitemap generation:", error);
  }

  // Include all country landing pages
  const countries = Array.from(new Set(cities.map((city) => city.countrySlug)));
  const countryUrls: MetadataRoute.Sitemap = countries.map((countrySlug) => ({
    url: `${baseUrl}/locations/${countrySlug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Include all cities (hubs and spoke towns)
  const locationUrls: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}${city.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...countryUrls, ...locationUrls, ...jobUrls];
}
