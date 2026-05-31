"use client";
import React from 'react';
import Image from 'next/image';

export default function CustomerReviewsUGC() {
  
  const handleSocialRedirect = () => {
    // Put your actual TikTok or Instagram profile link here
    window.open('https://tiktok.com/@isblex', '_blank');
  };

  return (
    <section className="bg-[#0A0A0A] text-[#F8FAFC] py-24 px-4 md:px-8 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: HONEST BRAND NARRATIVE */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#1E293B] text-[10px] font-semibold tracking-[0.2em] text-[#22D3EE] uppercase w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                100% Radical Authenticity
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#F8FAFC]">
                Loved By <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#94A3B8] to-[#475569]">Modern Home Owners.</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm md:text-base text-[#94A3B8] font-light leading-relaxed max-w-xl">
              <p>
                <strong className="text-[#F8FAFC] font-medium">Zero Fabricated Reviews. Pure Social Grid.</strong> We are an architectural lighting framework newly deployed into the wild. Instead of purchasing automated fake feedback, we choose transparency.
              </p>
              <p>
                This matrix is strictly reserved for our founding customers. We invite you to build the ISBLEX visual ecosystem with us. 
              </p>
            </div>

            {/* THE INCENTIVE PROGRAM STEPS */}
            <div className="space-y-3 bg-[#111827]/40 border border-[#1E293B]/60 p-6 rounded-2xl max-w-xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#22D3EE]">The Pioneer Initiative:</h4>
              <ul className="space-y-2.5 text-xs text-[#94A3B8] font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#22D3EE] font-mono">[01]</span>
                  <span>Integrate any ISBLEX ambient array into your bedroom, gaming bunker, or workspace.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#22D3EE] font-mono">[02]</span>
                  <span>Capture a raw video or photo of your dynamic spatial transformation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#22D3EE] font-mono">[03]</span>
                  <span>Upload to TikTok or Instagram tagging <strong className="text-[#F8FAFC] font-medium">#ISBLEX</strong> to get featured here and unlock a 15% cashback bounty.</span>
                </li>
              </ul>
            </div>

            {/* CALL TO ACTION BUTTON */}
            <div className="pt-2">
              <button
                onClick={handleSocialRedirect}
                className="inline-flex items-center gap-3 bg-[#F8FAFC] text-[#0A0A0A] hover:bg-[#22D3EE] hover:text-[#0A0A0A] px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md group"
              >
                <span>View Our Community Pipeline</span>
                <span className="text-sm transform transition-transform duration-300 group-hover:translate-x-1">➔</span>
              </button>
            </div>

          </div>

          {/* RIGHT SIDE: HIGH-TECH PLACEHOLDER VIEWPORTS (TikTok/Photo Mimic Layout) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative w-full h-[480px]">
            
            {/* Ambient Background Radial Glow behind the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#22D3EE]/5 blur-[100px] rounded-full pointer-events-none" />

            {/* CARD 1: TIKTOK STYLE VIDEO PLACEHOLDER */}
            <div className="relative rounded-2xl border border-[#1E293B] bg-[#111827]/30 flex flex-col justify-between p-5 h-[380px] self-start overflow-hidden group/card">
              <div className="absolute inset-0 z-0 opacity-10">
                <Image 
                  src="/images/bg-image.png" 
                  alt="Placeholder background"
                  fill
                  className="object-cover filter grayscale"
                  unoptimized={true}
                />
              </div>
              <div className="relative z-10 flex justify-between items-center w-full">
                <span className="text-[8px] font-bold tracking-widest text-[#475569] uppercase">Node_01 // Clip</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              </div>
              <div className="relative z-10 text-center space-y-2 py-8">
                <div className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-[#1E293B] flex items-center justify-center mx-auto text-xs text-[#22D3EE] group-hover/card:scale-110 transition-transform duration-500">
                  ▶
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#475569]">Reserved for video</p>
              </div>
              <div className="relative z-10 mt-auto">
                <p className="text-xs font-mono text-[#64748B]">awaiting_deployment.mp4</p>
              </div>
            </div>

            {/* CARD 2: PHOTO SETUP PLACEHOLDER */}
            <div className="relative rounded-2xl border border-[#1E293B] bg-[#111827]/30 flex flex-col justify-between p-5 h-[380px] mt-12 self-start overflow-hidden group/card2">
              <div className="absolute inset-0 z-0 opacity-10">
                <Image 
                  src="/images/local.png" 
                  alt="Placeholder background"
                  fill
                  className="object-cover filter grayscale"
                  unoptimized={true}
                />
              </div>
              <div className="relative z-10 flex justify-between items-center w-full">
                <span className="text-[8px] font-bold tracking-widest text-[#475569] uppercase">Node_02 // Static</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              </div>
              <div className="relative z-10 text-center space-y-1.5 py-8">
                <div className="text-xl text-[#475569] group-hover/card2:text-purple-400 transition-colors duration-500">📷</div>
                <h5 className="text-xs font-medium text-[#94A3B8]">Your Setup Belongs Here</h5>
                <p className="text-[9px] text-[#475569] tracking-wide px-2">Upload your layout to enter the matrix grid.</p>
              </div>
              <div className="relative z-10 mt-auto flex items-center justify-between w-full">
                <div className="flex gap-0.5 text-[#334155]">★★★★★</div>
                <span className="text-[9px] font-mono text-[#64748B]">id: 0892_pending</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}