"use client";
import React from 'react';

export default function ContactMethods() {
  const methods = [
    {
      label: "ENGINEERING SUPPORT",
      value: "support@isblex.com",
      status: "ACTIVE_24/7",
      desc: "Get technical guidance on lighting topologies."
    },
    {
      label: "ORDER DIAGNOSTICS",
      value: "orders@isblex.com",
      status: "ACTIVE_24/7",
      desc: "Track your shipment or modification requests."
    },
    {
      label: "PARTNERSHIP GATEWAY",
      value: "labs@isblex.com",
      status: "OPEN_FOR_DEV",
      desc: "For workspace architects and system integrators."
    }
  ];

  return (
    <section className="bg-[#09090B] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-[10px] font-mono text-[#22D3EE] tracking-[0.3em] uppercase mb-4">// Direct Communication Lines</h2>
        </div>

        {/* Contact Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {methods.map((method, idx) => (
            <div 
              key={idx}
              className="group relative bg-[#0C0C0E] border border-zinc-900 p-8 hover:border-zinc-700 transition-all duration-300"
            >
              {/* Node Header */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] font-mono text-zinc-500 tracking-widest">{method.label}</span>
                <span className="text-[8px] font-mono text-cyan-500 bg-cyan-950/20 px-2 py-1 rounded">{method.status}</span>
              </div>

              {/* Data Value */}
              <a 
                href={`mailto:${method.value}`}
                className="text-lg font-black text-white hover:text-[#22D3EE] transition-colors block mb-3"
              >
                {method.value}
              </a>

              {/* Description */}
              <p className="text-[11px] text-zinc-600 font-mono tracking-wide">
                {method.desc}
              </p>

              {/* Decorative Corner */}
              <div className="absolute bottom-4 right-4 text-zinc-800 group-hover:text-cyan-500 transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}