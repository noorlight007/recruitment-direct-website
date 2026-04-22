"use client";

import React from "react";

export default function Footer() {
  return (
    <>
      <style jsx global>{`
        .rd-premium-wrap {
          background: radial-gradient(
              circle at top,
              rgba(38, 112, 255, 0.1) 0%,
              rgba(38, 112, 255, 0) 34%
            ),
            linear-gradient(180deg, #040b18 0%, #020814 100%);
          padding: 90px 24px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .rd-premium-container {
          max-width: 1320px;
          margin: 0 auto;
        }
        .rd-premium-head {
          text-align: center;
          margin-bottom: 52px;
        }
        .rd-premium-head h2 {
          margin: 0 0 14px;
          color: #fff;
          font-size: clamp(34px, 4vw, 58px);
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: -0.03em;
        }
        .rd-premium-head p {
          max-width: 860px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.72);
          font-size: 20px;
          line-height: 1.7;
          font-weight: 400;
        }
        .rd-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          margin-bottom: 42px;
        }
        .rd-card {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.04) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 28px 26px 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }
        .rd-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.34),
            0 0 30px rgba(54, 124, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          border-color: rgba(94, 168, 255, 0.28);
        }
        .rd-card-logo {
          height: 160px;
          border-radius: 20px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 26px;
          padding: 16px;
        }
        .rd-card-logo img {
          max-width: 180px;
          max-height: 92px;
          width: auto;
          height: auto;
          display: block;
          object-fit: contain;
        }
        .rd-card h3 {
          margin: 0 0 12px;
          color: #fff;
          font-size: 23px;
          line-height: 1.2;
          font-weight: 600;
        }
        .rd-card .rd-sub {
          margin: 0 0 8px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 16px;
          line-height: 1.5;
        }
        .rd-card .rd-num {
          margin: 0 0 22px;
          color: #5ea8ff;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.3;
        }
        .rd-card .rd-btn-wrap {
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .rd-card .rd-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          width: 100%;
          min-height: 64px;
          border-radius: 18px;
          border: 1px solid rgba(94, 168, 255, 0.85);
          color: #fff;
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: -0.01em;
          background: linear-gradient(
            180deg,
            rgba(94, 168, 255, 0.08),
            rgba(94, 168, 255, 0.02)
          );
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 0 18px rgba(54, 124, 255, 0.1);
          transition: all 0.18s ease;
        }
        .rd-card .rd-btn:hover {
          border-color: #5ea8ff;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 0 26px rgba(54, 124, 255, 0.25), 0 8px 30px rgba(54, 124, 255, 0.15);
          transform: translateY(-2px);
        }
        .rd-card .rd-btn:active {
          transform: translateY(1px) scale(0.98);
          box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.45),
            0 0 12px rgba(54, 124, 255, 0.25);
          border-color: #3b82f6;
        }
        .rd-btn-arrow {
          font-size: 26px;
          line-height: 1;
        }
        .rd-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding-bottom: 54px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 18px;
          text-align: center;
        }
        .rd-trust-icon {
          color: #5ea8ff;
          font-size: 22px;
          line-height: 1;
        }
        .rd-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 38px 0 28px;
        }
        .rd-footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 34px;
          align-items: start;
          margin-bottom: 26px;
        }
        .rd-footer-logo {
          max-width: 250px;
          width: 100%;
          height: auto;
          display: block;
          margin-bottom: 18px;
        }
        .rd-footer-brand p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          font-size: 15px;
          line-height: 1.8;
          max-width: 360px;
        }
        .rd-footer h4 {
          margin: 0 0 16px;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .rd-footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .rd-footer a,
        .rd-footer p {
          color: rgba(255, 255, 255, 0.68);
          text-decoration: none;
          font-size: 15px;
          line-height: 1.8;
          position: relative;
          transition: all 0.2s ease;
        }
        .rd-footer a:hover {
          color: #fff;
        }
        .rd-footer a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 1px;
          background: #5ea8ff;
          transition: width 0.25s ease;
        }
        .rd-footer a:hover::after {
          width: 100%;
        }
        .rd-footer a:active {
          opacity: 0.7;
          transform: translateY(1px);
        }
        .rd-whatsapp {
          color: #7ee7a8 !important;
          font-weight: 600;
        }
        .rd-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          flex-wrap: wrap;
        }
        .rd-footer-bottom div {
          color: rgba(255, 255, 255, 0.46);
          font-size: 13px;
        }

        @media (max-width: 1024px) {
          .rd-footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .rd-premium-wrap {
            padding: 72px 18px 0;
          }
          .rd-premium-head {
            margin-bottom: 38px;
          }
          .rd-premium-head p {
            font-size: 17px;
          }
          .rd-card {
            padding: 24px 20px 20px;
            border-radius: 22px;
          }
          .rd-card-logo {
            height: 140px;
            border-radius: 16px;
            margin-bottom: 22px;
          }
          .rd-card h3 {
            font-size: 21px;
          }
          .rd-card .rd-sub {
            font-size: 15px;
          }
          .rd-card .rd-num {
            font-size: 18px;
          }
          .rd-card .rd-btn {
            min-height: 58px;
            font-size: 17px;
          }
          .rd-trust {
            font-size: 16px;
            padding-bottom: 42px;
            flex-direction: column;
          }
          .rd-footer-grid {
            grid-template-columns: 1fr;
            gap: 26px;
          }
          .rd-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <section className="rd-premium-wrap" id="compliance">
        <div className="rd-premium-container">
          <div className="rd-premium-head">
            <h2>Compliance, Quality & Security</h2>
            <p>
              Recognised standards supporting consistent, compliant recruitment
              delivery.
            </p>
          </div>

          <div className="rd-cards">
            {/* REC Membership */}
            <div className="rd-card">
              <div className="rd-card-logo">
                <img src="/assets/compliance/rec-member.png" alt="REC Membership" />
              </div>
              <h3>REC Membership</h3>
              <p className="rd-sub">Corporate Member</p>
              <p className="rd-num">00207320</p>
              <div className="rd-btn-wrap">
                <a
                  className="rd-btn"
                  href="/certificates/rec-corporate-membership.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span>View Certificate</span>
                  <span className="rd-btn-arrow">→</span>
                </a>
              </div>
            </div>

            {/* ISO 9001:2015 */}
            <div className="rd-card">
              <div className="rd-card-logo">
                <img src="/assets/compliance/cqs-iso9001.png" alt="ISO 9001:2015" />
              </div>
              <h3>ISO 9001:2015</h3>
              <p className="rd-sub">Quality Management</p>
              <p className="rd-num">GB2006088</p>
              <div className="rd-btn-wrap">
                <a
                  className="rd-btn"
                  href="/certificates/iso-9001-2015-gb2006088.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span>View Certificate</span>
                  <span className="rd-btn-arrow">→</span>
                </a>
              </div>
            </div>

            {/* Constructionline Gold */}
            <div className="rd-card">
              <div className="rd-card-logo">
                <img
                  src="/assets/compliance/constructionline-gold.png"
                  alt="Constructionline Gold"
                />
              </div>
              <h3>Constructionline Gold</h3>
              <p className="rd-sub">Gold Member</p>
              <p className="rd-num">1324569</p>
              <div className="rd-btn-wrap">
                <a
                  className="rd-btn"
                  href="/certificates/constructionline-gold-1324569.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span>View Certificate</span>
                  <span className="rd-btn-arrow">→</span>
                </a>
              </div>
            </div>

            {/* Cyber Essentials */}
            <div className="rd-card">
              <div className="rd-card-logo">
                <img
                  src="/assets/compliance/cyber-essentials.png"
                  alt="Cyber Essentials"
                />
              </div>
              <h3>Cyber Essentials</h3>
              <p className="rd-sub">Certified</p>
              <p className="rd-num">Valid until 21/01/2027</p>
              <div className="rd-btn-wrap">
                <a
                  className="rd-btn"
                  href="/certificates/cyber-essentials-4686a995.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span>View Certificate</span>
                  <span className="rd-btn-arrow">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="rd-trust">
            <span className="rd-trust-icon">🛡</span>
            <span>Verified credentials. Transparent proof. Trusted delivery.</span>
          </div>

          <footer className="rd-footer">
            <div className="rd-footer-grid">
              <div className="rd-footer-brand">
                <img
                  className="rd-footer-logo"
                  src="/assets/logo.png"
                  alt="Recruitment Direct UK Ltd"
                />
                <p>
                  Recruitment Direct UK Ltd supplies temporary, contract and
                  permanent staff across construction, logistics, industrial and
                  specialist sectors throughout Scotland.
                </p>
              </div>

              <div>
                <h4>Quick Links</h4>
                <div className="rd-footer-links">
                  <a href="/">Home</a>
                  <a href="/#job-search">Job Search</a>
                  <a href="/#clients">Clients</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>

              <div>
                <h4>Contact</h4>
                <p>
                  Recruitment Direct UK Limited
                  <br />
                  Herkimer House
                  <br />
                  Mill Road Industrial Estate
                  <br />
                  Linlithgow
                  <br />
                  EH49 7SF
                </p>
              </div>

              <div>
                <h4>Connect</h4>
                <div className="rd-footer-links">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    Facebook
                  </a>
                  <a
                    className="rd-whatsapp"
                    href="https://wa.me/447590882626"
                    target="_blank"
                    rel="noopener"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="rd-footer-bottom">
              <div>
                © {new Date().getFullYear()} Recruitment Direct UK Ltd. All rights
                reserved.
              </div>
              <div>Premium recruitment delivery backed by verified standards.</div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}

