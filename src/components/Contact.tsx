"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-brand-orange text-sm font-mono tracking-[0.3em] uppercase mb-4">
            Get Involved
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            JOIN THE
            <br />
            <span className="gradient-text">MOVEMENT</span>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto text-lg">
            Whether you&apos;re a player, academy, coach, or investor — we&apos;d love to hear
            from you.
          </p>
        </motion.div>

        {/* CTA cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.a
            href="mailto:contact@atlitos.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 text-center hover:border-brand-orange/40 transition-all duration-300 group cursor-pointer block"
          >
            <p
              className="text-2xl font-bold mb-2 group-hover:text-brand-orange transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              PARTNER WITH US
            </p>
            <p className="text-sm text-text-muted mb-4">
              Academies, coaches, and investors
            </p>
            <p className="text-brand-orange text-sm font-mono">
              contact@atlitos.com
            </p>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/atlitosindia"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 text-center hover:border-electric-blue/40 transition-all duration-300 group cursor-pointer block"
          >
            <p
              className="text-2xl font-bold mb-2 group-hover:text-electric-blue transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FOLLOW THE JOURNEY
            </p>
            <p className="text-sm text-text-muted mb-4">
              Updates, behind the scenes, and beta access
            </p>
            <p className="text-electric-blue text-sm font-mono">
              @atlitosindia
            </p>
          </motion.a>
        </div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 text-sm text-text-muted"
        >
          <span>contact@atlitos.com</span>
          <span>+91 9063220106</span>
          <span>Hyderabad, India</span>
        </motion.div>
      </div>
    </section>
  );
}
