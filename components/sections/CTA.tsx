"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { MagneticButton } from "../ui/MagneticButton";

export function CTA() {
  return (
    <section className="relative py-28 md:py-44 bg-[#090A0F] overflow-hidden">
      {/* Background Animated Gradient Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-t from-indigo-600/20 via-purple-600/15 to-transparent blur-[160px] rounded-full" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal direction="up" delay={0.05}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 font-mono text-xs font-bold text-white uppercase tracking-widest mb-8">
            <span>LET&apos;S COLLABORATE</span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <h2 className="display-title font-black text-white uppercase tracking-tighter max-w-4xl mx-auto">
            HAVE AN IDEA? <br />
            <span className="gradient-accent-text">LET&apos;S BUILD IT.</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.25}>
          <p className="mt-6 md:mt-8 text-base md:text-xl text-muted leading-relaxed max-w-xl mx-auto font-normal">
            Tell us what you&apos;re building and let&apos;s turn the concept into an extraordinary digital experience.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.35}>
          <div className="mt-10 md:mt-12 flex justify-center">
            <MagneticButton dataCursor="TALK">
              <Link
                href="/contact"
                className="group px-9 py-5 rounded-full bg-white text-black hover:bg-indigo-400 hover:text-white font-mono text-sm font-extrabold tracking-widest uppercase transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-white/10"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
