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
          padding: 64px 24px 0;
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
          margin-bottom: 38px;
        }
        .rd-premium-head h2 {
          margin: 0 0 12px;
          color: #fff;
          font-size: clamp(28px, 3.5vw, 48px);
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: -0.03em;
        }
        .rd-premium-head p {
          max-width: 860px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.72);
          font-size: 17px;
          line-height: 1.7;
          font-weight: 400;
        }
        .rd-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        .rd-card {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.04) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 22px 20px 18px;
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
          height: 130px;
          border-radius: 20px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
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
          margin: 0 0 6px;
          color: #fff;
          font-size: 19px;
          line-height: 1.2;
          font-weight: 600;
        }
        .rd-card .rd-sub {
          margin: 0 0 4px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 14px;
          line-height: 1.5;
        }
        .rd-card .rd-num {
          margin: 0 0 16px;
          color: #5ea8ff;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.3;
        }
        .rd-card .rd-btn-wrap {
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .rd-card .rd-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          min-height: 54px;
          border-radius: 16px;
          border: 1px solid var(--btn-secondary-border);
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.01em;
          background: var(--btn-secondary-bg);
          transition: all 0.18s ease;
        }
        .rd-card .rd-btn:hover {
          border-color: rgba(47, 128, 237, 0.5);
          box-shadow: var(--btn-glow);
          transform: translateY(-3px);
        }
        .rd-card .rd-btn:active {
          transform: translateY(1px) scale(0.97);
          box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.45);
        }
        .rd-btn-arrow {
          font-size: 22px;
          line-height: 1;
        }
        .rd-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding-bottom: 40px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 15px;
          text-align: center;
        }
        .rd-trust-icon {
          color: #5ea8ff;
          font-size: 20px;
          line-height: 1;
        }
        .rd-footer {
          background: #050b18;
          padding: 34px 0 24px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .rd-footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 28px;
          position: relative;
          z-index: 2;
        }

        /* Top-left RD logo */
        .rd-footer-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 34px;
        }

        .rd-footer-logo img {
          width: 76px;
          height: auto;
        }

        .rd-footer-logo span {
          font-size: 26px;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: 0.5px;
        }

        /* Main grid */
        .rd-footer-main {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 390px;
          gap: 52px;
          align-items: start;
          border-top: 1px solid rgba(255,255,255,0.14);
          padding-top: 34px;
        }

        /* 4 left columns */
        .rd-footer-columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 34px;
        }

        .footer-col {
          padding-right: 26px;
          border-right: 1px solid rgba(0, 170, 255, 0.28);
        }

        .footer-col:last-child {
          border-right: none;
        }

        .footer-col h4 {
          margin: 0 0 24px;
          font-size: 19px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 800;
        }

        .footer-col h4::after {
          content: "";
          display: block;
          width: 48px;
          height: 3px;
          margin-top: 12px;
          border-radius: 20px;
          background: linear-gradient(90deg, #00aeff, #8b00ff);
        }

        .footer-col a {
          display: block;
          color: #ffffff;
          text-decoration: none;
          font-size: 17px;
          margin-bottom: 22px;
          transition: 0.25s ease;
        }

        .footer-col a:hover {
          color: #28a8ff;
          text-shadow: 0 0 12px rgba(40,168,255,0.7);
        }

        /* Right column */
        .rd-footer-right {
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }

        /* AI STEVE CARD (Preserved) */
        .rd-ai-steve-card {
          padding: 28px;
          border-radius: 22px;
          border: 1px solid rgba(98, 178, 255, 0.45);
          background: linear-gradient(135deg, rgba(10, 18, 36, 0.8) 0%, rgba(5, 10, 20, 0.9) 100%);
          box-shadow:
            0 0 30px rgba(0, 153, 255, 0.18),
            inset 0 0 30px rgba(144, 55, 255, 0.08);
          margin-top: 0;
        }

        .rd-ai-top {
          display: flex;
          gap: 24px;
          align-items: center;
          margin-bottom: 24px;
        }

        .rd-ai-steve-card h3 {
          margin: 0 0 10px;
          font-size: 26px;
          letter-spacing: 0.5px;
          color: #fff;
        }

        .rd-live {
          margin: 0 0 12px;
          color: #57ff93;
          font-weight: 700;
          font-size: 15px;
        }

        .rd-live span {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: #30ff86;
          border-radius: 50%;
          margin-right: 8px;
          box-shadow: 0 0 14px rgba(48, 255, 134, 0.9);
        }

        .rd-ai-text {
          margin: 0;
          color: rgba(236, 244, 255, 0.78);
          line-height: 1.5;
          font-size: 15px;
        }

        /* MOVING ORB */
        .rd-ai-orb {
          width: 104px;
          height: 104px;
          border-radius: 50%;
          position: relative;
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at 35% 30%, #63e7ff, transparent 18%),
            radial-gradient(circle at 65% 70%, #b52dff, transparent 26%),
            radial-gradient(circle, #0d7dff 0%, #061a52 48%, #050817 72%);
          box-shadow:
            0 0 24px rgba(0, 213, 255, 0.75),
            0 0 42px rgba(132, 52, 255, 0.65);
          animation: rdOrbPulse 3s ease-in-out infinite;
        }

        .rd-ai-orb::before {
          content: "";
          position: absolute;
          inset: -7px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #00e5ff;
          border-right-color: #9b4dff;
          animation: rdOrbSpin 4.5s linear infinite;
        }

        .rd-ai-orb span {
          position: absolute;
          inset: 11px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.26);
          animation: rdOrbSpinReverse 6s linear infinite;
        }

        .rd-orb-core {
          font-size: 36px;
          font-weight: 900;
          letter-spacing: 1px;
          color: #bff6ff;
          text-shadow: 0 0 15px rgba(0, 213, 255, 0.95);
        }

        @keyframes rdOrbSpin {
          to { transform: rotate(360deg); }
        }

        @keyframes rdOrbSpinReverse {
          to { transform: rotate(-360deg); }
        }

        @keyframes rdOrbPulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.04); filter: brightness(1.25); }
        }

        /* BUTTONS */
        .rd-ai-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 54px;
          margin-top: 12px;
          padding: 0 22px;
          border-radius: 12px;
          color: #fff;
          text-decoration: none;
          font-weight: 800;
          letter-spacing: 0.2px;
          overflow: hidden;
          border: 1px solid rgba(92, 183, 255, 0.4);
          box-shadow: 0 0 18px rgba(0, 153, 255, 0.12);
          transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, filter 0.18s ease;
        }

        .rd-ai-btn.primary {
          background: linear-gradient(90deg, #2260ccff 0%, #1e53c7ff 30%, #390ed4ff 70%, #840dd3ff 100%);
        }

        .rd-ai-btn.secondary {
          background: linear-gradient(180deg, rgba(8, 16, 34, 0.98), rgba(5, 12, 26, 0.98));
          border-color: rgba(90, 130, 255, 0.35);
        }

        .rd-ai-btn.premium {
          background: linear-gradient(135deg, #2520a8, #7b22d8, #b21cff);
        }

        .rd-ai-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(140, 225, 255, 0.9);
          box-shadow:
            0 0 18px rgba(0, 213, 255, 0.48),
            0 0 32px rgba(151, 55, 255, 0.36);
          filter: brightness(1.08);
        }

        .rd-ai-btn:active {
          transform: translateY(1px) scale(0.985);
          box-shadow:
            inset 0 0 22px rgba(255, 255, 255, 0.18),
            0 0 24px rgba(0, 213, 255, 0.72);
          border-color: #bdf4ff;
        }

        .rd-ai-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255, 255, 255, 0.3),
            transparent 70%
          );
          opacity: 0;
          transform: translateX(-100%);
          pointer-events: none;
        }

        .rd-ai-btn:hover::before {
          opacity: 1;
          animation: rdButtonShimmer 1.2s linear;
        }

        @keyframes rdButtonShimmer {
          from {
            transform: translateX(-100%);
          }

          to {
            transform: translateX(100%);
          }
        }

        .rd-ai-btn:focus-visible {
          outline: 2px solid #8eeaff;
          outline-offset: 4px;
        }

        .rd-ai-btn b {
          font-size: 26px;
          font-weight: 400;
        }

        /* Connect directly under AI Steve */
        .footer-connect {
          margin-top: 24px;
          text-align: center;
        }

        .connect-title {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 18px;
          margin-bottom: 18px;
        }

        .connect-title span {
          height: 1px;
          background: rgba(255,255,255,0.22);
        }

        .connect-title strong {
          font-size: 18px;
          letter-spacing: 5px;
        }

        .connect-icons {
          display: flex;
          justify-content: center;
          gap: 34px;
        }

        .connect-icons a {
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
          transition: 0.25s ease;
        }

        .connect-icons a:hover {
          color: #28a8ff;
          text-shadow: 0 0 14px rgba(40,168,255,0.75);
        }

        /* Bottom legal */
        .rd-footer-bottom {
          margin-top: 34px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.14);
          text-align: center;
        }

        .rd-footer-bottom div {
          font-size: 16px;
          color: rgba(255,255,255,0.88);
        }

        .rd-footer-bottom span {
          margin: 0 24px;
          color: rgba(255,255,255,0.35);
        }

        .rd-footer-bottom p {
          margin: 18px 0 0;
          font-size: 15px;
          color: rgba(255,255,255,0.72);
        }

        /* Mobile */
        @media (max-width: 1000px) {
          .rd-footer-main {
            grid-template-columns: 1fr;
          }

          .rd-footer-columns {
            grid-template-columns: repeat(2, 1fr);
          }

          .rd-footer-right {
            max-width: 430px;
            margin: 0 auto;
          }
        }

        @media (max-width: 600px) {
          .rd-footer-columns {
            grid-template-columns: 1fr;
          }

          .footer-col {
            border-right: none;
            border-bottom: 1px solid rgba(0, 170, 255, 0.18);
            padding-bottom: 20px;
          }

          .rd-footer-bottom span {
            display: none;
          }

          .rd-footer-bottom div {
            display: grid;
            gap: 8px;
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
                <img src="/rec_logo_new.png" alt="REC Membership" />
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
            <div className="rd-footer-inner">

              {/* TOP LOGO */}
              <div className="rd-footer-logo">
                <img src="/lo.png" alt="Recruitment Direct" />
                {/* <span>RECRUITMENT<br />DIRECT</span> */}
              </div>

              <div className="rd-footer-main">

                {/* LEFT COLUMNS */}
                <div className="rd-footer-columns">

                  <div className="footer-col">
                    <h4>Company</h4>
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/why-choose-us">Why RDUK</a>
                    <a href="/our-process">Our Process</a>
                    <a href="/contact">Contact Us</a>
                  </div>

                  <div className="footer-col">
                    <h4>AI Platform</h4>
                    <a href="/ai-hire-now">AI Hire Now</a>
                    <a href="/#ai-recruitment">AI Recruitment</a>
                    <a href="/callpilot">CallPilot (AI Voice)</a>
                    <a href="/integrations">Integrations</a>
                    <a href="/security">Security</a>
                  </div>

                  <div className="footer-col">
                    <h4>Resources</h4>
                    <a href="/#clients">Clients</a>
                    <a href="/#job-search">Job Search</a>
                    <a href="/policies">Policies</a>
                    <a href="/accreditations">Accreditations</a>
                    <a href="/news">News & Insights</a>
                  </div>

                  <div className="footer-col">
                    <h4>Policies</h4>
                    <a href="/policies">Privacy Policy</a>
                    <a href="/policies#terms">Terms of Use</a>
                    <a href="/policies#cookies">Cookies</a>
                    <a href="/policies">Modern Slavery Policy</a>
                    <a href="/policies">Carbon Reduction Plan</a>
                  </div>

                </div>

                {/* RIGHT SIDE: KEEP EXISTING AI STEVE DESIGN */}
                <div className="rd-footer-right">

                  {/* ASK AI STEVE PANEL */}
                  <div className="rd-ai-steve-card">
                    <div className="rd-ai-top">
                      <div className="rd-ai-orb">
                        <div className="rd-orb-core">AI</div>
                        <span></span>
                      </div>

                      <div>
                        <h3>Ask AI Steve</h3>
                        <p className="rd-live"><span></span> Live Now</p>
                        <p className="rd-ai-text">Instant answers.<br />Smart AI calls.</p>
                      </div>
                    </div>

                    <a href="/callpilot" className="rd-ai-btn primary">
                      <span>Start AI Chat</span>
                      <b>→</b>
                    </a>

                    <a href="https://callpilot.pro/" className="rd-ai-btn secondary">
                      <span>Try AI Call</span>
                      <b>→</b>
                    </a>

                    <a href="https://callpilot.pro/get-started" className="rd-ai-btn premium">
                      <span>AI Calls for Business</span>
                      <b>→</b>
                    </a>
                  </div>

                  <div className="footer-connect">
                    <div className="connect-title">
                      <span></span>
                      <strong>CONNECT</strong>
                      <span></span>
                    </div>

                    <div className="connect-icons">
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn" className="social-icon">
                        <svg viewBox="0 0 24 24" fill="#0A66C2">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook" className="social-icon">
                        <svg viewBox="0 0 24 24" fill="#1877F2">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a href="https://wa.me/447590882626" target="_blank" rel="noopener" aria-label="WhatsApp" className="social-icon">
                        <svg viewBox="0 0 24 24" className="fill-[#25D366]">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>

              </div>

              <div className="rd-footer-bottom">
                <div>
                  Recruitment Direct UK Ltd
                  <span>|</span>
                  Company No: SC301107
                  <span>|</span>
                  VAT No: GB880406428
                </div>

                <p>© {new Date().getFullYear()} Recruitment Direct UK Ltd. All rights reserved.</p>
              </div>

            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
