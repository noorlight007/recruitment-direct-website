"use client";

export default function GeneralSection() {
  return (
    <>
      {/* ========================= */}
      {/* AI SPEED SECTION */}
      {/* ========================= */}

      <section className="ai-speed-section" id="about">

          {/* HERO */}
          <div className="hero-grid">

              <div className="hero-content">

                  <h1>
                      <span className="navy">AI SPEED.</span><br />
                      <span className="gold">HUMAN VERIFICATION.</span>
                  </h1>

                  <ul className="hero-points">
                      <li>Fast sourcing.</li>
                      <li>Verified applicants.</li>
                      <li>Real consultant oversight.</li>
                  </ul>

                  <p className="hero-text">
                      We combine advanced recruitment technology with experienced consultants
                      to deliver faster hiring without removing human decision-making.
                  </p>

                  <div className="hero-buttons">
                      <a href="#" className="btn-gold">Request Staff</a>
                      <a href="#" className="btn-outline">AI Hire Now</a>
                  </div>

              </div>

              <div className="hero-image">

                  <img src="/images/steven-peddie.jpg" alt="Steven Peddie" />

                  <div className="hero-overlay">
                      <h3>Steven Peddie</h3>
                      <span>Director</span>
                  </div>

              </div>

          </div>

          {/* TRUST BAR */}

          <div className="trust-bar">

              <div className="trust-item">✔ Faster response times</div>

              <div className="trust-item">✔ Consultant verified</div>

              <div className="trust-item">✔ Real people. Real recruitment.</div>

              <div className="trust-item">✔ Built for modern workforce delivery</div>

          </div>

          {/* FLOW */}

          <div className="flow-section">

              <h2>OUR RECRUITMENT FLOW</h2>

              <div className="flow-grid">

                  <div className="flow-card">
                      {/* <span>01</span> */}
                      <h3>Application Underneath</h3>
                      <p>Job Applicant Received</p>
                  </div>

                  <div className="flow-card">
                      {/* <span>02</span> */}
                      <h3>AI CALLS</h3>
                      <p>Applicants contacted instantly.</p>
                  </div>

                  <div className="flow-card">
                      {/* <span>03</span> */}
                      <h3>SCREENING</h3>
                      <p>Experience and suitability checked.</p>
                  </div>

                  <div className="flow-card">
                      {/* <span>04</span> */}
                      <h3>TRAFFIC LIGHT SCORE</h3>
                      <p>Applicants ranked and prioritised.</p>
                  </div>

                  <div className="flow-card">
                      {/* <span>05</span> */}
                      <h3>SUBMIT FAST</h3>
                      <p>Verified applicants submitted quickly.</p>
                  </div>

              </div>

          </div>

          {/* CONSULTANTS */}

          <div className="consultant-section">

              <div className="consultant-left">

                  <h2>
                      REAL CONSULTANTS.<br />
                      REAL RESULTS.
                  </h2>

                  <p>
                      Technology moves faster.<br />
                      People make the final decision.
                  </p>

              </div>

              {/* NICOLA */}

              <div className="consultant-card">

                  <img src="/images/nicola.jpg" alt="Nicola" style={{ objectFit: "fixed" as any }} />

                  <div className="consultant-info">

                      <h3>Nicola</h3>

                      <span>Manager</span>

                      <p>
                          Leading recruitment delivery with a focus on compliance,
                          workforce quality and client service.
                      </p>

                  </div>

              </div>

              {/* OLIA */}

              <div className="consultant-card">

                  <img src="/images/olia.jpg" alt="Olia" style={{ objectFit: "cover" }} />

                  <div className="consultant-info">

                      <h3>Olia</h3>

                      <span>Consultant</span>

                      <p>
                          Supporting clients and applicants through fast,
                          professional recruitment solutions.
                      </p>

                  </div>

              </div>

          </div>

          {/* SECTORS */}

          <div className="sector-section">

              <h2>THE 8 SECTORS WE SUPPLY</h2>

              <div className="sector-grid">

                  <div className="sector-card">
                      <img src="/images/construction.jpg" alt="" />
                      <span>Construction</span>
                  </div>

                  <div className="sector-card">
                      <img src="/images/engineering.jpg" alt="" />
                      <span>Engineering</span>
                  </div>

                  <div className="sector-card">
                      <img src="/images/renewables.jpg" alt="" />
                      <span>Renewables</span>
                  </div>

                  <div className="sector-card">
                      <img src="/images/logistics.jpg" alt="" />
                      <span>Logistics</span>
                  </div>

                  <div className="sector-card">
                      <img src="/images/healthcare.jpg" alt="" />
                      <span>Healthcare</span>
                  </div>

                  <div className="sector-card">
                      <img src="/images/education.jpg" alt="" />
                      <span>Education</span>
                  </div>

                  <div className="sector-card">
                      <img src="/images/it-tech.jpg" alt="" />
                      <span>IT & Tech</span>
                  </div>

                  <div className="sector-card">
                      <img src="/images/commercial.jpg" alt="" />
                      <span>Commercial</span>
                  </div>

              </div>

          </div>

      </section>

      <style dangerouslySetInnerHTML={{ __html: `

      .ai-speed-section{
          background:#ffffff;
          padding:90px 50px;
          font-family:Arial,sans-serif;
          color:#07142f;
      }

      .hero-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:70px;
          align-items:center;
      }

      .hero-content h1{
          font-size:82px;
          line-height:0.95;
          margin-bottom:35px;
          font-weight:800;
      }

      .navy{
          color:#07142f;
      }

      .gold{
          color:#d8a126;
      }

      .hero-points{
          list-style:none;
          padding:0;
          margin-bottom:30px;
      }

      .hero-points li{
          font-size:26px;
          margin-bottom:18px;
          font-weight:600;
      }

      .hero-points li::before{
          content:"✓";
          color:#d8a126;
          margin-right:12px;
      }

      .hero-text{
          font-size:23px;
          line-height:1.7;
          max-width:700px;
          margin-bottom:40px;
      }

      .hero-buttons{
          display:flex;
          gap:20px;
          flex-wrap:wrap;
      }

      .btn-gold{
          background:#d8a126;
          color:#ffffff;
          padding:20px 42px;
          border-radius:10px;
          text-decoration:none;
          font-size:18px;
          font-weight:700;
      }

      .btn-outline{
          border:2px solid #d8a126;
          color:#07142f;
          padding:20px 42px;
          border-radius:10px;
          text-decoration:none;
          font-size:18px;
          font-weight:700;
      }

      .hero-image{
          position:relative;
          overflow:hidden;
          border-radius:28px;
      }

      .hero-image img{
          width:100%;
          height:100%;
          min-height:720px;
          object-fit:cover;
          display:block;
      }

      .hero-image::after{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(
              90deg,
              rgba(255,255,255,0.75) 0%,
              rgba(7,20,47,0.05) 35%,
              rgba(0,0,0,0.55) 100%
          );
      }

      .hero-overlay{
          position:absolute;
          bottom:45px;
          left:45px;
          z-index:2;
          color:#ffffff;
          border-left:3px solid #d8a126;
          padding-left:16px;
      }

      .hero-overlay h3{
          font-size:38px;
          margin:0 0 8px;
      }

      .hero-overlay span{
          color:#d8a126;
          font-size:20px;
          font-weight:700;
      }

      .trust-bar{
          margin-top:70px;
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
      }

      .trust-item{
          background:#ffffff;
          border:1px solid #ececec;
          border-radius:16px;
          padding:28px;
          text-align:center;
          font-size:18px;
          font-weight:700;
          box-shadow:0 8px 30px rgba(0,0,0,0.04);
      }

      .flow-section{
          margin-top:100px;
      }

      .flow-section h2,
      .sector-section h2{
          text-align:center;
          font-size:54px;
          margin-bottom:55px;
          color:#07142f;
      }

      .flow-grid{
          display:grid;
          grid-template-columns:repeat(5,1fr);
          gap:25px;
      }

      .flow-card{
          background:#ffffff;
          border:1px solid #ececec;
          border-radius:20px;
          padding:45px 30px;
          text-align:center;
          box-shadow:0 8px 30px rgba(0,0,0,0.04);
      }

      .flow-card span{
          color:#d8a126;
          font-size:44px;
          font-weight:800;
      }

      .flow-card h3{
          font-size:24px;
          margin:22px 0 18px;
          line-height:1.3;
      }

      .flow-card p{
          font-size:18px;
          line-height:1.7;
      }

      .consultant-section{
          margin-top:110px;
          background:#f8f9fc;
          border-radius:28px;
          padding:50px;
          display:grid;
          grid-template-columns:1fr 1fr 1fr;
          gap:30px;
          align-items:stretch;
      }

      .consultant-left{
          display:flex;
          flex-direction:column;
          justify-content:center;
      }

      .consultant-left h2{
          font-size:62px;
          line-height:1.05;
          margin-bottom:30px;
      }

      .consultant-left p{
          font-size:24px;
          line-height:1.7;
      }

      .consultant-card{
          background:#ffffff;
          border-radius:20px;
          overflow:hidden;
          box-shadow:0 10px 35px rgba(0,0,0,0.06);
          display:flex;
          flex-direction:column;
          height:100%;
      }

      .consultant-card img{
          width:100%;
          height:420px;
          object-fit:fixed;
      }

      .consultant-info{
          padding:30px;
          display:flex;
          flex-direction:column;
          flex-grow:1;
      }

      .consultant-info h3{
          font-size:34px;
          margin-bottom:8px;
      }

      .consultant-info span{
          color:#d8a126;
          font-size:22px;
          font-weight:700;
      }

      .consultant-info p{
          margin-top:20px;
          font-size:18px;
          line-height:1.7;
          flex-grow:1;
      }

      .sector-section{
          margin-top:110px;
      }

      .sector-grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:22px;
      }

      .sector-card{
          position:relative;
          overflow:hidden;
          border-radius:18px;
      }

      .sector-card img{
          width:100%;
          height:230px;
          object-fit:cover;
          display:block;
      }

      .sector-card::after{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(
              180deg,
              rgba(7,20,47,0.05) 0%,
              rgba(0,0,0,0.78) 100%
          );
      }

      .sector-card span{
          position:absolute;
          bottom:20px;
          left:20px;
          z-index:2;
          color:#ffffff;
          font-size:28px;
          font-weight:700;
      }

      @media(max-width:1200px){

          .flow-grid{
              grid-template-columns:repeat(2,1fr);
          }

          .sector-grid{
              grid-template-columns:repeat(2,1fr);
          }

          .consultant-section{
              grid-template-columns:1fr;
          }

      }

      @media(max-width:900px){

          .hero-grid{
              grid-template-columns:1fr;
          }

          .trust-bar{
              grid-template-columns:1fr;
          }

          .flow-grid{
              grid-template-columns:1fr;
          }

          .sector-grid{
              grid-template-columns:1fr;
          }

          .hero-content h1{
              font-size:54px;
          }

          .flow-section h2,
          .sector-section h2{
              font-size:38px;
          }

          .consultant-left h2{
              font-size:42px;
          }

      }

      ` }} />
    </>
  );
}
