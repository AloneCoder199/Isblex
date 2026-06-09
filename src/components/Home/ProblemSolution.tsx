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
    title: "Advanced Dermal Bio-Delivery",
    description: "Engineered to bypass the surface barrier, transporting high-potency micro-nutrients deep into cellular matrix for immediate rejuvenation.",
    badge: "Absorption Tech",
    glowClass: "hover:border-[#D4AF37]/30 group-hover:text-[#D4AF37]", // Luxury Gold Accent
  },
  {
    id: 2,
    title: "Pure Phytochemical Synergy",
    description: "A meticulously calibrated matrix of cold-extracted Rosemary oils, active Biotin, and pure Vitamin gradients working in perfect harmony.",
    badge: "Botanical Matrix",
    glowClass: "hover:border-[#3D6E55]/30 group-hover:text-[#3D6E55]", // Botanical Green Accent
  },
  {
    id: 3,
    title: "Zero-Toxin Conscious Clean Luxury",
    description: "Formulated with zero synthetic fillers, parabens, or sulfates. Clean clinical beauty manufactured under pristine batch control.",
    badge: "Purity Standard",
    glowClass: "hover:border-[#C49A88]/30 group-hover:text-[#C49A88]", // Rose Nude Accent
  },
  {
    id: 4,
    title: "Chrono-Adaptive Barrier Support",
    description: "Synchronizes dynamically with your skin's biological clock—providing shielding defense by day and accelerated cell renewal at night.",
    badge: "Circadian Care",
    glowClass: "hover:border-[#8E7C6E]/30 group-hover:text-[#8E7C6E]", // Velvet Earth Accent
  },
  {
    id: 5,
    title: "Dual-Action Follicle Activation",
    description: "Oscillates seamlessly between deep scalp vascular activation and hair shaft cuticle smoothing for ultimate density and reflective shine.",
    badge: "Synergy Core",
    glowClass: "hover:border-[#E3C1B4]/30 group-hover:text-[#E3C1B4]", // Silk Pearl Accent
  },
];

export default function BrandIdentityShowcase() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="bg-brand-dark text-foreground py-24 px-4 md:px-8 border-t border-brand-card/40">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: LUXURY VISUAL STAGE */}
          <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[620px] rounded-3xl overflow-hidden border border-brand-card/40 group bg-black/20">
            
            {/* Elegant vignette layout overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90" />
            
            {/* Dynamic botanical and formulation soft hue backing filter */}
            <div 
              className={`absolute inset-0 z-10 mix-blend-color transition-all duration-1000 opacity-25 pointer-events-none ${
                activeIndex === 0 ? 'bg-[#D4AF37]' : // Gold
                activeIndex === 1 ? 'bg-[#3D6E55]' : // Green
                activeIndex === 2 ? 'bg-[#C49A88]' : // Rose Nude
                activeIndex === 3 ? 'bg-[#8E7C6E]' : // Earth
                'bg-[#E3C1B4]' // Pearl
              }`} 
            />

            <Image
              src="/images/lab.png" // Aap is local image path par clean product aesthetic shot laga sakte hain
              alt="Prifya Formulation Lab Excellence"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-75 scale-100 group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
              unoptimized={true}
            />

            {/* Premium Lab Live Data Overlay */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-3 bg-brand-dark/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-border/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-border animate-pulse" />
              <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-brand-muted">Prifya Bio-Labs</p>
            </div>

            <div className="absolute bottom-8 inset-x-8 z-20 space-y-1 hidden sm:block">
              <p className="text-[10px] font-bold tracking-widest text-brand-muted uppercase">Efficacy Matrix</p>
              <h4 className="text-lg font-light text-foreground tracking-wide">Advanced Botanical Science</h4>
            </div>

          </div>

          {/* RIGHT SIDE: PREMIUM NARRATIVE & FORMULATION ACCORDION */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Content */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-brand-muted uppercase tracking-[0.25em]">Formulation Standards</span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground">
                The <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-foreground via-brand-muted to-brand-border">Prifya Protocol.</span>
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
                        ? 'bg-brand-card/40 border-brand-border/40 shadow-[0_15px_40px_rgba(0,0,0,0.2)]' 
                        : 'bg-transparent border-transparent opacity-45 hover:opacity-85'
                    }`}
                  >
                    {/* Left content block */}
                    <div className="space-y-1.5 max-w-xl">
                      <div className="flex items-center gap-3">
                        <span className={`text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-md border ${
                          isActive 
                            ? 'bg-brand-dark border-brand-border/20 text-brand-muted' 
                            : 'bg-transparent border-transparent text-foreground/40'
                        }`}>
                          {item.badge}
                        </span>
                        <h3 className="text-base md:text-lg font-medium text-foreground tracking-wide group-hover:text-brand-muted transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      
                      {/* Smooth collapsible description row */}
                      <div className={`transition-all duration-500 overflow-hidden ${
                        isActive ? 'max-h-20 opacity-100 pt-1' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-xs text-foreground/70 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Luxury State Indicator */}
                    <div className="flex items-center justify-end">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'border-brand-border/30 bg-brand-border/10 text-brand-muted' 
                          : 'border-brand-card/60 text-foreground/30'
                      }`}>
                        <span className="text-[9px] transform group-hover:translate-x-0.5 transition-transform">
                          {isActive ? "✓" : "→"}
                        </span>
                      </div>
                    </div>

                    {/* Left Laser Premium Highlight Edge */}
                    {isActive && (
                      <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-muted to-brand-border rounded-r-md" />
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