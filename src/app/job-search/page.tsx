"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { api } from "@/services/api";
import { Loader2, MapPin, ChevronRight, Search } from "lucide-react";

interface Job {
  adId: number;
  state: string;
  title: string;
  reference: string;
  location: string;
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
    return job.location && isNaN(Number(job.location)) ? job.location : "Scotland / UK";
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
    if (!jt) return "";
    if (jt.toLowerCase() === "temp") return "Temporary";
    if (jt.toLowerCase() === "perm") return "Permanent";
    return jt;
  };

  const getJobCategory = (job: Job): string => {
    return job.category || "";
  };

  const getJobIndustry = (job: Job): string => {
    return job.industry || "";
  };

  const parsePayRate = (payRate: string): { amount: string; frequency: string } => {
    const clean = payRate.trim();
    if (clean.toLowerCase() === "competitive rate") {
      return { amount: "Competitive", frequency: "Rate" };
    }
    
    const match = clean.match(/^£\s*(\d+(?:\.\d+)?)\s*(?:ph|per hour|h)?/i);
    if (match) {
      let val = match[1];
      if (!val.includes(".")) {
        val = val + ".00";
      } else {
        const decimals = val.split(".")[1];
        if (decimals.length === 1) {
          val = val + "0";
        }
      }
      return { amount: `£${val}`, frequency: "per hour" };
    }
    
    return { amount: clean, frequency: "" };
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
      let hasCache = false;
      try {
        // Try to load cached jobs from localStorage for instant display
        const cached = localStorage.getItem("rduk_cached_jobs");
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setJobListings(parsed);
              setLoading(false);
              hasCache = true;
            }
          } catch (e) {
            console.error("Failed to parse cached jobs", e);
          }
        }

        if (!hasCache) {
          setLoading(true);
        }
        setError(null);

        const data = await api.get("/core/live/jobads");
        if (data && data.items) {
          setJobListings(data.items);
          localStorage.setItem("rduk_cached_jobs", JSON.stringify(data.items));

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
        if (!hasCache) {
          setError("Unable to load live jobs. Please check your connection or try again later.");
          setJobListings([]);
        }
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
                <div className="search-input-wrapper">
                  <Search className="search-icon" />
                  <input
                    type="text"
                    id="jobKeyword"
                    placeholder="Search our live jobs"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
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
                      <p className="job-location">
                        <MapPin className="location-icon" />
                        {getJobAdLocation(job)}
                      </p>
                      
                      {(getJobType(job) || getJobCategory(job) || getJobIndustry(job)) && (
                        <div className="job-tags">
                          {getJobType(job) && (
                            <span className="job-tag job-tag-type">{getJobType(job)}</span>
                          )}
                          {getJobCategory(job) && (
                            <span className="job-tag job-tag-category">{getJobCategory(job)}</span>
                          )}
                          {getJobIndustry(job) && (
                            <span className="job-tag job-tag-industry">{getJobIndustry(job)}</span>
                          )}
                        </div>
                      )}

                      <span>{getPostedTimeAgo(job.postAt)}</span>
                    </div>
                    <div className="job-side">
                      <div className="rate-container">
                        <span className="rate-label">Rate</span>
                        <strong className="rate-amount">{parsePayRate(getJobAdPayRate(job)).amount}</strong>
                        {parsePayRate(getJobAdPayRate(job)).frequency && (
                          <span className="rate-frequency">{parsePayRate(getJobAdPayRate(job)).frequency}</span>
                        )}
                      </div>
                      <a href={`/job-search/${job.adId}`} className="view-job">
                        View Job <ChevronRight className="button-arrow" />
                      </a>
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
          color: #111111 !important;
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
          color: #001B5E !important;
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

        .rduk-latest-jobs .search-input-wrapper {
          position: relative !important;
          flex: 1 !important;
          display: flex !important;
          align-items: center !important;
          min-width: 0 !important;
        }

        .rduk-latest-jobs .search-icon {
          position: absolute !important;
          left: 20px !important;
          color: #536078 !important;
          width: 20px !important;
          height: 20px !important;
          pointer-events: none !important;
        }

        .rduk-latest-jobs .jobs-search input {
          flex: 1 !important;
          border: 0 !important;
          padding: 17px 20px 17px 50px !important;
          font-size: 16px !important;
          outline: none !important;
          background: #ffffff !important;
          color: #111111 !important;
          width: 100% !important;
          min-width: 0 !important;
        }

        .rduk-latest-jobs .jobs-search button {
          border: 0 !important;
          background: #001B5E !important;
          color: #ffffff !important;
          padding: 0 30px !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          cursor: pointer !important;
          height: auto !important;
          width: auto !important;
          border-radius: 0 !important;
          flex-shrink: 0 !important;
          white-space: nowrap !important;
        }

        .rduk-latest-jobs .jobs-list {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
        }

        .rduk-latest-jobs .job-card {
          background: #ffffff !important;
          border: 1px solid #e0e3ea !important;
          border-top: 3px solid #001B5E !important;
          border-radius: 10px !important;
          padding: 20px 26px !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: stretch !important;
          gap: 28px !important;
          box-shadow: 0 8px 22px rgba(6, 20, 47, 0.045) !important;
          transform: none !important;
        }

        .rduk-latest-jobs .job-main {
          display: flex !important;
          flex-direction: column !important;
          flex: 1 !important;
        }

        .rduk-latest-jobs .job-main h2 {
          margin: 0 0 7px !important;
          font-size: 23px !important;
          font-weight: 800 !important;
          color: #111111 !important;
          text-transform: none !important;
        }

        .rduk-latest-jobs .job-location {
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          margin: 0 0 7px !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          color: #111111 !important;
        }

        .rduk-latest-jobs .location-icon {
          width: 16px !important;
          height: 16px !important;
          color: #111111 !important;
          display: inline-block !important;
        }

        .rduk-latest-jobs .job-main span {
          font-size: 14px !important;
          color: #536078 !important;
          display: inline-block !important;
          // margin-top: auto !important;
          // padding-top: 14px !important;
        }

        .rduk-latest-jobs .job-tags {
          display: flex !important;
          flex-wrap: wrap !important;
          gap: 8px !important;
          margin-top: 6px !important;
          margin-bottom: 10px !important;
        }

        .rduk-latest-jobs .job-tag {
          font-size: 12px !important;
          font-weight: 750 !important;
          padding: 4px 10px !important;
          border-radius: 6px !important;
          display: inline-flex !important;
          align-items: center !important;
          white-space: nowrap !important;
          background-color: #EEF2F7 !important;
          color: #374151 !important;
          border: 1px solid #e2e8f0 !important;
        }

        .rduk-latest-jobs .job-side {
          display: flex !important;
          align-items: flex-end !important;
          gap: 28px !important;
          min-width: 250px !important;
          justify-content: flex-end !important;
          padding-bottom: 2px !important;
        }

        .rduk-latest-jobs .rate-container {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          justify-content: center !important;
          margin-right: 20px !important;
          text-align: left !important;
        }

        .rduk-latest-jobs .rate-label {
          font-size: 12px !important;
          color: #536078 !important;
          font-weight: 600 !important;
          margin-bottom: 2px !important;
        }

        .rduk-latest-jobs .rate-amount {
          font-size: 23.8px !important;
          font-weight: 800 !important;
          color: #111111 !important;
          line-height: 1.1 !important;
          white-space: nowrap !important;
        }

        .rduk-latest-jobs .rate-frequency {
          font-size: 14px !important;
          color: #111111 !important;
          font-weight: 700 !important;
          margin-top: 2px !important;
          white-space: nowrap !important;
        }

        .rduk-latest-jobs .view-job {
          background: linear-gradient(135deg, #F7D774 0%, #E5B93C 50%, #C99A1F 100%) !important;
          color: #111111 !important;
          text-decoration: none !important;
          font-weight: 800 !important;
          border-radius: 7px !important;
          padding: 13px 28px !important;
          border: 1px solid #B8860B !important;
          white-space: nowrap !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
        }

        .rduk-latest-jobs .view-job:hover {
          background: linear-gradient(135deg, #FFE08A 0%, #F4C542 50%, #D4A017 100%) !important;
        }

        .rduk-latest-jobs .button-arrow {
          width: 16px !important;
          height: 16px !important;
          margin-left: 6px !important;
          stroke-width: 3px !important;
          display: inline-block !important;
        }

        @media (max-width: 768px) {
          .rduk-latest-jobs {
            padding: 24px 12px !important;
          }

          .rduk-latest-jobs .jobs-header {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
            margin-bottom: 20px !important;
          }

          .rduk-latest-jobs .jobs-header h1 {
            font-size: 26px !important;
            margin-bottom: 0 !important;
          }

          .rduk-latest-jobs .jobs-search {
            width: 100% !important;
          }

          .rduk-latest-jobs .jobs-search input {
            padding: 12px 12px 12px 40px !important;
            font-size: 15px !important;
          }

          .rduk-latest-jobs .search-icon {
            left: 12px !important;
            width: 16px !important;
            height: 16px !important;
          }

          .rduk-latest-jobs .jobs-search button {
            padding: 0 4px !important;
            font-size: 15px !important;
          }

          .rduk-latest-jobs .job-card {
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
            padding: 14px 16px !important;
          }

          .rduk-latest-jobs .job-main h2 {
            font-size: 18px !important;
            margin-bottom: 4px !important;
          }

          .rduk-latest-jobs .job-location {
            font-size: 14px !important;
            margin-bottom: 4px !important;
          }

          .rduk-latest-jobs .location-icon {
            width: 14px !important;
            height: 14px !important;
          }

          .rduk-latest-jobs .job-tags {
            margin-top: 4px !important;
            margin-bottom: 6px !important;
            gap: 6px !important;
          }

          .rduk-latest-jobs .job-tag {
            font-size: 10px !important;
            padding: 2px 6px !important;
            border-radius: 4px !important;
          }

          .rduk-latest-jobs .job-main span {
            font-size: 12px !important;
          }

          .rduk-latest-jobs .job-side {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            margin-top: 8px !important;
            min-width: 0 !important;
            width: 100% !important;
            gap: 12px !important;
            flex-wrap: wrap !important;
          }

          .rduk-latest-jobs .rate-container {
            margin-right: 0 !important;
            flex: 1 !important;
            min-width: 0 !important;
          }

          .rduk-latest-jobs .rate-label {
            font-size: 11px !important;
          }

          .rduk-latest-jobs .rate-amount {
            font-size: 15.3px !important;
            white-space: normal !important;
            word-break: break-word !important;
          }

          .rduk-latest-jobs .rate-frequency {
            font-size: 12px !important;
            white-space: normal !important;
          }

          .rduk-latest-jobs .view-job {
            padding: 8px 16px !important;
            font-size: 14px !important;
            border-radius: 6px !important;
          }

          .rduk-latest-jobs .button-arrow {
            width: 14px !important;
            height: 14px !important;
            margin-left: 4px !important;
            stroke-width: 2.5px !important;
          }
        }
        ` }} />
      </main>

      <Footer />
    </div>
  );
}
