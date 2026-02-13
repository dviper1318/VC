"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Maps", href: "#maps" },
    { label: "Submit", href: "#submit" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050a18]/90 backdrop-blur-xl border-b border-[#1a2744]/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#1fa5fd] to-[#002fff]"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
              H
            </span>
          </div>
          <span className="text-[#f0f4ff] font-semibold text-lg tracking-tight">
            Hartmann Capital
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#8899bb] hover:text-[#1fa5fd] transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#submit"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#1fa5fd] to-[#002fff] text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(31,165,253,0.3)] transition-shadow duration-300"
          >
            Submit Startup
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-[#8899bb]"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 bg-[#8899bb]"
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            className="block w-5 h-0.5 bg-[#8899bb]"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#0a1128]/95 backdrop-blur-xl border-b border-[#1a2744]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#8899bb] hover:text-[#1fa5fd] transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#submit"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#1fa5fd] to-[#002fff] text-white text-sm font-medium text-center"
              >
                Submit Startup
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
