"use client";
import React, { useRef, useState, useEffect } from 'react';

// Note: Ensure global CSS defines these variables based on previous context:
// :root {
//   --font-serif: 'Playfair Display', serif;
//   --font-sans: 'Plus Jakarta Sans', sans-serif;
// }
// Headings use font-serif, body uses font-sans.

export default function OurValues() {
  const values = [
    {
      meta: "// PRIFYA_ESSENCE_01",
      title: "Botanical Alchemy",
      demoTitle: "Pioneering Innovation",
      desc: "We do not formulate with legacy chemical standards. Our formulation alchemy centers on pioneering raw, cold-pressed extraction techniques, synergistic bio-active ingredients, and self-adaptive skincare protocols that evolve with your skin’s dynamic environmental and climatic needs.",
      accent: "from-[#8A9A86] via-[#D0C9BC] to-[#B89B72]" // Sage Green to Warm Beige to Accent Gold
    },
    {
      meta: "// PRIFYA_ESSENCE_02",
      title: "Purity Benchmarks",
      demoTitle: "Uncompromising Quality",
      desc: "In skincare, trustworthiness is forged through absolute purity. Every Prifya ingredient is meticulously sourced from premium, ECOCERT-certified organic farms and undergoes rigorous quality control to ensure clinical-grade efficacy and potent stability that endures for decades.",
      accent: "from-[#B89B72] via-[#D0C9BC] to-[#FDFBF7]" // Accent Gold through Warm Beige to Light Background
    },
    {
      meta: "// PRIFYA_ESSENCE_03",
      title: "Conscious Simplicity",
      demoTitle: "Effortless Skincare Rituals",
      desc: "True elegance is found in a sophisticated yet intuitive routine. We eliminate cognitive clutter through our signature multi-tasking formulas. From opening the jar to activating the ritual, the entire process is designed to be effortless, relaxing, and deeply refreshing.",
      accent: "from-[#6A8F67] to-[#8A9A86]" // Muted Green to Sage Green
    },
    {
      meta: "// PRIFYA_ESSENCE_04",
      title: "Concierge Guidance Support",
      demoTitle: "Holistic Skin Coaching",
      desc: "Your skin health is sacred to us. Our relationship transcends the point of purchase. We offer personalized, one-on-one concierge skin coaching, custom ritual diagnostic consulting, and a lifestyle-adaptive performance guarantee, ensuring your radiant glow remains our eternal priority.",
      accent: "from-[#B89B72] to-[#3E2A20]" // Accent Gold to Deep Cocoa (foreground implicit)
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Tracks which card is currently centered on screen to update indicators smoothly
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth * 0.82 + 16; // Card width + gap matrix
    const newIndex = Math.round(scrollLeft / cardWidth);
    
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < values.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section 
      id="our-values" 
      className="relative bg-[#FDFBF7] text-[#3E2A20] py-24 lg:py-32 px-4 md:px-8 overflow-hidden border-b border-[#D0C9BC]/50 select-none font-sans"
    >
      {/* Ambient Grid Backdrop - Switched to Sage Green soft radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(138,154,134,0.1),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= SECTION HEADERS ================= */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-20 space-y-4 px-4 font-sans">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D0C9BC] bg-white text-[#8A9A86] text-[10px] font-medium tracking-widest uppercase shadow-sm">
            // BOTANICAL OPERATING SYSTEM //
          </div>
          {/* Main Title is Serif */}
          <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-[#3E2A20] uppercase">
            Our Core Essences
          </h2>
          <p className="text-[9px] sm:text-xs text-[#3E2A20]/60 font-medium tracking-wide max-w-lg mx-auto uppercase">
            // Swipe Left or Right to Explore Essence Matrix //
          </p>
        </div>

        {/* ================= MOBILE VIEW: ACTIVE SNAP-TO-CENTER SWAP CAROUSEL ================= */}
        <div className="block lg:hidden relative w-full font-sans">
          
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto scrollbar-none pb-8 snap-x snap-mandatory px-[10%] touch-pan-x scroll-smooth"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              willChange: 'scroll-position'
            }}
          >
            {values.map((val, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={val.meta}
                  className={`w-[82vw] flex-shrink-0 bg-white border rounded-3xl p-7 flex flex-col justify-between snap-center relative transition-all duration-500 ease-out ${
                    isActive 
                      ? 'border-[#D0C9BC] scale-100 opacity-100 shadow-[0_15px_40px_rgba(138,154,134,0.08)]' 
                      : 'border-[#D0C9BC]/40 scale-[0.96] opacity-40 blur-[0.5px]'
                  }`}
                >
                  {/* Glowing Top Interactive Border line */}
                  <div className={`absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r ${val.accent} transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`} />
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center font-medium text-[10px]">
                      <span className={isActive ? "text-[#8A9A86]" : "text-[#3E2A20]/60"}>{val.meta}</span>
                      <span className={isActive ? "text-[#3E2A20]/50 font-semibold" : "text-[#3E2A20]/30"}>// ACTIVE_NODE</span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[9px] uppercase font-semibold tracking-widest text-[#B89B72] block">
                        {val.demoTitle}
                      </span>
                      {/* Serif Title for card */}
                      <h3 className="text-lg font-serif font-semibold tracking-tight text-[#3E2A20]">
                        {val.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#3E2A20]/70 font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#D0C9BC]/60 flex items-center justify-between text-[9px] font-medium tracking-widest text-[#3E2A20]/50">
                    <span>ECO-SAFE // 4.0</span>
                    {/* Sage Green Dot */}
                    <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive ? 'bg-[#8A9A86] shadow-[0_0_10px_#8A9A86]' : 'bg-[#D0C9BC]'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* 🔘 CONSCIOUS-STYLE TRACK DOTS INDICATORS */}
          <div className="flex justify-center items-center gap-3 mt-2">
            {values.map((_, dotIndex) => (
              <button
                key={dotIndex}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  dotIndex === activeIndex 
                    ? 'w-6 h-1.5 bg-[#8A9A86] shadow-[0_0_8px_#8A9A86]' 
                    : 'w-2 h-2 bg-[#D0C9BC]'
                }`}
              />
            ))}
          </div>

        </div>

        {/* ================= DESKTOP VIEW: STABLE FIXED 4-COL MATRIX GRID ================= */}
        <div className="hidden lg:grid grid-cols-4 gap-6 lg:gap-8 font-sans">
          {values.map((val) => (
            <div 
              key={val.meta}
              className="group relative bg-white border border-[#D0C9BC]/60 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#D0C9BC] hover:bg-white/80 hover:shadow-[0_20px_50px_rgba(138,154,134,0.06)]"
            >
              <div className={`absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r ${val.accent} opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="space-y-6">
                <div className="flex justify-between items-center font-medium text-[10px] text-[#3E2A20]/50 group-hover:text-[#8A9A86] transition-colors">
                  <span>{val.meta}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">// ACTIVE</span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-semibold tracking-widest text-[#B89B72] block">
                    {val.demoTitle}
                  </span>
                  {/* Serif Title for card */}
                  <h3 className="text-xl font-serif font-semibold tracking-tight text-[#3E2A20] group-hover:text-[#6A8F67] transition-colors duration-200 uppercase">
                    {val.title}
                  </h3>
                </div>

                <p className="text-xs text-[#3E2A20]/70 font-light leading-relaxed group-hover:text-[#3E2A20]/90 transition-colors duration-300">
                  {val.desc}
                  </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D0C9BC]/60 flex items-center justify-between text-[9px] font-medium tracking-widest text-[#3E2A20]/50 group-hover:text-[#3E2A20]/70">
                <span>ECO-SAFE // 4.0</span>
                <div className="w-2 h-2 rounded-full bg-[#D0C9BC] group-hover:bg-[#8A9A86] transition-colors shadow-[0_0_10px_#8A9A86]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}