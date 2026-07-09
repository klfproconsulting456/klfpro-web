"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

type StatItem = {
  label: string;
  value: number;
  suffix: string;
  icon: "cities" | "customers" | "partners" | "disbursed";
};

type DetailItem = {
  id: number;
  title: string;
  value: string;
};

const stats: StatItem[] = [
  { label: "Cities Covered", value: 2, suffix: "+", icon: "cities" },
  { label: "Happy Customers", value: 1, suffix: " Lac+", icon: "customers" },
  { label: "Banking Partners", value: 90, suffix: "+", icon: "partners" },
  { label: "Disbursed Annually", value: 1000, suffix: "k", icon: "disbursed" }
];

const details: DetailItem[] = [
  { id: 1, title: "Loan Type", value: "Unsecured (No collateral required)" },
  { id: 2, title: "Loan Amount", value: "₹10,000 to ₹50 Lakhs" },
  { id: 3, title: "Interest Rate", value: "Starting from 9.75% p.a." },
  { id: 4, title: "Repayment Tenure", value: "12 to 84 months" },
  { id: 5, title: "Usage Flexibility", value: "No end-use restrictions" },
  { id: 6, title: "Available In", value: "50+ cities across 18+ states" },
  { id: 7, title: "Support", value: "Expert guidance throughout the process" }
];

function StatIcon({ kind }: { kind: StatItem["icon"] }) {
  const common = "h-5 w-5 text-[#B8972E]/90";
  if (kind === "cities") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.25" />
      </svg>
    );
  }
  if (kind === "customers") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
        <path d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 1a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm8 3c1.5 0 3 .3 3 1.5V18H9v-1.5C9 15.3 10.5 15 12 15Zm-8 0c.9 0 2 .15 2 .75V18H4v-1.25C4 15.15 5.1 15 6 15Z" />
      </svg>
    );
  }
  if (kind === "partners") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M4 20V10M4 10l4-6 4 3 4-3 4 6v10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 20v-6h8v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 19V5M4 19h16M4 19l3-6h10l3 6M8 13V9h8v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IntroAsideVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px]" aria-hidden>
      <div className="absolute inset-0 rounded-[2rem] border border-[#0A1128]/15 bg-gradient-to-br from-white/[0.06] via-transparent to-amber-400/[0.04] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.85)] backdrop-blur-xl" />
      <motion.div
        className="absolute left-[12%] top-[18%] h-24 w-24 rounded-3xl bg-gradient-to-br from-[#D4AF37]/25 to-amber-600/5 blur-sm"
        animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] h-32 w-32 rounded-full bg-sky-500/10 blur-2xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[22%] bottom-[28%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#FAF6EE]/80 shadow-lg backdrop-blur-md"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <span className="text-lg font-semibold text-[#B8972E]">₹</span>
      </motion.div>
      <motion.div
        className="absolute right-[20%] top-[26%] h-3 w-20 rounded-full bg-white/20"
        animate={{ opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const durationMs = 1200;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  const display = useMemo(() => `${value}${suffix}`, [value, suffix]);
  return <span ref={ref}>{display}</span>;
}

function Gold({ children }: { children: ReactNode }) {
  return <span className="font-medium text-[#B8972E]/95">{children}</span>;
}

export function StatsSection({ loanType = "Personal Loan" }: { loanType?: string }) {
  const isHomeLoan = loanType.toLowerCase().includes("home");
  const detailRows = isHomeLoan
    ? [
        { id: 1, title: "Loan Type", value: "Secured (Property-backed financing)" },
        { id: 2, title: "Loan Amount", value: "Up to 90% of property value" },
        { id: 3, title: "Interest Rate", value: "Starting from 8.35% p.a." },
        { id: 4, title: "Repayment Tenure", value: "Up to 30 years" },
        { id: 5, title: "Usage Flexibility", value: "Purchase, construction, transfer, renovation" },
        { id: 6, title: "Available In", value: "Across major cities and growing towns" },
        { id: 7, title: "Support", value: "End-to-end assistance from approval to disbursal" }
      ]
    : details;
  return (
    <section className="relative overflow-hidden bg-[#FAF6EE] pb-6 pt-0 md:pb-10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#D4AF37]/[0.07] via-transparent to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/35 to-transparent"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-[1200px] px-5 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid gap-4 pt-2 sm:grid-cols-2 lg:-mt-6 lg:grid-cols-4 lg:gap-5 lg:pt-0"
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
              }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="group relative overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-6 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.75)] backdrop-blur-xl transition-shadow duration-300 hover:border-[#D4AF37]/25 hover:shadow-[0_28px_60px_-24px_rgba(212,175,55,0.12)]"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#D4AF37]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 shadow-inner">
                  <StatIcon kind={item.icon} />
                </span>
                <p className="text-left text-[13px] font-medium uppercase tracking-wide text-[#1E293B]">{item.label}</p>
              </div>
              <p className="mt-4 text-left text-[2rem] font-semibold tabular-nums tracking-tight text-[#0A1128] md:text-[2.35rem]">
                <AnimatedNumber target={item.value} suffix={item.suffix} />
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid items-center gap-12 lg:mt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          <div>
            <h2 className="text-left text-[2rem] font-semibold leading-tight tracking-tight text-[#0A1128] md:text-[2.65rem] lg:text-[2.85rem]">
              Get Instant <span className="klf-gold-shimmer-text">{loanType}</span>
            </h2>
            <ul className="mt-8 max-w-[640px] space-y-6 text-left text-[15px] leading-relaxed text-[#1E293B] md:text-[16px]">
              <li className="flex gap-3">
                <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                </span>
                <p>
                  A quick and easy way to handle financial needs is through a <Gold>{loanType}</Gold>. It requires smart
                  planning and is accessible to salaried individuals, self-employed professionals, and business owners.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                </span>
                <p>
                  <Gold>KLFPRO Consulting</Gold> helps you get <Gold>instant approvals</Gold>, <Gold>fast disbursal</Gold>, and flexible
                  repayment options. Compare offers from multiple banks and NBFCs, and choose what suits you best.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                </span>
                <p>
                  Our <Gold>smart tools</Gold> and expert support ensure a <Gold>seamless borrowing experience</Gold> from application to
                  disbursement.
                </p>
              </li>
            </ul>
          </div>
          <IntroAsideVisual />
        </motion.div>
      </div>

      <div className="relative mx-auto mt-16 max-w-[1200px] px-5 md:mt-20 md:px-6" aria-hidden>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="mx-auto -mt-px h-16 max-w-2xl bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)] blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative border-t border-[#0A1128]/15 bg-[#FAF6EE]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-14">
          <h3 className="mb-10 text-left text-[1.65rem] font-semibold tracking-tight text-[#0A1128] md:text-[2rem]">{loanType} Detail</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {detailRows.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4 rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-4 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.6)] backdrop-blur-md"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/35 bg-gradient-to-br from-[#D4AF37]/20 to-amber-600/10 text-[13px] font-semibold text-[#B8972E]">
                  {item.id}
                </span>
                <div className="min-w-0 space-y-1">
                  <p className="text-[15px] font-medium leading-snug text-[#0A1128]">{item.title}</p>
                  <p className="text-[13px] leading-relaxed text-[#1E293B] md:text-[14px]">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
