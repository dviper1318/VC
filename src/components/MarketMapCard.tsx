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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onSelect(map)}
      className="group relative cursor-pointer"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1fa5fd]/10 to-[#002fff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      <div className="relative rounded-2xl border border-[#1a2744] hover:border-[#1fa5fd]/30 bg-[#0d1630]/80 backdrop-blur-sm p-6 transition-all duration-500 hover:bg-[#111d40]/80">
        {/* Category color dots */}
        <div className="flex gap-1.5 mb-4">
          {map.categories.map((cat, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: cat.color }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
            />
          ))}
        </div>

        <h3 className="text-xl font-bold text-[#f0f4ff] mb-2 group-hover:text-[#1fa5fd] transition-colors duration-300">
          {map.title}
        </h3>
        <p className="text-sm text-[#8899bb] mb-4 line-clamp-2">
          {map.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-[#8899bb]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1fa5fd]" />
            {map.categories.length} categories
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#002fff]" />
            {totalCompanies} companies
          </span>
        </div>

        {/* Hover arrow */}
        <motion.div
          className="absolute top-6 right-6 text-[#1fa5fd] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
