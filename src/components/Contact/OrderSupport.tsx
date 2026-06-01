"use client";
import React from 'react';

export default function OrderSupport() {
  const supportFlows = [
    {
      id: "FLOW_01",
      title: "Shipment Tracking",
      desc: "Monitor your hardware transit metrics in real-time via our global logistics partners.",
      action: "ACCESS_TRACKER"
    },
    {
      id: "FLOW_02",
      title: "Return & Calibration",
      desc: "Initiate return protocols if your unit doesn't meet the required architectural specs.",
      action: "START_RETURN"
    },
    {
      id: "FLOW_03",
      title: "Order Modifications",
      desc: "Request changes to your order configuration before the packing sequence begins.",
      action: "MODIFY_ORDER"
    }
  ];

  return (
    <section className="bg-[#09090B] py-20 px-4 md:px-8 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-[10px] font-mono text-zinc-500 tracking-[0.3em] uppercase mb-2">// LOGISTICS_PROTOCOL</h2>
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">Order Support</h3>
          </div>
          <p className="text-[11px] text-zinc-600 font-mono max-w-[250px]">
            Have questions about shipping, tracking, or returns? We provide transparent diagnostics.
          </p>
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportFlows.map((flow) => (
            <div 
              key={flow.id}
              className="bg-[#0C0C0E] border border-zinc-900 p-8 flex flex-col justify-between hover:bg-[#0E0E11] transition-all"
            >
              <div className="mb-8">
                <div className="text-[9px] font-mono text-[#22D3EE] mb-4">{flow.id}</div>
                <h4 className="text-lg font-bold text-white mb-3">{flow.title}</h4>
                <p className="text-[11px] text-zinc-500 font-mono leading-relaxed">{flow.desc}</p>
              </div>

              <button className="text-[9px] font-mono border border-zinc-700 py-3 px-4 hover:bg-white hover:text-black transition-colors uppercase tracking-[0.2em]">
                {flow.action}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}