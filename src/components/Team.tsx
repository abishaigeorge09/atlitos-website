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
  { name: "Sridhar Reddy", title: "Head Coach, Stag Tennis Academy" },
  { name: "Dr. JA Chowdary", title: "Chairman, ISF" },
  { name: "Padma Alluri", title: "Global CEO, IFINGLOBAL" },
  { name: "Amy Peck", title: "Founder & CEO, EndeavorXR" },
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 px-6 relative">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#E85A1A] text-sm font-mono tracking-[0.3em] uppercase mb-4">
            The Team
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            BUILT BY ATHLETES,
            <br />
            <span className="gradient-text">FOR ATHLETES</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-20">
          {team.map((member, i) => (
            <div key={i} className="glass-card rounded-xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-[#E85A1A]/10 border border-[#E85A1A]/30 flex items-center justify-center mx-auto mb-3">
                <span className="text-[#E85A1A] font-bold text-sm font-display">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">{member.name}</h4>
              <p className="text-xs text-[#64748B]">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white">
            MENTORS &amp; WELL WISHERS
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {mentors.map((mentor, i) => (
            <div key={i} className="glass-card rounded-xl p-5 text-center">
              <h4 className="text-sm font-semibold text-white mb-1">{mentor.name}</h4>
              <p className="text-xs text-[#64748B]">{mentor.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
