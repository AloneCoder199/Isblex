"use client";
import React from 'react';
import Link from 'next/link';

export default function FeaturedBanner() {
  return (
    <section className="bg-[#0C0C0E] my-16 py-16 px-4 md:px-12 border-y border-zinc-900 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(34,211,238,0.05),transparent_50%)]" />

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Banner Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
            Best Seller Collection
          </h2>
          <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
            Our most-loved smart lighting products.
          </p>
        </div>

        {/* CTA Button */}
        <Link 
          href="/shop/best-sellers"
          className="px-8 py-4 bg-white text-black font-black text-[9px] uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all active:scale-95"
        >
          Shop Best Sellers
        </Link>
      </div>
    </section>
  );
}