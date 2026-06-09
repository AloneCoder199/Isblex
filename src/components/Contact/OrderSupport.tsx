"use client";
import React from 'react';

// Assuming global CSS defines:
// .font-serif { font-family: 'Playfair Display', serif; }
// .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

export default function OrderSupport() {
  const supportFlows = [
    {
      id: "CARE_01",
      title: "Parcel Tracking",
      desc: "Follow your curated skincare essentials from our botanical lab to your doorstep in real-time.",
      action: "TRACK_SHIPMENT"
    },
    {
      id: "CARE_02",
      title: "Returns & Guarantee",
      desc: "Initiate our returns protocol if your selection does not perfectly align with your skin's innate luminosity.",
      action: "START_RETURN"
    },
    {
      id: "CARE_03",
      title: "Curation Changes",
      desc: "Request adjustments to your ritual selection before the final packing sequence begins.",
      action: "MODIFY_CURATION"
    }
  ];

  return (
    <section className="bg-[#FDFBF7] text-[#3E2A20] py-24 px-4 md:px-8 border-b border-[#D0C9BC]/50 font-sans select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-4 border-b border-[#D0C9BC]">
          <div>
            <h2 className="text-[10px] font-sans font-semibold text-[#8A9A86] tracking-[0.25em] uppercase mb-2">CONCIERGE_DIAGNOSTICS</h2>
            {/* Elegant Serif Title */}
            <h3 className="text-3xl font-serif font-medium text-[#3E2A20] tracking-tight">Order Support Concierge</h3>
          </div>
          {/* Muted sans-serif body */}
          <p className="text-sm font-sans font-light text-[#3E2A20]/70 max-w-[280px]">
            Have questions regarding delivery, curation changes, or our satisfaction guarantee? We guide you consciously.
          </p>
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportFlows.map((flow) => (
            <div 
              key={flow.id}
              className="bg-white border border-[#D0C9BC] rounded-xl p-8 flex flex-col justify-between hover:border-[#B89B72]/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-8">
                {/* Sage Green Accent ID */}
                <div className="text-[10px] font-sans font-semibold text-[#8A9A86] mb-4 uppercase tracking-wider">{flow.id}</div>
                {/* Serif Title */}
                <h4 className="text-xl font-serif font-medium text-[#3E2A20] mb-3">{flow.title}</h4>
                {/* Sans body */}
                <p className="text-[13px] text-[#3E2A20]/80 font-sans font-light leading-relaxed">{flow.desc}</p>
              </div>

              {/* Gold Accent Button (Pill shaped) */}
              <button className="text-[11px] font-sans font-semibold bg-[#B89B72] text-white py-3.5 px-6 rounded-full hover:bg-[#6A8F67] transition-colors uppercase tracking-[0.2em] shadow-sm active:scale-95">
                {flow.action}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}