"use client";

import { motion } from "framer-motion";

const marketData = [
  {
    label: "TAM",
    value: "$52B",
    description: "India's Sports Industry 2026, projected $130B by 2030",
    size: "w-64 h-64 md:w-80 md:h-80",
    color: "border-brand-orange/30",
    bg: "bg-brand-orange/5",
  },
  {
    label: "SAM",
    value: "$5B",
    description: "India's digital training & coaching market 2025",
    size: "w-48 h-48 md:w-60 md:h-60",
    color: "border-electric-blue/40",
    bg: "bg-electric-blue/5",
  },
  {
    label: "SOM",
    value: "$2M",
    description: "0.3% capture by Year 3 via academies & direct players",
    size: "w-32 h-32 md:w-40 md:h-40",
    color: "border-signal-green/50",
    bg: "bg-signal-green/5",
  },
];

const revenue = [
  { pct: "45%", label: "Academy Partnerships (B2B)", detail: "₹9K/mo India · $799/mo US" },
  { pct: "35%", label: "Premium AI Coaching (B2C)", detail: "$9.99/mo · $99/yr" },
  { pct: "20%", label: "Coach Avatar Store", detail: "70/30 revenue split" },
];

export default function Market() {
  return (
    <section id="market" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-surface-dark to-deep-navy" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-orange text-sm font-mono tracking-[0.3em] uppercase mb-4">
            Market Opportunity
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A MASSIVE
            <br />
            <span className="gradient-text">UNTAPPED MARKET</span>
          </h2>
        </motion.div>

        {/* TAM/SAM/SOM circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center mb-20 relative h-80 md:h-96"
        >
          {marketData.map((m, i) => (
            <div
              key={i}
              className={`absolute ${m.size} rounded-full ${m.bg} border ${m.color} flex flex-col items-center justify-center`}
            >
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.value}
              </p>
              <p className="text-xs font-mono text-text-muted tracking-wider">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Revenue streams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            THREE REVENUE STREAMS
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {revenue.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 text-center hover:border-brand-orange/30 transition-colors duration-300"
            >
              <p
                className="text-5xl font-bold gradient-text mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {r.pct}
              </p>
              <h4 className="text-lg font-bold mb-2">{r.label}</h4>
              <p className="text-sm text-text-muted">{r.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
