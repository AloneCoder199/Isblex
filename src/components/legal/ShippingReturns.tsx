export default function ShippingReturns() {
  return (
    <section className="bg-[#FAF8F5] min-h-screen py-24 px-6 text-stone-600 font-sans selection:bg-[#E3ECE6] selection:text-[#3A4D3F]">
      <div className="max-w-3xl mx-auto">
        
        {/* Premium Boutique Header */}
        <div className="mb-16 border-b border-[#EBE7E0] pb-10 space-y-3">
          <h1 className="text-3xl md:text-4xl font-serif font-light text-stone-900 tracking-wide">
            Shipping & <span className="text-[#4E6151] font-normal italic">Returns</span>
          </h1>
          <p className="text-[10px] font-sans tracking-[0.25em] text-[#A69276] font-medium uppercase">
            Delivery Journal // PRIFYA_OPERATIONS_v1
          </p>
        </div>

        {/* Informational Matrix Accordion */}
        <div className="space-y-10">
          {[
            {
              title: "01. Atelier Dispatch & Logistics",
              body: "We carefully prepare and package our active botanical formulations to ensure safe transit globally. The standard processing window for order fulfillment across our micro-batches is 24 to 48 business hours. Once your parcel is securely dispatched, a dedicated tracking link will be delivered to your registered email address."
            },
            {
              title: "02. Delivery Journeys & Timelines",
              body: "Estimated transit periods vary depending gracefully on your chosen delivery destination. While we strive for extreme precision and flawless handling, external customs checks or regional carrier volumes can occasionally influence transit times. We provide continuous tracing data to maintain absolute clarity at every step."
            },
            {
              title: "03. Ritual Satisfaction & Exchanges",
              body: "Should your skincare selections sustain structural damage or leak during transit, please initiate a return verification request within 14 days of receipt. We kindly ask that the items be returned inside their original Prifya protective glass-safeguard casing. Following a successful quality assessment, we will dispatch a priority replacement or credit your account."
            },
            {
              title: "04. Exclusions & Eligibility",
              body: "Formulations that show clear signs of external tampering, deliberate chemical altering, or profound depletion past basic product testing volume are excluded from our satisfaction coverage. We recommend referencing the ritual guidelines included with each product carton for best application methods."
            },
            {
              title: "05. International Customs Policy",
              body: "For our global clients, regional entry customs duties, destination handling tariffs, and import processing fees remain the personal responsibility of the recipient. Prifya assumes no liability for custom holding holds or administrative clearance delays managed by your territory's border controls."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group hover:border-l-2 hover:border-[#4E6151] transition-all duration-300 pl-6 border-l-2 border-[#EBE7E0]"
            >
              <h2 className="text-sm font-sans font-semibold text-stone-800 uppercase tracking-wider mb-2 group-hover:text-[#4E6151] transition-colors">
                {item.title}
              </h2>
              <p className="leading-relaxed text-xs md:text-sm text-stone-500">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Polished Brand Footer */}
        <div className="mt-20 pt-10 border-t border-[#EBE7E0] text-center">
          <p className="text-[10px] font-sans text-[#A69276] uppercase tracking-[0.2em] font-medium">
            Prifya Atelier // Pure Formulation Delivery Framework
          </p>
        </div>
      </div>
    </section>
  );
}