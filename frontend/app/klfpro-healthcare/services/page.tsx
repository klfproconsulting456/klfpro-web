import { Metadata } from "next";
import ServicesHero from "@/components/healthcare/services/ServicesHero";
import ServicesCoreGrid from "@/components/healthcare/services/ServicesCoreGrid";
import ServicesOverview from "@/components/healthcare/services/ServicesOverview";
import ServicesCaseStudies from "@/components/healthcare/services/ServicesCaseStudies";

export const metadata: Metadata = {
  title: "Our Services | KLFPRO Healthcare",
  description: "Explore our premium enterprise healthcare solutions, including Medical Coding, RCM, and Denial Management.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHero />
      
      {/* Background Image Container for the rest of the page */}
      <div 
        className="relative flex-1 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/services-page-bg.jpg')" }}
      >
        {/* Subtle white overlay to ensure content is perfectly readable */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10">
          <ServicesOverview />
          <ServicesCoreGrid />
          <ServicesCaseStudies />
        </div>
      </div>
    </div>
  );
}
