import React from 'react';

export default function StoreStatus() {
  // Repeating text array to create a seamless infinite loop look
  const statusText = Array(10).fill("SYSTEM STATUS: STORE UNDER CONSTRUCTION // INITIALIZING CORE MODULES // ");

  return (
    <div className="w-full bg-brand-card border-y border-brand-border py-3 overflow-hidden select-none relative group before:absolute before:left-0 before:top-0 before:w-20 before:h-full before:bg-gradient-to-r before:from-brand-dark before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-brand-dark after:to-transparent after:z-10 top-30">
      
      {/* Motion Container (Left to Right) */}
      <div className="flex w-max animate-marquee whitespace-nowrap gap-4 core-pipeline">
        
        {/* Track 1 */}
        <div className="flex items-center gap-4 text-xs md:text-sm font-mono tracking-widest text-brand-cyan">
          {statusText.map((text, index) => (
            <span key={`t1-${index}`} className="flex items-center gap-4">
              <span>{text}</span>
              <span className="inline-block w-2 h-2 bg-brand-cyan animate-pulse shadow-[0_0_8px_#06B6D4]" />
            </span>
          ))}
        </div>

        {/* Track 2 (Duplicate for Seamless Loop) */}
        <div className="flex items-center gap-4 text-xs md:text-sm font-mono tracking-widest text-brand-cyan" aria-hidden="true">
          {statusText.map((text, index) => (
            <span key={`t2-${index}`} className="flex items-center gap-4">
              <span>{text}</span>
              <span className="inline-block w-2 h-2 bg-brand-cyan animate-pulse shadow-[0_0_8px_#06B6D4]" />
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
