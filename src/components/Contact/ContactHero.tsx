"use client";
import React from 'react';
import Link from 'next/link';

// Headings uses font-serif, body uses font-sans (as defined in global system).

export default function ContactHero() {
  return (
    <section 
      id="contact-hero" 
      className="relative bg-[#FDFBF7] text-[#3E2A20] py-24 lg:py-32 px-4 md:px-8 overflow-hidden border-b border-[#D0C9BC]/50 select-none font-sans"
    >
      {/* Background Organic Glow (Soft rose/gold bloom) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,228,225,0.4),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Beauty Concierge Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D0C9BC] bg-white text-[#B89B72] text-[10px] font-sans tracking-[0.25em] uppercase select-none font-semibold shadow-sm mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72] animate-pulse" />
            BEAUTY CONCIERGE // PERSONAL CARE
        </div>

        {/* High-Value Headline (Luxury Serif) */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#3E2A20] leading-tight max-w-3xl mx-auto mb-10 pb-1">
          Your Journey <br />
          <span className="text-[#B89B72] italic">To Radiance Begins</span>
        </h1>
        
        {/* Wellness-Driven Subtext (Clean sans-serif) */}
        <p className="text-[13px] sm:text-sm md:text-base text-[#3E2A20]/80 font-sans font-light leading-relaxed max-w-2xl mx-auto mb-16 px-4">
          Have questions about creating your perfect organic routine? Whether it’s product advice, order guidance, or holistic skin health consultation, our beauty experts are here to help you reveal your innate glow.
        </p>

        {/* Luxury Action Buttons (Rounded) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            href="mailto:care@prifya.com"
            className="w-full sm:w-auto px-10 py-4 bg-[#8A9A86] text-white font-sans text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#6A8F67] transition-all duration-300 shadow-sm active:scale-95 flex items-center justify-center gap-2"
          >
            CONTACT THE SKINCARE EXPERTS
          </Link>
          <Link 
            href="/products"
            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-[#3E2A20]/40 text-[#3E2A20]/80 font-sans text-xs font-semibold uppercase tracking-widest rounded-full hover:border-[#3E2A20]/70 hover:text-[#3E2A20] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
          >
            EXPLORE ORGANIC COLLECTION
          </Link>
        </div>
      </div>
    </section>
  );
}