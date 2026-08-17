import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import JobSearchClient from "./JobSearchClient";
import { api } from "@/services/api";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined };

export default async function JobSearchPage(props: { searchParams: SearchParams }) {
  // Await searchParams as it can be a Promise in newer Next.js versions (e.g. Next.js 15+)
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
