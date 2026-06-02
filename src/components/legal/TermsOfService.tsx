export default function TermsOfService() {
  return (
    <section className="bg-[#09090B] min-h-screen py-24 px-6 text-[#A1A1AA] font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 border-b border-[#18181B] pb-10">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">Terms of Service</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-[#22D3EE] uppercase">
            Last Updated: June 02, 2026 // ISBLEX_OPERATIONAL_PROTOCOLS
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {[
            {
              title: "01. Acceptance of Protocols",
              body: "By accessing or utilizing the ISBLEX platform, you acknowledge that you have read, understood, and agreed to be bound by these terms. If you do not agree, you are prohibited from utilizing our services."
            },
            {
              title: "02. Account Security",
              body: "Users are responsible for maintaining the confidentiality of their account credentials. Any activity occurring under your account identifier is your sole responsibility. Notify our engineering team immediately if you detect unauthorized access."
            },
            {
              title: "03. Intellectual Property",
              body: "All content, logos, hardware designs, and software code presented on the ISBLEX platform are the exclusive property of ISBLEX Systems. Unauthorized reproduction or reverse engineering is strictly prohibited."
            },
            {
              title: "04. Limitation of Liability",
              body: "ISBLEX provides services on an 'as-is' basis. We shall not be held liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our hardware or digital services."
            },
            {
              title: "05. Order & Pricing Logic",
              body: "We reserve the right to modify pricing, adjust hardware specifications, or discontinue product lines without prior notice. Final order acceptance is subject to inventory verification and payment confirmation."
            },
            {
              title: "06. Modifications",
              body: "ISBLEX reserves the right to update these terms at any time. Continued use of the platform after updates constitutes acceptance of the modified protocol."
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
            ISBLEX Systems // Governance Protocol V4
          </p>
        </div>
      </div>
    </section>
  );
}