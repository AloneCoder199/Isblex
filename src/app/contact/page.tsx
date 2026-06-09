import FinalCTA from "@/components/Contact/ContactFinalCTA";
import ContactForm from "@/components/Contact/ContactForm";
import ContactHero from "@/components/Contact/ContactHero";
import ContactMethods from "@/components/Contact/ContactMethods";
import FAQPreview from "@/components/Contact/FAQPreview";
import OrderSupport from "@/components/Contact/OrderSupport";
import SupportNavigator from "@/components/Contact/SupportNavigator";

// 1. Professional SEO Meta Data (Google Search ke liye)
export const metadata = {
  title: "Contact Us & Customer Support | Prifya Skincare",
  description: "Have questions about your skin routine or order? Contact Prifya customer support. We are here to help you with botanical skincare guidance and order tracking.",
  openGraph: {
    title: "Contact Prifya | High-Potency Botanical Skincare Support",
    description: "Get in touch with Prifya for skincare consultations, order support, and business inquiries.",
    url: "https://prifya.com",
    siteName: "Prifya",
    type: "website",
  },
};

export default function ContactPage() {
  // 2. Contact Page Schema (Google Bot ke liye)
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Prifya",
    "description": "Contact page for Prifya botanical skincare and hair growth support.",
    "url": "https://prifya.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Prifya",
      "url": "https://prifya.com",
      "logo": "https://prifya.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@prifya.com", // ✉️ Isko aap apne sahi email se badal sakte hain
        "availableLanguage": "en"
      }
    }
  };

  return (
    <>
      {/* Google SEO Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Page Components */}
      <ContactHero />
      <ContactMethods />
      <OrderSupport />
      <ContactForm />
      <SupportNavigator />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
