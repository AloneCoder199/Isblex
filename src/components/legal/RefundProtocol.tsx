export default function RefundProtocol() {
  return (
    <section className="bg-[#09090B] min-h-screen py-24 px-6 text-[#A1A1AA] font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 border-b border-[#18181B] pb-10">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">Refund Protocol</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-[#22D3EE] uppercase">
            Effective: June 02, 2026 // RETURN_AND_AUDIT_V4
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {[
            {
              title: "01. Eligibility Criteria",
              body: "Hardware items (RGB Corner Lamps, TV Backlights, etc.) are eligible for return if they exhibit manufacturing defects or hardware failures within the first 14 days of acquisition. Proof of purchase and original packaging are mandatory for eligibility validation."
            },
            {
              title: "02. Initiation Protocol",
              body: "To initiate a return: (1) Access your User Dashboard; (2) Navigate to the 'Support' module; (3) Submit a diagnostic ticket describing the hardware failure; (4) Await an automated validation code from our engineering team."
            },
            {
              title: "03. Audit & Inspection",
              body: "Upon receipt, the hardware will undergo an intensive technical audit. We verify that the defect is inherent to the manufacturing process and not a result of unauthorized software modifications or improper power supply usage."
            },
            {
              title: "04. Refund Execution",
              body: "Once the audit confirms the defect, the refund process is triggered. Funds will be returned to the original payment node (VISA/MC/APAY). Processing time typically ranges between 5-7 business days depending on your financial institution."
            },
            {
              title: "05. Non-Refundable Exceptions",
              body: "Please note that customized lighting configurations, promotional items, or products showing physical damage due to user mishandling are strictly non-refundable."
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
            ISBLEX Systems // Hardware Return Policy V4
          </p>
        </div>
      </div>
    </section>
  );
}