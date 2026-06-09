"use client";
import React from 'react';
import Image from 'next/image';

interface SocialClip {
  id: number;
  platform: 'tiktok' | 'instagram';
  handle: string;
  metricViews: string;
  caption: string;
  imgSrc: string; // Video thumbnail path in public folder
  link: string; // Social platform video source url
}

const viralClips: SocialClip[] = [
  {
    id: 1,
    platform: 'tiktok',
    handle: '@prifya.skin',
    metricViews: "142K Views",
    caption: "The exact moment the morning routine hits that soft, natural cellular glow. ✨",
    imgSrc: "/images/post-1.png", 
    link: "https://tiktok.com"
  },
  {
    id: 2,
    platform: 'instagram',
    handle: '@prifya_skin',
    metricViews: "89K Plays",
    caption: "Zero synthetic noise, pure results. Rosemary & Biotin active hair serum essence.",
    imgSrc: "/images/post-2.png",
    link: "https://instagram.com"
  },
  {
    id: 3,
    platform: 'tiktok',
    handle: '@prifya.skin',
    metricViews: "230K Views",
    caption: "POV: You threw away the chemical fillers and embraced radical dermal purity.",
    imgSrc: "/images/post-3.png",
    link: "https://tiktok.com"
  },
  {
    id: 4,
    platform: 'instagram',
    handle: '@prifya_skin',
    metricViews: "115K Plays",
    caption: "Unfiltered texture. Achieving effortless hydration and structural balance every single day.",
    imgSrc: "/images/best-4.png",
    link: "https://instagram.com"
  }
];

export default function SocialFeed() {
  
  const handleClipRedirect = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="bg-brand-dark text-foreground py-24 border-t border-brand-card/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* SECTION HEADER BLOCK */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-card/40">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card/20 border border-brand-border/20 text-[10px] font-semibold tracking-[0.25em] text-brand-muted uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-border animate-pulse" />
              Community Stories
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-tight text-foreground">
              PRIFYA in <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-foreground via-brand-muted to-brand-border">Real Life.</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-brand-muted font-light max-w-sm leading-relaxed md:text-right">
            Raw, unfiltered skincare journeys and organic transformations shared by our conscious community.
          </p>
        </div>

        {/* MOBILE: SMOOTH SNAP-SCROLL | DESKTOP: 4-COLUMN ASPECT MASK */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 gap-6 pb-6 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
          {viralClips.map((clip) => (
            <div
              key={clip.id}
              onClick={() => handleClipRedirect(clip.link)}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center aspect-[9/16] relative rounded-2xl overflow-hidden bg-brand-card/10 border border-brand-border/20 hover:border-brand-border/40 transition-all duration-700 ease-out cursor-pointer group shadow-2xl flex flex-col justify-between p-5"
            >
              
              {/* Top Meta Details Layer */}
              <div className="relative z-20 flex justify-between items-center w-full">
                <div className="flex items-center gap-1.5 bg-brand-dark/70 backdrop-blur-md py-1 px-2.5 rounded-md border border-brand-border/10">
                  <span className="text-[10px] font-mono text-foreground/90 font-medium">{clip.handle}</span>
                </div>
                
                {/* Platform Badge Icon */}
                <div className="w-6 h-6 rounded-full bg-brand-dark/60 border border-brand-border/10 flex items-center justify-center text-[9px] font-mono text-brand-muted">
                  {clip.platform === 'tiktok' ? 'TT' : 'IG'}
                </div>
              </div>

              {/* Central Premium Play Icon */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-brand-dark/40 backdrop-blur-md border border-brand-border/20 flex items-center justify-center text-xs text-foreground opacity-60 group-hover:opacity-100 group-hover:scale-105 group-hover:bg-foreground group-hover:text-brand-dark transition-all duration-500 shadow-xl">
                  ▶
                </div>
              </div>

              {/* Background Video Poster / Lifestyle Thumbnail */}
              <div className="absolute inset-0 z-0 opacity-50 group-hover:opacity-75 transition-all duration-1000 transform group-hover:scale-[1.02]">
                <Image
                  src={clip.imgSrc}
                  alt={clip.caption}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover filter brightness-95 group-hover:filter-none transition-all duration-700"
                  priority
                />
              </div>

              {/* High Contrast Soft Gradient Mask for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent z-10" />

              {/* Bottom Meta Content Block */}
              <div className="relative z-20 mt-auto space-y-2">
                <p className="text-xs text-foreground font-light tracking-wide line-clamp-2 leading-relaxed">
                  {clip.caption}
                </p>
                
                {/* Micro Metric counter tracking verification speed */}
                <div className="flex items-center gap-2 pt-2 border-t border-brand-border/10">
                  <span className="w-1 h-1 rounded-full bg-brand-muted animate-pulse" />
                  <span className="text-[9px] font-mono tracking-widest uppercase text-brand-muted group-hover:text-foreground transition-colors">
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