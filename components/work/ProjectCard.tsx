"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const href = project.liveUrl || `/work/${project.slug}`;
  const isExternal = !!project.liveUrl;

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      data-cursor="VISIT"
      className="group relative block w-full rounded-2xl bg-[#12141C] border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
    >
      {/* Image Container with Hover Scale */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Floating Top Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase">
          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/15">
            {project.number}
          </span>
          <span className="px-3 py-1 rounded-full bg-indigo-950/80 backdrop-blur-md text-indigo-300 border border-indigo-500/30">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300">
              {project.title}
            </h3>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-white group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <p className="mt-3 font-sans text-sm md:text-base text-muted line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] font-semibold tracking-wider text-white/60 bg-white/5 px-2.5 py-1 rounded border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
