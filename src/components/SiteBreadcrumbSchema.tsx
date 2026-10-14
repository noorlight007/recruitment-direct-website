"use client";

import { usePathname } from "next/navigation";

const SITE = "https://rd1.co.uk";
const POLICIES = { name: "Policies & Compliance", path: "/policies-and-compliance" };

// Pages that don't emit their own BreadcrumbList. Parent is the policies hub for
// policy-type pages and Home for everything else.
const PAGES: Record<string, { name: string; parent?: typeof POLICIES }> = {
  "/about": { name: "About Us" },
  "/accreditations": { name: "Accreditations" },
  "/ai-hire-now": { name: "AI Hire Now" },
  "/ai-hire-now-statement": { name: "AI Hire Now Statement", parent: POLICIES },
  "/ai-recruitment": { name: "AI Recruitment" },
  "/ai-screening-call-statement": { name: "AI Screening Call Statement", parent: POLICIES },
  "/ai-transparency-statement": { name: "AI Transparency Statement", parent: POLICIES },
  "/ai-verify-cis": { name: "AI Verify CIS" },
  "/ai-volume-hiring": { name: "AI Volume Hiring" },
  "/bias-fairness-statement": { name: "Bias & Fairness Statement", parent: POLICIES },
  "/candidate-privacy-notice": { name: "Candidate Privacy Notice", parent: POLICIES },
  "/client-privacy-notice": { name: "Client Privacy Notice", parent: POLICIES },
  "/clients": { name: "Clients" },
  "/complaints-policy": { name: "Complaints Policy", parent: POLICIES },
  "/contact": { name: "Contact Us" },
  "/contract-staff": { name: "Contract Staff" },
  "/cookie-policy": { name: "Cookie Policy", parent: POLICIES },
  "/cyber-security-it-policy": { name: "Cyber Security & IT Policy", parent: POLICIES },
  "/data-breach-policy": { name: "Data Breach Policy", parent: POLICIES },
  "/data-protection-gdpr-policy": { name: "Data Protection & GDPR Policy", parent: POLICIES },
  "/equality-diversity-inclusion-policy": { name: "Equality, Diversity & Inclusion Policy", parent: POLICIES },
  "/find-staff": { name: "Find Staff" },
  "/framework-and-tender-compliance": { name: "Framework & Tender Compliance", parent: POLICIES },
  "/human-review-statement": { name: "Human Review Statement", parent: POLICIES },
  "/information-security-policy": { name: "Information Security Policy", parent: POLICIES },
  "/integrations": { name: "Integrations" },
  "/job-search": { name: "Job Search" },
  "/modern-slavery-policy": { name: "Modern Slavery Policy", parent: POLICIES },
  "/news": { name: "News & Insights" },
  "/open-credit-account": { name: "Open a Credit Account" },
  "/our-process": { name: "Our Process" },
  "/permanent-staff": { name: "Permanent Staff" },
  "/policies-and-compliance": { name: "Policies & Compliance" },
  "/privacy-policy": { name: "Privacy Policy", parent: POLICIES },
  "/sectors": { name: "Sectors" },
  "/commercial-office-recruitment-agency": { name: "Commercial & Office Recruitment" },
  "/security": { name: "Security" },
  "/services": { name: "Services" },
  "/temporary-staff": { name: "Temporary Staff" },
  "/terms-of-use": { name: "Terms of Use", parent: POLICIES },
  "/verify-supplier": { name: "Verify Supplier" },
  "/why-choose-us": { name: "Why Choose Us" },
};

export default function SiteBreadcrumbSchema() {
  const pathname = (usePathname() || "").replace(/\/$/, "");
  const page = PAGES[pathname];
  if (!page) return null;

  const trail = [{ name: "Home", url: SITE }];
  if (page.parent) trail.push({ name: page.parent.name, url: SITE + page.parent.path });
  trail.push({ name: page.name, url: SITE + pathname });

  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: t.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
