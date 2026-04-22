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
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-white">
      <Navbar />

      <main className="pt-[140px] pb-20">
        <div className="max-w-[1200px] mx-auto px-5">

          {/* HERO */}
          <motion.div
            {...fadeUp}
            className="text-center mb-[50px]"
          >
            <h1 className="text-[32px] md:text-[52px] font-bold text-[#0f172a] mb-[10px]">
              Contact Recruitment Direct
            </h1>
            <p className="text-lg text-[#64748b]">
              Speak to our team or message us directly for a fast response.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">

            {/* LEFT SIDE */}
            <div className="space-y-[30px]">
              <motion.div
                {...fadeUp}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="bg-white border border-[#e7ecf3] rounded-[24px] p-[30px] shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
              >
                <h2 className="text-[28px] font-[800] text-[#0b1533] mb-6 tracking-tight">Get in Touch</h2>

                <div className="space-y-[22px]">
                  <div className="flex flex-col">
                    <strong className="text-[12px] uppercase tracking-[0.08em] font-[700] text-[#98a2b3] mb-1.5">Call</strong>
                    <a href="tel:01324613198" className="text-[#101828] font-semibold text-[14px] hover:text-[#2563eb] transition-colors leading-tight">01324 613198</a>
                    <a href="tel:07590882626" className="text-[#101828] font-semibold text-[14px] hover:text-[#2563eb] transition-colors leading-tight">07590 882626</a>
                  </div>

                  <div className="flex flex-col border-t border-[#edf1f7] pt-4">
                    <strong className="text-[12px] uppercase tracking-[0.08em] font-[700] text-[#98a2b3] mb-1.5">Email</strong>
                    <a href="mailto:sales@rd1.co.uk" className="text-[#101828] font-semibold text-[14px] hover:text-[#2563eb] transition-colors leading-tight">sales@rd1.co.uk</a>
                  </div>

                  <div className="flex flex-col border-t border-[#edf1f7] pt-4">
                    <strong className="text-[12px] uppercase tracking-[0.08em] font-[700] text-[#98a2b3] mb-1.5">Location</strong>
                    <span className="text-[#101828] font-semibold text-lg leading-tight">Linlithgow, Scotland</span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-[30px] space-y-3">
                  <a
                    href="tel:01324613198"
                    className="flex items-center justify-center w-full h-[56px] rounded-[14px] bg-gradient-to-br from-[#2a6cff] to-[#1958f2] text-white font-[700] text-[16px] shadow-[0_10px_24px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-px active:scale-[0.98]"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/447590882626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-[56px] rounded-[14px] bg-[#22c55e] text-white font-[700] text-[16px] shadow-[0_10px_24px_rgba(34,197,94,0.2)] transition-all hover:-translate-y-px active:scale-[0.98]"
                  >
                    WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* MAP */}
              <motion.div
                {...fadeUp}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white border border-[#e2e8f0] rounded-[20px] p-[30px] shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#0f172a] mb-4">Office Location</h3>
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
              className="bg-white border border-[#e7ecf3] rounded-[24px] p-[30px] shadow-[0_12px_40px_rgba(15,23,42,0.06)] h-fit"
            >
              <h2 className="text-[28px] font-[800] text-[#0b1533] mb-6 tracking-tight">Contact Us</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-[12px] border border-[#cbd5e1] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full p-[12px] border border-[#cbd5e1] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-[12px] border border-[#cbd5e1] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-[12px] border border-[#cbd5e1] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    className="w-full min-h-[150px] md:min-h-[220px] p-[12px] border border-[#cbd5e1] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all overflow-hidden resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full h-[56px] rounded-[14px] bg-gradient-to-br from-[#2a6cff] to-[#1958f2] text-white font-[700] text-[16px] shadow-[0_10px_24px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-px active:scale-[0.98]"
                >
                  Contact Us
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