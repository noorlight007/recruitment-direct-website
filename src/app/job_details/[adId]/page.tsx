import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import { api } from "@/services/api";
import {
  type JobDetails,
  getJobAdLocation,
  getJobAdCleanTitle,
  getJobAdPayRate,
  getJobAdWorkType,
} from "@/lib/jobAd";
import JobDetailsClient from "./JobDetailsClient";

export const revalidate = 300;

const BASE_URL = "https://rd1.co.uk";

const extractNumericId = (slug: string): string => {
  const decoded = decodeURIComponent(slug);
  if (/^\d+$/.test(decoded)) return decoded;
  const match = decoded.match(/-(\d+)$/);
  return match ? match[1] : decoded;
};

type LoadResult =
  | { status: "ok"; job: JobDetails }
  | { status: "missing" }
  | { status: "error" };

// Cached per request so generateMetadata and the page share one fetch.
const loadJob = cache(async (adId: string): Promise<LoadResult> => {
  try {
    const data = await api.get<JobDetails>(`/core/live/jobads/${adId}`);
    if (!data || !data.adId) return { status: "missing" };

    try {
      const list = await api.get<{ items?: any[] }>("/core/live/jobads");
      const match = list?.items?.find((item) => item.adId === Number(adId));
      if (match) {
        data.industry = match.industry;
        data.category = match.category;
        data.job_type = match.job_type;
      }
    } catch {
      // Optional enrichment only.
    }
    return { status: "ok", job: data };
  } catch (err: any) {
    if (/status: (404|410)/.test(String(err?.message))) return { status: "missing" };
    return { status: "error" };
  }
});

const isExpired = (job: JobDetails): boolean => {
  if (!job.expireAt) return false;
  const t = new Date(job.expireAt).getTime();
  return !isNaN(t) && t < Date.now();
};

const toIsoDate = (value?: string): string | undefined => {
  if (!value) return undefined;
  const d = new Date(value);
  return isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
};

const clip = (text: string, max: number): string =>
  text.length <= max ? text : text.slice(0, max - 1).trimEnd() + "…";

type Params = { params: Promise<{ adId: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { adId: slug } = await params;
  const result = await loadJob(extractNumericId(slug));
  const canonical = `${BASE_URL}/job_details/${slug}`;

  if (result.status !== "ok") {
    return {
      title: "Job Vacancy | Recruitment Direct UK",
      robots: { index: false, follow: true },
      alternates: { canonical },
    };
  }

  const { job } = result;
  const title = getJobAdCleanTitle(job);
  const location = getJobAdLocation(job);
  const pay = getJobAdPayRate(job);
  const type = getJobAdWorkType(job);
  const payPart = pay && pay !== "Competitive Rate" ? `, ${pay}` : "";

  const pageTitle = `${title} Job in ${location} | Recruitment Direct UK`;
  const description = clip(
    `${title} in ${location}${payPart}. ${type} role via Recruitment Direct UK. Apply online today.`,
    160
  );

  return {
    title: pageTitle,
    description,
    alternates: { canonical },
    robots: isExpired(job) ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      title: pageTitle,
      description,
      url: canonical,
      images: [{ url: `${BASE_URL}/images/og-image.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title: pageTitle, description },
  };
}

const EMPLOYMENT_TYPES: Record<string, string> = {
  temporary: "TEMPORARY",
  "ongoing temporary": "TEMPORARY",
  contract: "CONTRACTOR",
  permanent: "FULL_TIME",
};

function buildJsonLd(job: JobDetails, slug: string) {
  const title = getJobAdCleanTitle(job);
  const location = getJobAdLocation(job);
  const pay = getJobAdPayRate(job);
  const employmentType = EMPLOYMENT_TYPES[getJobAdWorkType(job).toLowerCase()];
  const rate = pay.match(/£\s*(\d+(?:\.\d+)?)/);

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description: job.description || job.summary || title,
    datePosted: toIsoDate(job.postAt),
    validThrough: toIsoDate(job.expireAt),
    ...(employmentType && { employmentType }),
    hiringOrganization: {
      "@type": "Organization",
      name: "Recruitment Direct UK Ltd",
      sameAs: BASE_URL,
      logo: `${BASE_URL}/images/og-image.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: location, addressCountry: "GB" },
    },
    ...(rate && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "GBP",
        value: { "@type": "QuantitativeValue", value: Number(rate[1]), unitText: "HOUR" },
      },
    }),
    url: `${BASE_URL}/job_details/${slug}`,
  };
}

export default async function JobDetailsPage({ params }: Params) {
  const { adId: slug } = await params;
  const result = await loadJob(extractNumericId(slug));

  // Unknown or removed ads return a 404 so Google drops them. On a transient
  // API error, fall back to client-side loading (metadata is noindex).
  if (result.status === "missing") notFound();

  const job = result.status === "ok" ? result.job : null;
  const jsonLd = job && !isExpired(job) ? buildJsonLd(job, slug) : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      )}
      <JobDetailsClient initialJob={job} />
    </>
  );
}
