import { ProcessStep } from "@/lib/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Strategy, Research & Architecture",
    description: "We dive deep into your business objectives, target audience, competitive landscape, and key performance metrics to establish a clear architectural roadmap.",
    details: [
      "Stakeholder Workshops & Goal Alignment",
      "User Persona & Flow Mapping",
      "Technical Feasibility & Stack Selection",
      "Scope & Timeline Milestone Definition"
    ]
  },
  {
    number: "02",
    title: "DESIGN",
    subtitle: "Visual Identity & Interactive Prototypes",
    description: "We translate your brand vision into an editorial visual identity system, crafting high-fidelity interface screens and interactive motion prototypes.",
    details: [
      "Swiss-grid Layout & Typography Systems",
      "Figma Component Token Architecture",
      "High-fidelity Interactive Prototypes",
      "Micro-interaction & Animation Guidelines"
    ]
  },
  {
    number: "03",
    title: "DEVELOP",
    subtitle: "Precision Engineering & Motion",
    description: "We bring designs to life using modern Next.js App Router, TypeScript, and clean CSS modules. Built for sub-second page loads and zero layout shifts.",
    details: [
      "Clean Server Component Architecture",
      "Responsive CSS Grid & Container Queries",
      "Fluid Motion & Scroll Trigger Animations",
      "CMS & Third-Party API Integration"
    ]
  },
  {
    number: "04",
    title: "LAUNCH",
    subtitle: "Testing, Optimization & Handoff",
    description: "We rigorously test across devices, conduct Lighthouse performance audits, refine SEO configurations, and deploy smoothly to production environments.",
    details: [
      "Cross-browser & Mobile Device QA",
      "SEO, Open Graph & Accessibility Audits",
      "CI/CD Pipeline & Vercel Deployment",
      "Client Training & Documentation Handoff"
    ]
  }
];
