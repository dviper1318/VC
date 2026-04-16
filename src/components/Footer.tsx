"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative border-t border-[#1a2744]">
      {/* CTA strip */}
      <div className="relative overflow-hidden border-b border-[#1a2744]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1fa5fd]/5 via-transparent to-[#002fff]/5" />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#f0f4ff] mb-2">
                Stay ahead of the frontier.
              </h3>
              <p className="text-[#8899bb]">
                Get new market maps and ecosystem updates in your inbox.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="relative flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@frontier.tech"
                className="flex-1 px-4 py-3 rounded-xl bg-[#0a1128] border border-[#1a2744] text-[#f0f4ff] placeholder-[#4a5578] focus:outline-none focus:border-[#1fa5fd]/50 focus:ring-1 focus:ring-[#1fa5fd]/20 transition-all"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1fa5fd] to-[#002fff] text-white font-semibold hover:shadow-[0_0_30px_rgba(31,165,253,0.3)] transition-shadow whitespace-nowrap"
              >
                Subscribe
              </motion.button>
              {subscribed && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-7 left-0 text-xs text-[#1fa5fd]"
                >
                  Subscribed. We&apos;ll be in touch.
                </motion.span>
              )}
            </form>
          </div>
        </div>
      </div>

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
              <li>
                <a
                  href="#submit"
                  className="text-sm text-[#8899bb] hover:text-[#1fa5fd] transition-colors"
                >
                  Submit a startup
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
