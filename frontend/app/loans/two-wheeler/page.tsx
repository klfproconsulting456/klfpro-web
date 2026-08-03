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

const twoWheelerFeatures = [
  {
    title: "100% On-Road Funding",
    description: "Don't let a down payment delay your ride. We provide up to 100% funding on the on-road price of your favorite bike or scooter.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Instant Digital Approval",
    description: "Skip the paperwork. Our end-to-end digital process ensures instant approval so you can ride home faster.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "EV Financing Supported",
    description: "Thinking of going green? We offer specialized, low-interest financing for Electric Vehicles (EVs).",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Flexible Tenure",
    description: "Choose a repayment schedule from 12 months to 48 months to keep your monthly EMIs completely stress-free.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  }
];

export default function TwoWheelerLoanPage() {
  const [emiInputs, setEmiInputs] = useState<EmiScheduleInputs>({
    loanAmount: 80000,
    annualRatePct: 9.5,
    tenureMonths: 24
  });
  const [autoOpenSignal, setAutoOpenSignal] = useState(0);

  return (
    <main className="min-h-screen bg-[#FAF6EE] pt-[84px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFinancialProductSchema({
              name: "Two Wheeler Loan",
              description: "Finance your bike or scooter in Gurgaon. Up to 100% funding and low interest rates.",
              interestRate: "9.5",
              url: "/loans/two-wheeler",
            })
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Two Wheeler Loan", href: "/loans/two-wheeler" }]} />
      <HeroSection loanType="Two Wheeler Loan" />
      
      <GenericProductFeatures 
        title="Hit the Road Faster"
        subtitle="Turn your dream of owning a bike or scooter into reality with our easy, fast, and affordable Two Wheeler Loans."
        features={twoWheelerFeatures}
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

      <WhyChooseUsSection loanType="Two Wheeler Loan" />

      <MarketingFooterSection />
      <ChatFab />
    </main>
  );
}
