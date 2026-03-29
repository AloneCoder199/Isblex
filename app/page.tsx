import HomePage from "@/components/home/homeHero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { BestSellers } from "@/components/home/BestSellers";
import TrustSection from "@/components/home/Trustsection";
import PromoBanner from "@/components/home/Promobanner";
import BrandStorySection from "@/components/home/Brandstorysection";
import { CtaSection } from "@/components/home/CtaSection";
export default function Home() {
  return (
    <>
    
    <HomePage/>
    <FeaturedCategories/>
    <BestSellers/>
    <TrustSection/>
    <PromoBanner/>
    <BrandStorySection/>
    <CtaSection/>
    </>
  );
}
