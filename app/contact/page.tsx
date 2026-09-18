"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const projectTypes = [
  "Website Development",
  "Web Application / SaaS",
  "Headless E-Commerce",
  "UI/UX & Design System",
  "Interactive Experience"
];

const budgetRanges = [
  "$5k – $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k+"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Website Development",
    budget: "$10k – $25k",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-32 pb-24 bg-[#090A0F] min-h-screen text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="START A PROJECT"
          title="LET'S BUILD SOMETHING GREAT."
          description="Have a new project or idea in mind? Tell us about your goals and timeline, and we will get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 my-12">
          
          {/* Form Column */}
          <div className="lg:col-span-8">
            <Reveal direction="up" delay={0.1}>
              <div className="p-8 md:p-10 rounded-2xl bg-[#12141C] border border-white/10 glow-border">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-white">
                      INQUIRY RECEIVED!
                    </h3>
                    <p className="text-muted text-base max-w-md mx-auto">
                      Thank you for reaching out to SangamX. We have received your project details and will reply via email shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase transition-colors"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
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
                          placeholder="e.g. Alex Morgan"
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
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/30 focus:border-indigo-500 focus:outline-none transition-colors font-sans text-sm"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label htmlFor="company" className="block font-mono text-xs font-bold text-white/80 uppercase">
                        COMPANY / ORGANIZATION
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="e.g. WarehouseX Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/30 focus:border-indigo-500 focus:outline-none transition-colors font-sans text-sm"
                      />
                    </div>

                    {/* Project Type Select */}
                    <div className="space-y-3">
                      <label className="block font-mono text-xs font-bold text-white/80 uppercase">
                        WHAT CAN WE BUILD FOR YOU?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => {
                          const active = formData.projectType === type;
                          return (
                            <button
                              type="button"
                              key={type}
                              onClick={() => setFormData({ ...formData, projectType: type })}
                              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all border ${
                                active
                                  ? "bg-indigo-600 text-white border-indigo-500"
                                  : "bg-black/40 text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                              }`}
                            >
                              {type}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget Range Pills */}
                    <div className="space-y-3">
                      <label className="block font-mono text-xs font-bold text-white/80 uppercase">
                        ESTIMATED PROJECT BUDGET
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetRanges.map((range) => {
                          const active = formData.budget === range;
                          return (
                            <button
                              type="button"
                              key={range}
                              onClick={() => setFormData({ ...formData, budget: range })}
                              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all border ${
                                active
                                  ? "bg-indigo-600 text-white border-indigo-500"
                                  : "bg-black/40 text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                              }`}
                            >
                              {range}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Details */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block font-mono text-xs font-bold text-white/80 uppercase">
                        PROJECT OVERVIEW & TIMELINE <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project goals, key requirements, and desired launch target..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                        <span>SENDING INQUIRY...</span>
                      ) : (
                        <>
                          <span>SEND INQUIRY TO SANGAMX</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Direct Contact Info Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <Reveal direction="left" delay={0.2}>
              <div className="p-8 rounded-2xl bg-[#12141C] border border-white/10 space-y-6">
                <div className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-widest">
                  DIRECT CONTACT
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-[10px] text-white/40 uppercase">EMAIL INQUIRIES</div>
                      <a href="mailto:hello@sangamx.com" className="font-display font-bold text-base text-white hover:text-indigo-400 transition-colors">
                        hello@sangamx.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-4 border-t border-white/10">
                    <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-[10px] text-white/40 uppercase">STUDIO LOCATION</div>
                      <div className="font-display font-bold text-sm text-white">
                        GLOBAL / REMOTE STUDIO
                      </div>
                      <div className="font-mono text-xs text-white/50">
                        Primary Timezones: UTC / EST / IST
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-[#12141C] to-black border border-indigo-500/30 space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-white uppercase">
                  <span>FAST RESPONSE SLA</span>
                </div>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  We review every project proposal within 24 hours and set up an initial video technical consultation.
                </p>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </div>
  );
}
