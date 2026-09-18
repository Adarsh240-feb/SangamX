"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

const navLinks = [
  { href: "/work", label: "WORK" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#090A0F]/85 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-2 font-display text-xl md:text-2xl font-black tracking-tighter text-white"
            data-cursor="HOME"
          >
            <span>SANGAM</span>
            <span className="text-indigo-500 group-hover:rotate-12 transition-transform duration-300">X</span>
            <span className="hidden sm:inline-block font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-white/10 text-indigo-300 border border-indigo-500/20 ml-1">
              STUDIO
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs font-bold tracking-widest">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors ${
                    isActive ? "text-indigo-400 font-bold" : "text-white/70 hover:text-white"
                  }`}
                  data-cursor="GO"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <MagneticButton dataCursor="INQUIRE">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs font-bold tracking-wider hover:bg-indigo-400 hover:text-white transition-all duration-300 shadow-lg shadow-white/5"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden relative z-50 p-2 rounded-lg text-white bg-white/5 border border-white/10 hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#090A0F] px-6 py-28 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-6 font-display text-4xl font-extrabold tracking-tight">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 pb-4 text-white hover:text-indigo-400"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-white/40">// 0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col gap-4"
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 rounded-xl bg-indigo-600 text-white font-mono text-sm font-bold tracking-wider flex items-center justify-center gap-2"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <div className="flex justify-between items-center text-xs font-mono text-white/50 pt-4">
                <span>SANGAMX DIGITAL STUDIO</span>
                <span>GLOBAL / REMOTE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
