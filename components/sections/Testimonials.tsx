import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { TESTIMONIALS } from "@/data/testimonials";
import { Reveal } from "../ui/Reveal";

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-36 bg-[#07080C] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="CLIENT ENDORSEMENTS"
          title="WHAT CLIENTS SAY"
          description="Direct feedback from founders, product directors, and CMOs who placed their digital trust in SangamX."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((item, idx) => (
            <Reveal key={item.id} direction="up" delay={0.1 * (idx + 1)} className="h-full flex">
              <div className="relative p-8 rounded-2xl bg-[#12141C] border border-white/10 hover:border-indigo-500/40 transition-colors flex flex-col justify-between h-full">
                <div>
                  <Quote className="w-8 h-8 text-indigo-500/40 mb-6" />
                  <p className="font-sans text-base md:text-lg text-white/90 leading-relaxed font-medium italic">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-white">
                      {item.author}
                    </div>
                    <div className="font-mono text-xs text-indigo-400">
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
