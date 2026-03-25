"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="py-32 md:py-40 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark to-deep-navy" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 rounded-full bg-brand-orange/20 flex items-center justify-center mx-auto mb-8">
            <div className="w-6 h-6 rounded-full bg-brand-orange animate-pulse" />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            EVERY DREAM DESERVES
            <br />
            <span className="gradient-text">A GROUND TO GROW</span>
          </h2>

          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-4">
            Talent doesn&apos;t need permission. Just direction.
          </p>
          <p className="text-text-muted text-lg">
            Together, let&apos;s keep the spirit of sports alive in everyone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
