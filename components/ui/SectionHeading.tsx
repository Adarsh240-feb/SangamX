import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 md:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl flex flex-col items-center" : "max-w-4xl"} ${className}`}>
      {tag && (
        <Reveal direction="up" delay={0.05}>
          <div className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
            {tag}
          </div>
        </Reveal>
      )}

      <Reveal direction="up" delay={0.1}>
        <h2 className="section-title text-white font-extrabold tracking-tight">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal direction="up" delay={0.15}>
          <p className={`mt-4 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl font-normal ${isCenter ? "mx-auto text-center" : ""}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
