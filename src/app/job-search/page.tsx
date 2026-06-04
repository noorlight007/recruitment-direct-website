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
  industry?: string | null;
  category?: string | null;
  job_type?: string | null;
}

export default function JobSearchPage() {
  const [keyword, setKeyword] = useState("");
  const [activeSearchTerm, setActiveSearchTerm] = useState("");
  const [jobListings, setJobListings] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
    const jt = job.job_type;
    // if (!jt) return "Temporary / Contract";
    // if (jt.toLowerCase() === "temp") return "Temporary";
    // if (jt.toLowerCase() === "perm") return "Permanent";
    return jt;
  };

  const getJobCategory = (job: Job): string => {
    return job.category || "";
  };

  const getJobIndustry = (job: Job): string => {
    return job.industry || "";
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

  // Initial load: fetches ads then ends loading
  useEffect(() => {
    async function loadJobs() {
      try {
        setLoading(true);
        setError(null);
        const data = await api.get("/core/live/jobads");
        if (data && data.items) {
          setJobListings(data.items);

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
  }, [activeSearchTerm, jobListings]);

  function handleSearch() {
    setActiveSearchTerm(keyword);
  }

  return (
    <div className="min-h-screen bg-white relative flex flex-col justify-between overflow-x-hidden">
      <FloatingElements />
      <Navbar />

      <main className="min-h-screen bg-white text-black pt-16 md:pt-10 flex-grow">
        <section className="mx-auto max-w-6xl px-5 py-6">
          {/* Step 1: Add breadcrumb at the top-left "Home -> Job Search" */}
          <nav className="text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-yellow-600 transition">Home</a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">Job Search</span>
          </nav>

          {/* Step 2: No title, just the search bar, same search bar, but lower in size. */}
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-md max-w-3xl">
            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                type="text"
                name="keyword"
                placeholder="Search jobs by keyword..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className="h-12 w-full rounded-xl border border-gray-300 px-4 text-base outline-none transition focus:border-yellow-600"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="h-6 rounded-xl border border-yellow-700 bg-gradient-to-b from-yellow-300 to-yellow-600 px-8 text-base font-black uppercase text-black shadow-sm transition hover:opacity-90 cursor-pointer flex items-center justify-center"
              >
                Search
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
            {/* Step 3: Each row will show two Job Ad, reduce size of texts in each card */}
            <div className="grid gap-6 md:grid-cols-2">
              {filteredJobs.map((job) => (
                <article
                  key={job.adId}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-xl font-bold leading-snug text-black">
                      {getJobAdCleanTitle(job)}
                    </h2>
                    
                    <p className="text-sm font-semibold text-gray-600 mt-1">
                      {getJobAdPayRate(job)} &bull; {getJobAdLocation(job)}
                    </p>

                    <div className="my-3 border-t border-gray-200" />

                    <div className="space-y-1 text-sm text-gray-600">
                      {getJobType(job) && (
                        <p><span className="font-bold text-gray-850">Job Type:</span> {getJobType(job)}</p>
                      )}
                      {getJobCategory(job) && (
                        <p><span className="font-bold text-gray-850">Category:</span> {getJobCategory(job)}</p>
                      )}
                      {getJobIndustry(job) && (
                        <p><span className="font-bold text-gray-850">Industry:</span> {getJobIndustry(job)}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500">Posted</p>
                        <p className="text-sm font-bold text-black">{formatDate(job.postAt)}</p>
                      </div>

                      <a
                        href={`/job-search/${job.adId}`}
                        className="inline-flex h-10 items-center justify-center rounded-lg border border-yellow-700 bg-gradient-to-b from-yellow-300 to-yellow-600 px-6 text-sm font-black uppercase text-black shadow-sm transition hover:opacity-90"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-lg font-bold shadow-md text-black mt-4">
                No jobs found.
              </div>
            )}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
