import { Project } from "@/lib/types";

export const PROJECTS: Project[] = [
  {
    slug: "link2logistics",
    number: "01",
    title: "Link2Logistics",
    category: "Logistics & Warehouse Management",
    client: "Link2Logistics Inc.",
    year: "2026",
    description: "Streamline your logistics with real-time inventory, smart tracking, and seamless operations. Complete warehouse management platform.",
    longDescription: "Link2Logistics is an enterprise logistics and warehouse management web application engineered for high-throughput supply chains, live inventory telemetry, and automated order fulfillment.",
    challenge: "Traditional logistics software suffered from fragmented inventory tracking, high latency telemetry, and legacy user interfaces.",
    approach: "We built a modern, high-performance Next.js web application paired with real-time tracking streams and an ultra-responsive dark interface.",
    deliverables: [
      "Brand Identity & UX System",
      "Next.js Web Application",
      "Real-Time Telemetry Dashboard",
      "Automated Dispatch Engine"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "WebSockets"],
    image: "/projects/link2logistics.png",
    galleryImages: [
      "/projects/link2logistics.png"
    ],
    featured: true,
    gridSpan: "large" as const,
    liveUrl: "https://www.link2logistics.com/",
    stats: [
      { label: "Inventory Sync", value: "Real-time" },
      { label: "Data Latency", value: "<50ms" },
      { label: "Efficiency Boost", value: "+160%" }
    ]
  },
  {
    slug: "uit-map",
    number: "02",
    title: "UIT Map",
    category: "Interactive Campus Navigation",
    client: "United Institute of Technology",
    year: "2025",
    description: "Interactive campus navigation and geospatial mapping platform empowering students and visitors to explore UIT effortlessly.",
    longDescription: "UIT Map provides turn-by-turn campus navigation, building details, and interactive departmental location guides for students, faculty, and event guests.",
    challenge: "Large academic campuses can be challenging to navigate for new students and visitors during events.",
    approach: "Developed an intuitive interactive map interface with instant location search, building routes, and mobile-optimized responsiveness.",
    deliverables: [
      "Geospatial Map UI",
      "Campus Route Planner",
      "Mobile Navigation Web App",
      "Department Directory Search"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Mapbox / Leaflet", "Framer Motion"],
    image: "/projects/uit-map.png",
    galleryImages: [
      "/projects/uit-map.png"
    ],
    featured: true,
    gridSpan: "small" as const,
    liveUrl: "https://uitmap.com/",
    stats: [
      { label: "Campus Coverage", value: "100%" },
      { label: "Search Speed", value: "Instant" }
    ]
  },
  {
    slug: "wiki-club-tech-uit",
    number: "03",
    title: "Wiki Club Tech UIT",
    category: "Student Tech & Open Source",
    client: "Wiki Club Tech UIT",
    year: "2025",
    description: "Official community hub for Wiki Club Tech UIT, empowering student developers with open-source initiatives and tech workshops.",
    longDescription: "Wiki Club Tech UIT serves as the digital home for open-source contributions, technical skill building, hackathons, and student-led software projects.",
    challenge: "Unifying student developers under one platform to showcase projects, announce workshops, and encourage open-source contributions.",
    approach: "Designed a dynamic, developer-centric community portal featuring project showcases, event registration, and student leaderboards.",
    deliverables: [
      "Community Web Platform",
      "Event Registration Portal",
      "Open Source Showcase",
      "Member Directory"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "REST API"],
    image: "/projects/wiki-club-tech-uit.png",
    galleryImages: [
      "/projects/wiki-club-tech-uit.png"
    ],
    featured: true,
    gridSpan: "small" as const,
    liveUrl: "https://www.wikiclubtechuit.org/",
    stats: [
      { label: "Community Members", value: "500+" },
      { label: "Open Source Projects", value: "25+" }
    ]
  },
  {
    slug: "gdg-prayagraj",
    number: "04",
    title: "GDG Prayagraj",
    category: "Google Developer Group Platform",
    client: "GDG Prayagraj Community",
    year: "2026",
    description: "Official Google Developer Group Prayagraj portal connecting tech enthusiasts, DevFests, speaker sessions, and Google Cloud workshops.",
    longDescription: "GDG Prayagraj unites developers, designers, and cloud architects across the region through technical conferences, speaker tracks, and hands-on workshops.",
    challenge: "Showcasing annual DevFest events, speaker lineups, agendas, and community updates with Google's modern design philosophy.",
    approach: "Engineered a high-performance event web application featuring event schedules, speaker profiles, direct RSVP integration, and dark mode visuals.",
    deliverables: [
      "DevFest Platform",
      "Speaker & Schedule Manager",
      "Community Hub",
      "RSVP & Ticket Integration"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Framer Motion"],
    image: "/projects/gdg-prayagraj.png",
    galleryImages: [
      "/projects/gdg-prayagraj.png"
    ],
    featured: true,
    gridSpan: "large" as const,
    liveUrl: "https://gdgprayagraj.com/",
    stats: [
      { label: "DevFest Attendees", value: "1,200+" },
      { label: "Community Reach", value: "5,000+" }
    ]
  },
  {
    slug: "ritik-portfolio",
    number: "05",
    title: "Ritik Portfolio",
    category: "Developer Portfolio & Showcase",
    client: "Ritik Personal Brand",
    year: "2025",
    description: "Full-stack developer portfolio showcasing modern web engineering, interactive interfaces, micro-animations, and full-stack projects.",
    longDescription: "A modern developer showcase built to demonstrate technical skills, interactive frontend design, micro-animations, and full-stack projects.",
    challenge: "Crafting a distinctive digital portfolio that balances technical depth with refined aesthetic design.",
    approach: "Implemented interactive project cards, sleek dark glassmorphism styling, fluid transitions, and responsive layout grids.",
    deliverables: [
      "Personal Branding Site",
      "Interactive Project Grid",
      "Skill & Tech Stack Showcase",
      "Contact Integration"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/ritik-portfolio.png",
    galleryImages: [
      "/projects/ritik-portfolio.png"
    ],
    featured: true,
    gridSpan: "small" as const,
    liveUrl: "https://ritik-xi.vercel.app/",
    stats: [
      { label: "Performance Score", value: "100" },
      { label: "Interactive Components", value: "20+" }
    ]
  },
  {
    slug: "udaan-ugi",
    number: "06",
    title: "Udaan UGI",
    category: "College Fest & Event Portal",
    client: "United Group of Institutions",
    year: "2025",
    description: "Annual mega technical and cultural fest portal for UGI, handling registrations, schedules, celebrity nights, and live leaderboards.",
    longDescription: "Udaan UGI is the flagship digital platform for UGI's largest annual festival, managing thousands of student event registrations and live announcements.",
    challenge: "High concurrency demands during peak registration windows for dozens of technical and cultural competitions.",
    approach: "Architected a scalable Next.js event management web application with instant event filtering, registration flows, and digital pass generation.",
    deliverables: [
      "Fest Landing Web App",
      "Event Registration Portal",
      "Digital Pass System",
      "Live Schedule Timeline"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "/projects/udaan-ugi.png",
    galleryImages: [
      "/projects/udaan-ugi.png"
    ],
    featured: true,
    gridSpan: "small" as const,
    liveUrl: "https://udaan-ugi.vercel.app/",
    stats: [
      { label: "Fest Registrations", value: "10,000+" },
      { label: "Events Managed", value: "40+" }
    ]
  },
  {
    slug: "sangam-darshan",
    number: "07",
    title: "Sangam Darshan",
    category: "Spiritual & Cultural Tourism",
    client: "Sangam Darshan Tourism",
    year: "2026",
    description: "Digital pilgrimage and heritage platform offering boat bookings, ritual arrangements, and cultural guides for Prayagraj Sangam & Kumbh Mela.",
    longDescription: "Sangam Darshan brings ease and transparency to spiritual tourism in Prayagraj, offering devotees seamless boat trip bookings, ritual packages, and heritage tours.",
    challenge: "Making sacred tourism easily accessible, transparent, and simple to book for visitors across the globe.",
    approach: "Designed a warm, golden-accented cultural booking portal with transparent pricing, instant booking confirmation, and interactive tour guides.",
    deliverables: [
      "Tourism Booking Web App",
      "Boat & Ritual Reservation System",
      "Interactive Heritage Directory",
      "Payment Gateway Integration"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Razorpay / Stripe"],
    image: "/projects/sangam-darshan.png",
    galleryImages: [
      "/projects/sangam-darshan.png"
    ],
    featured: true,
    gridSpan: "large" as const,
    liveUrl: "https://sangamdarshan.com/",
    stats: [
      { label: "Pilgrims Served", value: "15,000+" },
      { label: "User Satisfaction", value: "98%" }
    ]
  },
  {
    slug: "vynco-app",
    number: "08",
    title: "Vynco App",
    category: "Mobile Utility Application",
    client: "Vynco Technologies",
    year: "2025",
    description: "Feature-rich Android application available on Google Play Store, engineered for intuitive utility, real-time sync, and sleek mobile UI.",
    longDescription: "Vynco is a modern Android application engineered to deliver high-performance user utilities, cloud synchronization, and responsive mobile interfaces.",
    challenge: "Creating a fluid mobile user experience across diverse Android devices while maintaining low memory overhead.",
    approach: "Built a native mobile client connected to cloud microservices with offline capability and instant push notifications.",
    deliverables: [
      "Android Mobile Application",
      "Google Play Store Listing",
      "Cloud REST API Backend",
      "Push Notification System"
    ],
    technologies: ["React Native", "Android SDK", "Node.js", "REST APIs", "Firebase"],
    image: "/projects/vynco-app.png",
    galleryImages: [
      "/projects/vynco-app.png"
    ],
    featured: true,
    gridSpan: "small" as const,
    liveUrl: "https://play.google.com/store/apps/details?id=com.vynco.app&pcampaignid=web_share",
    stats: [
      { label: "Play Store Downloads", value: "10,000+" },
      { label: "App Rating", value: "4.8 ★" }
    ]
  }
];
