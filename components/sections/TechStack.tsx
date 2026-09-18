"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { TECH_STACK } from "@/data/techStack";
import { TechFlipCard } from "./TechFlipCard";
import { Reveal } from "../ui/Reveal";

export function TechStack() {
  return (
    <section id="tech" className="relative py-24 md:py-36 bg-[#07080C] border-y border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="HERE'S WHAT WE USE"
          description="Hover or tap any card to explore how we engineer high-performance web applications and mobile apps."
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
          {TECH_STACK.map((tech, idx) => (
            <Reveal key={tech.name} direction="up" delay={0.03 * (idx + 1)}>
              <TechFlipCard tech={tech} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
