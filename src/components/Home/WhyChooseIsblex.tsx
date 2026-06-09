"use client";
import React from 'react';

interface Pillar {
  id: string;
  metric: string;
  title: string;
  description: string;
  specNote: string;
}

const formulationPillars: Pillar[] = [
  {
    id: "01",
    metric: "98%",
    title: "Bio-Active Bioavailability",
    description: "Traditional formulations sit lazily on the surface. PRIFYA engineered micro-vectors carry active botanicals deep into the dermal matrix, maximizing cellular absorption without leaving oily residues.",
    specNote: "Dermal Delivery Framework"
  },
  {
    id: "02",
    metric: "0.0%",
    title: "Zero Synthetic Fillers",
    description: "Formulated completely without parabens, silicones, or diluted industrial binders. Every single molecule in our fluid matrix is selected to nurture your skin’s natural lipid barrier.",
    specNote: "100% Pure Purity Standard"
  },
  {
    id: "03",
    metric: "Pure",
    title: "Rosemary & Biotin Synergy",
    description: "A cold-extracted clinical fusion designed to kickstart dormant follicles and balance skin health. It stimulates microcirculation seamlessly, delivering dense nourishment over extended cycles.",
    specNote: "High-Performance Botanicals"
  },
  {
    id: "04",
    metric: "pH 5.5",
    title: "Acid Mantle Stabilization",
    description: "Our active formulas do not alter your natural barrier. They lock into the precise physiological pH sweet spot, preventing environmental sensitivity and reinforcing daily cellular resilience.",
    specNote: "Ecosystem Synchronization"
  }
];

export default function WhyChoosePrifya() {
  return (
    <section className="bg-brand-dark text-foreground py-24 px-4 md:px-8 border-t border-brand-card/40 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-card/40">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card/20 border border-brand-border/20 text-[10px] font-semibold tracking-[0.25em] text-brand-muted uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-border animate-pulse" />
              Clinical Integrity
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-tight text-foreground">
              The PRIFYA <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-foreground via-brand-muted to-brand-border">Miyar.</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-foreground/70 font-light max-w-sm leading-relaxed md:text-right">
            We do not compromise on cellular biology. Every single formula is built to bypass mass-market commercial dilutions.
          </p>
        </div>

        {/* 4-COLUMN SYMMETRIC SKIN-SCIENCE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {formulationPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative p-6 rounded-2xl bg-brand-card/10 border border-brand-border/20 hover:border-brand-border/40 transition-all duration-500 flex flex-col justify-between min-h-[340px] shadow-sm select-none"
            >
              {/* Organic Soft Glow (Replaced Hard Tech Glow) */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-border/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* CARD TOP BAR: Skincare Metric Display */}
              <div className="flex items-baseline justify-between w-full border-b border-brand-card/40 pb-4">
                <span className="text-xl font-mono font-semibold tracking-tighter text-foreground bg-brand-card/30 px-2.5 py-0.5 rounded-lg border border-brand-border/20">
                  {pillar.metric}
                </span>
                <span className="text-[10px] font-mono text-brand-muted">
                  // FORM_{pillar.id}
                </span>
              </div>

              {/* CARD CONTENT */}
              <div className="space-y-2.5 my-6">
                <h3 className="text-lg font-serif font-normal text-foreground tracking-tight group-hover:text-brand-muted transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-xs text-foreground/80 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* CARD FOOTER: Quality Badge */}
              <div className="mt-auto pt-3 border-t border-brand-card/30 flex items-center justify-between text-[9px] uppercase tracking-widest text-brand-muted">
                <span>Formulation Note</span>
                <span className="text-foreground font-medium font-mono">{pillar.specNote}</span>
              </div>

              {/* Top Organic Highlight Line Trace */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-brand-border/30 transition-all duration-700" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}