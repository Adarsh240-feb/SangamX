"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const categories = ["ALL", "B2B Marketplace", "AI Spatial Computing Suite", "Luxury E-Commerce Platform", "Developer Platform & API Studio", "Architecture & Spatial Design"];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects = selectedCategory === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-24 bg-[#090A0F] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionHeading
          tag="CASE STUDIES CATALOG"
          title="OUR PORTFOLIO OF WORK"
          description="Explore our complete archive of client digital experiences, web apps, marketplaces, and e-commerce platforms."
        />

        {/* Filter Pills */}
        <Reveal direction="up" delay={0.2} className="mb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs select-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 uppercase tracking-wider ${
                    active
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30"
                      : "bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <ProjectGrid projects={filteredProjects} />

      </div>
    </div>
  );
}
