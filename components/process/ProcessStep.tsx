import { ProcessStep as ProcessStepType } from "@/lib/types";

interface ProcessStepProps {
  step: ProcessStepType;
  isLast?: boolean;
}

export function ProcessStep({ step, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative group flex flex-col justify-between p-8 rounded-2xl bg-[#12141C] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 h-full">
      <div>
        {/* Phase Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <span className="font-mono text-xs font-bold tracking-widest text-white uppercase bg-white/10 px-3 py-1 rounded-full border border-white/15">
            PHASE · {step.title}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-display text-2xl font-extrabold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
          {step.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-white/50">
          {step.subtitle}
        </p>

        {/* Description */}
        <p className="mt-4 font-sans text-sm text-muted leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Detail Items */}
      <ul className="mt-6 pt-4 border-t border-white/5 space-y-2 font-mono text-[11px] text-white/70">
        {step.details.map((detail, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-indigo-400 font-bold shrink-0">&gt;</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
