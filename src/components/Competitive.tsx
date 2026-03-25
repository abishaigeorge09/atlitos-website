"use client";

import { motion } from "framer-motion";

const features = [
  "Real-Time Body Mechanics",
  "33-Point Pose Detection",
  "Live AI Feedback",
  "Gamified Drill Mode",
  "Zero Hardware",
  "Error Detection with Fixes",
  "AI Coach Assistant",
];

const competitors = [
  { name: "Atlitos", values: [true, true, true, true, true, true, true] },
  { name: "SwingVision", values: [false, false, false, false, true, false, false] },
  { name: "Wingfield", values: [false, false, true, true, false, false, false] },
  { name: "Tennis AI", values: [false, false, false, false, true, true, false] },
];

export default function Competitive() {
  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-orange text-sm font-mono tracking-[0.3em] uppercase mb-4">
            Why Atlitos
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            THE AI SEES WHAT
            <br />
            <span className="gradient-text">YOUR COACH CAN&apos;T</span>
          </h2>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="text-left p-4 text-sm text-text-muted font-normal">
                    Feature
                  </th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className={`p-4 text-sm font-bold text-center ${
                        c.name === "Atlitos" ? "text-brand-orange" : "text-text-secondary"
                      }`}
                      style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, fi) => (
                  <tr
                    key={fi}
                    className="border-b border-border-subtle/50 last:border-0"
                  >
                    <td className="p-4 text-sm text-text-secondary">
                      {feature}
                    </td>
                    {competitors.map((c) => (
                      <td key={c.name} className="p-4 text-center">
                        {c.values[fi] ? (
                          <span className={`text-lg ${c.name === "Atlitos" ? "text-signal-green" : "text-text-muted"}`}>
                            &#10003;
                          </span>
                        ) : (
                          <span className="text-lg text-text-muted/30">
                            &mdash;
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-text-muted text-sm mt-8 max-w-lg mx-auto"
        >
          The white space: Real-time body mechanics AI accessible on any phone
          with zero hardware. Nobody is there. Atlitos is going there.
        </motion.p>
      </div>
    </section>
  );
}
