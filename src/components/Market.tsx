"use client";

import { motion } from "framer-motion";

const revenue = [
  { pct: "45%", label: "Academy Partnerships (B2B)", detail: "₹9K/mo India · $799/mo US" },
  { pct: "35%", label: "Premium AI Coaching (B2C)", detail: "$9.99/mo · $99/yr" },
  { pct: "20%", label: "Coach Avatar Store", detail: "70/30 revenue split" },
];

const projections = [
  { year: "Year 1", arr: "$48K", milestone: "5 academy B2B pilots" },
  { year: "Year 2", arr: "$360K", milestone: "20 academies + 2K consumers" },
  { year: "Year 3", arr: "$1.56M", milestone: "80 academies + 12K consumers" },
  { year: "Year 4", arr: "$4.5M", milestone: "Bollettieri tier + marketplace" },
];

export default function Market() {
  return (
    <section id="market" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080C14] via-[#0F1520] to-[#080C14]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#E85A1A] text-sm font-mono tracking-[0.3em] uppercase mb-4">
            Market Opportunity
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            A MASSIVE
            <br />
            <span className="gradient-text">UNTAPPED MARKET</span>
          </h2>
        </motion.div>

        {/* TAM/SAM/SOM as horizontal cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 text-center border-l-2 border-l-[#E85A1A]"
          >
            <p className="text-xs font-mono text-[#E85A1A] tracking-wider mb-2">TAM</p>
            <p className="font-display text-5xl font-bold text-white mb-2">$52B</p>
            <p className="text-sm text-[#94A3B8]">India&apos;s Sports Industry 2026</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 text-center border-l-2 border-l-[#1A6BFF]"
          >
            <p className="text-xs font-mono text-[#1A6BFF] tracking-wider mb-2">SAM</p>
            <p className="font-display text-5xl font-bold text-white mb-2">$5B</p>
            <p className="text-sm text-[#94A3B8]">Digital training &amp; coaching market</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 text-center border-l-2 border-l-[#00C27C]"
          >
            <p className="text-xs font-mono text-[#00C27C] tracking-wider mb-2">SOM</p>
            <p className="font-display text-5xl font-bold text-white mb-2">$2M</p>
            <p className="text-sm text-[#94A3B8]">0.3% capture by Year 3</p>
          </motion.div>
        </div>

        {/* Revenue streams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white">
            REVENUE STREAMS
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {revenue.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <p className="font-display text-5xl font-bold gradient-text mb-2">
                {r.pct}
              </p>
              <h4 className="text-sm font-semibold text-white mb-2">{r.label}</h4>
              <p className="text-xs text-[#64748B]">{r.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Projections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white">
            FINANCIAL PROJECTIONS
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projections.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <p className="text-xs font-mono text-[#64748B] mb-2">{p.year}</p>
              <p className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                {p.arr}
              </p>
              <p className="text-xs text-[#94A3B8]">{p.milestone}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
