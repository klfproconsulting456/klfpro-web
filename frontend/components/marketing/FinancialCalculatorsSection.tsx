"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { KlfReveal } from "@/components/marketing/KlfMotion";
import { useRef } from "react";

type CalculatorIconId = "emi" | "eligibility" | "prepay" | "home" | "homeElig" | "study";

const calculatorRows = [
  [
    {
      title: "Personal Loan EMI Calculator",
      desc: "Calculate your EMIs and plan repayments in advance",
      iconId: "emi" as const
    },
    {
      title: "Personal Loan Eligibility Calculator",
      desc: "Check how much personal loan you can borrow quickly",
      iconId: "eligibility" as const
    },
    {
      title: "Personal Loan Prepayment Calculator",
      desc: "Estimate savings and optimize prepayments easily",
      iconId: "prepay" as const
    }
  ],
  [
    {
      title: "Home Loan EMI Calculator",
      desc: "Work out your monthly home loan EMI accurately",
      iconId: "home" as const
    },
    {
      title: "Home Loan Eligibility Calculator",
      desc: "Discover your home loan eligibility and plan better",
      iconId: "homeElig" as const
    },
    {
      title: "Study Loan EMI Calculator",
      desc: "Discover study loan eligibility and payment options",
      iconId: "study" as const
    }
  ]
] as const;

function CalculatorIcon({ id }: { id: CalculatorIconId }) {
  const common = "h-6 w-6 text-amber-500";
  switch (id) {
    case "emi":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 7h8M8 11h2M12 11h4M8 15h2M12 15h4" />
        </svg>
      );
    case "eligibility":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 19V5a1 1 0 011-1h14a1 1 0 011 1v14" />
          <path d="M8 9h8M8 13h5" />
          <path d="M17 17l2 2 4-4" />
        </svg>
      );
    case "prepay":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v8M9 11l3-3 3 3" />
        </svg>
      );
    case "home":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z" />
        </svg>
      );
    case "homeElig":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z" />
          <path d="M17 17l2 2 4-4" />
        </svg>
      );
    case "study":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 10l8-4 8 4-8 4-8-4z" />
          <path d="M4 10v6l8 4 8-4v-6" />
          <path d="M12 14v7" />
        </svg>
      );
    default:
      return null;
  }
}

export function FinancialCalculatorsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-y border-[#0A1128]/15 bg-gradient-to-br from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE] pb-18 pt-18 text-[#0A1128]">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ scale: [1, 1.04, 1], x: [0, -14, 12, 0], y: [0, -8, 7, 0] }}
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
      >
        <div
          className="absolute inset-0 opacity-55"
          style={{
            background:
              "radial-gradient(42% 50% at 14% 22%, rgba(212,175,55,0.18), transparent 72%), radial-gradient(38% 44% at 84% 34%, rgba(96,165,250,0.22), transparent 68%), radial-gradient(30% 30% at 64% 78%, rgba(212,175,55,0.12), transparent 75%)"
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-35"
        animate={{ x: ["-7%", "8%", "-5%"], y: [0, 6, 0] }}
        transition={{ duration: 11, ease: "linear", repeat: Infinity }}
        style={{
          background:
            "linear-gradient(140deg, rgba(255,255,255,0.08) 0 12%, transparent 12% 100%), linear-gradient(35deg, rgba(96,165,250,0.1) 0 18%, transparent 18% 100%), linear-gradient(215deg, rgba(212,175,55,0.1) 0 18%, transparent 18% 100%)"
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-12 bottom-10 h-44 w-44 rounded-full bg-[#D4AF37]/15 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, -10, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-3%] top-16 h-52 w-52 rounded-full bg-sky-300/20 blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, 12, 0], opacity: [0.2, 0.42, 0.2] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="pointer-events-none absolute inset-0 klf-grid-bg opacity-20" aria-hidden />
      <KlfReveal className="relative mx-auto max-w-[1170px] px-5 text-center md:px-6">
        <h2 className="text-[36px] font-bold md:text-[52px]">
          Financial{" "}
          <span className="bg-gradient-to-r from-[#fde68a] via-[#D4AF37] to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(212,175,55,0.35)]">
            Calculators
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-[760px] text-[16px] text-[#0A1128]">
          Plan EMIs, estimate eligibility, and make better financial decisions faster.
        </p>
      </KlfReveal>

      <div className="relative mx-auto mt-10 max-w-[1170px] space-y-10 px-5 md:px-6">
        {calculatorRows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex flex-wrap justify-center gap-6 [perspective:1200px]">
            {row.map((card, idx) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24, rotateX: 10, scale: 0.95, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ type: "spring", damping: 26, stiffness: 280, delay: idx * 0.07 + rowIdx * 0.05 }}
                whileHover={{
                  rotateX: -5,
                  rotateY: rowIdx % 2 === 0 ? 3 : -3,
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 0 56px -20px rgba(212,175,55,0.4)"
                }}
                animate={inView ? { y: [0, -5, 0] } : { y: 0 }}
                style={{ transformStyle: "preserve-3d", willChange: "transform, box-shadow, filter" }}
                className="group relative h-[196px] w-full max-w-[300px] rounded-[24px] border border-[#D4AF37]/28 bg-gradient-to-b from-white/[0.09] to-white/[0.03] px-5 pb-5 pt-11 text-center shadow-[0_0_48px_-22px_rgba(212,175,55,0.24)] backdrop-blur-lg transition hover:border-[#fde68a]/48 md:w-[292px]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.12),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(96,165,250,0.12),transparent_52%)] opacity-60" />
                <motion.span
                  className="absolute -top-7 left-1/2 flex h-[54px] w-[54px] -translate-x-1/2 items-center justify-center rounded-full border border-white/35 bg-white shadow-lg"
                  animate={{ y: [0, -5, 0], scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: idx * 0.22 + rowIdx * 0.15, ease: "easeInOut" }}
                >
                  <CalculatorIcon id={card.iconId} />
                </motion.span>
                <h3 className="text-[18px] font-semibold leading-tight">{card.title}</h3>
                <p className="mx-auto mt-3 max-w-[250px] text-[14px] leading-relaxed text-[#0F1C3F]">{card.desc}</p>
                <div className="pointer-events-none absolute inset-x-0 bottom-[-18px] flex justify-center">
                  <motion.button
                    type="button"
                    whileHover={{ y: -2, scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="interactive-lift pointer-events-auto rounded-full bg-white px-6 py-1.5 text-[14px] font-semibold text-zinc-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 md:translate-y-2"
                  >
                    Try It <span aria-hidden>{">"}</span>
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        ))}

        <div className="flex justify-center">
            <Link
            href="/emi-calculator"
            className="interactive-lift rounded-full bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#fef3c7] px-10 py-3 text-[16px] font-semibold text-zinc-950 shadow-[0_0_36px_-8px_rgba(212,175,55,0.45)] hover:brightness-110"
          >
            Explore More Calculators <span aria-hidden>{">"}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}


