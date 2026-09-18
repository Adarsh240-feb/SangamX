"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  magneticStrength?: number;
  dataCursor?: string;
  asChild?: boolean;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  magneticStrength = 0.25,
  dataCursor,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * magneticStrength;
    const distanceY = (e.clientY - centerY) * magneticStrength;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.1 }}
      className="inline-block"
    >
      <div 
        onClick={onClick}
        data-cursor={dataCursor}
        className={className}
      >
        {children}
      </div>
    </motion.div>
  );
}
