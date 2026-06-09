"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
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

  const setDragging = (dragging: boolean) => {
    isDraggingRef.current = dragging;
  };

  return (
    // 🛠️ Background updated to Cream/Beige (#FDFBF7) and Border to Soft Surface (#D0C9BC)
    <section className="bg-[#FDFBF7] text-[#3E2A20] py-24 px-4 md:px-8 border-t border-[#D0C9BC]/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: INTERACTIVE SWIPER */}
        <div className="lg:col-span-7 order-1 lg:order-1 flex flex-col justify-center w-full">
          <div 
            ref={containerRef}
            // 🛠️ Added elegant shadow and soft border
            className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-[#D0C9BC] select-none cursor-ew-resize shadow-[0_15px_40px_-15px_rgba(62,42,32,0.15)] touch-none"
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
                src="/images/hair-after.png" // 🛠️ Aap yahan apni image laga lena
                alt="After using Prifya Cosmetics"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
                className="object-cover scale-105"
              />
            </div>
            
            {/* AFTER BADGE */}
            {/* 🛠️ Updated to Light theme badge */}
            <div className="absolute bottom-6 right-6 z-20 bg-[#FDFBF7]/80 backdrop-blur-md border border-[#D0C9BC] px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#8A9A86] shadow-sm">
              After Prifya
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
                  src="/images/hair-before.png" // 🛠️ Aap yahan apni image laga lena
                  alt="Before using Prifya Cosmetics"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                  className="object-cover scale-105"
                />
              </div>
            </div>

            {/* BEFORE BADGE */}
            <div className="absolute bottom-6 left-6 z-20 bg-[#3E2A20]/80 backdrop-blur-md border border-[#3E2A20] px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#D0C9BC] shadow-sm">
              Before
            </div>

            {/* SLIDER HANDLE LINE AND BUTTON */}
            {/* 🛠️ Neon line changed to Soft Gold (#B89B72) */}
            <div 
              className="absolute top-0 bottom-0 z-30 w-[1.5px] bg-[#B89B72] cursor-ew-resize shadow-[0_0_10px_rgba(184,155,114,0.5)]"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Premium Minimal Swiper Button */}
              {/* 🛠️ Button updated to match brand colors */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FDFBF7] border border-[#B89B72] flex items-center justify-center text-[#8A9A86] shadow-[0_0_20px_rgba(184,155,114,0.3)] select-none">
                <div className="flex items-center gap-1.5 text-[10px] tracking-tighter font-bold">
                  <span>◀</span>
                  <span className="w-px h-3 bg-[#D0C9BC]" />
                  <span>▶</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-[10px] tracking-[0.2em] text-[#8A9A86] mt-5 uppercase font-bold">
            Slide to reveal radiance
          </p>
        </div>

        {/* RIGHT COLUMN: MINIMALIST TEXT & LUXURY COPY */}
        <div className="lg:col-span-5 order-2 lg:order-2 flex flex-col justify-center space-y-10 lg:pl-4">
          <div className="space-y-4">
            <div className="text-xs font-bold text-[#8A9A86] uppercase tracking-[0.25em]">
              Visible Transformation
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#3E2A20] leading-[1.1] tracking-tight">
              Reveal your skin's <br/>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8A9A86] via-[#B89B72] to-[#8A9A86]">
                natural glow.
              </span>
            </h3>
            <p className="text-sm md:text-base text-[#3E2A20]/80 leading-relaxed font-medium">
              Skincare isn’t just about applying products—it’s about restoring harmony. Prifya redefines your daily ritual, turning dull moments into a lasting, healthy radiance.
            </p>
          </div>

          {/* Clean, Non-bulky Features */}
          {/* 🛠️ Border and Text updated for skincare context */}
          <div className="space-y-6 border-l-2 border-[#D0C9BC] pl-6">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#3E2A20] tracking-wide">Deep Hydration</h4>
              <p className="text-xs md:text-sm text-[#3E2A20]/70 font-medium leading-relaxed">
                Formulated with active botanicals that penetrate deeply to restore moisture and plumpness instantly.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#3E2A20] tracking-wide">Even Tone & Texture</h4>
              <p className="text-xs md:text-sm text-[#3E2A20]/70 font-medium leading-relaxed">
                Gently resurfaces the skin to fade blemishes, revealing a buttery-smooth and clear complexion.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#3E2A20] tracking-wide">Protective Barrier</h4>
              <p className="text-xs md:text-sm text-[#3E2A20]/70 font-medium leading-relaxed">
                Strengthens your skin's natural defenses against environmental stressors for all-day resilience.
              </p>
            </div>
          </div>

          {/* Elegant CTA */}
          <div className="pt-2">
           

<Link href="/products" className="inline-block">
  <button className="group relative px-8 py-4 bg-[#8A9A86] border border-[#8A9A86] hover:bg-[#B89B72] hover:border-[#B89B72] text-[#FDFBF7] text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 overflow-hidden">
    <span className="relative z-10">Explore Product</span>
  </button>
</Link>

          </div>
        </div>

      </div>
    </section>
  );
}