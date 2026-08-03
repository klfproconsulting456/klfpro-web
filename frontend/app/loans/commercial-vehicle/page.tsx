"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { generateFinancialProductSchema } from "@/lib/seo";
import { ChatFab } from "@/components/marketing/ChatFab";
import { HeroSection } from "@/components/marketing/HeroSection";
import { WhyChooseUsSection } from "@/components/marketing/WhyChooseUsSection";
import { GenericProductFeatures } from "@/components/marketing/GenericProductFeatures";
import { MarketingFooterSection } from "@/components/marketing/MarketingFooterSection";
import { EmiCalculator } from "@/components/emi/EmiCalculator";
import { EmiPaymentScheduleSection } from "@/components/emi/EmiPaymentScheduleSection";
import type { EmiScheduleInputs } from "@/components/emi/EmiPaymentScheduleSection";

const cvFeatures = [
  {
    title: "Up to 100% Chassis Funding",
    description: "Get maximum funding on the chassis and body of your commercial vehicle to start operations immediately with minimal upfront investment.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "New & Used Vehicles",
    description: "Finance for light commercial vehicles (LCVs), heavy commercial vehicles (HCVs), buses, and used trucks customized for your business.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Fast Disbursal",
    description: "We understand that in logistics, time is money. Get your commercial vehicle loan approved and disbursed quickly.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Flexible Repayment",
    description: "Align your EMI payments with your cash flow and seasonal business income for stress-free repayments.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  }
];

export default function CommercialVehicleLoanPage() {
  const [emiInputs, setEmiInputs] = useState<EmiScheduleInputs>({
    loanAmount: 1500000,
    annualRatePct: 10,
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
              name: "Commercial Vehicle Loan",
              description: "Commercial Vehicle Loan in Gurgaon for trucks, buses, and LCVs. Fast approval.",
              interestRate: "10.0",
              url: "/loans/commercial-vehicle",
            })
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Commercial Vehicle Loan", href: "/loans/commercial-vehicle" }]} />
      <HeroSection loanType="Commercial Vehicle Loan" />
      
      <GenericProductFeatures 
        title="Accelerate Your Business Growth"
        subtitle="Expand your fleet with our flexible Commercial Vehicle Loans designed specifically for logistics and transport businesses."
        features={cvFeatures}
        theme="blue"
      />

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

      <WhyChooseUsSection loanType="Commercial Vehicle Loan" />

      <MarketingFooterSection />
      <ChatFab />
    </main>
  );
}
