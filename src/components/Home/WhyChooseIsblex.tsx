"use client";
import React from 'react';

interface Pillar {
  id: string;
  metric: string;
  title: string;
  description: string;
  specNote: string;
}

const engineeringPillars: Pillar[] = [
  {
    id: "01",
    metric: "CRI 95+",
    title: "True Spectrum Fidelity",
    description: "Traditional LEDs wash out colors. ISBLEX uses high-CRI architectural diodes that render hues with perfect mathematical accuracy, preventing eye fatigue during extended gaming or work sessions.",
    specNote: "Studio-Grade Calibration"
  },
  {
    id: "02",
    metric: "0.0% PWM",
    title: "Zero-Flicker Current Drivers",
    description: "Equipped with custom-engineered solid-state drivers that eliminate micro-flickering entirely. Smooth continuous voltage ensures crisp camera recording and zero neurological strain.",
    specNote: "Continuous Wave Technology"
  },
  {
    id: "03",
    metric: "6063 Al",
    title: "Monolithic Thermals",
    description: "Milled from high-density aerospace-grade aluminum. The entire chassis acts as a passive thermodynamic heat sink, extending diode life cycles past 50,000 operational hours.",
    specNote: "Aircraft-Grade Materials"
  },
  {
    id: "04",
    metric: "OTA Matrix",
    title: "Future-Proof Architecture",
    description: "Our localized core firmware is not static. It updates seamlessly over your digital network pipeline, continuously adding smart home integrations, reactive sound profiles, and color maps.",
    specNote: "Ecosystem Synchronization"
  }
];

export default function WhyChooseIsblex() {
  return (
    <section className="bg-[#0A0A0A] text-[#F8FAFC] py-24 px-6 md:px-8 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1E293B]/40">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#1E293B] text-[10px] font-semibold tracking-[0.2em] text-[#3B82F6] uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              Technical Superiority
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#F8FAFC]">
              The ISBLEX <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#94A3B8] to-[#475569]">Miyar.</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#94A3B8] font-light max-w-xs leading-relaxed md:text-right">
            We do not compromise on structural physics. Every single array is built to bypass industrial consumer benchmarks.
          </p>
        </div>

        {/* 4-COLUMN SYMMETRIC TECHNICAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {engineeringPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative p-6 rounded-2xl bg-[#111827]/40 border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-500 flex flex-col justify-between min-h-[340px] shadow-sm select-none"
            >
              {/* Dynamic Tech Glow Core */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* CARD TOP BAR: Metric Display */}
              <div className="flex items-baseline justify-between w-full border-b border-[#1E293B]/60 pb-4">
                <span className="text-2xl font-mono font-bold tracking-tighter text-[#3B82F6] bg-[#3B82F6]/5 px-2.5 py-0.5 rounded-lg border border-[#3B82F6]/10">
                  {pillar.metric}
                </span>
                <span className="text-[10px] font-mono text-[#475569]">
                  // SYS_{pillar.id}
                </span>
              </div>

              {/* CARD CONTENT */}
              <div className="space-y-2.5 my-6">
                <h3 className="text-lg font-medium text-[#F8FAFC] tracking-tight group-hover:text-[#3B82F6] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* CARD FOOTER: Quality Badge */}
              <div className="mt-auto pt-3 border-t border-[#1E293B]/30 flex items-center justify-between text-[9px] uppercase tracking-widest text-[#475569]">
                <span>Standard Note</span>
                <span className="text-[#94A3B8] font-medium font-mono">{pillar.specNote}</span>
              </div>

              {/* Top Neon Border Trace Line */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#3B82F6]/40 transition-all duration-700" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}