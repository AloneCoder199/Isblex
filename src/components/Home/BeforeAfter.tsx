"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  
  // Refs for Ultra-Smooth Animation Loop without triggering unneeded re-renders
  const isDraggingRef = useRef<boolean>(false);
  const targetPosRef = useRef<number>(50);
  const currentPosRef = useRef<number>(50);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    // Lerp Loops Engine for Ultra-Smooth Sliding Physics
    let animationId: number;
    const lerpEngine = () => {
      // Physics calculation: 0.15 represents fluid friction. Lower = smoother/cushioned
      const lerpFactor = 0.15; 
      const diff = targetPosRef.current - currentPosRef.current;
      
      if (Math.abs(diff) > 0.01) {
        currentPosRef.current += diff * lerpFactor;
        setSliderPos(currentPosRef.current);
      }
      animationId = requestAnimationFrame(lerpEngine);
    };
    animationId = requestAnimationFrame(lerpEngine);

    return () => {
      window.removeEventListener('resize', updateWidth);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    
    // Updates target references instantly for the interpolation loops
    targetPosRef.current = percentage;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  };

  // State synchronization handlers for events tracking
  const setDragging = (dragging: boolean) => {
    isDraggingRef.current = dragging;
  };

  return (
    <section className="bg-[#0A0A0A] text-[#F8FAFC] py-24 px-4 md:px-8 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: INTERACTIVE SWIPER */}
        <div className="lg:col-span-7 order-1 lg:order-1 flex flex-col justify-center w-full">
          <div 
            ref={containerRef}
            className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-[#1E293B]/50 select-none cursor-ew-resize shadow-[0_0_60px_rgba(0,0,0,0.7)] touch-none"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setDragging(true)}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onTouchStart={() => setDragging(true)}
            onTouchEnd={() => setDragging(false)}
          >
            {/* AFTER IMAGE (Base Layer) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <Image 
                src="/images/compear.png" 
                alt="After ISBLEX Professional Lighting"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
                className="object-cover scale-105"
              />
            </div>
            
            {/* AFTER BADGE */}
            <div className="absolute bottom-6 right-6 z-20 bg-[#0A0A0A]/60 backdrop-blur-md border border-[#1E293B]/60 px-3.5 py-1.5 rounded-full text-[10px] font-medium tracking-widest uppercase text-[#22D3EE] shadow-sm">
              ISBLEX Ambient
            </div>

            {/* BEFORE IMAGE (Top Layer) */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none z-10"
              style={{ width: `${sliderPos}%` }}
            >
              <div 
                className="absolute inset-0 h-full max-w-none"
                style={{ width: containerWidth ? `${containerWidth}px` : '100vw' }}
              >
                <Image 
                  src="/images/simple.png" 
                  alt="Before Simple Room"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                  className="object-cover scale-105"
                />
              </div>
            </div>

            {/* BEFORE BADGE */}
            <div className="absolute bottom-6 left-6 z-20 bg-[#0A0A0A]/60 backdrop-blur-md border border-[#1E293B]/60 px-3.5 py-1.5 rounded-full text-[10px] font-medium tracking-widest uppercase text-[#94A3B8] shadow-sm">
              Standard Light
            </div>

            {/* SLIDER HANDLE LINE AND BUTTON */}
            <div 
              className="absolute top-0 bottom-0 z-30 w-px bg-linear-to-b from-[#3B82F6] via-[#22D3EE] to-[#3B82F6] cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Premium Minimal Swiper Button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0A0A0A] border border-[#1E293B] flex items-center justify-center text-[#22D3EE] shadow-[0_0_30px_rgba(34,211,238,0.25)] select-none">
                <div className="flex items-center gap-1.5 text-[10px] tracking-tighter opacity-80">
                  <span>◀</span>
                  <span className="w-px h-3 bg-[#1E293B]" />
                  <span>▶</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-[10px] tracking-[0.2em] text-[#4A5563] mt-4 uppercase font-medium">
            Slide to alter atmosphere
          </p>
        </div>

        {/* RIGHT COLUMN: MINIMALIST TEXT & LUXURY COPY */}
        <div className="lg:col-span-5 order-2 lg:order-2 flex flex-col justify-center space-y-10 lg:pl-4">
          <div className="space-y-4">
            <div className="text-xs font-semibold text-[#3B82F6] uppercase tracking-[0.25em]">
              Architectural Ambiance
            </div>
            <h3 className="text-3xl md:text-4xl font-light text-[#F8FAFC] leading-snug tracking-tight">
              A subtle shift in <span className="font-medium text-transparent bg-clip-text bg-linear-to-r from-[#F8FAFC] via-[#22D3EE] to-[#3B82F6]">perspective.</span>
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
              Lighting isn’t just about visibility—it’s about character. ISBLEX redefines spatial dynamics, turning empty corners into curated architectural statements.
            </p>
          </div>

          {/* Clean, Non-bulky Features */}
          <div className="space-y-6 border-l border-[#1E293B] pl-6">
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-[#F8FAFC] tracking-wide">Chromatic Depth</h4>
              <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                Over 16 million depth-calibrated hues engineered to harmonize with your interior aesthetics.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-medium text-[#F8FAFC] tracking-wide">Luminous Precision</h4>
              <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                Granular dimming controls that respect natural circadian rhythms and ambient lighting transitions.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-medium text-[#F8FAFC] tracking-wide">Silent Integration</h4>
              <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                Effortless responsiveness through intuitive app structures and voice automation protocols.
              </p>
            </div>
          </div>

          {/* Elegant CTA */}
          <div className="pt-2">
            <button className="group relative px-8 py-3.5 bg-[#111827] border border-[#1E293B] hover:border-[#22D3EE] text-[#F8FAFC] text-xs font-semibold tracking-widest uppercase rounded-lg transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Experience ISBLEX</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-linear-to-r from-[#3B82F6] to-[#22D3EE] transition-opacity duration-300" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
