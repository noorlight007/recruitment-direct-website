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
                className="bg-white border border-[#e2e8f0] rounded-[20px] p-[30px] shadow-sm"
              >
                <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Get in Touch</h2>

                <div className="space-y-[18px]">
                  <div className="flex flex-col">
                    <strong className="text-sm uppercase tracking-wide text-[#64748b] mb-1">Call</strong>
                    <a href="tel:01324613198" className="text-[#0f172a] font-semibold text-lg hover:text-[#2563eb] transition-colors">01324 613198</a>
                    <a href="tel:07590882626" className="text-[#0f172a] font-semibold text-lg hover:text-[#2563eb] transition-colors">07590 882626</a>
                  </div>

                  <div className="flex flex-col">
                    <strong className="text-sm uppercase tracking-wide text-[#64748b] mb-1">WhatsApp</strong>
                    <a href="https://wa.me/447590882626" target="_blank" rel="noopener noreferrer" className="text-[#0f172a] font-semibold text-lg hover:text-[#25D366] transition-colors">Message us directly</a>
                  </div>

                  <div className="flex flex-col">
                    <strong className="text-sm uppercase tracking-wide text-[#64748b] mb-1">Email</strong>
                    <a href="mailto:sales@rd1.co.uk" className="text-[#0f172a] font-semibold text-lg hover:text-[#2563eb] transition-colors">sales@rd1.co.uk</a>
                  </div>

                  <div className="flex flex-col border-b border-[#f1f5f9] pb-4">
                    <strong className="text-sm uppercase tracking-wide text-[#64748b] mb-1">Location</strong>
                    <span className="text-[#0f172a] font-semibold text-lg">Linlithgow, Scotland</span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-[30px] space-y-3">
                  <a
                    href="tel:01324613198"
                    className="flex items-center justify-center w-full p-[14px] rounded-[10px] bg-[#2563eb] text-white font-semibold text-base transition-all hover:bg-[#1d4ed8] hover:scale-[1.01]"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/447590882626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full p-[14px] rounded-[10px] bg-[#25D366] text-white font-semibold text-base transition-all hover:bg-[#20bd5c] hover:scale-[1.01]"
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
              className="bg-white border border-[#e2e8f0] rounded-[20px] p-[30px] shadow-sm h-fit"
            >
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Contact Us</h2>
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
                  className="w-full p-[14px] rounded-[10px] bg-[#2563eb] text-white font-semibold text-base transition-all hover:bg-[#1d4ed8] hover:scale-[1.01]"
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