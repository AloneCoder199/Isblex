"use client";

import React, { useState } from 'react';

const faqData = [
  {
    category: "The Formulations & Rituals",
    questions: [
      { q: "What is Prifya?", a: "Prifya is a luxury botanical skincare house specializing in clean, bioactive dermal nourishment designed to restore your skin's natural radiance." },
      { q: "Are Prifya products suitable for sensitive skin?", a: "Yes, our entire line is dermatologically tested, hypoallergenic, and formulated without synthetic irritants, parabens, or artificial sulfates." },
      { q: "What is the shelf life of the formulations?", a: "Our active skincare batches maintain peak potency for 12 months after opening. We utilize protective amber glass to filter ultraviolet light and preserve stability." },
      { q: "Can I combine or layer different Prifya serums?", a: "Absolutely. Our treatments are specifically structured for complementary layering. We recommend applying from the thinnest consistency to the thickest." },
      { q: "Are your ingredients organic and cruelty-free?", a: "Yes, we prioritize ethically wildcrafted and organic botanicals. Prifya is 100% cruelty-free and committed to sustainable sourcing standards." },
      { q: "How should I store my skincare items?", a: "To ensure optimal longevity of active ingredients, store your containers in a cool, dry sanctuary away from direct sunlight." },
      { q: "Can these products be safely used during pregnancy?", a: "While our ingredients are clean and non-toxic, we recommend sharing our transparent ingredient lists with your physician prior to adjusting your prenatal ritual." },
      { q: "Do you use synthetic fragrances?", a: "Never. Any subtle sensory notes present in our formulas are derived directly from natural plant distillates and clean botanical extracts." },
      { q: "In what sequence should I apply my ritual?", a: "Begin with our balancing cleanser, sweep over with your treatment hydrosol, apply active target serums, and seal the hydration barrier with a moisturizer." },
      { q: "Where are your botanical extracts sourced?", a: "We source globally from traceable, sustainable micro-farms that extract botanical oils using low-heat, cold-pressed artisanal methods." }
    ]
  },
  {
    category: "Logistics & Deliveries",
    questions: [
      { q: "How do I track my delivery journey?", a: "Once dispatched, an elegant overview containing your transit itinerary and carrier tracking reference will be routed directly to your email." },
      { q: "Do you ship your collections internationally?", a: "Yes, Prifya provides global delivery services. Kindly note that any region-specific customs fees or import declarations remain the responsibility of the recipient." },
      { q: "What is the processing window for standard orders?", a: "Orders are prepared with meticulous care and safely dispatched from our atelier within 24 to 48 business hours." },
      { q: "Can I modify my shipping destination post-purchase?", a: "Address updates are highly time-sensitive and can only be integrated before your parcel leaves our fulfillment center." },
      { q: "What if my luxury parcel is damaged during transit?", a: "Should your order arrive compromised, contact our concierge immediately with a photograph, and we will dispatch a replacement package right away." },
      { q: "Are shipping fees eligible for reimbursement?", a: "Standard delivery costs are non-refundable unless there is an exceptional logistical error originating from our fulfillment team." },
      { q: "Do you offer local atelier pickup options?", a: "Currently, we operate exclusively via direct-to-door concierge delivery to preserve the secure integrity of our formulations." },
      { q: "Which courier partners do you work with?", a: "We partner with premier global shipping couriers to ensure your skincare selections arrive promptly and beautifully handled." },
      { q: "How can I cancel an active request?", a: "Cancellations are gracefully accepted through your account portal within 1 hour of placing the order." },
      { q: "Are regional destination taxes pre-calculated?", a: "Displayed boutique values do not account for local custom validation assessments or localized import tariffs." }
    ]
  },
  {
    category: "Ritual Satisfaction & Support",
    questions: [
      { q: "What is your return or satisfaction policy?", a: "We want you to love your skincare journey. If a formulation does not suit your skin matrix, we offer a 30-day satisfaction grace window." },
      { q: "How do I initiate a return or exchange request?", a: "Please initiate an elegant return request voucher directly through your registered profile workspace." },
      { q: "Who covers the logistics costs for returns?", a: "Complementary return postage coverage is provided for verified structural issues or skin sensitivity cases processed by support." },
      { q: "How long does the return assessment take?", a: "Once received at our laboratory facility, returns are validated and resolved within 7 to 10 standard business days." },
      { q: "What qualifies for a priority exchange?", a: "Any pump malfunctions, bottle fractures sustained during transit, or delivery errors are resolved with immediate replacement protocols." },
      { q: "Can I sample your formulations before a full purchase?", a: "We include seasonal luxury samples with standard collection purchases so you can discover new additions to your routine." },
      { q: "What happens if a replacement item is unavailable?", a: "In rare cases of ingredient seasonality stock shortages, we will credit your balance back to your account or original payment route." },
      { q: "Is the original retail carton necessary for processing a return?", a: "To maintain our clean processing lifecycle, we appreciate returns inside their protective boxes whenever possible." },
      { q: "Are individual items from curated bundles returnable?", a: "Curated skincare ritual sets must be returned in their complete structural entirety to qualify for standard reimbursement." },
      { q: "How do I reach a dedicated skincare concierge?", a: "You can seamlessly chat with a dedicated specialist via our lifestyle assistant module present on our interface." }
    ]
  },
  {
    category: "Secure Checkout & Payments",
    questions: [
      { q: "Which payment methodologies are accepted?", a: "We accept all major secure credit institutions alongside modern digital wallets (Visa, Mastercard, and Apple Pay)." },
      { q: "Is my payment information securely handled?", a: "Yes, all transactions are managed via fully certified, end-to-end encrypted processing layers to protect your privacy." },
      { q: "When will a processed refund settle into my account?", a: "Reversals reflect within your financial dashboard within 5 to 7 operational banking days, depending on your bank's protocol." },
      { q: "Does Prifya retain private credit card profiles?", a: "No, credit data is directly processed by our specialized tokenized banking partners and never reaches our servers." },
      { q: "Can I distribute my balance through split payments?", a: "Available deferred integration solutions (such as flexible pay-later installations) can be evaluated directly at checkout." },
      { q: "Why was my payment card declined during checkout?", a: "Ensure your card parameters permit online luxury purchases and that your billing profile mirrors your bank records exactly." },
      { q: "Is sales tax automatically accounted for?", a: "Applicable destination sales tax is transparently computed at checkout, strictly adhering to regional consumer mandates." },
      { q: "Can I receive a commercial invoice for corporate gifting?", a: "Yes, itemized ledger documentation is automatically generated and sent to your email following every checkout session." },
      { q: "Do you support digital cryptographic assets?", a: "To safeguard smooth payment matching across our inventory, we operate strictly within traditional premium currencies." },
      { q: "Can refunds be issued as boutique credit?", a: "Yes, you have the option to receive a direct bank reversal or choose immediate store credit for future selections." }
    ]
  },
  {
    category: "Profile Administration & Privacy",
    questions: [
      { q: "How do I update an obsolete account password?", a: "Select the 'Reset Password' prompt on our login gateway to update your access credentials securely." },
      { q: "Is it possible to permanently erase my profile registry?", a: "Yes, you can request full profile removal under your personal parameters panel in accordance with data privacy laws." },
      { q: "Is my personal skin profile data shared with third parties?", a: "Never. Your personal skin data is securely protected and utilized exclusively to personalize your individual boutique experience." },
      { q: "How do I update my primary email identity?", a: "You can effortlessly change your electronic address by visiting the account settings menu inside your workspace." },
      { q: "Does your portal provide multi-factor verification protection?", a: "Yes, you can enable secondary verification tools inside your security panel to safeguard your order and delivery profile." },
      { q: "Can I link multiple delivery addresses under one profile?", a: "Yes, your profile is designed to store multiple destinations to make seasonal gifting seamless." },
      { q: "How do I opt-out from skincare journal updates?", a: "Simply click the 'Unsubscribe' link situated at the footer of any Prifya newsletter transmission." },
      { q: "How long do you retain my transactional records?", a: "We store minimal core historical data required to maintain continuous warranty support and regional accounting transparency." },
      { q: "What should I do if I suspect unauthorized profile activity?", a: "Update your login credentials immediately and report the timeline anomaly to our safety team." },
      { q: "Can my profile be transferred to another user?", a: "Profiles are unique and non-transferable to keep your personal formulation tracking data secure." }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <section className="bg-[#FAF8F5] min-h-screen py-24 px-6 text-stone-600 selection:bg-[#E3ECE6] selection:text-[#3A4D3F]">
      <div className="max-w-3xl mx-auto">
        
        {/* Elegant Skincare Brand Header */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <span className="text-[10px] text-[#A69276] tracking-[0.25em] font-medium uppercase block">
            Customer Concierge Desk
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-light text-stone-900 tracking-wide">
            Frequently Asked <span className="text-[#4E6151] font-normal italic">Inquiries</span>
          </h1>
          <p className="text-xs text-stone-400 max-w-md leading-relaxed">
            Explore our curated knowledge base regarding luxury skincare formulations, ritual layering, and order tracking.
          </p>
        </div>
        
        {faqData.map((section, sIndex) => (
          <div key={sIndex} className="mb-14">
            {/* Minimalist Category Subheading */}
            <h2 className="text-[11px] font-sans font-semibold text-[#A69276] uppercase tracking-[0.2em] mb-5 border-b border-stone-200/60 pb-2">
              {section.category}
            </h2>
            
            <div className="space-y-3.5">
              {section.questions.map((item, qIndex) => {
                const id = `${sIndex}-${qIndex}`;
                const isOpen = openIndex === id;
                return (
                  <div 
                    key={id} 
                    className="border border-[#EBE7E0] bg-white rounded-xl overflow-hidden transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.005)]"
                  >
                    <button 
                      onClick={() => setOpenIndex(isOpen ? null : id)}
                      className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-[#FAF8F5] transition-colors focus:outline-none"
                    >
                      <span className="text-stone-800 font-medium text-sm pr-4 leading-snug">
                        {item.q}
                      </span>
                      <span className={`text-[#4E6151] text-base font-light transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        {isOpen ? '—' : '+'}
                      </span>
                    </button>
                    
                    {isOpen && (
                      <div className="p-5 border-t border-[#EBE7E0] bg-[#FAF8F5]/50 text-stone-600 text-xs md:text-sm leading-relaxed animate-fadeIn">
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