"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Loader2, MapPin, ChevronRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { api } from "@/services/api";

interface LinkItem {
  self?: string;
  applications?: string;
  logo?: string;
  mainContact?: string;
  photo?: string;
  company?: string;
}

interface StatusItem {
  statusId: number;
  name: string;
  active: boolean;
  default?: boolean;
}

interface UserProfile {
  userId: number;
  firstName: string;
  lastName: string;
  position?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  links?: LinkItem;
}

interface CompanyInfo {
  companyId: number;
  name: string;
  status?: StatusItem;
  owner?: UserProfile;
  links?: LinkItem;
}

interface ContactInfo {
  contactId: number;
  firstName: string;
  lastName: string;
  unsubscribed?: boolean;
  email?: string;
  status?: StatusItem;
  owner?: UserProfile;
  links?: LinkItem;
}

interface JobInfo {
  jobId: number;
  jobTitle: string;
  location?: {
    locationId: number;
    name: string;
  };
  company?: CompanyInfo;
  contact?: ContactInfo;
  status?: StatusItem;
  source?: string;
  owner?: UserProfile;
  links?: LinkItem;
}

interface JobBoard {
  boardId: number;
  name: string;
  reference?: string;
}

interface ApplyUrl {
  name: string;
  url: string;
}

interface JobDetails {
  adId: number;
  state: string;
  title: string;
  reference: string;
  summary: string;
  bulletPoints: string[];
  description?: string;
  job?: JobInfo;
  company?: CompanyInfo;
  contact?: ContactInfo;
  jobBoards?: JobBoard[];
  otherApplyUrls?: ApplyUrl[];
  owner?: UserProfile;
  createdBy?: UserProfile;
  postAt: string;
  expireAt: string;
  links?: LinkItem;

  // Fallbacks for other structures to keep compilation fully correct
  jobId?: number;
  jobTitle?: string;
  location?: {
    locationId: number;
    name: string;
  };
  category?: string | {
    categoryId: number;
    name: string;
    subCategory?: {
      subCategoryId: number;
      name: string;
    };
  } | null;
  industry?: string | null;
  job_type?: string | null;
  workShift?: {
    startTime: string;
    endTime: string;
    workDays: string[];
  };
  workplaceAddress?: {
    name: string;
    street: string[];
    city: string;
    postalCode: string;
    postcode?: string;
    country: string;
  };
  start?: {
    date: string;
  };
  jobType?: string;
  salary?: {
    ratePer: string;
    rateLow: number;
    rateHigh: number;
    currency: string;
  };
  workType?: {
    workTypeId: number;
    name: string;
  };
  createdAt?: string;
}

