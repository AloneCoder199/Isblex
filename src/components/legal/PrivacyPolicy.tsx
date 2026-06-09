export default function PrivacyPolicy() {
  return (
    <section className="bg-[#FAF8F5] min-h-screen py-24 px-6 text-stone-600 font-sans selection:bg-[#E3ECE6] selection:text-[#3A4D3F]">
      <div className="max-w-3xl mx-auto">
        
        {/* Elegant Skincare Header */}
        <div className="mb-16 border-b border-[#EBE7E0] pb-10 space-y-3">
          <h1 className="text-3xl md:text-4xl font-serif font-light text-stone-900 tracking-wide">
            Privacy <span className="text-[#4E6151] font-normal italic">Policy</span>
          </h1>
          <p className="text-[10px] font-sans tracking-[0.25em] text-[#A69276] font-medium uppercase">
            Effective Date: June 02, 2026 // PRIFYA_ATELIER_v1
          </p>
        </div>

        {/* Content Node Section */}
        <div className="space-y-10">
          {[
            {
              title: "01. Introduction",
              body: "At Prifya, we respect your privacy. This policy outlines how we collect, use, and protect your data when you interact with our luxury skincare boutique, formulations platform, and digital concierge services."
            },
            {
              title: "02. Information We Collect",
              body: "We acquire data to enhance your lifestyle experience: (a) Personal Data: Name, shipping address, and email provided during profile initialization; (b) Usage Data: IP address, browser metadata, and path navigation; (c) Transactional Data: Order details and payment parameters processed through our secure financial gateways."
            },
            {
              title: "03. How We Use Data",
              body: "Your information is utilized for: (1) Enhancing boutique functionality and custom curation; (2) Communication regarding your orders or skincare ritual status; (3) Newsletter journal delivery (only if opted-in); (4) Security monitoring to protect your private profile."
            },
            {
              title: "04. Cookies & Tracking",
              body: "We utilize delicate cookies and similar tracking technologies to monitor activity on our platform. You may instruct your browser to refuse cookies, though this may limit functionality in some sectors of the Prifya boutique interface."
            },
            {
              title: "05. Data Protection",
              body: "We implement industry-standard encryption (SSL/TLS) for data in transit. While no digital infrastructure is completely absolute, we utilize rigorous security protocols to safeguard your personal account record."
            },
            {
              title: "06. Third-Party Disclosure",
              body: "Prifya does not sell, trade, or rent your personal data to third parties. We may share data with trusted service partners who assist us in operating our platform, provided they agree to keep this information strictly confidential."
            },
            {
              title: "07. User Rights",
              body: "You maintain the absolute right to access, rectify, or request the erasure of your personal data. Please contact our skincare concierge team via your account dashboard to gracefully initiate such requests."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group hover:border-l-2 hover:border-[#4E6151] transition-all duration-300 pl-6 border-l-2 border-[#EBE7E0]"
            >
              <h2 className="text-sm font-sans font-semibold text-stone-800 uppercase tracking-wider mb-2 group-hover:text-[#4E6151] transition-colors">
                {item.title}
              </h2>
              <p className="leading-relaxed text-xs md:text-sm text-stone-500">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Muted Concierge Footer */}
        <div className="mt-20 pt-10 border-t border-[#EBE7E0] text-center">
          <p className="text-[10px] font-sans text-[#A69276] uppercase tracking-[0.2em] font-medium">
            Client Inquiries? Contact: concierge@prifya.com
          </p>
        </div>
      </div>
    </section>
  );
}