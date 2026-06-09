import FAQPage from "@/components/legal/FAQPage";

// 1. Professional SEO Meta Data (Google Search aur Trust ke liye)
export const metadata = {
  title: "Privacy Policy | Prifya Botanical Skincare",
  description: "Read the Prifya Privacy Policy to learn how we collect, use, and protect your personal data and privacy while shopping for botanical skincare.",
  robots: {
    index: true,
    follow: true, // Legal pages ko rank aur follow hona chahiye
  },
  openGraph: {
    title: "Privacy Policy - Prifya",
    description: "Your privacy matters to us. Learn about our data protection policies.",
    url: "https://prifya.com",
    siteName: "Prifya",
    type: "website",
  },
};

export default function Privacy() {
  // 2. Legal / Privacy Page Schema (Google Bot ke liye)
  const privacyPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy policy and data protection guidelines for Prifya website users.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPageSchema) }}
      />

      {/* Page Component */}
      <FAQPage />
    </>
  );
}
