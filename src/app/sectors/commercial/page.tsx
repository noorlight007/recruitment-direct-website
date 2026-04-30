"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function CommercialSectorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <section className="rd-page">
          <div className="rd-container">
            <div className="rd-hero">
              <span className="rd-tag">Office Recruitment & AI Call Automation</span>
              <h1 className="rd-title">Office Recruitment & AI Call Automation Scotland & UK</h1>
              <p className="rd-subtitle">
                Flexible hiring solutions powered by AI call automation and recruitment support.
              </p>
            </div>

            <div className="rd-grid">
              <div className="rd-card">
                <h2>Stop Wasting Time on Repetitive Calls</h2>
                <p>
                  Office teams spend significant time calling applicants, chasing enquiries, screening candidates,
                  answering repetitive questions, and booking and managing appointments.
                </p>
                <p>
                  AI Call Automation removes this workload entirely, allowing your team to focus on higher-value activity.
                </p>
              </div>

              <div className="rd-card">
                <h2>AI Call & Hiring Automation</h2>
                <p>
                  Recruitment Direct provides AI-powered call automation designed to manage high-volume office recruitment and enquiries.
                </p>
                <ul className="rd-feature-list">
                  <li>Call every applicant instantly</li>
                  <li>Ask role-specific screening questions</li>
                  <li>Capture structured responses</li>
                  <li>Filter suitable candidates</li>
                  <li>Send follow-ups via SMS or WhatsApp</li>
                  <li>Book and confirm appointments automatically</li>
                </ul>
                <p>
                  Every applicant is contacted. Every response is captured. No opportunities are missed.
                </p>
              </div>
            </div>

            <div className="rd-grid">
              <div className="rd-card">
                <h2>AI Call + Automation</h2>
                <p>
                  Use AI to manage your entire applicant pipeline.
                </p>
                <ul className="rd-feature-list">
                  <li>All applicants are contacted and screened automatically</li>
                  <li>You receive every applicant with structured responses</li>
                  <li>No manual recruitment calls required</li>
                </ul>
                <p>
                  This approach reduces recruitment costs and gives you full control of the hiring process.
                </p>
              </div>

              <div className="rd-card">
                <h2>Add Recruitment Support When Required</h2>
                <p>
                  If you do not want to manage applicants internally, Recruitment Direct can provide recruitment support as required.
                </p>
                <ul className="rd-feature-list">
                  <li>AI processes all applicants</li>
                  <li>Recruitment Direct reviews and shortlists candidates when requested</li>
                  <li>CVs and qualified applicants are submitted for interview</li>
                </ul>
                <p>
                  Recruitment fees apply only when this service is used.
                </p>
              </div>
            </div>

            <div className="rd-grid">
              <div className="rd-card">
                <h2>Office Recruitment Services</h2>
                <p>
                  For businesses requiring a fully managed solution, we supply office staff across Scotland and the UK.
                </p>
                <p>
                  We deliver screened applicants, verified candidates, and interview-ready CVs. All applicants are reviewed and verified before submission.
                </p>
              </div>

              <div className="rd-card">
                <h2>Roles We Support</h2>
                <ul className="rd-list">
                  <li>Administrative Assistants</li>
                  <li>Office Administrators</li>
                  <li>Receptionists</li>
                  <li>Customer Service Advisors</li>
                  <li>Call Centre Staff</li>
                  <li>Accounts Assistants</li>
                  <li>Payroll Staff</li>
                  <li>HR Assistants</li>
                  <li>Coordinators</li>
                  <li>Office Managers</li>
                </ul>
              </div>
            </div>

            <div className="rd-bottom-card">
              <h2>Office Recruitment Across Scotland and the UK</h2>
              <p>
                We support businesses across Glasgow, Edinburgh, Falkirk, Stirling, Livingston, Cumbernauld, Aberdeen, Dundee, and throughout Scotland and the UK.
              </p>
              <p>
                Whether you require AI-driven hiring automation or full recruitment support, Recruitment Direct provides scalable and flexible solutions.
              </p>

              <div className="rd-button-wrap">
                <a href="/contact" className="btn btn-primary">
                  Reduce recruitment costs with AI Call Automation and activate recruitment support only when required
                </a>
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

        .rd-feature-list {
          margin: 0;
          padding-left: 20px;
        }

        .rd-feature-list li {
          margin-bottom: 12px;
          font-size: 17px;
          line-height: 1.6;
          color: #0f172a;
        }

        .rd-button-wrap {
          margin-top: 28px;
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

        }
      `}</style>
    </div>
  );
}
