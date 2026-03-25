const features = [
  {
    icon: "🎯",
    title: "Gamified Drill Mode",
    description:
      "Train alone. Score every shot. AR targets, live scoring, rep counting. Three launch drills — Shadow Practice, Wall Practice, Serve Practice.",
  },
  {
    icon: "📹",
    title: "DVR Live Stream",
    description:
      "Every session is always live but fully buffered from frame one. Scrub back to any moment, slow it down, review the skeleton overlay replay.",
  },
  {
    icon: "🦴",
    title: "AI Biomechanical Analysis",
    description:
      "33-point pose detection on every frame. Auto-identifies drill type. Compares joint angles against coaching thresholds. Finds root cause errors.",
  },
  {
    icon: "📋",
    title: "AI Coach Report",
    description:
      "Natural language coaching report after every session. LLM-powered, coach-grade language. Weekly progress tracking. Like a real coach wrote it.",
  },
];

const flow = [
  { step: "01", title: "Select", desc: "Choose your drill from the menu" },
  { step: "02", title: "Calibrate", desc: "Place phone at far baseline corner" },
  { step: "03", title: "Practice", desc: "Train live with real-time AI feedback" },
  { step: "04", title: "Analyse", desc: "Review biomechanical breakdown & report" },
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 md:py-32 px-6 relative">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#E85A1A] text-sm font-mono tracking-[0.3em] uppercase mb-4">
            The Solution
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            YOUR PHONE IS NOW
            <br />
            <span className="gradient-text">YOUR COACH</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
            A mobile-first AI tennis coaching app that uses your phone camera to
            deliver real-time body mechanics analysis — zero hardware required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {features.map((feature, i) => (
            <div key={i} className="glass-card rounded-2xl p-8">
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3 className="font-display text-xl font-bold mb-3 text-white tracking-wide">
                {feature.title}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white">
            HOW IT WORKS
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {flow.map((item, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-6xl font-bold text-[#E85A1A]/20 mb-3">
                {item.step}
              </p>
              <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
              <p className="text-sm text-[#64748B]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
