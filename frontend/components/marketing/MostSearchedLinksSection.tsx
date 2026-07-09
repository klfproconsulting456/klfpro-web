"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const navRows = [
  ["Personal Loan", "Home Loan", "Business Loan", "Loan Against Property", "Vehicle Loan"],
  ["CIBIL Score", "Interest Rates", "Calculators", "Knowledge Hub", "Tools & Utilities"]
] as const;

const dropdownData: Record<string, string[][]> = {
  "Personal Loan": [
    ["HDFC Personal Loan", "IndusInd Bank Personal Loan"],
    ["Bank of Baroda Personal Loan", "Aditya Birla Personal Loan"],
    ["SBI Personal Loan", "PNB Personal Loan"],
    ["Axis Bank Personal Loan", "Canara Bank Personal Loan"],
    ["ICICI Personal Loan", "L&T Finance Personal Loan"]
  ],
  "Home Loan": [
    ["HDFC Ltd Home Loan", "Axis Bank Home Loan"],
    ["SBI Home Loan", "PNB Home Loan"],
    ["HDFC Bank Home Loan", "Canara Bank Home Loan"],
    ["LIC Housing Finance Home Loan", "ICICI Bank Home Loan"],
    ["Bank of Baroda Home Loan", "Kotak Bank Home Loan"]
  ],
  "Business Loan": [
    ["HDFC Bank Business Loan", "Tata Capital Business Loan"],
    ["SBI Business Loan", "Bank of Baroda Business Loan"],
    ["Axis Bank Business Loan", "IndusInd Bank Business Loan"],
    ["ICICI Bank Business Loan", "Punjab National Bank Business Loan"],
    ["Kotak Bank Business Loan", "Bajaj Finserv Business Loan"]
  ],
  "Loan Against Property": [
    ["HDFC Loan Against Property", "Canara Bank Loan Against Property"],
    ["SBI Loan Against Property", "Muthoot Finance Loan Against Property"],
    ["ICICI Bank Loan Against Property", "Kotak Mahindra Bank Loan Against Property"],
    ["Axis Bank Loan Against Property", "Bank of Baroda Loan Against Property"],
    ["PNB Loan Against Property", "IDFC Loan Against Property"]
  ],
  "Vehicle Loan": [
    ["Car Loan", "Construction Equipment Loan"],
    ["Used Car Loan"],
    ["Two Wheeler Loan"],
    ["Super Bike Loan"],
    ["Commercial Vehicle Loan"]
  ],
  "CIBIL Score": [
    ["Check Your CIBIL Score", "Check CIBIL Card"],
    ["HDFC Bank CIBIL Score"],
    ["PNB CIBIL Score", "Check CIBIL Score by Aadhar Card"],
    ["Union Bank of India CIBIL Score", "How to Improve Your CIBIL Score"],
    ["Axis Bank CIBIL Score"]
  ],
  "Interest Rates": [
    ["SBI Personal Loan Interest Rate", "PNB Personal Loan Interest Rate", "HDFC Ltd Home Loan Interest Rates", "Axis Bank Home Loan Interest Rates"],
    ["HDFC Bank Personal Loan Interest Rate", "Canara Bank Personal Loan Interest Rate", "ICICI Bank Home Loan Interest Rates", "Canara Bank Home Loan Interest Rates"],
    ["ICICI Bank Personal Loan Interest Rates", "Bank of India Personal Loan Interest Rate", "LIC Housing Finance Home Loan Interest Rates", "HDFC Bank Home Loan Interest Rates"],
    ["Axis Bank Personal Loan Interest Rate", "Piramal Finance Personal Loan", "Bank Of Baroda Home Loan Interest Rates"],
    ["Bank of Baroda Personal Loan Interest Rate", "SBI Home Loan Interest Rates", "PNB Home Loan Interest Rates"]
  ],
  Calculators: [
    ["SIP Calculator", "PPF Calculator"],
    ["FD Calculator", "GST Calculator"],
    ["Compound Interest Calculator", "Mutual Fund Calculator"],
    ["Car Loan EMI Calculator", "Lumpsum Calculator"],
    ["Income Tax Calculator"]
  ],
  "Knowledge Hub": [
    ["Blog", "Indian Holidays"],
    ["Banking Guides", "Insurance"],
    ["Aadhaar Card"],
    ["PAN Card"],
    ["Income Tax"]
  ],
  "Tools & Utilities": [
    ["Currency Converter"],
    ["IFSC Code Finder"],
    ["Today Gold Rate"],
    ["Today Silver Rate"],
    []
  ]
};

function Chevron({ open, className }: { open?: boolean; className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""} ${className ?? ""}`}
      aria-hidden
    >
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowLink() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 opacity-40 transition-opacity duration-200 group-hover:opacity-100" aria-hidden>
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MostSearchedLinksSection() {
  const [active, setActive] = useState<string | null>(null);

  const activeColumns = useMemo(() => {
    if (!active) return [];
    return (dropdownData[active] ?? []).map((col) => col.filter(Boolean));
  }, [active]);

  const toggleGroup = (label: string) => {
    setActive((prev) => (prev === label ? null : label));
  };

  return (
    <section className="relative border-t border-[#0A1128]/15 bg-[#FAF6EE] py-14 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(212,175,55,0.06),transparent_50%),radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(153,27,51,0.05),transparent_45%)]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-[1180px] px-5 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#0A1128]/50">Explore</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0A1128] md:text-3xl">Most searched links</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#1E293B] md:text-[15px]">
            Jump into the topics visitors open the most—tap a category to see related links below.
          </p>
        </div>

        <div className="mt-10 space-y-3 md:mt-12">
          {navRows.map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {row.map((label) => {
                const isActive = active === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => toggleGroup(label)}
                    className={`group flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-[14px] font-medium transition-[border-color,background-color,box-shadow,color] duration-200 md:py-4 md:text-[15px] ${
                      isActive
                        ? "border-[#D4AF37]/35 bg-[#D4AF37]/[0.07] text-amber-50 shadow-[0_0_0_1px_rgba(212,175,55,0.12)_inset]"
                        : "border-[#0A1128]/15 bg-[#0A1128]/5 text-[#0A1128] hover:border-[#0A1128]/20 hover:bg-[#0A1128]/5 hover:text-[#0A1128]"
                    }`}
                    aria-expanded={isActive}
                  >
                    <span className="min-w-0 truncate">{label}</span>
                    <span className={`flex items-center gap-1 ${isActive ? "text-[#B8972E]" : "text-[#1E293B]"}`}>
                      <Chevron open={isActive} />
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <AnimatePresence initial={false}>
          {active && activeColumns.some((c) => c.length > 0) ? (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-[#FAF6EE]/95 p-5 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] backdrop-blur-xl md:p-7"
            >
              <div className="mb-4 flex flex-wrap items-end justify-between gap-2 border-b border-[#0A1128]/15 pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E293B]">Related to</p>
                <p className="text-lg font-semibold text-[#0A1128]">{active}</p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
                {activeColumns.map((column, colIdx) =>
                  column.length === 0 ? null : (
                    <ul key={`${active}-col-${colIdx}`} className="space-y-2.5">
                      {column.map((item) => (
                        <li key={item}>
                          <button
                            type="button"
                            className="group/link flex w-full items-start justify-between gap-2 rounded-lg py-1.5 text-left text-[13px] leading-snug text-[#1E293B] transition-colors hover:bg-[#0A1128]/5 hover:text-[#0A1128] md:text-[14px]"
                          >
                            <span className="min-w-0">{item}</span>
                            <ArrowLink />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
