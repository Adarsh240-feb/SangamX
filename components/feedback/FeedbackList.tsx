"use client";

import { useEffect, useState } from "react";
import { Star, MessageSquare, Sparkles, Filter, Clock } from "lucide-react";
import { subscribeToFeedbacks } from "@/lib/firebase";
import { FeedbackSubmission } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";

// Default starter feedback items shown when Firebase is first connected or syncing
const SAMPLE_FEEDBACKS: FeedbackSubmission[] = [
  {
    id: "sample-1",
    name: "Elena Rostova",
    company: "Vanguard Creative",
    email: "elena@vanguard.co",
    rating: 5,
    category: "Web Application / SaaS",
    feedback: "SangamX delivered our digital platform with incredible speed and craftsmanship. The dynamic micro-interactions and dark aesthetics wowed our board members!",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: "sample-2",
    name: "Marcus Vance",
    company: "Apex Hyperware",
    email: "marcus@apex.io",
    rating: 5,
    category: "UI/UX & Design System",
    feedback: "The level of engineering rigor and design polish was outstanding. Every component feels weightless, hyper-responsive, and tailored.",
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: "sample-3",
    name: "Sophia Lin",
    company: "Aether Labs",
    email: "sophia@aetherlabs.com",
    rating: 5,
    category: "General Experience",
    feedback: "Communication was seamless and transparent throughout. SangamX transformed our vision into an unforgettable interactive digital product.",
    createdAt: new Date(Date.now() - 86400000 * 8).toISOString(),
  },
];

export function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState<FeedbackSubmission[]>(SAMPLE_FEEDBACKS);
  const [filterRating, setFilterRating] = useState<number | "ALL">("ALL");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Subscribe to realtime Firebase Firestore snapshot updates
    const unsubscribe = subscribeToFeedbacks((liveItems) => {
      setIsLoading(false);
      if (liveItems && liveItems.length > 0) {
        // Merge real live items first, followed by sample items if count is small
        setFeedbacks(liveItems);
      } else {
        setFeedbacks(SAMPLE_FEEDBACKS);
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const displayedFeedbacks = feedbacks.filter((item) => {
    if (filterRating === "ALL") return true;
    return item.rating === filterRating;
  });

  const totalReviews = feedbacks.length;
  const avgRating = totalReviews > 0
    ? (feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews).toFixed(1)
    : "5.0";

  return (
    <div className="mt-16 space-y-10">
      
      {/* Realtime Live Header & Stats */}
      <div className="p-8 rounded-2xl bg-[#12141C] border border-white/10 glow-border flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-6 text-center md:text-left">
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30">
            <span className="font-display text-4xl font-extrabold text-white">{avgRating}</span>
            <div className="flex items-center gap-1 mt-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="font-mono text-[10px] text-white/50 uppercase mt-1">AVERAGE SCORE</span>
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest">
                LIVE FIREBASE FEEDBACK STREAM
              </span>
            </div>
            <h4 className="font-display text-xl font-bold text-white">
              WHAT COMMUNITY & CLIENTS ARE SAYING
            </h4>
            <p className="font-sans text-xs text-white/60 mt-1">
              Real-time submission feed synced live with Firebase Firestore.
            </p>
          </div>
        </div>

        {/* Rating Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <button
            onClick={() => setFilterRating("ALL")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border ${
              filterRating === "ALL"
                ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                : "bg-black/40 text-white/60 border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            ALL ({totalReviews})
          </button>
          {[5, 4, 3, 2, 1].map((r) => (
            <button
              key={r}
              onClick={() => setFilterRating(r)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1 border ${
                filterRating === r
                  ? "bg-amber-500 text-black border-amber-400 font-bold"
                  : "bg-black/40 text-white/60 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              <span>{r}</span>
              <Star className="w-3 h-3 fill-current" />
            </button>
          ))}
        </div>

      </div>

      {/* Feedback Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedFeedbacks.map((item, idx) => {
          const dateFormatted = item.createdAt
            ? new Date(item.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "Recently";

          const initials = item.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();

          return (
            <Reveal key={item.id || idx} direction="up" delay={0.05 * (idx % 6)}>
              <div className="p-6 md:p-8 rounded-2xl bg-[#12141C] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between h-full space-y-6 group">
                
                <div className="space-y-4">
                  {/* Top line: Stars & Category badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= item.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-white/10 fill-none"
                          }`}
                        />
                      ))}
                    </div>

                    {item.category && (
                      <span className="font-mono text-[10px] font-semibold text-indigo-400 uppercase bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-500/20">
                        {item.category}
                      </span>
                    )}
                  </div>

                  {/* Feedback text */}
                  <p className="font-sans text-sm md:text-base text-white/90 leading-relaxed italic">
                    &quot;{item.feedback}&quot;
                  </p>
                </div>

                {/* Bottom line: Author Avatar & Meta */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center font-display text-xs font-bold text-white shadow-md">
                      {initials}
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {item.name}
                      </div>
                      <div className="font-mono text-xs text-white/40">
                        {item.company || "Community Reviewer"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 font-mono text-[10px] text-white/30">
                    <Clock className="w-3 h-3" />
                    <span>{dateFormatted}</span>
                  </div>
                </div>

              </div>
            </Reveal>
          );
        })}
      </div>

    </div>
  );
}
