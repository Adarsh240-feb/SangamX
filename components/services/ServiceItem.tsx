"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Service } from "@/lib/types";

interface ServiceItemProps {
  service: Service;
  index: number;
}

export function ServiceItem({ service, index }: ServiceItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="group relative border-b border-white/10 transition-colors duration-300"
    >
      {/* Background Highlight */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-indigo-950/30 via-purple-950/20 to-transparent transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`} 
      />

      <div className="relative z-10 py-8 md:py-10 px-4 md:px-6 cursor-pointer">
        {/* Main Header Row */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-6 md:gap-12">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white group-hover:text-indigo-300 transition-colors uppercase">
                {service.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-white/50 hidden md:block">
                {service.subtitle}
              </p>
            </div>
          </div>

          <div className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 ${
            isOpen ? "bg-indigo-600 border-indigo-500 rotate-45" : "bg-white/5 group-hover:border-white/40"
          }`}>
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        {/* Expandable Accordion Body */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-6 md:pt-8 md:pl-20 grid grid-cols-1 md:grid-cols-12 gap-6 text-sm text-muted">
                {/* Description Column */}
                <div className="md:col-span-6 space-y-4">
                  <p className="text-base text-white/80 leading-relaxed font-normal">
                    {service.description}
                  </p>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] font-bold tracking-wider text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features / Deliverables Column */}
                <div className="md:col-span-6 font-mono text-xs space-y-2">
                  <div className="font-bold text-white uppercase tracking-wider mb-2">
                    WHAT YOU GET:
                  </div>
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/70">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
