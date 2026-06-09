"use client";
import React from 'react';

// Note: Ensure 'Playfair Display' (Serif) and 'Plus Jakarta Sans' (Sans) are imported in your global CSS/layout.

export default function PrifyaExperience() {
  const steps = [
    {
      phase: "CHAPTER_01",
      title: "The Ritual Unveiling",
      subtitle: "Tactile Elegance & Anticipation",
      desc: "It begins with a substantial, soft-touch cream structural container with gold foil detailing. As you lift the rigid lid, custom nested compartments reveal your Prifya serums in weighted, frosted glass vials, nestled alongside a hand-carved jade applicator. No plastic wrap, no clutter—pure sustainable luxury from the first touch.",
      badge: "VEILING // SEQUENCE"
    },
    {
      phase: "CHAPTER_02",
      title: "Conscious Curation",
      subtitle: "Personalized Dermal Mapping",
      desc: "No complex routines or generic advice. Scan the integrated QR code to activate your AI-powered dermal analysis. Based on your unique skin climate, the algorithm curates your precise mixing ratios, synchronizing perfectly with your ambient environment and stress levels for a bespoke formulation.",
      badge: "CURATION // MAP"
    },
    {
      phase: "CHAPTER_03",
      title: "The Radiant Awakening",
      subtitle: "Total Cellular Transformation",
      desc: "You apply the bespoke blend. Instantly, our micro-encapsulated botanical technology activates with absolute zero sticky residue. Active nutrients sweep across your dermal layers, absorbed perfectly by your cells. The fatigue of the day fades out, transforming your skin into a luminous, deeply hydrated canvas of health.",
      badge: "AWAKENING // COMPLETE"
    }
  ];

  return (
    <section 
      id="prifya-experience" 
      className="relative bg-[#FDFBF7] text-[#3E2A20] py-24 lg:py-32 px-4 md:px-8 overflow-hidden border-b border-[#D0C9BC]/50 select-none"
    >
      {/* ── BACKGROUND DEPTH ACCENTS (Soft Wellness Glows) ── */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[600px] bg-[#8A9A86]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#B89B72]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= STRATEGIC HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-24 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D0C9BC] bg-white text-[#8A9A86] text-[10px] font-sans tracking-[0.2em] uppercase font-semibold shadow-sm">
            <span className="w-1 h-1 rounded-full bg-[#B89B72] animate-pulse" />
            THE JOURNEY PIPELINE
          </div>
          
          {/* Serif Heading */}
          <p className="text-3xl sm:text-5xl font-serif font-medium tracking-tight cocoa-text max-w-3xl leading-tight pb-2">
            The Prifya Experience
          </p>
          
          <h2 className="text-sm font-sans text-[#3E2A20]/70 uppercase tracking-widest max-w-xl leading-relaxed">
            From Conscious Unveiling to Radiant Transformation: Your Personalized Path to Pure Skin Wellness.
          </h2>
          
          <div className="w-16 h-[1px] bg-[#B89B72]/50 mt-4" />
        </div>

        {/* ================= VERTICAL EXPERIENCE PIPELINE ================= */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Central Structural Connecting Spine Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#D0C9BC]/10 via-[#B89B72]/30 to-[#D0C9BC]/10 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-2 bottom-2 w-[1px] bg-[#D0C9BC]/50 md:hidden" />

          {/* PIPELINE BLOCKS */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={step.phase} 
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* 🟢 STEP RUNTIME NODE INDICATOR */}
                  <div className="absolute left-4 md:left-1/2 w-3.5 h-3.5 rounded-full bg-[#FDFBF7] border-2 border-[#D0C9BC] -translate-x-1/2 flex items-center justify-center z-20 transition-colors duration-300 group-hover:border-[#B89B72]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D0C9BC]/70 transition-colors duration-300" />
                  </div>

                  {/* CONTENT CARD PANEL */}
                  <div className="w-full md:w-[46%] pl-10 md:pl-0">
                    <div className="group bg-white border border-[#D0C9BC]/70 rounded-3xl p-7 md:p-9 transition-all duration-300 hover:border-[#B89B72]/50 hover:bg-white hover:shadow-[0_15px_50px_rgba(62,42,32,0.04)] relative">
                      
                      {/* Floating Meta Tag */}
                      <div className="absolute top-5 right-6 font-sans text-[8px] text-[#3E2A20]/50 tracking-wider font-semibold">
                        {step.badge}
                      </div>

                      {/* Header Segment */}
                      <div className="space-y-1.5 mb-5 border-b border-[#D0C9BC]/30 pb-4">
                        <div className="font-sans text-[10px] text-[#8A9A86] font-bold tracking-widest uppercase">
                          {step.phase} //
                        </div>
                        
                        {/* Serif Sub-heading */}
                        <h3 className="text-xl font-serif font-medium tracking-wide text-[#3E2A20] group-hover:text-[#B89B72] transition-colors duration-200">
                          {step.title}
                        </h3>
                        
                        <p className="text-xs text-[#3E2A20]/80 font-sans font-medium tracking-wide uppercase">
                          {step.subtitle}
                        </p>
                      </div>

                      {/* Descriptive Paragraph - Sans font */}
                      <p className="text-[13px] text-[#3E2A20]/70 font-sans font-light leading-relaxed group-hover:text-[#3E2A20]/90 transition-colors duration-200 hover-cocoa">
                        {step.desc}
                      </p>

                    </div>
                  </div>

                  {/* SPACER FOR GRID ALIGNMENT ON DESKTOP */}
                  <div className="hidden md:block w-[46%]" />

                </div>
              );
            })}
          </div>

        </div>

        {/* ================= BOTTOM OUTRO CONTEXT ================= */}
        <div className="text-center mt-24 font-sans text-[10px] text-[#3E2A20]/60 tracking-[0.25em] uppercase font-semibold backdrop-blur-sm bg-white/30 inline-block left-1/2 relative -translate-x-1/2 px-4 py-1 rounded-full border border-[#D0C9BC]/20">
          // TRANSFORMATION FULLY REALIZED // ZERO GUILT // MAXIMUM RADIANCE
        </div>

      </div>
    </section>
  );
}