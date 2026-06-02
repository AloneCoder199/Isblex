"use client";
import React, { useState } from 'react';

const faqData = [
  {
    category: "General Hardware",
    questions: [
      { q: "What is ISBLEX?", a: "ISBLEX is a high-performance smart lighting architecture provider, specializing in digital-matrix hardware integration." },
      { q: "Are ISBLEX products compatible with HomeKit?", a: "Yes, our v4 hardware nodes support full HomeKit and Matter integration." },
      { q: "What is the lifespan of RGB corner lamps?", a: "Our LED hardware is rated for 50,000+ operational hours." },
      { q: "Can I connect multiple TV backlights?", a: "Yes, you can sync multiple units via the ISBLEX Controller app." },
      { q: "Do the lamps support cold/warm tones?", a: "Our hardware supports full spectrum RGBIC, including dedicated warm/cool white channels." },
      { q: "How do I update firmware?", a: "Updates are pushed automatically via the ISBLEX mobile application." },
      { q: "Is the hardware waterproof?", a: "No, our hardware is designed for interior workspace environments only." },
      { q: "Can I use the hardware without WiFi?", a: "Yes, basic controls are available via the manual controller." },
      { q: "What voltage is required?", a: "Our v4 units operate on standard 100-240V AC adapters." },
      { q: "How many colors can the lamps display?", a: "Our system supports 16 million colors with dynamic saturation control." }
    ]
  },
  {
    category: "Orders & Shipping",
    questions: [
      { q: "How do I track my order?", a: "Use the 'Track Order' node in your dashboard for real-time logistics updates." },
      { q: "Do you ship internationally?", a: "Yes, we ship to most major global zones. Customs duties are the recipient's responsibility." },
      { q: "What is the processing time?", a: "Orders are initialized for transit within 24-48 hours." },
      { q: "Can I change my delivery address?", a: "Address modifications are only possible before the order reaches 'Transit' status." },
      { q: "What if my package is lost?", a: "Contact support immediately; we will initiate an insurance claim for your unit." },
      { q: "Are shipping costs refundable?", a: "Shipping costs are non-refundable unless the error is on our logistics side." },
      { q: "Can I pick up locally?", a: "Currently, we only operate via secure direct-to-door delivery." },
      { q: "What courier do you use?", a: "We partner with top-tier international logistics providers." },
      { q: "How do I cancel my order?", a: "Cancellations are accepted within 1 hour of order placement via the dashboard." },
      { q: "Are taxes included?", a: "Product prices exclude local import taxes and custom duties." }
    ]
  },
  {
    category: "Warranty & Support",
    questions: [
      { q: "What is the warranty period?", a: "All hardware comes with a 1-year limited warranty against manufacturing defects." },
      { q: "How do I claim a warranty?", a: "Submit a diagnostic ticket through your user dashboard." },
      { q: "Do I pay for return shipping?", a: "ISBLEX covers return logistics for verified defective units." },
      { q: "How long does repair take?", a: "Hardware audits and replacements are processed within 7-10 business days." },
      { q: "What constitutes a defect?", a: "Hardware failure, dead pixels, or circuitry malfunction under normal use." },
      { q: "Can I extend my warranty?", a: "Currently, we do not offer formal extensions beyond the standard 1-year policy." },
      { q: "What if the replacement is also faulty?", a: "We will prioritize an immediate escalation to our engineering lead." },
      { q: "Do I need the original box?", a: "Yes, original packaging is required for audit verification." },
      { q: "Is the software supported under warranty?", a: "Software is covered only in relation to its hardware integration." },
      { q: "How do I contact support?", a: "Use the live support module on our official web platform." }
    ]
  },
  {
    category: "Payments & Refunds",
    questions: [
      { q: "What payment methods are accepted?", a: "We accept all major credit cards and digital wallets (VISA, MC, Apple Pay)." },
      { q: "Is my payment data secure?", a: "Yes, we use industry-standard encrypted gateways (2Checkout/Verifone)." },
      { q: "When will I get my refund?", a: "Refunds typically reach your payment node within 5-7 business days." },
      { q: "Do you store my card details?", a: "No, we do not store sensitive payment info on our servers." },
      { q: "Can I pay in installments?", a: "Check your local payment provider's 'Pay Later' eligibility at checkout." },
      { q: "Why was my payment declined?", a: "Ensure your card supports international transactions and the billing address is correct." },
      { q: "Is VAT added?", a: "VAT is applied based on the shipping destination's regional laws." },
      { q: "Can I get an invoice?", a: "Yes, invoices are automatically generated and sent to your email post-purchase." },
      { q: "Do you accept Crypto?", a: "Currently, we only support traditional financial payment nodes." },
      { q: "Is my refund in store credit?", a: "You can choose between store credit or a reversal to your original payment node." }
    ]
  },
  {
    category: "Account & Security",
    questions: [
      { q: "How do I reset my password?", a: "Use the 'Forgot Password' link on the login screen." },
      { q: "Can I delete my account?", a: "Yes, you can request account deletion via your settings menu." },
      { q: "Is my data shared?", a: "No, we follow strict data minimization protocols." },
      { q: "How do I change my email?", a: "Update your profile node within your account settings." },
      { q: "Do you support 2FA?", a: "Yes, account security can be heightened via 2FA settings." },
      { q: "Can I have multiple profiles?", a: "Our architecture is optimized for single-user account nodes." },
      { q: "How do I unsubscribe from emails?", a: "Use the 'Unsubscribe' link at the bottom of our newsletters." },
      { q: "Is my history saved?", a: "Only essential transactional history is maintained." },
      { q: "What if I suspect an unauthorized login?", a: "Change your password immediately and contact support." },
      { q: "Can I change my username?", a: "User identifiers are permanent but can be managed in profile settings." }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <section className="bg-[#09090B] min-h-screen py-24 px-6 text-[#A1A1AA]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-12">Knowledge Base // FAQ</h1>
        
        {faqData.map((section, sIndex) => (
          <div key={sIndex} className="mb-12">
            <h2 className="text-sm font-mono text-[#22D3EE] uppercase tracking-[0.2em] mb-6">{section.category}</h2>
            <div className="space-y-4">
              {section.questions.map((item, qIndex) => {
                const id = `${sIndex}-${qIndex}`;
                return (
                  <div key={id} className="border border-[#18181B] rounded-xl overflow-hidden">
                    <button 
                      onClick={() => setOpenIndex(openIndex === id ? null : id)}
                      className="w-full text-left p-6 flex justify-between items-center bg-[#0C0C0E] hover:bg-[#18181B] transition-all"
                    >
                      <span className="text-white font-bold text-sm">{item.q}</span>
                      <span className="text-[#22D3EE]">{openIndex === id ? '—' : '+'}</span>
                    </button>
                    {openIndex === id && (
                      <div className="p-6 border-t border-[#18181B] bg-[#09090B] text-sm leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}