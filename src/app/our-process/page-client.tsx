"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  Zap,
  ArrowRight,
  ClipboardList,
  Search,
  UserCheck,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function OurProcessPage() {
  return (
    <div className="min-h-screen our-process-page">
      <style jsx global>{`
        .our-process-page {
          background-color: #ffffff !important;
          background-image: none !important;
          font-family: var(--font-inter), var(--font-poppins), sans-serif;
        }
        
        .our-process-page-content h1,
        .our-process-page-content h2,
        .our-process-page-content h3,
        .our-process-page-content h4,
        .our-process-page-content p,
        .our-process-page-content li,
        .our-process-page-content span,
        .our-process-page-content div.step-num {
          color: #0c0f19 !important;
        }

        .our-process-page-content .text-muted-dark {
          color: #475569 !important;
        }

        .our-process-page-content .btn-gold {
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

        .our-process-page-content .btn-gold span {
          color: #071424 !important;
        }

        .our-process-page-content .btn-gold:hover {
          filter: brightness(1.15) !important;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -2px 0 rgba(70, 45, 5, 0.4),
            0 10px 22px rgba(184, 134, 11, 0.38) !important;
          transform: translateY(-2px) !important;
        }

        .our-process-page-content .btn-gold:active {
          transform: scale(0.98) !important;
        }

        .our-process-page-content .btn-outline-dark {
          color: #0c0f19 !important;
          background: transparent !important;
          border: 2px solid #0c0f19 !important;
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

        .our-process-page-content .btn-outline-dark span {
          color: #0c0f19 !important;
        }

        .our-process-page-content .btn-outline-dark:hover {
          background-color: #0c0f19 !important;
          transform: translateY(-2px) !important;
        }

        .our-process-page-content .btn-outline-dark:hover span {
          color: #ffffff !important;
        }

        .our-process-page-content .bg-gold-light {
          background: linear-gradient(135deg, rgba(246, 215, 125, 0.08) 0%, rgba(200, 149, 40, 0.04) 100%);
          border: 1px solid rgba(200, 149, 40, 0.15);
        }

        .our-process-page-content .bg-gray-soft {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
        }
        
        .our-process-page-content .step-num {
          font-family: var(--font-poppins), sans-serif;
          font-weight: 800;
          color: #8a6417 !important;
          background-color: rgba(200, 149, 40, 0.1);
          border: 1px solid rgba(200, 149, 40, 0.2);
        }
      `}</style>

      <Navbar />

      <div className="our-process-page-content">
        {/* Hero Header */}
        <header className="pt-32 pb-16 border-b border-gray-100 bg-[#ffffff]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 leading-none">
                Our Process
              </h1>
              <p className="text-xl md:text-2xl text-muted-dark max-w-3xl mx-auto leading-relaxed font-normal">
                Recruitment Direct UK Ltd has built a recruitment process designed around speed, compliance and clear communication.
              </p>
              <div className="mt-4 text-base text-muted-dark max-w-3xl mx-auto leading-relaxed">
                Our process supports new clients, existing clients and applicants, using experienced consultants alongside AI-supported recruitment technology to improve response times, reduce administration and help suitable applicants move through the process faster.
              </div>
            </motion.div>
          </div>
        </header>

        {/* Workflow 1: New Client */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <ClipboardList className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-3xl font-extrabold font-heading">
                New Client Order and Onboarding Workflow
              </h2>
            </div>

            <div className="space-y-12 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-100">
              {[
                {
                  title: "1. New Client Places a Staff Order or Enquiry",
                  desc: "New clients can use AI Hire Now to place a staff order or submit a staffing enquiry 24/7. The client tells us what staff they need, where the role is based, when they need cover to start, the shift pattern, pay rate, required skills, tickets, licences, experience and any site-specific requirements. This allows the process to begin immediately, even if the client has not worked with Recruitment Direct UK Ltd before."
                },
                {
                  title: "2. AI Candidate Skill Search Is Triggered 24/7",
                  desc: "When the staff order or enquiry is submitted, it triggers AI Candidate Skill Search 24/7. The requirement is matched against applicant data straight away, helping identify suitable applicants before a consultant reviews the request."
                },
                {
                  title: "3. Consultant Reviews the Requirement",
                  desc: "A consultant reviews the staff order or enquiry, checks the role details and reviews any applicant matches identified through AI Candidate Skill Search. This gives the consultant a faster starting point when speaking with the new client."
                },
                {
                  title: "4. Consultant Confirms Prices, Terms and Next Steps",
                  desc: "The consultant contacts the new client to confirm the staffing requirement, charge rates, pay rates, service terms, timescales and any role-specific details. This ensures the client understands the prices and process before recruitment activity or any placement is confirmed."
                },
                {
                  title: "5. Terms of Business and Account Setup",
                  desc: "For new clients, Recruitment Direct UK Ltd issues the relevant Terms of Business and completes the account opening process. This includes company details, invoicing information, payment terms and any required account checks."
                },
                {
                  title: "6. Recruitment Activity Proceeds",
                  desc: "Once prices, terms and account setup are confirmed, the consultant proceeds with recruitment activity. This includes reviewing applicants already highlighted by AI Candidate Skill Search, contacting suitable applicants, placing adverts where required, completing compliance checks and preparing applicants for submission."
                },
                {
                  title: "7. Submission or Placement",
                  desc: "Suitable applicants are reviewed by the consultant before being submitted to the client or confirmed for placement. Consultants remain in control of final suitability checks, compliance and client submission."
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 relative"
                >
                  <div className="w-12 h-12 rounded-full step-num flex items-center justify-center flex-shrink-0 z-10 text-lg">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-heading">{step.title}</h3>
                    <p className="text-base text-muted-dark leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow 2: Existing Client */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10 pb-4 border-b border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-extrabold font-heading">
                Existing Client Staffing Workflow
              </h2>
            </div>

            <div className="space-y-12 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-200">
              {[
                {
                  title: "1. Existing Client Places a Staff Order 24/7",
                  desc: "Existing clients use AI Hire Now to order staff 24/7. The client submits the staffing requirement online, including role details, location, start date, shift pattern, pay rate, required skills, tickets, licences, experience and any assignment information."
                },
                {
                  title: "2. AI Candidate Skill Search Is Triggered 24/7",
                  desc: "When the staff order is submitted, it triggers AI Candidate Skill Search 24/7. The requirement is matched against applicant data immediately, helping identify suitable applicants before the consultant reviews the order."
                },
                {
                  title: "3. Consultant Reviews the Order",
                  desc: "The consultant reviews the order, checks the client requirement and reviews the applicant matches identified by AI Candidate Skill Search. This helps the consultant respond faster and prioritise suitable applicants."
                },
                {
                  title: "4. Applicant Contact and Screening",
                  desc: "Suitable applicants are contacted quickly using AI-supported communication and consultant-led screening. This includes availability checks, role-specific questions, WhatsApp or SMS communication and document upload requests where required."
                },
                {
                  title: "5. Compliance and Documentation",
                  desc: "Before submission or placement, RDUK checks the required applicant documentation. This includes right-to-work evidence, ID, licences, tickets, qualifications, references, assignment details and any role-specific compliance requirements."
                },
                {
                  title: "6. Submission, Advert Placement or Further Search",
                  desc: "If suitable applicants are available, the consultant submits them to the client for review. If more applicants are required, RDUK places an advert, continues database searching and uses AI-supported applicant contact to speed up the process."
                },
                {
                  title: "7. Placement Confirmation",
                  desc: "Once the client confirms the worker or applicant, RDUK confirms the assignment details. This includes start date, shift pattern, location, pay and charge details, reporting instructions and any client-specific requirements."
                },
                {
                  title: "8. Ongoing Support",
                  desc: "RDUK continues to support the client and applicant during the assignment. This includes timesheet support, document updates, shift changes, attendance queries, payroll information and general communication with the consultant team."
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 relative"
                >
                  <div className="w-12 h-12 rounded-full step-num flex items-center justify-center flex-shrink-0 z-10 text-lg">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-heading">{step.title}</h3>
                    <p className="text-base text-muted-dark leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow 3: Applicant Process */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-3xl font-extrabold font-heading">
                Applicant Process
              </h2>
            </div>

            <div className="space-y-12 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-100">
              {[
                {
                  title: "1. Apply for a Role",
                  desc: "Applicants apply for available roles through our job adverts, website, job boards or direct communication with Recruitment Direct UK Ltd. Once an application is received, our team begins reviewing suitability for the role."
                },
                {
                  title: "2. AI-Supported Applicant Contact",
                  desc: "Applicants are contacted quickly using our AI-supported recruitment process. This speeds up response times and supports screening outside normal office hours."
                },
                {
                  title: "3. Role-Specific Screening",
                  desc: "Applicants are asked role-specific questions linked to the vacancy. This includes experience, skills, tickets, licences, availability, location, transport, shift preference and any other key requirements for the role."
                },
                {
                  title: "4. Traffic-Light Screening Result",
                  desc: "Screening responses are organised into a traffic-light result to help consultants review applications faster. Green applicants move forward for consultant review, while amber or red results require further checking or do not match the role requirements."
                },
                {
                  title: "5. Secure Document Upload",
                  desc: "Where required, suitable applicants receive a secure upload link to provide documents. This includes ID, right-to-work evidence, licences, tickets, qualifications, certificates or other documents needed for the role."
                },
                {
                  title: "6. Consultant Review",
                  desc: "Our consultants review the applicant’s information before any submission or placement. AI supports the process, but the final review remains with the consultant team."
                },
                {
                  title: "7. Client Submission or Placement",
                  desc: "If suitable, the applicant is submitted to the client or moved forward for placement. Applicants are given relevant information about the role, location, start date, shift pattern, pay rate and any assignment requirements before starting."
                },
                {
                  title: "8. Ongoing Communication",
                  desc: "RDUK continues to support applicants throughout the recruitment process and, where applicable, during their assignment. This includes updates, document queries, timesheet support, shift information and communication with the consultant team."
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 relative"
                >
                  <div className="w-12 h-12 rounded-full step-num flex items-center justify-center flex-shrink-0 z-10 text-lg">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-heading">{step.title}</h3>
                    <p className="text-base text-muted-dark leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI-Supported, Consultant-Led Recruitment Section */}
        <section className="py-20 bg-gold-light border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f6d77d]/20 border border-[#c89528]/30 mb-6">
                <Zap className="w-4 h-4 text-[#8a6417]" />
                <span className="text-sm font-bold uppercase tracking-wider text-[#8a6417]">AI Supported & Consultant Led</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 font-heading">
                AI-Supported, Consultant-Led Recruitment
              </h2>
              
              <div className="space-y-6 text-base text-muted-dark max-w-3xl mx-auto leading-relaxed text-left md:text-center">
                <p>
                  Our process uses AI to improve speed, organisation and communication, but our consultants remain at the centre of recruitment decisions.
                </p>
                <p>
                  Every AI Hire Now staff order or enquiry triggers AI Candidate Skill Search 24/7, helping suitable applicants be identified earlier and prepared for consultant review.
                </p>
                <p>
                  AI supports faster matching, communication, screening and document collection, while our consultant team checks suitability, compliance and client requirements before submission or placement.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Start the Process (Final CTA) */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold mb-6 font-heading">
                Start the Process
              </h2>
              
              <div className="space-y-4 text-base text-muted-dark max-w-2xl mx-auto leading-relaxed mb-10 text-left md:text-center">
                <p>
                  New clients can use AI Hire Now to place a staff order or submit a staffing enquiry 24/7. Our consultant team will contact you to confirm prices, terms, account setup and next steps before recruitment activity or placement is confirmed.
                </p>
                <p>
                  Existing clients can use AI Hire Now to order staff 24/7, triggering AI Candidate Skill Search immediately so suitable applicants are identified and prepared for consultant review.
                </p>
                <p>
                  Applicants can apply for live vacancies and complete the screening and document process when contacted by our team.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/ai-hire-now" className="btn-gold">
                  <span>AI Hire Now</span>
                  <ArrowRight className="w-4 h-4 text-[#071424]" />
                </Link>
                <Link href="/job_details" className="btn-outline-dark">
                  <span>Search Jobs</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
      <FloatingElements />
    </div>
  );
}
