"use client";

import { motion } from "framer-motion";
import type { MarketMap } from "@/data/marketMaps";

interface MarketMapCardProps {
  map: MarketMap;
  index: number;
  onSelect: (map: MarketMap) => void;
}

export default function MarketMapCard({
  map,
  index,
  onSelect,
}: MarketMapCardProps) {
  const totalCompanies = map.categories.reduce(
    (acc, cat) => acc + cat.companies.length,
    0
  );

  // Take first 6 companies across categories for preview chips
  const previewCompanies = map.categories
    .flatMap((c) => c.companies.map((comp) => ({ ...comp, color: c.color })))
    .slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onClick={() => onSelect(map)}
      whileHover={{ y: -4 }}
      className="group relative cursor-pointer"
    >
      {/* Gradient border on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#1fa5fd]/40 via-transparent to-[#002fff]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1fa5fd]/10 to-[#002fff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      <div className="relative h-full rounded-2xl border border-[#1a2744] group-hover:border-transparent bg-[#0d1630]/90 backdrop-blur-sm p-6 transition-all duration-500 group-hover:bg-[#111d40]/90 flex flex-col">
        {/* Category color dots */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-1.5">
            {map.categories.map((cat, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: cat.color }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + i * 0.05, duration: 0.3 }}
              />
            ))}
          </div>
          <span className="text-[10px] font-mono text-[#4a5578] uppercase tracking-widest">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#f0f4ff] mb-2 group-hover:text-[#1fa5fd] transition-colors duration-300">
          {map.title}
        </h3>
        <p className="text-sm text-[#8899bb] mb-5 line-clamp-2 flex-grow">
          {map.description}
        </p>

        {/* Company preview chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {previewCompanies.map((company, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 + i * 0.04, duration: 0.3 }}
              className="text-[10px] px-2 py-1 rounded-md border bg-[#0a1128]/60 truncate max-w-[110px]"
              style={{
                borderColor: `${company.color}30`,
                color: company.color,
              }}
            >
              {company.name}
            </motion.span>
          ))}
          {totalCompanies > 6 && (
            <span className="text-[10px] px-2 py-1 rounded-md border border-[#1a2744] bg-[#0a1128]/60 text-[#8899bb]">
              +{totalCompanies - 6} more
            </span>
          )}
        </div>

        {/* Stats footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1a2744]/60">
          <div className="flex items-center gap-3 text-xs text-[#8899bb]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1fa5fd]" />
              {map.categories.length} categories
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#002fff]" />
              {totalCompanies} companies
            </span>
          </div>
          <motion.div
            className="text-[#1fa5fd] opacity-50 group-hover:opacity-100 transition-opacity"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m-4-4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
