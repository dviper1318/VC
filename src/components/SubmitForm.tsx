"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  "Brain-Computer Interfaces",
  "Smart Glasses & AR",
  "Generative AI",
  "Humanoid Robotics",
  "Industrial Robotics & Automation",
  "Other",
];

const STAGES = ["Pre-Seed", "Seed", "Series A", "Series B", "Series C+", "Public"];

export default function SubmitForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    category: "",
    stage: "",
    description: "",
    founderName: "",
    founderEmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="submit" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1fa5fd]/20 to-transparent" />
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-[#1fa5fd] rounded-full opacity-[0.02] blur-[120px]" />

      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#1fa5fd]/10 border border-[#1fa5fd]/20 text-[#1fa5fd] text-xs font-medium tracking-widest uppercase mb-4"
          >
            Get Listed
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#f0f4ff] mb-4"
          >
            Submit Your Startup
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8899bb] text-lg"
          >
            Building at the frontier? Submit your company to be featured on our
            market maps.
          </motion.p>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="relative rounded-2xl border border-[#1a2744] bg-[#0d1630]/80 backdrop-blur-sm p-8"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1fa5fd]/5 to-transparent pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#8899bb] mb-2">
                Company Name *
              </label>
              <input
                type="text"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your company name"
                className="w-full px-4 py-3 rounded-xl bg-[#0a1128] border border-[#1a2744] text-[#f0f4ff] placeholder-[#4a5578] focus:outline-none focus:border-[#1fa5fd]/50 focus:ring-1 focus:ring-[#1fa5fd]/20 transition-all"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-medium text-[#8899bb] mb-2">
                Website *
              </label>
              <input
                type="url"
                name="website"
                required
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yourcompany.com"
                className="w-full px-4 py-3 rounded-xl bg-[#0a1128] border border-[#1a2744] text-[#f0f4ff] placeholder-[#4a5578] focus:outline-none focus:border-[#1fa5fd]/50 focus:ring-1 focus:ring-[#1fa5fd]/20 transition-all"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-[#8899bb] mb-2">
                Category *
              </label>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#0a1128] border border-[#1a2744] text-[#f0f4ff] focus:outline-none focus:border-[#1fa5fd]/50 focus:ring-1 focus:ring-[#1fa5fd]/20 transition-all appearance-none"
              >
                <option value="" disabled>
                  Select a category
                </option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Stage */}
            <div>
              <label className="block text-sm font-medium text-[#8899bb] mb-2">
                Stage *
              </label>
              <select
                name="stage"
                required
                value={formData.stage}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#0a1128] border border-[#1a2744] text-[#f0f4ff] focus:outline-none focus:border-[#1fa5fd]/50 focus:ring-1 focus:ring-[#1fa5fd]/20 transition-all appearance-none"
              >
                <option value="" disabled>
                  Select stage
                </option>
                {STAGES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Founder Name */}
            <div>
              <label className="block text-sm font-medium text-[#8899bb] mb-2">
                Founder Name *
              </label>
              <input
                type="text"
                name="founderName"
                required
                value={formData.founderName}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-[#0a1128] border border-[#1a2744] text-[#f0f4ff] placeholder-[#4a5578] focus:outline-none focus:border-[#1fa5fd]/50 focus:ring-1 focus:ring-[#1fa5fd]/20 transition-all"
              />
            </div>

            {/* Founder Email */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#8899bb] mb-2">
                Contact Email *
              </label>
              <input
                type="email"
                name="founderEmail"
                required
                value={formData.founderEmail}
                onChange={handleChange}
                placeholder="founder@company.com"
                className="w-full px-4 py-3 rounded-xl bg-[#0a1128] border border-[#1a2744] text-[#f0f4ff] placeholder-[#4a5578] focus:outline-none focus:border-[#1fa5fd]/50 focus:ring-1 focus:ring-[#1fa5fd]/20 transition-all"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#8899bb] mb-2">
                Brief Description *
              </label>
              <textarea
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="What does your company do? What problem are you solving?"
                className="w-full px-4 py-3 rounded-xl bg-[#0a1128] border border-[#1a2744] text-[#f0f4ff] placeholder-[#4a5578] focus:outline-none focus:border-[#1fa5fd]/50 focus:ring-1 focus:ring-[#1fa5fd]/20 transition-all resize-none"
              />
            </div>

            {/* Submit button */}
            <div className="md:col-span-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1fa5fd] to-[#002fff] text-white font-semibold hover:shadow-[0_0_30px_rgba(31,165,253,0.3)] transition-shadow duration-300"
              >
                Submit for Review
              </motion.button>
            </div>
          </div>

          {/* Success state */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 rounded-2xl bg-[#0d1630] flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1fa5fd]/10 flex items-center justify-center"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="#1fa5fd"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#f0f4ff] mb-2">
                    Submission Received
                  </h3>
                  <p className="text-[#8899bb]">
                    We&apos;ll review your company and get back to you soon.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
