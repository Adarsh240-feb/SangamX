import { ProjectCard } from "./ProjectCard";
import { Project } from "@/lib/types";
import { Reveal } from "../ui/Reveal";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
      {projects.map((project, idx) => (
        <Reveal key={project.slug} direction="up" delay={0.08 * (idx + 1)} className="h-full flex w-full">
          <ProjectCard project={project} priority={idx < 2} />
        </Reveal>
      ))}
    </div>
  );
}
