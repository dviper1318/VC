"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { marketMaps } from "@/data/marketMaps";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (val) => Math.floor(val).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 1.8,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsBand() {
  const totalCompanies = marketMaps.reduce(
    (acc, m) => acc + m.categories.reduce((a, c) => a + c.companies.length, 0),
    0
  );
  const totalCategories = marketMaps.reduce(
    (acc, m) => acc + m.categories.length,
    0
  );

  const stats = [
    { label: "Ecosystems Tracked", value: marketMaps.length },
    { label: "Sub-Categories", value: totalCategories },
    { label: "Companies Mapped", value: totalCompanies },
    { label: "Updated Weekly", value: 7, suffix: "d" },
  ];

  return (
    <section className="relative py-16 border-y border-[#1a2744]/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1fa5fd]/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#f0f4ff] to-[#1fa5fd] bg-clip-text text-transparent mb-2">
                <Counter to={stat.value} suffix={stat.suffix || ""} />
              </div>
              <div className="text-xs text-[#8899bb] uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
