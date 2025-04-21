import FeaturesSection from "@/components/main/Features";
import HeroSection from "@/components/main/HeroSection";
import Navbar from "@/components/main/Navbar";
import BenefitsSection from "@/components/main/benifits";
import ServicesSection from "@/components/main/Services";
import PricingSection from "@/components/main/Pricing";
import ContactSection from "@/components/main/Contact";
import FAQPage from "@/components/main/Faq";
import Footer from "@/components/main/Footer";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <HeroSection/>
      <BenefitsSection/>
      <FeaturesSection/>
      <ServicesSection/>
      <PricingSection/>
      <ContactSection/>
      <FAQPage/>
      <Footer/>
    </div>
  );
}
