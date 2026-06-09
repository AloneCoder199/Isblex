"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Note: Ensure Playfair Display (Serif) and Plus Jakarta Sans (Sans) are imported in layout.

export default function TransformationCTA() {
  return (
    // Section: Luxury Cream background, soft beige border
    <section className="bg-[#FDFBF7] py-28 px-6 md:px-12 border-t border-[#D0C9BC]/50 overflow-hidden relative font-sans select-none">
      
      {/* Soft Gold Background Accent (Radiance Glow) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.03),transparent_60%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center relative z-10 space-y-10"
      >
        {/* Heading: Elegant Serif, Deep Espresso color */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[#3E2A20] leading-[1.15] max-w-2xl mx-auto">
          Ready to Reveal <span className="italic font-normal text-[#B89B72]">Your Eternal Radiance?</span>
        </h2>

        {/* Description: Clean Sans-serif, Muted Cocoa color */}
        <p className="text-[#3E2A20]/80 text-base md:text-lg font-sans font-light tracking-wide max-w-xl mx-auto leading-relaxed">
          Discover holistic skincare rituals and embrace your most luminous, healthy complexion decarded by nature.
        </p>

        {/* CTA Button: Pill-shaped Sage Green button with brand sans font */}
        <Link
          href="/contact"
          className="inline-block bg-[#8A9A86] text-white px-14 py-5 text-xs font-sans font-semibold uppercase tracking-[0.2em] rounded-full hover:bg-[#6A8F67] transition-all duration-300 shadow-md shadow-[#8A9A86]/20 active:scale-95"
        >
          Contact Now
        </Link>
      </motion.div>
    </section>
  );
}