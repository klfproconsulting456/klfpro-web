"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChatFab } from "@/components/marketing/ChatFab";
import { GenericProductFeatures } from "@/components/marketing/GenericProductFeatures";
import { MarketingFooterSection } from "@/components/marketing/MarketingFooterSection";

const creditScoreFeatures = [
  {
    title: "Zero Impact on Score",
    description: "Checking your credit score with us counts as a 'soft inquiry', which means it will not lower your credit score by even a single point.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Detailed Credit Health Report",
    description: "Get an in-depth breakdown of your credit profile, including active accounts, payment history, and credit utilization ratio.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Actionable Insights",
    description: "Receive personalized tips and steps on how to improve your score, correct discrepancies, and build a stronger financial profile.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Monthly Updates",
    description: "Track your progress over time with free monthly updates on your credit score sent directly to your inbox or WhatsApp.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Unlock Pre-Approved Offers",
    description: "A good credit score instantly unlocks exclusive pre-approved loan and credit card offers at the lowest possible interest rates.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "100% Secure & Private",
    description: "We use bank-grade encryption to fetch your credit report directly from top bureaus, ensuring your data remains completely private.",
    iconSvg: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  }
];

export default function CreditScorePage() {
  return (
    <main className="min-h-screen bg-[#FAF6EE] pt-[84px]">
      {/* Custom Credit Score Hero */}
      <section className="relative overflow-hidden border-b border-[#0A1128]/15 bg-[#FAF6EE] pb-16 pt-8 md:pb-24 md:pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.15),transparent_50%),linear-gradient(180deg,#FAF6EE_0%,#FFFFFF_50%,#FAF6EE_100%)]" />
          <div className="absolute inset-0 opacity-[0.6] [background-image:radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-5 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="mx-auto max-w-3xl text-balance text-[2.5rem] font-semibold leading-[1.12] tracking-tight text-[#0A1128] md:text-[3.5rem] lg:text-[4rem]">
              Know Your <span className="text-[#D4AF37]">Credit Score</span> in Seconds. For Free.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[#1E293B] md:text-[19px]">
              A healthy credit score is the key to financial freedom. Check your score instantly without hurting it, and unlock personalized loan and card offers.
            </p>
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px -6px rgba(212,175,55,0.45)" }}
              whileTap={{ scale: 0.98 }}
              className="mx-auto mt-10 w-fit"
            >
              <Link
                href="/eligibility"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8972E] px-10 text-[17px] font-semibold text-zinc-950 shadow-[0_12px_40px_-10px_rgba(212,175,55,0.45)] transition"
              >
                Check Free Credit Score <span className="ml-1.5" aria-hidden>→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <GenericProductFeatures 
        title="Why Check Your Score With KLFPRO?"
        subtitle="We partner directly with leading credit bureaus like CIBIL and Experian to give you the most accurate representation of your credit health."
        features={creditScoreFeatures}
        theme="emerald"
      />

      <section className="border-t border-[#0A1128]/15 bg-[#FAF6EE] py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-3xl font-bold text-[#0A1128] md:text-4xl">Ready to unlock premium offers?</h2>
          <p className="mt-4 text-[#1E293B]">Join thousands of users who have improved their credit profile with our actionable insights.</p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/eligibility"
              className="interactive-lift rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-8 py-3.5 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/20"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooterSection />
      <ChatFab />
    </main>
  );
}
