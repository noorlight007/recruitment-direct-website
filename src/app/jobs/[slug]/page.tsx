import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import {
  extractIdFromSlug,
  createJobSlug,
  fetchJobById,
  getJobAdCleanTitle,
  getJobAdLocation,
  getJobAdPayRate,
  parsePayRate,
  getJobAdWorkType,
  formatJobType,
  getPostedTimeAgo,
  formatDate,
  JobDetails,
} from "@/lib/job-utils";

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const resolvedParams = await props.params;
  const numericId = extractIdFromSlug(resolvedParams.slug);

  if (!numericId) {
    return {
      title: "Job Opening | Recruitment Direct UK",
      description: "Search live vacancies across Scotland and the UK with Recruitment Direct UK.",
    };
  }

  const job = await fetchJobById(numericId);

  if (!job) {
    return {
      title: "Job Not Found | Recruitment Direct UK",
      description: "This vacancy is no longer active or has been filled.",
    };
  }

  const cleanTitle = getJobAdCleanTitle(job);
  const location = getJobAdLocation(job);
  const canonicalSlug = createJobSlug(job.title, location, job.adId);
  const canonicalUrl = `https://rd1.co.uk/jobs/${canonicalSlug}`;

  const plainDescription = (job.description || job.summary || `${cleanTitle} position located in ${location}. Apply now with Recruitment Direct UK.`)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const metaDescription = plainDescription.length > 155 ? `${plainDescription.slice(0, 152)}...` : plainDescription;
  const pageTitle = `${cleanTitle} — ${location} | Recruitment Direct UK`;

  return {
    title: pageTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: metaDescription,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: "https://rd1.co.uk/images/og-image.png",
          width: 1200,
          height: 630,
          alt: `${cleanTitle} - Recruitment Direct UK`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: metaDescription,
    },
  };
}

