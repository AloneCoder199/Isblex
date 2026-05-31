"use client";
import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  tag: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What makes ISBLEX different from regular consumer RGB light strips?",
    answer: "Traditional RGB strips expose raw diodes, causing harsh hot-spots and low color fidelity. ISBLEX is engineered as a monolithic structural framework using high-density architectural matrices that emit perfectly diffused, continuous ambient light fields with zero visible bulk.",
    tag: "Architecture"
  },
  {
    id: 2,
    question: "What is CRI 95+ and why is it crucial for my space?",
    answer: "Color Rendering Index (CRI) measures how accurately a light source reveals true colors. Standard lights hover around CRI 70, washing out details. ISBLEX operates at CRI 95+, ensuring skin tones, textures, and gaming setups look mathematically perfect and studio-accurate.",
    tag: "Display Science"
  },
  {
    id: 3,
    question: "Will ISBLEX arrays cause flickering on my stream or camera video calls?",
    answer: "No. Cheap lights use low-frequency Pulse Width Modulation (PWM) which causes visible rolling lines on camera and neurological eye strain. ISBLEX integrates custom continuous-current solid drivers delivering 0.0% ripple current for flawless, flicker-free camera capturing.",
    tag: "Engineering"
  },
  {
    id: 4,
    question: "How do I control the light fields? Does it integrate with smart home setups?",
    answer: "Every ISBLEX array features a multi-protocol localized core chip. It integrates natively with Apple HomeKit, Google Home, Amazon Alexa, and your active home digital pipelines via Wi-Fi and Bluetooth automation ecosystems.",
    tag: "Ecosystem"
  },
  {
    id: 5,
    question: "Can the light arrays be customized or cut to fit specific wall dimensions?",
    answer: "Our structural frameworks are built in precise geometric architectural modules. While the core aluminum housing cannot be cut casually, our modular connector pipeline allows you to link or align configurations to fit seamless wall-to-ceiling bounds.",
    tag: "Installation"
  },
  {
    id: 6,
    question: "What materials are used to build the hardware chassis?",
    answer: "We reject cheap plastics. The entire structural housing is precision milled from 6063 aerospace-grade anodized aluminum. This provides an ultra-minimal monolithic look while serving as a heavy-duty passive thermal sink.",
    tag: "Hardware"
  },
  {
    id: 7,
    question: "What is the expected lifespan of the ISBLEX internal light engine?",
    answer: "Thanks to our passive thermodynamic aluminum architecture, the internal diodes run exceptionally cool. This preserves performance boundaries, ensuring a lifecycles metric exceeding 50,000 continuous operational hours.",
    tag: "Durability"
  },
  {
    id: 8,
    question: "Is the power supply brick bulky? How do I hide the cables?",
    answer: "We design for absolute minimalism. ISBLEX systems utilize an ultra-slim line-in driver block that can easily be tucked behind furniture or route panels. All structural cables use ultra-thin matte-black layouts to remain entirely invisible.",
    tag: "Aesthetics"
  },
  {
    id: 9,
    question: "How does the Pioneer Program 15% cashback bounty work?",
    answer: "Since we completely ban fake bought feedback, we reward our first true setup founders. Simply deploy your ISBLEX framework, upload a raw video/photo to TikTok/Instagram tagging #ISBLEX, and our node team will issue a 15% refund directly back to your payment source.",
    tag: "Community"
  },
  {
    id: 10,
    question: "What framework warranty protocol do you provide?",
    answer: "Every configuration is covered by our 2-Year Monolithic Hardware Warranty. If any internal component or localized driver exhibits failure under normal calibration boundaries, we deploy a replacement module directly to your coordinates, zero friction.",
    tag: "Warranty"
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // Trigger smooth state transition for mobile slider
  const handleMobileNav = (direction: 'next' | 'prev') => {
    setAnimating(true);
    setTimeout(() => {
      if (direction === 'next') {
        setMobileIndex((prev) => (prev + 1) % faqData.length);
      } else {
        setMobileIndex((prev) => (prev - 1 + faqData.length) % faqData.length);
      }
      setAnimating(false);
    }, 200); // Matches animation speed
  };

  return (
    <section className="bg-[#0A0A0A] text-[#F8FAFC] py-24 px-4 md:px-8 border-t border-[#1E293B]">
      
      {/* Self-contained premium micro-animation style layer */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes nodeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-node-active {
          animation: nodeSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER BLOCK */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1E293B]/40">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#1E293B] text-[10px] font-semibold tracking-[0.2em] text-[#22D3EE] uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              Information Matrix
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#F8FAFC]">
              Frequently Queries. <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#94A3B8] to-[#475569]">Resolved.</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#94A3B8] font-light max-w-xs leading-relaxed md:text-right">
            Deep dive into the structural physics, ecosystem pipelines, and deployment frameworks of ISBLEX hardware.
          </p>
        </div>

        {/* 1. MOBILE ARCHITECTURE: SINGLE ISOLATED VIEW CARD (0% OVERFLOW RISK) */}
        <div className="block md:hidden space-y-6">
          <div 
            className={`w-full border rounded-2xl p-6 min-h-[240px] bg-[#111827] border-[#1E293B] flex flex-col justify-between transition-all duration-300 ${
              animating ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100 animate-node-active'
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-md bg-[#0A0A0A] border border-[#1E293B]/60 text-[#22D3EE]">
                  {faqData[mobileIndex].tag}
                </span>
                <span className="text-[10px] font-mono text-[#475569]">
                  Node // 0{faqData[mobileIndex].id}
                </span>
              </div>
              
              <h3 className="text-base font-medium tracking-wide text-[#F8FAFC] leading-snug">
                {faqData[mobileIndex].question}
              </h3>
              
              <p className="text-xs text-[#94A3B8] font-light leading-relaxed border-t border-[#1E293B]/40 pt-4">
                {faqData[mobileIndex].answer}
              </p>
            </div>
          </div>

          {/* MOBILE CONTROLLERS & APP-STYLE PROGRESS INDICATOR */}
          <div className="flex items-center justify-between bg-[#111827]/40 border border-[#1E293B]/60 p-3 rounded-xl">
            {/* Previous Button */}
            <button 
              onClick={() => handleMobileNav('prev')}
              className="w-11 h-11 rounded-lg border border-[#1E293B] bg-[#0A0A0A]/40 flex items-center justify-center text-sm text-[#94A3B8] active:bg-[#22D3EE] active:text-[#0A0A0A] active:border-[#22D3EE]/40 transition-all select-none"
            >
              ←
            </button>

            {/* Micro Progress Metrics */}
            <div className="flex flex-col items-center gap-1.5 w-1/2">
              <span className="text-[10px] font-mono tracking-[0.15em] text-[#64748B]">
                {mobileIndex + 1 < 10 ? `0${mobileIndex + 1}` : mobileIndex + 1} / 10
              </span>
              <div className="w-full h-[2px] bg-[#1E293B] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#22D3EE] transition-all duration-500 ease-out"
                  style={{ width: `${((mobileIndex + 1) / faqData.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Next Button */}
            <button 
              onClick={() => handleMobileNav('next')}
              className="w-11 h-11 rounded-lg border border-[#1E293B] bg-[#0A0A0A]/40 flex items-center justify-center text-sm text-[#94A3B8] active:bg-[#22D3EE] active:text-[#0A0A0A] active:border-[#22D3EE]/40 transition-all select-none"
            >
              →
            </button>
          </div>
        </div>

        {/* 2. DESKTOP ARCHITECTURE: ASYMMETRIC 2-COLUMN GRID */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4 items-start w-full">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            
            return (
              <div
                key={item.id}
                className={`group border transition-all duration-300 rounded-2xl overflow-hidden ${
                  isOpen 
                    ? 'bg-[#111827] border-[#1E293B]' 
                    : 'bg-[#111827]/30 border-[#1E293B]/60 hover:border-[#22D3EE]/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 flex items-center justify-between text-left gap-4 select-none"
                >
                  <div className="space-y-1.5">
                    <span className={`text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border transition-colors ${
                      isOpen 
                        ? 'bg-[#0A0A0A] border-[#1E293B] text-[#22D3EE]' 
                        : 'bg-transparent border-[#1E293B]/40 text-[#475569]'
                    }`}>
                      {item.tag}
                    </span>
                    <h3 className="text-sm md:text-base font-medium text-[#F8FAFC] tracking-wide transition-colors group-hover:text-[#22D3EE]">
                      {item.question}
                    </h3>
                  </div>

                  <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isOpen 
                      ? 'border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE] rotate-45' 
                      : 'border-[#1E293B] text-[#475569]'
                  }`}>
                    <span className="text-sm font-light">+</span>
                  </div>
                </button>

                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-48 border-t border-[#1E293B]/50' : 'max-h-0'
                }`}>
                  <div className="p-5 text-xs md:text-sm text-[#94A3B8] font-light leading-relaxed bg-[#0A0A0A]/20">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}