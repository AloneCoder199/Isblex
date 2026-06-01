"use client";
import React from 'react';

export default function IsblexExperience() {
  const steps = [
    {
      phase: "PHASE_01",
      title: "The Premium Unboxing",
      subtitle: "Tactile First Contact",
      desc: "It starts with a heavy, multi-layered matte black structural container. As you lift the lid, custom laser-cut high-density foam reveals your aircraft-grade alloy light modules, securely nested alongside braided power umbilical cords. No cheap plastics, no loose wires—pure engineering precision from second one.",
      badge: "UNBOX_SEQUENCE // RECOVERY"
    },
    {
      phase: "PHASE_02",
      title: "Zero-Friction Calibration",
      subtitle: "Seamless Structural Snap",
      desc: "No complex toolkits or manuals required. Our proprietary architectural brackets snap directly onto your desk rig or monitor arms with complete structural rigidness. The hardware modules align magnetically, linking up to a centralized power distribution brick designed to isolate lines from interference.",
      badge: "CALIBRATION_NODE // STABLE"
    },
    {
      phase: "PHASE_03",
      title: "The Matrix Ignition",
      subtitle: "Complete Spatial Overhaul",
      desc: "You switch the toggle. Instantly, our pure constant-current DC framework powers up with absolute 0.00% flicker latency. Volumetric directional light sweeps across your active task space, bouncing perfectly away from your screen. The boundaries of your physical room fade out, transforming your setup into a high-end digital matrix.",
      badge: "TRANSFORMATION // COMPLETE"
    }
  ];

  return (
    <section 
      id="isblex-experience" 
      className="relative bg-[#09090B] text-[#F8FAFC] py-24 lg:py-32 px-4 md:px-8 overflow-hidden border-b border-zinc-900 select-none"
    >
      {/* ── BACKGROUND DEPTH ACCENTS ── */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[600px] bg-[#22D3EE]/2 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0284C7]/4 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= STRATEGIC HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-[#22D3EE] text-[10px] font-mono tracking-widest uppercase">
            <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
            // THE LIFECYCLE PIPELINE //
          </div>
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">// From Unboxing To Transformation</h2>
          <p className="text-3xl sm:text-5xl font-black tracking-tight uppercase max-w-3xl leading-none">
            The ISBLEX Experience
          </p>
          <div className="w-16 h-[1px] bg-zinc-800" />
        </div>

        {/* ================= VERTICAL EXPERIENCE PIPELINE ================= */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Central Structural Connecting Spine Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-zinc-900 via-cyan-500/30 to-zinc-900 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-2 bottom-2 w-[1px] bg-zinc-900 md:hidden" />

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
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-zinc-950 border-2 border-zinc-800 -translate-x-1/2 flex items-center justify-center z-20 group-hover:border-cyan-400 transition-colors duration-300">
                    <div className="w-1 h-1 rounded-full bg-zinc-700 transition-colors duration-300" />
                  </div>

                  {/* CONTENT CARD PANEL */}
                  <div className="w-full md:w-[46%] pl-10 md:pl-0">
                    <div className="group bg-[#0C0C0E] border border-zinc-900 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-zinc-800 hover:bg-[#0e0e11] hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] relative">
                      
                      {/* Floating Meta Tag */}
                      <div className="absolute top-4 right-4 font-mono text-[8px] text-zinc-600 tracking-wider">
                        {step.badge}
                      </div>

                      {/* Header Segment */}
                      <div className="space-y-1 mb-4">
                        <div className="font-mono text-[9px] text-[#22D3EE] font-bold tracking-widest">
                          {step.phase} //
                        </div>
                        <h3 className="text-lg font-black tracking-tight text-white group-hover:text-[#22D3EE] transition-colors duration-200">
                          {step.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-medium tracking-wide">
                          {step.subtitle}
                        </p>
                      </div>

                      {/* Descriptive Paragraph */}
                      <p className="text-xs text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors duration-200">
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
        <div className="text-center mt-20 font-mono text-[10px] text-zinc-600 tracking-widest uppercase">
          // TRANSFORMATION FULLY REALIZED // NO FRICTION // MAXIMUM PERFORMANCE
        </div>

      </div>
    </section>
  );
}