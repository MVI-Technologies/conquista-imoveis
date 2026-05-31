import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import LocationsSection from "@/components/LocationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <GallerySection />
      <LocationsSection />
      <CTASection />
      <Footer />

      {/* Floating WhatsApp FAB */}
      <a
        href="https://wa.me/5511999990888?text=Olá! Estava navegando no seu site e gostaria de fazer uma simulação de financiamento."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
        {/* Tooltip on hover */}
        <span className="absolute right-16 bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-sm pointer-events-none">
          Falar com Corretor Thiago
        </span>
      </a>
    </div>
  );
};

export default Index;
