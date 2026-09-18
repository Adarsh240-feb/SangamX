"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { HeroVisual } from "./HeroVisual";
import { Reveal } from "../ui/Reveal";
import { MagneticButton } from "../ui/MagneticButton";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-28 md:pt-36 pb-16 flex flex-col justify-center overflow-hidden">
      <HeroBackground />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Badge */}
            <Reveal direction="up" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 font-mono text-xs font-semibold text-white tracking-wider uppercase mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>FREELANCE DIGITAL STUDIO · SANGAMX</span>
              </div>
            </Reveal>

            {/* Oversized Headline */}
            <Reveal direction="up" delay={0.1}>
              <h1 className="display-title font-extrabold tracking-tighter text-white">
                WE BUILD <br />
                <span className="gradient-accent-text">DIGITAL EXPERIENCES</span> <br />
                FOR AMBITIOUS BRANDS.
              </h1>
            </Reveal>

            {/* Supporting Copy */}
            <Reveal direction="up" delay={0.15}>
              <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-xl font-normal">
                Strategy, bespoke design, and modern frontend engineering for websites, web applications, and digital products that help forward-thinking businesses stand out.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal direction="up" delay={0.2}>
              <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton dataCursor="EXPLORE">
                  <Link
                    href="/work"
                    className="group px-7 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-3 shadow-xl shadow-indigo-600/30"
                  >
                    <span>VIEW OUR WORK</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </MagneticButton>

                <MagneticButton dataCursor="TALK">
                  <Link
                    href="/contact"
                    className="px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300"
                  >
                    <span>START A PROJECT</span>
                  </Link>
                </MagneticButton>
              </div>
            </Reveal>

            {/* Micro Stats Bar */}
            <Reveal direction="up" delay={0.25}>
              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 font-mono text-xs">
                <div>
                  <div className="text-white font-bold text-base md:text-lg">100%</div>
                  <div className="text-white/40">CUSTOM CODE</div>
                </div>
                <div>
                  <div className="text-white font-bold text-base md:text-lg">SUB-50ms</div>
                  <div className="text-white/40">PAGE SPEEDS</div>
                </div>
                <div>
                  <div className="text-white font-bold text-base md:text-lg">GLOBAL</div>
                  <div className="text-white/40">REMOTE STUDIO</div>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Reveal direction="left" delay={0.15} width="100%">
              <HeroVisual />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
