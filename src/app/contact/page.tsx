import FinalCTA from "@/components/Contact/ContactFinalCTA";
import ContactForm from "@/components/Contact/ContactForm";
import ContactHero from "@/components/Contact/ContactHero";
import ContactMethods from "@/components/Contact/ContactMethods";
import FAQPreview from "@/components/Contact/FAQPreview";
import OrderSupport from "@/components/Contact/OrderSupport";
import SupportNavigator from "@/components/Contact/SupportNavigator";



export default function Home() {
  return (
    <>
    <ContactHero/>
    <ContactMethods/>
    <OrderSupport/>
    <ContactForm/>
    <SupportNavigator/>
    <FAQPreview/>
    <FinalCTA/>
    </>
  );
}
