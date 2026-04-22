"use client";

export default function ComplianceSection() {
  return (
    <section className="rd-compliance-v2" id="compliance">
      <div className="rd-shell">
        <div className="rd-compliance-header">
          <h2>Compliance.<span> Quality.</span><span> Security.</span></h2>
          <p>Recognised standards that underpin trusted recruitment delivery.</p>
        </div>

        <div className="rd-compliance-grid">

          {/* REC */}
          <a className="rd-cert-card" href="/certificates/rec-corporate-membership.pdf" target="_blank" rel="noopener" aria-label="View REC certificate">
            <div className="rd-cert-logo-wrap">
              <img src="/assets/compliance/rec-member.png" alt="REC logo" className="rd-cert-logo" />
            </div>
            <div className="rd-cert-copy">
              <h3>REC Membership</h3>
              <p className="rd-cert-ref">00207320</p>
            </div>
            <span className="rd-cert-btn">
              View Certificate
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17L17 7M17 7H9M17 7V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          {/* ISO */}
          <a className="rd-cert-card" href="/certificates/iso-9001-2015-gb2006088.pdf" target="_blank" rel="noopener" aria-label="View ISO certificate">
            <div className="rd-cert-logo-wrap">
              <img src="/assets/compliance/cqs-iso9001.png" alt="ISO logo" className="rd-cert-logo" />
            </div>
            <div className="rd-cert-copy">
              <h3>ISO 9001:2015</h3>
              <p className="rd-cert-ref">GB2006088</p>
            </div>
            <span className="rd-cert-btn">
              View Certificate
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17L17 7M17 7H9M17 7V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          {/* Constructionline */}
          <a className="rd-cert-card" href="/certificates/constructionline-gold-1324569.pdf" target="_blank" rel="noopener" aria-label="View Constructionline certificate">
            <div className="rd-cert-logo-wrap">
              <img src="/assets/compliance/constructionline-gold.png" alt="Constructionline logo" className="rd-cert-logo" />
            </div>
            <div className="rd-cert-copy">
              <h3>Constructionline Gold</h3>
              <p className="rd-cert-ref">1324569</p>
            </div>
            <span className="rd-cert-btn">
              View Certificate
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17L17 7M17 7H9M17 7V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          {/* Cyber */}
          <a className="rd-cert-card" href="/certificates/cyber-essentials-4686a995.pdf" target="_blank" rel="noopener" aria-label="View Cyber Essentials certificate">
            <div className="rd-cert-logo-wrap">
              <img src="/assets/compliance/cyber-essentials.png" alt="Cyber Essentials logo" className="rd-cert-logo" />
            </div>
            <div className="rd-cert-copy">
              <h3>Cyber Essentials</h3>
              <p className="rd-cert-ref">4686a995</p>
            </div>
            <span className="rd-cert-btn">
              View Certificate
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17L17 7M17 7H9M17 7V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

        </div>

        <div className="rd-trust-line">
          <span className="rd-trust-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3l7 3v5c0 5.25-3.25 8.75-7 10-3.75-1.25-7-4.75-7-10V6l7-3z" fill="none" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M9.2 12.3l1.9 1.9 3.9-4.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <p>Verified credentials. Transparent proof. Trusted delivery.</p>
        </div>
      </div>
    </section>
  );
}
