"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#1E293B] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-bold tracking-wider text-white">
            ATLITOS
          </span>
          <span className="text-[#64748B] text-xs">
            &copy; {new Date().getFullYear()}
          </span>
        </div>

        <p className="text-[#64748B] text-xs text-center">
          The AI Coach in Your Pocket. India First, World Next.
        </p>

        <div className="flex gap-6 text-xs text-[#64748B]">
          <a
            href="https://www.instagram.com/atlitosindia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a href="mailto:contact@atlitos.com" className="hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
