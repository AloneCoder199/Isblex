"use client";

import React from 'react';

export default function SkinGuarantee() {
  return (
    <section className="bg-[#FAF8F5] py-20 px-6 font-sans selection:bg-[#E3ECE6] selection:text-[#3A4D3F] mt-10">
      <div className="max-w-4xl mx-auto bg-white border border-[#EBE7E0] rounded-3xl p-8 md:p-14 shadow-[0_10px_50px_rgba(78,97,81,0.03)] relative overflow-hidden">
        
        {/* Subtle Decorative Botanical Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#E3ECE6]/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FAF8F5] rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-10 text-center md:text-left">
          
          {/* Top Badge */}
          <div className="flex justify-center md:justify-start">
            <span className="text-[10px] text-[#A69276] tracking-[0.3em] font-semibold uppercase bg-[#FAF8F5] px-4 py-1.5 rounded-full border border-[#EBE7E0]">
              Our Golden Absolute Promise
            </span>
          </div>

          {/* Main Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Header Typography */}
            <div className="md:col-span-7 space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-stone-900 tracking-wide leading-tight">
                The Prifya Dermal <br />
                <span className="text-[#4E6151] font-normal italic">Compatibility Guarantee</span>
              </h2>
              <p className="text-sm text-stone-500 leading-relaxed max-w-xl">
                We design our botanical micro-batches with absolute purity. If a formulation does not harmoniously integrate with your unique skin matrix or cause unexpected sensitivity, our concierge house will gracefully resolve it.
              </p>
            </div>

            {/* Seal / Icon Decorative */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="h-32 w-32 rounded-full border border-[#4E6151]/20 p-2 flex items-center justify-center bg-[#FAF8F5]">
                <div className="h-full w-full rounded-full border border-dashed border-[#4E6151]/40 flex flex-col items-center justify-center text-center p-3">
                  <span className="text-[9px] font-sans font-bold tracking-widest text-[#A69276] uppercase">100% Pure</span>
                  <span className="font-serif italic text-stone-800 text-lg my-0.5">Dermal</span>
                  <span className="text-[8px] font-sans tracking-wider text-[#4E6151] uppercase font-medium">Assured</span>
                </div>
              </div>
            </div>

          </div>

          <hr className="border-[#EBE7E0]" />

          {/* Core Pillars / Three Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            
            <div className="space-y-2 border-l border-[#EBE7E0] pl-4">
              <h3 className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
                01. Hyper-Clean Shield
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Zero synthetic fillers or parabens. Every fluid droplet protects and nourishes sensitive skin barriers.
              </p>
            </div>

            <div className="space-y-2 border-l border-[#EBE7E0] pl-4">
              <h3 className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
                02. 30-Day Ritual Test
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Introduce the active formulas to your regime risk-free. Your satisfaction window spans a full month.
              </p>
            </div>

            <div className="space-y-2 border-l border-[#EBE7E0] pl-4">
              <h3 className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
                03. Flawless Reversal
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                In the rare case of incompatibility, receive a complete reversal refund or a curated formulation alternative.
              </p>
            </div>

          </div>

          {/* Action Note */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF8F5] p-5 rounded-2xl border border-[#EBE7E0]">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2 bg-[#E3ECE6] rounded-xl text-[#4E6151] hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-stone-800">Shop with absolute peace of mind</p>
                <p className="text-[11px] text-stone-400">Your dermal wellness is our studio’s highest priority.</p>
              </div>
            </div>
            <span className="text-[10px] font-sans text-[#A69276] uppercase tracking-widest font-semibold border-b border-[#A69276] pb-0.5 cursor-help">
              Read Ritual Accord Agreement
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}