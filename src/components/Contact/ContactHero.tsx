"use client";
import React from 'react';
import Link from 'next/link';

export default function ContactHero() {
  return (
    <section className="relative bg-[#09090B] text-[#F8FAFC] py-24 lg:py-32 px-4 md:px-8 overflow-hidden border-b border-zinc-900">
      {/* Background Matrix Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        
        {/* Node Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-[#22D3EE] text-[9px] font-mono tracking-[0.2em] uppercase mb-8">
          // ACCESS_POINT: TECHNICAL_CALIBRATION
        </div>

        {/* High-Value Headline */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
          Architectural <br />
          <span className="text-zinc-500">Support Node</span>
        </h1>
        
        {/* Value-Driven Subtext */}
        <p className="text-sm md:text-base text-zinc-400 font-light tracking-[0.05em] mb-12 max-w-xl mx-auto uppercase leading-relaxed">
          Need precision calibration for your workspace? Whether it’s integration support, order diagnostics, or custom lighting topology advice, our engineering team is here to ensure your ISBLEX system operates at 0.00% friction.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            href="mailto:support@isblex.com"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-mono text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-all active:scale-95"
          >
            INITIATE SUPPORT TICKET
          </Link>
          <Link 
            href="/shop"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-800 text-zinc-400 font-mono text-[10px] font-bold tracking-[0.2em] uppercase hover:border-zinc-500 hover:text-white transition-all active:scale-95"
          >
            BROWSE HARDWARE CATALOG
          </Link>
        </div>
      </div>
    </section>
  );
}