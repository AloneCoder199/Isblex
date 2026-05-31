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
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    <HeroSection/>
    <BeforeAfterSlider/>
    <FeaturedCategories/>
    <BestSellers/>
    <LifestyleSolution/>
    <ShopByRoom/>
    <CustomerReviewsUGC/>
    <BrandStory/>
    <WhyChooseIsblex/>
    <SocialFeed/>
    <FAQSection/>
    <FinalCTA/>
    </>
  );
}
