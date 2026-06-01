"use client";
import React from 'react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="bg-[#09090B] py-24 px-4 md:px-8 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Banner Heading */}
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
          Need Help Choosing The Right Lighting?
        </h2>
        
        {/* Supporting Text */}
        <p className="text-zinc-500 text-sm md:text-base font-mono tracking-wide mb-10 max-w-lg mx-auto uppercase">
          Explore our smart lighting collection and transform your space today.
        </p>

        {/* CTA Button */}
        <Link 
          href="/shop"
          className="inline-block bg-[#22D3EE] text-black px-10 py-4 font-black text-xs tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] active:scale-95"
        >
          SHOP NOW
        </Link>
      </div>
    </section>
  );
}