"use client";

import { useState } from "react";

export default function ProductDescription({ description }: { description: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-2">
      {/* Heading styled exactly like // SELECT_CATEGORY */}
      <h3 className="text-[9px] font-mono text-zinc-500 tracking-[0.2em] uppercase">
        // ABOUT_THIS_ITEM
      </h3>
      
      {/* Container matching the dark zinc theme */}
      <div className="relative bg-[#09090B] border border-zinc-900 p-4 transition-all">
        <p className={`text-[11px] font-mono text-zinc-400 leading-relaxed whitespace-pre-line ${!isExpanded ? "line-clamp-4" : ""}`}>
          {description}
        </p>
        
        {/* Button matching the filter button behavior and font */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 px-3 py-1.5 border border-zinc-800 text-[9px] font-mono text-zinc-400 whitespace-nowrap hover:border-cyan-500 hover:text-white transition-all uppercase block focus:outline-none"
        >
          {isExpanded ? "Show Less ▲" : "See More ▼"}
        </button>
      </div>
    </div>
  );
}