import ComplianceSection from "./ComplianceSection";

export default function Footer() {
  return (
    <div className="rd-trust-footer-wrap">
      <ComplianceSection />
      <footer className="rd-footer-v2">
        <div className="rd-shell">
          <div className="rd-footer-top">

            <div className="rd-footer-brand">
              <a href="/" className="rd-footer-logo-link" aria-label="Recruitment Direct home">
                <img src="/assets/logo.png" alt="Recruitment Direct logo" className="rd-footer-logo" />
              </a>
              <div className="rd-footer-brand-copy">
                <h3>Recruitment Direct</h3>
                <p>Technology-led recruitment. Built for speed, quality and compliance.</p>
              </div>
            </div>

            <div className="rd-footer-nav">

              <div className="rd-footer-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="/about">About</a></li>
                  <li><a href="/#clients">Our Services</a></li>
                  <li><a href="/#why-rd1">Why RD1</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>

              <div className="rd-footer-col">
                <h4>Clients</h4>
                <ul>
                  <li><a href="/#our-process">Our Process</a></li>
                  <li><a href="/#ai-recruitment">AI Recruitment</a></li>
                  <li><a href="/ai-hire-now">AI Hire Now</a></li>
                  <li><a href="/callpilot">AI Call</a></li>
                </ul>
              </div>

              <div className="rd-footer-col">
                <h4>Resources</h4>
                <ul>
                  <li><a href="/#job-search">Job Search</a></li>
                </ul>
              </div>

              <div className="rd-footer-col rd-footer-connect">
                <h4>Connect</h4>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener">
                      <span className="rd-social-icon">in</span>
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener">
                      <span className="rd-social-icon">f</span>
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/447590882626" target="_blank" rel="noopener">
                      <span className="rd-social-icon">w</span>
                      <span>WhatsApp</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          <div className="rd-footer-bottom">
            <p>© {new Date().getFullYear()} Recruitment Direct UK Ltd. All rights reserved.</p>
            <nav className="rd-legal-links" aria-label="Legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms</a>
              <a href="/cookies">Cookies</a>
              <a href="/modern-slavery">Modern Slavery</a>
              <a href="/policies">Policies</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
