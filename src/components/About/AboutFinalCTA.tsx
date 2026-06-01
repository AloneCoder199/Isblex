"use client";
import React from 'react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section 
      id="final-cta" 
      className="relative bg-[#09090B] text-[#F8FAFC] py-28 lg:py-36 px-4 md:px-8 overflow-hidden select-none border-t border-zinc-900"
    >
      {/* ── BACKGROUND MATRIX RADIANCE ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#22D3EE]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        
        {/* ================= SECTION STATUS BADGE ================= */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-[#22D3EE] text-[9px] font-mono tracking-[0.2em] uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          // STATUS: GATEWAY_READY
        </div>

        {/* ================= CORE HEADER ================= */}
        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
          Ready To Transform <br />
          <span className="text-zinc-500">Your Physical Space?</span>
        </h2>

        <p className="text-xs sm:text-sm text-zinc-500 font-light tracking-[0.1em] max-w-sm mx-auto mb-12 uppercase leading-relaxed">
          Upgrade to the ISBLEX precision illumination matrix. Secure your focus frame today.
        </p>

        {/* ================= INDUSTRIAL NAVIGATION BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          
          <Link 
            href="/shop"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-mono text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
          >
            SHOP COLLECTION
          </Link>

          <Link 
            href="/best-sellers"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-800 text-zinc-400 font-mono text-[10px] font-bold tracking-[0.2em] uppercase hover:border-zinc-500 hover:text-white transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
          >
            EXPLORE BEST SELLERS
          </Link>

        </div>

        {/* ================= TERMINAL FOOTER ================= */}
        <div className="mt-20 flex justify-center items-center gap-6 font-mono text-[8px] text-zinc-700 tracking-[0.2em] uppercase">
          <span>SECURE_ENCRYPTION_ACTIVE</span>
          <span className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span>GLOBAL_SHIPPING_ENABLED</span>
        </div>

      </div>
    </section>
  );
}