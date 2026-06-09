"use client";
import React from 'react';

// Assumed global mapping in Tailwind config:
// font-serif -> Playfair Display (or similar luxury serif)
// font-sans -> Plus Jakarta Sans (or similar clean sans)

export default function CollectionHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-[#D0C9BC]/50 bg-[#FDFBF7] font-sans select-none">
      
      {/* ── BACKGROUND ESSENCE & BOTANICALS ── */}
      <div className="absolute inset-0 z-0">
        {/* Soft Organic Glow (Misty Rose/Sage hue) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,228,225,0.4),transparent_70%)]" />
        
        {/* Subtle Botanical Leaf Overlay for Organic Feel */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10c-5-5-15-5-15 5s10 15 15 20c5-5 15-10 15-20s-10-10-15-5z' fill='%238A9A86' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        
        {/* Beauty Concierge Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D0C9BC] bg-white text-[#8A9A86] text-[10px] font-sans tracking-[0.25em] uppercase select-none font-semibold shadow-sm mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72] animate-pulse" />
            BOTANICAL_ESTEEM_V4 // SATISFACTION_GUARANTEED
        </div>

        {/* Headline (Luxury Serif) */}
        <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#3E2A20] leading-[1.1] mb-8 pb-1 max-w-2xl mx-auto">
          Organic Curations <br />
          <span className="text-[#B89B72]/80 italic">Timeless Radiance</span>
        </h1>

        {/* Description (Clean Sans, wellness context) */}
        <p className="text-[13px] md:text-sm text-[#3E2A20]/80 font-sans font-light leading-relaxed max-w-xl mx-auto mb-16 px-4">
          Discover conscious formulations designed to reveal your skin&apos;s innate glow. Embrace raw, botanical alchemy and experience a truly adaptive skincare ritual decades in the making.
        </p>
      </div>

      {/* Decorative Bottom Line (Sage to Gold gradient) */}
      <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#8A9A86]/40 via-[#B89B72]/50 via-[#8A9A86]/40 to-transparent" />
    </section>
  );
}