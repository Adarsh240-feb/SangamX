"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { TECH_STACK } from "@/data/techStack";
import { TechFlipCard } from "./TechFlipCard";
import { Reveal } from "../ui/Reveal";

export function TechStack() {
  return (
    <section className="relative py-24 md:py-36 bg-[#07080C] border-y border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="ENGINEERING STACK"
          title="BUILT WITH MODERN TECHNOLOGY"
          description="Hover over any technology card below to inspect our production architecture, performance metrics, and implementation specs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {TECH_STACK.map((tech, idx) => (
            <Reveal key={tech.name} direction="up" delay={0.05 * (idx + 1)}>
              <TechFlipCard tech={tech} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
