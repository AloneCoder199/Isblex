"use client";
import React from 'react';

export default function FinalCTA() {
  const handleDeployment = () => {
    // Add checkout or cart pipeline redirection logic here
    console.log("Initializing Spatial Deployment pipeline...");
  };

  return (
    <section className="bg-[#0A0A0A] text-[#F8FAFC] py-28 px-4 md:px-8 border-t border-[#1E293B] relative overflow-hidden">
      
      {/* FUTURISTIC BACKGROUND RADAR & NEON BLUR LIGHTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#3B82F6]/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 right-0 w-80 h-80 bg-[#22D3EE]/5 blur-[120px] rounded-full" />
        {/* Abstract Architectural Tech Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 px-2">
        
        {/* PROTOCOL STATUS BADGE */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#111827] border border-[#1E293B] text-[9px] font-mono tracking-[0.3em] text-[#22D3EE] uppercase mx-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          System Status // Production Open
        </div>

        {/* HIGH-IMPACT ARCHITECTURAL CORE HEADLINE */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] text-[#F8FAFC]">
            Initialize <br className="sm:hidden" /> Your Spatial <br />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#818cf8]">
              Genesis Ecosystem.
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#94A3B8] font-light max-w-xl mx-auto leading-relaxed">
            The prototype phase is officially closed. Cease living in standard, washed-out illumination nodes. Secure your monolithic ISBLEX array and alter the structural physics of your habitat today.
          </p>
        </div>

        {/* ULTRA-CLEAN MOBILE COMPLIANT ACTION PIPELINE */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
          
          {/* PRIMARY CALL ACTION */}
          <button
            onClick={handleDeployment}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F8FAFC] text-[#0A0A0A] text-xs font-semibold tracking-wider uppercase hover:bg-[#22D3EE] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500 transform active:scale-[0.98] select-none"
          >
            Deploy Core Array →
          </button>

          {/* SECONDARY TECHNICAL SPECS ACTION */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#111827]/60 border border-[#1E293B] text-[#94A3B8] text-xs font-medium tracking-wider uppercase hover:text-[#F8FAFC] hover:border-[#F8FAFC]/30 transition-all duration-300 active:scale-[0.98] select-none"
          >
            Review Specs //
          </button>
          
        </div>

        {/* TRUST SIGNALS MATRICES */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-12 border-t border-[#1E293B]/40 max-w-2xl mx-auto text-left">
          <div className="space-y-1">
            <p className="text-[10px] font-mono text-[#475569] uppercase tracking-widest">// Dispatch</p>
            <p className="text-xs font-medium text-[#F8FAFC] sm:tracking-wide">Global Coordinates</p>
          </div>
          <div className="space-y-1 border-x border-[#1E293B]/40 px-2 sm:px-6">
            <p className="text-[10px] font-mono text-[#475569] uppercase tracking-widest">// Warranty</p>
            <p className="text-xs font-medium text-[#F8FAFC] sm:tracking-wide">2-Year Monolithic</p>
          </div>
          <div className="space-y-1 pl-2 sm:pl-4">
            <p className="text-[10px] font-mono text-[#475569] uppercase tracking-widest">// Protocol</p>
            <p className="text-xs font-medium text-[#F8FAFC] sm:tracking-wide">Secure Checkout</p>
          </div>
        </div>

      </div>
    </section>
  );
}