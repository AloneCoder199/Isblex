"use client";
import React from 'react';
import Link from 'next/link';

// Assuming Global CSS maps font-serif to a luxury serif like Playfair Display and font-sans to clean sans like Plus Jakarta Sans.

export default function FeaturedBanner() {
  return (
    // Container: Luxury Light Ivory background, soft beige border
    <section className="bg-[#FDFBF7] text-[#3E2A20] my-24 py-20 px-4 md:px-12 border-y border-[#D0C9BC]/50 relative overflow-hidden font-sans selects-none">
      
      {/* Subtle Background Glow: Sage Green hue bloom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(138,154,134,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        
        {/* Banner Text Block */}
        <div className="text-center md:text-left">
          {/* Main Title: Elegant Serif, Medium weight, normal case */}
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-[#3E2A20] mb-3">
            Best Seller Curation
          </h2>
          {/* Subtext: Clean sans-serif, soft cocoa color */}
          <p className="text-[13px] md:text-sm font-sans font-light text-[#3E2A20]/80 tracking-wide leading-relaxed">
            Discover our most beloved organic botanical formulations.
          </p>
        </div>

        {/* CTA Button: Pill-shaped Sage Green button with Wellness Context */}
        <Link 
          href="/#best"
          className="px-10 py-4.5 bg-[#8A9A86] text-white rounded-full font-sans text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#6A8F67] transition-all active:scale-95 shadow-md shadow-[#8A9A86]/20 flex items-center justify-center gap-2"
        >
          Explore Best Sellers
        </Link>
      </div>
    </section>
  );
}