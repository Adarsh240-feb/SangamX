import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <article className="pt-32 pb-24 bg-[#090A0F] text-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Reveal direction="up" delay={0.05}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-indigo-400 hover:text-white uppercase transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>
        </Reveal>

        {/* Header Block */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="font-mono text-xs font-bold text-indigo-400 tracking-widest uppercase mb-2">
                PROJECT {project.number} // {project.category}
              </div>
              <h1 className="display-title font-black text-white tracking-tighter">
                {project.title}
              </h1>
            </div>

            {project.liveUrl && (
              <MagneticButton dataCursor="LIVE">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white text-black hover:bg-indigo-400 hover:text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 inline-flex items-center gap-2 shadow-xl"
                >
                  <span>LIVE PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </MagneticButton>
            )}
          </div>
        </Reveal>

        {/* Project Meta Metrics Bar */}
        <Reveal direction="up" delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-white/10 font-mono text-xs">
            <div>
              <div className="text-white/40 uppercase mb-1">CLIENT</div>
              <div className="text-white font-bold text-sm">{project.client}</div>
            </div>
            <div>
              <div className="text-white/40 uppercase mb-1">YEAR</div>
              <div className="text-white font-bold text-sm">{project.year}</div>
            </div>
            <div>
              <div className="text-white/40 uppercase mb-1">CATEGORY</div>
              <div className="text-white font-bold text-sm">{project.category}</div>
            </div>
            <div>
              <div className="text-white/40 uppercase mb-1">TECH STACK</div>
              <div className="text-indigo-300 font-bold text-sm flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).join(", ")}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Hero Image */}
        <Reveal direction="up" delay={0.25} className="my-12">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-black/50">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Overview & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16">
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase">
                OVERVIEW
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
                {project.longDescription}
              </p>
            </Reveal>
          </div>

          {/* Key Stats */}
          {project.stats && (
            <div className="lg:col-span-5 flex flex-col justify-center">
              <Reveal direction="left" delay={0.2}>
                <div className="p-8 rounded-2xl bg-[#12141C] border border-white/10 space-y-6">
                  <div className="font-mono text-xs font-bold tracking-widest text-indigo-400 uppercase">
                    // IMPACT & PERFORMANCE METRICS
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="border-t border-white/10 pt-3">
                        <div className="font-display text-3xl font-black text-white">
                          {stat.value}
                        </div>
                        <div className="font-mono text-[10px] text-muted uppercase mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          )}
        </div>

        {/* Challenge vs Approach Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <Reveal direction="up" delay={0.1}>
            <div className="p-8 rounded-2xl bg-[#12141C] border border-white/10 h-full">
              <div className="font-mono text-xs font-bold text-rose-400 uppercase tracking-widest mb-3">
                01 // THE CHALLENGE
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                What Problem We Solved
              </h3>
              <p className="font-sans text-sm md:text-base text-muted leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="p-8 rounded-2xl bg-[#12141C] border border-white/10 h-full">
              <div className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
                02 // THE APPROACH
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Engineering & Design Strategy
              </h3>
              <p className="font-sans text-sm md:text-base text-muted leading-relaxed">
                {project.approach}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Key Deliverables List */}
        <Reveal direction="up" delay={0.2} className="my-16">
          <div className="p-8 rounded-2xl bg-[#12141C] border border-white/10">
            <h3 className="font-display text-xl font-bold text-white mb-6 uppercase">
              DELIVERABLES & SCOPE OF WORK
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs text-white/80">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Gallery Section */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="my-20">
            <h2 className="font-display text-2xl font-bold text-white mb-8 uppercase">
              PROJECT GALLERY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((imgUrl, i) => (
                <Reveal key={i} direction="up" delay={0.1 * (i + 1)}>
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-black/40">
                    <Image
                      src={imgUrl}
                      alt={`${project.title} gallery screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Prev / Next Navigation Footer */}
        <div className="pt-16 border-t border-white/10 flex items-center justify-between font-mono text-xs">
          <Link
            href={`/work/${prevProject.slug}`}
            className="group flex items-center gap-3 text-muted hover:text-white transition-colors"
          >
            <span className="text-indigo-400 font-bold">&lt; PREVIOUS</span>
            <span className="hidden sm:inline-block font-display font-bold text-sm text-white group-hover:text-indigo-300">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center gap-3 text-muted hover:text-white transition-colors text-right"
          >
            <span className="hidden sm:inline-block font-display font-bold text-sm text-white group-hover:text-indigo-300">
              {nextProject.title}
            </span>
            <span className="text-indigo-400 font-bold">NEXT &gt;</span>
          </Link>
        </div>

      </div>
    </article>
  );
}
