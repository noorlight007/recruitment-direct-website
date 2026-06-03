"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { api } from "@/services/api";
import { Loader2 } from "lucide-react";

interface Job {
  adId: number;
  state: string;
  title: string;
  reference: string;
  summary: string;
  bulletPoints: string[];
  owner?: {
    userId: number;
    firstName: string;
    lastName: string;
    position: string;
    jobTitle: string;
    email: string;
    phone: string;
    mobile: string;
  };
  postAt: string;
  expireAt: string;
  links?: {
    self: string;
    applications: string;
  };
}

export default function JobSearchPage() {
  const [keyword, setKeyword] = useState("");
  const [activeSearchTerm, setActiveSearchTerm] = useState("");
  const [jobListings, setJobListings] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<Record<number, string>>({});

  // Dynamic extractors & helpers to map real API data to UI structure
  const getJobAdLocation = (job: Job): string => {
    if (job.title && job.title.includes("|")) {
      const parts = job.title.split("|").map(p => p.trim());
      if (parts.length >= 3) return parts[2];
      if (parts.length === 2 && !parts[1].includes("hour") && !parts[1].includes("£")) return parts[1];
    }
    if (job.bulletPoints && job.bulletPoints.length > 0) {
      for (const bp of job.bulletPoints) {
        if (
          bp.includes(",") ||
          bp.toLowerCase().includes("scotland") ||
          bp.toLowerCase().includes("edinburgh") ||
          bp.toLowerCase().includes("glasgow") ||
          bp.toLowerCase().includes("lanark") ||
          bp.toLowerCase().includes("stirling") ||
          bp.toLowerCase().includes("ayrshire") ||
          bp.toLowerCase().includes("kilmarnock") ||
          bp.toLowerCase().includes("greenock")
        ) {
          return bp;
        }
      }
    }
    return job.reference && isNaN(Number(job.reference)) ? job.reference : "Scotland / UK";
  };

  const getJobAdPayRate = (job: Job): string => {
    if (job.title && job.title.includes("|")) {
      const parts = job.title.split("|").map(p => p.trim());
      if (parts.length >= 2) return parts[1];
    }
    return "Competitive Rate";
  };

  const getJobAdCleanTitle = (job: Job): string => {
    if (job.title && job.title.includes("|")) {
      return job.title.split("|")[0].trim();
    }
    return job.title;
  };

  const getJobType = (job: Job): string => {
    const text = `${job.title} ${job.summary} ${job.bulletPoints?.join(" ") || ""}`.toLowerCase();
    if (text.includes("temporary") || text.includes("temp")) return "Temporary";
    if (text.includes("contract")) return "Contract";
    if (text.includes("permanent") || text.includes("perm")) return "Permanent";
    return "Temporary / Contract";
  };

  const getJobCategory = (job: Job): string => {
    if (categories[job.adId]) {
      return categories[job.adId];
    }
    // const title = job.title.toLowerCase();
    // if (title.includes("driver") || title.includes("hgv") || title.includes("lgv")) return "Logistics & Transport";
    // if (title.includes("admin") || title.includes("office") || title.includes("clerical")) return "Administration";
    // if (title.includes("operator") || title.includes("machine") || title.includes("factory")) return "Industrial & Manufacturing";
    // if (title.includes("cleaner") || title.includes("cleaning")) return "Facilities & Cleaning";
    // if (title.includes("joiner") || title.includes("bricklayer") || title.includes("construction") || title.includes("scaffolder")) return "Construction & Trades";
    // return "General Recruitment";
  };

  const getJobIndustry = (job: Job): string => {
    const title = job.title.toLowerCase();
    if (title.includes("driver") || title.includes("hgv") || title.includes("lgv")) return "Logistics / Transport";
    if (title.includes("joiner") || title.includes("bricklayer") || title.includes("construction") || title.includes("scaffolder")) return "Construction";
    if (title.includes("nurse") || title.includes("care") || title.includes("support")) return "Healthcare";
    return "Staffing & Recruiting";
  };

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  // Initial load: fetches ads, fetches categories, then ends loading
  useEffect(() => {
    async function loadJobs() {
      try {
        setLoading(true);
        setError(null);
        const data = await api.get("/core/live/jobads");
        if (data && data.items) {
          const items = data.items;
          const loadedCategories: Record<number, string> = {};

          // Fetch category for each item concurrently
          await Promise.all(
            items.map(async (job: Job) => {
              try {
                const adDetail = await api.get(`/core/live/jobads/${job.adId}`);
                const jobId = adDetail?.job?.jobId;
                if (jobId) {
                  const jobDetail = await api.get(`/core/live/jobs/${jobId}`);
                  if (jobDetail?.category?.name) {
                    loadedCategories[job.adId] = jobDetail.category.name;
                  }
                }
              } catch (err) {
                console.error(`Failed to fetch details/category for job ${job.adId}`, err);
              }
            })
          );

          setCategories(loadedCategories);
          setJobListings(items);

          // Check URL query parameters
          const params = new URLSearchParams(window.location.search);
          const query = params.get("q");
          if (query) {
            setKeyword(query);
            setActiveSearchTerm(query);
          }
        } else {
          setJobListings([]);
        }
      } catch (err: any) {
        console.error("Job feed failed to load", err);
        setError("Unable to load live jobs. Please check your connection or try again later.");
        setJobListings([]);
      } finally {
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  // Reactive filter effect
  useEffect(() => {
    const searchTerm = activeSearchTerm.toLowerCase().trim();

    if (!searchTerm) {
      setFilteredJobs(jobListings);
      return;
    }

    const results = jobListings.filter((job) => {
      const payRate = getJobAdPayRate(job);
      const location = getJobAdLocation(job);
      const jobType = getJobType(job);
      const category = getJobCategory(job);
      const industry = getJobIndustry(job);
      return `${getJobAdCleanTitle(job)} ${payRate} ${location} ${jobType} ${category} ${industry}`
        .toLowerCase()
        .includes(searchTerm);
    });

    setFilteredJobs(results);
  }, [activeSearchTerm, jobListings, categories]);

  function handleSearch() {
    setActiveSearchTerm(keyword);
  }

  return (
    <div className="min-h-screen bg-white relative flex flex-col justify-between overflow-x-hidden">
      <FloatingElements />
      <Navbar />

      <main className="min-h-screen bg-white text-black pt-28 md:pt-36 flex-grow">
        <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Job Search
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-9 text-gray-600">
            Search live temporary, contract and permanent opportunities across
            Scotland and the UK. Updated in real-time by Recruitment Direct.
          </p>

          <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">
            <label className="mb-4 block text-xl font-black">Keyword</label>

            <div className="grid gap-4 md:grid-cols-[1fr_auto]">
              <input
                type="text"
                name="keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className="h-16 rounded-xl border border-gray-300 px-6 text-xl outline-none transition focus:border-yellow-600"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="h-10 rounded-xl border border-yellow-700 bg-gradient-to-b from-yellow-300 to-yellow-600 px-10 text-xl font-black uppercase text-black shadow-md transition hover:opacity-90 cursor-pointer"
              >
                Search Jobs
              </button>
            </div>
          </div>
        </section>

        {loading ? (
          <section className="mx-auto max-w-6xl px-5 pb-16 flex items-center justify-center py-12">
            <Loader2 className="w-12 h-12 text-yellow-600 animate-spin mr-3" />
            <span className="text-xl font-bold text-gray-600">Syncing with live jobs feed...</span>
          </section>
        ) : error ? (
          <section className="mx-auto max-w-6xl px-5 pb-16 text-center">
            <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-xl font-bold text-red-700 shadow-lg">
              {error}
            </div>
          </section>
        ) : (
          <section className="mx-auto max-w-6xl px-5 pb-16">
            <div className="space-y-8">
              {filteredJobs.map((job) => (
                <article
                  key={job.adId}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg md:p-8"
                >
                  <h2 className="text-3xl font-black leading-tight md:text-4xl text-black">
                    {getJobAdCleanTitle(job)} / {getJobAdPayRate(job)} / {getJobAdLocation(job)}
                  </h2>

                  <div className="my-6 border-t border-gray-200" />

                  <div className="space-y-4 text-xl text-gray-700">
                    {/* <p className="font-semibold text-black">Temporary, Permanent or Contract</p> */}
                    <p><span className="font-bold text-black">Job Type:</span> {getJobType(job)}</p>
                    <p><span className="font-bold text-black">Category:</span> {getJobCategory(job)}</p>
                    {/* <p><span className="font-bold text-black">Industry:</span> {getJobIndustry(job)}</p> */}
                  </div>

                  <div className="mt-5 border-t border-gray-200 pt-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-lg text-gray-500">Posted</p>
                        <p className="text-2xl font-black text-black">{formatDate(job.postAt)}</p>
                      </div>

                      <a
                        href={`/job-search/${job.adId}`}
                        className="inline-flex h-16 items-center justify-center rounded-xl border border-yellow-700 bg-gradient-to-b from-yellow-300 to-yellow-600 px-10 text-xl font-black uppercase text-black shadow-md transition hover:opacity-90"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </article>
              ))}

              {filteredJobs.length === 0 && (
                <div className="rounded-3xl border border-gray-200 bg-white p-8 text-xl font-bold shadow-lg text-black">
                  No jobs found.
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
