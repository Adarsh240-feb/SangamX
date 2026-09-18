export function NoiseOverlay() {
  return (
    <div 
      aria-hidden="true" 
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden bg-noise opacity-30 mix-blend-overlay"
    />
  );
}
