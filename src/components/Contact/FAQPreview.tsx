"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Note: Ensure 'Playfair Display' (Serif) and 'Plus Jakarta Sans' (Sans) are imported in your global CSS.

export default function FAQPreview() {
  const faqs = [
    { q: "How long does domestic shipping take?", a: "Standard domestic delivery for your skincare essentials takes 3-5 business days. International transit requires 7-12 days based on customs clearance in your region." },
    { q: "How can I track my ritual order?", a: "Once your carefully curated order dispatches from our lab, you will receive a unique tracking link via email to monitor its journey to you." },
    { q: "What is your return policy for formulations?", a: "To maintain botanical freshness and hygiene, we accept returns within 30 days of delivery provided the products remain unused, sealed, and in their original premium packaging." },
    { q: "Are your products covered by a guarantee?", a: "All Prifya formulations come with a Freshness and Efficacy Guarantee. If you experience any issues with the product quality within the first 6 months, we will replace it." },
    { q: "How do I contact Prifya Skin Concierge?", a: "Visit our dedicated Support Node or email us directly at care@prifya.com for personalized ritual guidance and assistance." },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    // Background: Light Luxury Background (#FDFBF7), Text: Foreground (#3E2A20)
    <section className="bg-[#FDFBF7] text-[#3E2A20] py-20 lg:py-24 px-4 md:px-8 border-b border-[#D0C9BC]/50 font-sans select-none relative overflow-hidden">
      
      {/* Soft Background Accent Glow (Sage Green bloom) */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[#8A9A86]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20 space-y-3">
          {/* Accent: Sage Green (#8A9A86) */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D0C9BC] bg-white text-[#8A9A86] text-[10px] font-sans font-medium tracking-[0.25em] uppercase select-none shadow-sm">
            ESSENTIAL GUIDANCE
          </div>
          {/* Main Title: Luxury Serif, Dark Cocoa color */}
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-[#3E2A20] tracking-tight">Frequently Asked Questions</h3>
          <div className="w-16 h-[1px] bg-[#B89B72]/50 mt-4" />
        </div>

        {/* ================= FAQ ACCORDION ================= */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              // Border: Warm Beige (#D0C9BC)
              <div 
                key={index} 
                className={`bg-white border transition-all duration-500 rounded-2xl ${isOpen ? 'border-[#B89B72]/50 shadow-lg shadow-[#8A9A86]/5' : 'border-[#D0C9BC]/60 hover:border-[#D0C9BC]'}`}
              >
                <button 
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-7 text-left gap-6 group"
                >
                  {/* Question: Sans, Medium weight, Cocoa */}
                  <span className={`text-base font-sans font-medium tracking-tight ${isOpen ? 'text-[#3E2A20]' : 'text-[#3E2A20]/90'} group-hover:text-[#3E2A20] transition-colors`}>
                    {faq.q}
                  </span>
                  
                  {/* Soft Chevron Icon (Sage color) */}
                  <div className={`transition-all duration-300 transform rounded-full p-2 flex items-center justify-center ${isOpen ? 'bg-[#8A9A86]/10 text-[#8A9A86]' : 'bg-[#D0C9BC]/10 text-[#3E2A20]/40 group-hover:text-[#3E2A20]/70'}`}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </button>
                
                {/* Answer: Sans, Soft Cocoa, Relaxed leading */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-7 pb-8 pt-2 text-[14px] text-[#3E2A20]/80 font-sans font-light leading-relaxed border-t border-[#D0C9BC]/40">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= VIEW ALL BUTTON ================= */}
        <div className="mt-20 text-center">
          {/* Background: Sage Green (#8A9A86), Hover: Organic Green (#6A8F67) */}
          <Link 
            href="/faq"
            className="inline-block md:px-12 px-8 py-4 bg-[#8A9A86] text-white rounded-full font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#6A8F67] active:scale-[0.98] transition-all shadow-md shadow-[#8A9A86]/20"
          >
            VIEW ALL FAQS
          </Link>
        </div>

      </div>
    </section>
  );
}