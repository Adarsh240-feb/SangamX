import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { MagneticButton } from "../ui/MagneticButton";

export function AboutSection() {
  const pillars = [
    { title: "DESIGN", desc: "Modern visual aesthetics, custom layouts, and clean typography tailored to your brand." },
    { title: "PERFORMANCE", desc: "Ultra-fast website loading, smooth mobile experience, and reliable security." },
    { title: "STRATEGY", desc: "Smart user flows and clear messaging designed to convert visitors into customers." },
    { title: "EXPERIENCE", desc: "Engaging interactive details and motion graphics that leave a lasting impression." },
  ];

  return (
    <section id="about" className="relative py-24 md:py-36 bg-[#090A0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6">
            <SectionHeading
              tag="ABOUT US"
              title="DEDICATED DIGITAL STUDIO FOR YOUR BRAND."
              className="mb-6"
            />

            <Reveal direction="up" delay={0.2}>
              <p className="text-base md:text-lg text-muted leading-relaxed mb-6 font-normal">
                SangamX is a dedicated digital studio engineering high-performance websites, custom web applications, and mobile apps. You work directly with senior designers and developers committed to turning your vision into a scalable product.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed mb-8 font-normal">
                We take on a limited number of clients per quarter to ensure personal attention, fast communication, and top-tier quality for every project.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <MagneticButton dataCursor="ABOUT">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-mono text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  <span>START A PROJECT WITH US</span>
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
