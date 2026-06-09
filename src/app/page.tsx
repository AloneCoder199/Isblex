import BeforeAfterSlider from "@/components/Home/BeforeAfter";
import BestSellers from "@/components/Home/BestSellers";
import BrandStory from "@/components/Home/BrandStory";
import CustomerReviewsUGC from "@/components/Home/CustomerReviewsUGC";
import FAQSection from "@/components/Home/FAQ";
import FeaturedCategories from "@/components/Home/FeaturedCategories";
import FinalCTA from "@/components/Home/FinalCTA";
import HeroSection from "@/components/Home/HeroSection";
import LifestyleSolution from "@/components/Home/ProblemSolution";
import ShopByRoom from "@/components/Home/ShopByRoom";
import SocialFeed from "@/components/Home/SocialFeed";
import WhyChooseIsblex from "@/components/Home/WhyChooseIsblex";

// SEO Meta Data (Next.js App Router ke liye bohot zaroori)
export const metadata = {
  title: "Prifya | High-Potency Botanical Skincare & Hair Growth",
  description: "Prifya provides high-potency botanical skincare and hair growth science, focusing on cellular transformation and dermal harmony.",
  openGraph: {
    title: "Prifya",
    description: "High-Potency Botanical Skincare & Hair Growth Science",
    url: "https://prifya.com",
    siteName: "Prifya",
    images: [
      {
        url: "https://prifya.com/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  // JSON-LD Schema Data Object
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prifya",
    "url": "https://prifya.com",
    "logo": "https://prifya.com/logo.png",
    "description": "Prifya provides high-potency botanical skincare and hair growth science, focusing on cellular transformation and dermal harmony.",
    "sameAs": [
      "https://facebook.com/prifya",
      "https://instagram.com/prifya"
    ]
  };

  return (
    <>
      {/* Google SEO Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Aap ke Page ke Components */}
      <HeroSection />
      <BeforeAfterSlider />
      <FeaturedCategories />
      <BestSellers />
      <LifestyleSolution />
      <ShopByRoom />
      <CustomerReviewsUGC />
      <BrandStory />
      <WhyChooseIsblex />
      <SocialFeed />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
