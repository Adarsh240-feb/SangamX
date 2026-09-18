"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  scale?: boolean;
  className?: string;
}

export function Reveal({
  children,
  width = "100%",
  delay = 0.05,
  duration = 0.4,
  direction = "up",
  scale = false,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" } as any);

  const getOffset = () => {
    switch (direction) {
      case "up": return { y: 20, x: 0 };
      case "down": return { y: -20, x: 0 };
      case "left": return { x: 20, y: 0 };
      case "right": return { x: -20, y: 0 };
      case "none": return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: offset.x,
            y: offset.y,
            scale: scale ? 0.95 : 1,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration,
          delay,
          ease: [0.215, 0.61, 0.355, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
