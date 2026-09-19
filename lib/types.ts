export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  longDescription: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  technologies: string[];
  image: string;
  galleryImages: string[];
  featured: boolean;
  gridSpan: "large" | "small" | "medium" | "full"; // for asymmetric layout
  liveUrl?: string;
  stats?: { label: string; value: string }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  projectSlug: string;
}

export interface TechItem {
  name: string;
  category: "Design & Web" | "Visuals & Animation" | "Speed & Cloud" | "Frontend" | "Backend & DB" | "Animation & WebGL" | "Design & Strategy";
  description: string;
  iconName: string;
  featured?: boolean;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
  createdAt?: string;
}

export interface FeedbackSubmission {
  id?: string;
  name: string;
  email: string;
  company?: string;
  rating: number;
  category?: string;
  feedback: string;
  createdAt?: string;
}

