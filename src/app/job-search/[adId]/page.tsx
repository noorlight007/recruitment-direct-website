"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";
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
  category?: {
    categoryId: number;
    name: string;
    subCategory?: {
      subCategoryId: number;
      name: string;
    };
  };
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

    return "Scotland";
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

  // Helper to dynamically extract employment type from title or bullet points
  const getJobAdWorkType = (item: JobDetails): string => {
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

  // Fetch job details by ID
  useEffect(() => {
    if (!adId) return;

    async function fetchJobDetails() {
      try {
        setLoading(true);
        setError(null);
        const data = await api.get(`/core/live/jobads/${adId}`);
        if (data) {
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
        <main className="flex-grow bg-[#f7f8fb]">
          <section className="rduk-job-detail-page">
            <div className="job-detail-container">

              <Link href="/job-search" className="back-link">
                ← Back to Live Search
              </Link>

              <div className="job-title-area">
                <span className="status-badge">Live Vacancy</span>
                <h1>{getJobAdCleanTitle(job)}</h1>
                <p className="job-location">{getJobAdLocation(job)}</p>
                <p className="job-summary">
                  <strong>{getJobAdSalary(job)}</strong>
                  <span>|</span>
                  {getJobAdWorkType(job)}
                </p>
              </div>

              <div className="job-info-bar">
                <div>
                  <span>Base Location</span>
                  <strong>{getJobAdLocation(job)}</strong>
                </div>
                <div>
                  <span>Offered Salary</span>
                  <strong>{getJobAdSalary(job)}</strong>
                </div>
                <div>
                  <span>Employment Type</span>
                  <strong>{getJobAdWorkType(job)}</strong>
                </div>
                <div>
                  <span>Start Date</span>
                  <strong>Immediate Start</strong>
                </div>
              </div>

              <div className="job-section">
                <h2>Job Overview</h2>
                <div dangerouslySetInnerHTML={{ __html: job.description || job.summary || "No description provided." }} />
              </div>

              {job.bulletPoints && job.bulletPoints.length > 0 && (
                <div className="job-section">
                  <h2>Job Requirements</h2>
                  <ul>
                    {job.bulletPoints.map((bp, idx) => (
                      <li key={idx}>{bp}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="job-section">
                <h2>Eligibility</h2>
                <ul>
                  <li>Applicants must have the legal right to work in the UK.</li>
                  <li>Must have your own transport and be able to commute.</li>
                </ul>
              </div>

              <div className="apply-panel">
                <div className="actively-recruiting">
                  <span></span>
                  <strong>Actively Recruiting</strong>
                </div>

                <a 
                  href={`https://apply.jobadder.com/eu3/1108/${job.adId}/l4ctmmabsdnuvmmrlk3jpydtma`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply-btn"
                >
                  Apply Now
                </a>
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
          padding: 55px 20px 70px !important;
          font-family: Inter, Arial, sans-serif !important;
          color: #06142f !important;
        }

        .rduk-job-detail-page .job-detail-container {
          max-width: 1120px !important;
          margin: 0 auto !important;
        }

        .rduk-job-detail-page .back-link {
          display: inline-block !important;
          margin-bottom: 36px !important;
          color: #006fff !important;
          text-decoration: none !important;
          font-weight: 700 !important;
          font-size: 16px !important;
        }

        .rduk-job-detail-page .job-title-area {
          margin-bottom: 34px !important;
        }

        .rduk-job-detail-page .status-badge {
          display: inline-block !important;
          background: #06142f !important;
          color: #4cc3ff !important;
          border: 1px solid #006fff !important;
          border-radius: 999px !important;
          padding: 8px 22px !important;
          font-size: 13px !important;
          font-weight: 800 !important;
          letter-spacing: 1px !important;
          text-transform: uppercase !important;
          margin-bottom: 22px !important;
        }

        .rduk-job-detail-page .job-title-area h1 {
          margin: 0 0 14px !important;
          font-size: 64px !important;
          line-height: 1 !important;
          font-weight: 900 !important;
          letter-spacing: -2px !important;
          color: #06142f !important;
          text-transform: none !important;
        }

        .rduk-job-detail-page .job-location {
          margin: 0 0 18px !important;
          font-size: 28px !important;
          font-weight: 800 !important;
          color: #06142f !important;
        }

        .rduk-job-detail-page .job-summary {
          margin: 0 !important;
          font-size: 28px !important;
          font-weight: 600 !important;
          color: #06142f !important;
        }

        .rduk-job-detail-page .job-summary strong {
          color: #0075ff !important;
          font-weight: 900 !important;
        }

        .rduk-job-detail-page .job-summary span {
          color: #9aa3b3 !important;
          margin: 0 16px !important;
        }

        .rduk-job-detail-page .job-info-bar,
        .rduk-job-detail-page .job-section,
        .rduk-job-detail-page .apply-panel {
          background: #ffffff !important;
          border: 1px solid #dfe5ef !important;
          border-radius: 12px !important;
          box-shadow: 0 8px 24px rgba(6, 20, 47, 0.045) !important;
        }

        .rduk-job-detail-page .job-info-bar {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          margin-bottom: 20px !important;
          overflow: hidden !important;
        }

        .rduk-job-detail-page .job-info-bar div {
          padding: 26px 30px !important;
          border-right: 1px solid #dfe5ef !important;
        }

        .rduk-job-detail-page .job-info-bar div:last-child {
          border-right: 0 !important;
        }

        .rduk-job-detail-page .job-info-bar span {
          display: block !important;
          margin-bottom: 8px !important;
          color: #6d7484 !important;
          font-size: 13px !important;
          font-weight: 800 !important;
          text-transform: uppercase !important;
          letter-spacing: .8px !important;
        }

        .rduk-job-detail-page .job-info-bar strong {
          font-size: 15px !important;
          font-weight: 800 !important;
          color: #06142f !important;
        }

        .rduk-job-detail-page .job-section {
          padding: 34px 40px !important;
          margin-bottom: 14px !important;
        }

        .rduk-job-detail-page .job-section h2 {
          margin: 0 0 22px !important;
          font-size: 28px !important;
          font-weight: 900 !important;
          color: #06142f !important;
          text-transform: none !important;
        }

        .rduk-job-detail-page .job-section p,
        .rduk-job-detail-page .job-section li {
          font-size: 17px !important;
          line-height: 1.75 !important;
          color: #151d31 !important;
        }

        .rduk-job-detail-page .job-section p {
          margin: 0 0 14px !important;
        }

        .rduk-job-detail-page .job-section ul {
          margin: 0 !important;
          padding-left: 22px !important;
        }

        .rduk-job-detail-page .job-section li {
          margin-bottom: 8px !important;
        }

        .rduk-job-detail-page .job-section li::marker {
          color: #0075ff !important;
        }

        .rduk-job-detail-page .apply-panel {
          margin-top: 28px !important;
          padding: 34px 40px !important;
          border: 1px solid #0075ff !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          gap: 35px !important;
        }

        .rduk-job-detail-page .actively-recruiting {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          color: #009e6b !important;
          text-transform: uppercase !important;
          letter-spacing: .8px !important;
          font-size: 18px !important;
          font-weight: 900 !important;
        }

        .rduk-job-detail-page .actively-recruiting span {
          width: 14px !important;
          height: 14px !important;
          background: #16c784 !important;
          border-radius: 50% !important;
          box-shadow: 0 0 0 4px rgba(22, 199, 132, .18) !important;
          display: inline-block !important;
        }

        .rduk-job-detail-page .apply-btn {
          min-width: 360px !important;
          text-align: center !important;
          background: linear-gradient(180deg, #ffe384 0%, #e4a914 100%) !important;
          color: #06142f !important;
          border: 1px solid #d79a00 !important;
          border-radius: 8px !important;
          padding: 22px 34px !important;
          font-size: 26px !important;
          font-weight: 900 !important;
          text-decoration: none !important;
          box-shadow: 0 8px 18px rgba(228, 169, 20, 0.28) !important;
          display: inline-block !important;
        }

        @media (max-width: 768px) {
          .rduk-job-detail-page {
            padding: 35px 16px 45px !important;
          }
          
          .rduk-job-detail-page .job-title-area h1 {
            font-size: 36px !important;
          }
          
          .rduk-job-detail-page .job-location,
          .rduk-job-detail-page .job-summary,
          .rduk-job-detail-page .job-section h2 {
            font-size: 20px !important;
          }
          
          .rduk-job-detail-page .job-info-bar {
            grid-template-columns: 1fr !important;
          }
          
          .rduk-job-detail-page .job-info-bar div {
            border-right: 0 !important;
            border-bottom: 1px solid #dfe5ef !important;
            padding: 18px 20px !important;
          }
          
          .rduk-job-detail-page .job-info-bar div:last-child {
            border-bottom: 0 !important;
          }
          
          .rduk-job-detail-page .job-section {
            padding: 24px 20px !important;
          }
          
          .rduk-job-detail-page .apply-panel {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 24px 20px !important;
            gap: 20px !important;
          }
          
          .rduk-job-detail-page .apply-btn {
            min-width: unset !important;
            width: 100% !important;
          }
        }
        `
      }} />
    </div>
  );
}
