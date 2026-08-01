"use client";

import { useState } from "react";

const FACTORS = [
  {
    id: "income",
    title: "Income",
    icon: "💼",
    desc:
      "Your income plays a crucial role. Higher and more stable income increases loan approval chances and can help you secure lower interest rates."
  },
  {
    id: "credit-history",
    title: "Credit History",
    icon: "📊",
    desc:
      "A strong credit history with timely repayments improves your eligibility and helps you secure better loan offers and interest rates."
  },
  {
    id: "employer-status",
    title: "Employer's Status",
    icon: "🏢",
    desc:
      "Working with a reputed employer or running a stable business improves your credibility with lenders and can speed up approval."
  },
  {
    id: "dti",
    title: "Debt-to-Income Ratio",
    icon: "📈",
    desc:
      "A lower debt-to-income ratio shows better repayment capacity, improving your chances of getting approved for a higher loan amount."
  },
  {
    id: "trust",
    title: "Building Trust For Better Rates",
    icon: "🤝",
    desc:
      "Maintaining a healthy financial profile and consistent banking relationship helps build trust and unlocks more competitive interest rates."
  },
  {
    id: "default-history",
    title: "Default History",
    icon: "⚠️",
    desc:
      "Past defaults or frequent missed payments negatively impact your creditworthiness and can reduce your chances of approval."
  }
] as const;

export function FactorsImpactSection({ loanType = "Personal Loan" }: { loanType?: string }) {
  const [openId, setOpenId] = useState<string | null>(FACTORS[0]?.id ?? null);

  return (
    <section className="relative overflow-hidden border-t border-[#0A1128]/15 bg-[#FAF6EE] px-4 sm:px-6 py-10 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_48%_at_80%_5%,rgba(212,175,55,0.08),transparent_55%)]" />
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0A1128]">
          <span className="klf-gold-shimmer-text">Factors</span> That Impact Your {loanType}
        </h2>
        <p className="mt-2 text-[13px] md:text-[15px] text-[#1E293B]">
          Your loan EMI depends on multiple factors like credit score, income, loan amount, and repayment history.
        </p>

        <div className="mt-8 md:mt-12 rounded-xl sm:rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 shadow-[0_28px_60px_-35px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.04] backdrop-blur-md">
          <div className="divide-y divide-white/10">
            {FACTORS.map((factor) => {
              const isOpen = openId === factor.id;
              return (
                <div key={factor.id}>
                  <button
                    type="button"
                    onClick={() => setOpenId((prev) => (prev === factor.id ? null : factor.id))}
                    className="flex w-full items-center justify-between px-4 py-3 md:px-5 md:py-4 text-left text-[14px] md:text-sm font-medium text-[#0A1128] transition hover:bg-[#0A1128]/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base sm:text-lg text-[#B8972E]/90" aria-hidden>
                        {factor.icon}
                      </span>
                      <span>{factor.title}</span>
                    </div>
                    <span
                      className={`ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#0A1128]/15 bg-[#0A1128]/5 text-xs text-[#0F1C3F] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    >
                      ▾
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden px-4 md:px-5 transition-all duration-300 ${
                      isOpen ? "max-h-40 py-2.5 md:py-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-[13px] sm:text-sm leading-relaxed text-[#1E293B]">{factor.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

