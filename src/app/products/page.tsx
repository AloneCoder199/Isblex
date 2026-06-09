import CatalogEngine from "@/components/Products/CatalogEngine";
import CollectionHero from "@/components/Products/CollectionHero";
import FeaturedBanner from "@/components/Products/FeaturedBanner";
import ProductFilters from "@/components/Products/ProductFilters";
import TransformationCTA from "@/components/Products/TransformationCTA";

// 1. Professional E-commerce SEO Meta Data
export const metadata = {
  title: "Shop All Botanical Skincare & Hair Growth Products | Prifya",
  description: "Explore Prifya's collection of high-potency botanical skincare and hair growth science. Shop our formulas for cellular transformation and dermal harmony.",
  openGraph: {
    title: "Shop Botanical Skincare & Hair Growth formulas - Prifya",
    description: "Discover clean, scientifically-backed botanical skincare. Shop the full Prifya collection today.",
    url: "https://prifya.com", // ✅ Specific Products page URL
    siteName: "Prifya",
    type: "website",
  },
};

export default function ProductsPage() {
  // 2. Collection Page Schema (Google E-commerce Bot ke liye)
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Prifya Product Collection",
    "description": "The full catalog of high-potency botanical skincare and hair growth science products by Prifya.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />

      {/* Page Components */}
      <CollectionHero />
      {/* <ProductFilters/> */}
      <CatalogEngine />
      <FeaturedBanner />
      <TransformationCTA />
    </>
  );
}
