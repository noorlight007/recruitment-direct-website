"use client";

import { useState } from "react";

export default function SearchJobsSection() {
  const [keyword, setKeyword] = useState("");

  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:p-12">
        <h2 className="text-5xl font-black tracking-tight text-black">
          Job Search
        </h2>

        <p className="mt-6 max-w-4xl text-xl leading-9 text-gray-600">
          Search live temporary, contract and permanent opportunities across
          Scotland and the UK. Updated in real-time by Recruitment Direct.
        </p>

        <div className="mt-10">
          <label className="mb-4 block text-2xl font-black text-black">
            Keyword
          </label>

          <div className="grid gap-5 md:grid-cols-[1fr_auto]">
            <input
              type="text"
              placeholder="Enter keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="h-20 rounded-xl border border-gray-300 px-8 text-2xl text-black outline-none focus:border-yellow-600"
            />

            <a
              href={keyword.trim() ? `/job_details?q=${encodeURIComponent(keyword.trim())}` : "/job_details"}
              className="inline-flex h-20 items-center justify-center rounded-xl border border-yellow-700 bg-gradient-to-b from-yellow-300 to-yellow-600 px-14 text-2xl font-black uppercase text-black shadow-md hover:opacity-90"
            >
              Search Jobs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
