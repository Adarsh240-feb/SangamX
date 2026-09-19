"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Globe } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const href = project.liveUrl || "/contact";
  const isExternal = !!project.liveUrl;
  const [imgError, setImgError] = useState(false);

  // Clean 1280x720 live screenshot
  const liveScreenshotUrl = isExternal
    ? `https://s0.wp.com/mshots/v1/${encodeURIComponent(project.liveUrl || "")}?w=1280&h=720`
    : project.image;

  const displayImage = !imgError ? liveScreenshotUrl : project.image;

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      data-cursor="VISIT"
      className="group relative flex flex-col justify-between w-full h-full rounded-2xl bg-[#12141C] border border-white/10 overflow-hidden hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
    >
      {/* Image Banner (Static 16:9 Aspect Ratio with Subtle Hover Scale) */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A0C14] flex items-center justify-center">
        {!imgError ? (
          <Image
            src={displayImage}
            alt={project.title}
            fill
            priority={priority}
            unoptimized={isExternal}
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImgError(true)}
            className="object-cover object-top w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 via-slate-900 to-black flex flex-col items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-500">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-3 group-hover:border-indigo-500/60 transition-colors">
              <Globe className="w-6 h-6 text-indigo-400" />
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight">{project.title}</span>
            <span className="font-mono text-[10px] text-indigo-300/70 mt-1 uppercase tracking-wider">{project.category}</span>
          </div>
        )}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141C] via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4">
        <div>
          <div className="flex items-center justify-between gap-3 mb-1.5">
            <div className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-wider uppercase">
              <span className="text-indigo-400">{project.number}</span>
              <span className="text-white/30">•</span>
              <span className="text-white/60">{project.category}</span>
            </div>
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/80 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>

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
