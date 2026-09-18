"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Globe, Layers, ShieldCheck, Zap } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-xl lg:max-w-2xl mx-auto flex items-center justify-center p-2 sm:p-4">
      {/* Outer Perspective Canvas Container */}
      <div className="relative w-full rounded-2xl border border-white/15 bg-[#12141C]/80 backdrop-blur-2xl p-5 sm:p-7 shadow-2xl overflow-hidden glow-border">
        
        {/* Background Ambient Glows */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-black/90 opacity-90" 
        />
        <div 
          aria-hidden="true" 
          className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full animate-float" 
        />
        <div 
          aria-hidden="true" 
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/15 blur-3xl rounded-full animate-float [animation-delay:2s]" 
        />

        {/* Card Header Bar */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
            <span className="ml-2 font-mono text-[10px] text-white/60 tracking-wider uppercase font-bold">
              SANGAMX CORE SYSTEM · NEXT.JS 15
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-white/80 font-semibold bg-white/10 px-2.5 py-0.5 rounded border border-white/15">
            <span>STUDIO SUITE</span>
          </div>
        </div>

        {/* Main Content Grid inside Visual */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-4 mt-5">
          
          {/* Main Studio Telemetry Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="sm:col-span-7 bg-[#090A0F]/90 border border-white/10 rounded-xl p-4 shadow-xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-400" />
                <span className="font-mono text-xs font-bold text-white">EDGE DEPLOYMENT</span>
              </div>
              <span className="font-mono text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                ACTIVE
              </span>
            </div>

            {/* Performance Gauges */}
            <div className="space-y-3 pt-1">
              <div>
                <div className="flex justify-between font-mono text-[10px] text-white/60 mb-1">
                  <span>LIGHTHOUSE PERFORMANCE</span>
                  <span className="text-emerald-400 font-bold">99 / 100</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "99%" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-[10px] text-white/60 mb-1">
                  <span>PAGE LOAD SPEED</span>
                  <span className="text-cyan-400 font-bold">&lt; 50ms</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "95%" }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between font-mono text-[11px] text-white/80">
              <span className="text-indigo-300 font-semibold">CUSTOM CODEBASE</span>
              <span className="text-emerald-400 font-bold">100% PRODUCTION</span>
            </div>
          </motion.div>

          {/* Right Mini Metric Stack */}
          <div className="sm:col-span-5 flex flex-col gap-3 justify-between">
            
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[#090A0F]/90 border border-white/10 rounded-xl p-3.5 shadow-xl flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-white">GLOBAL CLIENTS</div>
                <div className="font-mono text-[10px] text-white/50">US · EU · INDIA</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="bg-[#090A0F]/90 border border-indigo-500/30 rounded-xl p-3.5 shadow-xl flex items-center gap-3 bg-gradient-to-r from-indigo-950/40 to-transparent"
            >
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-white">SWISS GRID UI</div>
                <div className="font-mono text-[10px] text-white/50">ASYMMETRIC MASONRY</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-[#090A0F]/90 border border-emerald-500/30 rounded-xl p-3.5 shadow-xl flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-white">SEO & CONVERSION</div>
                <div className="font-mono text-[10px] text-emerald-400 font-semibold">OPTIMIZED FOR LEADS</div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Floating Bottom Status Pill */}
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs"
        >
          <div className="flex items-center gap-2 text-white/70">
            <Cpu className="w-4 h-4 text-indigo-400" />
            <span className="font-semibold text-[11px]">HIGH-CONVERTING DIGITAL STUDIO</span>
          </div>
          <span className="text-indigo-400 font-bold text-[11px]">SANGAMX</span>
        </motion.div>

      </div>
    </div>
  );
}
