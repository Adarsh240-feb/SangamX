import { Service } from "@/lib/types";

export const SERVICES: Service[] = [
  {
    id: "web-development",
    number: "01",
    title: "WEBSITE DEVELOPMENT",
    subtitle: "High-performance marketing & brand platforms",
    description: "We build bespoke, ultra-fast websites designed to captivate visitors and convert them into clients. Built on Next.js App Router with server-side optimization.",
    features: [
      "Custom Next.js & React Architecture",
      "Pixel-perfect Responsive Engineering",
      "Lighthouse 95+ Speed Performance",
      "SEO & Metadata Optimization",
      "CMS Integration (Sanity, Strapi, Contentful)"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    deliverables: ["Production Codebase", "CMS Admin Panel", "Performance Audit Report", "Deployment Setup"]
  },
  {
    id: "web-applications",
    number: "02",
    title: "WEB APPLICATIONS",
    subtitle: "Scalable SaaS dashboards & digital tools",
    description: "From complex web applications to enterprise SaaS dashboards, we engineer robust full-stack software solutions with real-time data flows and intuitive user control.",
    features: [
      "Full-stack Web App Architecture",
      "Real-time Data Streaming & WebSockets",
      "Role-based Access Control (RBAC)",
      "API Integrations & Custom Gateways",
      "State Management & Offline Support"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "Redis"],
    deliverables: ["Full-Stack Application", "API Specification", "Database Schema", "CI/CD Pipeline"]
  },
  {
    id: "e-commerce",
    number: "03",
    title: "E-COMMERCE PLATFORMS",
    subtitle: "Headless luxury storefronts & digital boutiques",
    description: "High-converting online store experiences tailored for ambitious DTC brands. Blending luxury editorial storytelling with instant edge checkout mechanics.",
    features: [
      "Headless Shopify & Custom Storefronts",
      "Sub-second Product Page Loading",
      "Custom Product Configurator / 3D Preview",
      "Global Multi-currency & Localization",
      "Optimized Instant Mobile Checkout"
    ],
    technologies: ["Shopify Storefront API", "Next.js", "GraphQL", "Tailwind CSS", "Stripe"],
    deliverables: ["Headless Storefront", "Custom Checkout Flows", "Product Catalog Migration", "Analytics Integration"]
  },
  {
    id: "ui-ux-design",
    number: "04",
    title: "UI / UX DESIGN",
    subtitle: "Design systems & product architecture",
    description: "Visual identity systems and user experience design that make complex software feel natural, effortless, and premium.",
    features: [
      "Brand Identity & Visual Guidelines",
      "Figma Design Systems & Token Libraries",
      "Interactive High-Fidelity Prototypes",
      "User Flow & Information Architecture",
      "Micro-interaction & Animation Specs"
    ],
    technologies: ["Figma", "Design Tokens", "Prototyping", "Swiss Grid Systems"],
    deliverables: ["Figma Design System", "Component Library", "Interactive Prototype", "Developer Handoff Package"]
  },
  {
    id: "interactive-experiences",
    number: "05",
    title: "INTERACTIVE EXPERIENCES",
    subtitle: "Motion graphics, CSS shaders & WebGL",
    description: "Interactive brand moments that elevate web experiences into memorable digital art. Scroll-driven animations, 3D elements, and micro-interactions.",
    features: [
      "Scroll-driven Storytelling",
      "Subtle Canvas & WebGL Shaders",
      "Custom Cursor & Hover Interactions",
      "Physics & Motion Simulations",
      "Interactive Product Launch Sites"
    ],
    technologies: ["GSAP", "ScrollTrigger", "Framer Motion", "Three.js (Subtle)", "CSS Shaders"],
    deliverables: ["Interactive Landing Page", "Custom Animation Modules", "Cross-browser Polish"]
  },
  {
    id: "maintenance-support",
    number: "06",
    title: "MAINTENANCE & SUPPORT",
    subtitle: "Ongoing optimization, updates & security",
    description: "Continuous care for your digital platform to keep it fast, secure, up to date, and evolving alongside your growing business.",
    features: [
      "Monthly Security & Dependency Audits",
      "Continuous Performance Tuning",
      "New Feature & Component Sprints",
      "24/7 Uptime & Monitoring",
      "Dedicated Developer Slack Channel"
    ],
    technologies: ["Vercel", "AWS", "GitHub Actions", "Sentry", "Lighthouse"],
    deliverables: ["Monthly Health Reports", "Priority Support SLA", "Ongoing Feature Upgrades"]
  }
];
