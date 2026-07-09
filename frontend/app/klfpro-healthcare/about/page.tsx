import { Metadata } from "next";
import AboutHero from "@/components/healthcare/about/AboutHero";
import AboutWhoWeAre from "@/components/healthcare/about/AboutWhoWeAre";
import AboutCoreValues from "@/components/healthcare/about/AboutCoreValues";
import AboutCTA from "@/components/healthcare/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | KLFPRO Healthcare",
  description: "Learn about KLFPRO Healthcare Solutions — empowering healthcare providers with next-gen revenue cycle management solutions.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image with blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('/images/healthcare-bg-light.png')` }}
      />
      <div className="absolute inset-0 z-0 bg-white/50 backdrop-blur-[8px]" />
      
      <div className="relative z-10">
        <AboutHero />
        <AboutWhoWeAre />
        <AboutCoreValues />
        <AboutCTA />
      </div>
    </main>
  );
}
