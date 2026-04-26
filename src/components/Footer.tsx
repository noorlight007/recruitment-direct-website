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
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 80px 0 30px;
          color: #fff;
        }
        .rd-footer-main {
          display: grid;
          grid-template-columns: 1.2fr 0.7fr 0.8fr 0.8fr 1.6fr;
          gap: 32px;
          margin-bottom: 30px;
        }
        .rd-footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .rd-footer-logo-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .rd-footer-logo-img {
          height: 100px;
          width: auto;
          display: block;
          object-fit: contain;
          margin-left: -10px;
        }
        .rd-footer-tagline {
          font-size: 17px;
          font-weight: 700;
          line-height: 1.4;
          margin: 12px 0 0;
          color: #fff;
          letter-spacing: -0.01em;
        }
        .rd-footer-desc {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin: 0;
          max-width: 260px;
        }
        .rd-footer-mini-badges {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-top: 10px;
          background: rgba(255, 255, 255, 0.02);
          padding: 16px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          width: 100%;
          max-width: 440px;
        }
        .rd-footer-mini-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          text-align: center;
        }
        .rd-footer-mini-badge img {
          height: 24px;
          width: auto;
          filter: brightness(0) invert(1);
          opacity: 0.9;
        }
        .rd-footer-mini-badge span {
          font-size: 9px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.03em;
          font-weight: 500;
          line-height: 1.2;
        }
        
        .rd-footer-nav-col h4 {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0 0 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          color: #fff;
        }
        .rd-footer-nav-col h4::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: block;
        }
        .rd-footer-nav-col.company h4::before { background: #3b82f6; box-shadow: 0 0 8px rgba(59, 130, 246, 0.5); }
        .rd-footer-nav-col.platform h4::before { background: #3b82f6; box-shadow: 0 0 8px rgba(59, 130, 246, 0.5); }
        .rd-footer-nav-col.resources h4::before { background: #8b5cf6; box-shadow: 0 0 8px rgba(139, 92, 246, 0.5); }
        
        .rd-footer-nav-col h4::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 24px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .rd-footer-nav-col.company h4::after { background: rgba(59, 130, 246, 0.3); }
        .rd-footer-nav-col.platform h4::after { background: rgba(59, 130, 246, 0.3); }
        .rd-footer-nav-col.resources h4::after { background: rgba(139, 92, 246, 0.3); }

        .rd-footer-nav-col ul {
          list-style: none;
          padding: 0;
          margin: 25px 0 0;
          display: flex;
          flex-direction: column;
          gap: 50px;
        }
        .rd-footer-nav-col ul li a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 15px;
          transition: all 0.2s;
          display: inline-block;
        }
        .rd-footer-nav-col ul li a:hover {
          color: #fff;
          transform: translateX(4px);
        }
        
        .rd-footer-ai-card-col {
          display: flex;
          justify-content: flex-end;
        }
        .rd-footer-ai-card {
          background: linear-gradient(135deg, rgba(10, 18, 36, 0.8) 0%, rgba(5, 10, 20, 0.9) 100%);
          border-radius: 32px;
          padding: 24px;
          width: 100%;
          max-width: 440px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          position: relative;
          overflow: hidden;
        }
        .rd-footer-ai-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 32px;
          padding: 1.5px;
          background: linear-gradient(135deg, #3b82f6 0%, transparent 40%, transparent 60%, #8b5cf6 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .rd-footer-ai-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .rd-footer-ai-info h2 {
          font-size: 32px;
          font-weight: 800;
          margin: 0 0 10px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #fff;
          letter-spacing: -0.02em;
        }
        .rd-footer-ai-spark {
          color: #3b82f6;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
        }
        .rd-footer-ai-status {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 600;
          color: #10b981;
        }
        .rd-footer-ai-status-dot {
          width: 10px;
          height: 10px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 12px #10b981;
        }
        .rd-footer-ai-avatar {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .rd-footer-ai-avatar img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.3));
        }
        .rd-footer-ai-text {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 20px;
          line-height: 1.6;
        }
        .rd-footer-ai-btns {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .rd-footer-ai-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .rd-footer-ai-btn.primary {
          background: var(--btn-primary);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .rd-footer-ai-btn.secondary {
          background: var(--btn-secondary-bg);
          border: 1px solid var(--btn-secondary-border);
        }
        .rd-footer-ai-btn:hover {
          transform: translateY(-3px);
          box-shadow: var(--btn-glow);
          border-color: rgba(59, 130, 246, 0.5);
        }
        .rd-footer-ai-btn.primary:hover {
          background: var(--btn-primary-hover);
        }
        .rd-footer-ai-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.08);
        }
        .rd-footer-ai-btn:active {
          transform: scale(0.97);
        }
        .rd-footer-ai-btn-content {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .rd-footer-ai-btn-icon {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rd-footer-ai-btn-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .rd-footer-ai-btn-title {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .rd-footer-ai-btn-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }
        .rd-footer-ai-trust {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
        }
        .rd-footer-ai-trust svg {
          color: #8b5cf6;
          opacity: 0.8;
        }
        
        .rd-footer-bottom-bar {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 20px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
        }
        .rd-footer-company-info {
          display: flex;
          align-items: center;
          gap: 24px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 15px;
        }
        .rd-footer-shield-box {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.05);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.1);
        }
        .rd-footer-info-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .rd-footer-info-divider {
          width: 1px;
          height: 20px;
          background: rgba(255, 255, 255, 0.1);
        }
        .rd-footer-socials {
          display: flex;
          gap: 16px;
        }
        .rd-footer-social-link {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .rd-footer-social-link:hover {
          transform: translateY(-4px) rotate(8deg);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }
        
        .rd-footer-social-link.linkedin { color: #0077b5; }
        .rd-footer-social-link.facebook { color: #1877f2; }
        .rd-footer-social-link.whatsapp { color: #25d366; }
        
        .rd-footer-social-link.linkedin:hover {
          background: rgba(0, 119, 181, 0.15);
          border-color: rgba(0, 119, 181, 0.4);
          box-shadow: 0 8px 25px rgba(0, 119, 181, 0.25);
        }
        .rd-footer-social-link.facebook:hover {
          background: rgba(24, 119, 242, 0.15);
          border-color: rgba(24, 119, 242, 0.4);
          box-shadow: 0 8px 25px rgba(24, 119, 242, 0.25);
        }
        .rd-footer-social-link.whatsapp:hover {
          background: rgba(37, 211, 102, 0.15);
          border-color: rgba(37, 211, 102, 0.4);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.25);
        }
        
        .rd-footer-copyright {
          text-align: center;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.01em;
        }

        @media (max-width: 1280px) {
          .rd-footer-main {
            grid-template-columns: 1fr 0.8fr 0.8fr 1fr;
          }
          .rd-footer-brand-col {
            grid-column: span 1;
          }
          .rd-footer-ai-card-col {
            grid-column: span 4;
            justify-content: center;
            margin-top: 40px;
          }
          .rd-footer-ai-card {
            max-width: 100%;
          }
        }
        @media (max-width: 1024px) {
          .rd-footer-main {
            grid-template-columns: 1fr 1fr;
          }
          .rd-footer-ai-card-col {
            grid-column: span 2;
          }
        }
        @media (max-width: 768px) {
          .rd-footer {
            padding: 60px 0 30px;
          }
          .rd-footer-main {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .rd-footer-brand-col, 
          .rd-footer-ai-card-col {
            grid-column: span 1;
          }
          .rd-footer-ai-card-col {
            justify-content: flex-start;
          }
          .rd-footer-bottom-bar {
            flex-direction: column;
            gap: 32px;
            padding: 32px 24px;
            text-align: center;
          }
          .rd-footer-company-info {
            flex-direction: column;
            gap: 20px;
          }
          .rd-footer-info-divider {
            display: none;
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
            <div className="rd-footer-main">
              {/* Brand Column */}
              <div className="rd-footer-brand-col">
                <div className="rd-footer-logo-wrap">
                  <img
                    className="rd-footer-logo-img"
                    src="/assets/logo.png"
                    alt="Recruitment Direct"
                  />
                </div>
                <h3 className="rd-footer-tagline">
                  AI-powered hiring.<br />
                  Fast. Accurate. Compliant.
                </h3>
                <p className="rd-footer-desc">
                  The intelligent way to hire top talent, every time.
                </p>

                <div className="rd-footer-mini-badges">
                  <div className="rd-footer-mini-badge">
                    <img src="/assets/compliance/rec-member.png" alt="REC" />
                    <span>Corporate Member</span>
                  </div>
                  <div className="rd-footer-mini-badge">
                    <img src="/assets/compliance/constructionline-gold.png" alt="CL" />
                    <span>Gold Member</span>
                  </div>
                  <div className="rd-footer-mini-badge">
                    <img src="/assets/compliance/cqs-iso9001.png" alt="ISO" />
                    <span>9001 Certified</span>
                  </div>
                  <div className="rd-footer-mini-badge">
                    <img src="/assets/compliance/cyber-essentials.png" alt="CE" />
                    <span>Cyber Certified</span>
                  </div>
                </div>
              </div>

              {/* Navigation Columns */}
              <div className="rd-footer-nav-col company">
                <h4>Company</h4>
                <ul>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/why-choose-us">Why RDUK</a></li>
                  <li><a href="/our-process">Our Process</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>

              <div className="rd-footer-nav-col platform">
                <h4>Platform</h4>
                <ul>
                  <li><a href="/#ai-recruitment">AI Platform</a></li>
                  <li><a href="/callpilot">CallPilot (AI Voice)</a></li>
                  <li><a href="/ai-hire-now">AI Hire Now</a></li>
                  <li><a href="/integrations">Integrations</a></li>
                  <li><a href="/security">Security</a></li>
                </ul>
              </div>

              <div className="rd-footer-nav-col resources">
                <h4>Resources</h4>
                <ul>
                  <li><a href="/#clients">Clients</a></li>
                  <li><a href="/#job-search">Job Search</a></li>
                  <li><a href="/policies">Policies</a></li>
                  <li><a href="/accreditations">Accreditations</a></li>
                  <li><a href="/news">News & Insights</a></li>
                </ul>
              </div>

              {/* AI Card Column */}
              <div className="rd-footer-ai-card-col">
                {/*
                Button Colours (System)

                → Primary buttons (main actions)
                Use gradient:
                linear-gradient(135deg, #2F80ED, #8E2DE2)

                ⸻

                → Secondary buttons
                Dark background + subtle border

                * light blue/purple glow on hover

                ⸻

                → Tertiary buttons (e.g. Watch AI Call)
                Transparent / outlined

                * subtle glow on hover

                ⸻

                → Do NOT use:

                * Flat blue buttons
                * Full green buttons (WhatsApp)
                * Different styles on same page

                ⸻

                Rule:
                Primary = gradient
                Secondary = dark
                Tertiary = outline
                */}
                <div className="rd-footer-ai-card">
                  <div className="rd-footer-ai-header">
                    <div className="rd-footer-ai-info">
                      <h2>
                        <svg className="rd-footer-ai-spark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
                          <path d="M19 4L19.8 6.2L22 7L19.8 7.8L19 10L18.2 7.8L16 7L18.2 6.2L19 4Z" fill="#C15CFF" />
                        </svg>
                        Ask AI Steve
                      </h2>
                      <div className="rd-footer-ai-status">
                        <span className="rd-footer-ai-status-dot"></span>
                        AI Online Now
                      </div>
                    </div>
                    <div className="rd-footer-ai-avatar">
                      <img src="/wp-content/uploads/2026/04/ai-steve-bot.png" alt="AI Steve" />
                    </div>
                  </div>

                  <p className="rd-footer-ai-text">
                    Instant answers and AI-powered calls
                  </p>

                  <div className="rd-footer-ai-btns">
                    <a href="/callpilot" className="rd-footer-ai-btn primary">
                      <div className="rd-footer-ai-btn-content">
                        <div className="rd-footer-ai-btn-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L3 21V15C1.5 13.5 1 11.5 1 9.5C1 5.5 4.5 2 9 2H15C19.5 2 23 5.5 23 9.5S19.5 17 15 17H7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="8" cy="9.5" r="1" fill="white" />
                            <circle cx="12" cy="9.5" r="1" fill="white" />
                            <circle cx="16" cy="9.5" r="1" fill="white" />
                          </svg>
                        </div>
                        <div className="rd-footer-ai-btn-details">
                          <p className="rd-footer-ai-btn-title">Start AI Chat</p>
                          <p className="rd-footer-ai-btn-sub">Instant answers</p>
                        </div>
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>

                    <a href="https://callpilot.pro/" className="rd-footer-ai-btn secondary">
                      <div className="rd-footer-ai-btn-content">
                        <div className="rd-footer-ai-btn-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 16.92V19.92C22 20.47 21.53 20.94 20.97 20.91C19.01 20.81 17.15 20.26 15.5 19.33C13.68 18.3 12.07 16.92 10.74 15.11C9.8 13.45 9.25 11.58 9.14 9.61C9.11 9.05 9.58 8.58 10.13 8.58H13.13C13.61 8.58 14.02 8.93 14.09 9.4C14.23 10.35 14.49 11.26 14.86 12.11C15 12.44 14.92 12.83 14.66 13.09L13.39 14.36C14.32 16 15.68 17.36 17.32 18.29L18.59 17.02C18.85 16.76 19.24 16.68 19.57 16.82C20.42 17.19 21.33 17.45 22.28 17.59C22.75 17.66 23.1 18.07 23.1 18.55V21.55" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="rd-footer-ai-btn-details">
                          <p className="rd-footer-ai-btn-title">Try AI Call</p>
                          <p className="rd-footer-ai-btn-sub">AI will call you</p>
                        </div>
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>

                    <a href="https://callpilot.pro/get-started" className="rd-footer-ai-btn secondary">
                      <div className="rd-footer-ai-btn-content">
                        <div className="rd-footer-ai-btn-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 21H21M3 10H21M3 7L12 2L21 7V10H3V7ZM5 10V18H7V10H5ZM9 10V18H11V10H9ZM13 10V18H15V10H13ZM17 10V18H19V10H17ZM3 18H21V21H3V18Z" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="rd-footer-ai-btn-details">
                          <p className="rd-footer-ai-btn-title">AI Calls for Your Business</p>
                          <p className="rd-footer-ai-btn-sub">Automate calls. Save time. Hire faster.</p>
                        </div>
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>

                  <div className="rd-footer-ai-trust">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Your data is secure and confidential.
                  </div>
                </div>
              </div>
            </div>

            <div className="rd-footer-bottom-bar">
              <div className="rd-footer-company-info">
                <div className="rd-footer-shield-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="rd-footer-info-item">Recruitment Direct UK Ltd</div>
                <div className="rd-footer-info-divider"></div>
                <div className="rd-footer-info-item">Company No: SC301107</div>
                <div className="rd-footer-info-divider"></div>
                <div className="rd-footer-info-item">VAT No: GB880406428</div>
              </div>

              <div className="rd-footer-socials">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener" className="rd-footer-social-link linkedin" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener" className="rd-footer-social-link facebook" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://wa.me/447590882626" target="_blank" rel="noopener" className="rd-footer-social-link whatsapp" aria-label="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="rd-footer-copyright">
              © {new Date().getFullYear()} Recruitment Direct UK Ltd. All rights reserved.
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
