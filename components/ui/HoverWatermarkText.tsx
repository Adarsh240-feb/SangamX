"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface HoverWatermarkTextProps {
  customImageSrc?: string;
}

export function HoverWatermarkText({ customImageSrc }: HoverWatermarkTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // User's custom image in /public/sangam.jpg or fallback URL
  const imageSrc = customImageSrc || "/sangam.jpg";
  const fallbackImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="REVEAL"
      className="relative inline-block w-full py-8 cursor-pointer select-none group overflow-hidden"
    >
      {/* Base Layer: Dark Subtle Watermark Text (always present for un-hovered letters) */}
      <span className="font-display font-black text-[13vw] leading-none tracking-tighter text-white/[0.05] uppercase block">
        SANGAMX
      </span>

      {/* Spotlight Image Reveal Layer: Only reveals image inside a 150px circle around the mouse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center py-8"
        style={{
          WebkitMaskImage: `radial-gradient(circle 140px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)`,
          maskImage: `radial-gradient(circle 140px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)`,
        }}
      >
        <span
          className="font-display font-black text-[13vw] leading-none tracking-tighter uppercase text-transparent bg-clip-text"
          style={{
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            backgroundImage: `url(${imageSrc}), url(${fallbackImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          SANGAMX
        </span>
      </motion.div>

      {/* Subtle Bottom Accent Tag */}
      <div 
        className={`absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold tracking-widest text-indigo-400 uppercase transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        EXPLORE SANGAM VISUAL
      </div>
    </div>
  );
}
