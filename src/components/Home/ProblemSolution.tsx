"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface Feature {
  id: number;
  title: string;
  description: string;
  badge: string;
  glowClass: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Instant Spatial Metamorphosis",
    description: "Alter the entire structural mood of your architecture dynamically with a single command line or tap.",
    badge: "Transformation",
    glowClass: "hover:border-[#22D3EE]/30 group-hover:text-[#22D3EE]",
  },
  {
    id: 2,
    title: "16.7M Chromatic Spectrum",
    description: "Engineered with high-density architectural diodes capable of rendering full-spectrum premium RGB color gamuts.",
    badge: "Color Engine",
    glowClass: "hover:border-[#3B82F6]/30 group-hover:text-[#3B82F6]",
  },
  {
    id: 3,
    title: "Monolithic Minimalist Geometry",
    description: "Zero bulk design framework that blends invisibly into corners, emphasizing light fields rather than hardware fixtures.",
    badge: "Industrial Design",
    glowClass: "hover:border-purple-500/30 group-hover:text-purple-500",
  },
  {
    id: 4,
    title: "Cognitive Ecosystem Smart Controls",
    description: "Seamlessly integrates with your active digital pipelines—HomeKit, Alexa, and localized premium mobile app interfaces.",
    badge: "Automation",
    glowClass: "hover:border-emerald-500/30 group-hover:text-emerald-500",
  },
  {
    id: 5,
    title: "Atmospheric Dualism (Game & Rest)",
    description: "Engineered specifically to oscillate between high-velocity tactical gaming setups and ultra-low ambient resting states.",
    badge: "Ergonomics",
    glowClass: "hover:border-amber-500/30 group-hover:text-amber-500",
  },
];

export default function LifestyleSolution() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="bg-[#0A0A0A] text-[#F8FAFC] py-24 px-4 md:px-8 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: THE LIFESTYLE ARCHITECTURAL VIEWPORT */}
          <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[620px] rounded-3xl overflow-hidden border border-[#1E293B] group">
            
            {/* Ambient Background Glow matching the active feature index */}
            <div className={`absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90`} />
            
            {/* Dynamic colored visual backing filter */}
            <div 
              className={`absolute inset-0 z-10 mix-blend-color transition-all duration-1000 opacity-30 pointer-events-none ${
                activeIndex === 0 ? 'bg-[#22D3EE]' :
                activeIndex === 1 ? 'bg-[#3B82F6]' :
                activeIndex === 2 ? 'bg-purple-500' :
                activeIndex === 3 ? 'bg-emerald-500' : 'bg-amber-500'
              }`} 
            />

            <Image
              src="/images/local.png" // Premium modern architecture setup, can change to local path later
              alt="ISBLEX Lifestyle Integration"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-80 scale-100 group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
              unoptimized={true}
            />

            {/* Micro Tech Data Overlay */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-3 bg-[#0A0A0A]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#1E293B]/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#94A3B8]">System Live View</p>
            </div>

            <div className="absolute bottom-8 inset-x-8 z-20 space-y-1 hidden sm:block">
              <p className="text-[10px] font-bold tracking-widest text-[#22D3EE] uppercase">Active Matrix Node</p>
              <h4 className="text-lg font-light text-[#F8FAFC]">ISBLEX Ambient Core Integration</h4>
            </div>

          </div>

          {/* RIGHT SIDE: PREMIUM NARRATIVE & SPEC-MATRIX ACCORDION */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Heading Context */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-[#3B82F6] uppercase tracking-[0.25em]">Engineering Standards</span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight">
                Why <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] to-[#64748B]">ISBLEX framework?</span>
              </h2>
            </div>

            {/* Interactive Feature List Matrix */}
            <div className="space-y-4 w-full">
              {features.map((item, idx) => {
                const isActive = activeIndex === idx;
                
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative p-5 rounded-2xl border transition-all duration-500 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none ${
                      isActive 
                        ? 'bg-[#111827] border-[#1E293B] shadow-[0_15px_30px_rgba(0,0,0,0.4)]' 
                        : 'bg-transparent border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    {/* Left content block */}
                    <div className="space-y-1.5 max-w-xl">
                      <div className="flex items-center gap-3">
                        <span className={`text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-md border ${
                          isActive 
                            ? 'bg-[#0A0A0A] border-[#1E293B] text-[#94A3B8]' 
                            : 'bg-transparent border-transparent text-[#475569]'
                        }`}>
                          {item.badge}
                        </span>
                        <h3 className="text-base md:text-lg font-medium text-[#F8FAFC] tracking-wide">
                          {item.title}
                        </h3>
                      </div>
                      
                      {/* Smooth collapsible description row */}
                      <div className={`transition-all duration-500 overflow-hidden ${
                        isActive ? 'max-h-20 opacity-100 pt-1' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Dynamic Indicator Node */}
                    <div className="flex items-center justify-end">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'border-[#22D3EE]/40 bg-[#22D3EE]/10 text-[#22D3EE]' 
                          : 'border-[#1E293B] text-[#475569]'
                      }`}>
                        <span className="text-[10px] transform group-hover:translate-x-0.5 transition-transform">
                          {isActive ? "✓" : "→"}
                        </span>
                      </div>
                    </div>

                    {/* Left Laser Edge Highlight Stripe */}
                    {isActive && (
                      <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#22D3EE] to-[#3B82F6] rounded-r-md" />
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}