"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { subscribeToFeedbacks } from "@/lib/firebase";
import { FeedbackSubmission } from "@/lib/types";

const FALLBACK_TESTIMONIALS: FeedbackSubmission[] = [
  {
    id: "fallback-1",
    name: "Elena Rostova",
    company: "WarehouseX Global",
    email: "elena@warehousex.co",
    rating: 5,
    category: "Website Development",
    feedback: "SangamX delivered a website that completely redefined our brand perception. Their attention to detail in motion, typography, and site performance is unmatched.",
  },
  {
    id: "fallback-2",
    name: "Marcus Vance",
    company: "Synthetix Labs",
    email: "marcus@synthetix.io",
    rating: 5,
    category: "Web Application / SaaS",
    feedback: "Working with SangamX felt like extending our internal team with top 1% frontend engineers. They took our complex AI platform concept and transformed it into a stunning web interface.",
  },
  {
    id: "fallback-3",
    name: "Sophie Laurent",
    company: "Nexus Atelier Paris",
    email: "sophie@nexusatelier.com",
    rating: 5,
    category: "Headless E-Commerce",
    feedback: "The luxury storefront built by SangamX exceeded our highest expectations. Sub-second page navigations and flawless mobile responsiveness increased our average order value by 38%.",
  },
];

export function Testimonials() {
  const [feedbacks, setFeedbacks] = useState<FeedbackSubmission[]>(FALLBACK_TESTIMONIALS);

  useEffect(() => {
    // Realtime Firestore subscription for homepage testimonials
    const unsubscribe = subscribeToFeedbacks((items) => {
      if (items && items.length > 0) {
        setFeedbacks(items);
      } else {
        setFeedbacks(FALLBACK_TESTIMONIALS);
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  return (
    <section id="testimonials" className="relative py-24 md:py-36 bg-[#07080C] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="CLIENT ENDORSEMENTS"
            title="WHAT CLIENTS SAY"
            description="Direct feedback from founders, product directors, and CMOs synced live from our community."
            className="mb-0"
          />

          <Link
            href="/feedback"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider shrink-0"
          >
            <span>SHARE YOUR FEEDBACK</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {feedbacks.slice(0, 6).map((item, idx) => {
            const initials = item.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <Reveal key={item.id || idx} direction="up" delay={0.1 * (idx + 1)} className="h-full flex">
                <div className="relative p-8 rounded-2xl bg-[#12141C] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <Quote className="w-8 h-8 text-indigo-500/40" />
                      <div className="flex items-center gap-1 text-amber-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-3.5 h-3.5 ${
                              star <= item.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-white/10 fill-none"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="font-sans text-base md:text-lg text-white/90 leading-relaxed font-medium italic">
                      &quot;{item.feedback}&quot;
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center font-display text-xs font-bold text-white shrink-0 shadow-md">
                      {initials}
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-white">
                        {item.name}
                      </div>
                      <div className="font-mono text-xs text-indigo-400">
                        {item.company || "Verified Client"}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
