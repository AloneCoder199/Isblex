export default function PrivacyPolicy() {
  return (
    <section className="bg-[#09090B] min-h-screen py-24 px-6 text-[#A1A1AA] font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 border-b border-[#18181B] pb-10">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">Privacy Policy</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-[#22D3EE] uppercase">
            Effective Date: June 02, 2026 // ISBLEX_SYSTEM_V4
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {[
            {
              title: "01. Introduction",
              body: "At ISBLEX, we respect your privacy. This policy outlines how we collect, use, and protect your data when you interact with our smart lighting ecosystem and digital platform."
            },
            {
              title: "02. Information We Collect",
              body: "We acquire data to enhance your experience: (a) Personal Data: Name and email provided during account initialization; (b) Usage Data: IP address, browser type, and navigation paths; (c) Transactional Data: Order details and payment metadata processed through our secure financial gateways."
            },
            {
              title: "03. How We Use Data",
              body: "Your information is utilized for: (1) System functionality and service improvement; (2) Communication regarding your orders or account status; (3) Newsletter delivery (only if opted-in); (4) Security monitoring to prevent unauthorized access."
            },
            {
              title: "04. Cookies & Tracking",
              body: "We utilize cookies and similar tracking technologies to monitor activity on our platform. You may instruct your browser to refuse cookies, though this may limit functionality in some sectors of the ISBLEX dashboard."
            },
            {
              title: "05. Data Protection",
              body: "We implement industry-standard encryption (SSL/TLS) for data in transit. While no digital infrastructure is 100% secure, we utilize rigorous security protocols to protect your identity nodes."
            },
            {
              title: "06. Third-Party Disclosure",
              body: "ISBLEX does not sell, trade, or rent your personal data to third parties. We may share data with trusted service providers who assist us in operating our platform, provided they agree to keep this information confidential."
            },
            {
              title: "07. User Rights",
              body: "You maintain the right to access, rectify, or request the deletion of your personal data. Please contact our administrative team via the dashboard to initiate such requests."
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
            Questions? Contact: support@isblex.com
          </p>
        </div>
      </div>
    </section>
  );
}