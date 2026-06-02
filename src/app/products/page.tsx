import CatalogEngine from "@/components/Products/CatalogEngine";
import CollectionHero from "@/components/Products/CollectionHero";
import FeaturedBanner from "@/components/Products/FeaturedBanner";
import ProductFilters from "@/components/Products/ProductFilters";
import TransformationCTA from "@/components/Products/TransformationCTA";


export default function Home() {
  return (
    <>
    <CollectionHero/>
    <ProductFilters/>
    <CatalogEngine/>
    <FeaturedBanner/>
    <TransformationCTA/>
    </>
  );
}
