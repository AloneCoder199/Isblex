import WarrantyClaim from "@/components/legal/WarrantyClaim";

// 1. Professional SEO Meta Data (Google Search aur Customer Trust ke liye)
export const metadata = {
  title: "Warranty Claims & Support | Prifya Botanical Skincare",
  description: "Learn how to file a warranty claim for Prifya products. Read our policy on product defects, replacements, and manufacturing guarantees.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Warranty Claims - Prifya",
    description: "Submit a product warranty claim or check your coverage rules.",
    url: "https://prifya.com", // ✅ Sahi Warranty page URL
    siteName: "Prifya",
    type: "website",
  },
};

export default function WarrantyPage() {
  // 2. Warranty Page Schema (Google Bot ke liye)
  const warrantyPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Warranty Claims and Support",
    "description": "Guidelines and official procedures for filing product warranty claims with Prifya.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(warrantyPageSchema) }}
      />

      {/* Page Component */}
      <WarrantyClaim />
    </>
  );
}
