export default function WarrantyClaim() {
  return (
    <section className="bg-[#FAF8F5] min-h-screen py-24 px-6 text-stone-600 font-sans selection:bg-[#E3ECE6] selection:text-[#3A4D3F]">
      <div className="max-w-3xl mx-auto">
        
        {/* Premium Boutique Header */}
        <div className="mb-16 border-b border-[#EBE7E0] pb-10 space-y-3">
          <h1 className="text-3xl md:text-4xl font-serif font-light text-stone-900 tracking-wide">
            Quality Guarantee & <span className="text-[#4E6151] font-normal italic">Assurance</span>
          </h1>
          <p className="text-[10px] font-sans tracking-[0.25em] text-[#A69276] font-medium uppercase">
            Formulation Guard // PRIFYA_ASSURANCE_v1
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {[
            {
              title: "01. Authenticity & Formulation Coverage",
              body: "Prifya provides a comprehensive quality guarantee protocol for all active botanical collections. This covers structural container integrity, pump dispensing mechanisms, and bio-active stability arising under standard storage conditions during the designated batch shelf-life window."
            },
            {
              title: "02. Claim Initialization Sequence",
              body: "To initiate a formulation quality claim: (a) Access your personal account profile; (b) Navigate to the 'Boutique Concierge' workspace; (c) Input your batch allocation number (found at the base of the glass amber vessel); (d) Upload a brief photo or video demonstrating the packaging structural anomaly."
            },
            {
              title: "03. Quality Laboratory Validation",
              body: "Once your claim is logged, our laboratory team performs an internal batch verification. If the anomaly is confirmed as an authentic structural defect, we will authorize an immediate custom batch replacement. We prioritize rapid delivery to ensure your daily skincare ritual remains continuous."
            },
            {
              title: "04. Standard Exclusions",
              body: "Our quality guarantee does not cover: (i) Product oxidation or degradation due to improper physical storage in direct sunlight or intense heat; (ii) Fluid depletion or accidental damage sustained due to user mishandling; (iii) Introducing external liquids or modifying the pure baseline formulation."
            },
            {
              title: "05. Replacement Dispatch Protocol",
              body: "Approved replacement formulations are processed with utmost care and shipped within 3 to 5 business days. Prifya completely covers all luxury logistics costs for handling the transit of the complimentary replacement parcel straight to your destination."
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
            Prifya Laboratory // Atelier Product Quality Standards V1
          </p>
        </div>
      </div>
    </section>
  );
}