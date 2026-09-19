import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { CustomCursor } from "@/components/ui/CustomCursor";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"] as const,
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"] as const,
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SangamX — Developer Group & Software Engineering Agency",
  description: "SangamX is a collective group of developers designing and engineering ultra-fast websites, web applications, e-commerce platforms, and mobile apps in ₹ Rupees.",
  keywords: [
    "SangamX",
    "Developer Collective",
    "Group of Developers",
    "Full Stack Developers",
    "Next.js App Router",
    "Web Development India",
    "Custom Web Apps"
  ],
  authors: [{ name: "SangamX Developer Team" }],
  openGraph: {
    title: "SangamX — Developer Group & Software Engineering Agency",
    description: "SangamX is a collective group of developers designing and engineering ultra-fast websites, web applications, and mobile apps.",
    url: "https://sangamx.com",
    siteName: "SangamX Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SangamX — Developer Group & Software Engineering Agency",
    description: "SangamX is a collective group of developers designing and engineering ultra-fast websites, web applications, and mobile apps.",
    creator: "@sangamx",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SangamX Developer Collective",
    "url": "https://sangamx.com",
    "logo": "https://sangamx.com/sangam.jpg",
    "description": "Collective group of software developers crafting high-performance websites, custom web applications, and mobile apps.",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global Remote"
    },
    "knowsAbout": [
      "Next.js App Router",
      "TypeScript Engineering",
      "Headless E-Commerce",
      "UI/UX Design Systems"
    ]
  };

  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-indigo-600 selection:text-white">
        <NoiseOverlay />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
