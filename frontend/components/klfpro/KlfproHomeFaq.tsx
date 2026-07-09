"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqItems } from "@/components/marketing/FaqSection";

export function KlfproHomeFaq() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section className="border-t border-slate-200/80 bg-[#f9fafb] py-16 md:py-20" id="faq">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-[#0A1128] md:text-4xl">Questions, answered clearly</h2>
        <p className="mt-3 text-sm text-[#1E293B] md:text-base">
          Loans, partners, data handling, and timelines—straight from KLFPRO Consulting.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl px-6">
        <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-[#0A1128] transition hover:bg-slate-50"
                >
                  <span>{item.question}</span>
                  <span
                    className={`shrink-0 text-[#1E293B] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-100 px-5 pb-4 pt-0 text-sm leading-relaxed text-[#1E293B]">
                        {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
