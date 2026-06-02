export default function WarrantyClaim() {
  return (
    <section className="bg-[#09090B] min-h-screen py-24 px-6 text-[#A1A1AA] font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 border-b border-[#18181B] pb-10">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">Warranty Claim</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-[#22D3EE] uppercase">
            Hardware Assurance // ISBLEX_WARRANTY_PROTOCOL_V4
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {[
            {
              title: "01. Warranty Coverage",
              body: "ISBLEX provides a comprehensive hardware assurance protocol for all smart lighting products. This covers manufacturing defects, circuitry failures, and software-hardware integration issues arising under normal operating conditions for the designated warranty period."
            },
            {
              title: "02. Claim Initialization",
              body: "To initiate a warranty claim: (a) Access your dashboard; (b) Navigate to 'Warranty Claims'; (c) Input your device serial number; (d) Upload a brief diagnostic video or photo demonstrating the failure."
            },
            {
              title: "03. Validation Process",
              body: "Once the claim is received, our engineering team performs a remote verification. If the failure is confirmed as a hardware defect, we will authorize a repair or unit replacement. We prioritize rapid restoration to maintain your workspace integrity."
            },
            {
              title: "04. Exclusions",
              body: "Warranty does not cover: (i) Physical damage due to improper installation or handling; (ii) Failures caused by voltage fluctuations external to product specs; (iii) Unauthorized modifications to the system firmware or internal components."
            },
            {
              title: "05. Replacement Protocol",
              body: "Approved replacements are processed within 7-10 business days. ISBLEX covers the logistics cost for returning the defective unit and shipping the replacement node to your registered address."
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
            ISBLEX Engineering // Assurance Protocol V4
          </p>
        </div>
      </div>
    </section>
  );
}