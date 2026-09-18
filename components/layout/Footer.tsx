"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HoverWatermarkText } from "../ui/HoverWatermarkText";

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }) + " UTC"
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#07080C] text-white border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/10 blur-[140px] rounded-full" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Main Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="font-display text-3xl font-black tracking-tighter text-white">
                SANGAM<span className="text-indigo-500">X</span>
              </Link>
              <p className="mt-4 text-base text-muted max-w-sm leading-relaxed">
                Engineering premium custom websites, web apps, and mobile applications for ambitious brands worldwide.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 font-mono text-xs">
            <h4 className="font-bold tracking-widest text-indigo-400 uppercase mb-6">NAVIGATION</h4>
            <ul className="space-y-3 font-medium text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li>
                <Link href="/#work" className="hover:text-white transition-colors">SELECTED WORK</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">SERVICES & CAPABILITIES</Link>
              </li>
              <li>
                <Link href="/#tech" className="hover:text-white transition-colors">TECH STACK</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">ABOUT SANGAMX</Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-white transition-colors">FEEDBACK FORM</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors text-indigo-400 font-bold">START A PROJECT</Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="md:col-span-4 font-mono text-xs">
            <h4 className="font-bold tracking-widest text-indigo-400 uppercase mb-6">WHAT WE BUILD</h4>
            <ul className="space-y-3 font-medium text-white/70">
              <li className="flex items-center justify-between">
                <span>WEBSITES & WEB APPS</span>
                <span className="text-white/30">01</span>
              </li>
              <li className="flex items-center justify-between">
                <span>MOBILE APPLICATIONS</span>
                <span className="text-white/30">02</span>
              </li>
              <li className="flex items-center justify-between">
                <span>FULL-STACK SAAS PLATFORMS</span>
                <span className="text-white/30">03</span>
              </li>
              <li className="flex items-center justify-between">
                <span>UI/UX & DESIGN SYSTEMS</span>
                <span className="text-white/30">04</span>
              </li>
              <li className="flex items-center justify-between">
                <span>INTERACTIVE EXPERIENCES</span>
                <span className="text-white/30">05</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Big Watermark with Hover Image Reveal */}
        <div className="py-12 border-b border-white/10 overflow-hidden text-center select-none relative group">
          <HoverWatermarkText />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
          <div>
            &copy; {new Date().getFullYear()} SANGAMX. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <span>TWITTER / X</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
