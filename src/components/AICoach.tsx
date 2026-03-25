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
    active: true,
  },
  {
    number: "02",
    name: "The Coach",
    status: "Next",
    role: "Prescriber",
    description:
      "Prescribes weekly training plans. Conversational interface. Remembers every session — your history, weaknesses, patterns.",
    color: "#1A6BFF",
    active: false,
  },
  {
    number: "03",
    name: "The Method",
    status: "Future",
    role: "Master Coach",
    description:
      "Curriculum-based training. Developmental pathway. Progression gates. Bollettieri methodology integrated.",
    color: "#00C27C",
    active: false,
  },
  {
    number: "04",
    name: "The OS",
    status: "Vision",
    role: "Daily Companion",
    description:
      "Avatar coach. Match analysis. Wearables. Nutrition. Court booking. The operating system for the tennis player.",
    color: "#F5B800",
    active: false,
  },
];

export default function AICoach() {
  return (
    <section id="ai-coach" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080C14] via-[#0F1520] to-[#080C14]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#E85A1A] text-sm font-mono tracking-[0.3em] uppercase mb-4">
            Evolution
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            FROM THE EYE
            <br />
            <span className="gradient-text">TO THE OS</span>
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-lg">
            The AI Coach that grows with you. Four stages of evolution from
            observer to daily companion.
          </p>
        </motion.div>

        <div className="space-y-6">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ backgroundColor: stage.color }}
              />

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-4 md:w-48 shrink-0">
                  <span
                    className="font-display text-3xl font-bold"
                    style={{ color: stage.color }}
                  >
                    {stage.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white tracking-wide">
                      {stage.name}
                    </h3>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full border inline-block mt-1"
                      style={{ borderColor: stage.color, color: stage.color }}
                    >
                      {stage.status}
                    </span>
                  </div>
                </div>

                <p className="text-[#94A3B8] text-sm leading-relaxed flex-1">
                  {stage.description}
                </p>

                <span className="text-xs text-[#64748B] font-mono shrink-0">
                  {stage.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[#64748B] text-sm mt-8 font-mono"
        >
          Observer → Prescriber → Master Coach → Daily Companion
        </motion.p>
      </div>
    </section>
  );
}
