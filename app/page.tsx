"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/hero/Hero";

// Lazy-load below-fold sections for faster initial page load
const SelectedWork = dynamic(
  () => import("@/components/work/SelectedWork").then((m) => ({ default: m.SelectedWork })),
  { ssr: false }
);
const StatementSection = dynamic(
  () => import("@/components/sections/StatementSection").then((m) => ({ default: m.StatementSection })),
  { ssr: false }
);
const Services = dynamic(
  () => import("@/components/services/Services").then((m) => ({ default: m.Services })),
  { ssr: false }
);
const Process = dynamic(
  () => import("@/components/process/Process").then((m) => ({ default: m.Process })),
  { ssr: false }
);
const TechStack = dynamic(
  () => import("@/components/sections/TechStack").then((m) => ({ default: m.TechStack })),
  { ssr: false }
);
const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection").then((m) => ({ default: m.AboutSection })),
  { ssr: false }
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials").then((m) => ({ default: m.Testimonials })),
  { ssr: false }
);
const CTA = dynamic(
  () => import("@/components/sections/CTA").then((m) => ({ default: m.CTA })),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <StatementSection />
      <Services />
      <Process />
      <TechStack />
      <AboutSection />
      <Testimonials />
      <CTA />
    </>
  );
}