export default async function JobDetailPage(props: PageProps) {
  const resolvedParams = await props.params;
  const numericId = extractIdFromSlug(resolvedParams.slug);

  if (!numericId) {
    notFound();
  }

  const job = await fetchJobById(numericId);

  if (!job) {
    return (
      <div className="min-h-screen bg-white relative flex flex-col justify-between overflow-x-hidden">
        <FloatingElements />
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-[#f7f8fb] py-24 px-4">
          <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-xl font-bold text-red-700 shadow-md max-w-2xl text-center">
            This job vacancy is no longer available or has been filled.
            <div className="mt-4">
              <Link href="/job-search" className="text-[#006fff] hover:underline font-bold text-base">
                ← Return to Live Job Search
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const cleanTitle = getJobAdCleanTitle(job);
  const location = getJobAdLocation(job);
  const payRateObj = parsePayRate(getJobAdPayRate(job));
  const workType = getJobAdWorkType(job);
  const canonicalSlug = createJobSlug(job.title, location, job.adId);

  // Build JobPosting JSON-LD Schema
  const postDate = job.postAt ? new Date(job.postAt).toISOString() : new Date().toISOString();
  const expireDate = job.expireAt
    ? new Date(job.expireAt).toISOString()
    : new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString();

  let employmentTypeSchema = "TEMPORARY";
  if (workType.toLowerCase().includes("permanent")) {
    employmentTypeSchema = "FULL_TIME";
  } else if (workType.toLowerCase().includes("contract")) {
    employmentTypeSchema = "CONTRACTOR";
  } else if (workType.toLowerCase().includes("part")) {
    employmentTypeSchema = "PART_TIME";
  }

  const jobPostingSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: cleanTitle,
    description: job.description || job.summary || `<p>${cleanTitle} vacancy in ${location}.</p>`,
    datePosted: postDate,
    validThrough: expireDate,
    employmentType: employmentTypeSchema,
    hiringOrganization: {
      "@type": "Organization",
      name: "Recruitment Direct UK Ltd",
      sameAs: "https://rd1.co.uk",
      logo: "https://rd1.co.uk/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: location,
        addressRegion: "Scotland / UK",
        addressCountry: "GB",
      },
    },
    identifier: {
      "@type": "PropertyValue",
      name: "Recruitment Direct UK Ltd",
      value: job.adId.toString(),
    },
    directApply: true,
  };

  if (payRateObj.numericValue) {
    jobPostingSchema.baseSalary = {
      "@type": "MonetaryAmount",
      currency: "GBP",
      value: {
        "@type": "QuantitativeValue",
        value: payRateObj.numericValue,
        unitText: payRateObj.frequency.includes("hour") ? "HOUR" : "YEAR",
      },
    };
  }

  return (
    <div className="min-h-screen bg-white relative flex flex-col justify-between overflow-x-hidden">
      {/* Server-Rendered Google Jobs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      <FloatingElements />
      <Navbar />

      <main className="flex-grow bg-[#f7f8fb] text-[#06142f] pt-2 md:pt-0">
        <section className="rduk-job-detail-page">
          <div className="job-detail-container">
            <div className="back-link-wrapper">
              <Link href="/job-search" className="back-link">
                ← Back to Live Search
              </Link>
            </div>

            {/* Main Header Card */}
            <div className="job-card main-header-card">
              <div className="card-header-top">
                <div className="job-main">
                  <h1>{cleanTitle}</h1>
                  <p className="job-location">
                    <MapPin className="location-icon" />
                    {location}
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
                    <strong className="rate-amount">{payRateObj.amount}</strong>
                    {payRateObj.frequency && (
                      <span className="rate-frequency">{payRateObj.frequency}</span>
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
                  <div
                    className="section-content"
                    dangerouslySetInnerHTML={{
                      __html: job.description || job.summary || "No description provided.",
                    }}
                  />
                </div>

                {/* Duties Section Card */}
                {job.bulletPoints && job.bulletPoints.length > 0 && (
                  <div className="job-card section-card">
                    <h3>Duties &amp; Responsibilities</h3>
                    <div className="section-content">
                      <ul className="bullet-list">
                        {job.bulletPoints.map((bp, idx) => (
                          <li key={idx}>{bp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Sidebar metadata */}
              <div className="details-right">
                {/* Job Details Sidebar Card */}
                <div className="job-card sidebar-card">
                  <h3>Job Details</h3>
                  <div className="sidebar-details-list">
                    <div className="detail-item">
                      <span className="detail-label">Base Location</span>
                      <strong className="detail-value">{location}</strong>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Offered Rate</span>
                      <strong className="detail-value">{payRateObj.amount} {payRateObj.frequency}</strong>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Employment Type</span>
                      <strong className="detail-value">{workType || "Temporary"}</strong>
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
                      <strong className="contact-name">
                        {job.owner.firstName} {job.owner.lastName}
                      </strong>
                      {job.owner.jobTitle && (
                        <span className="contact-title">{job.owner.jobTitle}</span>
                      )}
                      {job.owner.email && (
                        <a href={`mailto:${job.owner.email}`} className="contact-link">
                          {job.owner.email}
                        </a>
                      )}
                      {(job.owner.phone || job.owner.mobile) && (
                        <a
                          href={`tel:${job.owner.phone || job.owner.mobile}`}
                          className="contact-link"
                        >
                          {job.owner.phone || job.owner.mobile}
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .rduk-job-detail-page {
            background: #f7f8fb !important;
            padding: 40px 20px 80px !important;
            font-family: var(--font-inter), Arial, sans-serif !important;
            color: #111111 !important;
          }

          .rduk-job-detail-page .job-detail-container {
            max-width: 1180px !important;
            margin: 0 auto !important;
          }

          .rduk-job-detail-page .back-link-wrapper {
            margin-bottom: 24px !important;
          }

          .rduk-job-detail-page .back-link {
            display: inline-flex !important;
            align-items: center !important;
            gap: 6px !important;
            font-size: 15px !important;
            font-weight: 700 !important;
            color: #001B5E !important;
            text-decoration: none !important;
            transition: transform 0.2s ease !important;
          }

          .rduk-job-detail-page .back-link:hover {
            transform: translateX(-3px) !important;
          }

          .rduk-job-detail-page .job-card {
            background: #ffffff !important;
            border: 1px solid #e0e3ea !important;
            border-radius: 12px !important;
            padding: 24px 28px !important;
            box-shadow: 0 8px 22px rgba(6, 20, 47, 0.04) !important;
            margin-bottom: 24px !important;
          }

          .rduk-job-detail-page .main-header-card {
            border-top: 4px solid #001B5E !important;
          }

          .rduk-job-detail-page .card-header-top {
            display: flex !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            gap: 20px !important;
            margin-bottom: 20px !important;
          }

          .rduk-job-detail-page .job-main {
            flex: 1 !important;
          }

          .rduk-job-detail-page .job-main h1 {
            margin: 0 0 8px !important;
            font-size: 28px !important;
            font-weight: 800 !important;
            color: #111111 !important;
            line-height: 1.25 !important;
          }

          .rduk-job-detail-page .job-location {
            display: flex !important;
            align-items: center !important;
            gap: 6px !important;
            margin: 0 0 12px !important;
            font-size: 17px !important;
            font-weight: 600 !important;
            color: #444444 !important;
          }

          .rduk-job-detail-page .location-icon {
            width: 18px !important;
            height: 18px !important;
            color: #001B5E !important;
          }

          .rduk-job-detail-page .job-tags {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 8px !important;
            margin-bottom: 12px !important;
          }

          .rduk-job-detail-page .job-tag {
            font-size: 13px !important;
            font-weight: 700 !important;
            padding: 4px 12px !important;
            border-radius: 6px !important;
            display: inline-flex !important;
            align-items: center !important;
            white-space: nowrap !important;
            background-color: #EEF2F7 !important;
            color: #374151 !important;
            border: 1px solid #e2e8f0 !important;
          }

          .rduk-job-detail-page .posted-time {
            font-size: 14px !important;
            color: #6b7280 !important;
            display: inline-block !important;
          }

          .rduk-job-detail-page .rate-container {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-end !important;
            text-align: right !important;
          }

          .rduk-job-detail-page .rate-amount {
            font-size: 24px !important;
            font-weight: 800 !important;
            color: #001B5E !important;
            line-height: 1.1 !important;
          }

          .rduk-job-detail-page .rate-frequency {
            font-size: 14px !important;
            color: #4b5563 !important;
            font-weight: 600 !important;
          }

          .rduk-job-detail-page .card-header-bottom {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 16px !important;
            border-top: 1px solid #f1f3f7 !important;
            padding-top: 20px !important;
          }

          .rduk-job-detail-page .apply-now-btn {
            background: linear-gradient(135deg, #F4C542 0%, #D4A017 100%) !important;
            color: #06142f !important;
            padding: 12px 28px !important;
            font-size: 16px !important;
            font-weight: 800 !important;
            border-radius: 8px !important;
            text-decoration: none !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-shadow: 0 4px 12px rgba(212, 160, 23, 0.3) !important;
            transition: all 0.2s ease !important;
          }

          .rduk-job-detail-page .apply-now-btn:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 16px rgba(212, 160, 23, 0.4) !important;
          }

          .rduk-job-detail-page .button-arrow {
            width: 18px !important;
            height: 18px !important;
            margin-left: 6px !important;
            stroke-width: 3px !important;
          }

          .rduk-job-detail-page .actively-recruiting {
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            color: #059669 !important;
            font-size: 14px !important;
          }

          .rduk-job-detail-page .pulse-dot {
            width: 8px !important;
            height: 8px !important;
            background-color: #059669 !important;
            border-radius: 50% !important;
            animation: pulse 2s infinite !important;
          }

          @keyframes pulse {
            0% { transform: scale(0.95); opacity: 0.8; }
            50% { transform: scale(1.3); opacity: 1; }
            100% { transform: scale(0.95); opacity: 0.8; }
          }

          .rduk-job-detail-page .details-grid {
            display: grid !important;
            grid-template-columns: 2fr 1fr !important;
            gap: 24px !important;
          }

          .rduk-job-detail-page .section-card h3,
          .rduk-job-detail-page .sidebar-card h3 {
            font-size: 20px !important;
            font-weight: 800 !important;
            color: #001B5E !important;
            margin: 0 0 16px !important;
            padding-bottom: 10px !important;
            border-bottom: 2px solid #f1f3f7 !important;
          }

          .rduk-job-detail-page .section-content {
            font-size: 15px !important;
            line-height: 1.7 !important;
            color: #374151 !important;
          }

          .rduk-job-detail-page .bullet-list {
            margin: 0 !important;
            padding-left: 20px !important;
            list-style-type: disc !important;
          }

          .rduk-job-detail-page .bullet-list li {
            margin-bottom: 8px !important;
          }

          .rduk-job-detail-page .sidebar-details-list {
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
          }

          .rduk-job-detail-page .detail-item {
            display: flex !important;
            flex-direction: column !important;
            gap: 2px !important;
          }

          .rduk-job-detail-page .detail-label {
            font-size: 12px !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
            color: #6b7280 !important;
          }

          .rduk-job-detail-page .detail-value {
            font-size: 15px !important;
            font-weight: 700 !important;
            color: #111111 !important;
          }

          .rduk-job-detail-page .contact-details {
            display: flex !important;
            flex-direction: column !important;
            gap: 6px !important;
          }

          .rduk-job-detail-page .contact-name {
            font-size: 16px !important;
            font-weight: 800 !important;
            color: #111111 !important;
          }

          .rduk-job-detail-page .contact-title {
            font-size: 13px !important;
            color: #6b7280 !important;
          }

          .rduk-job-detail-page .contact-link {
            font-size: 14px !important;
            font-weight: 600 !important;
            color: #001B5E !important;
            text-decoration: underline !important;
          }

          @media (max-width: 868px) {
            .rduk-job-detail-page .details-grid {
              grid-template-columns: 1fr !important;
            }

            .rduk-job-detail-page .card-header-top {
              flex-direction: column !important;
              align-items: flex-start !important;
            }

            .rduk-job-detail-page .rate-container {
              align-items: flex-start !important;
              text-align: left !important;
            }

            .rduk-job-detail-page .card-header-bottom {
              flex-direction: column !important;
              align-items: stretch !important;
            }

            .rduk-job-detail-page .apply-now-btn {
              width: 100% !important;
            }
          }
          `,
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
