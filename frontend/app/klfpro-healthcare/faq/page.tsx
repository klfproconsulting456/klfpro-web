import { Metadata } from "next";
import { FAQClient } from "@/components/faq/FAQClient";

export const metadata: Metadata = {
  title: "Healthcare FAQ - KLFPRO Healthcare",
  description: "Frequently Asked Questions about KLFPRO Healthcare BPO solutions, including Medical Billing, RCM, and Medical Coding.",
};

export default function HealthcareFAQPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image with blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('/images/healthcare-bg-light.png')` }}
      />
      <div className="absolute inset-0 z-0 bg-white/50 backdrop-blur-[8px]" />
      
      <div className="relative z-10">
        <FAQClient />
      </div>
    </main>
  );
}
