"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <style jsx global>{`
        body {
          background: #020617;
        }
        .contact-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 30px;
        }
        .form-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          border-radius: 8px;
          padding: 12px;
          width: 100%;
          outline: none;
          transition: all 0.2s;
        }
        .form-input:focus {
          border-color: #2f80ed;
          background: rgba(255, 255, 255, 0.08);
        }
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
      `}</style>

      <Navbar />

      <main className="pt-[140px] pb-20">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* HERO */}
          <motion.div {...fadeUp} className="text-center mb-[50px]">
            <h1 className="text-[32px] md:text-[52px] font-bold text-white mb-[10px]">
              Speak to Our Team
            </h1>
            <p className="text-lg text-gray-400">
              Call us or send a quick enquiry — we’ll respond fast
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {/* LEFT SIDE */}
            <div className="space-y-[30px]">
              <motion.div
                {...fadeUp}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="contact-card"
              >
                <h2 className="text-[28px] font-[800] text-white mb-6 tracking-tight">
                  Contact Our Team
                </h2>

                <div className="space-y-[22px]">
                  <div className="flex flex-col">
                    <strong className="text-[12px] uppercase tracking-[0.08em] font-[700] text-gray-500 mb-1.5">
                      Call
                    </strong>
                    <a
                      href="tel:01324613198"
                      className="text-white font-semibold text-[14px] hover:text-[#2F80ED] transition-colors leading-tight"
                    >
                      01324 613198
                    </a>
                    <a
                      href="tel:07590882626"
                      className="text-white font-semibold text-[14px] hover:text-[#2F80ED] transition-colors leading-tight mt-2"
                    >
                      07590 882626
                    </a>
                  </div>

                  <div className="flex flex-col border-t border-white/10 pt-4">
                    <strong className="text-[12px] uppercase tracking-[0.08em] font-[700] text-gray-500 mb-1.5">
                      Email
                    </strong>
                    <a
                      href="mailto:sales@rd1.co.uk"
                      className="text-white font-semibold text-[14px] hover:text-[#2F80ED] transition-colors leading-tight"
                    >
                      sales@rd1.co.uk
                    </a>
                  </div>

                  <div className="flex flex-col border-t border-white/10 pt-4">
                    <strong className="text-[12px] uppercase tracking-[0.08em] font-[700] text-gray-500 mb-1.5">
                      Location
                    </strong>
                    <span className="text-white font-semibold text-lg leading-tight">
                      Linlithgow, Scotland
                    </span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-[30px] space-y-3">
                  <a href="tel:01324613198" className="btn btn-primary w-full">
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/447590882626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary w-full"
                  >
                    <svg
                      className="w-5 h-5 text-[#25D366]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.448 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* MAP */}
              <motion.div
                {...fadeUp}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="contact-card"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Office Location
                </h3>
                <div className="rounded-[12px] overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=Herkimer%20House%20Mill%20Road%20Industrial%20Estate%20Linlithgow%20EH49%207SF&output=embed"
                    className="w-full h-[300px] border-0"
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="contact-card h-fit"
            >
              <h2 className="text-[28px] font-[800] text-white mb-6 tracking-tight">
                Contact Our Team
              </h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-input"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="form-input"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="form-input"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-input"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    className="form-input min-h-[150px] md:min-h-[220px] overflow-hidden resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Contact Our Team
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}