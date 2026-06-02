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
              <a href="/place-enquiry" className="rd-btn rd-btn-gold">PLACE ENQUIRY</a>
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
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Facilitiess.png')" }}>
              {/* <span>Facilities Management</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Businesssss.png')" }}>
              {/* <span>Business Support &amp; IT</span> */}
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="rd-team">
          <div className="rd-container">
            <div className="rd-section-heading">
              <h2>Real Consultants. Real Results.</h2>
              <p>Technology moves faster. People make the final decision.</p>
              <p>Combining recruitment expertise with modern technology to deliver exceptional service across the UK.</p>
            </div>

            <div className="rd-team-grid">
              <div className="hero-image">
                <img src="/images/steven-peddie.jpg" alt="Steven Peddie" />
                <div className="hero-overlay">
                  <h3>Steven Peddie</h3>
                  <span>Director</span>
                  <p style={{ marginTop: '12px', fontSize: '15px', color: '#cbd5e1', lineHeight: '1.5' }}>
                    Leading Recruitment Direct and supporting clients across multiple sectors throughout the UK.
                  </p>
                </div>
              </div>

              <div className="hero-image">
                <img src="/images/nicola.jpg" alt="Nicola" />
                <div className="hero-overlay">
                  <h3>Nicola</h3>
                  <span>Manager</span>
                  <p style={{ marginTop: '12px', fontSize: '15px', color: '#cbd5e1', lineHeight: '1.5' }}>
                    Overseeing operations, compliance, workforce quality and client service delivery.
                  </p>
                </div>
              </div>

              <div className="hero-image">
                <img src="/images/olia.jpg" alt="Olia" />
                <div className="hero-overlay">
                  <h3>Olia</h3>
                  <span>Consultant</span>
                  <p style={{ marginTop: '12px', fontSize: '15px', color: '#cbd5e1', lineHeight: '1.5' }}>
                    Supporting clients and applicants through responsive, professional recruitment solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="rd-testimonials">
          <div className="rd-container">
            <h2>What Our Clients Say</h2>

            <div className="rd-testimonial-grid">
              <div className="rd-testimonial-card">
                <p>“Professional, responsive and reliable. Recruitment Direct consistently delivers quality personnel when we need them.”</p>
                <strong>Civil Engineering Contractor</strong>
              </div>

              <div className="rd-testimonial-card">
                <p>“A trusted recruitment partner that understands our industry and always provides an excellent service.”</p>
                <strong>Manufacturing Business</strong>
              </div>

              <div className="rd-testimonial-card">
                <p>“Easy to work with, highly responsive and committed to delivering results.”</p>
                <strong>Logistics Provider</strong>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="rd-contact">
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
        </section>
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
