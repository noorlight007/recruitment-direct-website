"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RenewablesSectorPage() {
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
                            Renewable Energy Recruitment
                        </span>
                        <h1 className="m-0 mb-[18px] text-[36px] md:text-[56px] leading-[1.05] font-bold tracking-[-0.5px] md:tracking-[-1px] text-[#0f172a]">
                            Renewable Energy Labour & Engineering
                        </h1>
                        <p className="max-w-[920px] mx-auto text-base md:text-[20px] leading-[1.7] md:leading-[1.75] font-normal text-[#475569]">
                            Reliable, consultant-verified renewable energy labour and engineering staff supplied across key project regions throughout the UK.
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
                                Renewable Energy Labour Supply Built for Projects
                            </h2>
                            <p className="m-0 mb-4 text-[17px] leading-[1.8] text-[#475569]">
                                Recruitment Direct supplies experienced labour and engineering staff to renewable energy, infrastructure, and construction projects across the UK.
                            </p>
                            <p className="m-0 mb-4 text-[17px] leading-[1.8] text-[#475569]">
                                We support wind farms, solar developments, battery storage projects, and energy infrastructure builds with fully checked workers ready to start.
                            </p>
                            <p className="m-0 mb-4 text-[17px] leading-[1.8] text-[#475569]">
                                Our AI-driven recruitment process contacts and screens applicants 24/7 using role-specific questions, ensuring only suitable workers are progressed.
                            </p>
                            <p className="m-0 text-[17px] leading-[1.8] text-[#475569]">
                                Every applicant is then <strong>reviewed and human verified by a Recruitment Direct consultant before submission</strong>, ensuring qualifications, experience, and site-readiness are fully checked.
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
                                    "Wind Turbine Technicians", "Solar Panel Installers", "Electrical Engineers (Renewables)", "Mechanical Engineers", "Cable Pullers",
                                    "Electrical Mates", "Groundworkers", "Plant Operators", "Site Labourers", "Construction Supervisors", "Project Engineers",
                                    "Maintenance Technicians", "Commissioning Engineers"
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
                            Renewable Energy Projects Across the UK
                        </h2>
                        <p className="m-0 mb-4 text-[17px] leading-[1.8] text-[#475569]">
                            We support renewable energy developers, civil engineering contractors, infrastructure firms, and framework agreements delivering energy projects.
                        </p>
                        <p className="m-0 mb-4 text-[17px] leading-[1.8] text-[#475569]">
                            Whether you need staff for wind farms, solar installations, substations, battery storage, or grid infrastructure, Recruitment Direct ensures fully checked workers are ready to start without delay.
                        </p>
                        <p className="m-0 mb-4 text-[17px] leading-[1.8] text-[#475569]">
                            We supply renewable energy labour and engineering staff across the Highlands, Aberdeenshire, Moray, Angus, Fife, Perth & Kinross, Dumfries & Galloway, the Scottish Borders, Argyll & Bute, North East England, Yorkshire, East Anglia, the Midlands, the South West, North Wales, South Wales, and throughout the UK.
                        </p>
                        <div className="mt-7">
                            <Link href="/contact" className="btn btn-primary">
                                Get in touch with Recruitment Direct today
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
