"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Search, ChevronRight, Briefcase, Users, MapPin, Sparkles } from "lucide-react";

const LocationsMap = dynamic(() => import("./LocationsMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[350px] md:h-[500px] rounded-3xl bg-[#0c1829] border border-white/10 flex items-center justify-center">
      <div className="text-gray-400 text-sm font-semibold animate-pulse">Loading map...</div>
    </div>
  ),
});

interface Location {
  name: string;
  slug: string;
  country: string;
  county: string;
  latitude: number;
  longitude: number;
  nearbyTowns: string[];
  sectors: string[];
}

interface CountryPageClientProps {
  countrySlug: string;
  countryName: string;
  locations: Location[];
}

export default function CountryPageClient({ countrySlug, countryName, locations }: CountryPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const filteredLocations = locations.filter((loc) => {
    const query = searchTerm.toLowerCase().trim();
    if (!query) return true;

    // Search by city name
    if (loc.name.toLowerCase().includes(query)) return true;
    
    // Search by county
    if (loc.county.toLowerCase().includes(query)) return true;
    
    // Search by nearby towns
    if (loc.nearbyTowns.some((town) => town.toLowerCase().includes(query))) return true;
    
    return false;
  });

  return (
    <div className="space-y-12">
      {/* Interactive Map */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#d6b25e]" /> Interactive Coverage Map
          </h2>
          <span className="text-xs text-gray-400 hidden sm:inline-block">Click markers to view services</span>
        </div>
        <LocationsMap locations={filteredLocations} country={countrySlug} />
      </section>

      {/* Search and Grid Section */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Recruitment Directory for {countryName}
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Showing {filteredLocations.length} active recruitment locations
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search locations by town, county or nearby area..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full bg-[#0c1829] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#d6b25e] transition-colors duration-200"
            />
          </div>
        </div>

        {/* Location Grid */}
        {filteredLocations.length === 0 ? (
          <div className="text-center py-16 bg-[#0c1829] border border-white/10 rounded-3xl space-y-4">
            <p className="text-gray-400 text-lg">No locations match your search query.</p>
            <button
              onClick={() => setSearchTerm("")}
              className="text-[#d6b25e] hover:underline font-semibold text-sm"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLocations.map((loc) => (
              <div
                key={loc.slug}
                className="bg-gradient-to-br from-[#0c1829] to-[#040913] border border-white/10 rounded-2xl p-6 shadow-md hover:border-[#d6b25e]/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#d6b25e] transition-colors duration-200">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    {loc.county}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Providing expert recruitment services in {loc.name} and surrounding communities such as {loc.nearbyTowns.slice(0, 3).join(", ")}.
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/locations/${countrySlug}/${loc.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#d6b25e] hover:text-white font-bold uppercase tracking-wider transition-colors duration-200 group/link"
                  >
                    View Recruitment Services
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
