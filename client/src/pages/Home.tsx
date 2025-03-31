import { useEffect } from "react";
import DigitalRain from "@/components/DigitalRain";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    // Add custom styles to body
    document.body.classList.add('bg-[#0D0208]', 'text-white', 'antialiased');
    document.body.style.overflowX = 'hidden';
    document.body.style.scrollBehavior = 'smooth';
    
    return () => {
      // Cleanup on unmount
      document.body.classList.remove('bg-[#0D0208]', 'text-white', 'antialiased');
      document.body.style.overflowX = '';
      document.body.style.scrollBehavior = '';
    };
  }, []);
  
  return (
    <div className="min-h-screen relative font-mono">
      {/* Digital Rain Canvas Background */}
      <DigitalRain />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
