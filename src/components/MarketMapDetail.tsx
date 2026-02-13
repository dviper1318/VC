"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { MarketMap } from "@/data/marketMaps";

interface MarketMapDetailProps {
  map: MarketMap | null;
  onClose: () => void;
}

export default function MarketMapDetail({ map, onClose }: MarketMapDetailProps) {
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
          <div className="fixed inset-0 bg-[#050a18]/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl mx-4 my-20 rounded-2xl border border-[#1a2744] bg-[#0a1128] overflow-hidden"
          >
            {/* Header gradient */}
            <div className="relative px-8 pt-8 pb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1fa5fd]/5 to-transparent" />
              <div className="relative flex items-start justify-between">
                <div>
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
                    className="text-3xl md:text-4xl font-bold text-[#f0f4ff] mb-2"
                  >
                    {map.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#8899bb] max-w-2xl"
                  >
                    {map.description}
                  </motion.p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-[#1a2744] transition-colors text-[#8899bb] hover:text-[#f0f4ff]"
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
            </div>

            {/* Category columns */}
            <div className="px-8 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {map.categories.map((category, catIndex) => (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + catIndex * 0.08 }}
                    className="rounded-xl border border-[#1a2744] bg-[#0d1630] overflow-hidden"
                  >
                    {/* Category header */}
                    <div
                      className="px-4 py-3 border-b border-[#1a2744]"
                      style={{
                        background: `linear-gradient(135deg, ${category.color}15, transparent)`,
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

                    {/* Companies list */}
                    <div className="p-2">
                      {category.companies.map((company, compIndex) => (
                        <motion.div
                          key={compIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.2 + catIndex * 0.08 + compIndex * 0.03,
                          }}
                        >
                          {company.url ? (
                            <a
                              href={company.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#111d40] transition-colors group/item"
                            >
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
                                style={{
                                  backgroundColor: `${category.color}20`,
                                  color: category.color,
                                }}
                              >
                                {company.name.charAt(0)}
                              </div>
                              <span className="text-sm text-[#f0f4ff] group-hover/item:text-[#1fa5fd] transition-colors truncate">
                                {company.name}
                              </span>
                              <svg
                                className="w-3 h-3 text-[#8899bb] opacity-0 group-hover/item:opacity-100 transition-opacity ml-auto shrink-0"
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
                            </a>
                          ) : (
                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#111d40] transition-colors">
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                                style={{
                                  backgroundColor: `${category.color}20`,
                                  color: category.color,
                                }}
                              >
                                {company.name.charAt(0)}
                              </div>
                              <span className="text-sm text-[#f0f4ff] truncate">
                                {company.name}
                              </span>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