export default function JobDetailsPage() {
  const { adId } = useParams();

  const [job, setJob] = useState<JobDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Helper to dynamically extract location from title, bullet points, or reference
  const getJobAdLocation = (item: JobDetails): string => {
    if (item.job?.location?.name) {
      return item.job.location.name;
    }

    if (item.title && item.title.includes("|")) {
      const parts = item.title.split("|").map(p => p.trim());
      if (parts.length >= 3) {
        return parts[2];
      }
      if (parts.length === 2 && !parts[1].includes("hour") && !parts[1].includes("£")) {
        return parts[1];
      }
    }

    if (item.bulletPoints && item.bulletPoints.length > 0) {
      for (const bp of item.bulletPoints) {
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

    if (item.reference && isNaN(Number(item.reference))) {
      return item.reference;
    }

    return "Scotland / UK";
  };

  // Helper to dynamically extract salary from title or bullet points
  const getJobAdSalary = (item: JobDetails): string => {
    if (item.title && item.title.includes("|")) {
      const parts = item.title.split("|").map(p => p.trim());
      for (const part of parts) {
        if (part.includes("£") || part.toLowerCase().includes("hour") || part.toLowerCase().includes("ph")) {
          return part;
        }
      }
    }

    if (item.bulletPoints && item.bulletPoints.length > 0) {
      for (const bp of item.bulletPoints) {
        if (bp.includes("£") || bp.toLowerCase().includes("ph") || bp.toLowerCase().includes("hour")) {
          return bp;
        }
      }
    }

    return "Competitive Rate";
  };

  // Helper to format job type (e.g. Temp -> Temporary, Perm -> Permanent)
  const formatJobType = (jobType: string | null | undefined): string => {
    if (!jobType) return "";
    if (jobType.toLowerCase() === "temp") return "Temporary";
    if (jobType.toLowerCase() === "perm") return "Permanent";
    return jobType;
  };

  // Helper to dynamically extract employment type from title or bullet points
  const getJobAdWorkType = (item: JobDetails): string => {
    if (item.job_type) return formatJobType(item.job_type);
    if (item.title) {
      const lowerTitle = item.title.toLowerCase();
      if (lowerTitle.includes("permanent")) return "Permanent";
      if (lowerTitle.includes("contract")) return "Contract";
      if (lowerTitle.includes("temporary") || lowerTitle.includes("ongoing")) return "Temporary";
    }

    if (item.bulletPoints && item.bulletPoints.length > 0) {
      for (const bp of item.bulletPoints) {
        const lowerBp = bp.toLowerCase();
        if (lowerBp.includes("permanent")) return "Permanent";
        if (lowerBp.includes("contract")) return "Contract";
        if (lowerBp.includes("temporary") || lowerBp.includes("ongoing")) return "Temporary";
      }
    }

    return "Ongoing Temporary";
  };

  // Helper to dynamically clean job title
  const getJobAdCleanTitle = (item: JobDetails): string => {
    if (item.title && item.title.includes("|")) {
      return item.title.split("|")[0].trim();
    }
    return item.title;
  };

  // Rate extractor & parser functions to mirror job list styling
  const getJobAdPayRate = (item: JobDetails): string => {
    if (item.title && item.title.includes("|")) {
      const parts = item.title.split("|").map(p => p.trim());
      if (parts.length >= 2) return parts[1];
    }
    return "Competitive Rate";
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

  // Fetch job details by ID
  useEffect(() => {
    if (!adId) return;

    async function fetchJobDetails() {
      try {
        setLoading(true);
        setError(null);
        const data = await api.get(`/core/live/jobads/${adId}`);
        if (data) {
          try {
            const listData = await api.get("/core/live/jobads");
            if (listData && listData.items) {
              const matchedJob = listData.items.find((item: any) => item.adId === Number(adId));
              if (matchedJob) {
                data.industry = matchedJob.industry;
                data.category = matchedJob.category;
                data.job_type = matchedJob.job_type;
              }
            }
          } catch (listErr) {
            console.error("Failed to fetch matching job fields from live jobads feed:", listErr);
          }
          setJob(data);
        } else {
          setError("No records were found for this specific Job Ad ID.");
        }
      } catch (err: any) {
        console.error("Error fetching job details:", err);
        setError("Unable to retrieve job details. The job opening may have been closed or is temporarily unavailable.");
      } finally {
        setLoading(false);
      }
    }

    fetchJobDetails();
  }, [adId]);

  return (
    <div className="min-h-screen bg-white relative flex flex-col justify-between overflow-x-hidden">
      <FloatingElements />
      <Navbar />

      {loading ? (
        <main className="flex-grow flex items-center justify-center bg-[#f7f8fb] py-24">
          <div className="flex items-center gap-3">
            <Loader2 className="w-12 h-12 text-[#06142f] animate-spin" />
            <span className="text-xl font-bold text-gray-600">Retrieving job details...</span>
          </div>
        </main>
      ) : error ? (
        <main className="flex-grow flex items-center justify-center bg-[#f7f8fb] py-24">
          <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-xl font-bold text-red-700 shadow-md max-w-2xl text-center">
            {error}
            <div className="mt-4">
              <Link href="/job-search" className="text-[#006fff] hover:underline font-bold">
                ← Return to Live Search
              </Link>
            </div>
          </div>
        </main>
      ) : job ? (
        <main className="flex-grow bg-[#f7f8fb] text-[#06142f] pt-2 md:pt-2">
          <section className="rduk-job-detail-page">
            <div className="job-detail-container">

              <div className="back-link-wrapper">
                <Link href="/job-search" className="back-link">
                  ← Back to Live Search
                </Link>
              </div>

              {/* Main Header Card - Styled like job-card */}
              <div className="job-card main-header-card">
                <div className="card-header-top">
                  <div className="job-main">
                    <h2>{getJobAdCleanTitle(job)}</h2>
                    <p className="job-location">
                      <MapPin className="location-icon" />
                      {getJobAdLocation(job)}
                    </p>
                    
                    {(job.job_type || job.category || job.industry) && (
                      <div className="job-tags">
                        {job.job_type && (
                          <span className="job-tag job-tag-type">{formatJobType(job.job_type)}</span>
                        )}
                        {job.category && (
                          <span className="job-tag job-tag-category">
                            {typeof job.category === "string" ? job.category : job.category.name}
                          </span>
                        )}
                        {job.industry && (
                          <span className="job-tag job-tag-industry">{job.industry}</span>
                        )}
                      </div>
                    )}
                    
                    <span className="posted-time">{getPostedTimeAgo(job.postAt)}</span>
                  </div>

                  <div className="job-side">
                    <div className="rate-container">
                      <span className="rate-label">Rate</span>
                      <strong className="rate-amount">{parsePayRate(getJobAdPayRate(job)).amount}</strong>
                      {parsePayRate(getJobAdPayRate(job)).frequency && (
                        <span className="rate-frequency">{parsePayRate(getJobAdPayRate(job)).frequency}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="card-header-bottom">
                  <a 
                    href={`https://apply.jobadder.com/eu3/1108/${job.adId}/l4ctmmabsdnuvmmrlk3jpydtma`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-now-btn"
                  >
                    Apply Now <ChevronRight className="button-arrow" />
                  </a>
                  
                  <div className="actively-recruiting">
                    <span className="pulse-dot"></span>
                    <strong>Actively Recruiting</strong>
                  </div>
                </div>
              </div>

              {/* 2-Column Responsive Layout Grid */}
              <div className="details-grid">
                
                {/* Left Column - Main sections */}
                <div className="details-left">
                  
                  {/* Overview Section Card */}
                  <div className="job-card section-card">
                    <h3>Overview</h3>
                    <div className="section-content" dangerouslySetInnerHTML={{ __html: job.description || job.summary || "No description provided." }} />
                  </div>

                  {/* Duties Section Card */}
                  {job.bulletPoints && job.bulletPoints.length > 0 && (
                    <div className="job-card section-card">
                      <h3>Duties & Responsibilities</h3>
                      <div className="section-content">
                        <ul className="bullet-list">
                          {job.bulletPoints.map((bp, idx) => (
                            <li key={idx}>{bp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Compact Requirements & Eligibility Section Card */}
                  {/* <div className="job-card section-card compact-requirements-card">
                    <h3>Requirements & Eligibility</h3>
                    <div className="section-content">
                      <ul className="bullet-list">
                        <li>Applicants must have the legal right to work in the UK.</li>
                        <li>Must have your own transport and be able to commute.</li>
                      </ul>
                    </div>
                  </div> */}

                </div>

                {/* Right Column - Sidebar metadata */}
                <div className="details-right">
                  
                  {/* Job Details Sidebar Card */}
                  <div className="job-card sidebar-card">
                    <h3>Job Details</h3>
                    <div className="sidebar-details-list">
                      <div className="detail-item">
                        <span className="detail-label">Base Location</span>
                        <strong className="detail-value">{getJobAdLocation(job)}</strong>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Offered Rate</span>
                        <strong className="detail-value">{getJobAdSalary(job)}</strong>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Employment Type</span>
                        <strong className="detail-value">{getJobAdWorkType(job) || "Temporary"}</strong>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Start Date</span>
                        <strong className="detail-value">Immediate Start</strong>
                      </div>
                      {job.category && (
                        <div className="detail-item">
                          <span className="detail-label">Category</span>
                          <strong className="detail-value">
                            {typeof job.category === "string" ? job.category : job.category.name}
                          </strong>
                        </div>
                      )}
                      {job.industry && (
                        <div className="detail-item">
                          <span className="detail-label">Industry</span>
                          <strong className="detail-value">{job.industry}</strong>
                        </div>
                      )}
                      <div className="detail-item">
                        <span className="detail-label">Job Reference</span>
                        <strong className="detail-value">{job.reference}</strong>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Published On</span>
                        <strong className="detail-value">{formatDate(job.postAt)}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Hiring Contact Card (if available) */}
                  {job.owner && (
                    <div className="job-card sidebar-card contact-card">
                      <h3>Hiring Contact</h3>
                      <div className="contact-details">
                        <strong className="contact-name">{job.owner.firstName} {job.owner.lastName}</strong>
                        {job.owner.jobTitle && <span className="contact-title">{job.owner.jobTitle}</span>}
                        
                        <div className="contact-links">
                          {job.owner.email && (
                            <a href={`mailto:${job.owner.email}`} className="contact-link">
                              <Mail className="contact-icon" />
                              {job.owner.email}
                            </a>
                          )}
                          {job.owner.phone && (
                            <a href={`tel:${job.owner.phone}`} className="contact-link">
                              <Phone className="contact-icon" />
                              {job.owner.phone}
                            </a>
                          )}
                          {!job.owner.phone && job.owner.mobile && (
                            <a href={`tel:${job.owner.mobile}`} className="contact-link">
                              <Phone className="contact-icon" />
                              {job.owner.mobile}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                </div>

              </div>

            </div>
          </section>
        </main>
      ) : null}

      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
        .rduk-job-detail-page {
          background: #f7f8fb !important;
          padding: 60px 20px !important;
          font-family: Inter, Arial, sans-serif !important;
          color: #111111 !important;
        }

        .rduk-job-detail-page .job-detail-container {
          max-width: 1180px !important;
          margin: 0 auto !important;
        }

        /* Back link styles */
        .rduk-job-detail-page .back-link-wrapper {
          margin-bottom: 24px !important;
        }

        .rduk-job-detail-page .back-link {
          display: inline-flex !important;
          align-items: center !important;
          color: #001B5E !important;
          text-decoration: none !important;
          font-weight: 700 !important;
          font-size: 15px !important;
          transition: color 0.2s ease !important;
        }

        .rduk-job-detail-page .back-link:hover {
          color: #E5B93C !important;
        }

        /* Unified Card styles matching job-card on search page */
        .rduk-job-detail-page .job-card {
          background: #ffffff !important;
          border: 1px solid #e0e3ea !important;
          border-top: 3px solid #001B5E !important;
          border-radius: 10px !important;
          padding: 20px 26px !important;
          box-shadow: 0 8px 22px rgba(6, 20, 47, 0.045) !important;
          box-sizing: border-box !important;
        }

        /* Main Header Card specifically */
        .rduk-job-detail-page .main-header-card {
          display: flex !important;
          flex-direction: column !important;
          gap: 0px !important;
        }

        .rduk-job-detail-page .card-header-top {
          display: flex !important;
          justify-content: space-between !important;
          align-items: flex-start !important;
          gap: 28px !important;
        }

        .rduk-job-detail-page .job-main {
          display: flex !important;
          flex-direction: column !important;
          flex: 1 !important;
        }

        .rduk-job-detail-page .job-main h2 {
          margin: 0 0 7px !important;
          font-size: 28px !important;
          font-weight: 800 !important;
          color: #111111 !important;
          text-transform: none !important;
          line-height: 1.25 !important;
        }

        .rduk-job-detail-page .job-location {
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          margin: 0 0 7px !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          color: #111111 !important;
        }

        .rduk-job-detail-page .location-icon {
          width: 16px !important;
          height: 16px !important;
          color: #111111 !important;
          display: inline-block !important;
        }

        .rduk-job-detail-page .posted-time {
          font-size: 14px !important;
          color: #536078 !important;
          display: inline-block !important;
        }

        .rduk-job-detail-page .job-tags {
          display: flex !important;
          flex-wrap: wrap !important;
          gap: 8px !important;
          margin-top: 6px !important;
          margin-bottom: 10px !important;
        }

        .rduk-job-detail-page .job-tag {
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

        .rduk-job-detail-page .job-side {
          display: flex !important;
          align-items: flex-start !important;
          gap: 28px !important;
          min-width: 200px !important;
          justify-content: flex-end !important;
        }

        .rduk-job-detail-page .rate-container {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          justify-content: center !important;
          text-align: left !important;
        }

        .rduk-job-detail-page .rate-label {
          font-size: 12px !important;
          color: #536078 !important;
          font-weight: 600 !important;
          margin-bottom: 2px !important;
        }

        .rduk-job-detail-page .rate-amount {
          font-size: 28px !important;
          font-weight: 800 !important;
          color: #111111 !important;
          line-height: 1.1 !important;
          white-space: nowrap !important;
        }

        .rduk-job-detail-page .rate-frequency {
          font-size: 14px !important;
          color: #111111 !important;
          font-weight: 700 !important;
          margin-top: 2px !important;
          white-space: nowrap !important;
        }

        /* Apply Button and Recruiting Status row */
        .rduk-job-detail-page .card-header-bottom {
          display: flex !important;
          align-items: center !important;
          gap: 20px !important;
          margin-top: 20px !important;
          padding-top: 20px !important;
          border-top: 1px solid #e0e3ea !important;
        }

        .rduk-job-detail-page .apply-now-btn {
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
          font-size: 16px !important;
          transition: background 0.2s ease, box-shadow 0.2s ease !important;
        }

        .rduk-job-detail-page .apply-now-btn:hover {
          background: linear-gradient(135deg, #FFE08A 0%, #F4C542 50%, #D4A017 100%) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
        }

        .rduk-job-detail-page .button-arrow {
          width: 16px !important;
          height: 16px !important;
          margin-left: 6px !important;
          stroke-width: 3px !important;
          display: inline-block !important;
        }

        .rduk-job-detail-page .actively-recruiting {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          color: #009e6b !important;
          text-transform: uppercase !important;
          letter-spacing: .8px !important;
          font-size: 13px !important;
          font-weight: 800 !important;
        }

        .rduk-job-detail-page .pulse-dot {
          width: 10px !important;
          height: 10px !important;
          background: #16c784 !important;
          border-radius: 50% !important;
          box-shadow: 0 0 0 3px rgba(22, 199, 132, .18) !important;
          display: inline-block !important;
          animation: pulse 1.5s infinite !important;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0px rgba(22, 199, 132, 0.4);
          }
          70% {
            box-shadow: 0 0 0 6px rgba(22, 199, 132, 0);
          }
          100% {
            box-shadow: 0 0 0 0px rgba(22, 199, 132, 0);
          }
        }

        /* Responsive Details Grid */
        .rduk-job-detail-page .details-grid {
          display: grid !important;
          grid-template-columns: 1.8fr 1.2fr !important;
          gap: 20px !important;
          margin-top: 20px !important;
          align-items: start !important;
        }

        .rduk-job-detail-page .details-left,
        .rduk-job-detail-page .details-right {
          display: flex !important;
          flex-direction: column !important;
          gap: 20px !important;
        }

        /* Section & Sidebar Card typography */
        .rduk-job-detail-page .section-card h3,
        .rduk-job-detail-page .sidebar-card h3 {
          margin: 0 0 16px !important;
          font-size: 20px !important;
          font-weight: 800 !important;
          color: #001B5E !important;
          text-transform: none !important;
          border-bottom: 2px solid #EEF2F7 !important;
          padding-bottom: 8px !important;
        }

        .rduk-job-detail-page .section-content {
          font-size: 15px !important;
          line-height: 1.65 !important;
          color: #374151 !important;
        }

        .rduk-job-detail-page .section-content p {
          margin: 0 0 14px !important;
        }

        .rduk-job-detail-page .section-content p:last-child {
          margin-bottom: 0 !important;
        }

        /* Bullet lists styling inside cards */
        .rduk-job-detail-page .bullet-list {
          margin: 0 !important;
          padding-left: 20px !important;
          list-style-type: none !important;
        }

        .rduk-job-detail-page .bullet-list li {
          position: relative !important;
          margin-bottom: 10px !important;
          padding-left: 6px !important;
          font-size: 15px !important;
          line-height: 1.6 !important;
          color: #374151 !important;
        }

        .rduk-job-detail-page .bullet-list li::before {
          content: "•" !important;
          color: #001B5E !important;
          font-weight: bold !important;
          display: inline-block !important;
          width: 1em !important;
          margin-left: -1em !important;
          position: absolute !important;
          left: 0 !important;
          font-size: 18px !important;
          line-height: 1 !important;
          top: 0px !important;
        }

        .rduk-job-detail-page .bullet-list li:last-child {
          margin-bottom: 0 !important;
        }

        /* Sidebar lists */
        .rduk-job-detail-page .sidebar-details-list {
          display: flex !important;
          flex-direction: column !important;
          gap: 14px !important;
        }

        .rduk-job-detail-page .detail-item {
          display: flex !important;
          flex-direction: column !important;
          border-bottom: 1px solid #f0f2f5 !important;
          padding-bottom: 10px !important;
        }

        .rduk-job-detail-page .detail-item:last-child {
          border-bottom: 0 !important;
          padding-bottom: 0 !important;
        }

        .rduk-job-detail-page .detail-label {
          font-size: 12px !important;
          color: #536078 !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          margin-bottom: 3px !important;
        }

        .rduk-job-detail-page .detail-value {
          font-size: 15px !important;
          font-weight: 700 !important;
          color: #111111 !important;
          word-break: break-word !important;
        }

        /* Hiring contact info styling */
        .rduk-job-detail-page .contact-details {
          display: flex !important;
          flex-direction: column !important;
        }

        .rduk-job-detail-page .contact-name {
          font-size: 17px !important;
          font-weight: 800 !important;
          color: #111111 !important;
        }

        .rduk-job-detail-page .contact-title {
          font-size: 13px !important;
          font-weight: 600 !important;
          color: #536078 !important;
          margin-top: 2px !important;
          margin-bottom: 14px !important;
        }

        .rduk-job-detail-page .contact-links {
          display: flex !important;
          flex-direction: column !important;
          gap: 8px !important;
        }

        .rduk-job-detail-page .contact-link {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          color: #001B5E !important;
          text-decoration: none !important;
          font-weight: 700 !important;
          font-size: 14px !important;
          word-break: break-all !important;
          transition: color 0.2s ease !important;
        }

        .rduk-job-detail-page .contact-link:hover {
          color: #E5B93C !important;
          text-decoration: underline !important;
        }

        .rduk-job-detail-page .contact-icon {
          width: 15px !important;
          height: 15px !important;
          color: #001B5E !important;
          flex-shrink: 0 !important;
          transition: color 0.2s ease !important;
        }

        .rduk-job-detail-page .contact-link:hover .contact-icon {
          color: #E5B93C !important;
        }

        /* Mobile constraints and overrides */
        @media (max-width: 768px) {
          .rduk-job-detail-page {
            padding: 24px 12px !important;
          }

          .rduk-job-detail-page .job-card {
            padding: 14px 16px !important;
          }

          .rduk-job-detail-page .main-header-card h2 {
            font-size: 20px !important;
          }

          .rduk-job-detail-page .card-header-top {
            flex-direction: column !important;
            gap: 12px !important;
          }

          .rduk-job-detail-page .job-side {
            justify-content: flex-start !important;
            min-width: 0 !important;
            width: 100% !important;
          }

          .rduk-job-detail-page .rate-amount {
            font-size: 20px !important;
          }

          .rduk-job-detail-page .card-header-bottom {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
            margin-top: 14px !important;
            padding-top: 14px !important;
          }

          .rduk-job-detail-page .apply-now-btn {
            width: 100% !important;
            padding: 10px 20px !important;
            font-size: 15px !important;
          }

          .rduk-job-detail-page .details-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            margin-top: 16px !important;
          }

          .rduk-job-detail-page .details-left,
          .rduk-job-detail-page .details-right {
            gap: 16px !important;
          }

          .rduk-job-detail-page .section-card h3,
          .rduk-job-detail-page .sidebar-card h3 {
            font-size: 18px !important;
            margin-bottom: 12px !important;
          }

          .rduk-job-detail-page .bullet-list li,
          .rduk-job-detail-page .section-content {
            font-size: 14px !important;
          }
        }
        `
      }} />
    </div>
  );
}
