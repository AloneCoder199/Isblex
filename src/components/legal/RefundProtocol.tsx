export default function RefundProtocol() {
  return (
    <section className="bg-[#FAF8F5] min-h-screen py-24 px-6 text-stone-600 font-sans selection:bg-[#E3ECE6] selection:text-[#3A4D3F]">
      <div className="max-w-3xl mx-auto">
        
        {/* Elegant Skincare Header */}
        <div className="mb-16 border-b border-[#EBE7E0] pb-10 space-y-3">
          <h1 className="text-3xl md:text-4xl font-serif font-light text-stone-900 tracking-wide">
            Return & Satisfaction <span className="text-[#4E6151] font-normal italic">Policy</span>
          </h1>
          <p className="text-[10px] font-sans tracking-[0.25em] text-[#A69276] font-medium uppercase">
            Effective: June 02, 2026 // PRIFYA_SATISFACTION_v1
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {[
            {
              title: "01. Eligibility Criteria",
              body: "Skincare formulations, botanical serums, and curated ritual sets are eligible for a return or exchange validation if they remain unopened and pristine within 30 days of acquisition. In exceptional cases of documented skin hypersensitivity, partially sampled items may be evaluated gracefully."
            },
            {
              title: "02. Initiation Protocol",
              body: "To initiate a care return: (1) Access your personal account workspace; (2) Navigate to the 'Customer Concierge' module; (3) Submit a request form detailing your formulation experience; (4) Await an elegant routing confirmation voucher from our digital care specialists."
            },
            {
              title: "03. Laboratory Assessment",
              body: "Upon secure receipt at our fulfillment facility, items undergo a protective quality assessment. We verify batch allocation parameters to ensure adherence to global cosmetic health guidelines and to prevent unauthorized distribution tampering."
            },
            {
              title: "04. Refund Execution",
              body: "Once your validation request passes quality criteria, the reimbursement sequence is instantly triggered. Funds will safely revert to your original payment pathway (Visa, Mastercard, or Apple Pay) within 5 to 7 operational banking days."
            },
            {
              title: "05. Non-Refundable Exceptions",
              body: "Please note that highly personalized bespoke formulation solutions, seasonal limited-edition gift packages, or individual items depleted beyond reasonable sampling quantities are strictly excluded from standard return eligibility."
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

        {/* Muted Brand Footer */}
        <div className="mt-20 pt-10 border-t border-[#EBE7E0] text-center">
          <p className="text-[10px] font-sans text-[#A69276] uppercase tracking-[0.2em] font-medium">
            Prifya Atelier // Satisfaction & Formulation Care Policy
          </p>
        </div>
      </div>
    </section>
  );
}