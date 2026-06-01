"use client";
import React from 'react';

export default function WhatMakesUsDifferent() {
  const comparisonData = [
    {
      metric: "// OPTICAL EMISSION FLICKER",
      legacy: "High-Frequency Cycles (Invisible micro-flickers that strain eye neurology)",
      isblex: "0.00% Absolute Latency (Pure linear DC constant-current delivery architecture)",
      highlight: true
    },
    {
      metric: "// LUMEN DECAY LAYER",
      legacy: "Static dropping brilliance after 120 minutes of continuous focus operation",
      isblex: "Smart Dynamic Auto-Stabilization (Maintains 100% constant depth output)",
      highlight: false
    },
    {
      metric: "// WORKSPACE PERSPECTIVE",
      legacy: "Flat, high-glare flood illumination that washes out computer screens",
      isblex: "Volumetric Matrix Depth (Precision 3D direction arrays mapping to user tasks)",
      highlight: false
    },
    {
      metric: "// HARDWARE ECOSYSTEM",
      legacy: "Cheap plastic housings with volatile thermal degradation metrics",
      isblex: "Premium Aircraft-Grade Alloys with integrated passive cooling structure",
      highlight: true
    }
  ];

  return (
    <section 
      id="what-makes-us-different" 
      className="relative bg-[#09090B] text-[#F8FAFC] py-24 lg:py-32 px-4 md:px-8 overflow-hidden border-b border-zinc-900 select-none"
    >
      {/* ── BACKGROUND MATRICES ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#22D3EE]/5 blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= SECTION STRATEGIC HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-20">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-[#22D3EE] text-[10px] font-mono tracking-widest uppercase">
              // ARCHITECTURAL BENCHMARKS //
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none uppercase">
              What Makes <br />
              <span className="bg-gradient-to-r from-[#22D3EE] via-[#0284C7] to-cyan-400 bg-clip-text text-transparent">
                ISBLEX Different.
              </span>
            </h2>
          </div>
          
          <div className="lg:col-span-5 border-l border-zinc-800 pl-6 lg:pl-8">
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              We don’t manufacture basic lamps. We engineer architectural lighting protocols designed to safeguard human cognitive performance, eliminating optical friction completely from your physical space.
            </p>
          </div>
        </div>

        {/* ================= TECHNICAL SPECIFICATION COMPARISON MATRIX ================= */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0C0C0E] shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
          
          {/* MATRIX HEADER GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-800 bg-zinc-950/80 p-4 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            <div className="md:col-span-4">// ARCHITECTURE PARAMETER</div>
            <div className="hidden md:block md:col-span-4 text-zinc-600">STANDARD RETAIL LIGHTS</div>
            <div className="hidden md:block md:col-span-4 text-[#22D3EE]">ISBLEX PROTOCOL SYSTEMS</div>
          </div>

          {/* MATRIX COMPONENT ROWS */}
          <div className="divide-y divide-zinc-900">
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 p-6 items-center transition-colors duration-200 ${
                  row.highlight ? 'bg-[#0E1524]/20' : 'hover:bg-zinc-900/30'
                }`}
              >
                {/* Parameter Code Badge */}
                <div className="md:col-span-4 font-mono text-xs text-zinc-300 font-medium">
                  {row.metric}
                </div>

                {/* Legacy Setup Context */}
                <div className="md:col-span-4 md:pr-6">
                  <span className="block md:hidden text-[9px] font-mono text-zinc-600 uppercase mb-1">Standard Output:</span>
                  <p className="text-xs text-zinc-500 font-light leading-relaxed">{row.legacy}</p>
                </div>

                {/* ISBLEX System Superior Context */}
                <div className="md:col-span-4 relative md:pl-2">
                  <span className="block md:hidden text-[9px] font-mono text-cyan-500/70 uppercase mb-1">ISBLEX Core:</span>
                  <p className={`text-xs font-normal leading-relaxed ${row.highlight ? 'text-white' : 'text-zinc-200'}`}>
                    {row.isblex}
                  </p>
                  
                  {/* Subtle technical glow tag on highlight rows */}
                  {row.highlight && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-4 bg-cyan-400 blur-xs rounded-full hidden lg:block" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* TABLE FOOTER SUMMARY NODE */}
          <div className="bg-zinc-950/60 p-4 text-center border-t border-zinc-900 font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
            📊 CALIBRATED BENCHMARK DATA // PROTOCOL VERSION 4.0 // VERIFIED ACCURACY
          </div>

        </div>

        {/* ================= LOWER HIGHLIGHT INTERACTIVE METRIC CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          
          <div className="border border-zinc-900 bg-gradient-to-b from-[#0C0C0E] to-transparent p-6 rounded-xl">
            <div className="text-2xl font-black text-[#22D3EE] font-mono mb-1">0.00%</div>
            <div className="text-xs text-zinc-300 font-bold mb-2 uppercase tracking-wide">Flicker Latency Rate</div>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              Standard commercial LEDs create unconscious neurological fatigue through steady strobe frequencies. ISBLEX drops this parameter to zero.
            </p>
          </div>

          <div className="border border-zinc-900 bg-gradient-to-b from-[#0C0C0E] to-transparent p-6 rounded-xl">
            <div className="text-2xl font-black text-white font-mono mb-1">3D Matrix</div>
            <div className="text-xs text-zinc-300 font-bold mb-2 uppercase tracking-wide">Volumetric Architecture</div>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              We convert physical environments into high-end digital matrices, bouncing light rays away from screen panels and directly into active focus zones.
            </p>
          </div>

          <div className="border border-zinc-900 bg-gradient-to-b from-[#0C0C0E] to-transparent p-6 rounded-xl sm:col-span-2 lg:col-span-1">
            <div className="text-2xl font-black text-zinc-400 font-mono mb-1">100%</div>
            <div className="text-xs text-zinc-300 font-bold mb-2 uppercase tracking-wide">Premium Identity Sync</div>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              Every system is customized down to the millimeter to perfectly align with your engineering rig, workspace aesthetic, and workflow parameters.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}