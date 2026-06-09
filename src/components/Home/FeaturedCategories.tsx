"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface Category {
  id: number;
  title: string;
  subtitle: string;
  imgSrc: string;
  gridClass: string;
  glowStyles: string;
  badgeText: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Advanced Active Serums",
    subtitle: "Targeted botanical concentrates & nutrient-rich infusions",
    badgeText: "Prifya Lab 01",
    imgSrc: "/images/post-1.png", // Aap apni images yahan badal sakte hain bahi g
    gridClass: "md:col-span-8 md:row-span-2 min-h-[380px] md:min-h-auto",
    glowStyles: "group-hover:border-brand-border group-hover:shadow-[0_0_50px_rgba(184,155,114,0.15)]", // Gold Accent Glow
  },
  {
    id: 2,
    title: "Daily Radiance & Moisture",
    subtitle: "Intense skin barrier recovery & hydration frameworks",
    badgeText: "Essential Care",
    imgSrc: "/images/post-2.png",
    gridClass: "md:col-span-4 md:row-span-1 min-h-[260px] md:min-h-auto",
    glowStyles: "group-hover:border-brand-cyan group-hover:shadow-[0_0_50px_rgba(138,154,134,0.15)]", // Sage Green Glow
  },
  {
    id: 3,
    title: "Overnight Repair Elixirs",
    subtitle: "Deep cellular rejuvenation while you rest",
    badgeText: "Night Therapy",
    imgSrc: "/images/post-3.png",
    gridClass: "md:col-span-4 md:row-span-1 min-h-[260px] md:min-h-auto",
    glowStyles: "group-hover:border-brand-muted group-hover:shadow-[0_0_50px_rgba(106,143,103,0.15)]", // Darker Sage Accent Glow
  },
];

export default function FeaturedCategories() {
  // Mobile Swiper States
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);
  const [swipeOffset, setSwipeOffset] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);

  // Mobile Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setSwipeOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    if (swipeOffset < -80) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    } else if (swipeOffset > 80) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
    }
    setSwipeOffset(0);
  };

  const getOrderedStack = () => {
    const stack = [];
    for (let i = 0; i < categories.length; i++) {
      const index = (currentIndex + i) % categories.length;
      stack.push({ ...categories[index], stackIndex: i });
    }
    return stack.reverse(); 
  };

  return (
    <section className="bg-brand-dark text-foreground py-24 px-4 md:px-8 border-t border-brand-card/40">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* PREMIUM SECTION HEAD ARCHITECTURE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-card/60">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card/30 border border-brand-border/30 text-[10px] font-semibold tracking-[0.2em] text-brand-muted uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-border animate-pulse" />
              Prifya Botanical Labs
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">
              Skin, <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-muted via-brand-border to-brand-cyan">Reimagined.</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-foreground/80 font-light max-w-sm leading-relaxed md:text-right">
            Explore premium skincare formulations scientifically developed to harmonize with your skin's natural biology and restore timeless radiance.
          </p>
        </div>

        {/* DESKTOP VIEW: HIGH-END BENTO GRID LAYOUT */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-12 md:auto-rows-[260px] gap-6 w-full">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative rounded-3xl overflow-hidden bg-brand-card/20 border border-brand-border/20 transition-all duration-700 ease-out flex flex-col justify-between p-8 cursor-pointer transform-gpu ${category.gridClass} ${category.glowStyles}`}
            >
              <div className="relative z-20 flex justify-between items-start w-full">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-muted group-hover:text-brand-border transition-colors duration-500 bg-brand-dark/90 backdrop-blur-md px-3 py-1 rounded-full border border-brand-border/20">
                  {category.badgeText}
                </span>
              </div>

              {/* Background Product Image */}
              <div className="absolute inset-0 z-0 opacity-75 group-hover:opacity-90 transition-all duration-700 ease-out transform-gpu group-hover:scale-[1.04]">
                <Image
                  src={category.imgSrc}
                  alt={category.title}
                  fill
                  sizes="(max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={category.id === 1}
                  unoptimized
                />
              </div>

              {/* Light Vignette overlay blending seamlessly with brand-dark cream color */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />

              {/* Content info wrapper */}
              <div className="relative z-20 mt-auto space-y-1.5 transform-gpu transition-transform duration-500 group-hover:translate-x-1">
                <h3 className="text-2xl font-medium tracking-wide text-foreground">
                  {category.title}
                </h3>
                <p className="text-xs text-foreground/80 font-light tracking-wide max-w-xs">
                  {category.subtitle}
                </p>
                
                {/* Micro-interaction interactive label */}
                <div className="pt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-muted opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-12 overflow-hidden">
                  <span>Discover Routine</span>
                  <span className="text-xs transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border/20 to-transparent group-hover:via-brand-border transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* MOBILE VIEW: STACKED CARD SWIPER */}
        <div className="md:hidden relative w-full h-[450px] flex items-center justify-center overflow-hidden">
          {getOrderedStack().map((item) => {
            const isTopCard = item.stackIndex === 0;
            
            const scale = 1 - item.stackIndex * 0.04;
            const translateY = item.stackIndex * 14;
            const opacity = item.stackIndex === 2 ? 0.4 : 1;

            const transformStyle = isTopCard
              ? `translateX(${swipeOffset}px) rotate(${swipeOffset * 0.04}deg) scale(1)`
              : `translateX(0px) rotate(0deg) scale(${scale})`;

            return (
              <div
                key={item.id}
                onTouchStart={isTopCard ? handleTouchStart : undefined}
                onTouchMove={isTopCard ? handleTouchMove : undefined}
                onTouchEnd={isTopCard ? handleTouchEnd : undefined}
                className="absolute w-full max-w-[340px] h-[400px] rounded-3xl overflow-hidden bg-brand-dark border border-brand-border/30 p-6 flex flex-col justify-between shadow-[0_25px_60px_rgba(62,42,32,0.12)] select-none transform-gpu"
                style={{
                  transform: `${transformStyle} translateY(${translateY}px)`, 
                  transformOrigin: 'bottom center', 
                  opacity: opacity,
                  zIndex: 50 - item.stackIndex,
                  transition: isSwiping && isTopCard 
                    ? 'none' 
                    : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
                }}
              >
                <div className="relative z-20 flex justify-between items-center">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-brand-muted bg-brand-card/40 border border-brand-border/20 px-3 py-1 rounded-full">
                    {item.badgeText}
                  </span>
                </div>

                <div className="absolute inset-0 z-0 opacity-70">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-10" />

                <div className="relative z-20 mt-auto space-y-1">
                  <h3 className="text-xl font-medium tracking-wide text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-foreground/80 font-light">
                    {item.subtitle}
                  </p>
                  
                  <div className="pt-3 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {categories.map((_, dotIdx) => (
                        <span 
                          key={dotIdx} 
                          className={`h-1 rounded-full transition-all duration-300 ${currentIndex === dotIdx ? 'w-4 bg-brand-border' : 'w-1 bg-brand-card'}`} 
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-brand-muted">
                      <span>Swipe</span>
                      <span>⇄</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="block md:hidden text-center text-[9px] tracking-[0.25em] text-brand-muted uppercase font-medium">
          Swipe left or right to toggle collections
        </p>

      </div>
    </section>
  );
}