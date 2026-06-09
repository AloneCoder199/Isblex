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
      phase: "CHAPTER 01",
      badge: "THE GENESIS",
      title: "The Chaos of Synthetic Overload",
      description: "Prifya was born out of a quiet rebellion against harsh synthetic chemicals and generic, mass-produced skincare that stripped the skin of its vital life. We observed that modern environmental stressors leave skin chronically fatigued and depleted. We decided to stop treating skincare as a mere chemical routine and started nurturing it as a living, breathing ecosystem."
    },
    {
      phase: "CHAPTER 02",
      badge: "BOTANICAL ALCHEMY",
      title: "Scientific Precision & Pure Organics",
      description: "We dedicated years to researching cold-pressed botanical extracts, bioactive nutrients, and clean, biocompatible formulations. Every serum blend and restorative cream base was mathematically optimized to preserve plant potency, creating perfect luxury treatments that melt seamlessly into your skin to restore its innate, glowing balance."
    },
    {
      phase: "CHAPTER 03",
      badge: "THE RADIANT GLOW",
      title: "Empowering Conscious Self-Care Rituals",
      description: "Today, Prifya serves as a luxury sanctuary for skin health worldwide. Our ultimate vision remains uncompromised: transforming everyday skincare routines into deeply healing, meditative self-care rituals where conscious wellness, natural confidence, and premium aesthetics thrive as one."
    }
  ];

  // Dynamically update active tab indicator on mobile swipe
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
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
      className="relative bg-[#FDFBF7] text-[#3E2A20] py-20 lg:py-28 px-4 md:px-8 overflow-hidden border-b border-[#D0C9BC]/40 scroll-mt-20"
    >
      {/* BACKGROUND LUXURY GRADIENTS (Soft Sage & Gold Glow) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8A9A86]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B89B72]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B89B72]/30 bg-[#8A9A86]/5 text-[#6A8F67] text-[10px] font-sans tracking-[0.25em] uppercase select-none font-semibold">
            THE CHRONICLES OF PRIFYA
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight leading-tight text-[#3E2A20]">
            From Raw Botanicals to <br />
            <span className="bg-gradient-to-r from-[#8A9A86] via-[#B89B72] to-[#6A8F67] bg-clip-text text-transparent italic">
              Radiant, Timeless Skin.
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#3E2A20]/70 font-light max-w-2xl mx-auto leading-relaxed font-sans">
            Our story isn&apos;t just about altering skincare products; it&apos;s about honoring the natural intelligence of your skin, bridging clinical science with pure organic luxury.
          </p>
        </div>

        {/* ================= MAIN CONTENT LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* LEFT SIDE PANEL: FIXED PREMIUM STATS & PHILOSOPHY */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 order-2 lg:order-1">
            <div className="p-6 rounded-3xl border border-[#D0C9BC] bg-[#FDFBF7]/90 backdrop-blur-md space-y-5 shadow-sm">
              <h3 className="text-xs font-sans font-bold tracking-widest text-[#8A9A86] uppercase">OUR PHILOSOPHY</h3>
              <blockquote className="text-sm text-[#3E2A20]/80 italic font-light leading-relaxed font-serif">
                &ldquo;Your skin is a living ecosystem. When you nurture it with conscious botanical intelligence, its natural radiance becomes effortless and eternal.&rdquo;
              </blockquote>
              <div className="h-[1px] w-full bg-[#D0C9BC]/50" />
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="text-2xl font-serif text-[#3E2A20]">98%</div>
                  <div className="text-[10px] text-[#6A8F67] font-sans uppercase tracking-wider font-medium">Natural Bio-Ingredients</div>
                </div>
                <div>
                  <div className="text-2xl font-serif text-[#B89B72]">pH 5.5</div>
                  <div className="text-[10px] text-[#6A8F67] font-sans uppercase tracking-wider font-medium">Perfect Balance Formula</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-dashed border-[#D0C9BC] bg-transparent hidden lg:block">
              <span className="text-[10px] font-sans text-[#8A9A86] font-bold tracking-wider block mb-1">PRIFYA BOTANICAL LABS</span>
              <p className="text-xs font-sans text-[#3E2A20]/60">Sustainably harvesting purity, bottled with care.</p>
            </div>
          </div>

          {/* RIGHT SIDE PANEL: INTERACTIVE TIMELINE / SWIPABLE FEED */}
          <div className="lg:col-span-8 order-1 lg:order-2 w-full">
            
            {/* 📱 MOBILE NAVIGATION TABS */}
            <div className="flex lg:hidden items-center justify-between border-b border-[#D0C9BC]/60 mb-6 pb-2 px-1 select-none">
              {milestones.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`text-[10px] font-sans tracking-widest uppercase font-bold transition-all duration-300 pb-2 relative ${
                    activeTab === idx ? 'text-[#8A9A86]' : 'text-[#3E2A20]/40'
                  }`}
                >
                  {m.phase.split(" ")[1]} {/* Displays just '01', '02' etc on mobile */}
                  {activeTab === idx && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8A9A86] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* THE CARDS FEED CONTAINER */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none gap-6 lg:gap-8 pb-6 lg:pb-0 scroll-smooth scrollbar-none"
            >
              
              {/* DESKTOP INTEGRATED CONNECTOR VERTICAL LINE */}
              <div className="absolute left-8 top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#8A9A86]/40 via-[#D0C9BC] to-transparent hidden lg:block" />

              {milestones.map((milestone, idx) => (
                <div 
                  key={idx}
                  data-card-index={idx}
                  className="min-w-[88vw] sm:min-w-[480px] lg:min-w-0 snap-center lg:snap-align-none lg:pl-16 relative"
                >
                  {/* Desktop Static Node Badge */}
                  <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-[#FDFBF7] border-2 border-[#D0C9BC] items-center justify-center hidden lg:flex z-20 transition-all duration-300">
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeTab === idx ? 'bg-[#B89B72]' : 'bg-[#D0C9BC]'}`} />
                  </div>
                  
                  {/* The Premium Skincare Card Chassis */}
                  <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 h-full flex flex-col justify-between ${
                    activeTab === idx 
                      ? 'border-[#B89B72] bg-white shadow-[0_15px_40px_rgba(138,154,134,0.06)]' 
                      : 'border-[#D0C9BC]/60 bg-white/50 opacity-70 lg:opacity-100'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4 border-b border-[#D0C9BC]/30 pb-3">
                        <span className="text-[11px] font-sans tracking-widest text-[#8A9A86] uppercase font-bold">
                          {milestone.phase} // {milestone.badge}
                        </span>
                        <span className="text-[9px] font-sans bg-[#8A9A86]/5 border border-[#D0C9BC]/40 text-[#6A8F67] px-2 py-0.5 rounded-full font-medium">
                          RITUAL_0{idx + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-serif font-medium text-[#3E2A20] tracking-wide mb-3">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-[#3E2A20]/80 font-light leading-relaxed font-sans">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Progress dots at the bottom of the card on mobile */}
                    <div className="flex gap-1.5 mt-6 lg:hidden justify-end">
                      {milestones.map((_, dotIdx) => (
                        <div 
                          key={dotIdx} 
                          className={`h-1 rounded-full transition-all duration-300 ${
                            activeTab === dotIdx ? 'w-4 bg-[#8A9A86]' : 'w-1 bg-[#D0C9BC]'
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