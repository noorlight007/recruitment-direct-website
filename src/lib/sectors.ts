export const sectorUrls: Record<string, string> = {
  "construction": "/construction-recruitment-agency",
  "engineering": "/engineering-recruitment-agency",
  "renewable-energy": "/renewable-energy-recruitment-agency",
  "healthcare": "/healthcare-recruitment-agency",
  "education": "/education-recruitment-agency",
  "hospitality": "/hospitality-recruitment-agency",
  "logistics": "/logistics-recruitment-agency",
  "it-technology": "/it-technology-recruitment-agency",
  "it-tech": "/it-technology-recruitment-agency",
  "commercial-office": "/commercial-office-recruitment-agency",
  "commercial": "/commercial-office-recruitment-agency",
};

export function getSectorHref(slug: string): string | null {
  if (!slug) return null;
  const normalized = slug.toLowerCase();
  return sectorUrls[normalized] || null;
}
