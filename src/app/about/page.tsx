import FinalCTA from "@/components/About/AboutFinalCTA";
import AboutHero from "@/components/About/Abouthero";
import IsblexExperience from "@/components/About/IsblexExperience";
import OurMission from "@/components/About/MissionSection";
import OurStory from "@/components/About/OurStory";
import OurValues from "@/components/About/OurValues";
import WhatMakesUsDifferent from "@/components/About/WhatMakesIsblexDifferent";
import WhyWeStarted from "@/components/About/WhyWeStarted";

// 1. Professional SEO Meta Data (Google Search ke liye)
export const metadata = {
  title: "Our Story & Mission | Prifya Botanical Skincare",
  description: "Discover the science and passion behind Prifya. Learn about our commitment to high-potency botanical skincare, cellular transformation, and dermal harmony.",
  openGraph: {
    title: "About Prifya | High-Potency Botanical Skincare",
    description: "The story, mission, and values behind our clean, high-potency botanical science.",
    url: "https://prifya.com",
    siteName: "Prifya",
    type: "profile",
  },
};

export default function AboutPage() {
  // 2. About Page Schema (Google Bot ke liye)
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Prifya",
      "url": "https://prifya.com",
      "logo": "https://prifya.com",
      "description": "Prifya provides high-potency botanical skincare and hair growth science.",
      "knowsAbout": [
        "Botanical Skincare",
        "Hair Growth Science",
        "Cellular Transformation",
        "Dermal Harmony"
      ]
    }
  };

  return (
    <>
      {/* Google SEO Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* Page Components */}
      <AboutHero />
      <OurStory />
      <WhyWeStarted />
      <OurMission />
      <WhatMakesUsDifferent />
      <IsblexExperience />
      <OurValues />
      <FinalCTA />
    </>
  );
}
