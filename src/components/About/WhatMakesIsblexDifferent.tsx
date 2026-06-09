"use client";
import React from 'react';

export default function WhatMakesUsDifferent() {
  const comparisonData = [
    {
      metric: "// CELLULAR BIO-AVAILABILITY latency",
      legacy: "Delayed Absorption (Large molecules sitting superficially, minimal cell signaling)",
      prifya: "Instant Dermal Sync (Micro-encapsulated vectors for immediate cellular uptake)",
      highlight: true
    },
    {
      metric: "// INGREDIENT POTENCY DECAY LAYER",
      legacy: "Rapid Oxidation (Loss of 60% efficacy within 30 minutes of exposure)",
      prifya: "Dynamic Auto-Stabilization (Maintains 100% clinical potency throughout wear)",
      highlight: false
    },
    {
      metric: "// DERMAL ABSORPTION MAPPING",
      legacy: "Surface Buildup (Heavy silicones that clog pores and wash out natural glow)",
      prifya: "Targeted Vector Depth (Precision mapping delivery to active basal task zones)",
      highlight: false
    },
    {
      metric: "// FORMULATION ECOSYSTEM",
      legacy: "Synthetic Fillers with volatile pH and potential allergen metrics",
      prifya: "Bio-Compatible Alloys (Botanical basis with pharmaceutical-grade stability vectors)",
      highlight: true
    }
  ];

  return (
    <section 
      id="what-makes-us-different" 
      className="relative bg-[#FDFBF7] text-[#3E2A20] py-24 lg:py-32 px-4 md:px-8 overflow-hidden border-b border-[#D0C9BC]/40 select-none"
    >
      {/* ── BACKGROUND ORGANIC ACCENTS ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#8A9A86]/5 blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= SECTION STRATEGIC HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-20">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B89B72]/30 bg-[#8A9A86]/5 text-[#6A8F67] text-[10px] font-sans tracking-widest uppercase font-semibold">
              // DERMATOLOGICAL BENCHMARKS //
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight leading-tight text-[#3E2A20]">
              What Makes <br />
              <span className="bg-gradient-to-r from-[#8A9A86] via-[#B89B72] to-[#6A8F67] bg-clip-text text-transparent italic">
                Prifya Different.
              </span>
            </h2>
          </div>
          
          <div className="lg:col-span-5 border-l border-[#D0C9BC] pl-6 lg:pl-8">
            <p className="text-xs sm:text-sm text-[#3E2A20]/70 font-light leading-relaxed font-sans">
              We don’t manufacture basic cosmetics. We engineer architectural skincare protocols designed to safeguard human dermal performance, eliminating biological friction completely from your cellular environment.
            </p>
          </div>
        </div>

        {/* ================= TECHNICAL SPECIFICATION COMPARISON MATRIX ================= */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-[#D0C9BC]/60 bg-white shadow-[0_20px_60px_rgba(138,154,134,0.05)]">
          
          {/* MATRIX HEADER GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#D0C9BC]/60 bg-[#FDFBF7] p-4 font-sans text-[10px] tracking-widest text-[#3E2A20]/50 uppercase font-semibold">
            <div className="md:col-span-4">// BIO-ENGINEERING PARAMETER</div>
            <div className="hidden md:block md:col-span-4 text-[#3E2A20]/70">STANDARD RETAIL SKINCARE</div>
            <div className="hidden md:block md:col-span-4 text-[#6A8F67]">PRIFYA PROTOCOL SYSTEMS</div>
          </div>

          {/* MATRIX COMPONENT ROWS */}
          <div className="divide-y divide-[#D0C9BC]/40">
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 p-6 items-center transition-colors duration-200 ${
                  row.highlight ? 'bg-[#8A9A86]/5' : 'hover:bg-[#FDFBF7]'
                }`}
              >
                {/* Parameter Code Badge */}
                <div className="md:col-span-4 font-sans text-xs text-[#3E2A20] font-medium tracking-tight">
                  {row.metric}
                </div>

                {/* Legacy Setup Context */}
                <div className="md:col-span-4 md:pr-6">
                  <span className="block md:hidden text-[9px] font-sans text-[#3E2A20]/40 uppercase mb-1 font-semibold">Standard Output:</span>
                  <p className="text-xs text-[#3E2A20]/60 font-light leading-relaxed font-sans">{row.legacy}</p>
                </div>

                {/* Prifya System Superior Context */}
                <div className="md:col-span-4 relative md:pl-2">
                  <span className="block md:hidden text-[9px] font-sans text-[#8A9A86] uppercase mb-1 font-semibold">Prifya Core:</span>
                  <p className={`text-xs font-normal font-sans leading-relaxed ${row.highlight ? 'text-[#3E2A20]' : 'text-[#3E2A20]/80'}`}>
                    {row.prifya}
                  </p>
                  
                  {/* Subtle technical glow tag on highlight rows (Gold blur) */}
                  {row.highlight && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-4 bg-[#B89B72] blur-xs rounded-full hidden lg:block" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* TABLE FOOTER SUMMARY NODE */}
          <div className="bg-[#FDFBF7] p-4 text-center border-t border-[#D0C9BC]/60 font-sans text-[9px] text-[#3E2A20]/50 uppercase tracking-widest font-semibold">
            📊 CALIBRATED CLINICAL DATA // BIO-PROTOCOL VERSION 4.0 // LAB VERIFIED ACCURACY
          </div>

        </div>

        {/* ================= LOWER HIGHLIGHT METRIC CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 overflow-visible">
          
          <div className="border border-[#D0C9BC]/70 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl font-serif font-medium text-[#6A8F67] mb-1">0.0%</div>
            <div className="text-xs text-[#3E2A20] font-bold mb-2 uppercase font-sans tracking-wide">Oxidative Latency Rate</div>
            <p className="text-xs text-[#3E2A20]/70 font-light font-sans leading-relaxed">
              Standard vitamin complexes degrade upon dermal contact, creating asynchronous nutrient signaling. Prifya micro-vectors drop this instability to zero.
            </p>
          </div>

          <div className="border border-[#D0C9BC]/70 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl font-serif font-medium text-[#3E2A20] mb-1">Dermal Matrix</div>
            <div className="text-xs text-[#3E2A20] font-bold mb-2 uppercase font-sans tracking-wide">Volumetric Architecture</div>
            <p className="text-xs text-[#3E2A20]/70 font-light font-sans leading-relaxed">
              We convert botanical extracts into high-end bioactive matrices, bouncing essential fatty acids away from the surface and directly into active dermal focus zones.
            </p>
          </div>

          <div className="border border-[#D0C9BC]/70 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
            <div className="text-3xl font-serif font-medium text-[#B89B72] mb-1">100%</div>
            <div className="text-xs text-[#3E2A20] font-bold mb-2 uppercase font-sans tracking-wide">Premium Identity Sync</div>
            <p className="text-xs text-[#3E2A20]/70 font-light font-sans leading-relaxed">
              Every formula is customized down to the cellular millimeter to perfectly align with your dermal engineering rig, personal aesthetic, and metabolic parameters.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}