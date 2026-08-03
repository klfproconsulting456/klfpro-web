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

const educationFeatures = [
  {
    title: "Global Reach",
    description: "Finance studies in India or abroad covering tuition fees, living expenses, travel, and study materials.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "100% Financing",
    description: "Get complete funding without margin money requirements for premium institutes.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Moratorium Period",
    description: "Enjoy flexible repayment terms that start only after you finish your course and secure a job.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Co-Applicant Flexibility",
    description: "Easily add your parents, siblings, or spouse as co-applicants to boost your eligibility and loan amount.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Tax Benefits",
    description: "Avail tax deductions under Section 80E of the Income Tax Act on the interest paid towards your education loan.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Pre-Visa Disbursement",
    description: "Get funds disbursed directly to the university or a blocked account to satisfy visa office requirements.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }
];

export default function EducationLoanPage() {
  const [emiInputs, setEmiInputs] = useState<EmiScheduleInputs>({
    loanAmount: 2500000,
    annualRatePct: 10,
    tenureMonths: 84
  });
  const [autoOpenSignal, setAutoOpenSignal] = useState(0);

  return (
    <main className="min-h-screen bg-[#FAF6EE] pt-[84px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFinancialProductSchema({
              name: "Education Loan",
              description: "Education Loan up to ₹2 Crore in Gurgaon. Study in India & abroad with flexible repayment.",
              interestRate: "8.5",
              url: "/loans/education",
            })
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Education Loan", href: "/loans/education" }]} />
      <HeroSection loanType="Education Loan" />
      
      <GenericProductFeatures 
        title="Fund Your Future"
        subtitle="Don't let finances hold you back from achieving academic excellence. Get customized education loans designed for global ambitions."
        features={educationFeatures}
        theme="emerald"
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

      <WhyChooseUsSection loanType="Education Loan" />

      <MarketingFooterSection />
      <ChatFab />
    </main>
  );
}
