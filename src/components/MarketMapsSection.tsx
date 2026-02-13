"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { marketMaps, type MarketMap } from "@/data/marketMaps";
import MarketMapCard from "./MarketMapCard";
import MarketMapDetail from "./MarketMapDetail";

export default function MarketMapsSection() {
  const [selectedMap, setSelectedMap] = useState<MarketMap | null>(null);

  return (
    <section id="maps" className="relative py-32">
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1fa5fd]/20 to-transparent" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#002fff] rounded-full opacity-[0.02] blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#1fa5fd]/10 border border-[#1fa5fd]/20 text-[#1fa5fd] text-xs font-medium tracking-widest uppercase mb-4"
          >
            Ecosystem Intelligence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#f0f4ff] mb-4"
          >
            Market Maps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8899bb] text-lg max-w-2xl mx-auto"
          >
            Deep dives into the companies and categories defining each frontier
            technology vertical.
          </motion.p>
        </div>

        {/* Map cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketMaps.map((map, index) => (
            <MarketMapCard
              key={map.id}
              map={map}
              index={index}
              onSelect={setSelectedMap}
            />
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <MarketMapDetail map={selectedMap} onClose={() => setSelectedMap(null)} />
    </section>
  );
}
