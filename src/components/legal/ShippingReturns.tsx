export default function ShippingReturns() {
  return (
    <section className="bg-[#09090B] min-h-screen py-24 px-6 text-[#A1A1AA] font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 border-b border-[#18181B] pb-10">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">Shipping & Returns</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-[#22D3EE] uppercase">
            Logistics Protocol // ISBLEX_OPERATIONS_V4
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {[
            {
              title: "01. Shipping Architecture",
              body: "We deploy hardware across various zones with optimized transit paths. Standard processing time for order fulfillment is 24-48 hours. Once the package is initialized for transit, you will receive a tracking node via your registered email."
            },
            {
              title: "02. Delivery Timeline",
              body: "Estimated delivery varies based on the destination node. While we aim for precision, external logistical factors may occasionally influence transit duration. We provide real-time tracking to ensure transparency at every stage."
            },
            {
              title: "03. Return & Exchange Policy",
              body: "If your hardware arrives with defects, initiate a return ticket within 14 days. Ensure the unit is packed in its original ISBLEX protective casing. Upon successful audit of the returned hardware, we will facilitate a replacement or credit your payment node."
            },
            {
              title: "04. Non-Eligible Returns",
              body: "Hardware that has been tampered with, modified, or damaged due to improper installation is excluded from our return policy. Please ensure you follow the installation documentation provided with your specific product."
            },
            {
              title: "05. International Shipping",
              body: "For international orders, customs duties and import taxes are the responsibility of the recipient. ISBLEX is not liable for delays incurred during the customs clearance process."
            }
          ].map((item, index) => (
            <div key={index} className="group hover:border-l-2 hover:border-[#22D3EE] transition-all duration-300 pl-6 border-l-2 border-[#18181B]">
              <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3 group-hover:text-[#22D3EE] transition-colors">
                {item.title}
              </h2>
              <p className="leading-relaxed text-sm">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-[#18181B] text-center">
          <p className="text-[10px] font-mono text-[#52525B] uppercase tracking-[0.2em]">
            ISBLEX Logistics // Secure Delivery Protocol V4
          </p>
        </div>
      </div>
    </section>
  );
}