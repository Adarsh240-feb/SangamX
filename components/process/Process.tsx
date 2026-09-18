import { SectionHeading } from "../ui/SectionHeading";
import { ProcessStep } from "./ProcessStep";
import { PROCESS_STEPS } from "@/data/process";
import { Reveal } from "../ui/Reveal";

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-36 bg-[#090A0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="OUR METHODOLOGY"
          title="HOW WE EXECUTE"
          description="A transparent, 4-phase engineering process designed to keep projects on schedule, within budget, and at maximum quality."
        />

        {/* 4 Step Grid Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PROCESS_STEPS.map((step, idx) => (
            <Reveal key={step.number} direction="up" delay={0.1 * (idx + 1)} className="h-full flex">
              <ProcessStep step={step} isLast={idx === PROCESS_STEPS.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
