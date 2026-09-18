import { Service } from "@/lib/types";

export const SERVICES: Service[] = [
  {
    id: "web-development",
    number: "01",
    title: "WEBSITE DEVELOPMENT",
    subtitle: "High-performance marketing & brand websites",
    description: "We build bespoke, ultra-fast websites designed to captivate visitors and convert them into paying clients.",
    features: [
      "Custom Design & Page Layouts",
      "Perfect Mobile & Desktop Responsiveness",
      "Ultra-Fast Loading Speed",
      "Search Engine Optimization (SEO)",
      "Easy Content Management System"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    deliverables: ["Complete Website", "Easy Content Admin", "SEO Configuration", "Domain & Launch Setup"]
  },
  {
    id: "web-applications",
    number: "02",
    title: "WEB APPLICATIONS",
    subtitle: "Custom business dashboards & online tools",
    description: "From custom customer portals to business management tools, we build easy-to-use software tailored to your workflows.",
    features: [
      "Custom Business Web Applications",
      "Secure User Login & Roles",
      "Real-time Data & Notifications",
      "Integration with Your Favorite Tools",
      "Mobile-Friendly Dashboard Design"
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    deliverables: ["Custom Web App", "User Access Control", "Database Setup", "Training & Support"]
  },
  {
    id: "e-commerce",
    number: "03",
    title: "ONLINE STORES & E-COMMERCE",
    subtitle: "High-converting online store experiences",
    description: "High-converting online store experiences designed for growing brands. Fast product browsing and seamless checkout.",
    features: [
      "Custom Storefront Design",
      "Fast Product Page Loading",
      "Mobile-Optimized Shopping Cart",
      "Secure Payment Gateways (Stripe/PayPal)",
      "Inventory & Order Management"
    ],
    technologies: ["Shopify", "Next.js", "Tailwind CSS", "Stripe"],
    deliverables: ["Online Store Setup", "Payment Gateway Integration", "Product Catalog Setup", "Store Training"]
  },
  {
    id: "ui-ux-design",
    number: "04",
    title: "UI / UX & BRAND DESIGN",
    subtitle: "Visual design & customer user experience",
    description: "Visual designs and intuitive layouts that make your business look premium, professional, and memorable.",
    features: [
      "Brand Identity & Visual Style",
      "Custom Website Page Designs",
      "Interactive Page Prototypes",
      "User-Friendly Navigation Layouts",
      "Mobile App & Web Visuals"
    ],
    technologies: ["Figma", "Design Systems", "Prototyping"],
    deliverables: ["Figma Design Files", "Brand Visual Guidelines", "Clickable Prototype", "Ready for Launch"]
  },
  {
    id: "interactive-experiences",
    number: "05",
    title: "INTERACTIVE EXPERIENCES",
    subtitle: "Engaging animations & visual effects",
    description: "Interactive brand moments that elevate your website. Smooth scroll animations, subtle 3D elements, and micro-interactions.",
    features: [
      "Smooth Scroll Animations",
      "Interactive Product Displays",
      "Custom Hover & Visual Effects",
      "Engaging Brand Storytelling",
      "High-Impact Landing Pages"
    ],
    technologies: ["Framer Motion", "GSAP", "Three.js"],
    deliverables: ["Interactive Landing Page", "Custom Animation Modules", "Cross-Device Quality Polish"]
  },
  {
    id: "maintenance-support",
    number: "06",
    title: "CARE & SUPPORT",
    subtitle: "Ongoing updates, security & optimization",
    description: "Continuous care for your website to keep it fast, secure, up-to-date, and growing alongside your business.",
    features: [
      "Monthly Security & Speed Checks",
      "Regular Content Updates",
      "New Feature & Page Additions",
      "99.9% Website Uptime Monitoring",
      "Direct Support Channel"
    ],
    technologies: ["Vercel", "Security Audits", "Uptime Monitoring"],
    deliverables: ["Monthly Health Reports", "Priority Support", "Ongoing Website Improvements"]
  }
];
