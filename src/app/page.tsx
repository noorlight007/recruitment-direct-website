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
            <h2>Recruitment Expertise Across Multiple Sectors</h2>

            <div className="rd-sector-grid">
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/construction.png')" }}>
              {/* <span>Construction</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/renewables.png')" }}>
              {/* <span>Renewables</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Engineering.png')" }}>
              {/* <span>Engineering</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Logistics.png')" }}>
              {/* <span>Logistics</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Healthcare.png')" }}>
              {/* <span>Healthcare</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Education.png')" }}>
              {/* <span>Education</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Hospitality.png')" }}>
              {/* <span>Hospitality</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Facilities.png')" }}>
              {/* <span>Facilities Management</span> */}
              </div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/images/Business.png')" }}>
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
      {/* <ContactSection /> */}

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
  );
};

export default Index;
