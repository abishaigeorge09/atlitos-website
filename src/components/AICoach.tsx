"use client";

import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    name: "The Eye",
    status: "Building Now",
    role: "Observer",
    description:
      "Watches every shot. Flags errors instantly. Delivers post-session coaching report.",
    color: "#E85A1A",
  },
  {
    number: "02",
    name: "The Coach",
    status: "Next",
    role: "Prescriber",
    description:
      "Prescribes weekly training plans. Conversational interface. Remembers every session — your history, weaknesses, patterns.",
    color: "#1A6BFF",
  },
  {
    number: "03",
    name: "The Method",
    status: "Future",
    role: "Master Coach",
    description:
      "Curriculum-based training. Developmental pathway. Progression gates. Bollettieri methodology integrated.",
    color: "#00C27C",
  },
  {
    number: "04",
    name: "The OS",
    status: "Vision",
    role: "Daily Companion",
    description:
      "Avatar coach. Match analysis. Wearables. Nutrition. Court booking. The operating system for the tennis player.",
    color: "#F5B800",
  },
];

export default function AICoach() {
  return (
    <section id="ai-coach" className="py-24 md:py-32 px-6 relative">
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
            Evolution
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            FROM THE EYE
            <br />
            <span className="gradient-text">TO THE OS</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg">
            The AI Coach that grows with you. Four stages of evolution from
            observer to daily companion.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border-subtle hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative md:flex items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on timeline */}
                <div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2"
                  style={{ borderColor: stage.color, backgroundColor: i === 0 ? stage.color : "transparent" }}
                />

                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="glass-card rounded-2xl p-8 hover:border-brand-orange/20 transition-colors duration-300">
                    <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span
                        className="text-xs font-mono px-2 py-1 rounded-full border"
                        style={{ borderColor: stage.color, color: stage.color }}
                      >
                        {stage.status}
                      </span>
                      <span className="text-xs text-text-muted font-mono">
                        {stage.role}
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      <span className="text-text-muted">{stage.number}. </span>
                      {stage.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
