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
    case "React":
    case "React.js":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12 text-cyan-400">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 180 180" className="w-12 h-12">
          <circle cx="90" cy="90" r="85" fill="#000000" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.8136V73.6828L137.663 164.845C141.879 162.709 145.839 160.252 149.508 157.52Z" fill="white" />
          <rect x="115" y="54" width="13" height="72" fill="white" />
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-emerald-500">
          <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm-1 14.5v-6l-5-2.8v5.8l5 3zm7-3l-5 2.8v-6l5-2.8v6z"/>
        </svg>
      );
    case "Express.js":
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-neutral-300">
          <text x="2" y="17" fontSize="14" fontWeight="bold" fontFamily="sans-serif">ex</text>
        </svg>
      );
    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-emerald-400">
          <path d="M12 1.5C11.5 2.8 11.2 4.3 11 5.8 9.3 8.3 7 11.5 7 15.5c0 3.3 2.2 6 5 6.5.3.1.7.1 1 0 2.8-.5 5-3.2 5-6.5 0-4-2.3-7.2-4-9.7-.2-1.5-.5-3-1-4.3zm-.1 18.2V8.1c.3.5.7 1 1 1.5.8 1.4 2.1 3.5 2.1 5.9 0 2.3-1.4 4.1-3.1 4.2z"/>
        </svg>
      );
    case "JavaScript":
      return (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect width="100" height="100" rx="16" fill="#F7DF1E" />
          <path d="M67.5 76c3.5 0 6.5-2 6.5-6.5 0-4.5-3.5-6.5-9-8.5l-2.5-1c-3-1.2-4.5-2.2-4.5-4.2 0-2 1.8-3.3 4.2-3.3 2.8 0 4.5 1.2 5.8 3.5l5.2-3.2c-2.5-4.2-6.2-6-11-6-6.2 0-10.5 3.8-10.5 9.2 0 5 3.5 7.2 8.5 9.2l2.5 1c3.8 1.5 5.5 2.8 5.5 5 0 2.2-2.2 3.8-5.2 3.8-4 0-6.8-2.5-8.2-5.5l-5.2 3.5c2.5 5.5 7.5 8 12.9 8zm-27.5-.5c3.8 0 6.8-2 6.8-9V44H40v22.5c0 3.2-1.5 4.5-3.8 4.5-2 0-3.5-1-4.5-2.8l-5 3.5c2.5 4.5 6.5 7.8 13.3 7.8z" fill="#000000"/>
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect width="100" height="100" rx="16" fill="#3178C6" />
          <path d="M57 68.5c2.3 1.5 5.5 2.5 9 2.5 6 0 9-3 9-7.5 0-11-16.5-6.5-16.5-16.5 0-5.5 4.5-9.5 12-9.5 4 0 7.5 1 9.5 2.5l-2.5 5.5c-2-1.2-4.5-2-7.5-2-4 0-6.5 2-6.5 4.5 0 10.5 16.5 6 16.5 16.5 0 6.5-5 10.5-13.5 10.5-4.5 0-8.5-1.2-11-2.8L57 68.5zM29 44h22v6H40v25h-6V50H29v-6z" fill="#FFFFFF"/>
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-cyan-400 fill-current">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      );
    case "HTML5":
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625h11.238l.42-4.5H3.978l1.11 12.375h9.814l-.42 4.542-4.512 1.218-4.51-1.218-.291-3.261H2.527l.534 6.09 8.909 2.458 8.899-2.458 1.176-13.141H8.531z" fill="#E34F26"/>
        </svg>
      );
    case "CSS3":
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625h11.238l.42-4.5H3.978l1.11 12.375h9.814l-.42 4.542-4.512 1.218-4.51-1.218-.291-3.261H2.527l.534 6.09 8.909 2.458 8.899-2.458 1.176-13.141H8.531z" fill="#1572B6"/>
        </svg>
      );
    case "Git":
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-orange-600">
          <path d="M2.6 10.59L11.41 1.78c.78-.78 2.05-.78 2.83 0l8.15 8.15c.78.78.78 2.05 0 2.83l-8.15 8.15c-.78.78-2.05.78-2.83 0L2.6 13.42c-.78-.78-.78-2.05 0-2.83zM14.5 13.5c-.5 0-.9-.2-.9-.6 0-.2.1-.4.2-.5l1.6-1.6c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-1.4 1.4c-.2.1-.4.2-.6.2z"/>
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-white">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      );
    case "Firebase":
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M3.89 15.67L5.8 3.52a.8.8 0 0 1 1.5-.22l2.36 4.41z" fill="#FFA000"/>
          <path d="M12.91 8.87l-2.02-3.85a.8.8 0 0 0-1.44 0L3.89 15.67l7.53 4.23a2.91 2.91 0 0 0 2.98 0l5.7-3.21z" fill="#FFCA28"/>
          <path d="M13.5 19.55l6.6-3.71a.8.8 0 0 0 .39-.94L18 8.1l-4.5 11.45z" fill="#F44336"/>
        </svg>
      );
    case "Framer Motion":
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-indigo-400">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
        </svg>
      );
    case "GSAP":
      return (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <circle cx="50" cy="50" r="45" fill="#88CE02"/>
          <path d="M30 65L55 25L45 50L70 35L45 75L55 50Z" fill="#000000"/>
        </svg>
      );
    case "Three.js":
      return (
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-none stroke-current text-white stroke-2">
          <path d="M50 15 L85 35 L85 75 L50 95 L15 75 L15 35 Z"/>
          <path d="M50 15 L50 95"/>
          <path d="M15 35 L85 75"/>
          <path d="M85 35 L15 75"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-indigo-400">
          <circle cx="12" cy="12" r="10" />
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
      className="relative w-full aspect-square rounded-2xl cursor-pointer select-none [perspective:1000px] group"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="w-full h-full relative [transform-style:preserve-3d]"
      >
        {/* FRONT SIDE: Clean centered logo + Tech Name (Matches User Reference Image 2) */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#121622] border border-white/10 p-4 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-xl group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/10 transition-colors">
          <div className="flex items-center justify-center mb-3">
            <TechIcon name={tech.name} />
          </div>
          <h3 className="font-display text-xs sm:text-sm font-bold text-white/90 group-hover:text-indigo-300 transition-colors">
            {tech.name}
          </h3>
        </div>

        {/* BACK SIDE (180 deg): Description & details on flip only */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-indigo-950 via-[#121622] to-black border border-indigo-500/50 p-4 flex flex-col justify-between text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl">
          <div className="flex flex-col items-center justify-center h-full space-y-2">
            <h4 className="font-display text-xs font-extrabold text-indigo-300 uppercase tracking-wider">
              {tech.name}
            </h4>
            <p className="font-sans text-[11px] text-white/80 leading-relaxed line-clamp-3">
              {tech.description}
            </p>
            <span className="inline-block mt-1 font-mono text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">
              WEB & APP READY
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
