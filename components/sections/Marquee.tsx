export function Marquee() {
  const items = [
    "WEBSITES",
    "WEB APPLICATIONS",
    "E-COMMERCE",
    "UI / UX DESIGN",
    "DIGITAL PRODUCTS",
    "INTERACTIVE EXPERIENCES",
    "DESIGN SYSTEMS",
    "JAMSTACK & NEXT.JS"
  ];

  return (
    <div className="relative py-8 bg-[#07080C] border-y border-white/10 overflow-hidden select-none">
      {/* Fade Edges */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#07080C] to-transparent z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#07080C] to-transparent z-10" 
      />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 mx-6 font-display text-xl md:text-2xl font-extrabold tracking-wider text-white/40 hover:text-white transition-colors cursor-default">
            <span>{item}</span>
            <span className="text-indigo-500 font-mono text-sm">//</span>
          </div>
        ))}
      </div>
    </div>
  );
}
