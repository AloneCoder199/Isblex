"use client";
import React, { useState, useRef, useEffect } from 'react';

export default function WhyWeStarted() {
  const [sliderPos, setSliderPos] = useState<number>(35);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(900);
  const [typedText, setTypedText] = useState<string>(" ");
  const [isManual, setIsManual] = useState<boolean>(false);
  
  const scanDirection = useRef<'forward' | 'backward'>('forward');
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const logSequence = "PRIFYA BOTANICAL LABS: INITIALIZING CELLULAR REGENERATION... ACTIVE LIPID BARRIER REPAIRED... HYDRATION DENSITY: +98.4%... DERMAL GLOW: RADIANT.";

  // 1. 🔄 Cinematic Luxury Auto-Scan (Luminous Constant Motion Engine)
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
          return current + 0.12; // Premium luxury, slow & elegant pacing
        } else {
          if (current <= 35) {
            scanDirection.current = 'forward';
            return 35;
          }
          return current - 0.12;
        }
      });
      frameId = requestAnimationFrame(performScan);
    };

    frameId = requestAnimationFrame(performScan);
    return () => cancelAnimationFrame(frameId);
  }, [isManual]);

  // 2. ⏳ Smart Auto-Resume Controller (User ke chorne par 2s baad auto-scan dubara chalega)
  const resetManualStateWithDelay = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    
    resumeTimeoutRef.current = setTimeout(() => {
      // Smoothly determine direction based on where the user left the slider
      scanDirection.current = sliderPos > 50 ? 'backward' : 'forward';
      setIsManual(false);
    }, 2000); // 2 Seconds delay before resuming auto-animation
  };

  // 3. 📟 Botanical Lab Terminal Ticker
  useEffect(() => {
    if (sliderPos < 45) {
      setTypedText(""); 
      return;
    }

    if (typedText === "") {
      let index = 0;
      const interval = setInterval(() => {
        if (index < logSequence.length) {
          setTypedText(() => logSequence.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 15);
      return () => clearInterval(interval);
    }
  }, [sliderPos > 45]);

  // 4. 📐 Container Width Detector for Perfect 1:1 Image Alignment
  useEffect(() => {
    if (!containerRef.current) return;
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [sliderPos]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setIsManual(true); 
    setSliderPos(Number(e.target.value));
  };

  return (
    <section 
      id="why-we-started" 
      className="relative bg-[#FDFBF7] text-[#3E2A20] py-20 lg:py-24 px-4 md:px-8 overflow-hidden border-b border-[#D0C9BC]/40 select-none"
    >
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#B89B72]/30 bg-[#8A9A86]/5 text-[#6A8F67] text-[10px] font-sans tracking-widest uppercase font-semibold">
              CELLULAR TRANSFORMATION STUDY
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium tracking-tight leading-tight">
              Why We Started: <br />
              <span className="bg-gradient-to-r from-[#8A9A86] via-[#B89B72] to-[#6A8F67] bg-clip-text text-transparent italic">
                Restoring True Cellular Radiance.
              </span>
            </h2>
          </div>
          
          <div className="lg:col-span-6 border-l border-[#D0C9BC] pl-6 lg:pl-8">
            <p className="text-xs sm:text-sm text-[#3E2A20]/70 font-light leading-relaxed font-sans">
              Standard synthetic skincare often relies on harsh chemical fillers and artificial fragrances that strip away the skin’s natural lipid barrier. This environmental exposure leads to chronic moisture decay, cellular fatigue, and premature breakdown.
              <br /><br />
              Prifya engineers clean, biocompatible botanical treatments. By infusing pure bioactive nutrition, we eliminate biological stressors so your skin barrier can repair itself naturally, returning to its innate, luminous state.
            </p>
          </div>
        </div>

        {/* ================= COMPARISON SLIDER CHAMBER ================= */}
        <div className="max-w-[880px] mx-auto space-y-4">
          
          {/* CONTROL TOP BAR */}
          <div className="flex justify-between items-center px-4 text-[9px] font-sans uppercase tracking-widest text-[#3E2A20]/60 font-medium">
            <span className={isManual ? "text-[#3E2A20]/80 font-semibold" : "text-[#6A8F67] font-semibold animate-pulse"}>
              {isManual ? "● Interactive Mode Active" : "🔄 Botanical Auto-Scanning..."}
            </span>
            <span className="text-[#8A9A86] font-bold">Macro-Dermal Perspective</span>
          </div>

          {/* THE MASTER CANVAS CONTAINER */}
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-3xl border border-[#D0C9BC] bg-[#EAE5DC] overflow-hidden shadow-[0_20px_50px_rgba(138,154,134,0.08)]"
          >
            
            {/* ── 🟢 BASE LAYER: AFTER (PRIFYA RADIANT SKIN) ── */}
            <div className="absolute inset-0 w-full h-full bg-[#FDFBF7]">
              
              {/* 📸 IMAGE SLOT: AFTER IMAGE (Radiant, glowing skin) */}
              {/* Jab aapke paas image ho, bas src="/your-path" change kar lena. Styling auto-configured hai */}
              <img 
                src="/images/swaper.png" 
                className="w-full h-full object-cover select-none pointer-events-none" 
                alt="Prifya Radiant Luminous Skin" 
              />

              {/* Luxury Text Overlays over the After Image */}
              <div 
                className="absolute inset-x-0 top-0 p-6 flex justify-between items-start z-10 transition-opacity duration-300 ease-out pointer-events-none"
                style={{ opacity: sliderPos > 45 ? 1 : 0 }}
              >
                <div>
                  <span className="text-[9px] font-sans text-[#6A8F67] font-bold tracking-widest block">// BOTANICAL INFUSION ACTIVE</span>
                  <h4 className="text-sm font-serif font-medium text-[#3E2A20] drop-shadow-xs">The Prifya Treatment</h4>
                </div>

                {/* LAB SCREEN DATA BOX */}
                <div className="hidden md:flex w-[380px] h-[36px] bg-white/80 border border-[#8A9A86]/30 backdrop-blur-md rounded-xl p-2.5 font-sans text-[8px] text-[#3E2A20]/80 overflow-hidden items-center">
                  {typedText && (
                    <div className="flex items-center gap-2 transition-all duration-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6A8F67] shrink-0 animate-pulse" />
                      <p className="leading-normal tracking-wide font-medium">{typedText}</p>
                    </div>
                  )}
                </div>

                <span className="text-[8px] font-sans bg-[#8A9A86]/90 border border-[#8A9A86] text-white px-2.5 py-1 rounded-full font-bold shadow-xs">
                  HEALTH // 98.4%
                </span>
              </div>
            </div>

            {/* ── 🔴 OVERLAY LAYER: BEFORE (DEHYDRATED SKIN) ── */}
            <div 
              className="absolute inset-y-0 left-0 h-full overflow-hidden z-20 border-r border-[#B89B72] bg-[#EAE5DC] will-change-[width]"
              style={{ width: `${sliderPos}%` }} 
            >
              {/* FIXED HOUSING BOUNDARY CANVAS (Must match outer container width precisely) */}
              <div 
                className="absolute inset-y-0 left-0 h-full bg-[#EAE5DC]"
                style={{ width: `${containerWidth}px` }}
              >
                
                {/* 📸 IMAGE SLOT: BEFORE IMAGE (Damaged, dry skin) */}
                {/* Jab aapke paas image ho, bas src="/your-path" change kar lena. Filter standard dull look dega */}
                <img 
                  src="/images/hair-before.png" 
                  className="w-full h-full object-cover filter grayscale-[25%] contrast-[95%] brightness-[90%] select-none pointer-events-none" 
                  alt="Compromised Skin Barrier" 
                />

                {/* Legacy Header with Inverse Opacity Fade */}
                <div 
                  className="absolute inset-x-0 top-0 p-6 flex justify-between items-start z-10 transition-opacity duration-300 ease-out pointer-events-none"
                  style={{ opacity: sliderPos < 55 ? 1 : 0 }} 
                >
                  <div>
                    <span className="text-[9px] font-sans text-white font-bold tracking-widest block drop-shadow-md">[ SYNTHETIC STRESS EXPOSURE ]</span>
                    <h4 className="text-sm font-serif font-medium text-white drop-shadow-md">Dehydrated Skin State</h4>
                  </div>
                  
                  <div className="hidden md:block w-[380px] h-[34px] bg-transparent" />

                  <span className="text-[8px] font-sans bg-[#3E2A20]/80 border border-white/20 text-white px-2.5 py-1 rounded-full font-bold backdrop-blur-xs">
                    DEGRADED // 34%
                  </span>
                </div>

              </div>
            </div>

            {/* ── 🕹️ GOLD SPLIT CONTROL HANDLE ── */}
            <div 
              className="absolute inset-y-0 pointer-events-none z-30 flex items-center justify-center will-change-[left]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-0 bottom-0 w-[1.5px] bg-[#B89B72] shadow-[0_0_8px_rgba(184,155,114,0.6)]" />
              <div className="relative w-8 h-8 rounded-full bg-white border border-[#B89B72] flex items-center justify-center shadow-[0_4px_14px_rgba(62,42,32,0.15)] backdrop-blur-md">
                <span className="font-sans text-[10px] text-[#B89B72] font-semibold tracking-tighter">&larr;&rarr;</span>
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
              onMouseUp={resetManualStateWithDelay}
              onTouchEnd={resetManualStateWithDelay}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-40 touch-pan-x"
              aria-label="Skin Transformation Control Matrix"
            />

          </div>
        </div>

      </div>
    </section>
  );
}