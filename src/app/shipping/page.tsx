import ShippingReturns from "@/components/legal/ShippingReturns";

// 1. Professional SEO Meta Data (Google Search aur Ads Verification ke liye)
export const metadata = {
  title: "Shipping & Delivery Policy | Prifya Botanical Skincare",
  description: "Check Prifya's shipping rates, delivery times, and order tracking protocols for our high-potency botanical skincare products.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Shipping & Delivery Policy - Prifya",
    description: "Learn about our shipping times, delivery rates, and global tracking options.",
    url: "https://prifya.com", // ✅ Sahi Shipping page URL
    siteName: "Prifya",
    type: "website",
  },
};

export default function ShippingPage() {
  // 2. Shipping Page Schema (Google Bot ke liye)
  const shippingPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Shipping and Delivery Policy",
    "description": "Information regarding shipping carriers, delivery speeds, and tracking for Prifya orders.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shippingPageSchema) }}
      />

      {/* Page Component */}
      <ShippingReturns />
    </>
  );
}
