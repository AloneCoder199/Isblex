"use client";
import React, { useRef, useState, useEffect } from 'react';

export default function OurValues() {
  const values = [
    {
      meta: "// CORE_VALUE_01",
      title: "Next-Gen Engineering",
      demoTitle: "Innovation",
      desc: "We don't deal in legacy consumer standards. Our engineering matrix focuses on pioneering custom constant-current DC driver topologies, wireless IoT mesh integration, and dynamic circadian mapping algorithms that evolve with your focus requirements.",
      accent: "from-[#22D3EE] to-[#0284C7]"
    },
    {
      meta: "// CORE_VALUE_02",
      title: "Aircraft-Grade Benchmarks",
      demoTitle: "Quality",
      desc: "Reliability is forged in materials. Every ISBLEX module is carved out of premium anodized aluminum alloys and populated with high-CRI premium emitters. We stress-test our hardware through extreme thermal loads to ensure 0.00% lumen decay over decades.",
      accent: "from-white via-zinc-400 to-zinc-600"
    },
    {
      meta: "// CORE_VALUE_03",
      title: "Frictionless Integration",
      demoTitle: "Simplicity",
      desc: "True sophistication is invisible. We eliminate cognitive clutter by designing proprietary toolless mounting frames and single-cable power delivery trunks. Box se nikal kar matrix activate karne tak, poora process bina kisi complication ke sirf 5 minutes leta hai.",
      accent: "from-zinc-400 to-zinc-800"
    },
    {
      meta: "// CORE_VALUE_04",
      title: "Ecosystem Calibration Support",
      demoTitle: "Customer Satisfaction",
      desc: "Your workspace is sacred to us. Our relationship doesn't expire at the checkout counter. We offer comprehensive white-glove setup diagnostics, custom modular upgrade consulting, and a lifetime performance guarantee because your visual frame is our priority.",
      accent: "from-[#0284C7] to-blue-900"
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
      className="relative bg-[#09090B] text-[#F8FAFC] py-24 lg:py-32 px-4 md:px-8 overflow-hidden border-b border-zinc-900 select-none"
    >
      {/* Ambient Grid Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.02),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= SECTION HEADERS ================= */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-20 space-y-3 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-[#22D3EE] text-[10px] font-mono tracking-widest uppercase">
            // INTERNAL OPERATING SYSTEM //
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase">
            Our Core Values
          </h2>
          <p className="text-[9px] sm:text-xs text-zinc-500 font-mono tracking-wide max-w-lg mx-auto uppercase">
            // Swipe Left or Right to Explorer Architecture Matrix //
          </p>
        </div>

        {/* ================= MOBILE VIEW: ACTIVE SNAP-TO-CENTER SWAP CAROUSEL ================= */}
        <div className="block lg:hidden relative w-full">
          
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
                  className={`w-[82vw] flex-shrink-0 bg-[#0C0C0E] border rounded-2xl p-6 flex flex-col justify-between snap-center relative transition-all duration-500 ease-out ${
                    isActive 
                      ? 'border-zinc-700/80 scale-100 opacity-100 shadow-[0_15px_40px_rgba(34,211,238,0.05)]' 
                      : 'border-zinc-900/40 scale-[0.96] opacity-40 blur-[0.5px]'
                  }`}
                >
                  {/* Glowing Top Interactive Border line */}
                  <div className={`absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r ${val.accent} transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`} />
                  
                  <div className="space-y-5">
                    <div className="flex justify-between items-center font-mono text-[9px]">
                      <span className={isActive ? "text-cyan-400" : "text-zinc-600"}>{val.meta}</span>
                      <span className={isActive ? "text-zinc-400 font-bold" : "text-zinc-700"}>// ACTIVE_NODE</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-500 block">
                        {val.demoTitle}
                      </span>
                      <h3 className="text-md font-black tracking-tight text-white">
                        {val.title}
                      </h3>
                    </div>

                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-zinc-900/60 flex items-center justify-between text-[8px] font-mono tracking-widest text-zinc-600">
                    <span>SYSTEM_SAFE // 4.0</span>
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-cyan-400 shadow-[0_0_8px_#22D3EE]' : 'bg-zinc-800'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* 🔘 CYBER-STYLE TRACK DOTS INDICATORS */}
          <div className="flex justify-center items-center gap-2.5 mt-2">
            {values.map((_, dotIndex) => (
              <button
                key={dotIndex}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  dotIndex === activeIndex 
                    ? 'w-6 h-1 bg-cyan-400 shadow-[0_0_8px_#22D3EE]' 
                    : 'w-1.5 h-1.5 bg-zinc-800'
                }`}
              />
            ))}
          </div>

        </div>

        {/* ================= DESKTOP VIEW: STABLE FIXED 4-COL MATRIX GRID ================= */}
        <div className="hidden lg:grid grid-cols-4 gap-6 lg:gap-8">
          {values.map((val) => (
            <div 
              key={val.meta}
              className="group relative bg-[#0C0C0E] border border-zinc-900/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-zinc-800 hover:bg-[#0e0e11] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className={`absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r ${val.accent} opacity-20 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="space-y-6">
                <div className="flex justify-between items-center font-mono text-[9px] text-zinc-600 group-hover:text-cyan-500/60 transition-colors">
                  <span>{val.meta}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">// ACTV</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block">
                    {val.demoTitle}
                  </span>
                  <h3 className="text-lg font-black tracking-tight text-white group-hover:text-[#22D3EE] transition-colors duration-200">
                    {val.title}
                  </h3>
                </div>

                <p className="text-xs text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                  {val.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-900/60 flex items-center justify-between text-[8px] font-mono tracking-widest text-zinc-600">
                <span>SYSTEM_SAFE // 4.0</span>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-cyan-400 transition-colors shadow-[0_0_8px_#22D3EE]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}