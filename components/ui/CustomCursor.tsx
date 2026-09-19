"use client";

import { useEffect, useRef, useCallback } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);
  const cursorText = useRef("");
  const textRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);
  const isVisible = useRef(false);

  const animate = useCallback(() => {
    // Lerp for smooth following
    const dotSpeed = 0.25;
    const ringSpeed = 0.12;

    dotPos.current.x += (mousePos.current.x - dotPos.current.x) * dotSpeed;
    dotPos.current.y += (mousePos.current.y - dotPos.current.y) * dotSpeed;
    ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringSpeed;
    ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringSpeed;

    const hovered = isHovered.current;
    const dotSize = hovered ? 72 : 12;
    const dotOffset = dotSize / 2;

    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${dotPos.current.x - dotOffset}px, ${dotPos.current.y - dotOffset}px, 0)`;
      dotRef.current.style.width = `${dotSize}px`;
      dotRef.current.style.height = `${dotSize}px`;
      dotRef.current.style.opacity = isVisible.current ? "1" : "0";
    }

    if (ringRef.current) {
      const ringScale = hovered ? 1.6 : 1;
      const ringOpacity = isVisible.current ? (hovered ? 0 : 0.6) : 0;
      ringRef.current.style.transform = `translate3d(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px, 0) scale(${ringScale})`;
      ringRef.current.style.opacity = `${ringOpacity}`;
    }

    if (textRef.current) {
      textRef.current.style.opacity = hovered && cursorText.current ? "1" : "0";
      if (hovered && cursorText.current) {
        textRef.current.textContent = cursorText.current;
      }
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Check if desktop / pointer device
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 1024;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasTouch || isSmallScreen || prefersReducedMotion) {
      // Hide cursor elements on mobile
      if (dotRef.current) dotRef.current.style.display = "none";
      if (ringRef.current) ringRef.current.style.display = "none";
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisible.current) {
        isVisible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "0.6";
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        isHovered.current = true;
        cursorText.current = cursorTarget.getAttribute("data-cursor") || "";
      } else {
        isHovered.current = false;
        cursorText.current = "";
      }
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "0.6";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-white mix-blend-difference"
        style={{
          width: 12,
          height: 12,
          opacity: 0,
          willChange: "transform",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      >
        <div
          ref={textRef}
          className="flex h-full w-full items-center justify-center font-mono text-[10px] font-bold tracking-wider text-black uppercase"
          style={{ opacity: 0, transition: "opacity 0.15s ease" }}
        />
      </div>

      {/* Trailing Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-40 rounded-full border border-indigo-400/40"
        style={{
          width: 40,
          height: 40,
          opacity: 0,
          willChange: "transform",
          transition: "opacity 0.2s ease, transform 0.15s ease",
        }}
      />
    </>
  );
}

