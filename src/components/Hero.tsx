"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const TennisBall3D = dynamic(() => import("./TennisBall3D"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080C14] via-[#080C14] to-[#0F1520]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E85A1A]/5 rounded-full blur-[120px]" />

      {/* 3D Ball — behind content */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <TennisBall3D className="w-full h-full" />
      </div>

      {/* Content — above 3D */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[#E85A1A] text-sm font-mono tracking-[0.3em] uppercase mb-6">
            Train. Track. Triumph.
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 text-white"
        >
          THE AI COACH
          <br />
          <span className="gradient-text">IN YOUR POCKET</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Real-time body mechanics analysis, gamified drills, and AI coaching
          reports — all from your phone camera. Zero hardware required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-[#E85A1A] hover:bg-[#C44A12] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 glow-orange"
          >
            Join the Waitlist
          </a>
          <a
            href="#solution"
            className="border border-[#1E293B] hover:border-[#64748B] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "33", label: "Pose Landmarks" },
            { value: "60", label: "FPS Analysis" },
            { value: "100M+", label: "Players Underserved" },
            { value: "$0", label: "Hardware Required" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-[#64748B] tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-[#64748B] rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#64748B] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
