"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function ITTechSectorPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <div className="rd-container">
          <div className="rd-hero">
            <span className="rd-tag">IT & Tech Recruitment</span>
            <h1>IT & Technology Professionals</h1>
            <p className="rd-sub">
              Reliable, consultant-verified IT and technology professionals supplied across London, Manchester, Birmingham, Leeds, Bristol, Edinburgh, Glasgow, Cambridge, Reading, Dublin, and throughout the UK and Ireland.
            </p>
          </div>

          <div className="rd-grid">
            <div className="rd-card">
              <h2>IT & Tech Recruitment Built for Speed</h2>
              <p>
                Recruitment Direct supplies experienced IT and technology professionals for contract and permanent roles across multiple sectors.
              </p>
              <p>
                Our AI-driven recruitment process contacts and screens applicants 24/7 using role-specific questions, helping identify suitable professionals quickly and efficiently.
              </p>
              <p>
                Every applicant is then <strong>reviewed and human verified by a Recruitment Direct consultant before submission</strong>, ensuring technical ability, experience, and suitability for the role.
              </p>
            </div>

            <div className="rd-card">
              <h2>We Supply</h2>
              <ul className="rd-list">
                <li>Software Developers</li>
                <li>Web Developers</li>
                <li>IT Support Technicians</li>
                <li>Network Engineers</li>
                <li>Infrastructure Engineers</li>
                <li>Cloud Engineers</li>
                <li>Cyber Security Specialists</li>
                <li>Data Analysts</li>
                <li>Data Engineers</li>
                <li>DevOps Engineers</li>
                <li>Systems Administrators</li>
                <li>IT Project Managers</li>
                <li>Business Analysts</li>
                <li>Technical Support Staff</li>
              </ul>
            </div>
          </div>

          <div className="rd-bottom">
            <h2>IT & Technology Recruitment Across the UK and Ireland</h2>
            <p>
              We support businesses across multiple sectors including construction, engineering, commercial, and technology companies requiring reliable IT professionals.
            </p>
            <p>
              Whether you need support for development, infrastructure, cloud, cybersecurity, or digital transformation projects, Recruitment Direct ensures fully checked professionals are ready to deliver.
            </p>
            <p>
              We supply IT and technology professionals across London, Manchester, Birmingham, Leeds, Bristol, Edinburgh, Glasgow, Cambridge, Reading, Dublin, and throughout the UK and Ireland.
            </p>

            <a href="/contact" className="btn btn-primary">
              Get in touch with Recruitment Direct today
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingElements />

      <style jsx>{`
        .rd-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
          background: #ffffff;
        }

        .rd-hero {
          text-align: center;
          margin-bottom: 50px;
        }

        .rd-tag {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 999px;
          background: #eef4ff;
          color: #1e40af;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .rd-hero h1 {
          font-size: 52px;
          margin: 0 0 15px;
          color: #0f172a;
        }

        .rd-sub {
          font-size: 20px;
          color: #475569;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .rd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 40px;
        }

        .rd-card {
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 30px;
          background: #fff;
        }

        .rd-card h2 {
          margin-top: 0;
          font-size: 26px;
          color: #0f172a;
        }

        .rd-card p {
          color: #475569;
          line-height: 1.7;
          font-size: 16px;
        }

        .rd-list {
          columns: 2;
          padding-left: 20px;
          margin: 0;
          list-style-type: disc;
        }

        .rd-list li {
          margin-bottom: 10px;
          color: #475569;
          font-size: 16px;
          break-inside: avoid;
        }

        .rd-bottom {
          margin-top: 40px;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 30px;
          background: #fff;
        }

        .rd-bottom h2 {
          color: #0f172a;
          font-size: 26px;
          margin-top: 0;
        }

        .rd-bottom p {
          color: #475569;
          line-height: 1.7;
          font-size: 16px;
        }


        @media (max-width: 900px) {
          .rd-grid {
            grid-template-columns: 1fr;
          }

          .rd-list {
            columns: 1;
          }

          .rd-hero h1 {
            font-size: 36px;
          }

          .rd-container {
            padding: 60px 20px;
          }
        }
      `}</style>
    </div>
  );
}
