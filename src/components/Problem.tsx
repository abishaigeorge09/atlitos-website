const stats = [
  {
    number: "100M+",
    text: "tennis players worldwide train with zero real-time AI feedback on body mechanics",
  },
  {
    number: "4,000+",
    text: "tennis academies in India with 3M club players — no AI training system",
  },
  {
    number: "$10–$200",
    text: "per session for professional coaching — out of reach for most players",
  },
  {
    number: "$600M+",
    text: "spent on AI tennis coaching tools in 2025 — almost none reaches individual players",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1520] to-[#080C14]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#E85A1A] text-sm font-mono tracking-[0.3em] uppercase mb-4">
            The Problem
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            THE TALENT EXISTS EVERYWHERE.
            <br />
            <span className="text-[#64748B]">THE ACCESS DOES NOT.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-8">
              <p className="font-display text-4xl md:text-5xl font-bold gradient-text mb-3">
                {stat.number}
              </p>
              <p className="text-[#94A3B8] leading-relaxed">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
