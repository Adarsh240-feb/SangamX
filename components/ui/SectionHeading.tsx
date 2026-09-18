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
    <div className={`mb-10 md:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-4xl"} ${className}`}>
      <Reveal direction="up" delay={0.1}>
        <h2 className="section-title text-white font-extrabold tracking-tight">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal direction="up" delay={0.15}>
          <p className="mt-4 text-base md:text-xl text-white/70 leading-relaxed max-w-2xl font-normal">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
