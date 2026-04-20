"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EducationSectorPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <section className="relative pt-[140px] pb-[90px] px-5 bg-white overflow-hidden">
                <div className="max-w-[1240px] mx-auto">

                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[980px] mx-auto mb-[55px] text-center"
                    >
                        <span className="inline-block mb-[18px] px-[18px] py-2 border border-[#dbe7ff] rounded-full bg-[#eef4ff] text-[#1e40af] text-sm font-semibold tracking-wide leading-none">
                            Education Recruitment
                        </span>
                        <h1 className="m-0 mb-[18px] text-[36px] md:text-[56px] leading-[1.05] font-bold tracking-[-0.5px] md:tracking-[-1px] text-[#0f172a]">
                            Education Staff Supplied Through Frameworks
                        </h1>
                        <p className="max-w-[980px] mx-auto text-base md:text-[20px] leading-[1.7] md:leading-[1.75] font-normal text-[#475569]">
                            Reliable, consultant-verified education staff supplied through established frameworks to schools, academies, and local authorities across London, Birmingham, Manchester, Leeds, Liverpool, Sheffield, Bristol, Nottingham, Leicester, Glasgow, Edinburgh, and throughout the UK.
                        </p>
                    </motion.div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[30px]">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-6 md:p-[38px] border border-[#e5e7eb] rounded-[18px] md:rounded-[24px] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                        >
                            <h2 className="m-0 mb-[18px] text-2xl md:text-[28px] leading-[1.2] font-bold text-[#0f172a]">
                                Framework-Based Education Recruitment
                            </h2>
                            <p className="m-0 mb-4 text-[17px] leading-[1.8] text-[#475569]">
                                Recruitment Direct supplies compliant education staff exclusively through approved frameworks and supplier agreements, ensuring full adherence to safeguarding and regulatory requirements.
                            </p>
                            <p className="m-0 mb-4 text-[17px] leading-[1.8] text-[#475569]">
                                We support schools, multi-academy trusts, and local authorities requiring dependable staff who meet strict compliance and vetting standards.
                            </p>
                            <p className="m-0 mb-4 text-[17px] leading-[1.8] text-[#475569]">
                                Our AI-driven recruitment process screens applicants 24/7 using role-specific questions, identifying suitable professionals quickly and efficiently.
                            </p>
                            <p className="m-0 text-[17px] leading-[1.8] text-[#475569]">
                                Every applicant is then <strong>reviewed and human verified by a Recruitment Direct consultant before submission</strong>, ensuring qualifications, safeguarding checks, and role suitability are fully confirmed.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-6 md:p-[38px] border border-[#e5e7eb] rounded-[18px] md:rounded-[24px] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                        >
                            <h2 className="m-0 mb-[18px] text-2xl md:text-[28px] leading-[1.2] font-bold text-[#0f172a]">
                                We Supply
                            </h2>
                            <ul className="m-0 pl-5 columns-1 md:columns-2 gap-[34px]">
                                {[
                                    "Teaching Assistants", "Learning Support Assistants", "SEN Support Staff", "Classroom Assistants", "Cover Supervisors",
                                    "Supply Teachers", "Primary Teachers", "Secondary Teachers", "Nursery Staff", "Early Years Practitioners", "Behaviour Support Staff"
                                ].map((item) => (
                                    <li key={item} className="mb-3 break-inside-avoid text-[17px] leading-[1.6] text-[#0f172a]">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Bottom Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="p-6 md:p-[38px] border border-[#e5e7eb] rounded-[18px] md:rounded-[24px] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                    >
                        <h2 className="m-0 mb-[18px] text-2xl md:text-[28px] leading-[1.2] font-bold text-[#0f172a]">
                            Supporting Schools and Frameworks Across the UK
                        </h2>
                        <p className="m-0 mb-4 text-[17px] leading-[1.8] text-[#475569]">
                            We work with schools, academies, colleges, and local authorities requiring reliable education staff through framework agreements.
                        </p>
                        <p className="m-0 mb-4 text-[17px] leading-[1.8] text-[#475569]">
                            Whether you need short-term cover, long-term placements, or specialist support roles, Recruitment Direct ensures fully checked staff are ready to support learning environments.
                        </p>
                        <p className="m-0 mb-4 text-[17px] leading-[1.8] text-[#475569]">
                            We supply education staff across London, Birmingham, Manchester, Leeds, Liverpool, Sheffield, Bristol, Nottingham, Leicester, Glasgow, Edinburgh, and throughout the UK.
                        </p>
                        <div className="mt-7">
                            <Link href="/contact" className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#2563eb] text-white no-underline text-base font-semibold transition-all duration-250 hover:bg-[#1d4ed8] hover:-translate-y-px">
                                Deliver reliable, fully verified education staff
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
