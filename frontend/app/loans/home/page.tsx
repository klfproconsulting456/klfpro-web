"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { generateFinancialProductSchema } from "@/lib/seo";
import { ChatFab } from "@/components/marketing/ChatFab";
import { HeroSection } from "@/components/marketing/HeroSection";
import { WhyChooseUsSection } from "@/components/marketing/WhyChooseUsSection";
import { HomeLoanListingSection } from "@/components/klfpro/HomeLoanListingSection";
import { GenericProductFeatures } from "@/components/marketing/GenericProductFeatures";
import { MarketingFooterSection } from "@/components/marketing/MarketingFooterSection";
import { EmiCalculator } from "@/components/emi/EmiCalculator";
import { EmiPaymentScheduleSection } from "@/components/emi/EmiPaymentScheduleSection";
import type { EmiScheduleInputs } from "@/components/emi/EmiPaymentScheduleSection";

const homeLoanFeatures = [
  {
    title: "Lowest Interest Rates",
    description: "Benefit from industry-leading low interest rates starting from 7.25% p.a., designed to keep your EMI burden minimal over long tenures.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Long Repayment Tenure",
    description: "Stretch your repayments up to 30 years, allowing you to comfortably manage your monthly budget without compromising your lifestyle.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Easy Balance Transfer",
    description: "Transfer your existing high-cost home loan to us effortlessly and save significantly on interest with minimal documentation.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Zero Pre-payment Penalties",
    description: "Close your home loan earlier than the actual tenure without paying any extra charges or hidden foreclosure penalties.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Digital Sanction Process",
    description: "Experience a fully transparent, 100% paperless approval journey that respects your time and keeps you updated at every step.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Top-Up Loan Facility",
    description: "Need extra funds for interiors or renovation? Avail quick top-up loans over your existing home loan at the same attractive rates.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    ),
  }
];

export default function HomeLoanPage() {
  // Home loan specific defaults (e.g. 50 Lakhs, 7.25%, 20 years)
  const [emiInputs, setEmiInputs] = useState<EmiScheduleInputs>({
    loanAmount: 5000000,
    annualRatePct: 7.25,
    tenureMonths: 240
  });
  const [autoOpenSignal, setAutoOpenSignal] = useState(0);

  return (
    <main className="min-h-screen bg-[#FAF6EE] pt-[84px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFinancialProductSchema({
              name: "Home Loan",
              description: "Home Loan up to ₹5 Crore in Gurgaon. Rates from 7.25% p.a. Compare 30+ bank offers.",
              interestRate: "7.25",
              url: "/loans/home",
            })
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Home Loan", href: "/loans/home" }]} />
      <HeroSection loanType="Home Loan" />
      
      <GenericProductFeatures 
        title="Why Choose a KLFPRO Home Loan?"
        subtitle="Unlocking the door to your dream home shouldn't be a financial burden. We bring you flexible, transparent, and highly affordable home loan solutions."
        features={homeLoanFeatures}
        theme="blue"
      />

      <HomeLoanListingSection />

      <section className="border-t border-[#0A1128]/15 bg-[#FAF6EE] pb-6">
        <EmiCalculator
          onChange={setEmiInputs}
          onViewSchedule={() => {
            const el = document.getElementById("emi-payment-schedule");
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
            setAutoOpenSignal((v) => v + 1);
          }}
        />
      </section>
      <EmiPaymentScheduleSection {...emiInputs} autoOpenSignal={autoOpenSignal} />

      <WhyChooseUsSection loanType="Home Loan" />

      <MarketingFooterSection />
      <ChatFab />
    </main>
  );
}
