"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { siteConfig } from "@/content/site-data";

export const faqItems = [
  {
    id: "1",
    question: "What does KLFPRO Consulting actually do?",
    answer:
      "We are an independent financial advisory and distribution platform. You get structured comparisons across loans, cards, and related products, plus human guidance from inquiry through documentation—without pushing a single lender."
  },
  {
    id: "2",
    question: "How does the process work end-to-end?",
    answer: (
      <>
        <p className="mb-3 text-[#1E293B]">A straightforward flow—built for clarity, not jargon:</p>
        <ol className="list-decimal space-y-2 pl-5 text-[#1E293B]">
          <li>Tell us your goal and share basic profile details.</li>
          <li>We shortlist eligible options from our partner bank &amp; NBFC network.</li>
          <li>You compare terms digitally with our team on call or chat.</li>
          <li>We coordinate paperwork and status updates until sanction / disbursement.</li>
        </ol>
        <p className="mt-3 text-[#1E293B]">
          Partners using KLFPRO tools get the same transparency on offers, payouts, and case tracking.
        </p>
      </>
    )
  },
  {
    id: "3",
    question: "Is my information handled securely?",
    answer:
      "Yes. We treat personal and financial data with strict access controls and encryption in line with industry practice. Information is used only to evaluate fit, prepare applications, and service your case—not for unrelated marketing resale."
  },
  {
    id: "4",
    question: "Do you store my internet banking username or password?",
    answer:
      "No. KLFPRO does not collect or store your bank login credentials. Any bank-linked verification happens through regulated channels offered by the lender or authorized aggregators—you stay in control of credentials."
  },
  {
    id: "5",
    question: "Who sees my data besides KLFPRO?",
    answer:
      "Details are shared only with institutions involved in your application—typically the lender or credit bureau for scoring—with your consent and purpose limitation. We do not sell personal data bundles to unrelated third parties."
  },
  {
    id: "6",
    question: "How wide is your lender network in India?",
    answer:
      "We work with a broad set of major public and private banks and NBFCs across retail and MSME products. Coverage is deep on mainstream names; not every small cooperative may be on the panel—your RM will confirm live eligibility."
  },
  {
    id: "7",
    question: "How long until I hear back after I apply?",
    answer:
      "Initial eligibility feedback is often same day or within one business day. Full sanction timelines depend on the lender, document quality, and product type—many retail cases move inside 24–72 hours once the file is complete."
  }
] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200/80 bg-zinc-50 text-zinc-500 transition-colors duration-200 group-hover:border-zinc-300 group-hover:bg-white"
      aria-hidden
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
        <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function SupportIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full max-h-[200px] text-[#D4AF37]/90" aria-hidden>
      <defs>
        <linearGradient id="faqGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(253 224 71)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="rgb(250 204 21)" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="78" fill="none" stroke="url(#faqGold)" strokeWidth="0.5" className="opacity-40" />
      <path
        d="M100 42v28M100 130v12M62 100h-12M150 100h-12"
        stroke="currentColor"
        strokeWidth="0.35"
        className="opacity-25"
        strokeLinecap="round"
      />
      <rect x="58" y="72" width="84" height="56" rx="10" fill="none" stroke="currentColor" strokeWidth="1.1" className="opacity-80" />
      <path d="M76 96h48M76 108h32" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" className="opacity-50" />
      <circle cx="100" cy="138" r="5" fill="currentColor" className="opacity-70" />
    </svg>
  );
}

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("1");
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section id="faq" className="relative border-t border-zinc-200/80 bg-zinc-50 py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,255,255,0.9),transparent),linear-gradient(180deg,rgba(250,250,250,0.6)_0%,transparent_35%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1180px] px-5 md:px-6">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[720px] text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Help center</p>
          <h2 className="mt-3 text-balance text-[1.85rem] font-semibold tracking-tight text-zinc-900 md:text-[2.35rem]">
            Straight answers on loans, partners &amp; your data
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#1E293B] md:text-base">
            No fluff—just how KLFPRO works, what we protect, and what you can expect when you move forward with us.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12">
          <motion.aside
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#081428] p-8 text-white shadow-[0_24px_80px_-32px_rgba(0,0,0,0.45)] md:min-h-[440px] md:p-9"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">KLFPRO</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-[1.65rem]">Still unsure?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Browse the topics on the right, or reach the desk directly—we respond during {siteConfig.hours.toLowerCase()}.
              </p>
              <div className="relative mt-10 flex items-center justify-center py-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12),transparent_65%)]" />
                <SupportIllustration />
              </div>
            </div>
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">Direct line</p>
              <a href={`tel:${siteConfig.phonePrimary.replace(/\s/g, "")}`} className="mt-1 block text-lg font-semibold text-white tabular-nums hover:text-[#B8972E]">
                {siteConfig.phonePrimary}
              </a>
              <a href={`mailto:${siteConfig.emailPrimary}`} className="mt-2 block text-sm text-white/70 hover:text-[#B8972E]/90">
                {siteConfig.emailPrimary}
              </a>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`overflow-hidden rounded-2xl border transition-[border-color,box-shadow] duration-200 ${
                    isOpen
                      ? "border-zinc-300 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04),0_18px_48px_-24px_rgba(0,0,0,0.12)]"
                      : "border-zinc-200/90 bg-white/90 hover:border-zinc-300 hover:shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="group flex w-full items-start justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="pt-0.5 text-[15px] font-medium leading-snug text-zinc-900 md:text-[16px]">{item.question}</span>
                    <Chevron open={isOpen} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-zinc-100 px-5 pb-5 pt-1 text-[14px] leading-relaxed md:px-6 md:text-[15px]">
                          {typeof item.answer === "string" ? <p className="text-[#1E293B]">{item.answer}</p> : item.answer}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
