"use client";
import React from 'react';

export default function OurMission() {
  return (
    <section 
      id="our-mission" 
      className="relative bg-[#FDFBF7] text-[#3E2A20] py-24 lg:py-32 px-4 md:px-8 overflow-hidden border-b border-[#D0C9BC]/40 select-none"
    >
      {/* ── BACKGROUND ORGANIC ACCENTS ── */}
      {/* Soft Sage Green Glow at bottom left */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(138,154,134,0.05),transparent_50%)] pointer-events-none" />
      {/* Subtle Gold Blur at top right */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B89B72]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= ELEGANT HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#B89B72]/30 bg-[#8A9A86]/5 text-[#6A8F67] text-[10px] font-sans tracking-[0.25em] uppercase font-semibold">
            <span className="w-1 h-1 rounded-full bg-[#B89B72] animate-pulse" />
            OUR CORE PURPOSE
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight text-[#3E2A20]">
            Our Mission
          </h2>
          <div className="w-16 h-[1px] bg-[#B89B72]/50" />
        </div>

        {/* ================= HERO MISSION STATEMENT CONTAINER ================= */}
        <div className="max-w-4xl mx-auto mb-20 relative">
          {/* Decorative Gold Corner Brackets - Softer look */}
          <div className="absolute top-[-10px] left-[-10px] w-5 h-5 border-t border-l border-[#B89B72]/40" />
          <div className="absolute bottom-[-10px] right-[-10px] w-5 h-5 border-b border-r border-[#B89B72]/40" />
          
          <div className="bg-white border border-[#D0C9BC]/60 rounded-3xl p-8 md:p-12 text-center shadow-[0_15px_40px_rgba(138,154,134,0.03)]">
            {/* Elegant Gold Quotes */}
            <span className="text-5xl md:text-6xl font-serif text-[#B89B72]/30 block mb-2 pointer-events-none">“</span>
            
            <p className="text-xl md:text-2xl sm:leading-relaxed font-sans font-light tracking-wide text-[#3E2A20]/90 max-w-3xl mx-auto">
              To awaken skin's natural radiance through conscious botanical intelligence, guiding individuals toward <span className="text-[#3E2A20] font-normal underline decoration-[#B89B72]/50 decoration-1 underline-offset-4">awakened glow</span>, <span className="text-[#3E2A20] font-normal underline decoration-[#B89B72]/50 decoration-1 underline-offset-4">holistic balance</span>, and truly <span className="text-[#3E2A20] font-normal underline decoration-[#B89B72]/50 decoration-1 underline-offset-4">conscious self-care</span>.
            </p>
            
            <span className="text-5xl md:text-6xl font-serif text-[#B89B72]/30 block mt-0 text-right pointer-events-none">”</span>
          </div>
        </div>

        {/* ================= MISSION BREAKDOWN PILLARS (3-COL GRID) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* PILLAR 1: INSPIRING -> AWAKENING */}
          <div className="group bg-white border border-[#D0C9BC]/50 rounded-2xl p-7 transition-all duration-500 hover:border-[#B89B72]/50 hover:shadow-[0_10px_30px_rgba(184,155,114,0.05)] hover:-translate-y-1">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#8A9A86] group-hover:text-[#6A8F67] transition-colors">// ESSENCE_01</span>
              <div className="w-2 h-2 rounded-full bg-[#D0C9BC] group-hover:bg-[#B89B72] transition-colors shadow-[0_0_8px_rgba(184,155,114,0.4)]" />
            </div>
            {/* Title uses Serif */}
            <h3 className="text-lg font-serif font-medium text-[#3E2A20] mb-3 tracking-wide">Awakening Radiance</h3>
            <p className="text-sm text-[#3E2A20]/70 leading-relaxed font-sans font-light">
              Synthesizing nature’s purest bioactive nutrients to unlock the skin's innate luminosity, transforming standard routines into transformative wellness rituals.
            </p>
          </div>

          {/* PILLAR 2: COMFORTABLE -> BALANCING */}
          <div className="group bg-white border border-[#D0C9BC]/50 rounded-2xl p-7 transition-all duration-500 hover:border-[#B89B72]/50 hover:shadow-[0_10px_30px_rgba(184,155,114,0.05)] hover:-translate-y-1">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#8A9A86] group-hover:text-[#6A8F67] transition-colors">// ESSENCE_02</span>
              <div className="w-2 h-2 rounded-full bg-[#D0C9BC] group-hover:bg-[#B89B72] transition-colors shadow-[0_0_8px_rgba(184,155,114,0.4)]" />
            </div>
            <h3 className="text-lg font-serif font-medium text-[#3E2A20] mb-3 tracking-wide">Holistic Skin Balance</h3>
            <p className="text-sm text-[#3E2A20]/70 leading-relaxed font-sans font-light">
              Restoring and safeguarding the delicate dermal lipid barrier to eliminate inflammation and oxidative stress, ensuring long-term cellular health and comfort.
            </p>
          </div>

          {/* PILLAR 3: PERSONALIZATION -> CONFIDENCE */}
          <div className="group bg-white border border-[#D0C9BC]/50 rounded-2xl p-7 transition-all duration-500 hover:border-[#B89B72]/50 hover:shadow-[0_10px_30px_rgba(184,155,114,0.05)] hover:-translate-y-1">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#8A9A86] group-hover:text-[#6A8F67] transition-colors">// ESSENCE_03</span>
              <div className="w-2 h-2 rounded-full bg-[#D0C9BC] group-hover:bg-[#B89B72] transition-colors shadow-[0_0_8px_rgba(184,155,114,0.4)]" />
            </div>
            <h3 className="text-lg font-serif font-medium text-[#3E2A20] mb-3 tracking-wide">Timeless Confidence</h3>
            <p className="text-sm text-[#3E2A20]/70 leading-relaxed font-sans font-light">
              Empowering individuals with biocompatible solutions that adapt to their unique skin needs, fostering natural grace and unwavering self-assurance at every age.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}