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
    question: "What makes PRIFYA Serum different from regular mass-market hair oils?",
    answer: "Traditional hair oils rely on thick, synthetic silicones that weigh down hair and clog follicles on the surface. PRIFYA is a micro-formulated fluid engine that relies on pure, cold-extracted Rosemary and Biotin molecules that penetrate deep into the roots instantly without leaving any heavy or greasy residue.",
    tag: "Formulation"
  },
  {
    id: 2,
    question: "How long does it take to see visible results with the Rosemary & Biotin serum?",
    answer: "Consistency locks in the transformation. While natural cellular hydration is restored within the first 14 days, structural optimization and dense follicle nourishment become visibly clear within 6 to 8 weeks of daily application.",
    tag: "Results"
  },
  {
    id: 3,
    question: "Is this serum safe for chemically treated or highly sensitive scalps?",
    answer: "Absolutely. We reject all synthetic fillers, synthetic dyes, and artificial fragrances. Every active batch is precisely calibrated to match the natural physiological pH balance of skin (pH 5.5), ensuring deep, zero-irritation cellular support.",
    tag: "Skin Safety"
  },
  {
    id: 4,
    question: "How should I integrate PRIFYA into my existing daily haircare routine?",
    answer: "Apply 3–5 drops directly to clean, dry, or towel-dried scalp daily. Message gently with your fingertips in circular patterns to stimulate microcirculation. The active formulation absorbs immediately, requiring zero rinsing afterward.",
    tag: "Application"
  },
  {
    id: 5,
    question: "Can I use this serum if I have an oily scalp condition?",
    answer: "Yes. Unlike typical oily treatments that disrupt skin health, PRIFYA's clean botanical core balances excessive sebum production. It targets dormant roots directly while maintaining an weightless, dry-touch clean surface profile.",
    tag: "Scalp Type"
  },
  {
    id: 6,
    question: "Where are the active organic ingredients sourced and manufactured?",
    answer: "We ensure absolute quality control by managing everything locally. Our clean botanical extracts are responsibly sourced under strict sustainability criteria and formulated in highly controlled, non-diluted premium batches.",
    tag: "Sourcing"
  },
  {
    id: 7,
    question: "What is the shelf life of a premium PRIFYA serum bottle?",
    answer: "Because we use stable, pure botanical stabilizers instead of aggressive chemical preservatives, each active batch remains perfectly potent and active for up to 12 months after the initial opening container state.",
    tag: "Potency"
  },
  {
    id: 8,
    question: "Does the bottle come with precise dosage tracking controls?",
    answer: "Yes, minimal design meets precise luxury function. Each bottle integrates an ultra-precise micro-dropper pipeline that dispenses exact continuous drop sizes, eliminating any formula wastage during your application routine.",
    tag: "Aesthetics"
  },
  {
    id: 9,
    question: "How does the Community Glow Share cashback program work?",
    answer: "We completely reject fake commercial reviews. We reward genuine transformations within our conscious community. Share your raw, unfiltered journey video or photo on TikTok or Instagram tagging #PRIFYA, and our team will process a 15% reward back to your source.",
    tag: "Community"
  },
  {
    id: 10,
    question: "What is your quality guarantee protocol if it doesn't suit my skin?",
    answer: "Your dermal harmony is our core promise. If our clean formulation doesn't align with your skin's ecosystem within 30 days, reach out to our support node coordinates for a seamless, completely friction-free response framework.",
    tag: "Guarantee"
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
    <section className="bg-brand-dark text-foreground py-24 px-4 md:px-8 border-t border-brand-card/40 font-sans">
      
      {/* Self-contained premium skin-science animation style layer */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes skinFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-skin-active {
          animation: skinFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER BLOCK */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-card/40">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card/20 border border-brand-border/20 text-[10px] font-semibold tracking-[0.25em] text-brand-muted uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-border animate-pulse" />
              Support Journal
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-tight text-foreground">
              Frequent Queries. <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-foreground via-brand-muted to-brand-border">Resolved.</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-brand-muted font-light max-w-sm leading-relaxed md:text-right">
            Deep dive into the cellular science, active botanical pipelines, and daily application frameworks of the PRIFYA ecosystem.
          </p>
        </div>

        {/* 1. MOBILE ARCHITECTURE: SINGLE ISOLATED VIEW CARD */}
        <div className="block md:hidden space-y-6">
          <div 
            className={`w-full border rounded-2xl p-6 min-h-[240px] bg-brand-card/10 border-brand-border/20 flex flex-col justify-between transition-all duration-300 ${
              animating ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100 animate-skin-active'
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-md bg-brand-dark border border-brand-border/10 text-brand-muted">
                  {faqData[mobileIndex].tag}
                </span>
                <span className="text-[10px] font-mono text-brand-muted/60">
                  Item // 0{faqData[mobileIndex].id}
                </span>
              </div>
              
              <h3 className="text-base font-serif font-normal tracking-wide text-foreground leading-snug">
                {faqData[mobileIndex].question}
              </h3>
              
              <p className="text-xs text-foreground/80 font-light leading-relaxed border-t border-brand-card/40 pt-4">
                {faqData[mobileIndex].answer}
              </p>
            </div>
          </div>

          {/* MOBILE CONTROLLERS & SKIN-STYLE PROGRESS INDICATOR */}
          <div className="flex items-center justify-between bg-brand-card/10 border border-brand-border/20 p-3 rounded-xl">
            {/* Previous Button */}
            <button 
              onClick={() => handleMobileNav('prev')}
              className="w-11 h-11 rounded-lg border border-brand-border/20 bg-brand-dark/40 flex items-center justify-center text-sm text-brand-muted active:bg-brand-border active:text-brand-dark transition-all select-none"
            >
              ←
            </button>

            {/* Micro Progress Metrics */}
            <div className="flex flex-col items-center gap-1.5 w-1/2">
              <span className="text-[10px] font-mono tracking-[0.15em] text-brand-muted/70">
                {mobileIndex + 1 < 10 ? `0${mobileIndex + 1}` : mobileIndex + 1} / {faqData.length}
              </span>
              <div className="w-full h-[2px] bg-brand-card/40 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-muted transition-all duration-500 ease-out"
                  style={{ width: `${((mobileIndex + 1) / faqData.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Next Button */}
            <button 
              onClick={() => handleMobileNav('next')}
              className="w-11 h-11 rounded-lg border border-brand-border/20 bg-brand-dark/40 flex items-center justify-center text-sm text-brand-muted active:bg-brand-border active:text-brand-dark transition-all select-none"
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
                    ? 'bg-brand-card/20 border-brand-border/30' 
                    : 'bg-brand-card/10 border-brand-border/10 hover:border-brand-border/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 flex items-center justify-between text-left gap-4 select-none"
                >
                  <div className="space-y-1.5">
                    <span className={`text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border transition-colors ${
                      isOpen 
                        ? 'bg-brand-dark border-brand-border/20 text-brand-muted' 
                        : 'bg-transparent border-brand-border/10 text-brand-muted/40'
                    }`}>
                      {item.tag}
                    </span>
                    <h3 className="text-sm md:text-base font-serif font-normal text-foreground tracking-wide transition-colors group-hover:text-brand-muted">
                      {item.question}
                    </h3>
                  </div>

                  <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isOpen 
                      ? 'border-brand-border/40 bg-brand-border/10 text-brand-muted rotate-45' 
                      : 'border-brand-border/20 text-brand-muted/40'
                  }`}>
                    <span className="text-sm font-light">+</span>
                  </div>
                </button>

                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-56 border-t border-brand-border/10' : 'max-h-0'
                }`}>
                  <div className="p-5 text-xs md:text-sm text-foreground/80 font-light leading-relaxed bg-brand-dark/10">
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