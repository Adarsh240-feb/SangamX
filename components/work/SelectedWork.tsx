import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectGrid } from "./ProjectGrid";
import { PROJECTS } from "@/data/projects";
import { Reveal } from "../ui/Reveal";
import { MagneticButton } from "../ui/MagneticButton";

export function SelectedWork() {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section className="relative py-24 md:py-36 bg-[#090A0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="FEATURED CASE STUDIES"
            title="SELECTED WORK"
            description="Digital experiences designed and engineered for real-world ideas, startups, and ambitious businesses."
            className="mb-0"
          />

          <Reveal direction="left" delay={0.2}>
            <MagneticButton dataCursor="ALL">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-indigo-400 hover:text-white uppercase transition-colors py-2 border-b border-indigo-500/40 hover:border-white"
              >
                <span>VIEW ALL CASE STUDIES</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </Reveal>
        </div>

        <ProjectGrid projects={featuredProjects} />
      </div>
    </section>
  );
}
