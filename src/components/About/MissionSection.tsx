"use client";
import React from 'react';

export default function OurMission() {
  return (
    <section 
      id="our-mission" 
      className="relative bg-[#09090B] text-[#F8FAFC] py-24 lg:py-32 px-4 md:px-8 overflow-hidden border-b border-zinc-900 select-none"
    >
      {/* ── BACKGROUND MATRIX ACCENTS ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0284C7]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= CODE-STYLE BADGE & HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-[#22D3EE] text-[10px] font-mono tracking-widest uppercase">
            <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
            // THE OVERRIDING PURPOSE //
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase">
            Our Mission
          </h2>
          <div className="w-12 h-[1px] bg-cyan-500/50" />
        </div>

        {/* ================= HERO MISSION STATEMENT CONTAINER ================= */}
        <div className="max-w-4xl mx-auto mb-20 relative">
          {/* Decorative Corner Brackets */}
          <div className="absolute top-[-10px] left-[-10px] w-4 h-4 border-t-2 border-l-2 border-zinc-800" />
          <div className="absolute bottom-[-10px] right-[-10px] w-4 h-4 border-b-2 border-r-2 border-zinc-800" />
          
          <div className="bg-[#0C0C0E] border border-zinc-800/80 rounded-2xl p-8 md:p-12 text-center shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <span className="text-4xl md:text-5xl font-serif text-cyan-500/30 block mb-4">“</span>
            <p className="text-xl md:text-2xl sm:leading-relaxed font-light tracking-wide text-zinc-100 max-w-3xl mx-auto">
              To help people create spaces that feel <span className="text-white font-medium underline decoration-cyan-500/50 decoration-2 underline-offset-4">inspiring</span>, <span className="text-white font-medium underline decoration-cyan-500/50 decoration-2 underline-offset-4">comfortable</span>, and <span className="text-white font-medium underline decoration-cyan-500/50 decoration-2 underline-offset-4">uniquely their own</span> through smart lighting solutions.
            </p>
            <span className="text-4xl md:text-5xl font-serif text-cyan-500/30 block mt-2 text-right">”</span>
          </div>
        </div>

        {/* ================= MISSION BREAKDOWN PILLARS (3-COL GRID) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* PILLAR 1: INSPIRING */}
          <div className="group bg-[#0B0B0D]/60 border border-zinc-900 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#0E131F]/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-zinc-600 group-hover:text-cyan-400/70 transition-colors">// PHASE_01</span>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-cyan-400 transition-colors shadow-[0_0_8px_#22D3EE]" />
            </div>
            <h3 className="text-base font-bold text-zinc-200 mb-2 tracking-tight group-hover:text-white transition-colors">Inspiring Environments</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Engineering lighting architectures that trigger high-focus dopamine paths, turning regular desks into high-productivity creative zones.
            </p>
          </div>

          {/* PILLAR 2: COMFORTABLE */}
          <div className="group bg-[#0B0B0D]/60 border border-zinc-900 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#0E131F]/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-zinc-600 group-hover:text-cyan-400/70 transition-colors">// PHASE_02</span>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-cyan-400 transition-colors shadow-[0_0_8px_#22D3EE]" />
            </div>
            <h3 className="text-base font-bold text-zinc-200 mb-2 tracking-tight group-hover:text-white transition-colors">Ergonomic Comfort</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Eliminating micro-flickers and hard optic glare to eliminate eye strain completely, safeguarding your visual health during late-night sessions.
            </p>
          </div>

          {/* PILLAR 3: UNIQUELY THEIR OWN */}
          <div className="group bg-[#0B0B0D]/60 border border-zinc-900 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#0E131F]/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-zinc-600 group-hover:text-cyan-400/70 transition-colors">// PHASE_03</span>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-cyan-400 transition-colors shadow-[0_0_8px_#22D3EE]" />
            </div>
            <h3 className="text-base font-bold text-zinc-200 mb-2 tracking-tight group-hover:text-white transition-colors">Absolute Personalization</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Providing smart controls that adapt dynamically to your personal mood, schedule, and identity. Your setup should speak your language.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}