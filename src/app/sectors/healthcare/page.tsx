"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function HealthcareSectorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <section className="rd-page">
          <div className="rd-container">
            <div className="rd-hero">
              <span className="rd-tag">Healthcare Recruitment</span>
              <h1 className="rd-title">Healthcare Staff</h1>
              <p className="rd-subtitle">
                Reliable, consultant-verified healthcare staff supplied across London, Birmingham, Manchester, Leeds, Liverpool, Sheffield, Bristol, Nottingham, Leicester, Glasgow, Edinburgh, and throughout the UK.
              </p>
            </div>

            <div className="rd-grid">
              <div className="rd-card">
                <h2>Healthcare Recruitment Built for Speed</h2>
                <p>
                  Recruitment Direct supplies dependable, compliant healthcare staff for temporary, contract, and permanent roles across care and support services.
                </p>
                <p>
                  We supply healthcare staff through established frameworks and direct recruitment solutions, ensuring fast, compliant, and reliable placements.
                </p>
                <p>
                  Our AI-driven recruitment process contacts and screens applicants 24/7 using role-specific questions, helping identify suitable staff quickly and efficiently.
                </p>
                <p>
                  Every applicant is then <strong>reviewed and human verified by a Recruitment Direct consultant before submission</strong>, ensuring experience, compliance, and suitability for the role.
                </p>
              </div>

              <div className="rd-card">
                <h2>We Supply</h2>
                <ul className="rd-list">
                  <li>Care Assistants</li>
                  <li>Support Workers</li>
                  <li>Senior Care Staff</li>
                  <li>Residential Care Staff</li>
                  <li>Domiciliary Care Workers</li>
                  <li>Healthcare Assistants</li>
                  <li>Mental Health Support Workers</li>
                  <li>Nurses (where applicable)</li>
                  <li>Specialist Care Staff</li>
                  <li>Live-in Carers</li>
                </ul>
              </div>
            </div>

            <div className="rd-bottom-card">
              <h2>Healthcare Recruitment Across the UK</h2>
              <p>
                We support care homes, supported living providers, healthcare organisations, and local authority frameworks requiring reliable staff.
              </p>
              <p>
                Whether you need cover for shifts, long-term placements, or specialist support roles, Recruitment Direct ensures fully checked staff are ready to start without delay.
              </p>
              <p>
                We supply healthcare staff across London, Birmingham, Manchester, Leeds, Liverpool, Sheffield, Bristol, Nottingham, Leicester, Glasgow, Edinburgh, and throughout the UK.
              </p>

              <div className="rd-button-wrap">
                <a href="/contact" className="rd-button">Deliver reliable, fully verified healthcare staff</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingElements />

      <style jsx>{`
        .rd-page {
          padding: 90px 20px;
          background: #ffffff;
        }

        .rd-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .rd-hero {
          max-width: 980px;
          margin: 0 auto 55px;
          text-align: center;
        }

        .rd-tag {
          display: inline-block;
          margin-bottom: 18px;
          padding: 8px 18px;
          border: 1px solid #dbe7ff;
          border-radius: 999px;
          background: #eef4ff;
          color: #1e40af;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.2px;
          line-height: 1;
        }

        .rd-title {
          margin: 0 0 18px;
          font-size: 56px;
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -1px;
          color: #0f172a;
        }

        .rd-subtitle {
          max-width: 920px;
          margin: 0 auto;
          font-size: 20px;
          line-height: 1.75;
          font-weight: 400;
          color: #475569;
        }

        .rd-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 30px;
          margin-bottom: 30px;
        }

        .rd-card,
        .rd-bottom-card {
          padding: 38px;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }

        .rd-card h2,
        .rd-bottom-card h2 {
          margin: 0 0 18px;
          font-size: 28px;
          line-height: 1.2;
          font-weight: 700;
          color: #0f172a;
        }

        .rd-card p,
        .rd-bottom-card p {
          margin: 0 0 16px;
          font-size: 17px;
          line-height: 1.8;
          color: #475569;
        }

        .rd-card p:last-child,
        .rd-bottom-card p:last-child {
          margin-bottom: 0;
        }

        .rd-list {
          margin: 0;
          padding-left: 20px;
          columns: 2;
          column-gap: 34px;
        }

        .rd-list li {
          margin-bottom: 12px;
          break-inside: avoid;
          font-size: 17px;
          line-height: 1.6;
          color: #0f172a;
        }

        .rd-button-wrap {
          margin-top: 28px;
        }

        .rd-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
          border-radius: 12px;
          background: #2563eb;
          color: #ffffff;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .rd-button:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        @media (max-width: 1100px) {
          .rd-title {
            font-size: 46px;
          }

          .rd-subtitle {
            font-size: 18px;
          }

          .rd-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .rd-page {
            padding: 65px 16px;
          }

          .rd-hero {
            margin-bottom: 36px;
          }

          .rd-title {
            font-size: 36px;
            letter-spacing: -0.5px;
          }

          .rd-subtitle {
            font-size: 17px;
            line-height: 1.7;
          }

          .rd-card,
          .rd-bottom-card {
            padding: 24px;
            border-radius: 18px;
          }

          .rd-card h2,
          .rd-bottom-card h2 {
            font-size: 24px;
          }

          .rd-list {
            columns: 1;
          }

          .rd-button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
