"use client";
import React from 'react';
import Image from 'next/image';

interface RoomCategory {
  id: number;
  roomNumber: string;
  title: string;
  concept: string;
  collectionSlug: string;
  imgSrc: string;
  badgeText: string;
}

const roomCollections: RoomCategory[] = [
  {
    id: 1,
    roomNumber: "01",
    title: "Gaming Combat Station",
    concept: "High-velocity tactical ambient setups",
    collectionSlug: "gaming-room",
    imgSrc: "/images/gaming.png", // Premium gaming setups
    badgeText: "04 Arrays Ready"
  },
  {
    id: 2,
    roomNumber: "02",
    title: "Minimalist Sanctuary",
    concept: "Low-ambient biological resting light",
    collectionSlug: "bedroom",
    imgSrc: "/images/Minimalist.png", // Sleek modern bedroom
    badgeText: "03 Arrays Ready"
  },
  {
    id: 3,
    roomNumber: "03",
    title: "Architectural Living Space",
    concept: "Grand perimeter geometric lightscapes",
    collectionSlug: "living-room",
    imgSrc: "/images/LivingSpace.png", // High-end living room
    badgeText: "05 Arrays Ready"
  },
  {
    id: 4,
    roomNumber: "04",
    title: "Focus Workspace Node",
    concept: "High-CRI precision desktop illumination",
    collectionSlug: "workspace",
    imgSrc: "/images/FocusWorkspace.png", // Cyberpunk/Minimal workspace
    badgeText: "02 Arrays Ready"
  }
];

export default function ShopByRoom() {
  
  const handleNavigation = (slug: string) => {
    // Redirect logic to specific collection page
    window.location.href = `/collections/${slug}`;
  };

  return (
    <section className="bg-[#0A0A0A] text-[#F8FAFC] py-24 px-4 md:px-8 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER BLOCK */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1E293B]/40">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#1E293B] text-[10px] font-semibold tracking-[0.2em] text-[#A78BFA] uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
              Spatial Categorization
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#F8FAFC]">
              Shop By <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#C084FC] to-[#6366F1]">Environment.</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#94A3B8] font-light max-w-xs leading-relaxed md:text-right">
            Every setup is mathematically calibrated for specific architectural spatial boundaries. Select your node.
          </p>
        </div>

        {/* 4-COLUMN PREMIUM FLEX GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {roomCollections.map((room) => (
            <div
              key={room.id}
              onClick={() => handleNavigation(room.collectionSlug)}
              className="group relative h-[420px] rounded-2xl overflow-hidden bg-[#111827] border border-[#1E293B] hover:border-[#A78BFA]/40 transition-all duration-700 ease-out p-6 flex flex-col justify-between cursor-pointer select-none shadow-lg"
            >
              {/* Top Layer: Index Number & Stock Micro-Badge */}
              <div className="relative z-20 flex justify-between items-center w-full">
                <span className="text-xs font-mono font-bold text-[#475569] group-hover:text-[#A78BFA] transition-colors duration-500">
                  {room.roomNumber} //
                </span>
                <span className="text-[9px] font-bold tracking-wider uppercase text-[#94A3B8] bg-[#0A0A0A]/70 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-[#1E293B]/60">
                  {room.badgeText}
                </span>
              </div>

              {/* Background Image Stage with Instant Engine Bypass */}
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-all duration-700 ease-out transform group-hover:scale-[1.04]">
                <Image
                  src={room.imgSrc}
                  alt={room.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  unoptimized={true} // Zero loading lag guarantee
                />
              </div>

              {/* High Contrast Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent z-10" />

              {/* Bottom Typography Block */}
              <div className="relative z-20 mt-auto space-y-1.5 transform transition-transform duration-500 group-hover:translate-x-1">
                <h3 className="text-xl font-medium tracking-tight text-[#F8FAFC]">
                  {room.title}
                </h3>
                <p className="text-[11px] text-[#94A3B8] font-light leading-snug max-w-[200px]">
                  {room.concept}
                </p>
                
                {/* Micro Action Visual Prompt */}
                <div className="pt-3 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#A78BFA] opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-10 overflow-hidden">
                  <span>Enter Collection</span>
                  <span className="text-xs transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>

              {/* Bottom Edge Violet Laser Indicator Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#A78BFA]/40 transition-all duration-700" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}