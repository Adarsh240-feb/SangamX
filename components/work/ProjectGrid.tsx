import { ProjectCard } from "./ProjectCard";
import { Project } from "@/lib/types";
import { Reveal } from "../ui/Reveal";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const getColSpan = (index: number) => {
    switch (index % 4) {
      case 0: return "lg:col-span-8";
      case 1: return "lg:col-span-4";
      case 2: return "lg:col-span-5";
      case 3: return "lg:col-span-7";
      default: return "lg:col-span-6";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {projects.map((project, idx) => (
        <div key={project.slug} className={`col-span-1 ${getColSpan(idx)} flex`}>
          <Reveal direction="up" delay={0.1 * (idx + 1)} className="w-full h-full flex">
            <ProjectCard project={project} priority={idx < 2} />
          </Reveal>
        </div>
      ))}
    </div>
  );
}
