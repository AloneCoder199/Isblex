"use client";
import React from 'react';
import Link from 'next/link'
export default function FinalCTA() {
  const handleCheckoutRedirection = () => {
    // Add checkout or cart pipeline redirection logic here
    console.log("Initializing premium botanical checkout pipeline...");
  };

  return (
    <section className="bg-brand-dark text-foreground py-28 px-4 md:px-8 border-t border-brand-card/40 relative overflow-hidden font-sans">
      
      {/* PREMIUM SOFT GLOW & BOTANICAL AMBIENCE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-brand-border/5 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 right-0 w-80 h-80 bg-brand-card/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 px-2">
        
        {/* LAB BATCH STATUS BADGE */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-brand-card/20 border border-brand-border/20 text-[9px] font-mono tracking-[0.3em] text-brand-muted uppercase mx-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-border/40 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-muted" />
          </span>
          Batch Status // Fresh Allocation Open
        </div>

        {/* HIGH-IMPACT LUXURY SERIF HEADLINE */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight leading-[1.15] text-foreground">
            Begin Your <br className="sm:hidden" /> True Cellular <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-foreground via-brand-muted to-brand-border">
              Transformation.
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-brand-muted font-light max-w-xl mx-auto leading-relaxed">
            Stop feeding your skin and hair synthetic commercial fillers. Secure your pristine bottle from the PRIFYA NEXSKIN collection today, and unlock the raw potency of our cold-extracted Rosemary & Biotin framework.
          </p>
        </div>

        {/* ULTRA-CLEAN LUXURY BUTTON CODES */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
  
  {/* PRIMARY CALL ACTION */}
  <Link href="/checkout" className="w-full sm:w-auto">
    <button
      className="w-full sm:w-auto px-8 py-4 rounded-xl bg-foreground text-brand-dark text-xs font-semibold tracking-wider uppercase hover:bg-brand-muted hover:text-foreground hover:shadow-[0_0_30px_rgba(var(--brand-border-rgb),0.2)] transition-all duration-500 transform active:scale-[0.98] select-none"
    >
      Claim Your Formula →
    </button>
  </Link>

  {/* SECONDARY NAVIGATION ACTION */}
  <Link href="/contact" scroll={true} className="w-full sm:w-auto">
    <button
      className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card/10 border border-brand-border/20 text-brand-muted text-xs font-medium tracking-wider uppercase hover:text-foreground hover:border-brand-border/40 transition-all duration-300 active:scale-[0.98] select-none"
    >
      Contact
    </button>
  </Link>
  
</div>

        {/* TRUST SIGNALS MATRICES */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-12 border-t border-brand-card/30 max-w-2xl mx-auto text-left">
          <div className="space-y-1">
            <p className="text-[10px] font-mono text-brand-muted/40 uppercase tracking-widest">// Dispatch</p>
            <p className="text-xs font-medium text-foreground sm:tracking-wide">Nationwide Delivery</p>
          </div>
          <div className="space-y-1 border-x border-brand-card/30 px-2 sm:px-6">
            <p className="text-[10px] font-mono text-brand-muted/40 uppercase tracking-widest">// Assurance</p>
            <p className="text-xs font-medium text-foreground sm:tracking-wide">Pure Bio-actives</p>
          </div>
          <div className="space-y-1 pl-2 sm:pl-4">
            <p className="text-[10px] font-mono text-brand-muted/40 uppercase tracking-widest">// Security</p>
            <p className="text-xs font-medium text-foreground sm:tracking-wide">Encrypted Gateway</p>
          </div>
        </div>

      </div>
    </section>
  );
}