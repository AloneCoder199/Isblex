"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState<boolean>(false);

  const scrollToTopOrId = (id?: string) => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-foreground pt-10 pb-24 md:py-10 px-4 md:px-8 border-t border-brand-card/40 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
        
        {/* MAIN GRID ARCHITECTURE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 select-none focus:outline-none active:scale-95 transition-transform">
              {!logoError ? (
                <Image
                  src="/images/prifya-logo.png"
                  alt="PRIFYA Official Logo"
                  width={110}
                  height={28}
                  className="object-contain h-auto w-auto transition-opacity duration-200"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-serif font-bold tracking-[0.1em] text-foreground">PRIFYA</span>
                  <span className="text-[10px] font-mono bg-brand-card text-brand-muted px-1.5 py-0.5 rounded uppercase">Labs</span>
                </div>
              )}
            </Link>
            <p className="text-xs text-brand-muted font-light leading-relaxed max-w-xs">
              Premium botanical skincare and hair formulations designed to restore your natural dermal harmony through cellular-grade purity.
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-mono tracking-widest text-brand-muted uppercase">// Explore</h4>
            <ul className="space-y-1.5 text-xs font-light text-brand-muted">
              <li><Link href="/" className="hover:text-brand-border transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-border transition-colors">Our Ethos</Link></li>
              <li><Link href="/products" className="hover:text-brand-border transition-colors">NEXSKIN Collection</Link></li>
              <li><Link href="/faq" className="hover:text-brand-border transition-colors">Science FAQs</Link></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-mono tracking-widest text-brand-muted uppercase">// Care</h4>
            <ul className="space-y-1.5 text-xs font-light text-brand-muted">
              <li><Link href="/contact" className="hover:text-brand-border transition-colors">Support Node</Link></li>
              <li><Link href="/track-order" className="hover:text-brand-border transition-colors">Track Shipment</Link></li>
              <li><Link href="/shipping" className="hover:text-brand-border transition-colors">Delivery Standards</Link></li>
              <li><Link href="/guarantee" className="hover:text-brand-border transition-colors">Purity Guarantee</Link></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-mono tracking-widest text-brand-muted uppercase">// Legal</h4>
            <ul className="space-y-1.5 text-xs font-light text-brand-muted">
              <li><Link href="/privacy" className="hover:text-brand-border transition-colors">Privacy Charter</Link></li>
              <li><Link href="/terms" className="hover:text-brand-border transition-colors">Terms of Service</Link></li>
              <li><Link href="/refunds" className="hover:text-brand-border transition-colors">Refund Protocol</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM UTILITY BAR */}
        <div className="pt-6 border-t border-brand-card/40 flex flex-col sm:flex-row items-center justify-between gap-4 relative">
          <p className="text-[11px] font-light text-brand-muted/60 tracking-wide text-center sm:text-left order-2 sm:order-1">
            &copy; {currentYear} PRIFYA Bio-Labs. All cellular rights reserved.
          </p>

          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 order-1 sm:order-2">
            <div className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
              <div className="px-1.5 py-0.5 border border-brand-card rounded text-[8px] font-bold font-mono text-brand-muted">VISA</div>
              <div className="px-1.5 py-0.5 border border-brand-card rounded text-[8px] font-bold font-mono text-brand-muted">MC</div>
              <div className="px-1.5 py-0.5 border border-brand-card rounded text-[8px] font-bold font-mono text-brand-muted">APAY</div>
            </div>

            <button 
              onClick={() => scrollToTopOrId()}
              className="p-2 rounded-full border border-brand-card bg-brand-dark text-brand-muted hover:text-brand-border hover:border-brand-border/50 active:scale-90 transition-all duration-200 focus:outline-none"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}