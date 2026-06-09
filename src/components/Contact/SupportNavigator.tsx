"use client";
import React from 'react';
import Link from 'next/link';

export default function SupportNavigator() {
  // Categorized Directory: Support & Legal
  const careHub = [
    { title: "Parcel Tracking", code: "CARE_01", href: "/track-order" },
    { title: "Shipping & Delivery", code: "CARE_02", href: "/shipping" },
    { title: "Quality Guarantee", code: "CARE_04", href: "/guarantee" },
    { title: "Botanical FAQs", code: "SKIN_05", href: "/faq" },
  ];

  const legalLedger = [
    { title: "Privacy Policy", code: "LEG_01", href: "/privacy" },
    { title: "Terms of Service", code: "LEG_02", href: "/terms" },
  ];

  return (
    <section className="bg-[#FDFBF7] text-[#3E2A20] font-sans py-24 px-4 md:px-8 border-b border-[#D0C9BC]/40 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-[11px] font-sans font-semibold text-[#8A9A86] tracking-[0.25em] uppercase mb-3">
            Concierge Directory
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-[#3E2A20] tracking-tight">
            How Can We Assist Your Ritual?
          </h3>
        </div>

        {/* Support Section */}
        <div className="mb-16">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#B89B72] mb-8 font-semibold">Care Support</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careHub.map((item) => (
              <Link 
                key={item.code}
                href={item.href}
                className="group bg-white border border-[#D0C9BC]/60 rounded-xl p-8 hover:border-[#B89B72]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-16">
                  <span className="text-[10px] font-sans font-semibold text-[#8A9A86] tracking-wider uppercase">{item.code}</span>
                  <span className="text-[#D0C9BC] group-hover:text-[#B89B72] transition-colors duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
                <h4 className="text-xl font-serif font-medium text-[#3E2A20] group-hover:text-[#B89B72] transition-colors duration-300">{item.title}</h4>
              </Link>
            ))}
          </div>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#B89B72] mb-8 font-semibold">Governance Ledger</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalLedger.map((item) => (
              <Link 
                key={item.code}
                href={item.href}
                className="group bg-[#F7F4EF] border border-[#D0C9BC]/30 rounded-xl p-8 hover:border-[#8A9A86]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-16">
                  <span className="text-[10px] font-sans font-semibold text-[#8A9A86]/60 tracking-wider uppercase">{item.code}</span>
                  <span className="text-[#D0C9BC] group-hover:text-[#8A9A86] transition-colors duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
                <h4 className="text-xl font-serif font-medium text-[#3E2A20]/80 group-hover:text-[#8A9A86] transition-colors duration-300">{item.title}</h4>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}