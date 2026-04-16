"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Particles() {
  const [particles, setParticles] = useState<
    { x: number; y: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 8,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#1fa5fd]"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -30, -10, -40, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.1, 0.4, 0.2, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function NetworkLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
    >
      {[
        { x1: 100, y1: 200, x2: 400, y2: 150, delay: 0 },
        { x1: 400, y1: 150, x2: 700, y2: 300, delay: 0.5 },
        { x1: 700, y1: 300, x2: 1000, y2: 200, delay: 1 },
        { x1: 200, y1: 400, x2: 500, y2: 350, delay: 1.5 },
        { x1: 500, y1: 350, x2: 900, y2: 450, delay: 2 },
        { x1: 300, y1: 100, x2: 600, y2: 250, delay: 0.3 },
        { x1: 800, y1: 100, x2: 1100, y2: 350, delay: 0.8 },
      ].map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#lineGradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{
            duration: 2,
            delay: line.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1fa5fd" stopOpacity="0" />
          <stop offset="50%" stopColor="#1fa5fd" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#002fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-pattern" />

      <Particles />
      <NetworkLines />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1fa5fd] rounded-full opacity-[0.03] blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1fa5fd]/10 border border-[#1fa5fd]/20 text-[#1fa5fd] text-xs font-medium tracking-widest uppercase">
            Frontier Tech Market Intelligence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
        >
          <span className="block text-[#f0f4ff]">Mapping the</span>
          <span className="block relative">
            <span className="bg-gradient-to-r from-[#1fa5fd] via-[#4f7df9] to-[#002fff] bg-clip-text text-transparent">
              Frontier
            </span>
            <motion.span
              className="absolute -inset-x-4 -inset-y-2 -z-10 rounded-3xl bg-[#1fa5fd] opacity-20 blur-3xl"
              animate={{ opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-[#8899bb] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Comprehensive ecosystem maps across BCIs, smart glasses, generative
          AI, humanoid robotics, and more. Explore the companies shaping
          tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#maps"
            className="group px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#1fa5fd] to-[#002fff] text-white font-semibold hover:shadow-[0_0_30px_rgba(31,165,253,0.3)] transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              Explore Maps
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &darr;
              </motion.span>
            </span>
          </a>
          <a
            href="#submit"
            className="px-8 py-3.5 rounded-xl border border-[#1a2744] hover:border-[#1fa5fd]/50 text-[#8899bb] hover:text-[#f0f4ff] font-semibold transition-all duration-300 hover:bg-[#1fa5fd]/5"
          >
            Submit Your Startup
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border border-[#1a2744] flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-[#1fa5fd]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
