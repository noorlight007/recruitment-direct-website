"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Zap,
  ArrowRight,
  ChevronRight,
  Newspaper,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function NewsPage() {
  return (
    <div className="min-h-screen news-page">
      <style jsx global>{`
        .news-page {
          background-color: #ffffff !important;
          background-image: none !important;
          font-family: 'Inter', 'Poppins', sans-serif;
        }
        
        .news-page-content h1,
        .news-page-content h2,
        .news-page-content h3,
        .news-page-content h4,
        .news-page-content p,
        .news-page-content li,
        .news-page-content span {
          color: #0c0f19 !important;
        }

        .news-page-content .text-muted-dark {
          color: #475569 !important;
        }

        .news-page-content .btn-gold {
          color: #071424 !important;
          background: linear-gradient(135deg, #8a6417 0%, #c89528 24%, #f6d77d 50%, #c28b20 74%, #6f4b10 100%) !important;
          border: 2px solid #f7d98a !important;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.7),
            inset 0 -2px 0 rgba(70, 45, 5, 0.35),
            0 8px 18px rgba(184, 134, 11, 0.25) !important;
          transition: all 0.25s ease !important;
          font-weight: 800 !important;
          font-size: 16px !important;
          height: 56px !important;
          line-height: 56px !important;
          padding: 0 36px !important;
          border-radius: 8px !important;
          text-transform: uppercase !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          text-decoration: none !important;
          letter-spacing: 0.5px !important;
          gap: 8px !important;
        }

        .news-page-content .btn-gold span {
          color: #071424 !important;
        }

        .news-page-content .btn-gold:hover {
          filter: brightness(1.15) !important;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -2px 0 rgba(70, 45, 5, 0.4),
            0 10px 22px rgba(184, 134, 11, 0.38) !important;
          transform: translateY(-2px) !important;
        }

        .news-page-content .btn-gold:active {
          transform: scale(0.98) !important;
        }

        .news-page-content .bg-gold-light {
          background: linear-gradient(135deg, rgba(246, 215, 125, 0.08) 0%, rgba(200, 149, 40, 0.04) 100%);
          border: 1px solid rgba(200, 149, 40, 0.15);
        }

        .news-page-content .bg-gray-soft {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
        }
      `}</style>

      <Navbar />

      <div className="news-page-content">
        {/* Article Header */}
        <header className="pt-32 pb-12 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-dark">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold uppercase tracking-wider text-xs">
                  <Newspaper className="w-3.5 h-3.5" /> News & Insights
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-gray-400" />
                  RDUK Press Office
                </span>
              </div>

              {/* Title */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 leading-tight">
                Recruitment Direct UK Ltd Launches AI Hire Now: 24/7 Staff Ordering Powered by AI Candidate Skill Search
              </h1>

              {/* Sub-paragraph */}
              <p className="text-xl text-muted-dark leading-relaxed font-normal mb-0">
                Recruitment Direct UK Ltd has launched AI Hire Now, a new 24/7 staffing order and enquiry process designed to help employers request temporary, contract and permanent staff faster.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Article Body */}
        <main className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="space-y-8 text-base leading-relaxed text-muted-dark"
            >
              <p>
                The new feature allows existing clients to place staff orders online at any time, while new clients can submit staffing requirements and receive a follow-up from the Recruitment Direct consultant team to confirm prices, terms and next steps.
              </p>
              <p>
                Every AI Hire Now order or enquiry triggers AI Candidate Skill Search 24/7, helping identify suitable applicants before a consultant reviews the requirement.
              </p>

              {/* Section 1 */}
              <div className="pt-4">
                <h2 className="text-2xl font-bold font-heading mb-4 text-[#0c0f19]">
                  Built for Employers Who Need Staff Quickly
                </h2>
                <p>
                  Recruitment needs do not always happen during office hours. Employers often need urgent cover for sickness, holiday, project deadlines, shift gaps or increased workload.
                </p>
                <p>
                  AI Hire Now gives clients a faster way to tell Recruitment Direct what staff they need, where the role is based, when cover is required and what skills, tickets, licences or experience are needed.
                </p>
                <p>
                  Existing clients can use AI Hire Now to order staff 24/7.
                </p>
                <p>
                  New clients can also use the system to submit a staffing requirement, allowing the process to begin before a consultant contacts them to confirm pricing, terms and account setup.
                </p>
              </div>

              {/* Section 2 */}
              <div className="pt-4">
                <h2 className="text-2xl font-bold font-heading mb-4 text-[#0c0f19]">
                  AI Candidate Skill Search Starts Immediately
                </h2>
                <p>
                  The main benefit of AI Hire Now is speed.
                </p>
                <p>
                  When a staff order or enquiry is submitted, it triggers AI Candidate Skill Search 24/7. The requirement is matched against applicant data, helping identify suitable applicants based on skills, experience, location, availability, tickets and licences.
                </p>
                <p>
                  This means that by the time a consultant reviews the request, suitable applicants are already being highlighted and prepared for review.
                </p>
                <p>
                  Consultants remain in control of the final decision, including suitability checks, compliance, screening, submission and placement.
                </p>
              </div>

              {/* Section 3 */}
              <div className="pt-4">
                <h2 className="text-2xl font-bold font-heading mb-4 text-[#0c0f19]">
                  Supporting Temporary, Contract and Permanent Recruitment
                </h2>
                <p>
                  AI Hire Now supports employers looking for temporary, contract or permanent staff.
                </p>
                <p>
                  For temporary and contract recruitment, it helps speed up urgent staffing requests, shift cover, project-based work and ongoing workforce needs.
                </p>
                <p>
                  For permanent recruitment, it gives employers a simple way to submit vacancy details and start the recruitment process quickly.
                </p>
                <p>
                  The system is designed to support the consultant team by reducing delays, improving applicant matching and helping suitable applicants move through the process faster.
                </p>
              </div>

              {/* Section 4 */}
              <div className="pt-4">
                <h2 className="text-2xl font-bold font-heading mb-4 text-[#0c0f19]">
                  New Clients Can Start the Process Online
                </h2>
                <p>
                  New clients do not need to wait until office hours to make contact.
                </p>
                <p>
                  Through AI Hire Now, they can place a staff order or submit a staffing enquiry online. Once received, a Recruitment Direct consultant will contact the client to confirm the requirement, prices, terms and account setup before recruitment activity or placement is confirmed.
                </p>
                <p>
                  This gives new clients a quicker way to start the process while keeping the correct commercial and compliance checks in place.
                </p>
              </div>

              {/* Section 5 */}
              <div className="pt-4">
                <h2 className="text-2xl font-bold font-heading mb-4 text-[#0c0f19]">
                  Existing Clients Can Order Staff 24/7
                </h2>
                <p>
                  Existing clients can use AI Hire Now to order staff online at any time.
                </p>
                <p>
                  Once the order is submitted, AI Candidate Skill Search is triggered immediately, helping the consultant team review potential applicant matches faster.
                </p>
                <p>
                  This gives existing clients a more responsive way to request staff, especially when cover is needed urgently or outside normal office hours.
                </p>
              </div>

              {/* Section 6 */}
              <div className="pt-4">
                <h2 className="text-2xl font-bold font-heading mb-4 text-[#0c0f19]">
                  Consultant-Led Recruitment, Supported by AI
                </h2>
                <p>
                  Recruitment Direct UK Ltd uses AI to improve speed, organisation and applicant matching, but the recruitment process remains consultant-led.
                </p>
                <p>
                  AI supports the process by helping identify suitable applicants faster, organise information and speed up the early stages of recruitment.
                </p>
                <p>
                  The final review, client communication, compliance checks and submission process remain with the Recruitment Direct consultant team.
                </p>
              </div>

              {/* Section 7 */}
              <div className="pt-4">
                <h2 className="text-2xl font-bold font-heading mb-4 text-[#0c0f19]">
                  A Faster Way to Request Staff
                </h2>
                <p>
                  AI Hire Now has been developed to make the staffing process faster and easier for employers.
                </p>
                <p>
                  Whether a client needs urgent temporary cover, contract workers or permanent recruitment support, AI Hire Now provides a simple way to submit staffing requirements 24/7.
                </p>
                <p>
                  Every order or enquiry triggers AI Candidate Skill Search, helping Recruitment Direct identify suitable applicants earlier and support clients faster.
                </p>
              </div>

              {/* Action Box */}
              <div className="mt-12 p-8 rounded-2xl bg-gold-light text-center border border-gray-100">
                <h3 className="text-xl font-bold font-heading mb-4">
                  Need staff? Use AI Hire Now to submit your staffing requirement 24/7.
                </h3>
                <div className="mt-6">
                  <Link href="/ai-hire-now" className="btn-gold">
                    <span>AI Hire Now</span>
                    <ArrowRight className="w-4 h-4 text-[#071424]" />
                  </Link>
                </div>
              </div>

            </motion.article>
          </div>
        </main>
      </div>

      <Footer />
      <FloatingElements />
    </div>
  );
}
