"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Abishai Gousla", role: "Founder & CEO" },
  { name: "Aaron Gosula", role: "Chief Automation Officer" },
  { name: "Keerthi Vardhan Reddy", role: "COO" },
  { name: "Prashanth Reddy", role: "CMO" },
  { name: "Aarnav Gottupulla", role: "Chief Research Officer" },
  { name: "Amaeya Sesha", role: "Operations Lead" },
  { name: "Shibin Thomas", role: "Chief Visual Officer" },
  { name: "Tejas Rasoju", role: "Tech Lead" },
  { name: "Sampath", role: "Tech Co-Lead" },
  { name: "Prakhar Srivastava", role: "Product Manager" },
  { name: "Abhinav Gundla", role: "Tech Consultant" },
];

const mentors = [
  { name: "Sania Mirza", title: "Former Indian Tennis Champion" },
  { name: "Aravinda de Silva", title: "Sri Lankan Cricket Legend" },
  { name: "Sridhar Reddy", title: "Owner/Head Coach, Stag Tennis Academy" },
  { name: "Dr. JA Chowdary", title: "Chairman, ISF" },
  { name: "Padma Alluri", title: "Global CEO, IFINGLOBAL" },
  { name: "Amy Peck", title: "Founder & CEO, EndeavorXR" },
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-orange text-sm font-mono tracking-[0.3em] uppercase mb-4">
            The Team
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            BUILT BY ATHLETES,
            <br />
            <span className="gradient-text">FOR ATHLETES</span>
          </h2>
        </motion.div>

        {/* Core team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-20">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card rounded-xl p-5 text-center hover:border-brand-orange/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-orange font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h4 className="text-sm font-semibold mb-1">{member.name}</h4>
              <p className="text-xs text-text-muted">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Mentors */}
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
            MENTORS & WELL WISHERS
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card rounded-xl p-5 text-center hover:border-electric-blue/30 transition-colors duration-300"
            >
              <h4 className="text-sm font-semibold mb-1">{mentor.name}</h4>
              <p className="text-xs text-text-muted">{mentor.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
