import FinalCTA from "@/components/About/AboutFinalCTA";
import AboutHero from "@/components/About/Abouthero";
import CustomerCommunity from "@/components/About/CustomerCommunity";
import IsblexExperience from "@/components/About/IsblexExperience";
import OurMission from "@/components/About/MissionSection";
import OurProducts from "@/components/About/OurProducts";
import OurStory from "@/components/About/OurStory";
import OurValues from "@/components/About/OurValues";
import WhatMakesUsDifferent from "@/components/About/WhatMakesIsblexDifferent";
import WhyWeStarted from "@/components/About/WhyWeStarted";


export default function Home() {
  return (
    <>
    <AboutHero/>
    <OurStory/>
    <WhyWeStarted/>
    <OurMission/>
    <WhatMakesUsDifferent/>
    <OurProducts/>
    <IsblexExperience/>
    <OurValues/>
    <CustomerCommunity/>
    <FinalCTA/>
    </>
  );
}
