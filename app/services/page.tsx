import { Services } from "@/components/services/Services";
import { Process } from "@/components/process/Process";
import { TechStack } from "@/components/sections/TechStack";
import { CTA } from "@/components/sections/CTA";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Services & Capabilities — SangamX Studio",
  description: "Explore our capabilities in Next.js web development, full-stack web applications, headless e-commerce, UI/UX design systems, and interactive motion experiences.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 bg-[#090A0F] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <SectionHeading
          tag="STUDIO CAPABILITIES"
          title="END-TO-END DIGITAL ENGINEERING"
          description="We work with ambitious clients to design, architect, and deploy high-performance web products that set industry standards."
        />
      </div>

      <Services />
      <Process />
      <TechStack />
      <CTA />
    </div>
  );
}
