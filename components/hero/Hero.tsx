"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { MagneticButton } from "../ui/MagneticButton";

// Framer Motion Staggered Container for 3D Word Assembly
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

// 3D "Thrown in Perspective" Spring Variant for each word
const word3DVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 90,
    z: -400,
    rotateX: -70,
    rotateY: 25,
    rotateZ: -10,
    scale: 0.4,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    z: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 14,
      mass: 0.8,
    },
  },
};

const itemUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
      delay: 0.8,
    },
  },
};

export function Hero() {
  const line1 = ["WE", "BUILD", "WEBSITES", "&"];
  const line3 = ["THAT", "TRANSFORM", "BRANDS."];

  return (
    <section className="relative min-h-[92vh] md:min-h-screen pt-24 md:pt-32 pb-16 flex flex-col justify-center overflow-hidden">
      <HeroBackground />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Editorial Centered Motion Assembly Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8"
        >
          {/* Main 3D Thrown Headline Container */}
          <div className="relative w-full [perspective:1200px] [transform-style:preserve-3d]">
            <h1 className="font-extrabold tracking-tight text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[1.05] select-none">
              {/* Line 1 Words */}
              <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-5 md:gap-x-6 [transform-style:preserve-3d]">
                {line1.map((word, idx) => (
                  <motion.span
                    key={`line1-${idx}`}
                    variants={word3DVariants}
                    className="inline-block origin-bottom transition-colors hover:text-indigo-400 [transform-style:preserve-3d]"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* Line 2 Word (Applications - Italic Gradient) */}
              <div className="my-1 sm:my-2 [transform-style:preserve-3d]">
                <motion.span
                  variants={word3DVariants}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-200 to-indigo-300 italic font-serif lowercase font-normal drop-shadow-[0_10px_20px_rgba(249,115,22,0.2)] [transform-style:preserve-3d]"
                >
                  applications
                </motion.span>
              </div>

              {/* Line 3 Words */}
              <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-5 md:gap-x-6 [transform-style:preserve-3d]">
                {line3.map((word, idx) => (
                  <motion.span
                    key={`line3-${idx}`}
                    variants={word3DVariants}
                    className="inline-block origin-bottom transition-colors hover:text-orange-400 [transform-style:preserve-3d]"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </h1>
          </div>

          {/* Subtitle */}
          <motion.div variants={itemUpVariants}>
            <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-2xl font-normal">
              Handcrafted custom websites, full-stack web applications, and mobile apps engineered to deliver seamless user experiences and high performance.
            </p>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div variants={itemUpVariants} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <MagneticButton dataCursor="WORK">
              <Link
                href="#work"
                className="px-8 py-4 rounded-full bg-white text-black font-mono text-xs font-extrabold tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center gap-2 shadow-xl shadow-white/10"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>

            <MagneticButton dataCursor="SERVICES">
              <Link
                href="#services"
                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-mono text-xs font-extrabold tracking-widest uppercase transition-colors flex items-center gap-2 backdrop-blur-md"
              >
                <span>OUR SERVICES</span>
                <ArrowUpRight className="w-4 h-4 text-orange-400" />
              </Link>
            </MagneticButton>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
