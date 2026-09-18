import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "About Studio — SangamX",
  description: "Learn about SangamX: a boutique freelance web studio combining strategy, Swiss grid design, and Next.js engineering.",
};

export default function AboutPage() {
  const principles = [
    {
      num: "01",
      title: "ZERO AGENT OVERHEAD",
      desc: "You talk directly to the engineers and designers building your site. No non-technical account managers or lost-in-translation requirements."
    },
    {
      num: "02",
      title: "PERFORMANCE AS A FEATURE",
      desc: "Sub-50ms page speeds and sub-second Lighthouse scores are non-negotiable standards. Beautiful animation must never compromise load time."
    },
    {
      num: "03",
      title: "100% PRODUCTION CODE",
      desc: "We write clean, modular Next.js App Router code with strict TypeScript schemas that your internal team can easily maintain or expand."
    },
    {
      num: "04",
      title: "LONG-TERM PARTNERSHIP",
      desc: "We don't abandon projects post-launch. We provide ongoing sprints, optimization, and feature enhancements to scale with your business."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#090A0F] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          tag="STUDIO PHILOSOPHY"
          title="WE ARE SANGAMX."
          description="A modern boutique freelance web studio crafting digital experiences for ambitious brands."
        />

        {/* Big Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-16">
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-muted leading-relaxed font-normal">
            <Reveal direction="up" delay={0.1}>
              <p className="text-white text-xl md:text-2xl font-semibold leading-snug">
                SangamX was built to fill the gap between cheap generic templates and over-priced legacy digital agencies.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p>
                We believe the best digital work happens when senior design craftsmanship meets deep frontend engineering. By keeping our studio lean and focused, we deliver agency-grade websites with unmatched speed and agility.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p>
                Whether you need a high-converting marketing engine, an interactive spatial canvas, or a full-stack SaaS web platform, we bring high visual standards and production engineering to every line of code.
              </p>
            </Reveal>
          </div>

          {/* Quick Info Box */}
          <div className="lg:col-span-5">
            <Reveal direction="left" delay={0.2}>
              <div className="p-8 rounded-2xl bg-[#12141C] border border-white/10 space-y-6">
                <div className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                  STUDIO AT A GLANCE
                </div>
                <div className="space-y-4 font-mono text-xs text-white/80">
                  <div className="flex justify-between pb-3 border-b border-white/10">
                    <span className="text-white/40">LOCATION</span>
                    <span className="font-bold text-white">GLOBAL / REMOTE</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-white/10">
                    <span className="text-white/40">CORE STACK</span>
                    <span className="font-bold text-white">NEXT.JS / TS / TAILWIND</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-white/10">
                    <span className="text-white/40">SPECIALTY</span>
                    <span className="font-bold text-white">PREMIUM CLIENT SITES</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">AVAILABILITY</span>
                    <span className="font-bold text-emerald-400">OPEN FOR NEW INQUIRIES</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="my-24">
          <SectionHeading
            tag="HOW WE WORK"
            title="OUR OPERATING PRINCIPLES"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, idx) => (
              <Reveal key={p.title} direction="up" delay={0.1 * (idx + 1)}>
                <div className="p-8 rounded-2xl bg-[#12141C] border border-white/10 hover:border-indigo-500/40 transition-colors h-full">
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>

      <CTA />
    </div>
  );
}
