"use client";

import { useState } from "react";

export default function ProductDescription({ description }: { description: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-3 font-sans">
      {/* Premium minimal label to replace the tech comment */}
      <h3 className="text-[11px] font-semibold text-[#8A9A86] tracking-[0.2em] uppercase">
        Product Details & Ritual
      </h3>
      
      {/* Container styled with Prifya luxury cream card details */}
      <div className="relative bg-white border border-[#D0C9BC]/40 p-5 rounded-lg transition-all duration-300">
        <p className={`text-xs text-[#3E2A20]/80 leading-relaxed whitespace-pre-line tracking-wide ${!isExpanded ? "line-clamp-4" : ""}`}>
          {description}
        </p>
        
        {/* Soft elegant text button with clean borders and transition */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 px-4 py-2 border border-[#D0C9BC] text-[10px] font-medium text-[#3E2A20] tracking-widest whitespace-nowrap hover:border-[#8A9A86] hover:text-[#8A9A86] transition-all duration-300 uppercase block focus:outline-none rounded-md"
        >
          {isExpanded ? "Read Less —" : "Read More +"}
        </button>
      </div>
    </div>
  );
}