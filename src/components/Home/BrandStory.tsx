"use client";
import React from 'react';
import Image from 'next/image';

export default function BrandStory() {
  return (
    <section className="bg-brand-dark text-foreground py-24 px-4 md:px-8 border-t border-brand-card/40 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* FLEX LAYOUT: STACKS ON MOBILE, SPLITS ON DESKTOP */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          
          {/* THE MANIFESTO TYPOGRAPHY BLOCK */}
          <div className="flex flex-col justify-center space-y-8 lg:w-1/2">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-semibold Skinner-tracking tracking-[0.25em] text-brand-muted uppercase">
                <span>The Science of Nature</span>
                <span className="text-brand-border">|</span>
                <span>Our Philosophy</span>
              </div>
              
              {/* Premium Skincare Clean Serif Heading */}
              <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-wide text-foreground leading-tight">
                Rooted in purity. <br />
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-foreground via-brand-muted to-brand-border">
                  Driven by results.
                </span>
              </h2>
            </div>

            {/* HIGH-IMPACT PREMIUM SKINCARE COPY */}
            <div className="space-y-5 text-sm md:text-base text-foreground/80 font-light leading-relaxed max-w-xl">
              <p>
                True radiance isn’t manufactured in a heavy chemical lab; <strong className="text-foreground font-medium">it is unlocked through organic synergy.</strong> We noticed a pattern of complex routines filled with synthetic fillers that offered quick fixes while compromising long-term dermal health.
              </p>
              <p>
                We chose a different path. By pairing high-performance botanicals like Rosemary and Biotin with advanced clean science, we formulate essentials that respect your skin and hair's natural ecosystem. No compromise, no empty promises—just pure cellular nourishment.
              </p>
            </div>

            {/* BRAND CORE METRICS WITH MINIMAL PREMIUM BORDER */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-brand-card/60">
              <div className="space-y-1">
                <p className="text-[10px] font-medium text-brand-muted uppercase tracking-widest">The Sourcing</p>
                <p className="text-sm font-normal text-foreground">100% Clean Botanical Extracts</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-medium text-brand-muted uppercase tracking-widest">The Promise</p>
                <p className="text-sm font-normal text-foreground">Dermal & Cellular Harmony</p>
              </div>
            </div>

          </div>

          {/* THE LUXURY VISUAL VIEWPORT (Clean & Organic) */}
          <div className="relative w-full h-[340px] sm:h-[450px] lg:h-auto lg:w-1/2 rounded-2xl overflow-hidden border border-brand-border/10 group bg-brand-card/10 shadow-sm">
            
            {/* Minimal Ambient Glow for Premium Skincare Vibe */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />

            {/* Image Tag ready for your public folder asset */}
            <Image
              src="/images/brand.jpeg" // <-- Is path ko apni public folder ki image se replace kar lein jani
              alt="NEXSKIN Clean Skincare Philosophy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-100 group-hover:scale-[1.01] transition-all duration-1000 ease-out"
              priority
            />

            {/* Floating Luxury Brand Tag */}
            <div className="absolute bottom-6 left-6 z-20 text-[9px] tracking-[0.2em] text-foreground/80 uppercase flex items-center gap-2 bg-brand-dark/70 backdrop-blur-md py-2 px-3 rounded-md border border-brand-border/10 font-light">
              <span className="w-1 h-1 rounded-full bg-brand-muted" />
              <span>Prifya // Pure Essence</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}