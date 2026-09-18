"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TechItem } from "@/lib/types";

interface TechFlipCardProps {
  tech: TechItem;
}

// Vector SVG Brand Icons map
function TechIcon({ name }: { name: string }) {
  switch (name) {
    case "Next.js":
      return (
        <svg viewBox="0 0 180 180" className="w-10 h-10 fill-current text-white">
          <mask id="next-mask">
            <rect width="180" height="180" fill="white" />
            <circle cx="90" cy="90" r="85" fill="black" />
          </mask>
          <circle cx="90" cy="90" r="85" fill="currentColor" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.8136V73.6828L137.663 164.845C141.879 162.709 145.839 160.252 149.508 157.52Z" fill="white" />
          <rect x="115" y="54" width="13" height="72" fill="white" />
        </svg>
      );
    case "React":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10 text-cyan-400">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect width="100" height="100" rx="20" fill="#3178C6" />
          <path d="M57 68.5c2.3 1.5 5.5 2.5 9 2.5 6 0 9-3 9-7.5 0-11-16.5-6.5-16.5-16.5 0-5.5 4.5-9.5 12-9.5 4 0 7.5 1 9.5 2.5l-2.5 5.5c-2-1.2-4.5-2-7.5-2-4 0-6.5 2-6.5 4.5 0 10.5 16.5 6 16.5 16.5 0 6.5-5 10.5-13.5 10.5-4.5 0-8.5-1.2-11-2.8L57 68.5zM29 44h22v6H40v25h-6V50H29v-6z" fill="#FFFFFF"/>
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-cyan-400 fill-current">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      );
    case "Framer Motion":
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-indigo-400">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
        </svg>
      );
    case "GSAP":
      return (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <circle cx="50" cy="50" r="45" fill="#88CE02"/>
          <path d="M30 65L55 25L45 50L70 35L45 75L55 50Z" fill="#000000"/>
        </svg>
      );
    case "Three.js":
      return (
        <svg viewBox="0 0 100 100" className="w-10 h-10 fill-none stroke-current text-white stroke-2">
          <path d="M50 15 L85 35 L85 75 L50 95 L15 75 L15 35 Z"/>
          <path d="M50 15 L50 95"/>
          <path d="M15 35 L85 75"/>
          <path d="M85 35 L15 75"/>
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-emerald-500">
          <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm-1 14.5v-6l-5-2.8v5.8l5 3zm7-3l-5 2.8v-6l5-2.8v6z"/>
        </svg>
      );
    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-emerald-400">
          <path d="M12 1.5C11.5 2.8 11.2 4.3 11 5.8 9.3 8.3 7 11.5 7 15.5c0 3.3 2.2 6 5 6.5.3.1.7.1 1 0 2.8-.5 5-3.2 5-6.5 0-4-2.3-7.2-4-9.7-.2-1.5-.5-3-1-4.3zm-.1 18.2V8.1c.3.5.7 1 1 1.5.8 1.4 2.1 3.5 2.1 5.9 0 2.3-1.4 4.1-3.1 4.2z"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-amber-500">
          <path d="M12 2L1 21h22L12 2zm0 3.8L20 19H4l8-13.2zM11 10h2v4h-2zm0 6h2v2h-2z"/>
        </svg>
      );
  }
}

export function TechFlipCard({ tech }: TechFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className="relative w-full aspect-[4/3] rounded-2xl cursor-pointer select-none [perspective:1000px] group"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="w-full h-full relative [transform-style:preserve-3d]"
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#12141C] border border-white/10 p-5 flex flex-col justify-between [backface-visibility:hidden] shadow-xl group-hover:border-indigo-500/50 transition-colors">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] font-bold text-indigo-400 tracking-widest uppercase bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              {tech.category}
            </span>
            <span className="font-mono text-[9px] text-white/30 uppercase">FLIP &gt;</span>
          </div>

          <div className="flex items-center gap-3 my-2">
            <div className="shrink-0 p-1">
              <TechIcon name={tech.name} />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                {tech.name}
              </h3>
            </div>
          </div>

          <p className="font-sans text-[11px] text-muted line-clamp-2 leading-relaxed">
            {tech.description}
          </p>
        </div>

        {/* BACK SIDE (180 deg) */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-indigo-950 via-[#12141C] to-black border border-indigo-500/50 p-5 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
              <span className="font-mono text-[9px] font-bold text-emerald-400 uppercase">
                PRODUCTION READY
              </span>
              <span className="font-mono text-[9px] text-indigo-300 font-bold">100%</span>
            </div>
            <h4 className="font-display text-sm font-bold text-white mb-1">
              {tech.name} Capabilities
            </h4>
            <p className="font-sans text-[11px] text-white/80 leading-snug">
              {tech.description}
            </p>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[9px] text-indigo-300 font-semibold">
            <span>SANGAMX APPROVED</span>
            <span className="text-white">STUDIO STACK</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
