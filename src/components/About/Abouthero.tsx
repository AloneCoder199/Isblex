"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function AboutHero() {
  const [isLit, setIsLit] = useState<boolean>(false);
  
  // Timers ko track karne ke liye ref taake manual click par auto-sequence clear ho sake
  const autoTimersRef = useRef<number[]>([]);

  useEffect(() => {
    // 1. 2 Second baad system ko automatically ON karne ka timer
    const turnOnTimer = window.setTimeout(() => {
      setIsLit(true);

      // 2. ON hone ke exact 5 second baad automatically OFF karne ka timer
      const turnOffTimer = window.setTimeout(() => {
        setIsLit(false);
      }, 5000);

      autoTimersRef.current.push(turnOffTimer);
    }, 2000);

    autoTimersRef.current.push(turnOnTimer);

    // Component unmount hote waqt saare active timers clear karna zaroori hai
    return () => {
      autoTimersRef.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  // Manual switch toggle handler
  const handleSwitchToggle = () => {
    // Agar user khud click kare, to chalte huye auto-timers ko cancel kar dein
    autoTimersRef.current.forEach((id) => clearTimeout(id));
    autoTimersRef.current = [];
    
    setIsLit((prev) => !prev);
  };

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen bg-[#0A0A0A] text-[#F8FAFC] flex items-center justify-center overflow-hidden pt-24 pb-16 md:py-20 px-4 md:px-8 border-b border-[#1E293B]/50">
      
      {/* BACKGROUND MATRIX GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-5" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT SIDE: COPY & NARRATIVE ================= */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left order-2 lg:order-1">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1E293B] bg-[#111827]/60 text-[#22D3EE] text-[10px] md:text-xs font-mono tracking-[0.15em] uppercase select-none mx-auto lg:mx-0">
              <span className={`w-1.5 h-1.5 rounded-full ${isLit ? 'bg-[#22D3EE] animate-ping' : 'bg-zinc-600'}`} />
              {isLit ? '// MATRIX INTERIOR ACTIVE' : '// SYSTEM ECO-STANDBY'}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              We don&apos;t just make lights. <br />
              <span className="bg-gradient-to-r from-[#22D3EE] to-[#0284C7] bg-clip-text text-transparent">
                We program ambience.
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#94A3B8] font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              ISBLEX ka aghaaz physical environments ko re-imagine karne ke liye hua tha. Hum aisi high-end smart lighting architectures design karte hain jo aapke mood, workflow aur physical space ko aik ultra-modern digital matrix mein tabdeel kar dey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button 
                onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#F8FAFC] text-[#0A0A0A] text-xs font-bold tracking-wider uppercase hover:bg-[#22D3EE] transition-all duration-200 shadow-lg active:scale-95 cursor-pointer focus:outline-none"
              >
                Explore Our Story
              </button>
            </div>

          </div>

          {/* ================= RIGHT SIDE: LUXURY COMPLETE ROOM ARCHITECTURE ================= */}
          <div className="lg:col-span-7 w-full flex flex-col items-center justify-center order-1 lg:order-2 py-4 relative">
            
            {/* THE RICH ROOM VIEW BOX */}
            <div className={`relative w-full max-w-[520px] aspect-[4/3] rounded-[2.5rem] border transition-all duration-700 ease-in-out overflow-hidden flex flex-col justify-between p-4 sm:p-6 ${
              isLit 
                ? 'border-[#22D3EE]/30 bg-[#0C1224] shadow-[0_30px_70px_rgba(34,211,238,0.18)]' 
                : 'border-[#1E293B] bg-[#070709] shadow-[0_20px_40px_rgba(0,0,0,0.8)]'
            }`}>
              
              {/* BACKWALL GLOBAL ILLUMINATION BLUR */}
              <div className={`absolute inset-x-0 top-0 h-[80%] bg-gradient-to-b from-[#22D3EE]/15 via-[#0284C7]/5 to-transparent blur-[50px] transition-opacity duration-700 pointer-events-none ${
                isLit ? 'opacity-100' : 'opacity-0'
              }`} />

              {/* ⚡ THE DYNAMIC ISBLEX BRAND TEXT REVEAL */}
              <div className="w-full text-center pt-1 relative z-10 select-none">
                <div className={`transition-all duration-700 ease-out transform ${
                  isLit ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95'
                }`}>
                  <h2 className="text-xl sm:text-2xl font-black tracking-[0.32em] text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    ISBLEX
                  </h2>
                  <span className="text-[8px] font-mono tracking-widest text-[#22D3EE] uppercase block mt-0.5">// ARCHITECTURAL MATRIX ACTIVE</span>
                </div>
              </div>

              {/* WALL SHELVES & SMART HEXAGON UTILITIES */}
              <div className="absolute left-4 top-16 w-12 space-y-2 opacity-80 hidden sm:block">
                <div className={`h-[2px] w-full transition-colors duration-500 ${isLit ? 'bg-[#22D3EE] shadow-[0_0_8px_#22D3EE]' : 'bg-zinc-800'}`} />
                <div className="flex gap-1 justify-center">
                  <div className={`w-2 h-2 rotate-45 transition-all duration-500 ${isLit ? 'bg-[#0284C7] shadow-[0_0_6px_#0284C7]' : 'bg-zinc-900'}`} />
                  <div className={`w-2 h-2 rotate-45 transition-all duration-500 ${isLit ? 'bg-[#22D3EE] shadow-[0_0_6px_#22D3EE]' : 'bg-zinc-900'}`} />
                </div>
              </div>

              <div className="absolute right-4 top-16 w-12 space-y-2 opacity-80 hidden sm:block">
                <div className={`h-[2px] w-full transition-colors duration-500 ${isLit ? 'bg-[#22D3EE] shadow-[0_0_8px_#22D3EE]' : 'bg-zinc-800'}`} />
                <div className="h-4 w-6 border border-dashed border-zinc-800 mx-auto rounded" />
              </div>

              {/* OBJECT 1: CORE CEILING LINEAR FIXTURE */}
              <div className="relative w-full flex flex-col items-center justify-center h-[90px] z-20">
                {/* Micro Hanging Rods */}
                <div className="w-[120px] h-[20px] flex justify-between px-8 opacity-20">
                  <div className="w-[1px] h-full bg-white" />
                  <div className="w-[1px] h-full bg-white" />
                </div>

                {/* Light Chassis */}
                <div className={`w-[180px] sm:w-[240px] h-2.5 rounded-full border p-[1px] transition-all duration-500 ${
                  isLit ? 'bg-[#1E293B] border-[#475569]' : 'bg-[#121214] border-zinc-800'
                }`}>
                  <div className={`w-full h-full rounded-full transition-all duration-500 ${
                    isLit ? 'bg-gradient-to-r from-cyan-300 via-white to-cyan-300 shadow-[0_0_30px_10px_rgba(34,211,238,0.8)]' : 'bg-zinc-700'
                  }`} />
                </div>

                {/* Volumetric Realistic Light Cone */}
                <div 
                  className={`absolute top-[28px] w-[260px] sm:w-[360px] h-[100px] bg-gradient-to-b from-[#22D3EE]/25 via-[#0284C7]/5 to-transparent transition-opacity duration-700 pointer-events-none ${
                    isLit ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ clipPath: 'polygon(38% 0%, 62% 0%, 100% 100%, 0% 100%)' }}
                />
              </div>

              {/* OBJECTS CORE: THE HIGH-END DESKTOP ECOSYSTEM */}
              <div className="relative w-full flex flex-col items-center z-10 mt-auto">
                
                <div className="w-full max-w-[380px] sm:max-w-[440px] flex items-end justify-between px-2 sm:px-4 relative bottom-[-4px]">
                  
                  {/* OBJECT 2: LEFT SPEAKER */}
                  <div className={`w-6 sm:w-8 h-14 sm:h-16 border rounded-md transition-all duration-500 flex flex-col justify-between p-1 pb-2 bg-[#050507] ${
                    isLit ? 'border-zinc-700 shadow-[0_0_10px_rgba(0,0,0,0.5)]' : 'border-zinc-900'
                  }`}>
                    <div className="w-full aspect-square rounded-full border border-zinc-800 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-zinc-900" />
                    </div>
                    <div className="w-4 h-4 rounded-full border border-zinc-800 mx-auto" />
                  </div>

                  {/* OBJECT 3: CENTER CURVED DISPLAY */}
                  <div className={`w-[160px] sm:w-[210px] h-[65px] sm:h-[80px] border-[1.5px] rounded-xl transition-all duration-500 flex items-center justify-center relative overflow-hidden bg-[#020203] ${
                    isLit ? 'border-[#334155] shadow-[0_0_20px_rgba(34,211,238,0.1)]' : 'border-zinc-800'
                  }`}>
                    <div className={`w-[92%] h-[85%] rounded flex flex-col justify-between p-1 font-mono text-[5px] sm:text-[6px] transition-opacity duration-500 ${
                      isLit ? 'text-[#22D3EE]/50 opacity-100' : 'opacity-0'
                    }`}>
                      <div className="flex justify-between items-center border-b border-[#22D3EE]/20 pb-0.5">
                        <span>NODE_INDEX // OK</span>
                        <span className="w-1 h-1 rounded-full bg-[#22D3EE] animate-pulse" />
                      </div>
                      <div className="text-center text-[7px] sm:text-[8px] font-black text-white/90 tracking-[0.1em]">ENVIRONMENT ON</div>
                      <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden p-[0.5px]">
                        <div className="w-[85%] h-full bg-gradient-to-r from-[#0284C7] to-[#22D3EE] rounded-full" />
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-6 h-3 bg-zinc-900 border-x border-zinc-800" />
                  </div>

                  {/* OBJECT 4: RIGHT SPEAKER */}
                  <div className={`w-6 sm:w-8 h-14 sm:h-16 border rounded-md transition-all duration-500 flex flex-col justify-between p-1 pb-2 bg-[#050507] ${
                    isLit ? 'border-zinc-700 shadow-[0_0_10px_rgba(0,0,0,0.5)]' : 'border-zinc-900'
                  }`}>
                    <div className="w-full aspect-square rounded-full border border-zinc-800 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-zinc-900" />
                    </div>
                    <div className="w-4 h-4 rounded-full border border-zinc-800 mx-auto" />
                  </div>

                  {/* OBJECT 5: PC CASE */}
                  <div className={`w-10 sm:w-14 h-18 sm:h-22 border rounded transition-all duration-500 p-1 bg-[#050506] flex flex-col justify-between ${
                    isLit ? 'border-zinc-700 shadow-[0_0_15px_rgba(34,211,238,0.08)]' : 'border-zinc-900'
                  }`}>
                    <div className="space-y-1 pt-1 opacity-80">
                      <div className={`h-2 w-full rounded-sm transition-all duration-500 ${isLit ? 'bg-[#22D3EE]/20 border border-[#22D3EE]/40' : 'bg-zinc-900'}`} />
                      <div className={`h-2 w-full rounded-sm transition-all duration-500 ${isLit ? 'bg-[#0284C7]/20 border border-[#0284C7]/40' : 'bg-zinc-900'}`} />
                      <div className={`h-2 w-full rounded-sm transition-all duration-500 ${isLit ? 'bg-[#22D3EE]/20 border border-[#22D3EE]/40' : 'bg-zinc-900'}`} />
                    </div>
                    <div className="w-full h-1 bg-zinc-950 rounded-xs" />
                  </div>

                </div>

                {/* OBJECT 6: DESK SURFACE */}
                <div className="w-full h-[6px] bg-[#111625] border-y border-[#1E293B] shadow-md relative z-20">
                  <div className={`absolute top-[-3px] left-1/2 -translate-x-1/2 w-[70px] sm:w-[90px] h-[2px] rounded transition-all duration-500 ${
                    isLit ? 'bg-cyan-400 shadow-[0_0_8px_#22D3EE]' : 'bg-zinc-800'
                  }`} />
                  <div className={`absolute top-[-3px] left-[68%] sm:left-[64%] w-2 h-[2px] rounded transition-all duration-500 ${
                    isLit ? 'bg-cyan-400 shadow-[0_0_6px_#22D3EE]' : 'bg-zinc-800'
                  }`} />
                </div>

                {/* OBJECT 7: CHAIR BACKREST */}
                <div className="w-14 sm:w-18 h-8 border-t border-x border-zinc-800 rounded-t-2xl bg-[#050506] opacity-70 relative top-[1px] z-0" />
              </div>

              {/* ================= 📱 MOBILE ONLY SWITCH (INSIDE THE ROOM) ================= */}
              <div className="absolute bottom-12 right-4 flex items-center gap-2 bg-[#0A0A0B]/95 backdrop-blur-md border border-[#1E293B] p-1.5 rounded-xl shadow-2xl select-none z-40 scale-75 lg:hidden">
                <div className="flex flex-col text-left">
                  <span className="text-[5px] font-mono text-zinc-600 tracking-wider uppercase">CORE</span>
                  <span className={`text-[8px] font-mono font-black ${isLit ? 'text-[#22D3EE]' : 'text-zinc-500'}`}>
                    {isLit ? 'ON' : 'OFF'}
                  </span>
                </div>
                <button
                  onClick={handleSwitchToggle}
                  className={`relative w-6 h-10 rounded-full p-0.5 transition-all duration-300 focus:outline-none cursor-pointer ${
                    isLit ? 'bg-[#22D3EE]' : 'bg-zinc-800'
                  }`}
                  aria-label="Toggle Mobile Light"
                >
                  <div className={`w-4 h-4 rounded-full bg-[#0A0A0A] border transition-all duration-300 flex items-center justify-center transform ${
                    isLit ? 'translate-y-4 border-[#22D3EE]' : 'translate-y-0 border-zinc-600'
                  }`}>
                    <div className={`w-1 h-1 rounded-full transition-all duration-300 ${isLit ? 'bg-[#22D3EE]' : 'bg-red-500/30'}`} />
                  </div>
                </button>
              </div>

            </div>

            {/* ================= 🖥️ DESKTOP ONLY SWITCH (BELOW THE ROOM) ================= */}
            <div className="hidden lg:flex items-center gap-4 bg-[#111827]/80 border border-[#1E293B] py-3 px-5 rounded-2xl shadow-xl select-none mt-6 w-full max-w-[280px] transition-all duration-300">
              <div className="flex flex-col flex-1">
                <span className="text-[9px] font-mono text-[#475569] tracking-widest uppercase">SYSTEM CORES</span>
                <span className={`text-xs font-mono font-black transition-colors ${isLit ? 'text-[#22D3EE]' : 'text-zinc-500'}`}>
                  {isLit ? 'AMBIENT MATRIX ACTIVE' : 'SYSTEM STANDBY'}
                </span>
              </div>
              
              <button
                onClick={handleSwitchToggle}
                className={`relative w-12 h-7 rounded-full p-0.5 transition-all duration-300 focus:outline-none cursor-pointer ${
                  isLit ? 'bg-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'bg-zinc-800'
                }`}
                aria-label="Toggle Desktop Light"
              >
                <div className={`w-6 h-6 rounded-full bg-[#0A0A0A] border transition-all duration-300 flex items-center justify-center transform ${
                  isLit ? 'translate-x-5 border-[#22D3EE]' : 'translate-x-0 border-zinc-600'
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isLit ? 'bg-[#22D3EE]' : 'bg-zinc-600'}`} />
                </div>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}