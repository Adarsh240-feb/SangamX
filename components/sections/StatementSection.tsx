"use client";

import { Reveal } from "../ui/Reveal";

export function StatementSection() {
  return (
    <section className="relative py-28 md:py-44 bg-[#090A0F] border-y border-white/10 overflow-hidden select-none">
      {/* Background Subtle Gradient */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/10 blur-[150px] rounded-full" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal direction="up" delay={0.05}>
          <div className="font-mono text-xs font-bold tracking-widest text-indigo-400 uppercase mb-8">
            OUR CORE STATEMENT
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.05] max-w-5xl mx-auto uppercase">
            WE DON&apos;T JUST BUILD WEBSITES.
            <span className="block mt-4 gradient-accent-text">
              WE BUILD DIGITAL EXPERIENCES
            </span>
            THAT HELP BUSINESSES MOVE FORWARD.
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.25}>
          <p className="mt-8 md:mt-12 text-muted text-base md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            Every pixel, line of code, and micro-interaction is intentionally designed to deliver quantifiable speed, aesthetic authority, and business growth.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
