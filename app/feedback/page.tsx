"use client";

import { useState } from "react";
import { CheckCircle2, MessageSquare, Send, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    rating: 5,
    category: "General Experience",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="pt-32 pb-24 bg-[#090A0F] min-h-screen text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          title="CLIENT & COMMUNITY FEEDBACK"
          description="We continuously refine our engineering craft. Share your thoughts, experience, or project feedback with the SangamX team."
          align="center"
        />

        <div className="mt-12">
          <Reveal direction="up" delay={0.1}>
            <div className="p-8 md:p-10 rounded-2xl bg-[#12141C] border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white">
                    THANK YOU FOR YOUR FEEDBACK!
                  </h3>
                  <p className="text-muted text-base max-w-md mx-auto">
                    Your insights help us elevate the design and performance standards for all future builds.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase transition-colors"
                  >
                    SUBMIT ANOTHER RESPONSE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Rating Selector */}
                  <div className="space-y-3 text-center">
                    <label className="block font-mono text-xs font-bold text-white/80 uppercase">
                      HOW WOULD YOU RATE YOUR EXPERIENCE?
                    </label>
                    <div className="flex justify-center items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-2 transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= formData.rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-white/20"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-mono text-xs font-bold text-white/80 uppercase">
                        YOUR NAME <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/30 focus:border-indigo-500 focus:outline-none transition-colors font-sans text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-mono text-xs font-bold text-white/80 uppercase">
                        EMAIL ADDRESS <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/30 focus:border-indigo-500 focus:outline-none transition-colors font-sans text-sm"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="block font-mono text-xs font-bold text-white/80 uppercase">
                      COMPANY / ORGANIZATION (OPTIONAL)
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="e.g. Studio Partner / Client"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/30 focus:border-indigo-500 focus:outline-none transition-colors font-sans text-sm"
                    />
                  </div>

                  {/* Feedback Message */}
                  <div className="space-y-2">
                    <label htmlFor="feedback" className="block font-mono text-xs font-bold text-white/80 uppercase">
                      YOUR FEEDBACK & COMMENTS <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="feedback"
                      required
                      rows={5}
                      placeholder="Tell us what you liked, suggestions for improvement, or overall thoughts..."
                      value={formData.feedback}
                      onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/30 focus:border-indigo-500 focus:outline-none transition-colors font-sans text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/30 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>SUBMITTING...</span>
                    ) : (
                      <>
                        <span>SUBMIT FEEDBACK</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  );
}
