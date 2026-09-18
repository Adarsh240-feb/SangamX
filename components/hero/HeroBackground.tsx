export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />

      {/* Top Ambient Glow Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-[130px] rounded-full animate-pulse-glow" />

      {/* Side Accent Orb */}
      <div className="absolute -top-10 right-10 w-[350px] h-[350px] bg-indigo-500/10 blur-[100px] rounded-full" />
    </div>
  );
}
