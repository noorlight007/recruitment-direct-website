"use client";

import React, { useState, useEffect, useTransition } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { Plus, Edit2, Trash2, Eye, EyeOff, Save, X, Search, Filter, Loader2, ArrowLeft, PlusCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface LocationRecord {
  id: string;
  name: string;
  slug: string;
  country: string;
  county: string;
  latitude: number;
  longitude: number;
  nearbyTowns: string[];
  population?: string;
  majorEmployers?: string[];
  industrialEstates?: string[];
  businessParks?: string[];
  majorRoads?: string[];
  railwayStations?: string[];
  airports?: string[];
  sectors: string[];
  heroImage?: string;
  published: boolean;
  
  customTitle?: string;
  customMetaDescription?: string;
  customH1?: string;
  customIntro?: string;
  customEmployerContent?: string;
  customCandidateContent?: string;
  customFaqs?: FAQ[];
}

const countriesList = [
  { value: "scotland", label: "Scotland" },
  { value: "england", label: "England" },
  { value: "wales", label: "Wales" },
  { value: "northern-ireland", label: "Northern Ireland" },
  { value: "republic-of-ireland", label: "Republic of Ireland" },
];

const availableSectors = [
  "Construction", "Civil Engineering", "Engineering", "Renewable Energy", 
  "Facilities Management", "Logistics", "Healthcare", "Education", 
  "IT & Technology", "Commercial", "Office Support", "Hospitality"
];

export default function AdminPage() {
  const [locations, setLocations] = useState<LocationRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isPending, startTransition] = useTransition();

  // Editing state
  const [editingLoc, setEditingLoc] = useState<LocationRecord | null>(null);
  const [isNew, setIsNew] = useState(false);

  // Form Fields
  const [formName, setFormName] = useState("");
  const [formSlug, setFormSlug] = useState("");
  const [formCountry, setFormCountry] = useState("scotland");
  const [formCounty, setFormCounty] = useState("");
  const [formLat, setFormLat] = useState<number>(0);
  const [formLng, setFormLng] = useState<number>(0);
  const [formNearby, setFormNearby] = useState("");
  const [formPopulation, setFormPopulation] = useState("");
  const [formEmployers, setFormEmployers] = useState("");
  const [formEstates, setFormEstates] = useState("");
  const [formParks, setFormParks] = useState("");
  const [formRoads, setFormRoads] = useState("");
  const [formStations, setFormStations] = useState("");
  const [formAirports, setFormAirports] = useState("");
  const [formSectors, setFormSectors] = useState<string[]>([]);
  const [formPublished, setFormPublished] = useState(true);

  // Custom Content Overrides
  const [formCustomTitle, setFormCustomTitle] = useState("");
  const [formCustomMeta, setFormCustomMeta] = useState("");
  const [formCustomH1, setFormCustomH1] = useState("");
  const [formCustomIntro, setFormCustomIntro] = useState("");
  const [formCustomEmployer, setFormCustomEmployer] = useState("");
  const [formCustomCandidate, setFormCustomCandidate] = useState("");
  const [formCustomFaqs, setFormCustomFaqs] = useState<FAQ[]>([]);

  // Temp FAQ item
  const [tempQuestion, setTempQuestion] = useState("");
  const [tempAnswer, setTempAnswer] = useState("");

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/locations");
      const data = await res.json();
      if (Array.isArray(data)) {
        setLocations(data.sort((a, b) => a.name.localeCompare(b.name)));
      }
    } catch (err) {
      console.error("Failed to load locations", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (loc: LocationRecord) => {
    setIsNew(false);
    setEditingLoc(loc);
    setFormName(loc.name);
    setFormSlug(loc.slug);
    setFormCountry(loc.country);
    setFormCounty(loc.county);
    setFormLat(loc.latitude || 0);
    setFormLng(loc.longitude || 0);
    setFormNearby(loc.nearbyTowns ? loc.nearbyTowns.join(", ") : "");
    setFormPopulation(loc.population || "");
    setFormEmployers(loc.majorEmployers ? loc.majorEmployers.join(", ") : "");
    setFormEstates(loc.industrialEstates ? loc.industrialEstates.join(", ") : "");
    setFormParks(loc.businessParks ? loc.businessParks.join(", ") : "");
    setFormRoads(loc.majorRoads ? loc.majorRoads.join(", ") : "");
    setFormStations(loc.railwayStations ? loc.railwayStations.join(", ") : "");
    setFormAirports(loc.airports ? loc.airports.join(", ") : "");
    setFormSectors(loc.sectors || []);
    setFormPublished(loc.published);

    setFormCustomTitle(loc.customTitle || "");
    setFormCustomMeta(loc.customMetaDescription || "");
    setFormCustomH1(loc.customH1 || "");
    setFormCustomIntro(loc.customIntro || "");
    setFormCustomEmployer(loc.customEmployerContent || "");
    setFormCustomCandidate(loc.customCandidateContent || "");
    setFormCustomFaqs(loc.customFaqs || []);
  };

  const handleCreateNew = () => {
    setIsNew(true);
    setEditingLoc({
      id: "",
      name: "",
      slug: "",
      country: "scotland",
      county: "",
      latitude: 56.0,
      longitude: -4.0,
      nearbyTowns: [],
      sectors: [],
      published: true,
    });
    setFormName("");
    setFormSlug("");
    setFormCountry("scotland");
    setFormCounty("");
    setFormLat(56.0);
    setFormLng(-4.0);
    setFormNearby("");
    setFormPopulation("");
    setFormEmployers("");
    setFormEstates("");
    setFormParks("");
    setFormRoads("");
    setFormStations("");
    setFormAirports("");
    setFormSectors([]);
    setFormPublished(true);

    setFormCustomTitle("");
    setFormCustomMeta("");
    setFormCustomH1("");
    setFormCustomIntro("");
    setFormCustomEmployer("");
    setFormCustomCandidate("");
    setFormCustomFaqs([]);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formSlug || !formCountry) return;

    const payload: LocationRecord = {
      id: formSlug,
      name: formName,
      slug: formSlug.toLowerCase().replace(/\s+/g, "-"),
      country: formCountry,
      county: formCounty,
      latitude: Number(formLat),
      longitude: Number(formLng),
      nearbyTowns: formNearby ? formNearby.split(",").map((s) => s.trim()) : [],
      population: formPopulation,
      majorEmployers: formEmployers ? formEmployers.split(",").map((s) => s.trim()) : [],
      industrialEstates: formEstates ? formEstates.split(",").map((s) => s.trim()) : [],
      businessParks: formParks ? formParks.split(",").map((s) => s.trim()) : [],
      majorRoads: formRoads ? formRoads.split(",").map((s) => s.trim()) : [],
      railwayStations: formStations ? formStations.split(",").map((s) => s.trim()) : [],
      airports: formAirports ? formAirports.split(",").map((s) => s.trim()) : [],
      sectors: formSectors,
      published: formPublished,
      customTitle: formCustomTitle || undefined,
      customMetaDescription: formCustomMeta || undefined,
      customH1: formCustomH1 || undefined,
      customIntro: formCustomIntro || undefined,
      customEmployerContent: formCustomEmployer || undefined,
      customCandidateContent: formCustomCandidate || undefined,
      customFaqs: formCustomFaqs.length > 0 ? formCustomFaqs : undefined,
    };

    try {
      const res = await fetch("/api/locations", {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setEditingLoc(null);
        fetchLocations();
      } else {
        const errorData = await res.json();
        alert("Error saving: " + errorData.error);
      }
    } catch (err) {
      console.error(err);
      alert("Network error saving location");
    }
  };

  const handleDelete = async (country: string, slug: string) => {
    if (!confirm("Are you sure you want to delete this location? This cannot be undone.")) return;

    try {
      const res = await fetch(`/api/locations?country=${country}&slug=${slug}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchLocations();
      } else {
        alert("Failed to delete location");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const toggleSector = (sector: string) => {
    if (formSectors.includes(sector)) {
      setFormSectors(formSectors.filter((s) => s !== sector));
    } else {
      setFormSectors([...formSectors, sector]);
    }
  };

  const addFAQ = () => {
    if (!tempQuestion || !tempAnswer) return;
    setFormCustomFaqs([...formCustomFaqs, { question: tempQuestion, answer: tempAnswer }]);
    setTempQuestion("");
    setTempAnswer("");
  };

  const removeFAQ = (index: number) => {
    setFormCustomFaqs(formCustomFaqs.filter((_, i) => i !== index));
  };

  // Filter logic
  const filteredLocs = locations.filter((loc) => {
    const matchesSearch = loc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          loc.county.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = countryFilter === "all" || loc.country === countryFilter;
    const matchesStatus = statusFilter === "all" || 
                          (statusFilter === "published" && loc.published) ||
                          (statusFilter === "draft" && !loc.published);
    return matchesSearch && matchesCountry && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />
      <FloatingElements />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          
          {editingLoc ? (
            /* Forms Screen (Add/Edit) */
            <div className="space-y-8 bg-[#0c1829] border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl relative">
              <button
                onClick={() => setEditingLoc(null)}
                className="inline-flex items-center gap-2 text-sm text-[#d6b25e] hover:text-white transition-colors duration-200 font-semibold"
              >
                <ArrowLeft className="w-4 h-4" /> Cancel and Return
              </button>

              <div className="flex justify-between items-center border-b border-white/10 pb-6">
                <h1 className="text-3xl font-extrabold text-white">
                  {isNew ? "Create New Location" : `Edit Location: ${editingLoc.name}`}
                </h1>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-semibold text-gray-400">Published Status</label>
                  <button
                    type="button"
                    onClick={() => setFormPublished(!formPublished)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-colors ${
                      formPublished ? "bg-green-600 text-white" : "bg-yellow-600 text-white"
                    }`}
                  >
                    {formPublished ? "Published" : "Draft"}
                  </button>
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-8">
                
                {/* 1. Core Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Location Name</label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => {
                        setFormName(e.target.value);
                        if (isNew) {
                          setFormSlug(e.target.value.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, "-"));
                        }
                      }}
                      className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">URL Slug</label>
                    <input
                      type="text"
                      required
                      disabled={!isNew}
                      value={formSlug}
                      onChange={(e) => setFormSlug(e.target.value)}
                      className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e] disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Country</label>
                    <select
                      value={formCountry}
                      disabled={!isNew}
                      onChange={(e) => setFormCountry(e.target.value)}
                      className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e] disabled:opacity-50"
                    >
                      {countriesList.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">County / Region</label>
                    <input
                      type="text"
                      required
                      value={formCounty}
                      onChange={(e) => setFormCounty(e.target.value)}
                      className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Latitude</label>
                    <input
                      type="number"
                      step="any"
                      required
                      value={formLat}
                      onChange={(e) => setFormLat(Number(e.target.value))}
                      className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Longitude</label>
                    <input
                      type="number"
                      step="any"
                      required
                      value={formLng}
                      onChange={(e) => setFormLng(Number(e.target.value))}
                      className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                    />
                  </div>
                </div>

                {/* 2. Metadata / Local tags */}
                <div className="space-y-4 border-t border-white/5 pt-6">
                  <h3 className="text-xl font-bold text-white">Local Infrastructure (Comma Separated)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2">Nearby Towns (Falkirk example: Grangemouth, Larbert...)</label>
                      <input
                        type="text"
                        value={formNearby}
                        onChange={(e) => setFormNearby(e.target.value)}
                        className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2">Major Roads / Motorways (e.g. M9, A9)</label>
                      <input
                        type="text"
                        value={formRoads}
                        onChange={(e) => setFormRoads(e.target.value)}
                        className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2">Railway Stations</label>
                      <input
                        type="text"
                        value={formStations}
                        onChange={(e) => setFormStations(e.target.value)}
                        className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2">Business Parks / Commercial Hubs</label>
                      <input
                        type="text"
                        value={formParks}
                        onChange={(e) => setFormParks(e.target.value)}
                        className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2">Industrial Estates</label>
                      <input
                        type="text"
                        value={formEstates}
                        onChange={(e) => setFormEstates(e.target.value)}
                        className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2">Major Employers in Area</label>
                      <input
                        type="text"
                        value={formEmployers}
                        onChange={(e) => setFormEmployers(e.target.value)}
                        className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Sectors Checklist */}
                <div className="space-y-4 border-t border-white/5 pt-6">
                  <h3 className="text-xl font-bold text-white">Recruitment Sectors in Area</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {availableSectors.map((sector) => (
                      <button
                        key={sector}
                        type="button"
                        onClick={() => toggleSector(sector)}
                        className={`p-3 rounded-xl border text-sm font-semibold transition-all ${
                          formSectors.includes(sector)
                            ? "bg-[#d6b25e] text-[#071424] border-transparent"
                            : "bg-white/5 text-gray-300 border-white/10 hover:border-white/20"
                        }`}
                      >
                        {sector}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Custom SEO Overrides */}
                <div className="space-y-4 border-t border-white/5 pt-6">
                  <h3 className="text-xl font-bold text-white">Custom SEO Overrides (Optional - Leave blank to use auto templates)</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2">SEO Title Tag (e.g. Recruitment Agency in Falkirk | Permanent & Temporary | RDUK)</label>
                      <input
                        type="text"
                        placeholder="Automatic Template: Recruitment Agency in [Location] | Temporary & Permanent Staff | RDUK"
                        value={formCustomTitle}
                        onChange={(e) => setFormCustomTitle(e.target.value)}
                        className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2">Meta Description Tag</label>
                      <textarea
                        rows={2}
                        placeholder="Automatic template reads from local sectors and nearby towns list."
                        value={formCustomMeta}
                        onChange={(e) => setFormCustomMeta(e.target.value)}
                        className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2">Page H1 (e.g. Recruitment Agency in Falkirk)</label>
                      <input
                        type="text"
                        placeholder="Automatic Template: Recruitment Agency in [Location]"
                        value={formCustomH1}
                        onChange={(e) => setFormCustomH1(e.target.value)}
                        className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Custom Content Overrides */}
                <div className="space-y-4 border-t border-white/5 pt-6">
                  <h3 className="text-xl font-bold text-white">Custom Content Overrides (Optional - Overrides templates)</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2">Hero Intro Content (Overrides default intro paragraph)</label>
                      <textarea
                        rows={4}
                        placeholder="Default introduces services, county, major roads, and commuter networks."
                        value={formCustomIntro}
                        onChange={(e) => setFormCustomIntro(e.target.value)}
                        className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2">Employer Services Copy</label>
                      <textarea
                        rows={4}
                        placeholder="Default highlights sourcing, screening compliance, local business parks, and active candidate databases."
                        value={formCustomEmployer}
                        onChange={(e) => setFormCustomEmployer(e.target.value)}
                        className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2">Candidate / Jobseeker Services Copy</label>
                      <textarea
                        rows={4}
                        placeholder="Default links to registration and CV uploads, referencing local sectors and industries."
                        value={formCustomCandidate}
                        onChange={(e) => setFormCustomCandidate(e.target.value)}
                        className="w-full bg-[#071324] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                    </div>
                  </div>
                </div>

                {/* 6. Custom FAQs Section */}
                <div className="space-y-4 border-t border-white/5 pt-6">
                  <h3 className="text-xl font-bold text-white">Custom FAQs</h3>
                  
                  {/* Current FAQ List */}
                  <div className="space-y-3">
                    {formCustomFaqs.map((faq, idx) => (
                      <div key={idx} className="flex justify-between items-start bg-white/5 p-4 rounded-xl border border-white/10">
                        <div>
                          <p className="font-bold text-white text-sm">{faq.question}</p>
                          <p className="text-xs text-gray-400 mt-1">{faq.answer}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFAQ(idx)}
                          className="text-red-500 hover:text-red-400 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add New FAQ Form */}
                  <div className="bg-[#071324] border border-white/10 rounded-xl p-4 space-y-4">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Add Custom FAQ Item</h4>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Question (e.g. Do you have a physical branch in this city?)"
                        value={tempQuestion}
                        onChange={(e) => setTempQuestion(e.target.value)}
                        className="w-full bg-background border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                      <textarea
                        rows={2}
                        placeholder="Answer (e.g. No, but we supply compliant staff across the region through our national framework...)"
                        value={tempAnswer}
                        onChange={(e) => setTempAnswer(e.target.value)}
                        className="w-full bg-background border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#d6b25e]"
                      />
                      <button
                        type="button"
                        onClick={addFAQ}
                        className="px-4 py-2 bg-[#d6b25e] text-[#071424] font-bold rounded-xl text-xs uppercase"
                      >
                        Add FAQ Item
                      </button>
                    </div>
                  </div>
                </div>

                {/* Form Action Buttons */}
                <div className="border-t border-white/10 pt-8 flex gap-4">
                  <button
                    type="submit"
                    className="bg-[#d6b25e] text-[#071424] hover:bg-white transition-colors duration-300 font-extrabold text-sm uppercase px-8 py-4 rounded-xl flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" /> Save and Publish
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingLoc(null)}
                    className="bg-white/10 text-white hover:bg-white hover:text-[#071424] transition-colors duration-300 font-extrabold text-sm uppercase px-8 py-4 rounded-xl"
                  >
                    Cancel
                  </button>
                </div>

              </form>
            </div>
          ) : (
            /* Dashboard List Screen */
            <div className="space-y-8">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-white tracking-tight">
                    Locations CMS Panel
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">
                    Manage RDUK location landing pages for local search optimization
                  </p>
                </div>
                <button
                  onClick={handleCreateNew}
                  className="bg-[#d6b25e] text-[#071424] hover:bg-white transition-colors duration-300 font-extrabold text-sm uppercase py-4 px-6 rounded-xl flex items-center gap-2 justify-center"
                >
                  <PlusCircle className="w-4 h-4" /> Add Location
                </button>
              </div>

              {/* Filters Panel */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-[#0c1829] border border-white/10 rounded-2xl p-4">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-4 h-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#071324] border border-white/10 rounded-xl py-3 pl-9 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#d6b25e]"
                  />
                </div>

                <div>
                  <select
                    value={countryFilter}
                    onChange={(e) => setCountryFilter(e.target.value)}
                    className="w-full bg-[#071324] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#d6b25e]"
                  >
                    <option value="all">All Countries</option>
                    {countriesList.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full bg-[#071324] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#d6b25e]"
                  >
                    <option value="all">All Statuses</option>
                    <option value="published">Published</option>
                    <option value="draft">Drafts</option>
                  </select>
                </div>

                <div className="flex items-center justify-end">
                  <span className="text-xs text-gray-400 font-semibold">
                    Found {filteredLocs.length} locations
                  </span>
                </div>
              </div>

              {/* List Table */}
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-3 text-gray-400">
                  <Loader2 className="w-8 h-8 animate-spin text-[#d6b25e]" />
                  <span>Loading locations database...</span>
                </div>
              ) : filteredLocs.length === 0 ? (
                <div className="text-center py-20 bg-[#0c1829] border border-white/10 rounded-3xl text-gray-400">
                  No locations match your filter selections.
                </div>
              ) : (
                <div className="bg-[#0c1829] border border-white/10 rounded-3xl overflow-hidden shadow-xl">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-sm text-gray-300">
                      <thead className="bg-[#071324] text-xs font-semibold uppercase text-white tracking-wider border-b border-white/10">
                        <tr>
                          <th className="p-4 md:p-6">Location</th>
                          <th className="p-4 md:p-6">Country</th>
                          <th className="p-4 md:p-6">County / Region</th>
                          <th className="p-4 md:p-6">Status</th>
                          <th className="p-4 md:p-6 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {filteredLocs.map((loc) => (
                          <tr key={`${loc.country}-${loc.slug}`} className="hover:bg-white/[0.02] transition-colors">
                            <td className="p-4 md:p-6">
                              <span className="font-bold text-white block">{loc.name}</span>
                              <span className="text-xs text-gray-400 font-mono mt-0.5 block">/locations/{loc.country}/{loc.slug}/</span>
                            </td>
                            <td className="p-4 md:p-6 capitalize">{loc.country.replace("-", " ")}</td>
                            <td className="p-4 md:p-6">{loc.county}</td>
                            <td className="p-4 md:p-6">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase ${
                                loc.published 
                                  ? "bg-green-600/10 text-green-400 border border-green-500/20" 
                                  : "bg-yellow-600/10 text-yellow-400 border border-yellow-500/20"
                              }`}>
                                {loc.published ? (
                                  <>
                                    <Eye className="w-3.5 h-3.5" /> Published
                                  </>
                                ) : (
                                  <>
                                    <EyeOff className="w-3.5 h-3.5" /> Draft
                                  </>
                                )}
                              </span>
                            </td>
                            <td className="p-4 md:p-6 text-right space-x-2">
                              <button
                                onClick={() => handleEdit(loc)}
                                className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-600 border border-blue-500/20 px-3 py-1.5 rounded-lg transition-all"
                              >
                                <Edit2 className="w-3.5 h-3.5" /> Edit
                              </button>
                              <button
                                onClick={() => handleDelete(loc.country, loc.slug)}
                                className="inline-flex items-center gap-1 text-xs text-red-400 hover:text-white bg-red-500/10 hover:bg-red-600 border border-red-500/20 px-3 py-1.5 rounded-lg transition-all"
                              >
                                <Trash2 className="w-3.5 h-3.5" /> Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
