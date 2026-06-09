export default function TermsOfService() {
  return (
    <section className="bg-[#FAF8F5] min-h-screen py-24 px-6 text-stone-600 font-sans selection:bg-[#E3ECE6] selection:text-[#3A4D3F]">
      <div className="max-w-3xl mx-auto">
        
        {/* Elegant Skincare Header */}
        <div className="mb-16 border-b border-[#EBE7E0] pb-10 space-y-3">
          <h1 className="text-3xl md:text-4xl font-serif font-light text-stone-900 tracking-wide">
            Terms of <span className="text-[#4E6151] font-normal italic">Service</span>
          </h1>
          <p className="text-[10px] font-sans tracking-[0.25em] text-[#A69276] font-medium uppercase">
            Last Updated: June 02, 2026 // PRIFYA_GOVERNANCE_v1
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {[
            {
              title: "01. Acceptance of Terms",
              body: "By accessing or utilizing the Prifya boutique platform, you acknowledge that you have read, understood, and agreed to be bound by these legal terms. If you do not agree with our operational conditions, you are politely prohibited from purchasing our collections or utilizing our digital services."
            },
            {
              title: "02. Profile Security & Privacy",
              body: "Patrons are entirely responsible for maintaining the strict confidentiality of their luxury account credentials. Any purchase activity or interaction occurring under your profile signature is your sole responsibility. Notify our skincare concierge team immediately if you detect unauthorized entry."
            },
            {
              title: "03. Intellectual Property Rights",
              body: "All formulation media, logos, custom botanical images, textual descriptions, and proprietary digital code presented on the Prifya platform are the exclusive creative property of Prifya Atelier. Unauthorized reproduction, brand copy replication, or distribution is strictly prohibited."
            },
            {
              title: "04. Limitation of Liability",
              body: "Prifya provides its botanical selections and digital platforms strictly on an 'as-is' and 'as-available' basis. We shall not be held liable for any indirect, incidental, or sensory anomalies resulting from alternative mix-use or the inability to utilize our product formulations or lifestyle services."
            },
            {
              title: "05. Formulation Ordering & Boutique Pricing",
              body: "We reserve the definitive right to modify boutique pricing structures, adjust active ingredient specifications, or sunset seasonal collections without prior notification. Final order acceptance remains subject to batch inventory validation and complete payment clearance."
            },
            {
              title: "06. Amendments to Terms",
              body: "Prifya reserves the right to gracefully amend these terms at any given time. Continued browsing or interaction with our digital house after updates are applied automatically constitutes absolute acceptance of the updated conditions."
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

        {/* Elegant Brand Footer */}
        <div className="mt-20 pt-10 border-t border-[#EBE7E0] text-center">
          <p className="text-[10px] font-sans text-[#A69276] uppercase tracking-[0.2em] font-medium">
            Prifya Atelier // Governance & Boutique Terms V1
          </p>
        </div>
      </div>
    </section>
  );
}