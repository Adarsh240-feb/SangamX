import { SectionHeading } from "../ui/SectionHeading";
import { ServiceItem } from "./ServiceItem";
import { SERVICES } from "@/data/services";
import { Reveal } from "../ui/Reveal";

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-36 bg-[#090A0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="CORE CAPABILITIES"
          title="WHAT WE BUILD"
          description="We do not offer cookie-cutter templates. We craft tailored digital platforms engineered to solve specific business problems."
        />

        <div className="border-t border-white/10">
          {SERVICES.map((service, idx) => (
            <Reveal key={service.id} direction="up" delay={0.08 * (idx + 1)}>
              <ServiceItem service={service} index={idx} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
