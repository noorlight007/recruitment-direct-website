"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Select from "react-select";
import { Search } from "lucide-react";

const cities = [
  "Glasgow", "Edinburgh", "Falkirk", "Aberdeen", "Dundee", "Stirling", "Perth",
  "London", "Manchester", "Birmingham", "Leeds", "Liverpool", "Newcastle",
  "Sheffield", "Nottingham", "Bristol", "Leicester", "Coventry", "Derby",
  "Cardiff", "Swansea", "Newport", "Belfast", "Derry", "Dublin", "Cork"
].map(c => ({ value: c.toLowerCase(), label: c }));

export default function SearchJobsSection() {
  const [keyword, setKeyword] = useState("");
  const [selectedCities, setSelectedCities] = useState<any[]>([]);

  return (
    <section id="search-jobs" className="section-tight dark-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans font-semibold tracking-[-0.3px] text-white leading-[1.2] mb-4"
        >
          Job Search
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="subtitle opacity-80 mb-10"
        >
          Search from our live jobs
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col md:flex-row gap-3 items-stretch"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
            <input
              type="text"
              placeholder="Job title, keyword..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-[10px] border border-white/10 focus:border-primary focus:outline-none font-body text-white bg-white/5 backdrop-blur-sm transition-colors placeholder:text-white/40"
            />
          </div>
          <div className="flex-1">
            <Select
              isMulti
              options={cities}
              value={selectedCities}
              onChange={(val) => setSelectedCities(val as any[])}
              placeholder="Select cities..."
              menuPortalTarget={typeof document !== "undefined" ? document.body : null}
              menuPosition="fixed"
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                control: (base, state) => ({
                  ...base,
                  borderRadius: "10px",
                  border: state.isFocused ? "1px solid #22c7ff" : "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "none",
                  padding: "4px 0",
                  minHeight: "60px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  "&:hover": { borderColor: "rgba(255, 255, 255, 0.2)" },
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "white",
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "rgba(255, 255, 255, 0.4)",
                }),
                input: (base) => ({
                  ...base,
                  color: "white",
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "#0c0c0c",
                  border: "1px solid rgba(0, 140, 255, 0.18)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.55)",
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isSelected ? "#22c7ff" : state.isFocused ? "rgba(255, 255, 255, 0.05)" : "transparent",
                  color: "white",
                  "&:active": { backgroundColor: "#22c7ff" },
                }),
                multiValue: (base) => ({
                  ...base,
                  backgroundColor: "rgba(34, 199, 255, 0.2)",
                  borderRadius: "6px",
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  color: "#22c7ff",
                  fontWeight: 500,
                }),
                multiValueRemove: (base) => ({
                  ...base,
                  color: "#22c7ff",
                  "&:hover": { backgroundColor: "rgba(34, 199, 255, 0.3)", color: "white" },
                }),
              }}
            />
          </div>
          <button className="btn btn-primary">
            <Search className="w-5 h-5" />
            Search
          </button>
        </motion.div>
      </div>
    </section>
  );
}
