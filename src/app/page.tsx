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
          <style dangerouslySetInnerHTML={{
            __html: `
          .rd-sectors {
            margin-bottom: 0 !important;
          }
          .rd-hero {
            align-items: flex-start !important;
            padding-top: 100px !important;
            min-height: 600px !important;
          }
          .rd-hero h1 {
            font-size: clamp(34.68px, 5.06vw, 63.58px) !important;
          }
          .rd-button-grid {
            display: flex !important;
            flex-direction: row !important;
            justify-content: center !important;
            align-items: flex-start !important;
            gap: 24px !important;
            width: 100% !important;
            max-width: 1200px !important;
            margin: 40px auto 0 !important;
          }
          .rd-hero-btn-col {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            flex: 1 !important;
            max-width: 260px !important;
            text-align: center !important;
          }
          .rd-hero .rd-btn {
            font-weight: 800 !important;
            height: 64px !important;
            line-height: 64px !important;
            padding: 0 !important;
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
            border-radius: 8px !important;
            text-transform: uppercase !important;
            display: flex !important;
            align-items: center !important;
          }
          .rd-btn-caption {
            margin-top: 12px !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 2px !important;
            text-align: center !important;
          }
          .rd-btn-q {
            font-size: 17px !important;
            font-weight: 600 !important;
            color: #cbd5e1 !important;
            line-height: 1.2 !important;
            display: block !important;
          }
          .rd-btn-a {
            font-size: 19px !important;
            font-weight: 800 !important;
            color: #f6d77d !important;
            line-height: 1.2 !important;
            display: block !important;
          }
          .rd-sector-card {
            aspect-ratio: 3 / 2 !important;
            min-height: auto !important;
            background-size: cover !important;
            background-position: center !important;
          }
          @media (max-width: 768px) {
            .rd-hero {
              padding-top: 110px !important;
              min-height: 480px !important;
            }
            .rd-button-grid {
              flex-direction: column !important;
              align-items: center !important;
              gap: 24px !important;
            }
            .rd-hero-btn-col {
              width: 100% !important;
              max-width: 280px !important;
            }
            .rd-hero .rd-btn {
              height: 52px !important;
              line-height: 52px !important;
            }
            .rd-btn-q {
              font-size: 14.5px !important;
            }
            .rd-btn-a {
              font-size: 16px !important;
            }
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
              <h1 className="standard-h1">Recruitment Across the UK</h1>
              <h2 className="standard-h2">Trusted Supplier Since 2006</h2>
              <p className="standard-body-p">Connecting employers with quality temporary, contract and permanent staff across the UK.</p>

              <div className="rd-button-grid" style={{ justifyContent: "center" }}>
                <div className="rd-hero-btn-col">
                  <a href="/ai-hire-now" className="rd-btn rd-btn-gold standard-cta-btn">AI HIRE NOW</a>
                  <div className="rd-btn-caption">
                    <span className="rd-btn-q">Need staff fast?</span>
                    <span className="rd-btn-a">Order Staff 24/7</span>
                  </div>
                </div>
                <div className="rd-hero-btn-col">
                  <a href="/contact" className="rd-btn rd-btn-gold standard-cta-btn">PLACE ENQUIRY</a>
                  <div className="rd-btn-caption">
                    <span className="rd-btn-q">Recruitment Quote?</span>
                    <span className="rd-btn-a">Request a Callback</span>
                  </div>
                </div>
                <div className="rd-hero-btn-col">
                  <a href="/job-search" className="rd-btn rd-btn-outline standard-cta-btn">JOB SEARCH</a>
                  <div className="rd-btn-caption">
                    <span className="rd-btn-q">Looking for work?</span>
                    <span className="rd-btn-a">Search Jobs</span>
                  </div>
                </div>
                <div className="rd-hero-btn-col">
                  <a href="#" onClick={(e) => { e.preventDefault(); setIsVideoOpen(true); }} className="rd-btn rd-btn-outline standard-cta-btn">WATCH AI CALL</a>
                  <div className="rd-btn-caption">
                    <span className="rd-btn-q">Hiring made easier</span>
                    <span className="rd-btn-a">See AI in Action</span>
                  </div>
                </div>
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
          <section className="rd-sectors standard-section" id="sectors">
            <div className="rd-container">
              <h2 className="standard-h1">Sectors We Support</h2>

              <div className="rd-sector-grid">
                <div className="rd-sector-card standard-card" style={{ backgroundImage: "url('/images/Cons.png')" }}>
                  {/* <span>Construction</span> */}
                </div>
                <div className="rd-sector-card standard-card" style={{ backgroundImage: "url('/images/Renewabless.png')" }}>
                  {/* <span>Renewables</span> */}
                </div>
                <div className="rd-sector-card standard-card" style={{ backgroundImage: "url('/images/Engineerings.png')" }}>
                  {/* <span>Engineering</span> */}
                </div>
                <div className="rd-sector-card standard-card" style={{ backgroundImage: "url('/images/Logisticss.png')" }}>
                  {/* <span>Logistics</span> */}
                </div>
                <div className="rd-sector-card standard-card" style={{ backgroundImage: "url('/images/Healthcares.png')" }}>
                  {/* <span>Healthcare</span> */}
                </div>
                <div className="rd-sector-card standard-card" style={{ backgroundImage: "url('/images/Educations.png')" }}>
                  {/* <span>Education</span> */}
                </div>
                <div className="rd-sector-card standard-card" style={{ backgroundImage: "url('/images/Hospitalitys.png')" }}>
                  {/* <span>Hospitality</span> */}
                </div>
                <div className="rd-sector-card standard-card" style={{ backgroundImage: "url('/images/Businesssss.png')" }}>
                  {/* <span>Business Support &amp; IT</span> */}
                </div>
              </div>
            </div>
          </section>

          {/* TEAM PAGE */}
          <section className="rd-team-page">
            <div className="hero">
              <div className="hero-content">
                <h1>RECRUITMENT<br />SOLUTIONS THAT<br /><span>DELIVER RESULTS</span></h1>
                <p>Temporary, Contract and Permanent Recruitment Solutions Across the UK.</p>

                <div className="hero-buttons">
                  <div>
                    <a href="/ai-hire-now" className="btn gold standard-cta-btn">AI HIRE NOW</a>
                    <small>Order Staff 24/7.</small>
                  </div>
                  <div>
                    <a href="/contact" className="btn outline standard-cta-btn">REQUEST QUOTE</a>
                    <small>Consultant Call Back.</small>
                  </div>
                </div>
              </div>

              <div className="hero-image">
                <img src="/images/steven.jpeg" alt="Steven" />
              </div>
            </div>

            <section className="process standard-section">
              <h2 className="standard-h1">OUR RECRUITMENT PROCESS</h2>

              <div className="process-flow">
                <div>Vacancy<br />Received</div>
                <span>→</span>
                <div>AI Candidate<br />Skill Search</div>
                <span>→</span>
                <div>AI Applicant<br />Call</div>
                <span>→</span>
                <div>Consultant<br />Review</div>
                <span>→</span>
                <div>Compliance<br />Checks</div>
                <span>→</span>
                <div>Submitted to<br />Client</div>
              </div>

              <a href="#" onClick={(e) => { e.preventDefault(); setIsVideoOpen(true); }} className="btn gold process-btn standard-cta-btn">WATCH AI SCREENING CALL</a>
            </section>

            <section className="benefits standard-section">
              <h2 className="standard-h1">WHY CLIENTS CHOOSE RECRUITMENT DIRECT</h2>

              <div className="benefit-grid">
                <div className="benefit-card standard-card">
                  <h3>24/7<br />Recruitment</h3>
                  <p className="standard-body-p">Applicants contacted day and night.</p>
                </div>

                <div className="benefit-card standard-card">
                  <h3>Consultant Checked<br />CV Submission</h3>
                  <p className="standard-body-p">Qualified applicants submitted faster.</p>
                </div>

                <div className="benefit-card standard-card">
                  <h3>Digital Timesheets</h3>
                  <p className="standard-body-p">Remote approvals with reduced paperwork.</p>
                </div>

                <div className="benefit-card standard-card">
                  <h3>Reduce Administration<br />Costs</h3>
                  <p className="standard-body-p">Reduce timesheet chasing and move towards 100% invoice accuracy.</p>
                </div>
              </div>
            </section>

            <section className="team standard-section">
              <div className="team-intro">
                <h2 className="standard-h1">YOUR RECRUITMENT TEAM</h2>
                <p className="standard-body-p">Meet the people supporting clients and applicants every day.</p>
              </div>

              <div className="team-card standard-card">
                <img src="/images/nicola.jpg" alt="Nicola" />
                <div>
                  <h3>Nicola</h3>
                  <span>Manager</span>
                  <p className="standard-body-p">Recruitment delivery, compliance and client service.</p>
                </div>
              </div>

              <div className="team-card standard-card">
                <img src="/images/olia.png" alt="Olia" />
                <div>
                  <h3>Olia</h3>
                  <span>Consultant</span>
                  <p className="standard-body-p">Applicant support and vacancy fulfilment.</p>
                </div>
              </div>
            </section>

            <section className="contact-strip">
              <div>
                <span>CALL US</span>
                <a href="tel:01324623198" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <strong>01324 623198</strong>
                </a>
              </div>
              <div>
                <span>WHATSAPP</span>
                <a href="https://wa.me/447590882626" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <strong>Start Conversation</strong>
                </a>
              </div>
              <div>
                <span>EMAIL US</span>
                <a href="mailto:sales@rd1.co.uk" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <strong>sales@rd1.co.uk</strong>
                </a>
              </div>
            </section>
          </section>

          <style dangerouslySetInnerHTML={{
            __html: `
        :root {
          --rd-black: #070707;
          --rd-dark: #111111;
          --rd-white: #ffffff;
          --rd-offwhite: #f8f6f1;
          --rd-gold: #c89528;
          --rd-gold-light: #f6d77d;
          --rd-gold-dark: #8a6417;
          --rd-border: #f7d98a;
          --rd-text: #171717;
          --rd-muted: #555555;
        }

        .rd-team-page {
          font-family: "Inter", "Arial", sans-serif;
          color: var(--rd-text);
          background: var(--rd-white);
          margin-top: 0 !important;
          padding-top: 0 !important;
          overflow-x: hidden !important;
          width: 100% !important;
        }

        .rd-team-page * {
          box-sizing: border-box !important;
        }

        .rd-team-page p {
          color: var(--rd-text) !important;
        }

        .rd-team-page .hero {
          margin-top: 0 !important;
          padding-top: 0 !important;
          min-height: 620px;
          display: grid;
          grid-template-columns: 48% 52%;
          align-items: center;
          background:
            linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.70) 42%, rgba(0,0,0,0.15) 100%),
            linear-gradient(135deg, #2b1608 0%, #4a2a13 45%, #120907 100%) !important;
          color: var(--rd-white);
          overflow: hidden;
        }

        .rd-team-page .hero-content {
          padding: 70px 60px;
          z-index: 2;
        }

        .rd-team-page .hero h1 {
          font-size: clamp(46px, 5vw, 78px) !important;
          line-height: 1.02 !important;
          letter-spacing: -2px !important;
          margin: 0 0 28px !important;
          font-weight: 900 !important;
        }

        .rd-team-page .hero h1 span {
          background: linear-gradient(90deg, var(--rd-gold-dark), var(--rd-gold-light), var(--rd-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .rd-team-page .hero p {
          max-width: 560px !important;
          font-size: 22px !important;
          line-height: 1.45 !important;
          margin: 0 0 40px !important;
          color: var(--rd-white) !important;
        }

        .rd-team-page .hero-buttons {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }

        .rd-team-page .hero-buttons div {
          text-align: center;
        }

        .rd-team-page .hero-buttons small {
          display: block;
          margin-top: 14px;
          font-size: 16px;
          color: #ffffff;
        }

        .rd-team-page .btn {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          min-width: 210px !important;
          height: 64px !important;
          padding: 0 30px !important;
          border-radius: 7px !important;
          font-weight: 800 !important;
          font-size: 18px !important;
          text-decoration: none !important;
          letter-spacing: 0.2px !important;
          cursor: pointer !important;
        }

        .rd-team-page .btn.gold {
          color: #071424 !important;
          background: linear-gradient(135deg, #8a6417 0%, #c89528 24%, #f6d77d 50%, #c28b20 74%, #6f4b10 100%) !important;
          border: 2px solid #f7d98a !important;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.7),
            inset 0 -2px 0 rgba(70,45,5,.35),
            0 8px 18px rgba(184,134,11,.32) !important;
          transition: all 0.25s ease !important;
        }

        .rd-team-page .btn.gold:hover {
          filter: brightness(1.1) !important;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.8),
            inset 0 -2px 0 rgba(70,45,5,.4),
            0 10px 22px rgba(184,134,11,.45) !important;
          transform: translateY(-2px) !important;
        }

        .rd-team-page .btn.outline {
          background: #ffffff !important;
          color: var(--rd-black) !important;
          border: 2px solid var(--rd-gold) !important;
          box-shadow: none !important;
        }

        .rd-team-page .hero-image {
          // height: calc(100% - 60px) !important;
          margin-top: 30px !important;
          margin-bottom: 30px !important;
          margin-right: 30px !important;
          overflow: hidden !important;
          border-radius: 12px !important;
        }

        .rd-team-page .hero-image img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          // object-position: center right !important;
        }

        .rd-team-page .process,
        .rd-team-page .benefits {
          padding: 55px 50px;
          text-align: center;
          border-bottom: 1px solid var(--rd-border) !important;
        }

        .rd-team-page .process h2,
        .rd-team-page .benefits h2 {
          font-size: 34px !important;
          margin: 0 0 35px !important;
          font-weight: 900 !important;
          color: var(--rd-black) !important;
        }

        .rd-team-page .process-flow {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 18px;
          align-items: center;
          max-width: 1180px;
          margin: 0 auto 32px;
          position: relative;
        }

        .rd-team-page .process-flow div {
          min-height: 86px;
          padding: 18px 12px;
          border: 1px solid var(--rd-border);
          border-radius: 10px;
          background: #ffffff;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
        }

        .rd-team-page .process-flow span {
          display: none;
        }

        .rd-team-page .process-flow div:not(:last-child)::after {
          content: "→";
          position: absolute;
          transform: translateX(75px);
          font-size: 42px;
          color: var(--rd-gold);
          font-weight: 900;
        }

        .rd-team-page .process-btn {
          min-width: 360px !important;
        }

        .rd-team-page .benefits {
          background: linear-gradient(180deg, #ffffff 0%, var(--rd-offwhite) 100%) !important;
        }

        .rd-team-page .benefit-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
          max-width: 1180px;
          margin: 0 auto;
        }

        .rd-team-page .benefit-card {
          background: #ffffff;
          border: 1px solid var(--rd-border);
          border-radius: 10px;
          padding: 32px 24px;
          min-height: 190px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.05);
        }

        .rd-team-page .benefit-card h3 {
          margin: 0 0 20px !important;
          font-size: 24px !important;
          line-height: 1.2 !important;
          color: var(--rd-gold) !important;
          font-weight: 900 !important;
        }

        .rd-team-page .benefit-card p {
          margin: 0 !important;
          font-size: 17px !important;
          line-height: 1.5 !important;
        }

        .rd-team-page .team {
          padding: 65px 50px;
          display: grid;
          grid-template-columns: 1.1fr 1fr 1fr;
          gap: 36px;
          align-items: center;
        }

        .rd-team-page .team-intro h2 {
          font-size: 32px !important;
          font-weight: 900 !important;
          margin: 0 0 24px !important;
        }

        .rd-team-page .team-intro h2::after {
          content: "";
          display: block;
          width: 90px;
          height: 4px;
          background: linear-gradient(90deg, var(--rd-gold-light), var(--rd-gold-dark));
          margin-top: 18px;
        }

        .rd-team-page .team-intro p {
          font-size: 20px !important;
          line-height: 1.5 !important;
          max-width: 360px;
        }

        .rd-team-page .team-card {
          display: grid;
          grid-template-columns: 48% 52%;
          background: #ffffff;
          border: 1px solid var(--rd-border) !important;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 28px rgba(0,0,0,0.08);
        }

        .rd-team-page .team-card img {
          width: 100% !important;
          height: 300px !important;
          object-fit: cover !important;
        }

        .rd-team-page .team-card div {
          padding: 28px 24px;
        }

        .rd-team-page .team-card h3 {
          margin: 0 0 8px !important;
          font-size: 30px !important;
          font-weight: 900 !important;
        }

        .rd-team-page .team-card span {
          display: block;
          color: var(--rd-gold);
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 22px;
        }

        .rd-team-page .team-card span::after {
          content: "";
          display: block;
          width: 55px;
          height: 3px;
          background: var(--rd-gold);
          margin-top: 14px;
        }

        .rd-team-page .team-card p {
          margin: 0 !important;
          font-size: 16px !important;
          line-height: 1.45 !important;
        }

        .rd-team-page .contact-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: linear-gradient(135deg, #050b12 0%, #101820 100%) !important;
          color: #ffffff !important;
          text-align: center;
          padding: 38px 40px;
        }

        .rd-team-page .contact-strip div {
          border-right: 1px solid var(--rd-gold) !important;
        }

        .rd-team-page .contact-strip div:last-child {
          border-right: none !important;
        }

        .rd-team-page .contact-strip span {
          display: block;
          color: var(--rd-gold-light) !important;
          font-size: 18px !important;
          font-weight: 900 !important;
          margin-bottom: 12px !important;
        }

        .rd-team-page .contact-strip strong {
          font-size: 28px !important;
          font-weight: 900 !important;
          color: #ffffff !important;
        }

        .rd-team-page .contact-strip a {
          color: inherit !important;
          text-decoration: none !important;
        }

        @media (max-width: 1100px) {
          .rd-team-page .hero {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }

          .rd-team-page .hero-content {
            padding: 50px 24px 30px !important;
            text-align: center !important;
          }

          .rd-team-page .hero h1 {
            font-size: clamp(32px, 7vw, 48px) !important;
            line-height: 1.1 !important;
            margin-bottom: 20px !important;
          }

          .rd-team-page .hero p {
            font-size: 18px !important;
            line-height: 1.4 !important;
            margin: 0 auto 30px !important;
          }

          .rd-team-page .hero-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 16px !important;
            width: 100% !important;
            max-width: 400px;
            margin: 0 auto !important;
          }

          .rd-team-page .hero-buttons div {
            text-align: center !important;
            width: 100% !important;
          }

          .rd-team-page .btn {
            width: 100% !important;
            min-width: 0 !important;
            height: 56px !important;
          }

          .rd-team-page .hero-image {
            display: block !important;
            height: auto !important;
            width: auto !important;
            margin: 0 24px 40px !important;
            overflow: hidden !important;
            border-radius: 12px !important;
          }

          .rd-team-page .hero-image img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center !important;
          }

          .rd-team-page .process.standard-section {
            padding-top: 30px !important;
            padding-bottom: 30px !important;
          }

          .rd-team-page .benefits,
          .rd-team-page .team {
            padding: 40px 24px !important;
          }

          .rd-team-page .process h2,
          .rd-team-page .benefits h2,
          .rd-team-page .team-intro h2 {
            font-size: 26px !important;
            margin-bottom: 24px !important;
          }

          .rd-team-page .process-flow {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 0px !important;
            max-width: 320px !important;
            margin: 0 auto 24px !important;
          }

          .rd-team-page .process-flow div {
            min-height: 48px !important;
            padding: 9px 12px !important;
            width: 100% !important;
            margin: 0 !important;
            box-sizing: border-box !important;
          }

          .rd-team-page .benefit-grid,
          .rd-team-page .team,
          .rd-team-page .contact-strip {
            grid-template-columns: 1fr !important;
          }

          .rd-team-page .process-flow div:not(:last-child)::after {
            display: none !important;
          }

          .rd-team-page .process-flow span {
            display: block !important;
            font-size: 20px !important;
            color: var(--rd-gold) !important;
            margin: 12px 0 !important;
            text-align: center !important;
            line-height: 1 !important;
          }

          .rd-team-page .process-btn {
            min-width: 100% !important;
            max-width: 400px;
            margin: 0 auto !important;
          }

          .rd-team-page .benefit-grid {
            gap: 16px !important;
          }

          .rd-team-page .benefit-card {
            padding: 24px !important;
            min-height: auto !important;
          }

          .rd-team-page .benefit-card h3 {
            margin-bottom: 12px !important;
            font-size: 20px !important;
          }

          .rd-team-page .team {
            gap: 24px !important;
          }

          .rd-team-page .team-intro {
            text-align: center !important;
            margin-bottom: 16px !important;
          }

          .rd-team-page .team-intro h2::after {
            margin: 12px auto 0 !important;
          }

          .rd-team-page .team-intro p {
            margin: 12px auto 0 !important;
            font-size: 17px !important;
          }

          .rd-team-page .team-card {
            grid-template-columns: 1fr !important;
          }

          .rd-team-page .team-card img {
            height: 530px !important;
          }

          .rd-team-page .team-card div {
            padding: 24px !important;
          }

          .rd-team-page .team-card h3 {
            font-size: 24px !important;
          }

          .rd-team-page .team-card span {
            margin-bottom: 16px !important;
          }

          .rd-team-page .team-card span::after {
            margin-top: 10px !important;
          }

          .rd-team-page .contact-strip div {
            border-right: none !important;
            border-bottom: 1px solid var(--rd-gold) !important;
            padding: 20px 0 !important;
          }

          .rd-team-page .contact-strip div:last-child {
            border-bottom: none !important;
          }

          .rd-team-page .contact-strip strong {
            font-size: 22px !important;
          }
        }
        ` }} />

          {/* TESTIMONIALS */}
          <section className="rd-testimonials-section standard-section">
            <div className="rd-testimonials-container">
              <h2 className="standard-h1">What Our Clients Say</h2>
              <div className="rd-heading-line"></div>
              <p className="rd-testimonials-intro standard-h2">
                Trusted by businesses across the UK.
              </p>

              <div className="rd-testimonial-card standard-card">
                <div className="rd-quote-mark">“</div>
                <p className="standard-body-p">
                  “Professional, responsive and reliable. Recruitment Direct consistently delivers quality personnel when we need them.”
                </p>
                <div className="rd-card-line"></div>
                <h3>Civil Engineering Contractor</h3>
              </div>

              <div className="rd-testimonial-card standard-card">
                <div className="rd-quote-mark">“</div>
                <p className="standard-body-p">
                  “A trusted recruitment partner that understands our industry and always provides an excellent service.”
                </p>
                <div className="rd-card-line"></div>
                <h3>Manufacturing Business</h3>
              </div>

              <div className="rd-testimonial-card standard-card">
                <div className="rd-quote-mark">“</div>
                <p className="standard-body-p">
                  “Easy to work with, highly responsive and committed to delivering results.”
                </p>
                <div className="rd-card-line"></div>
                <h3>Logistics Provider</h3>
              </div>
            </div>
          </section>

          <style dangerouslySetInnerHTML={{
            __html: `
        :root {
          --rd-black: #111111;
          --rd-grey: #5f6368;
          --rd-brass: #c8a24a;
          --rd-border: #e8e8e8;
          --rd-white: #ffffff;
        }

        .rd-testimonials-section {
          background: var(--rd-white);
          padding: 67.5px 18px;
          color: var(--rd-black);
          font-family: inherit;
        }

        .rd-testimonials-section .rd-testimonials-container {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .rd-testimonials-section .rd-testimonials-container h2 {
          margin: 0 !important;
          color: var(--rd-black) !important;
          font-size: clamp(28.5px, 4.5vw, 48px) !important;
          line-height: 1.05 !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: normal !important;
        }

        .rd-testimonials-section .rd-heading-line {
          width: 97.5px;
          height: 2px;
          background: var(--rd-brass);
          margin: 21px auto 19.5px;
        }

        .rd-testimonials-section .rd-testimonials-intro {
          margin: 0 0 36px !important;
          color: var(--rd-black) !important;
          font-size: 18px !important;
          line-height: 1.5 !important;
        }

        .rd-testimonials-section .rd-testimonial-card {
          background: var(--rd-white) !important;
          border: 1px solid var(--rd-border) !important;
          border-radius: 12px !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04) !important;
          padding: 34.5px 40.5px !important;
          margin-bottom: 25.5px !important;
          text-align: left !important;
          transform: none !important;
        }

        .rd-testimonials-section .rd-quote-mark {
          color: var(--rd-brass) !important;
          font-size: 67.5px !important;
          line-height: 0.7 !important;
          font-weight: 900 !important;
          margin-bottom: 7.5px !important;
        }

        .rd-testimonials-section .rd-testimonial-card p {
          margin: 0 !important;
          color: var(--rd-black) !important;
          font-size: clamp(18px, 3vw, 28.5px) !important;
          line-height: 1.45 !important;
          font-weight: 400 !important;
        }

        .rd-testimonials-section .rd-card-line {
          width: 60px;
          height: 2px;
          background: var(--rd-brass);
          margin: 25.5px 0 16.5px;
        }

        .rd-testimonials-section .rd-testimonial-card h3 {
          margin: 0 !important;
          color: var(--rd-brass) !important;
          font-size: clamp(15px, 2.25vw, 22.5px) !important;
          line-height: 1.2 !important;
          font-weight: 900 !important;
          letter-spacing: 0.06em !important;
          text-transform: uppercase !important;
        }

        @media (max-width: 768px) {
          .rd-testimonials-section {
            padding: 52.5px 16.5px 15px !important;
          }

          .rd-contact-section {
            padding-top: 40px !important;
          }

          .rd-testimonials-section .rd-testimonial-card {
            padding: 25.5px 21px !important;
            margin-bottom: 21px !important;
          }

          .rd-testimonials-section .rd-testimonials-intro {
            font-size: 15px !important;
            margin-bottom: 27px !important;
          }

          .rd-testimonials-section .rd-quote-mark {
            font-size: 54px !important;
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
      <style dangerouslySetInnerHTML={{
        __html: `

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
          // min-height:720px;
          object-fit:cover;
          display:block;
      }

      // .hero-image::after{
      //     content:"";
      //     position:absolute;
      //     inset:0;
      //     background:linear-gradient(
      //         90deg,
      //         rgba(255,255,255,0.75) 0%,
      //         rgba(7,20,47,0.05) 35%,
      //         rgba(0,0,0,0.55) 100%
      //     );
      // }

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
