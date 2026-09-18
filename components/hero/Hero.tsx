"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { MagneticButton } from "../ui/MagneticButton";

// Framer Motion Staggered Variants for Motion Assembly
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemUpVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 18,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen pt-24 md:pt-32 pb-16 flex flex-col justify-center overflow-hidden">
      <HeroBackground />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Editorial Centered Motion Assembly Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8"
        >
          {/* Main Headline */}
          <motion.div variants={itemUpVariants} className="relative w-full">
            <h1 className="font-extrabold tracking-tight text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[1.05]">
              WE BUILD WEBSITES & <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-200 to-indigo-300 italic font-serif lowercase font-normal">
                applications
              </span> <br />
              THAT TRANSFORM BRANDS.
            </h1>
          </motion.div>

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
                href="/work"
                className="px-8 py-4 rounded-full bg-white text-black font-mono text-xs font-extrabold tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center gap-2 shadow-xl shadow-white/10"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>

            <MagneticButton dataCursor="SERVICES">
              <Link
                href="/services"
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
