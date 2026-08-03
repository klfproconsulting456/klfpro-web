"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { generateFinancialProductSchema } from "@/lib/seo";
import { ChatFab } from "@/components/marketing/ChatFab";
import { HeroSection } from "@/components/marketing/HeroSection";
import { StatsSection } from "@/components/marketing/StatsSection";
import { EligibilitySection } from "@/components/marketing/EligibilitySection";
import { UsageSection } from "@/components/marketing/UsageSection";
import { ComparePersonalLoansSection } from "@/components/marketing/ComparePersonalLoansSection";
import { WhyChooseUsSection } from "@/components/marketing/WhyChooseUsSection";
import { PersonalLoanEligibilitySection } from "@/components/marketing/PersonalLoanEligibilitySection";
import { BankPartnersCompactSection } from "@/components/marketing/BankPartnersCompactSection";
import { HowToApplySection } from "@/components/marketing/HowToApplySection";
import { KeyBenefitsSection } from "@/components/marketing/KeyBenefitsSection";
import { FactorsImpactSection } from "@/components/marketing/FactorsImpactSection";
import { MarketingFooterSection } from "@/components/marketing/MarketingFooterSection";
import { EmiCalculator } from "@/components/emi/EmiCalculator";
import { EmiPaymentScheduleSection } from "@/components/emi/EmiPaymentScheduleSection";
import type { EmiScheduleInputs } from "@/components/emi/EmiPaymentScheduleSection";

export default function PersonalLoanPage() {
  const [emiInputs, setEmiInputs] = useState<EmiScheduleInputs>({
    loanAmount: 1553884,
    annualRatePct: 9,
    tenureMonths: 60
  });
  const [autoOpenSignal, setAutoOpenSignal] = useState(0);

  return (
    <main className="min-h-screen bg-[#FAF6EE] pt-[84px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFinancialProductSchema({
              name: "Personal Loan",
              description: "Get Personal Loan up to ₹40 Lakhs in Gurgaon. Fast approval, competitive rates, minimal documentation.",
              interestRate: "10.25",
              url: "/loans/personal-loan",
            })
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Personal Loan", href: "/loans/personal-loan" }]} />
      <HeroSection />
      <StatsSection />
      <EligibilitySection />
      <UsageSection />
      <ComparePersonalLoansSection />
      <WhyChooseUsSection />

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
      <PersonalLoanEligibilitySection />
      <BankPartnersCompactSection />
      <HowToApplySection />
      <KeyBenefitsSection />
      <FactorsImpactSection />

      <MarketingFooterSection />
      <ChatFab />
    </main>
  );
}
