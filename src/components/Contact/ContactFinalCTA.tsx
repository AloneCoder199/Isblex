"use client";
import React from 'react';
import Link from 'next/link';

// Note: Ensure fonts (Playfair Display and Plus Jakarta Sans) are imported in layout.
// Global mapping assumed: font-serif -> Playfair Display, font-sans -> Plus Jakarta Sans.

export default function FinalCTA() {
  return (
    <section className="bg-background text-foreground py-24 sm:py-32 px-4 md:px-8 border-b border-brand-card/50 select-none overflow-hidden relative font-sans">
      {/* Background Organic Accent (Soft Sage Glow) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(138,154,134,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Banner Heading (Luxury Serif, titles font) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-foreground leading-tight max-w-3xl mx-auto mb-8">
          Need Guidance Finding <br />
          <span className="italic text-brand-cyan">Your Perfect Ritual?</span>
        </h2>
        
        {/* Supporting Text (Clean sans-serif, soft cocoa color) */}
        <p className="text-foreground/80 text-sm md:text-base font-sans font-light leading-relaxed max-w-lg mx-auto mb-16 px-4">
          Explore Prifya&apos;s conscious formulations and begin your journey toward radiant, healthy, and luminous skin today.
        </p>

        {/* CTA Button (Rounded, Sage Green, sans font) */}
        <Link 
          href="/products"
          className="inline-block bg-brand-cyan text-white px-10 py-4 font-sans text-xs font-semibold rounded-full hover:bg-brand-muted hover:shadow-lg transition-all duration-300 active:scale-95 shadow-md shadow-brand-cyan/20 uppercase"
        >
          SHOP THE COLLECTION
        </Link>
      </div>
    </section>
  );
}