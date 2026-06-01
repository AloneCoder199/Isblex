"use client";
import React from 'react';
import Link from 'next/link';

export default function SupportNavigator() {
  const protocols = [
    { title: "Order Tracking", code: "PROT_01", href: "/support/tracking" },
    { title: "Shipping Information", code: "PROT_02", href: "/support/shipping" },
    { title: "Returns & Refunds", code: "PROT_03", href: "/support/returns" },
    { title: "Product Questions", code: "PROT_04", href: "/support/faq" },
    { title: "Technical Support", code: "PROT_05", href: "/support/technical" },
  ];

  return (
    <section className="bg-[#09090B] py-20 px-4 md:px-8 border-b border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-16">
          <h2 className="text-[10px] font-mono text-zinc-500 tracking-[0.3em] uppercase mb-4">// HELPDESK_MATRIX</h2>
          <h3 className="text-3xl font-black text-white uppercase tracking-tight">How Can We Help?</h3>
        </div>

        {/* Swipe Wrapper for Mobile / Grid for Desktop */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible gap-4 pb-6 sm:pb-0 snap-x snap-mandatory scrollbar-none sm:grid-cols-2 lg:grid-cols-3">
          {protocols.map((prot) => (
            <Link 
              key={prot.code}
              href={prot.href}
              className="group bg-[#0C0C0E] border border-zinc-900 p-8 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between min-w-[85vw] sm:min-w-0 snap-center"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[9px] font-mono text-zinc-600 tracking-widest">{prot.code}</span>
                <span className="text-zinc-800 group-hover:text-cyan-500 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-[#22D3EE] transition-colors">
                {prot.title}
              </h4>
            </Link>
          ))}
          
          {/* Empty Space Filler or Custom Call */}
          <div className="hidden lg:flex items-center justify-center border border-dashed border-zinc-900 p-8">
            <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">System Ready</span>
          </div>
        </div>

      </div>
    </section>
  );
}
