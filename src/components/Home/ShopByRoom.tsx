"use client";
import React from 'react';
import Image from 'next/image';

interface ConcernCategory {
  id: number;
  nodeNumber: string;
  title: string;
  concept: string;
  collectionSlug: string;
  imgSrc: string;
  badgeText: string;
  accentClass: string;
}

const concernCollections: ConcernCategory[] = [
  {
    id: 1,
    nodeNumber: "01",
    title: "Hair Fall & Follicle Thinning",
    concept: "Targeted root activation and density restoration formulas.",
    collectionSlug: "hair-loss-thinning",
    imgSrc: "/images/pro-1.jpeg", 
    badgeText: "Follicle Care",
    accentClass: "group-hover:via-[#3D6E55]/60 text-[#3D6E55]" 
  },
  {
    id: 2,
    nodeNumber: "02",
    title: "Advanced Cellular Age Defiance",
    concept: "Fine line smoothing and collagen recovery via phyto-retinols.",
    collectionSlug: "aging-fine-lines",
    imgSrc: "/images/pro-2.jpeg", 
    badgeText: "Chrono Renewal",
    accentClass: "group-hover:via-[#D4AF37]/60 text-[#D4AF37]" 
  },
  {
    id: 3,
    nodeNumber: "03",
    title: "Hyperpigmentation & Dullness",
    concept: "High-potency antioxidant glazes for spotless, glassy skin texture.",
    collectionSlug: "dullness-dark-spots",
    imgSrc: "/images/pro-3.jpeg", 
    badgeText: "Radiance Glaze",
    accentClass: "group-hover:via-[#C49A88]/60 text-[#C49A88]" 
  },
  {
    id: 4,
    nodeNumber: "04",
    title: "Dehydration & Barrier Repair",
    concept: "Intense lipid restoration for compromised, highly sensitive skin.",
    collectionSlug: "dryness-barrier-repair",
    imgSrc: "/images/pro-4.jpeg", 
    badgeText: "Lipid Shield",
    accentClass: "group-hover:via-[#8E7C6E]/60 text-[#8E7C6E]" 
  }
];

export default function ShopByConcern() {
  
  const handleNavigation = (slug: string) => {
    window.location.href = `/collections/${slug}`;
  };

  return (
    <section className="bg-brand-dark text-foreground py-24 px-4 md:px-8 border-t border-brand-card/40">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER BLOCK */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-card/60">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card/30 border border-brand-border/30 text-[10px] font-semibold tracking-[0.2em] text-brand-muted uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-border animate-pulse" />
              Targeted Counter-Formulas
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground">
              Shop By <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-foreground via-brand-muted to-brand-border">Dermal Concern.</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-foreground/70 font-light max-w-xs leading-relaxed md:text-right">
            Skip the guesswork. Select your active anatomical problem profile and let our bio-labs route you to the clinical cure.
          </p>
        </div>

        {/* 4-COLUMN ULTRA-CRISP CONCERN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {concernCollections.map((concern) => (
            <div
              key={concern.id}
              onClick={() => handleNavigation(concern.collectionSlug)}
              className="group relative h-[440px] rounded-3xl overflow-hidden bg-brand-card/20 border border-brand-border/20 hover:border-brand-border/50 transition-all duration-500 p-6 flex flex-col justify-between cursor-pointer select-none shadow-xl"
            >
              {/* Background Image Stage - Now crystal clear with optimized opacities */}
              <div className="absolute inset-0 z-0 opacity-85 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-[1.04]">
                <Image
                  src={concern.imgSrc}
                  alt={concern.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  unoptimized={true}
                />
              </div>

              {/* High-End Studio Linear Gradient Mask - Only blends the bottom text area, keeps the top image perfectly clean */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent/10 z-10" />

              {/* Top Layer Content (Over the Image) */}
              <div className="relative z-20 flex justify-between items-center w-full">
                <span className="text-xs font-mono font-semibold text-foreground/70 drop-shadow-md group-hover:text-brand-muted transition-colors duration-500">
                  Node {concern.nodeNumber} //
                </span>
                <span className="text-[9px] font-bold tracking-wider uppercase text-brand-muted bg-brand-dark/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-brand-border/20 shadow-sm">
                  {concern.badgeText}
                </span>
              </div>

              {/* Bottom Typography Solution Block */}
              <div className="relative z-20 mt-auto space-y-2 transform transition-transform duration-500 group-hover:translate-x-1">
                <h3 className="text-lg md:text-xl font-medium tracking-tight text-foreground leading-snug drop-shadow-md">
                  {concern.title}
                </h3>
                <p className="text-[11px] text-foreground/80 font-light leading-relaxed max-w-[210px] drop-shadow-xs">
                  {concern.concept}
                </p>
                
                {/* Premium Action Visual Prompt */}
                <div className="pt-2 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-muted opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-10 overflow-hidden">
                  <span>View Regimen</span>
                  <span className="text-xs transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>

              {/* Bottom Edge Luxury Theme-Accent Indicator Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-transparent to-transparent transition-all duration-700 ${concern.accentClass}`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}