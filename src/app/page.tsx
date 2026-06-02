"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Previous sections from component folder
import HeroSection from "@/components/HeroSection";
import TrustTechSection from "@/components/TrustTechSection";
import HowWeDeliverSection from "@/components/HowWeDeliverSection";
import AIFlowSection from "@/components/AIFlowSection";
import AIProductsSection from "@/components/AIProductsSection";
import EliteAISection from "@/components/EliteAISection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GeneralSection from "@/components/GeneralSection";
import SectorsSection from "@/components/SectorsSection";
import TrustedBySection from "@/components/TrustedBySection";
import SearchJobsSection from "@/components/SearchJobsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Brand New Inline Landing Section */}
      <main className="rd-landing">
        <style dangerouslySetInnerHTML={{ __html: `
          .rd-hero h1 {
            font-size: clamp(34.68px, 5.06vw, 63.58px) !important;
          }
          .rd-sector-card {
            aspect-ratio: 3 / 2 !important;
            min-height: auto !important;
            background-size: cover !important;
            background-position: center !important;
          }
          @media (max-width: 768px) {
            // .rd-sectors h2 {
            //   margin-bottom: 16px !important;
            // }
            .rd-sector-grid {
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
              gap: 16px !important;
            }
            .rd-team-card img {
              width: 240px !important;
              height: 240px !important;
            }
          }
        ` }} />

        {/* HERO */}
        <section className="rd-hero">
          <div className="rd-overlay"></div>
          <div className="rd-container rd-hero-content">
            <h1>Recruitment Across the UK</h1>
            <h2>Trusted Supplier Since 2006</h2>
            <p>Connecting employers with quality temporary, contract and permanent staff across the UK.</p>

            <div className="rd-button-grid" style={{ justifyContent: "center" }}>
              <a href="/ai-hire-now" className="rd-btn rd-btn-gold">AI HIRE NOW</a>
              <a href="/contact" className="rd-btn rd-btn-gold">PLACE ENQUIRY</a>
              <a href="/job-search" className="rd-btn rd-btn-outline">JOB SEARCH</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setIsVideoOpen(true); }} className="rd-btn rd-btn-outline">WATCH AI CALL</a>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="rd-trust">
          <div className="rd-container rd-trust-grid">
            <div>Framework Approved</div>
            <div>UK Wide Coverage</div>
            <div>100% Compliance</div>
            <div>Multi-Sector Expertise</div>
          </div>
        </section>

        {/* SECTORS */}
        <section className="rd-sectors">
          <div className="rd-container">
            <h2>Sectors We Support</h2>

            <div className="rd-sector-grid">
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Cons.png')" }}>
              {/* <span>Construction</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Renewabless.png')" }}>
              {/* <span>Renewables</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Engineerings.png')" }}>
              {/* <span>Engineering</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Logisticss.png')" }}>
              {/* <span>Logistics</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Healthcares.png')" }}>
              {/* <span>Healthcare</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Educations.png')" }}>
              {/* <span>Education</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Hospitalitys.png')" }}>
              {/* <span>Hospitality</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Businesssss.png')" }}>
              {/* <span>Business Support &amp; IT</span> */}
              </div>
            </div>
          </div>
        </section>

        {/* PREMIUM SECTION */}
        <section className="rd-premium-section">

          <div className="rd-hero">
            <div className="rd-hero-content">
              <h1>
                Recruitment Solutions That
                <span>Deliver Results</span>
              </h1>

              <p>Temporary, contract and permanent recruitment solutions across the UK.</p>

              <div className="rd-hero-actions">
                <div>
                  <a href="/ai-hire-now" className="rd-btn rd-btn-gold">AI HIRE NOW</a>
                  <small>Fast-track your staff request.</small>
                </div>

                <div>
                  <a href="/request-staff" className="rd-btn rd-btn-outline">REQUEST STAFF</a>
                  <small>Speak directly with our team.</small>
                </div>
              </div>
            </div>

            <div className="rd-hero-image">
              <img src="/images/steven-peddie.jpg" alt="Steven, Director" />
              <div className="rd-steven-label">
                <strong>Steven</strong>
                <span>Director</span>
              </div>
            </div>
          </div>

          <div className="rd-process">
            <h2>Our Recruitment Process</h2>

            <div className="rd-process-flow">
              <span>Applicant Applies</span>
              <b>→</b>
              <span>AI Screening</span>
              <b>→</b>
              <span>Consultant Review</span>
              <b>→</b>
              <span>Compliance Checks</span>
              <b>→</b>
              <span>Submitted to Client</span>
            </div>
          </div>

          <div className="rd-team">
            <div className="rd-team-heading">
              <h2>Your Recruitment Team</h2>
            </div>

            <div className="consultant-card">
              <img src="/images/nicola.jpg" alt="Nicola" />
              <div className="rd-team-info">
                <h3>Nicola</h3>
                <span>Manager</span>
                <p>Overseeing recruitment delivery, compliance and client service.</p>
              </div>
            </div>

            <div className="consultant-card">
              <img src="/images/olia.jpg" alt="Olia" style={{ objectFit: 'cover' }} />
              <div className="rd-team-info">
                <h3>Olia</h3>
                <span>Consultant</span>
                <p>Supporting applicants throughout the recruitment process.</p>
              </div>
            </div>
          </div>

          <div className="rd-contact">
            <div>
              <span>CALL US</span>
              <a href="tel:01324623198">01324 623198</a>
            </div>

            <div>
              <span>WHATSAPP</span>
              <a href="https://wa.me/447590882626">Start Conversation</a>
            </div>

            <div>
              <span>EMAIL US</span>
              <a href="mailto:sales@rd1.co.uk">sales@rd1.co.uk</a>
            </div>
          </div>

        </section>

        <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --rd-black: #111111;
          --rd-grey: #5f6368;
          --rd-brass: #c8a24a;
          --rd-border: #e8e8e8;
          --rd-white: #ffffff;
        }

        .rd-premium-section {
          background: var(--rd-white);
          color: var(--rd-black);
          font-family: inherit;
        }

        .rd-premium-section .rd-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 640px;
          border-bottom: 1px solid var(--rd-border);
          overflow: hidden;
          background: none !important;
        }

        .rd-premium-section .rd-hero-content {
          padding: 90px 6vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 2;
        }

        .rd-premium-section .rd-hero-content h1 {
          margin: 0 0 28px !important;
          font-size: clamp(42px, 5.5vw, 76px) !important;
          line-height: 1.05 !important;
          font-weight: 800 !important;
          text-transform: uppercase !important;
          color: var(--rd-black) !important;
          white-space: normal !important;
          letter-spacing: normal !important;
        }

        .rd-premium-section .rd-hero-content h1 span {
          display: block;
          color: var(--rd-brass) !important;
        }

        .rd-premium-section .rd-hero-content p {
          margin: 0 !important;
          max-width: 560px;
          font-size: 21px !important;
          line-height: 1.5 !important;
          color: var(--rd-black) !important;
        }

        .rd-premium-section .rd-hero-actions {
          display: flex;
          gap: 30px;
          margin-top: 42px;
        }

        .rd-premium-section .rd-hero-actions div {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .rd-premium-section .rd-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 210px;
          padding: 17px 30px;
          border-radius: 6px;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: all 0.25s ease;
          border: 1.5px solid transparent !important;
          background: none !important;
          box-shadow: none !important;
          gap: 0 !important;
          height: auto !important;
        }

        .rd-premium-section .rd-btn-gold {
          background: var(--rd-brass) !important;
          color: var(--rd-black) !important;
          border: 1px solid var(--rd-brass) !important;
        }

        .rd-premium-section .rd-btn-outline {
          background: transparent !important;
          color: var(--rd-black) !important;
          border: 1px solid var(--rd-brass) !important;
        }

        .rd-premium-section .rd-btn:hover {
          background: var(--rd-black) !important;
          color: var(--rd-white) !important;
          border-color: var(--rd-black) !important;
        }

        .rd-premium-section .rd-hero-actions small {
          font-size: 15px;
          color: var(--rd-black);
        }

        .rd-premium-section .rd-hero-image {
          position: relative;
          min-height: 640px;
        }

        .rd-premium-section .rd-hero-image img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center !important;
          border-radius: 0 !important;
          border: none !important;
        }

        .rd-premium-section .rd-hero-image::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            #ffffff 0%,
            rgba(255,255,255,0.85) 14%,
            rgba(255,255,255,0.15) 38%,
            rgba(255,255,255,0) 55%
          );
          z-index: 1;
        }

        .rd-premium-section .rd-steven-label {
          position: absolute;
          top: 70px;
          left: 70px;
          color: var(--rd-black);
          z-index: 2;
        }

        .rd-premium-section .rd-steven-label strong {
          display: block;
          font-size: 24px;
          font-weight: 800;
        }

        .rd-premium-section .rd-steven-label span {
          display: block;
          color: var(--rd-brass);
          font-size: 16px;
          margin-top: 6px;
        }

        .rd-premium-section .rd-steven-label::after {
          content: "";
          display: block;
          width: 130px;
          height: 2px;
          background: var(--rd-brass);
          margin-top: 10px;
        }

        .rd-premium-section .rd-process {
          padding: 70px 6vw;
          border-bottom: 1px solid var(--rd-border);
        }

        .rd-premium-section .rd-process h2 {
          margin: 0 0 34px !important;
          text-transform: uppercase;
          font-size: 30px !important;
          font-weight: 800 !important;
          color: var(--rd-black) !important;
        }

        .rd-premium-section .rd-process-flow {
          display: flex;
          align-items: center;
          gap: 26px;
          flex-wrap: wrap;
          font-size: 18px;
          font-weight: 600;
          color: var(--rd-black) !important;
        }

        .rd-premium-section .rd-process-flow b {
          color: var(--rd-brass);
          font-size: 34px;
          font-weight: 400;
        }

        .rd-premium-section .rd-team {
          display: grid;
          grid-template-columns: 1.1fr 1fr 1fr;
          gap: 34px;
          padding: 80px 6vw;
          align-items: center;
          border-bottom: 1px solid var(--rd-border);
          background: none !important;
        }

        .rd-premium-section .rd-team-heading h2 {
          margin: 0 !important;
          text-transform: uppercase;
          color: var(--rd-black) !important;
          font-size: 32px !important;
          font-weight: 800 !important;
        }

        .rd-premium-section .rd-team-card,
        .rd-premium-section .consultant-card {
          background: #ffffff !important;
          border: 1px solid var(--rd-border) !important;
          border-radius: 10px !important;
          overflow: hidden !important;
          box-shadow: 0 16px 38px rgba(0,0,0,0.06) !important;
          padding: 0 !important;
          text-align: left !important;
          transform: none !important;
        }

        .rd-premium-section .rd-team-card img {
          width: 100% !important;
          height: 620px !important;
          object-fit: cover !important;
          object-position: center !important;
          display: block !important;
          border-radius: 0 !important;
          border: none !important;
          margin: 0 !important;
        }

        .rd-premium-section .rd-team-info {
          padding: 26px !important;
        }

        .rd-premium-section .rd-team-info h3 {
          margin: 0 0 6px !important;
          font-size: 30px !important;
          font-weight: 800 !important;
          color: var(--rd-black) !important;
        }

        .rd-premium-section .rd-team-info span {
          color: var(--rd-brass) !important;
          font-size: 18px !important;
          font-weight: 700 !important;
        }

        .rd-premium-section .rd-team-info span::after {
          content: "";
          display: block;
          width: 42px;
          height: 2px;
          background: var(--rd-brass);
          margin: 12px 0 16px;
        }

        .rd-premium-section .rd-team-info p {
          margin: 0 !important;
          font-size: 16px !important;
          line-height: 1.6 !important;
          color: var(--rd-black) !important;
        }

        .rd-premium-section .rd-contact {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 55px 6vw;
          gap: 30px;
          background: none !important;
          color: var(--rd-black) !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          overflow: visible !important;
          position: static !important;
          backdrop-filter: none !important;
        }

        .rd-premium-section .rd-contact div {
          border-right: 1px solid var(--rd-border) !important;
          padding-right: 30px !important;
          background: none !important;
          box-shadow: none !important;
          border-left: none !important;
          border-top: none !important;
          border-bottom: none !important;
          border-radius: 0 !important;
          padding: 0 !important;
        }

        .rd-premium-section .rd-contact div:last-child {
          border-right: none !important;
        }

        .rd-premium-section .rd-contact span {
          display: block;
          margin-bottom: 12px !important;
          color: var(--rd-brass) !important;
          font-size: 16px !important;
          font-weight: 800 !important;
          letter-spacing: 0.08em !important;
          position: static !important;
        }

        .rd-premium-section .rd-contact a {
          color: var(--rd-black) !important;
          font-size: 28px !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          background: none !important;
          padding: 0 !important;
          border-radius: 0 !important;
          border: none !important;
        }

        .rd-premium-section .rd-contact a:hover {
          color: var(--rd-brass) !important;
        }

        @media (max-width: 900px) {
          .rd-premium-section .rd-hero {
            grid-template-columns: 1fr;
          }

          .rd-premium-section .rd-hero-content {
            padding: 50px 24px !important;
          }

          .rd-premium-section .rd-hero-content h1 {
            font-size: clamp(32px, 7vw, 48px) !important;
            margin-bottom: 18px !important;
          }

          .rd-premium-section .rd-hero-content p {
            font-size: 18px !important;
          }

          .rd-premium-section .rd-hero-image {
            min-height: 460px;
          }

          .rd-premium-section .rd-steven-label {
            top: 30px !important;
            left: 30px !important;
          }

          .rd-premium-section .rd-steven-label strong {
            font-size: 20px !important;
          }

          .rd-premium-section .rd-steven-label span {
            font-size: 14px !important;
          }

          .rd-premium-section .rd-hero-actions {
            flex-direction: column;
            gap: 20px !important;
            margin-top: 30px !important;
          }

          .rd-premium-section .rd-btn {
            min-width: 100% !important;
            padding: 14px 24px !important;
          }

          .rd-premium-section .rd-process {
            padding: 60px 24px;
          }

          .rd-premium-section .rd-process-flow {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
            font-size: 16px !important;
          }

          .rd-premium-section .rd-process-flow b {
            transform: rotate(90deg);
            font-size: 28px;
            margin: 0 0 0 10px !important;
            display: inline-block !important;
          }

          .rd-premium-section .rd-team {
            grid-template-columns: 1fr;
            padding: 60px 24px !important;
            gap: 24px !important;
          }

          .rd-premium-section .consultant-card img,
          .rd-premium-section .rd-team-card img {
            height: 380px !important;
          }

          .rd-premium-section .rd-team-info h3 {
            font-size: 26px !important;
          }

          .rd-premium-section .rd-contact {
            grid-template-columns: 1fr;
            padding: 45px 24px;
          }

          .rd-premium-section .rd-contact div {
            border-right: none !important;
            border-bottom: 1px solid var(--rd-border) !important;
            padding-bottom: 24px !important;
          }

          .rd-premium-section .rd-contact div:last-child {
            border-bottom: none !important;
          }

          .rd-premium-section .rd-contact a {
            font-size: 24px !important;
          }
        }
        ` }} />

        {/* TESTIMONIALS */}
        <section className="rd-testimonials-section">
          <div className="rd-testimonials-container">
            <h2>What Our Clients Say</h2>
            <div className="rd-heading-line"></div>
            <p className="rd-testimonials-intro">
              Trusted by businesses across the UK.
            </p>

            <div className="rd-testimonial-card">
              <div className="rd-quote-mark">“</div>
              <p>
                “Professional, responsive and reliable. Recruitment Direct consistently delivers quality personnel when we need them.”
              </p>
              <div className="rd-card-line"></div>
              <h3>Civil Engineering Contractor</h3>
            </div>

            <div className="rd-testimonial-card">
              <div className="rd-quote-mark">“</div>
              <p>
                “A trusted recruitment partner that understands our industry and always provides an excellent service.”
              </p>
              <div className="rd-card-line"></div>
              <h3>Manufacturing Business</h3>
            </div>

            <div className="rd-testimonial-card">
              <div className="rd-quote-mark">“</div>
              <p>
                “Easy to work with, highly responsive and committed to delivering results.”
              </p>
              <div className="rd-card-line"></div>
              <h3>Logistics Provider</h3>
            </div>
          </div>
        </section>

        <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --rd-black: #111111;
          --rd-grey: #5f6368;
          --rd-brass: #c8a24a;
          --rd-border: #e8e8e8;
          --rd-white: #ffffff;
        }

        .rd-testimonials-section {
          background: var(--rd-white);
          padding: 90px 24px;
          color: var(--rd-black);
          font-family: inherit;
        }

        .rd-testimonials-section .rd-testimonials-container {
          max-width: 960px;
          margin: 0 auto;
          text-align: center;
        }

        .rd-testimonials-section .rd-testimonials-container h2 {
          margin: 0 !important;
          color: var(--rd-black) !important;
          font-size: clamp(38px, 6vw, 64px) !important;
          line-height: 1.05 !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: normal !important;
        }

        .rd-testimonials-section .rd-heading-line {
          width: 130px;
          height: 2px;
          background: var(--rd-brass);
          margin: 28px auto 26px;
        }

        .rd-testimonials-section .rd-testimonials-intro {
          margin: 0 0 48px !important;
          color: var(--rd-black) !important;
          font-size: 24px !important;
          line-height: 1.5 !important;
        }

        .rd-testimonials-section .rd-testimonial-card {
          background: var(--rd-white) !important;
          border: 1px solid var(--rd-border) !important;
          border-radius: 16px !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04) !important;
          padding: 46px 54px !important;
          margin-bottom: 34px !important;
          text-align: left !important;
          transform: none !important;
        }

        .rd-testimonials-section .rd-quote-mark {
          color: var(--rd-brass) !important;
          font-size: 90px !important;
          line-height: 0.7 !important;
          font-weight: 900 !important;
          margin-bottom: 10px !important;
        }

        .rd-testimonials-section .rd-testimonial-card p {
          margin: 0 !important;
          color: var(--rd-black) !important;
          font-size: clamp(24px, 4vw, 38px) !important;
          line-height: 1.45 !important;
          font-weight: 400 !important;
        }

        .rd-testimonials-section .rd-card-line {
          width: 80px;
          height: 2px;
          background: var(--rd-brass);
          margin: 34px 0 22px;
        }

        .rd-testimonials-section .rd-testimonial-card h3 {
          margin: 0 !important;
          color: var(--rd-brass) !important;
          font-size: clamp(20px, 3vw, 30px) !important;
          line-height: 1.2 !important;
          font-weight: 900 !important;
          letter-spacing: 0.06em !important;
          text-transform: uppercase !important;
        }

        @media (max-width: 768px) {
          .rd-testimonials-section {
            padding: 70px 22px;
          }

          .rd-testimonials-section .rd-testimonial-card {
            padding: 34px 28px !important;
            margin-bottom: 28px !important;
          }

          .rd-testimonials-section .rd-testimonials-intro {
            font-size: 20px !important;
            margin-bottom: 36px !important;
          }

          .rd-testimonials-section .rd-quote-mark {
            font-size: 72px !important;
          }
        }
        ` }} />

        {/* CONTACT */}
        {/* <section className="rd-contact">
          <div className="rd-container rd-contact-box">
            <div>
              <h2>Contact Us</h2>
              <h3>Looking for Staff?</h3>
              <p>Whether you need temporary, contract or permanent personnel, our team is here to help.</p>
            </div>

            <div className="rd-contact-details">
              <a href="tel:01324623198">01324 623198</a>
              <a href="https://wa.me/447590882626">WhatsApp: 07590 882626</a>
              <a href="mailto:sales@rd1.co.uk">sales@rd1.co.uk</a>
            </div>

            <div className="rd-contact-buttons">
              <a href="/ai-hire-now" className="rd-btn rd-btn-gold">AI HIRE NOW</a>
              <a href="/place-enquiry" className="rd-btn rd-btn-gold">PLACE ENQUIRY</a>
            </div>
          </div>
        </section> */}
      </main>

      {/* Previous all sections from components folder */}
      {/* <HeroSection /> */}
      {/* <TrustTechSection /> */}
      {/* <HowWeDeliverSection /> */}
      {/* <AIFlowSection /> */}
      {/* <AIProductsSection /> */}
      {/* <EliteAISection /> */}
      {/* <HowItWorksSection /> */}
      {/* <GeneralSection /> */}
      {/* <SectorsSection /> */}
      {/* <TrustedBySection /> */}
      {/* <SearchJobsSection /> */}
      <ContactSection />

      <Footer />
      <FloatingElements />

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-gray-800">
          <DialogHeader className="sr-only">
            <DialogTitle>AI Call Demo Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <video
              src="/Video.mov"
              controls
              autoPlay
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
    <style dangerouslySetInnerHTML={{ __html: `

      .ai-speed-section{
          background:#ffffff;
          padding:90px 50px;
          font-family:Arial,sans-serif;
          color:#07142f;
      }

      .hero-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:70px;
          align-items:center;
      }

      .hero-content h1{
          font-size:82px;
          line-height:0.95;
          margin-bottom:35px;
          font-weight:800;
      }

      .navy{
          color:#07142f;
      }

      .gold{
          color:#d8a126;
      }

      .hero-points{
          list-style:none;
          padding:0;
          margin-bottom:30px;
      }

      .hero-points li{
          font-size:26px;
          margin-bottom:18px;
          font-weight:600;
      }

      .hero-points li::before{
          content:"✓";
          color:#d8a126;
          margin-right:12px;
      }

      .hero-text{
          font-size:23px;
          line-height:1.7;
          max-width:700px;
          margin-bottom:40px;
      }

      .hero-buttons{
          display:flex;
          gap:20px;
          flex-wrap:wrap;
      }

      .btn-gold{
          background:#d8a126;
          color:#ffffff;
          padding:20px 42px;
          border-radius:10px;
          text-decoration:none;
          font-size:18px;
          font-weight:700;
      }

      .btn-outline{
          border:2px solid #d8a126;
          color:#07142f;
          padding:20px 42px;
          border-radius:10px;
          text-decoration:none;
          font-size:18px;
          font-weight:700;
      }

      .hero-image{
          position:relative;
          overflow:hidden;
          border-radius:28px;
      }

      .hero-image img{
          width:100%;
          height:100%;
          min-height:720px;
          object-fit:cover;
          display:block;
      }

      .hero-image::after{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(
              90deg,
              rgba(255,255,255,0.75) 0%,
              rgba(7,20,47,0.05) 35%,
              rgba(0,0,0,0.55) 100%
          );
      }

      .hero-overlay{
          position:absolute;
          bottom:45px;
          left:45px;
          z-index:2;
          color:#ffffff;
          border-left:3px solid #d8a126;
          padding-left:16px;
      }

      .hero-overlay h3{
          font-size:38px;
          margin:0 0 8px;
      }

      .hero-overlay span{
          color:#d8a126;
          font-size:20px;
          font-weight:700;
      }

      .trust-bar{
          margin-top:70px;
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
      }

      .trust-item{
          background:#ffffff;
          border:1px solid #ececec;
          border-radius:16px;
          padding:28px;
          text-align:center;
          font-size:18px;
          font-weight:700;
          box-shadow:0 8px 30px rgba(0,0,0,0.04);
      }

      .flow-section{
          margin-top:100px;
      }

      .flow-section h2,
      .sector-section h2{
          text-align:center;
          font-size:54px;
          margin-bottom:55px;
          color:#07142f;
      }

      .flow-grid{
          display:grid;
          grid-template-columns:repeat(5,1fr);
          gap:25px;
      }

      .flow-card{
          background:#ffffff;
          border:1px solid #ececec;
          border-radius:20px;
          padding:45px 30px;
          text-align:center;
          box-shadow:0 8px 30px rgba(0,0,0,0.04);
      }

      .flow-card span{
          color:#d8a126;
          font-size:44px;
          font-weight:800;
      }

      .flow-card h3{
          font-size:24px;
          margin:22px 0 18px;
          line-height:1.3;
      }

      .flow-card p{
          font-size:18px;
          line-height:1.7;
      }

      .consultant-section{
          margin-top:110px;
          background:#f8f9fc;
          border-radius:28px;
          padding:50px;
          display:grid;
          grid-template-columns:1fr 1fr 1fr;
          gap:30px;
          align-items:stretch;
      }

      .consultant-left{
          display:flex;
          flex-direction:column;
          justify-content:center;
      }

      .consultant-left h2{
          font-size:62px;
          line-height:1.05;
          margin-bottom:30px;
      }

      .consultant-left p{
          font-size:24px;
          line-height:1.7;
      }

      .consultant-card{
          background:#ffffff;
          border-radius:20px;
          overflow:hidden;
          box-shadow:0 10px 35px rgba(0,0,0,0.06);
          display:flex;
          flex-direction:column;
          height:100%;
      }

      .consultant-card img{
          width:100%;
          height:420px;
          object-fit:fixed;
      }

      .consultant-info{
          padding:30px;
          display:flex;
          flex-direction:column;
          flex-grow:1;
      }

      .consultant-info h3{
          font-size:34px;
          margin-bottom:8px;
      }

      .consultant-info span{
          color:#d8a126;
          font-size:22px;
          font-weight:700;
      }

      .consultant-info p{
          margin-top:20px;
          font-size:18px;
          line-height:1.7;
          flex-grow:1;
      }

      .sector-section{
          margin-top:110px;
      }

      .sector-grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:22px;
      }

      .sector-card{
          position:relative;
          overflow:hidden;
          border-radius:18px;
      }

      .sector-card img{
          width:100%;
          height:230px;
          object-fit:cover;
          display:block;
      }

      .sector-card::after{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(
              180deg,
              rgba(7,20,47,0.05) 0%,
              rgba(0,0,0,0.78) 100%
          );
      }

      .sector-card span{
          position:absolute;
          bottom:20px;
          left:20px;
          z-index:2;
          color:#ffffff;
          font-size:28px;
          font-weight:700;
      }

      @media(max-width:1200px){

          .flow-grid{
              grid-template-columns:repeat(2,1fr);
          }

          .sector-grid{
              grid-template-columns:repeat(2,1fr);
          }

          .consultant-section{
              grid-template-columns:1fr;
          }

      }

      @media(max-width:900px){

          .hero-grid{
              grid-template-columns:1fr;
          }

          .trust-bar{
              grid-template-columns:1fr;
          }

          .flow-grid{
              grid-template-columns:1fr;
          }

          .sector-grid{
              grid-template-columns:1fr;
          }

          .hero-content h1{
              font-size:54px;
          }

          .flow-section h2,
          .sector-section h2{
              font-size:38px;
          }

          .consultant-left h2{
              font-size:42px;
          }

      }

      ` }} />
    </>
    
  );
};

export default Index;
