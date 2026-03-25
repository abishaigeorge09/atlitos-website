export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#E85A1A] text-sm font-mono tracking-[0.3em] uppercase mb-4">
            Get Involved
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            JOIN THE
            <br />
            <span className="gradient-text">MOVEMENT</span>
          </h2>
          <p className="text-[#94A3B8] max-w-lg mx-auto text-lg">
            Whether you&apos;re a player, academy, coach, or investor — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <a
            href="mailto:contact@atlitos.com"
            className="glass-card rounded-2xl p-8 text-center group cursor-pointer block"
          >
            <p className="font-display text-2xl font-bold mb-2 text-white group-hover:text-[#E85A1A] transition-colors">
              PARTNER WITH US
            </p>
            <p className="text-sm text-[#64748B] mb-4">
              Academies, coaches, and investors
            </p>
            <p className="text-[#E85A1A] text-sm font-mono">contact@atlitos.com</p>
          </a>

          <a
            href="https://www.instagram.com/atlitosindia"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-8 text-center group cursor-pointer block"
          >
            <p className="font-display text-2xl font-bold mb-2 text-white group-hover:text-[#1A6BFF] transition-colors">
              FOLLOW THE JOURNEY
            </p>
            <p className="text-sm text-[#64748B] mb-4">
              Updates, behind the scenes, and beta access
            </p>
            <p className="text-[#1A6BFF] text-sm font-mono">@atlitosindia</p>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-[#64748B]">
          <span>contact@atlitos.com</span>
          <span>+91 9063220106</span>
          <span>Hyderabad, India</span>
        </div>
      </div>
    </section>
  );
}
