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

  const getPostedTimeAgo = (dateStr: string): string => {
    try {
      const postDate = new Date(dateStr);
      if (isNaN(postDate.getTime())) return dateStr;
      
      const now = new Date();
      const d1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
      const d2 = Date.UTC(postDate.getFullYear(), postDate.getMonth(), postDate.getDate());
      const diffDays = Math.floor((d1 - d2) / (1000 * 60 * 60 * 24));
      
      if (diffDays <= 0) return "Posted today";
      if (diffDays === 1) return "Posted 1 day ago";
      return `Posted ${diffDays} days ago`;
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

      <main className="min-h-screen bg-[#f7f8fb] text-[#06142f] pt-2 md:pt-2 flex-grow">
        <section className="rduk-latest-jobs">
          <div className="jobs-container">
            <div className="jobs-header">
              <h1>Latest Jobs</h1>

              <form 
                className="jobs-search" 
                id="jobsSearch"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
              >
                <input
                  type="text"
                  id="jobKeyword"
                  placeholder="Search our live jobs"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button type="submit">Search</button>
              </form>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-12 h-12 text-[#06142f] animate-spin mr-3" />
                <span className="text-xl font-bold text-gray-600">Syncing with live jobs feed...</span>
              </div>
            ) : error ? (
              <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-xl font-bold text-red-700 shadow-md">
                {error}
              </div>
            ) : (
              <div className="jobs-list" id="jobsList">
                {filteredJobs.map((job) => (
                  <article 
                    key={job.adId}
                    className="job-card" 
                    data-search={`${getJobAdCleanTitle(job)} ${getJobAdLocation(job)} ${getJobType(job)} ${getJobCategory(job)} ${getJobIndustry(job)}`.toLowerCase()}
                  >
                    <div className="job-main">
                      <h2>{getJobAdCleanTitle(job)}</h2>
                      <p>{getJobAdLocation(job)}</p>
                      <span>{getPostedTimeAgo(job.postAt)}</span>
                    </div>
                    <div className="job-side">
                      <strong>{getJobAdPayRate(job)}</strong>
                      <a href={`/job-search/${job.adId}`} className="view-job">View Job</a>
                    </div>
                  </article>
                ))}

                {filteredJobs.length === 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-8 text-xl font-bold shadow-md text-[#06142f]">
                    No jobs found.
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <style dangerouslySetInnerHTML={{
          __html: `
        .rduk-latest-jobs {
          background: #f7f8fb !important;
          padding: 60px 20px !important;
          font-family: Inter, Arial, sans-serif !important;
          color: #06142f !important;
        }

        .rduk-latest-jobs .jobs-container {
          max-width: 1180px !important;
          margin: 0 auto !important;
        }

        .rduk-latest-jobs .jobs-header {
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          gap: 28px !important;
          margin-bottom: 30px !important;
        }

        .rduk-latest-jobs .jobs-header h1 {
          margin: 0 !important;
          font-size: 48px !important;
          font-weight: 800 !important;
          letter-spacing: -1px !important;
          color: #06142f !important;
          text-transform: none !important;
        }

        .rduk-latest-jobs .jobs-search {
          display: flex !important;
          width: 500px !important;
          background: #ffffff !important;
          border: 1px solid #d8dce5 !important;
          border-radius: 8px !important;
          overflow: hidden !important;
        }

        .rduk-latest-jobs .jobs-search input {
          flex: 1 !important;
          border: 0 !important;
          padding: 17px 20px !important;
          font-size: 16px !important;
          outline: none !important;
          background: #ffffff !important;
          color: #06142f !important;
        }

        .rduk-latest-jobs .jobs-search button {
          border: 0 !important;
          background: #06142f !important;
          color: #ffffff !important;
          padding: 0 30px !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          cursor: pointer !important;
          height: auto !important;
          width: auto !important;
          border-radius: 0 !important;
        }

        .rduk-latest-jobs .jobs-list {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
        }

        .rduk-latest-jobs .job-card {
          background: #ffffff !important;
          border: 1px solid #e0e3ea !important;
          border-radius: 10px !important;
          padding: 20px 26px !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          gap: 28px !important;
          box-shadow: 0 8px 22px rgba(6, 20, 47, 0.045) !important;
          transform: none !important;
        }

        .rduk-latest-jobs .job-main h2 {
          margin: 0 0 7px !important;
          font-size: 23px !important;
          font-weight: 800 !important;
          color: #06142f !important;
          text-transform: none !important;
        }

        .rduk-latest-jobs .job-main p {
          margin: 0 0 7px !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          color: #06142f !important;
        }

        .rduk-latest-jobs .job-main span {
          font-size: 14px !important;
          color: #536078 !important;
          display: inline-block !important;
        }

        .rduk-latest-jobs .job-side {
          display: flex !important;
          align-items: center !important;
          gap: 28px !important;
          min-width: 250px !important;
          justify-content: flex-end !important;
        }

        .rduk-latest-jobs .job-side strong {
          font-size: 23px !important;
          font-weight: 800 !important;
          white-space: nowrap !important;
          color: #06142f !important;
        }

        .rduk-latest-jobs .view-job {
          background: linear-gradient(180deg, #ffe384 0%, #e4a914 100%) !important;
          color: #06142f !important;
          text-decoration: none !important;
          font-weight: 800 !important;
          border-radius: 7px !important;
          padding: 13px 28px !important;
          border: 1px solid #d79a00 !important;
          white-space: nowrap !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .rduk-latest-jobs .view-job:hover {
          filter: brightness(1.05) !important;
        }

        @media (max-width: 768px) {
          .rduk-latest-jobs {
            padding: 35px 16px !important;
          }

          .rduk-latest-jobs .jobs-header {
            display: block !important;
            margin-bottom: 22px !important;
          }

          .rduk-latest-jobs .jobs-header h1 {
            font-size: 36px !important;
            margin-bottom: 16px !important;
          }

          .rduk-latest-jobs .jobs-search {
            width: 100% !important;
          }

          .rduk-latest-jobs .jobs-search input {
            padding: 15px !important;
          }

          .rduk-latest-jobs .jobs-search button {
            padding: 0 18px !important;
          }

          .rduk-latest-jobs .job-card {
            display: block !important;
            padding: 18px !important;
          }

          .rduk-latest-jobs .job-main h2 {
            font-size: 21px !important;
          }

          .rduk-latest-jobs .job-side {
            margin-top: 16px !important;
            min-width: 0 !important;
            justify-content: space-between !important;
            gap: 14px !important;
          }

          .rduk-latest-jobs .job-side strong {
            font-size: 21px !important;
          }

          .rduk-latest-jobs .view-job {
            padding: 12px 20px !important;
          }
        }
        ` }} />
      </main>

      <Footer />
    </div>
  );
}
