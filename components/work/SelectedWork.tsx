import { SectionHeading } from "../ui/SectionHeading";
import { ProjectGrid } from "./ProjectGrid";
import { PROJECTS } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="relative py-24 md:py-36 bg-[#090A0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeading
            title="SELECTED WORK"
            description="Digital experiences designed and engineered for real-world ideas, startups, and ambitious businesses."
            className="mb-0"
          />
        </div>

        <ProjectGrid projects={PROJECTS} />
      </div>
    </section>
  );
}
