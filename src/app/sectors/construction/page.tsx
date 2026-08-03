"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ConstructionSectorPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <section className="relative bg-white overflow-hidden">
                <div className="max-w-[1240px] mx-auto">

                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[980px] mx-auto mb-[55px] text-center"
                    >
                        <span className="inline-block mb-[18px] px-[18px] py-2 border border-[#dbe7ff] rounded-full bg-[#eef4ff] text-[#1e40af] text-sm font-semibold tracking-wide leading-none">
                            Construction Recruitment
                        </span>
                        <h1 className="m-0 mb-[18px] leading-[1.05] font-bold tracking-[-0.5px] md:tracking-[-1px] text-[#0f172a] mx-auto">
                            Construction
                        </h1>
                        <p className="subtitle max-w-[920px] mx-auto font-normal text-[#475569]">
                            Reliable, consultant-verified construction labour supplied across Glasgow, Edinburgh, Falkirk (see our dedicated <Link href="/locations/falkirk" className="text-blue-600 hover:underline">Recruitment Agency Falkirk</Link> page), Stirling, Livingston, Cumbernauld, Aberdeen, Dundee, throughout Scotland, and across the UK.
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
                            <h2 className="m-0 mb-[18px] leading-[1.2] font-bold text-[#0f172a] max-w-full">
                                Construction Labour Supply Built for Speed
                            </h2>
                            <p className="m-0 mb-4 leading-[1.8] text-[#475569]">
                                Recruitment Direct supplies dependable, compliant construction labour for projects of all sizes, from short-term cover through to long-term site support.
                            </p>
                            <p className="m-0 mb-4 leading-[1.8] text-[#475569]">
                                Our AI-driven recruitment process contacts and screens applicants 24/7 using role-specific questions, helping identify suitable workers faster than traditional recruitment methods.
                            </p>
                            <p className="m-0 leading-[1.8] text-[#475569]">
                                Every applicant is then <strong>reviewed and human verified by a Recruitment Direct consultant before submission</strong>, ensuring accuracy, reliability, and site-readiness.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-6 md:p-[38px] border border-[#e5e7eb] rounded-[18px] md:rounded-[24px] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                        >
                            <h2 className="m-0 mb-[18px] leading-[1.2] font-bold text-[#0f172a] max-w-full">
                                We Supply
                            </h2>
                            <ul className="m-0 pl-5 columns-1 md:columns-2 gap-[34px]">
                                {[
                                    "Groundworkers", "Construction Labourers", "General Labourers", "Skilled Labourers",
                                    "Joiners", "Shuttering Joiners", "Steel Fixers", "Electricians", "Plumbers",
                                    "Painters & Decorators", "Dry Liners", "Groundworks Gangs", "Plant Operators",
                                    "Tipper Drivers", "Traffic Marshals", "Gatemen", "Site Supervisors", "Site Managers"
                                ].map((item) => (
                                    <li key={item} className="mb-3 break-inside-avoid leading-[1.6] text-[#0f172a]">
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
                        <h2 className="m-0 mb-[18px] leading-[1.2] font-bold text-[#0f172a] max-w-full">
                            Supporting Construction Projects Across Scotland and the UK
                        </h2>
                        <p className="m-0 mb-4 leading-[1.8] text-[#475569]">
                            We support housebuilders, civil engineering contractors, fit-out contractors, infrastructure firms, and main contractors with fully checked workers ready to start.
                        </p>
                        <p className="m-0 mb-4 leading-[1.8] text-[#475569]">
                            Whether you need labour for housing, commercial developments, utilities, roads, groundworks, refurbishment, or specialist site activity, Recruitment Direct helps keep projects moving without delay.
                        </p>
                        <div className="mt-7">
                            <Link href="/contact" className="btn btn-primary">
                                Speak to Recruitment Direct
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
