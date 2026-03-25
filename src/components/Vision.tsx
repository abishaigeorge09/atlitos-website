export default function Vision() {
  return (
    <section className="py-32 md:py-40 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1520] to-[#080C14]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E85A1A]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-[#E85A1A]/20 flex items-center justify-center mx-auto mb-8">
          <div className="w-6 h-6 rounded-full bg-[#E85A1A] animate-pulse" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
          EVERY DREAM DESERVES
          <br />
          <span className="gradient-text">A GROUND TO GROW</span>
        </h2>

        <p className="text-xl md:text-2xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto mb-4">
          Talent doesn&apos;t need permission. Just direction.
        </p>
        <p className="text-[#64748B] text-lg">
          Together, let&apos;s keep the spirit of sports alive in everyone.
        </p>
      </div>
    </section>
  );
}
