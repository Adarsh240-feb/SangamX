import { TechItem } from "@/lib/types";

export const TECH_STACK: TechItem[] = [
  {
    name: "Next.js",
    category: "Frontend" as const,
    description: "App Router, SSR, Server Components & Edge rendering.",
    iconName: "Globe",
    featured: true
  },
  {
    name: "React",
    category: "Frontend" as const,
    description: "Component architecture, hooks & modern UI patterns.",
    iconName: "Atom",
    featured: true
  },
  {
    name: "TypeScript",
    category: "Frontend" as const,
    description: "Strict static typing & reliable codebase scalability.",
    iconName: "Code2",
    featured: true
  },
  {
    name: "Tailwind CSS",
    category: "Frontend" as const,
    description: "Utility-first design tokens & rapid custom styling.",
    iconName: "Palette",
    featured: true
  },
  {
    name: "Framer Motion",
    category: "Animation & WebGL" as const,
    description: "Hardware-accelerated layout transitions & gestures.",
    iconName: "Sparkles",
    featured: true
  },
  {
    name: "GSAP",
    category: "Animation & WebGL" as const,
    description: "High-performance scroll triggers & timeline sequences.",
    iconName: "Zap",
    featured: true
  },
  {
    name: "Three.js",
    category: "Animation & WebGL" as const,
    description: "Subtle 3D canvas, ambient gradient meshes & shaders.",
    iconName: "Box",
    featured: false
  },
  {
    name: "Node.js",
    category: "Backend & DB" as const,
    description: "Scalable backend microservices & serverless functions.",
    iconName: "Server",
    featured: true
  },
  {
    name: "MongoDB",
    category: "Backend & DB" as const,
    description: "Document databases & high-throughput data models.",
    iconName: "Database",
    featured: false
  },
  {
    name: "Firebase / Supabase",
    category: "Backend & DB" as const,
    description: "Authentication, real-time sync & cloud storage.",
    iconName: "Flame",
    featured: false
  }
];
