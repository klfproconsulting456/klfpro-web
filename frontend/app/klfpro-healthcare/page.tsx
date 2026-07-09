import { Metadata } from "next";
import { HealthcareHero } from "@/components/healthcare/HealthcareHero";
import { HealthcareSolutions } from "@/components/healthcare/HealthcareSolutions";
import { HealthcareWhyChoose } from "@/components/healthcare/HealthcareWhyChoose";
import { HealthcareWhoWeServe } from "@/components/healthcare/HealthcareWhoWeServe";
import { HealthcareCTA } from "@/components/healthcare/HealthcareCTA";

export const metadata: Metadata = {
  title: "KLFPRO Healthcare | Premium Revenue Cycle & Solutions",
  description: "End-to-end healthcare solutions, revenue cycle management, medical billing, and BPO services to optimize your financial performance.",
};

export default function HealthcareHomePage() {
  return (
    <>
      <HealthcareHero />
      <HealthcareSolutions />
      <HealthcareWhyChoose />
      <HealthcareWhoWeServe />
      <HealthcareCTA />
    </>
  );
}
