"use client";
import React, { useState, useRef } from 'react';

interface Milestone {
  phase: string;
  badge: string;
  title: string;
  description: string;
}

export default function OurStory() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const milestones: Milestone[] = [
    {
      phase: "PHASE 01",
      badge: "THE SYSTEM BOOT",
      title: "The Chaos of Flat Lighting",
      description: "ISBLEX was born out of a structural rebellion against generic, blinding overhead panels and lifeless workspace illumination. We observed that when developers, designers, and engineers pull intense late-night operations, static lighting rapidly depletes their cognitive endurance. We decided to stop treating light as a utility and started programming it as an ecosystem."
    },
    {
      phase: "PHASE 02",
      badge: "HARDWARE MANIFESTO",
      title: "Architectural Precision & Pure Engineering",
      description: "We dedicated months to researching structural aerospace-grade aluminum extrusions and micro-latency hardware chipsets. Every linear beam and structural chassis was mathematically optimized to eliminate visual flicker entirely, casting perfect architectural light cones that integrate seamlessly into high-end desktop environments."
    },
    {
      phase: "PHASE 03",
      badge: "DIGITAL MATRIX NOW",
      title: "Empowering Next-Gen Command Centers",
      description: "Today, ISBLEX systems act as the unified neural network of premium workspaces worldwide. Our ultimate vision remains absolute: transforming physical, everyday rooms into highly responsive digital matrices where human performance, extreme workflow synchronization, and luxury aesthetics exist as one."
    }
  ];

  // Dynamically update active tab indicator on mobile swipe
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    // Calculate the current active card based on horizontal position
    const newIndex = Math.round(scrollLeft / (width * 0.85)); 
    if (newIndex >= 0 && newIndex < milestones.length) {
      setActiveTab(newIndex);
    }
  };

  // Allow clicking top headers to smooth scroll directly to that card on mobile
  const scrollToCard = (index: number) => {
    setActiveTab(index);
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.querySelector('[data-card-index]')?.clientWidth || 0;
      const gap = 24; // matching gap-6 (24px)
      container.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="our-story" 
      className="relative bg-[#0A0A0A] text-[#F8FAFC] py-20 lg:py-28 px-4 md:px-8 overflow-hidden border-b border-[#1E293B]/30 scroll-mt-20"
    >
      {/* BACKGROUND GRAPHIC GRADIENTS */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#22D3EE]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0284C7]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1E293B] bg-[#111827]/60 text-[#22D3EE] text-[10px] font-mono tracking-[0.2em] uppercase select-none">
            // THE CHRONICLES OF ISBLEX
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            From Raw Lumens to <br />
            <span className="bg-gradient-to-r from-[#22D3EE] via-[#0284C7] to-cyan-500 bg-clip-text text-transparent">
              Programmable Space.
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#94A3B8] font-light max-w-2xl mx-auto leading-relaxed">
            Our story isn&apos;t about altering lighting fixtures; it&apos;s about mastering the physical pixels of your environment, bridging architecture with extreme workspace focus.
          </p>
        </div>

        {/* ================= MAIN CONTENT LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* LEFT SIDE PANEL: FIXED PREMIUM STATS & PHILOSOPHY */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 order-2 lg:order-1">
            <div className="p-6 rounded-2xl border border-[#1E293B] bg-[#09090B]/80 backdrop-blur-md space-y-4 shadow-xl">
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#22D3EE] uppercase">// CORE INTENT</h3>
              <blockquote className="text-sm text-[#94A3B8] italic font-light leading-relaxed">
                &ldquo;Your physical workspace is a direct architectural extension of your cognitive state. If your ambient lighting is static, your execution can never be dynamic.&rdquo;
              </blockquote>
              <div className="h-[1px] w-full bg-zinc-800" />
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="text-xl font-mono font-black text-white">98+</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Color Index (CRI)</div>
                </div>
                <div>
                  <div className="text-xl font-mono font-black text-[#22D3EE]">0.00s</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Response Latency</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-dashed border-zinc-800 bg-transparent hidden lg:block">
              <span className="text-[10px] font-mono text-zinc-600 block mb-1">SYSTEM MONITOR</span>
              <p className="text-xs font-mono text-zinc-400">// Deploying adaptive arrays globally.</p>
            </div>
          </div>

          {/* RIGHT SIDE PANEL: INTERACTIVE TIMELINE / SWIPABLE FEED */}
          <div className="lg:col-span-8 order-1 lg:order-2 w-full">
            
            {/* 📱 MOBILE NAVIGATION TABS (Visible only on Mobile, acts as the Top Card Indicator) */}
            <div className="flex lg:hidden items-center justify-between border-b border-zinc-800/80 mb-6 pb-2 px-1 select-none">
              {milestones.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`text-[10px] font-mono tracking-widest uppercase font-bold transition-all duration-300 pb-2 relative ${
                    activeTab === idx ? 'text-[#22D3EE]' : 'text-zinc-600'
                  }`}
                >
                  {m.phase}
                  {activeTab === idx && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#22D3EE] rounded-full animate-fade-in" />
                  )}
                </button>
              ))}
            </div>

            {/* THE CARDS FEED CONTAINER (Scrolls horizontally on mobile, stacks beautifully on desktop) */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none gap-6 lg:gap-8 pb-6 lg:pb-0 scroll-smooth scrollbar-none"
            >
              
              {/* DESKTOP INTEGRATED CONNECTOR VERTICAL LINE */}
              <div className="absolute left-8 top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#22D3EE]/30 via-zinc-800 to-transparent hidden lg:block" />

              {milestones.map((milestone, idx) => (
                <div 
                  key={idx}
                  data-card-index={idx}
                  className="min-w-[88vw] sm:min-w-[480px] lg:min-w-0 snap-center lg:snap-align-none lg:pl-16 relative"
                >
                  {/* Desktop Static Node Badge */}
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-zinc-700 items-center justify-center hidden lg:flex z-20 transition-all duration-300">
                    <div className={`w-1.5 h-1.5 rounded-full ${activeTab === idx ? 'bg-[#22D3EE]' : 'bg-zinc-700'}`} />
                  </div>
                  
                  {/* The Premium Workspace Card Chassis */}
                  <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 bg-[#070709] h-full flex flex-col justify-between ${
                    activeTab === idx 
                      ? 'border-[#22D3EE]/30 shadow-[0_15px_40px_rgba(34,211,238,0.04)] lg:bg-[#0C1224]/30' 
                      : 'border-[#1E293B] opacity-60 lg:opacity-100'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4 border-b border-zinc-900 pb-3">
                        <span className="text-[11px] font-mono tracking-widest text-[#22D3EE] uppercase font-bold">
                          {milestone.phase} // {milestone.badge}
                        </span>
                        <span className="text-[9px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-500 px-2 py-0.5 rounded">
                          SEC_0{idx + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-3">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Progress dots at the bottom of the card on mobile */}
                    <div className="flex gap-1.5 mt-6 lg:hidden justify-end">
                      {milestones.map((_, dotIdx) => (
                        <div 
                          key={dotIdx} 
                          className={`h-1 rounded-full transition-all duration-300 ${
                            activeTab === dotIdx ? 'w-4 bg-[#22D3EE]' : 'w-1 bg-zinc-800'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}