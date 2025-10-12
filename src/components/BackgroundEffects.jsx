// Radial/spotlight glows behind hero & sections + subtle noise overlay
export default function BackgroundEffects() {
  return (
    <>
      {/* Hero radial field */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[rgba(94,225,255,0.06)] via-[rgba(122,92,255,0.05)] to-[rgba(255,80,180,0.04)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_50%_0%,var(--hero-spot-a),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40%_50%_at_10%_20%,var(--hero-spot-b),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-noise" />
    </>
  );
}
