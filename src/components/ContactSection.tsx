"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-[100px] px-5 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          {...fadeUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] bg-white p-8 md:p-[50px] rounded-[20px] border border-[#e2e8f0] shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
        >

          {/* LEFT */}
          <div className="flex flex-col items-start text-left">
            <span className="inline-block mb-3.5 px-3.5 py-1.5 bg-[#2563eb] text-white rounded-full text-[12px] font-bold uppercase tracking-wider">
              Get in Touch
            </span>

            <h2 className="text-[32px] md:text-[42px] font-bold text-[#0f172a] leading-[1.2] mb-3">
              Fast access to Recruitment Direct
            </h2>

            <p className="text-[#64748b] text-base md:text-lg leading-[1.7] mb-6">
              Speak to our team, message us directly, or email us for a fast response
              across Scotland and the UK.
            </p>

            <Link
              href="/contact"
              className="inline-block px-[26px] py-[14px] bg-[#2563eb] text-white rounded-[10px] font-semibold transition-all hover:bg-[#1d4ed8] hover:scale-[1.02]"
            >
              Contact Us
            </Link>
          </div>

          {/* RIGHT */}
          <div className="space-y-[25px]">

            <div className="flex flex-col">
              <span className="text-[13px] font-bold uppercase tracking-wide text-[#64748b] mb-1.5">Call</span>
              <strong className="text-[20px] text-[#0f172a]">01324 613198</strong>
              <strong className="text-[20px] text-[#0f172a]">07590 882626</strong>
            </div>

            <div className="flex flex-col items-start pb-4 border-b border-[#f1f5f9]">
              <span className="text-[13px] font-bold uppercase tracking-wide text-[#64748b] mb-1.5">WhatsApp</span>
              <a
                href="https://wa.me/447590882626"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2.5 bg-[#25D366] text-white rounded-lg font-semibold transition-all hover:bg-[#1ebe5d] hover:scale-[1.02]"
              >
                Message us
              </a>
            </div>

            <div className="flex flex-col">
              <span className="text-[13px] font-bold uppercase tracking-wide text-[#64748b] mb-1.5">Email</span>
              <strong className="text-[20px] text-[#0f172a]">sales@rd1.co.uk</strong>
            </div>

            <div className="flex flex-col pb-2">
              <span className="text-[13px] font-bold uppercase tracking-wide text-[#64748b] mb-1.5">Location</span>
              <strong className="text-[20px] text-[#0f172a]">Linlithgow, Scotland</strong>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
