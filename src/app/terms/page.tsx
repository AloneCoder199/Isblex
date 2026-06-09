import TermsOfService from "@/components/legal/TermsOfService";

// 1. Professional SEO Meta Data (Google Search aur Legal Safety ke liye)
export const metadata = {
  title: "Terms of Service | Prifya Botanical Skincare",
  description: "Read the Prifya Terms of Service. Learn about our website usage rules, user accounts, product purchases, and legal agreements.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service - Prifya",
    description: "Our website usage agreements and official terms of service.",
    url: "https://prifya.com", // ✅ Sahi Terms page URL
    siteName: "Prifya",
    type: "website",
  },
};

export default function TermsPage() {
  // 2. Terms Page Schema (Google Bot ke liye)
  const termsPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "The official terms and conditions for using the Prifya website and purchasing our botanical skincare formulas.",
    "url": "https://prifya.com",
    "publisher": {
      "@type": "Organization",
      "name": "Prifya",
      "logo": "https://prifya.com"
    }
  };

  return (
    <>
      {/* Google SEO Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsPageSchema) }}
      />

      {/* Page Component */}
      <TermsOfService />
    </>
  );
}
