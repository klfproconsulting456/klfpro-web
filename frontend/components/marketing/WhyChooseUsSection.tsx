"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { EnquiryModal } from "./EnquiryModal";

const features = [
  { title: "Quick Approval", desc: "Get fast access to personal loans without hassle.", icon: "bolt" },
  { title: "Flexible EMI Options", desc: "Choose repayment plans that fit your financial needs.", icon: "calendar" },
  { title: "Competitive Rates", desc: "Enjoy attractive interest rates from top lenders.", icon: "chart" },
  { title: "Zero Repayment Charges", desc: "Repay early without any hidden penalties.", icon: "shield" },
  { title: "No Impact on Credit Score", desc: "Check eligibility without affecting your credit score.", icon: "check" },
  { title: "100% Digital Process", desc: "Complete your loan journey fully online.", icon: "device" }
] as const;

function Icon({ name }: { name: (typeof features)[number]["icon"] }) {
  if (name === "bolt") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#B8972E]/90" aria-hidden>
        <path d="M13 2 3 14h7l-1 8 12-14h-7l-1-6Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#B8972E]/90" aria-hidden>
        <path
          d="M7 2v3M17 2v3M4 7h16M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "chart") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#B8972E]/90" aria-hidden>
        <path d="M4 19V5M4 19h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 17V11M12 17V7M16 17V9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#B8972E]/90" aria-hidden>
        <path
          d="M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "check") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#B8972E]/90" aria-hidden>
        <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#B8972E]/90" aria-hidden>
      <path d="M7 2h10M8 6h8M9 10h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="5" y="4" width="14" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function WhyChooseUsSection({ loanType = "Personal Loan" }: { loanType?: string }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  return (
    <section className="relative overflow-hidden border-t border-[#0A1128]/15 bg-[#FAF6EE] px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_10%,rgba(212,175,55,0.09),transparent_55%),radial-gradient(ellipse_55%_40%_at_85%_90%,rgba(153,27,51,0.07),transparent_50%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-1 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.95)] backdrop-blur-xl">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.22]"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 20%, rgba(245,158,11,0.11), transparent 42%), radial-gradient(circle at 90% 0%, rgba(245,158,11,0.07), transparent 40%)"
            }}
          />

          <div className="relative rounded-[14px] bg-[#FAF6EE]/90 px-3 py-4">
            <h2 className="text-center text-4xl font-semibold leading-tight text-[#0A1128]">
              What Makes <span className="klf-gold-shimmer-text">KLFPRO</span> Your Ideal Partner for{" "}
              <span className="font-bold">{loanType}</span>?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#1E293B]">
              Get hassle-free {loanType.toLowerCase()} offers with attractive interest rates and flexible repayment options.
            </p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
              className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  whileHover={{ y: -5, boxShadow: "0 18px 40px -18px rgba(212,175,55,0.22)" }}
                  className="rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-6 shadow-[0_16px_36px_-24px_rgba(0,0,0,0.7)] backdrop-blur-md transition-colors hover:border-amber-300/20"
                >
                  <Icon name={f.icon} />
                  <h3 className="mt-4 text-lg font-semibold text-[#0A1128]">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1E293B]">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 flex justify-center">
              <a
                href="/eligibility"
                className="rounded-full bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#B8972E] px-8 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_30px_-10px_rgba(212,175,55,0.6)] transition hover:scale-[1.02]"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} initialLoanType={loanType} />
    </section>
  );
}

