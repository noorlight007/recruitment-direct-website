"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function LogisticsSectorPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <div className="rd-container">
          <div className="rd-hero">
            <span className="rd-tag">Construction Driver Recruitment</span>
            <h1>Construction Drivers</h1>
            <p className="rd-sub">
              Reliable, consultant-verified construction drivers supplied across Glasgow, Edinburgh, Falkirk (see our dedicated <a href="/locations/scotland/falkirk" className="text-blue-600 hover:underline">Recruitment Agency Falkirk</a> page), Stirling, Livingston, Cumbernauld, Aberdeen, Dundee, throughout Scotland, and across the UK.
            </p>
          </div>

          <div className="rd-grid">
            <div className="rd-card">
              <h2>Construction Driver Supply Built for Site Work</h2>
              <p>
                Recruitment Direct supplies experienced, compliant construction drivers for civil engineering, infrastructure, and building projects.
              </p>
              <p>
                We supply tipper drivers, mixer drivers, and construction HGV drivers to projects across Scotland, supporting contractors who require reliable, site-ready drivers.
              </p>
              <p>
                Our AI-driven recruitment process contacts and screens applicants 24/7 using role-specific questions.
              </p>
              <p>
                Every applicant is then <strong>reviewed and human verified by a Recruitment Direct consultant before submission</strong>, ensuring licences, experience, and site-readiness are fully checked.
              </p>
            </div>

            <div className="rd-card">
              <h2>Types of Construction Drivers We Supply</h2>
              <ul className="rd-list">
                <li>Tipper Drivers</li>
                <li>Mixer Drivers</li>
                <li>Roll-on Roll-off Drivers</li>
                <li>Skip Drivers</li>
                <li>Construction HGV Drivers</li>
                <li>HIAB Drivers</li>
                <li>Low Loader Drivers</li>
                <li>Plant Transport Drivers</li>
                <li>Plant Drivers</li>
              </ul>
            </div>
          </div>

          <div className="rd-bottom">
            <h2>Construction Drivers Across Scotland and the UK</h2>
            <p>
              We support civil engineering contractors, housebuilders, infrastructure firms, utilities contractors, and framework agreements requiring reliable drivers.
            </p>
            <p>
              Whether you need drivers for muck shifting, concrete delivery, plant transport, or site logistics, Recruitment Direct ensures fully checked drivers are ready to start without delay.
            </p>
            <p>
              We supply construction drivers across Glasgow, Edinburgh, Falkirk (see our dedicated <a href="/locations/scotland/falkirk" className="text-blue-600 hover:underline">Recruitment Agency Falkirk</a> page), Stirling, Livingston, Cumbernauld, Aberdeen, Dundee, and throughout Scotland and the UK.
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
