"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MarketMap } from "@/data/marketMaps";

interface MarketMapDetailProps {
  map: MarketMap | null;
  onClose: () => void;
}

export default function MarketMapDetail({ map, onClose }: MarketMapDetailProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery("");
  }, [map]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (map) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [map, onClose]);

  const filteredCategories = useMemo(() => {
    if (!map) return [];
    const q = query.trim().toLowerCase();
    if (!q) return map.categories;
    return map.categories
      .map((cat) => ({
        ...cat,
        companies: cat.companies.filter((c) =>
          c.name.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.companies.length > 0);
  }, [map, query]);

  const totalCompanies = useMemo(
    () =>
      map
        ? map.categories.reduce((acc, c) => acc + c.companies.length, 0)
        : 0,
    [map]
  );

  const filteredCount = useMemo(
    () => filteredCategories.reduce((acc, c) => acc + c.companies.length, 0),
    [filteredCategories]
  );

  return (
    <AnimatePresence>
      {map && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-[#050a18]/85 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl mx-4 my-12 md:my-20 rounded-2xl border border-[#1a2744] bg-[#0a1128] overflow-hidden shadow-[0_20px_80px_-20px_rgba(31,165,253,0.25)]"
          >
            {/* Header */}
            <div className="relative px-6 md:px-8 pt-8 pb-6 border-b border-[#1a2744]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1fa5fd]/8 to-transparent" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-block px-3 py-1 rounded-full bg-[#1fa5fd]/10 border border-[#1fa5fd]/20 text-[#1fa5fd] text-xs font-medium tracking-wider uppercase mb-3"
                  >
                    {map.subtitle}
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-2xl md:text-4xl font-bold text-[#f0f4ff] mb-2"
                  >
                    {map.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm md:text-base text-[#8899bb] max-w-2xl"
                  >
                    {map.description}
                  </motion.p>
                </div>
                <button
                  onClick={onClose}
                  className="shrink-0 p-2 rounded-lg hover:bg-[#1a2744] transition-colors text-[#8899bb] hover:text-[#f0f4ff]"
                  aria-label="Close"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M15 5L5 15M5 5l10 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Search */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="relative mt-6 max-w-md"
              >
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4a5578]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14 14l-3.5-3.5M11.5 7a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Filter companies..."
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#050a18] border border-[#1a2744] text-sm text-[#f0f4ff] placeholder-[#4a5578] focus:outline-none focus:border-[#1fa5fd]/50 focus:ring-1 focus:ring-[#1fa5fd]/20 transition-all"
                />
                {query && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#8899bb] font-mono">
                    {filteredCount} / {totalCompanies}
                  </span>
                )}
              </motion.div>
            </div>

            {/* Category columns */}
            <div className="px-6 md:px-8 py-8">
              {filteredCategories.length === 0 ? (
                <div className="text-center py-16 text-[#8899bb]">
                  No companies match &quot;{query}&quot;
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {filteredCategories.map((category, catIndex) => (
                    <motion.div
                      key={catIndex}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + catIndex * 0.06 }}
                      className="rounded-xl border border-[#1a2744] bg-[#0d1630] overflow-hidden flex flex-col"
                    >
                      <div
                        className="px-4 py-3 border-b border-[#1a2744]"
                        style={{
                          background: `linear-gradient(135deg, ${category.color}18, transparent)`,
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: category.color }}
                          />
                          <h3
                            className="text-sm font-semibold"
                            style={{ color: category.color }}
                          >
                            {category.name}
                          </h3>
                        </div>
                        <span className="text-xs text-[#8899bb] mt-0.5 block">
                          {category.companies.length} companies
                        </span>
                      </div>

                      <div className="p-2 flex-1">
                        {category.companies.map((company, compIndex) => {
                          const inner = (
                            <>
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                                style={{
                                  backgroundColor: `${category.color}20`,
                                  color: category.color,
                                }}
                              >
                                {company.name.charAt(0)}
                              </div>
                              <span className="text-sm text-[#f0f4ff] truncate flex-1">
                                {company.name}
                              </span>
                              {company.url && (
                                <svg
                                  className="w-3 h-3 text-[#8899bb] opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    d="M2 10L10 2M10 2H4M10 2v6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </>
                          );
                          return (
                            <motion.div
                              key={compIndex}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay:
                                  0.15 + catIndex * 0.06 + compIndex * 0.02,
                              }}
                            >
                              {company.url ? (
                                <a
                                  href={company.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#111d40] transition-colors group/item"
                                >
                                  {inner}
                                </a>
                              ) : (
                                <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#111d40] transition-colors group/item">
                                  {inner}
                                </div>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
