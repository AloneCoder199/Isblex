"use client";
import React from 'react';
import Image from 'next/image';

export default function CustomerReviewsUGC() {
  
  const handleSocialRedirect = () => {
    // Put your actual TikTok or Instagram profile link for Prifya here
    window.open('https://tiktok.com/@prifya.skin', '_blank');
  };

  return (
    <section className="bg-brand-dark text-foreground py-24 px-4 md:px-8 border-t border-brand-card/40 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: HONEST BRAND NARRATIVE */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card/30 border border-brand-border/30 text-[10px] font-bold tracking-[0.2em] text-brand-muted uppercase w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-border animate-pulse" />
                100% Radical Authenticity
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-tight text-foreground leading-tight">
                Loved By <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-foreground via-brand-muted to-brand-border">Conscious Skin Curators.</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm md:text-base text-foreground/70 font-light leading-relaxed max-w-xl">
              <p>
                <strong className="text-foreground font-semibold">Zero Fabricated Reviews. Pure Skin Grid.</strong> We are an advanced dermal formulation framework newly deployed into the wild. Instead of purchasing automated fake feedback, we choose transparency.
              </p>
              <p>
                This matrix is strictly reserved for our founding community. We invite you to document and build the PRIFYA clinical ecosystem with us. 
              </p>
            </div>

            {/* THE INCENTIVE PROGRAM STEPS */}
            <div className="space-y-4 bg-brand-card/20 border border-brand-border/20 p-6 rounded-2xl max-w-xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-muted">The Pioneer Initiative:</h4>
              <ul className="space-y-3 text-xs text-foreground/80 font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-muted font-mono font-medium">[01]</span>
                  <span>Integrate any PRIFYA targeted active formula into your daily morning or evening regimen.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-muted font-mono font-medium">[02]</span>
                  <span>Capture a raw, unedited video or photo of your skin's progressive transition.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-muted font-mono font-medium">[03]</span>
                  <span>Upload to TikTok or Instagram tagging <strong className="text-foreground font-semibold">#PRIFYA</strong> to get featured here and unlock a 15% cashback bounty.</span>
                </li>
              </ul>
            </div>

            {/* CALL TO ACTION BUTTON */}
            <div className="pt-2">
              <button
                onClick={handleSocialRedirect}
                className="inline-flex items-center gap-3 bg-foreground text-brand-dark hover:bg-brand-muted hover:text-brand-dark px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md group"
              >
                <span>View Our Community Pipeline</span>
                <span className="text-sm transform transition-transform duration-300 group-hover:translate-x-1">➔</span>
              </button>
            </div>

          </div>

          {/* RIGHT SIDE: HIGH-TECH PLACEHOLDER VIEWPORTS (Fixed Clear Images) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative w-full h-[480px]">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-border/5 blur-[100px] rounded-full pointer-events-none" />

            {/* CARD 1: TIKTOK STYLE VIDEO PLACEHOLDER */}
            <div className="relative rounded-2xl border border-brand-border/20 bg-brand-card/5 flex flex-col justify-between p-5 h-[380px] self-start overflow-hidden group/card transition-all duration-500 hover:border-brand-border/40 shadow-sm">
              {/* Image Opacity full 100% aur filters clean kar diye hain */}
              <div className="absolute inset-0 z-0 opacity-100 group-hover/card:scale-105 transition-transform duration-700">
                <Image 
                  src="/images/ugc-1.jpeg" 
                  alt="Skin texture clear background"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
              {/* Subtle overlay only at the bottom to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent z-10" />

              <div className="relative z-20 flex justify-between items-center w-full mix-blend-difference">
                <span className="text-[8px] font-bold tracking-widest text-white uppercase font-mono">Node_01 // Routine</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-border animate-pulse" />
              </div>
              
              <div className="relative z-20 text-center space-y-2 py-8 mt-auto mb-auto">
                <div className="w-10 h-10 rounded-full bg-brand-dark/90 border border-brand-border/30 flex items-center justify-center mx-auto text-[10px] text-foreground group-hover/card:scale-110 group-hover/card:border-brand-border transition-all duration-500 shadow-lg backdrop-blur-sm cursor-pointer">
                  ▶
                </div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-foreground font-semibold bg-brand-dark/60 backdrop-blur-sm py-1 px-2 rounded-md inline-block">Awaiting Skin Story</p>
              </div>
              
              <div className="relative z-20 mt-auto">
                <p className="text-[10px] font-mono text-white/80 mix-blend-difference">regimen_evolution.mp4</p>
              </div>
            </div>

            {/* CARD 2: PHOTO SETUP PLACEHOLDER */}
            <div className="relative rounded-2xl border border-brand-border/20 bg-brand-card/5 flex flex-col justify-between p-5 h-[380px] mt-12 self-start overflow-hidden group/card2 transition-all duration-500 hover:border-brand-border/40 shadow-sm">
              {/* Image Opacity full 100% aur filters clean kar diye hain */}
              <div className="absolute inset-0 z-0 opacity-100 group-hover/card2:scale-105 transition-transform duration-700">
                <Image 
                  src="/images/ugc-2.jpeg" 
                  alt="Product vanity setup clear preview"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
              {/* Subtle overlay only at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent z-10" />

              <div className="relative z-20 flex justify-between items-center w-full mix-blend-difference">
                <span className="text-[8px] font-bold tracking-widest text-white uppercase font-mono">Node_02 // Glow Profile</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-muted animate-pulse" />
              </div>
              
              <div className="relative z-20 text-center space-y-2 py-6 mt-auto bg-brand-dark/70 backdrop-blur-sm rounded-xl p-3 border border-brand-border/10">
                <div className="text-lg text-brand-border filter drop-shadow">📷</div>
                <h5 className="text-sm font-serif font-normal text-foreground tracking-tight">Your Journey Belongs Here</h5>
                <p className="text-[10px] text-foreground/80 tracking-wide font-light leading-relaxed">Upload your raw glow to enter the collective archive.</p>
              </div>
              
              <div className="relative z-20 mt-auto pt-2 flex items-center justify-between w-full mix-blend-difference">
                <div className="flex gap-0.5 text-brand-border text-[9px]">★★★★★</div>
                <span className="text-[9px] font-mono text-white/80">id: 0941_pending</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}