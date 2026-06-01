"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function FAQPreview() {
  const faqs = [
    { q: "How long does shipping take?", a: "Standard domestic shipping takes 3-5 business days. International transit requires 7-12 days based on customs clearance." },
    { q: "How can I track my order?", a: "Once your rig dispatches, you will receive a unique tracking token via email to monitor real-time transit status." },
    { q: "Can I return a product?", a: "Yes, you can initiate a return protocol within 30 days of delivery, provided the unit remains in original architectural condition." },
    { q: "Do your lights come with a warranty?", a: "All ISBLEX modules include a 2-year lifetime performance guarantee against hardware failure." },
    { q: "How do I contact support?", a: "Use the Support Node or email us directly at support@isblex.com for priority calibration assistance." },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#09090B] py-20 px-4 md:px-8 border-b border-zinc-900">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[10px] font-mono text-zinc-500 tracking-[0.3em] uppercase mb-4">// QUERY_RESOLUTION_MATRIX</h2>
          <h3 className="text-3xl font-black text-white uppercase tracking-tight">Frequently Asked Questions</h3>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-zinc-900 bg-[#0C0C0E]">
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-sm font-bold text-white">{faq.q}</span>
                <span className="text-zinc-600 font-mono text-xs">{activeIndex === index ? '—' : '+'}</span>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-6 text-[11px] text-zinc-500 font-mono leading-relaxed border-t border-zinc-900 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/faq"
            className="inline-block border border-zinc-700 px-8 py-3 text-[10px] font-mono tracking-[0.2em] text-white uppercase hover:bg-white hover:text-black transition-all"
          >
            VIEW ALL FAQS
          </Link>
        </div>

      </div>
    </section>
  );
}