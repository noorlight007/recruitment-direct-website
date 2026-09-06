"use client";

// components/PoliciesHub.tsx
//
// Renders the /policies-and-compliance page: a search box with live
// autocomplete suggestions, followed by every policy grouped into
// professional categories. Built to be scanned quickly by a procurement
// reviewer building a compliance pack — search first, browse-by-category
// second.
//
// Drop this next to policies-data.ts (adjust the import path to wherever
// you keep it) and render it from app/policies-and-compliance/page.tsx.
//
// No extra npm packages required — icons are inline SVG so this works with
// whatever Tailwind config you already have.

import { useMemo, useRef, useState, useEffect } from "react";
import {
  policies,
  POLICY_CATEGORIES,
  type PolicyItem,
  type PolicyStatus,
} from "@/lib/policies-data";

function matches(policy: PolicyItem, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  return (
    policy.title.toLowerCase().includes(q) ||
    policy.category.toLowerCase().includes(q) ||
    policy.summary.toLowerCase().includes(q) ||
    policy.keywords.some((k) => k.toLowerCase().includes(q))
  );
}

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const idx = text.toLowerCase().indexOf(query.trim().toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-blue-100 text-blue-900 rounded-sm px-0.5">
        {text.slice(idx, idx + query.trim().length)}
      </mark>
      {text.slice(idx + query.trim().length)}
    </>
  );
}

const STATUS_STYLES: Record<PolicyStatus, { label: string; classes: string }> = {
  live: {
    label: "Available",
    classes: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  },
  draft: {
    label: "In Development",
    classes: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  },
  "action-needed": {
    label: "Available on Request",
    classes: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
  },
};

function PolicyCard({ policy, query }: { policy: PolicyItem; query: string }) {
  const status = STATUS_STYLES[policy.status];
  return (
    <div
      id={policy.slug}
      className="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-slate-900">
          {highlight(policy.title, query)}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${status.classes}`}
        >
          {status.label}
        </span>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {policy.summary}
      </p>

      {policy.effectiveDate && (
        <p className="mt-2 text-xs text-slate-400">
          Effective {policy.effectiveDate}
        </p>
      )}

      <div className="mt-4 flex items-center justify-between">
        {policy.status === "live" && policy.href ? (
          <a
            href={policy.href}
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-900"
          >
            View policy
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ) : (
          <a
            href="/contact"
            className="text-sm font-medium text-slate-500 hover:text-slate-700"
          >
            Request a copy →
          </a>
        )}
      </div>
    </div>
  );
}

export default function PoliciesHub() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return policies.filter((p) => matches(p, query)).slice(0, 6);
  }, [query]);

  const filteredByCategory = useMemo(() => {
    const grouped = new Map<string, PolicyItem[]>();
    for (const category of POLICY_CATEGORIES) {
      const items = policies.filter(
        (p) => p.category === category && matches(p, query)
      );
      if (items.length) grouped.set(category, items);
    }
    return grouped;
  }, [query]);

  const totalResults = useMemo(
    () => Array.from(filteredByCategory.values()).reduce((n, arr) => n + arr.length, 0),
    [filteredByCategory]
  );

  // Close the suggestion dropdown on outside click.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function selectSuggestion(policy: PolicyItem) {
    setQuery(policy.title);
    setShowSuggestions(false);
    setActiveSuggestion(-1);
    requestAnimationFrame(() => {
      document.getElementById(policy.slug)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!showSuggestions || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestion((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestion((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Enter" && activeSuggestion >= 0) {
      e.preventDefault();
      selectSuggestion(suggestions[activeSuggestion]);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      inputRef.current?.blur();
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Policies &amp; Compliance
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Everything you need for due diligence, in one place
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
          Every policy, certification and compliance statement covering how
          Recruitment Direct UK operates — built for procurement teams,
          framework reviewers and anyone building a supplier compliance pack.
        </p>
      </div>

      {/* Search */}
      <div ref={wrapperRef} className="relative mx-auto mb-10 max-w-xl">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
              setActiveSuggestion(-1);
            }}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={onKeyDown}
            placeholder="Search policies — e.g. modern slavery, insurance, GDPR, safeguarding..."
            role="combobox"
            aria-expanded={showSuggestions && suggestions.length > 0}
            aria-controls="policy-suggestions"
            aria-autocomplete="list"
            className="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-12 pr-10 text-sm text-slate-900 shadow-sm outline-none ring-blue-600 placeholder:text-slate-400 focus:ring-2"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => {
                setQuery("");
                setShowSuggestions(false);
                inputRef.current?.focus();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>

        {/* Autocomplete dropdown — pre-filled suggestions from the policies we hold */}
        {showSuggestions && suggestions.length > 0 && (
          <ul
            id="policy-suggestions"
            role="listbox"
            className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg"
          >
            {suggestions.map((s, i) => (
              <li key={s.slug} role="option" aria-selected={i === activeSuggestion}>
                <button
                  type="button"
                  onClick={() => selectSuggestion(s)}
                  onMouseEnter={() => setActiveSuggestion(i)}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm ${
                    i === activeSuggestion ? "bg-blue-50" : "hover:bg-slate-50"
                  }`}
                >
                  <span>
                    <span className="font-medium text-slate-900">
                      {highlight(s.title, query)}
                    </span>
                    <span className="ml-2 text-xs text-slate-400">{s.category}</span>
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[s.status].classes}`}
                  >
                    {STATUS_STYLES[s.status].label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Category jump nav */}
      <nav className="mb-10 flex flex-wrap justify-center gap-2">
        {POLICY_CATEGORIES.filter((c) => filteredByCategory.has(c)).map((c) => (
          <a
            key={c}
            href={`#category-${c.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
            className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-blue-300 hover:text-blue-700"
          >
            {c}
          </a>
        ))}
      </nav>

      {/* Results */}
      {totalResults === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 py-16 text-center">
          <p className="text-base font-medium text-slate-700">
            No policy matches “{query}”.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Can&apos;t find what you need?{" "}
            <a href="/contact" className="font-medium text-blue-700 hover:text-blue-900">
              Get in touch
            </a>{" "}
            and we&apos;ll send it over directly.
          </p>
        </div>
      ) : (
        <div className="space-y-14">
          {Array.from(filteredByCategory.entries()).map(([category, items]) => (
            <section
              key={category}
              id={`category-${category.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
              className="scroll-mt-24"
            >
              <h2 className="mb-4 text-lg font-semibold text-slate-900">
                {category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {items.map((policy) => (
                  <PolicyCard key={policy.slug} policy={policy} query={query} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {query && (
        <p className="mt-8 text-center text-xs text-slate-400">
          {totalResults} result{totalResults === 1 ? "" : "s"} for “{query}”
        </p>
      )}
    </div>
  );
}
