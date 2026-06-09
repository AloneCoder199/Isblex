import RefundProtocol from "@/components/legal/RefundProtocol";

// 1. Professional SEO Meta Data (Google Search aur Trust ke liye)
export const metadata = {
  title: "Refund & Return Policy | Prifya Botanical Skincare",
  description: "Read the Prifya Refund and Return Policy. Learn about our skin satisfaction claims, return window, and how to request a refund for your orders.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Refund & Return Policy - Prifya",
    description: "Learn about our product return process and refund protocols.",
    url: "https://prifya.com", // ✅ Sahi Refund page URL
    siteName: "Prifya",
    type: "website",
  },
};

export default function RefundPage() {
  // 2. Refund Page Schema (Google Bot ke liye)
  const refundPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Refund and Return Policy",
    "description": "The official return, exchange, and refund protocols for Prifya botanical skincare products.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(refundPageSchema) }}
      />

      {/* Page Component */}
      <RefundProtocol />
    </>
  );
}
