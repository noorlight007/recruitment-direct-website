"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Building2,
  Clock,
  User,
  Briefcase,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Loader2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { api } from "@/services/api";

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
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");

  // Fetch Job Ads from api.get("/core/live/jobads")
  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        setError(null);
        const data = await api.get("/core/live/jobads");
        if (data && data.items) {
          setJobs(data.items);
        } else {
          setJobs([]);
        }
      } catch (err: any) {
        console.error("Error loading jobs:", err);
        setError("Unable to load live jobs. Please check your connection or try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  // Sync with search parameter from landing page (if any)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const query = params.get("q");
      if (query) {
        setSearchQuery(query);
      }
    }
  }, []);

  // Format Relative Time (e.g. "May 14, 2026" or "10 days ago")
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;

      // Formatted Date: e.g. "May 14, 2026"
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  // Helper to extract bulletpoints on new lines or fall back to high-quality metadata as bullets
  const getBulletPoints = (job: Job): string[] => {
    if (job.bulletPoints && job.bulletPoints.length > 0) {
      return job.bulletPoints.map(bp => bp.trim()).filter(Boolean);
    }

    // Dynamic, professional, rich-content fallback bullets extracted directly from actual API item data
    const list: string[] = [];
    if (job.reference) {
      list.push(`📌 Reference: ${job.reference}`);
    }
    if (job.owner) {
      const contactInfo = [
        job.owner.firstName && job.owner.lastName ? `${job.owner.firstName} ${job.owner.lastName}` : null,
        job.owner.position ? `(${job.owner.position})` : null
      ].filter(Boolean).join(" ");

      if (contactInfo) {
        list.push(`📞 Consultant Contact: ${contactInfo}`);
      }
    }

    // Add default RDUK benefits if fewer than 2 bullets are resolved
    if (list.length < 3) {
      list.push("✨ Powered by advanced AI vetting for faster onboarding");
      list.push("✅ Standard industry rates with complete holiday pay package");
    }

    return list;
  };

  // Helper to dynamically extract location from title, bullet points, or reference
  const getJobAdLocation = (job: Job): string => {
    if (job.title && job.title.includes("|")) {
      const parts = job.title.split("|").map(p => p.trim());
      if (parts.length >= 3) {
        return parts[2];
      }
      if (parts.length === 2 && !parts[1].includes("hour") && !parts[1].includes("£")) {
        return parts[1];
      }
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

    if (job.reference && isNaN(Number(job.reference))) {
      return job.reference;
    }

    return "Scotland";
  };

  // Dynamic filter lists harvested from fetched jobs
  // Dynamic filter lists harvested from fetched jobs (unused dropdowns, set to empty)
  const locationsList: string[] = [];
  const companiesList: string[] = [];

  // Filter Logic
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (job.summary && job.summary.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (job.reference && job.reference.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background relative flex flex-col justify-between overflow-x-hidden">
      {/* Background decoration elements */}
      <FloatingElements />
      <Navbar />

      {/* Hero Header Section */}
      <header className="hero-section text-white pt-[140px] pb-12 relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#60A5FA] border border-blue-500/25 bg-blue-500/5 px-4 py-2 rounded-full mb-6 hover:bg-blue-500/10 transition-colors tracking-widest uppercase">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight mb-4 leading-tight">
            Explore <span>Live Jobs</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg opacity-90 leading-relaxed font-body">
            Direct access to temporary, contract, and permanent opportunities in Scotland & the UK. Search live, verify rates, and apply in seconds.
          </p>
        </div>
      </header>

      {/* Main Body with Live Job Search Engine */}
      <main className="flex-grow dark-section py-12 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Glassmorphic Search & Filter Bar */}
          <div className="search-box p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">

              {/* Keyword Search */}
              <div className="lg:col-span-2 relative">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-heading">
                  What are you looking for?
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none font-body text-white bg-white/5 backdrop-blur-sm transition-all placeholder:text-gray-500 text-sm"
                  />
                </div>
              </div>

              {/* Location Select Dropdown */}
              {/* <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-heading">
                  Filter by Location
                </label>
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none font-body text-white bg-slate-900 border-box text-sm appearance-none cursor-pointer"
                  >
                    <option value="all">📍 All Locations</option>
                    {locationsList.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div> */}

              {/* Company Select Dropdown */}
              {/* <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-heading">
                  Filter by Employer
                </label>
                <div className="relative">
                  <select
                    value={selectedCompany}
                    onChange={(e) => setSelectedCompany(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none font-body text-white bg-slate-900 border-box text-sm appearance-none cursor-pointer"
                  >
                    <option value="all">🏢 All Employers</option>
                    {companiesList.map((comp) => (
                      <option key={comp} value={comp}>
                        {comp}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div> */}

              <div className="lg:col-span-1">
                <button
                  type="button"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-[0_0_20px_rgba(30,92,255,0.4)] text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-blue-500/20 font-heading tracking-wider"
                >
                  <Search className="w-4 h-4" />
                  Search Jobs
                </button>
              </div>

            </div>

            {/* Total Results Summary */}
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
              <div>
                {loading ? "Syncing with Live Jobs feed..." : `Showing ${filteredJobs.length} active opportunities`}
              </div>
              {(searchQuery || selectedLocation !== "all" || selectedCompany !== "all") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedLocation("all");
                    setSelectedCompany("all");
                  }}
                  className="text-blue-400 hover:text-blue-300 font-bold transition-colors cursor-pointer"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Dynamic Feed Display */}
          {loading ? (
            /* Premium Skeleton Loader Cards with Shimmer Effect */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 h-[280px] flex flex-col justify-between animate-pulse">
                  <div>
                    <div className="h-6 bg-slate-800 rounded-md w-3/4 mb-3" />
                    <div className="h-4 bg-slate-800 rounded-md w-1/4 mb-6" />
                    <div className="space-y-2">
                      <div className="h-3 bg-slate-800 rounded w-5/6" />
                      <div className="h-3 bg-slate-800 rounded w-4/6" />
                      <div className="h-3 bg-slate-800 rounded w-5/6" />
                    </div>
                  </div>
                  <div className="h-10 bg-slate-800 rounded-lg w-full mt-4" />
                </div>
              ))}
            </div>
          ) : error ? (
            /* Spectacular Error State Panel */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-red-950/20 border border-red-500/20 text-center max-w-2xl mx-auto my-12"
            >
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Failed to Sync Jobs Feed</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-primary"
              >
                Reload Job Search
              </button>
            </motion.div>
          ) : filteredJobs.length === 0 ? (
            /* Elegant Empty State Panel */
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 max-w-xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-gray-500">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No Matching Opportunities</h3>
              <p className="text-gray-400 mb-6 text-sm font-body">
                We couldn't find any jobs matching your specific criteria. Try adjusting your spelling, keywords, or location filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedLocation("all");
                  setSelectedCompany("all");
                }}
                className="text-sm font-bold text-blue-400 hover:text-blue-300 underline"
              >
                Reset Search Filters
              </button>
            </motion.div>
          ) : (
            /* Premium Animated Job Cards Feed */
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredJobs.map((job, index) => {
                  const bulletPoints = getBulletPoints(job);

                  return (
                    <motion.article
                      key={job.adId}
                      layout
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: Math.min(index * 0.05, 0.3)
                      }}
                      className="group relative flex flex-col justify-between bg-slate-950/40 hover:bg-slate-950/80 border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_35px_rgba(30,92,255,0.15)] overflow-hidden"
                    >
                      {/* Decorative gradient overlay */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tr-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div>
                        {/* Header details: ID & Location badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-bold text-gray-500 tracking-wider">
                            ID: #{job.adId}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                            <MapPin className="w-3 h-3" />
                            {getJobAdLocation(job)}
                          </span>
                        </div>

                        {/* Job ad Title */}
                        <h2 className="text-xl font-heading font-bold text-white group-hover:text-[#60A5FA] transition-colors leading-snug mb-3">
                          {job.title}
                        </h2>

                        {/* Created At */}
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-5 font-body">
                          <Clock className="w-3.5 h-3.5 text-gray-500" />
                          <span>Posted on {formatDate(job.postAt)}</span>
                        </div>

                        {/* Bulletpoints rendered on new lines */}
                        <div className="border-t border-white/5 pt-4 mb-6">
                          <ul className="space-y-2.5 text-xs font-body text-gray-300">
                            {bulletPoints.map((bp, bpIdx) => (
                              <li key={bpIdx} className="flex items-start gap-2 leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span className="flex-1">{bp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Interactive Button */}
                      <Link
                        href={`/job-search/${job.adId}`}
                        className="btn btn-primary w-full py-3 rounded-xl flex items-center justify-center font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:shadow-[0_0_20px_rgba(30,92,255,0.4)] transition-all cursor-pointer"
                      >
                        View
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </main>

      <Footer />

      {/* Styles */}
      <style jsx>{`
        span {
          background: linear-gradient(135deg, #60A5FA, #1E5CFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }
        .bg-radial-glow {
          background: radial-gradient(circle at 50% 50%, rgba(30, 92, 255, 0.2) 0%, transparent 60%);
        }
        .search-box {
          background: rgba(15, 23, 42, 0.45);
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 20px 40px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}
