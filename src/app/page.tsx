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

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="rd-landing">
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
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
              <div className="rd-sector-card" style={{ backgroundImage: "url('/assets/construction.jpg')" }}><span>Construction</span></div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/assets/renewables.jpg')" }}><span>Renewables</span></div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/assets/engineering.jpg')" }}><span>Engineering</span></div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/assets/logistics.jpg')" }}><span>Logistics</span></div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/assets/healthcare.jpg')" }}><span>Healthcare</span></div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/assets/education.jpg')" }}><span>Education</span></div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/assets/hospitality.jpg')" }}><span>Hospitality</span></div>
              <div className="rd-sector-card" style={{ backgroundImage: "url('/assets/business-support-it.jpg')" }}><span>Business Support &amp; IT</span></div>
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
              <div className="rd-team-card rd-team-card-featured">
                <img src="/images/steven-peddie.jpg" alt="Steven - Director" width={180} height={180} style={{ objectFit: 'cover' }} />
                <h3>Steven</h3>
                <strong>Director</strong>
                <p>Leading Recruitment Direct and supporting clients across multiple sectors throughout the UK.</p>
              </div>

              <div className="rd-team-card">
                <img src="/images/nicola.jpg" alt="Nicola - Manager" width={180} height={180} style={{ objectFit: 'fill' }} />
                <h3>Nicola</h3>
                <strong>Manager</strong>
                <p>Overseeing operations, compliance, workforce quality and client service delivery.</p>
              </div>

              <div className="rd-team-card">
                <img src="/images/olia.jpg" alt="Olia - Consultant" width={180} height={180} style={{ objectFit: 'cover' }} />
                <h3>Olia</h3>
                <strong>Consultant</strong>
                <p>Supporting clients and applicants through responsive, professional recruitment solutions.</p>
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
