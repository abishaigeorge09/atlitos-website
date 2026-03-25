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
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#E85A1A] text-sm font-mono tracking-[0.3em] uppercase mb-4">
            Why Atlitos
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            THE AI SEES WHAT
            <br />
            <span className="gradient-text">YOUR COACH CAN&apos;T</span>
          </h2>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#1E293B]">
                  <th className="text-left p-5 text-sm text-[#64748B] font-normal">
                    Feature
                  </th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className={`p-5 text-center font-display text-base tracking-wide ${
                        c.name === "Atlitos"
                          ? "text-[#E85A1A] font-bold"
                          : "text-[#94A3B8]"
                      }`}
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, fi) => (
                  <tr key={fi} className="border-b border-[#1E293B]/50 last:border-0">
                    <td className="p-5 text-sm text-[#94A3B8]">{feature}</td>
                    {competitors.map((c) => (
                      <td key={c.name} className="p-5 text-center">
                        {c.values[fi] ? (
                          <span className={`text-lg ${c.name === "Atlitos" ? "text-[#00C27C]" : "text-[#64748B]"}`}>
                            ✓
                          </span>
                        ) : (
                          <span className="text-lg text-[#1E293B]">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
