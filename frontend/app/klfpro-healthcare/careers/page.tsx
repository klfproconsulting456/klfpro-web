import { Metadata } from "next";
import CareersHero from "@/components/healthcare/careers/CareersHero";
import CareersPerks from "@/components/healthcare/careers/CareersPerks";
import CareersOpenings from "@/components/healthcare/careers/CareersOpenings";

export const metadata: Metadata = {
  title: "Careers | KLFPRO Healthcare",
  description: "Join KLFPRO Healthcare. Explore open positions in Medical Coding, Revenue Cycle Management, and more.",
};

export default function CareersPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image with blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('/images/healthcare-bg-light.png')` }}
      />
      <div className="absolute inset-0 z-0 bg-white/50 backdrop-blur-[8px]" />
      
      <div className="relative z-10">
        <CareersHero />
        <CareersPerks />
        <CareersOpenings />
      </div>
    </main>
  );
}
