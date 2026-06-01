"use client";
import React, { useState, useRef, useEffect } from 'react';

export default function WhyWeStarted() {
  const [sliderPos, setSliderPos] = useState<number>(35);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(900);
  const [typedText, setTypedText] = useState<string>("");
  const [isManual, setIsManual] = useState<boolean>(false);
  
  const scanDirection = useRef<'forward' | 'backward'>('forward');
  const logSequence = "// SYSTEM RE-CALIBRATION: INITIALIZING ISBLEX MATRIX PROTOCOL... OPTICAL CHANNELS STABILIZED... FLICKER LATENCY: 0.00%... EMISSION: OPTIMAL.";

  // 1. 🏎️ 120fps Hardware-Accelerated Cinematic Auto-Scan
  useEffect(() => {
    if (isManual) return;

    let frameId: number;
    const performScan = () => {
      setSliderPos((current) => {
        if (scanDirection.current === 'forward') {
          if (current >= 65) {
            scanDirection.current = 'backward';
            return 65;
          }
          return current + 0.2; // Ultra fine incremental steps for native rendering
        } else {
          if (current <= 35) {
            scanDirection.current = 'forward';
            return 35;
          }
          return current - 0.2;
        }
      });
      frameId = requestAnimationFrame(performScan);
    };

    frameId = requestAnimationFrame(performScan);
    return () => cancelAnimationFrame(frameId);
  }, [isManual]);

  // 2. ⌨️ Clean Context-Aware Typing (Only runs when ISBLEX is highly visible)
  useEffect(() => {
    if (sliderPos < 45) {
      setTypedText(""); // Clear completely when hidden to avoid invisible DOM lag
      return;
    }

    if (typedText === "") {
      let index = 0;
      const interval = setInterval(() => {
        if (index < logSequence.length) {
          setTypedText((prev) => logSequence.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 15);
      return () => clearInterval(interval);
    }
  }, [sliderPos > 45]);

  // 3. 📐 Rigid Width Lock Engine
  useEffect(() => {
    if (!containerRef.current) return;
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isManual) setIsManual(true); 
    setSliderPos(Number(e.target.value));
  };

  return (
    <section 
      id="why-we-started" 
      className="relative bg-[#09090B] text-[#F8FAFC] py-20 lg:py-24 px-4 md:px-8 overflow-hidden border-b border-zinc-900 select-none"
    >
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-[#22D3EE] text-[10px] font-mono tracking-widest uppercase">
              // SPATIAL EVOLUTION SCHEMATIC //
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
              Why We Started: <br />
              <span className="bg-gradient-to-r from-[#22D3EE] to-[#0284C7] bg-clip-text text-transparent">
                Optimizing The Focus Frame.
              </span>
            </h2>
          </div>
          
          <div className="lg:col-span-6 border-l border-zinc-800 pl-6 lg:pl-8">
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Standard flat workspaces suffer from static lumen decay and invisible high-frequency micro-flickers. These bugs attack eye muscles, leading to cognitive fatigue without you realizing it. 
              <br /><br />
              ISBLEX builds precision lighting environments. By engineering structural illumination matrices, we remove optical friction so creators can build for longer periods with complete comfort.
            </p>
          </div>
        </div>

        {/* ================= USER VIEWBOX CHAMBER ================= */}
        <div className="max-w-[880px] mx-auto space-y-4">
          
          <div className="flex justify-between items-center px-4 text-[9px] font-mono uppercase tracking-widest text-zinc-500">
            <span className={isManual ? "text-zinc-400" : "text-cyan-500/80 animate-pulse"}>
              {isManual ? "● Manual Precision Control" : "🔄 Cinematic Auto-Scanning..."}
            </span>
            <span className="text-[#22D3EE]">// Flat Isometric Perspective</span>
          </div>

          {/* THE MASTER CANVAS CONTAINER */}
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-3xl border border-zinc-800 bg-[#0C0C0E] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
            onMouseEnter={() => setIsManual(true)}
          >
            
            {/* ── 🔵 BASE LAYER: PREMIUM ISBLEX ARCHITECTURE ── */}
            <div className="absolute inset-0 w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-[#0A0F1D]">
              
              {/* Soft Ambient Wash */}
              <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-[#22D3EE]/8 to-transparent blur-2xl pointer-events-none" />

              {/* Status Header with Smart Opacity Fade */}
              <div 
                className="flex justify-between items-start relative z-30 transition-opacity duration-300 ease-out"
                style={{ opacity: sliderPos > 45 ? 1 : 0 }} // Smooth clean hide/reveal instead of ugly cutting
              >
                <div>
                  <span className="text-[9px] font-mono text-[#22D3EE] font-bold tracking-widest block">// INTEGRATED ECOSYSTEM</span>
                  <h4 className="text-sm font-bold text-white tracking-tight">The ISBLEX Matrix</h4>
                </div>

                {/* 📟 TERMINAL SCREEN */}
                <div className="hidden md:flex w-[380px] h-[34px] bg-black/60 border border-cyan-500/20 rounded-lg p-2 font-mono text-[8px] text-[#22D3EE] overflow-hidden items-center">
                  {typedText && (
                    <div className="flex items-start gap-1.5 transition-all duration-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-0.5 animate-pulse" />
                      <p className="leading-normal tracking-wide">{typedText}</p>
                    </div>
                  )}
                </div>

                <span className="text-[8px] font-mono bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] px-2 py-0.5 rounded-md font-bold">
                  SYS_OK // 100
                </span>
              </div>

              {/* 🏠 THE 10 BALANCED OBJECTS VIEW GRID */}
              <div className="w-full h-[70%] mt-auto relative flex flex-col items-center justify-end pb-2">
                
                {/* [OBJ 10]: Hex Panels */}
                <div className="absolute top-4 inset-x-12 flex justify-center gap-3 opacity-25 pointer-events-none">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-11 bg-[#111A2E] border border-cyan-500/20" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
                  ))}
                </div>

                {/* [OBJ 1]: Ceiling Architectural Linear Light */}
                <div className="absolute top-0 w-[210px] sm:w-[260px] flex flex-col items-center">
                  <div className="w-full h-1 bg-gradient-to-r from-cyan-500 via-white to-cyan-500 rounded-full shadow-[0_0_12px_#22D3EE]" />
                  <div className="w-[280px] sm:w-[380px] h-[100px] bg-gradient-to-b from-[#22D3EE]/10 via-transparent to-transparent" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)' }} />
                </div>

                {/* [OBJ 2]: Corner Light Active Column */}
                <div className="absolute left-4 top-6 bottom-4 w-1 bg-gradient-to-t from-[#0284C7] via-[#22D3EE] to-transparent rounded-full shadow-[0_0_10px_#22D3EE]" />

                {/* [OBJ 3]: Dropping Core Smart Bulb */}
                <div className="absolute right-8 top-0 flex flex-col items-center">
                  <div className="w-[1px] h-12 bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_18px_6px_rgba(34,211,238,0.5)]" />
                </div>

                {/* CENTRAL TECH FRAMEWORK */}
                <div className="w-full max-w-[500px] flex items-end justify-between px-2 relative bottom-[-4px] z-10">
                  
                  {/* [OBJ 4]: Articulated Geometric Task Lamp */}
                  <div className="w-6 h-12 flex flex-col items-start relative left-1">
                    <div className="w-[1.5px] h-7 bg-cyan-400 rotate-30 transform origin-bottom shadow-[0_0_5px_#22D3EE]" />
                    <div className="w-3.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#22D3EE]" />
                  </div>

                  {/* [OBJ 7]: Left Audio Node Reference Speaker */}
                  <div className="w-6.5 h-13 bg-[#060B18] border border-cyan-500/20 rounded-md flex flex-col justify-between p-1">
                    <div className="w-full aspect-square rounded-full border border-cyan-950 flex items-center justify-center"><div className="w-1 h-1 rounded-full bg-cyan-400" /></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-zinc-950 mx-auto" />
                  </div>

                  {/* [OBJ 5]: Ultrawide Center Command Monitor */}
                  <div className="w-[170px] sm:w-[220px] h-[75px] sm:h-[95px] bg-[#02050D] border border-cyan-500/30 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.1)] relative">
                    <div className="w-[92%] h-[86%] text-[5px] font-mono p-1 flex flex-col justify-between text-cyan-400/70">
                      <div className="flex justify-between items-center border-b border-cyan-950/40 pb-0.5"><span>CORE WORKSPACE ACTIVE</span></div>
                      <div className="text-center text-white font-black tracking-widest text-[7px] sm:text-[8px]">ISBLEX LABS</div>
                      <div className="w-full bg-zinc-950 h-0.5 rounded-full overflow-hidden"><div className="w-[98%] h-full bg-[#22D3EE]" /></div>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-5 h-3 bg-zinc-800 border-x border-zinc-700" />
                  </div>

                  {/* [OBJ 6]: Right Auxiliary Code Panel */}
                  <div className="w-[34px] h-[80px] bg-[#02050D] border border-cyan-500/20 rounded-md p-1 relative top-[-4px]">
                    <div className="w-full h-full flex flex-col gap-1 opacity-50">
                      <div className="h-0.5 w-full bg-cyan-400/40 rounded-xs" />
                      <div className="h-0.5 w-3/4 bg-zinc-800 rounded-xs" />
                      <div className="h-0.5 w-full bg-cyan-400/40 rounded-xs" />
                    </div>
                  </div>

                  {/* [OBJ 7]: Right Audio Node Reference Speaker */}
                  <div className="w-6.5 h-13 bg-[#060B18] border border-cyan-500/20 rounded-md flex flex-col justify-between p-1">
                    <div className="w-full aspect-square rounded-full border border-cyan-950 flex items-center justify-center"><div className="w-1 h-1 rounded-full bg-cyan-400" /></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-zinc-950 mx-auto" />
                  </div>

                  {/* [OBJ 8]: Liquid-Cooled Performance Machine */}
                  <div className="w-11 sm:w-14 h-18 sm:h-22 bg-[#030611] border border-cyan-500/20 rounded-lg p-1 flex flex-col justify-between">
                    <div className="space-y-0.5"><div className="h-1 w-full bg-cyan-500/20 rounded-xs" /><div className="h-1 w-full bg-zinc-800 rounded-xs" /></div>
                    <div className="w-full h-0.5 bg-cyan-400 animate-pulse" />
                  </div>

                </div>

                {/* [OBJ 9]: Illuminated Mechanical Inputs & Desk Mat */}
                <div className="w-full h-[4px] bg-[#0A1120] border-y border-zinc-800 relative z-20">
                  <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-[70px] sm:w-[100px] h-[1px] bg-cyan-400 shadow-[0_0_6px_#22D3EE]" />
                </div>

                {/* [OBJ 11 Silhouette]: Chair Outline */}
                <div className="w-14 sm:w-18 h-9 border-t border-x border-zinc-800 bg-[#03050C] rounded-t-xl absolute bottom-[-1px] left-1/3 z-30" />

              </div>
            </div>

            {/* ── 🔴 OVERLAY LAYER: THE UNREGULATED ENVIRONMENT ── */}
            <div 
              className="absolute inset-y-0 left-0 h-full overflow-hidden z-20 border-r border-zinc-800 bg-[#111112] will-change-[width]"
              style={{ width: `${sliderPos}%` }} // Native high-performance sliding tracking
            >
              {/* FIXED HOUSING BOUNDARY CANVAS */}
              <div 
                className="absolute inset-y-0 left-0 h-full p-6 sm:p-8 flex flex-col justify-between bg-[#111112]"
                style={{ width: `${containerWidth}px` }}
              >
                
                {/* Legacy Header with Inverse Opacity Fade */}
                <div 
                  className="flex justify-between items-start relative z-30 transition-opacity duration-300 ease-out"
                  style={{ opacity: sliderPos < 55 ? 1 : 0 }} // Fades away gracefully when ISBLEX takes over
                >
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 font-bold tracking-widest block">[ UNREGULATED SETUP ]</span>
                    <h4 className="text-sm font-bold text-zinc-500 tracking-tight">Legacy Static Space</h4>
                  </div>
                  
                  <div className="hidden md:block w-[380px] h-[34px] bg-transparent" />

                  <span className="text-[8px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-500 px-2 py-0.5 rounded-md font-bold">
                    DEGRADED // 22
                  </span>
                </div>

                {/* 🏠 LEGACY DULL VIEWPORT (MIRRORED COORDINATES) */}
                <div className="w-full h-[70%] mt-auto relative flex flex-col items-center justify-end pb-2">
                  
                  {/* [OBJ 10]: Dead Panels */}
                  <div className="absolute top-4 inset-x-12 flex justify-center gap-3 opacity-5 pointer-events-none">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-10 h-11 bg-zinc-700 border border-zinc-600" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
                    ))}
                  </div>

                  {/* [OBJ 1]: Unregulated Flat Ceiling Bulbs */}
                  <div className="absolute top-0 w-[210px] sm:w-[260px] flex flex-col items-center">
                    <div className="w-full h-1 bg-zinc-800 rounded-full" />
                    <div className="w-[280px] sm:w-[380px] h-[100px] bg-transparent" />
                  </div>

                  {/* [OBJ 2]: Corner Column (DEAD) */}
                  <div className="absolute left-4 top-6 bottom-4 w-1 bg-zinc-900 rounded-full" />

                  {/* [OBJ 3]: Low Contrast Yellow Drop Light */}
                  <div className="absolute right-8 top-0 flex flex-col items-center">
                    <div className="w-[1px] h-12 bg-zinc-800" />
                    <div className="w-3 h-3 rounded-full bg-amber-950 border border-zinc-900" />
                  </div>

                  {/* DESKTOP ENGINE INFRASTRUCTURE */}
                  <div className="w-full max-w-[500px] flex items-end justify-between px-2 relative bottom-[-4px] z-10 opacity-30">
                    
                    {/* [OBJ 4]: Dark Desk Lamp */}
                    <div className="w-6 h-12 flex flex-col items-start relative left-1">
                      <div className="w-[1.5px] h-7 bg-zinc-700 rotate-30 transform origin-bottom" />
                      <div className="w-3.5 h-1.5 bg-zinc-800 rounded-full" />
                    </div>

                    {/* [OBJ 7]: Left Speaker */}
                    <div className="w-6.5 h-13 bg-[#09090A] border border-zinc-800 rounded-md flex flex-col justify-between p-1">
                      <div className="w-full aspect-square rounded-full border border-zinc-900" />
                      <div className="w-3.5 h-3.5 rounded-full bg-zinc-950 mx-auto" />
                    </div>

                    {/* [OBJ 5]: Depleted Main Frame Monitor */}
                    <div className="w-[170px] sm:w-[220px] h-[75px] sm:h-[95px] bg-[#050506] border border-zinc-800 rounded-xl flex items-center justify-center relative">
                      <div className="w-[92%] h-[86%] text-[5px] font-mono p-1 flex flex-col justify-center text-zinc-600 text-center font-bold">
                        <span>ENVIRONMENT DEPLETED</span>
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-5 h-3 bg-zinc-900 border-x border-zinc-800" />
                    </div>

                    {/* [OBJ 6]: Side Panel (OFF) */}
                    <div className="w-[34px] h-[80px] bg-[#050506] border border-zinc-800 rounded-md p-1 relative top-[-4px]" />

                    {/* [OBJ 7]: Right Speaker */}
                    <div className="w-6.5 h-13 bg-[#09090A] border border-zinc-800 rounded-md flex flex-col justify-between p-1">
                      <div className="w-full aspect-square rounded-full border border-zinc-900" />
                      <div className="w-3.5 h-3.5 rounded-full bg-zinc-950 mx-auto" />
                    </div>

                    {/* [OBJ 8]: Generic Chassis Container */}
                    <div className="w-11 sm:w-14 h-18 sm:h-22 bg-[#080809] border border-zinc-800 rounded-lg p-1 flex flex-col justify-end">
                      <div className="w-full h-0.5 bg-zinc-900" />
                    </div>

                  </div>

                  {/* [OBJ 9]: Basic Keyboard Area (UNLIT) */}
                  <div className="w-full h-[4px] bg-zinc-800 border-y border-zinc-700 relative z-20">
                    <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-[70px] sm:w-[100px] h-[1px] bg-zinc-800" />
                  </div>

                  {/* [OBJ 11]: Chair Silhouette */}
                  <div className="w-14 sm:w-18 h-9 border-t border-x border-zinc-800 bg-zinc-900 rounded-t-xl absolute bottom-[-1px] left-1/3 z-30" />

                </div>

              </div>
            </div>

            {/* ── 🕹️ SPLIT CONTROL HANDLE ── */}
            <div 
              className="absolute inset-y-0 pointer-events-none z-30 flex items-center justify-center will-change-[left]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-0 bottom-0 w-[1.5px] bg-[#22D3EE] shadow-[0_0_10px_#22D3EE]" />
              <div className="relative w-7 h-7 rounded-full bg-zinc-950 border border-[#22D3EE] flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.4)] backdrop-blur-md">
                <span className="font-mono text-[8px] text-[#22D3EE] font-black tracking-tight">&larr;&rarr;</span>
              </div>
            </div>

            {/* ── HIGH-PERFORMANCE RAW RANGE REGULATOR INPUT ── */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              step="0.1" 
              value={sliderPos}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-40 touch-pan-x"
              aria-label="Workspace Upgrade Controller Matrix"
            />

          </div>
        </div>

      </div>
    </section>
  );
}