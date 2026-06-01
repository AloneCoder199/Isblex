"use client";
import React from 'react';

export default function ContactForm() {
  return (
    <section className="bg-[#09090B] py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Form Header */}
        <div className="mb-12">
          <h2 className="text-[10px] font-mono text-zinc-500 tracking-[0.3em] uppercase mb-4">// TRANSMISSION_GATEWAY</h2>
          <h3 className="text-3xl font-black text-white uppercase tracking-tight">Send Us A Message</h3>
        </div>

        {/* Form Grid */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-[9px] font-mono text-zinc-500 uppercase">Identity</label>
              <input type="text" className="w-full bg-[#0C0C0E] border border-zinc-900 p-4 text-white text-xs outline-none focus:border-cyan-500 transition-colors" placeholder="Full Name" />
            </div>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[9px] font-mono text-zinc-500 uppercase">Communication Node</label>
              <input type="email" className="w-full bg-[#0C0C0E] border border-zinc-900 p-4 text-white text-xs outline-none focus:border-cyan-500 transition-colors" placeholder="Email Address" />
            </div>
          </div>

          {/* Subject/Protocol Select */}
          <div className="space-y-2">
            <label className="text-[9px] font-mono text-zinc-500 uppercase">Support Protocol</label>
            <select className="w-full bg-[#0C0C0E] border border-zinc-900 p-4 text-white text-xs outline-none focus:border-cyan-500 transition-colors appearance-none">
              <option>General Architectural Inquiry</option>
              <option>Order Diagnostics (Please provide Order ID)</option>
              <option>Calibration/Technical Support</option>
              <option>Return/Replacement Protocol</option>
            </select>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label className="text-[9px] font-mono text-zinc-500 uppercase">Transmission Data</label>
            <textarea rows={6} className="w-full bg-[#0C0C0E] border border-zinc-900 p-4 text-white text-xs outline-none focus:border-cyan-500 transition-colors" placeholder="Detail your requirements here..."></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-white text-black py-4 font-mono text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-all">
            Initiate Transmission
          </button>
        </form>

      </div>
    </section>
  );
}