"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1a2744]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#1fa5fd] to-[#002fff]" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                  H
                </span>
              </div>
              <span className="text-[#f0f4ff] font-semibold text-lg">
                Hartmann Capital
              </span>
            </div>
            <p className="text-sm text-[#8899bb] leading-relaxed">
              Investing at the frontier of technology. Backing founders building
              the next era of human capability.
            </p>
          </div>

          {/* Theses */}
          <div>
            <h4 className="text-sm font-semibold text-[#f0f4ff] uppercase tracking-wider mb-4">
              Investment Theses
            </h4>
            <ul className="space-y-2">
              {[
                "Brain-Computer Interfaces",
                "Smart Glasses & AR",
                "Generative AI",
                "Humanoid Robotics",
                "Industrial Automation",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#maps"
                    className="text-sm text-[#8899bb] hover:text-[#1fa5fd] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#f0f4ff] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.hartmanncapital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8899bb] hover:text-[#1fa5fd] transition-colors"
                >
                  hartmanncapital.com
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/felixhartmann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8899bb] hover:text-[#1fa5fd] transition-colors"
                >
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[#1a2744] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-[#4a5578]">
            &copy; {new Date().getFullYear()} Hartmann Capital. All rights
            reserved.
          </p>
          <p className="text-xs text-[#4a5578]">
            The future belongs to those who invest in it.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
