import type { Metadata } from "next";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import JobSearchClient from "./JobSearchClient";
import { api } from "@/services/api";

export const metadata: Metadata = {
  title: "Job Search | Temporary, Contract & Permanent Roles | Recruitment Direct UK",
  description: "Search live job vacancies across Scotland and the UK with Recruitment Direct UK. Find roles in Construction, Logistics, Healthcare, Education, and Engineering.",
  alternates: {
    canonical: "https://rd1.co.uk/job-search",
  },
  openGraph: {
    title: "Job Search | Temporary, Contract & Permanent Roles | Recruitment Direct UK",
    description: "Search live job vacancies across Scotland and the UK with Recruitment Direct UK. Find roles in Construction, Logistics, Healthcare, Education, and Engineering.",
    url: "https://rd1.co.uk/job-search",
    type: "website",
    images: [
      {
        url: "https://rd1.co.uk/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Job Search - Recruitment Direct UK Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Search | Temporary, Contract & Permanent Roles | Recruitment Direct UK",
    description: "Search live job vacancies across Scotland and the UK with Recruitment Direct UK.",
  },
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined };

export default async function JobSearchPage(props: { searchParams: SearchParams }) {
  const resolvedSearchParams = await props.searchParams;
  const q = typeof resolvedSearchParams.q === "string" ? resolvedSearchParams.q : undefined;

  const queryClient = new QueryClient();

  // Prefetch job ads on the server so they are ready before page rendering starts
  await queryClient.prefetchQuery({
    queryKey: ["jobads"],
    queryFn: () => api.get("/core/live/jobads"),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <JobSearchClient initialSearchTerm={q} />
    </HydrationBoundary>
  );
}
