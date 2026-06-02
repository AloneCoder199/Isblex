"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TransformationCTA() {
  return (
    <section className="bg-[#09090B] py-24 px-4 md:px-8 border-t border-zinc-900 overflow-hidden relative">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.05),transparent_60%)]" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
          Ready To Upgrade Your Space?
        </h2>
        
        <p className="text-zinc-500 text-sm md:text-base font-mono tracking-wide mb-10 max-w-sm mx-auto uppercase">
          Explore premium smart lighting and create the perfect atmosphere.
        </p>

        <Link 
          href="/shop"
          className="inline-block bg-[#22D3EE] text-black px-12 py-4 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.2)] hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] active:scale-95"
        >
          Add To Cart
        </Link>
      </motion.div>
    </section>
  );
}