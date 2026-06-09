"use client";
import React from 'react';
import Link from 'next/link';

// Note: Global CSS mein variable defining zaroori hai based on previous context:
// :root {
//   --font-serif: 'Playfair Display', serif;
//   --font-sans: 'Plus Jakarta Sans', sans-serif;
// }
// Headings use font-serif, body uses font-sans.

export default function FinalCTA() {
  return (
    <section 
      id="final-cta" 
      className="relative bg-[#FDFBF7] text-[#3E2A20] py-28 lg:py-36 px-4 md:px-8 overflow-hidden select-none border-t border-[#D0C9BC]/50 font-sans"
    >
      {/* ── BACKGROUND CONSCIOUS RADIANCE (Soft Sage/Gold bloom) ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B89B72]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        
        {/* ================= SECTION STATUS BADGE ================= */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D0C9BC] bg-white text-[#8A9A86] text-[10px] font-sans tracking-[0.25em] uppercase select-none font-semibold shadow-sm mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72] animate-pulse" />
          STATUS: GATEWAY_READY // CONSCIOUS GLOW ACTIVATED
        </div>

        {/* ================= CORE HEADER (Luxury Serif) ================= */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#3E2A20] leading-tight max-w-3xl mx-auto mb-10">
          Ready To Reveal <br />
          <span className="text-[#B89B72] italic">Your Eternal Radiance?</span>
        </h2>

        {/* ================= PARAGRAPH (Wellness Context) ================= */}
        <p className="text-[13px] sm:text-sm md:text-base text-[#3E2A20]/80 font-sans font-light leading-relaxed max-w-xl mx-auto mb-16 px-4">
          Experience the Prifya difference. Embrace conscious skincare rituals that honor your skin&apos;s innate luminosity. Secure your timeless glow today.
        </p>

        {/* ================= LUXURY NAVIGATION BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          
          <Link 
            href="/products"
            className="w-full sm:w-auto px-10 py-4 bg-[#8A9A86] text-white font-sans text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#6A8F67] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 shadow-md"
          >
            SHOP COLLECTION
          </Link>

          <Link 
            href="/#best"
            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-[#3E2A20]/40 text-[#3E2A20]/80 font-sans text-xs font-semibold uppercase tracking-widest rounded-full hover:border-[#3E2A20]/70 hover:text-[#3E2A20] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
          >
            EXPLORE BEST SELLERS
          </Link>

        </div>

        {/* ================= TERMINAL FOOTER (Clean sans-serif) ================= */}
        <div className="mt-24 text-center font-sans text-[10px] text-[#3E2A20]/60 tracking-[0.25em] uppercase font-semibold backdrop-blur-sm bg-white/30 inline-block left-1/2 relative -translate-x-1/2 px-4 py-1 rounded-full border border-[#D0C9BC]/20">
          // TRANSFORMATION FULLY REALIZED // ZERO GUILT // MAXIMUM RADIANCE
        </div>

      </div>
    </section>
  );
}