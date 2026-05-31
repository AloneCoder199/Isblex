"use client";
import React from 'react';
import Image from 'next/image';

export default function BrandStory() {
  return (
    <section className="bg-[#0A0A0A] text-[#F8FAFC] py-20 px-6 md:px-8 border-t border-[#1E293B] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* MOBILE-FIRST FLEX CONTEXT: STACKS ON MOBILE, SPLITS ON DESKTOP */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">
          
          {/* THE MANIFESTO TYPOGRAPHY BLOCK (Mobile Top / Desktop Left) */}
          <div className="flex flex-col justify-center space-y-6 lg:w-1/2">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.3em] text-[#64748B] uppercase">
                <span>Origin Matrix</span>
                <span className="text-[#3B82F6]">//</span>
                <span>The Genesis</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#F8FAFC] leading-none">
                Born from <br />
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#818cf8]">
                  geometric frustration.
                </span>
              </h2>
            </div>

            {/* HIGH-IMPACT SHORT COPY */}
            <div className="space-y-4 text-sm md:text-base text-[#94A3B8] font-light leading-relaxed">
              <p>
                Most systems simply illuminate a room; <strong className="text-[#F8FAFC] font-medium">ISBLEX alters its structural DNA.</strong> We observed a digital generation confined to traditional, bulky hardware fixtures that disrupted contemporary spatial aesthetics.
              </p>
              <p>
                We rejected the noise. We stripped away the bulk. Our philosophy is mathematical: to seamlessly fuse raw architectural vectors with full-spectrum smart light gamuts, rendering fixtures entirely invisible.
              </p>
            </div>

            {/* BRAND CORE METRICS */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1E293B]/60">
              <div className="space-y-0.5">
                <p className="text-[10px] font-mono text-[#475569] uppercase tracking-wider">The Standard</p>
                <p className="text-xs font-medium text-[#F8FAFC]">Zero Bulk Engineering</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-mono text-[#475569] uppercase tracking-wider">The Vision</p>
                <p className="text-xs font-medium text-[#F8FAFC]">Pure Ambient Fluidity</p>
              </div>
            </div>

          </div>

          {/* THE ARCHITECTURAL CUBE VISUAL (Mobile Bottom / Desktop Right) */}
          <div className="relative w-full h-[260px] sm:h-[340px] lg:h-auto lg:w-1/2 rounded-2xl overflow-hidden border border-[#1E293B] group bg-[#111827]/40">
            
            {/* Soft Ambient Vector Light Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#3B82F6]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#22D3EE]/10 transition-colors duration-700" />

            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800" // Premium digital abstract structure
              alt="ISBLEX Design Language"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-40 group-hover:opacity-50 transition-all duration-1000 ease-out transform group-hover:scale-[1.02]"
              unoptimized={true} // Bypasses optimization loading time
            />

            {/* Floating Blueprint Label */}
            <div className="absolute bottom-6 left-6 z-20 font-mono text-[9px] tracking-[0.2em] text-[#475569] uppercase flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#3B82F6]" />
              <span>Fig_08 // Spatial Canvas Grid</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}