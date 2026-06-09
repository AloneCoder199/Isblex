"use client";
import React from 'react';

// Assuming global CSS defines:
// .font-serif { font-family: 'Playfair Display', serif; }
// .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

export default function ContactMethods() {
  const methods = [
    {
      label: "SKINCARE ADVISORY",
      value: "advisory@prifya.com",
      status: "AVAILABLE",
      desc: "Guidance on personalized routines and botanical ingredients."
    },
    {
      label: "ORDER & SHIPPING",
      value: "concierge@prifya.com",
      status: "ACTIVE",
      desc: "Assistance with shipments, returns, and subscription management."
    },
    {
      label: "PARTNERSHIPS",
      value: "collaborate@prifya.com",
      status: "OPEN",
      desc: "Connect for collaborations, retail inquiries, or press."
    }
  ];

  return (
    <section className="bg-[#FDFBF7] text-[#3E2A20] py-20 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-12 border-b border-[#D0C9BC] pb-4">
          <p className="text-xs text-[#8A9A86] tracking-[0.3em] uppercase mb-1">Direct Channels</p>
          <h2 className="text-xl font-serif font-medium text-[#3E2A20]">Beauty Concierge</h2>
        </div>

        {/* Contact Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((method, idx) => (
            <div 
              key={idx}
              className="group relative bg-white border border-[#D0C9BC] p-8 rounded-lg hover:border-[#B89B72]/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Node Header */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-sans font-semibold text-[#3E2A20]/60 tracking-widest uppercase">{method.label}</span>
                <span className="text-[10px] font-sans font-medium text-[#8A9A86] bg-[#8A9A86]/10 px-3 py-1 rounded-full">{method.status}</span>
              </div>

              {/* Data Value - Use Serif for elegance */}
              <a 
                href={`mailto:${method.value}`}
                className="text-xl font-serif font-medium text-[#3E2A20] hover:text-[#B89B72] transition-colors block mb-4 break-words"
              >
                {method.value}
              </a>

              {/* Description */}
              <p className="text-sm text-[#3E2A20]/80 font-sans font-light leading-relaxed">
                {method.desc}
              </p>

              {/* Decorative Corner - Updated to gold on hover */}
              <div className="absolute bottom-4 right-4 text-[#D0C9BC] group-hover:text-[#B89B72] transition-colors">
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}