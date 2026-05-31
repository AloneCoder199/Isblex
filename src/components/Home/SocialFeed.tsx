"use client";
import React from 'react';
import Image from 'next/image';

interface SocialClip {
  id: number;
  platform: 'tiktok' | 'instagram';
  handle: string;
  metricViews: string;
  caption: string;
  imgSrc: string; // Video poster/thumbnail path
  link: string; // Direct video link
}

const viralClips: SocialClip[] = [
  {
    id: 1,
    platform: 'tiktok',
    handle: '@isblex.core',
    metricViews: "142K Views",
    caption: "The exact moment the bedroom matrix shifts to low-ambient rest mode. 📐",
    imgSrc: "/images/feed-1.png", // Change to actual video thumbnails later
    link: "https://tiktok.com"
  },
  {
    id: 2,
    platform: 'instagram',
    handle: '@isblex_design',
    metricViews: "89K Plays",
    caption: "Zero bulk, full spectrum. Architectural precision desk setup configuration.",
    imgSrc: "/images/feed-2.png",
    link: "https://instagram.com"
  },
  {
    id: 3,
    platform: 'tiktok',
    handle: '@isblex.core',
    metricViews: "230K Views",
    caption: "POV: You threw away your basic RGB strip and integrated a real light engine.",
    imgSrc: "/images/feed-3.png",
    link: "https://tiktok.com"
  },
  {
    id: 4,
    platform: 'instagram',
    handle: '@isblex_design',
    metricViews: "115K Plays",
    caption: "Mathematical shadows. Changing spatial geometry with one command line.",
    imgSrc: "/images/feed-4.png",
    link: "https://instagram.com"
  }
];

export default function SocialFeed() {
  
  const handleClipRedirect = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="bg-[#0A0A0A] text-[#F8FAFC] py-24 border-t border-[#1E293B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* SECTION HEADER BLOCK */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1E293B]/40">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#1E293B] text-[10px] font-semibold tracking-[0.2em] text-[#EF4444] uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
              Live Social Pipeline
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#F8FAFC]">
              See ISBLEX In <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#94A3B8] to-[#475569]">Real Homes.</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#94A3B8] font-light max-w-xs leading-relaxed md:text-right">
            Raw, unfiltered architectural configurations captured live by our global digital network.
          </p>
        </div>

        {/* MOBILE: SMOOTH SNAP-SCROLL | DESKTOP: 4-COLUMN ASPECT MASK */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 gap-6 pb-6 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
          {viralClips.map((clip) => (
            <div
              key={clip.id}
              onClick={() => handleClipRedirect(clip.link)}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center aspect-[9/16] relative rounded-2xl overflow-hidden bg-[#111827] border border-[#1E293B] hover:border-[#F8FAFC]/20 transition-all duration-700 ease-out cursor-pointer group shadow-2xl flex flex-col justify-between p-4"
            >
              
              {/* Top Meta Details Layer */}
              <div className="relative z-20 flex justify-between items-center w-full">
                <div className="flex items-center gap-1.5 bg-[#0A0A0A]/70 backdrop-blur-md py-1 px-2.5 rounded-md border border-[#1E293B]/50">
                  <span className="text-[10px] font-mono text-[#F8FAFC]/80">{clip.handle}</span>
                </div>
                
                {/* Platform Badge Icon */}
                <div className="w-6 h-6 rounded-full bg-[#0A0A0A]/60 border border-[#1E293B]/50 flex items-center justify-center text-[10px] text-[#94A3B8]">
                  {clip.platform === 'tiktok' ? 'TT' : 'IG'}
                </div>
              </div>

              {/* Central Dynamic Play Radar Button */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-[#F8FAFC]/10 backdrop-blur-md border border-[#F8FAFC]/20 flex items-center justify-center text-xs text-[#F8FAFC] opacity-40 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-[#F8FAFC] group-hover:text-[#0A0A0A] transition-all duration-500 shadow-xl">
                  ▶
                </div>
              </div>

              {/* Background Video Poster/Frame with Pure Performance Bypass */}
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-all duration-1000 transform group-hover:scale-[1.03]">
                <Image
                  src={clip.imgSrc}
                  alt={clip.caption}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover filter brightness-90 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  unoptimized={true}
                />
              </div>

              {/* High Contrast Gradient Mask for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent z-10" />

              {/* Bottom Meta Content Block */}
              <div className="relative z-20 mt-auto space-y-2">
                <p className="text-xs text-[#F8FAFC] font-light tracking-wide line-clamp-2 leading-relaxed">
                  {clip.caption}
                </p>
                
                {/* Micro Metric counter tracking simulated grid live speed */}
                <div className="flex items-center gap-2 pt-1 border-t border-[#1E293B]/40">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#64748B] group-hover:text-emerald-400 transition-colors">
                    {clip.metricViews}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}