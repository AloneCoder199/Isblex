"use client";
import React from 'react';

export default function CollectionHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-zinc-900 bg-[#09090B]">
      
      {/* ── BACKGROUND MATRIX GRADIENT ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.06),transparent_70%)]" />
        {/* Subtle Grain Overlay for Industrial Feel */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        
        {/* Status Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-[#22D3EE] text-[9px] font-mono tracking-[0.3em] uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          // HARDWARE_COLLECTION_V4
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
          Smart Lighting <br />
          <span className="text-zinc-600">Collection</span>
        </h1>

        {/* Description */}
        <p className="text-[12px] md:text-sm text-zinc-400 font-mono tracking-[0.1em] uppercase max-w-lg mx-auto leading-relaxed">
          Discover premium smart lighting designed to transform gaming rooms, bedrooms, workspaces, and modern homes into high-end digital environments.
        </p>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
}