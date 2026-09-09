import { permanentRedirect, notFound } from "next/navigation";
import { extractIdFromSlug, createJobSlug, fetchJobById, getJobAdLocation } from "@/lib/job-utils";

interface PageProps {
  params: Promise<{ adId: string }> | { adId: string };
}

export default async function LegacyJobDetailsPage(props: PageProps) {
  const resolvedParams = await props.params;
  const numericId = extractIdFromSlug(resolvedParams.adId);

  if (!numericId) {
    notFound();
  }

  const job = await fetchJobById(numericId);

  if (!job) {
    // If job expired or not found, redirect to main live job search
    permanentRedirect("/job-search");
  }

  const location = getJobAdLocation(job);
  const cleanSlug = createJobSlug(job.title, location, job.adId);

  // 301 Permanent Redirect to canonical /jobs/{slug} pattern
  permanentRedirect(`/jobs/${cleanSlug}`);
}
