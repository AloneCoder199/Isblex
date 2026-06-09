import SkinGuarantee from "@/components/legal/guarantee";

// 1. Professional SEO Meta Data (Trust aur Search Ranking ke liye)
export const metadata = {
  title: "Skin Satisfaction Guarantee & Refund Policy | Prifya",
  description: "Learn about Prifya's 100% Skin Satisfaction Guarantee. We stand behind our high-potency botanical skincare and hair growth science products.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Skin Satisfaction Guarantee - Prifya",
    description: "Our commitment to your skin health. Read our guarantee and refund policy.",
    url: "https://prifya.com",
    siteName: "Prifya",
    type: "website",
  },
};

export default function Guarantee() {
  // 2. Guarantee Page Schema (Google Bot ke liye)
  const guaranteePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Skin Satisfaction Guarantee",
    "description": "Information about Prifya's product guarantee, satisfaction commitment, and refund guidelines.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guaranteePageSchema) }}
      />

      {/* Page Component */}
      <SkinGuarantee />
    </>
  );
}
