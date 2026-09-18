import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { MagneticButton } from "../ui/MagneticButton";

export function AboutSection() {
  const pillars = [
    { title: "DESIGN", desc: "Swiss grid precision, bespoke typography, and editorial visual direction." },
    { title: "ENGINEERING", desc: "Next.js App Router, TypeScript, sub-50ms performance, and strict code standards." },
    { title: "STRATEGY", desc: "Conversion psychology, user intent mapping, and measurable business growth." },
    { title: "CREATIVITY", desc: "Subtle motion graphics, interactive canvas elements, and tactile UI details." },
  ];

  return (
    <section className="relative py-24 md:py-36 bg-[#090A0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6">
            <SectionHeading
              tag="THE STUDIO"
              title="SMALL TEAM. BIG DIGITAL EXPERIENCES."
              className="mb-6"
            />

            <Reveal direction="up" delay={0.2}>
              <p className="text-base md:text-lg text-muted leading-relaxed mb-6 font-normal">
                SangamX operates as an agile, high-caliber freelance web studio. Unlike traditional bloated agencies with excessive overhead and account managers, you work directly with elite frontend engineers and UI designers.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed mb-8 font-normal">
                We take on a selective number of client partnerships per quarter to ensure uncompromised code quality, hyper-responsive communication, and pixel-perfect execution.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <MagneticButton dataCursor="ABOUT">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-mono text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  <span>LEARN MORE ABOUT SANGAMX</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
            </Reveal>
          </div>

          {/* Right 4 Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.title} direction="up" delay={0.1 * (idx + 1)}>
                <div className="p-6 rounded-2xl bg-[#12141C] border border-white/10 hover:border-indigo-500/40 transition-colors h-full flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[10px] text-indigo-400 font-bold tracking-widest mb-2">
                      PILLAR 0{idx + 1}
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
