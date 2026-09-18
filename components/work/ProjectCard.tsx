"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const href = project.liveUrl || "/contact";
  const isExternal = !!project.liveUrl;

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      data-cursor="VISIT"
      className="group relative flex flex-col justify-between w-full rounded-2xl bg-[#12141C] border border-white/10 overflow-hidden hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
    >
      {/* Image Banner (Compact 16:9 Aspect Ratio) */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141C] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Compact Badges */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2 font-mono text-[9px] font-bold tracking-wider uppercase">
          <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white/90 border border-white/15">
            {project.number}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-indigo-950/80 backdrop-blur-md text-indigo-300 border border-indigo-500/30">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4">
        <div>
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/80 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <p className="mt-2 font-sans text-xs sm:text-sm text-white/60 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Compact Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[9px] font-semibold tracking-wider text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="font-mono text-[9px] font-semibold text-white/40 bg-white/5 px-1.5 py-0.5 rounded">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
