import { Project } from "@/lib/types";

export const PROJECTS: Project[] = [
  {
    slug: "warehouse-x",
    number: "01",
    title: "WarehouseX",
    category: "B2B Logistics Marketplace",
    client: "WarehouseX Global Inc.",
    year: "2026",
    description: "An ultra-responsive industrial marketplace connecting supply chains with real-time automated inventory mapping and smart contract fulfillment.",
    longDescription: "WarehouseX transformed the fragmented supply-chain ecosystem into a unified digital exchange. We built a high-performance Web application capable of rendering thousands of live inventory data points per second with sub-50ms latency.",
    challenge: "Legacy logistics platforms relied on bloated spreadsheets and slow desktop portals. WarehouseX required a modern, real-time interface that could process high-frequency telemetry data while maintaining an effortless, intuitive user experience across mobile and desktop devices.",
    approach: "We architected a custom Next.js frontend integrated with WebSocket streaming channels, paired with a Swiss-inspired dark editorial interface that highlights critical metrics with high-contrast visual hierarchy.",
    deliverables: [
      "Brand Identity & UI/UX System",
      "Next.js App Router Architecture",
      "Real-time Telemetry Dashboard",
      "Automated Order & Booking Flow",
      "Custom Micro-animations & Interactions"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion", "WebSockets"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    ],
    featured: true,
    gridSpan: "large" as const,
    liveUrl: "https://warehousex-demo.com",
    stats: [
      { label: "Performance Score", value: "99/100" },
      { label: "Data Throughput", value: "50k/sec" },
      { label: "User Retention", value: "+140%" }
    ]
  },
  {
    slug: "lumina-os",
    number: "02",
    title: "Lumina OS",
    category: "AI Spatial Computing Suite",
    client: "Lumina Technologies",
    year: "2025",
    description: "Next-gen web browser experience for spatial operating systems with fluid gesture-driven UI components and canvas renderer.",
    longDescription: "Lumina OS redefines digital canvas interaction for creative teams. SangamX designed and developed the entire web marketing experience and interactive web-based demo interface.",
    challenge: "Demonstrating spatial OS capabilities on standard browser screens without degrading frame rates or requiring bulky WebGL downloads.",
    approach: "Utilized modern CSS 3D transforms, hardware-accelerated Framer Motion layers, and lightweight WebGL shaders to simulate glassmorphic spatial depth with 60fps fluidity.",
    deliverables: [
      "Interactive Product Landing Page",
      "Browser Spatial Sandbox Demo",
      "Dark Mode UI Component Kit",
      "Custom Scroll-Triggered Narratives"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Canvas API", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop"
    ],
    featured: true,
    gridSpan: "small" as const,
    liveUrl: "https://lumina-os-demo.com",
    stats: [
      { label: "Page Load Time", value: "0.4s" },
      { label: "Conversion Rate", value: "18.4%" }
    ]
  },
  {
    slug: "nexus-commerce",
    number: "03",
    title: "Nexus Storefront",
    category: "Luxury E-Commerce Platform",
    client: "Nexus Atelier Paris",
    year: "2025",
    description: "Headless luxury e-commerce experience featuring 3D product previews, instant checkout, and editorial product stories.",
    longDescription: "A high-fashion luxury digital boutique engineered with Next.js App Router and Shopify Storefront API. Designed for high conversion with editorial visual aesthetics.",
    challenge: "Balancing ultra-high-resolution luxury imagery with instantaneous page navigations and smooth product customizers.",
    approach: "Implemented aggressive Next.js image optimization, edge caching, progressive dynamic loading, and interactive hover galleries.",
    deliverables: [
      "Headless Shopify Storefront",
      "Editorial Lookbook Experience",
      "Interactive Cart & Seamless Checkout",
      "Multi-Currency Localization"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Shopify API", "GraphQL", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop"
    ],
    featured: true,
    gridSpan: "small" as const,
    liveUrl: "https://nexus-commerce-demo.com",
    stats: [
      { label: "Average Order Value", value: "+38%" },
      { label: "Lighthouse Score", value: "100" }
    ]
  },
  {
    slug: "synthetix-ai",
    number: "04",
    title: "Synthetix AI",
    category: "Developer Platform & API Studio",
    client: "Synthetix Labs",
    year: "2026",
    description: "Developer-first documentation and API platform with live interactive code playgrounds and command palette UI.",
    longDescription: "Synthetix AI enables developers to train neural models in the cloud. SangamX crafted their marketing engine, interactive documentation suite, and developer dashboard.",
    challenge: "Transforming dry technical API endpoints into an inspiring, tactile visual showcase that entices enterprise developers.",
    approach: "Engineered custom code syntax highlighting, copyable code blocks, interactive endpoint testing widgets, and sleek dark mode command center visuals.",
    deliverables: [
      "Developer Marketing Site",
      "Interactive Documentation Engine",
      "Live Code Sandbox Integration",
      "Command Palette UI Architecture"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Monaco Editor", "Lucide Icons"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
    ],
    featured: true,
    gridSpan: "large" as const,
    liveUrl: "https://synthetix-ai-demo.com",
    stats: [
      { label: "Developer Signups", value: "120k+" },
      { label: "API Requests Served", value: "2.4B/mo" }
    ]
  },
  {
    slug: "aura-architecture",
    number: "05",
    title: "Aura Studio",
    category: "Architecture & Spatial Design",
    client: "Aura Design Group Zurich",
    year: "2025",
    description: "Minimalist Swiss-grid digital studio showcase highlighting high-profile architectural projects across Europe.",
    longDescription: "Aura Studio required a web presence as pristine as their physical architectural builds. We created a brutalist yet elegant portfolio site with interactive project filters and fluid image transitions.",
    challenge: "Capturing scale and materiality in digital pixels with minimal chrome and zero intrusive UI clutter.",
    approach: "Implemented a pure typographic hierarchy with asymmetric masonry project grids and full-screen smooth lightbox transitions.",
    deliverables: [
      "Brutalist Editorial Portfolio",
      "Asymmetric Masonry Grid",
      "Smooth Fullscreen Lightbox",
      "Interactive Project Filter Engine"
    ],
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
    ],
    featured: false,
    gridSpan: "full" as const,
    liveUrl: "https://aura-studio-demo.com",
    stats: [
      { label: "Inquiries Received", value: "+210%" },
      { label: "Design Awards", value: "3 Awwwards" }
    ]
  }
];
