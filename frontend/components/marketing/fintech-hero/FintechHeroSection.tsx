"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSceneBackground } from "./HeroSceneBackground";
import { HeroTiltCard as TiltCard } from "./HeroTiltCard";

function StatUsersIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
        fill="currentColor"
      />
    </svg>
  );
}

function StatRupeeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v6.5M8 9h8M8 9a4 4 0 0 0 4 4h-3a4 4 0 0 0 4 4h-3M8 9a4 4 0 0 1 4-4h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatPartnersIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20V10l8-5 8 5v10M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatShieldIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3 5 6v6c0 5 3.5 9 7 10 3.5-1 7-5 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const heroStats = [
  { label: "2.5L+ Customers", sub: "Trusted nationwide", Icon: StatUsersIcon },
  { label: "INR 1000Cr+ Disbursed", sub: "Capital unlocked", Icon: StatRupeeIcon },
  { label: "50+ Partners", sub: "Banks & NBFCs", Icon: StatPartnersIcon },
  { label: "99% Approval Rate", sub: "Eligible profiles", Icon: StatShieldIcon }
] as const;

const productStrip = [
  { badge: "Quick Sanction", title: "Home Loan", desc: "Instant approval at competitive rates", icon: "HM", href: "/loans/home" },
  { badge: "Quick Disbursal", title: "Personal Loan", desc: "Paperless journey, fast credit", icon: "PL", href: "/loans/personal-loan" },
  { badge: "Low EMI", title: "New Car Loan", desc: "Drive your next car sooner", icon: "CL", href: "/loans/car" },
  { badge: "Rewards", title: "Credit Card", desc: "Compare top issuer offers", icon: "CC", href: "/credit-score" }
] as const;

export function FintechHeroSection() {
  return (
    <section className="relative overflow-hidden text-[#0A1128]">
      <HeroSceneBackground />

      <div className="relative mx-auto max-w-[1200px] px-5 pb-10 pt-[96px] md:px-6 lg:pt-[104px]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <HeroCopyBlock />

          <div className="relative min-h-[340px] lg:min-h-[420px]">
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#D4AF37]/12 via-transparent to-[#fef3c7]/12 blur-3xl" aria-hidden />
            <div className="relative flex h-full flex-col items-center justify-center gap-5 py-4">
              <TiltCard floatDelay={0.1} className="z-20 w-full max-w-[320px]">
                <FloatingPanel accent="gold" title="Loan approval" subtitle="Pre-qualified in minutes" href="/loans/personal-loan" metric="INR 12.4L" metricLabel="Sanction preview" />
              </TiltCard>
              <div className="flex w-full max-w-[320px] flex-col gap-4 sm:-mt-2 sm:flex-row sm:gap-4">
                <TiltCard floatDelay={0.22} className="z-10 flex-1">
                  <FloatingPanel accent="vanilla" small title="Credit score" subtitle="Insight snapshot" href="/credit-score" metric="782" metricLabel="Est. range" />
                </TiltCard>
                <TiltCard floatDelay={0.34} className="z-10 flex-1">
                  <FloatingPanel accent="amber" small title="EMI calculator" subtitle="Plan before you borrow" href="/emi-calculator" metric="INR 18,420" metricLabel="Sample EMI" />
                </TiltCard>
              </div>
            </div>
          </div>
        </div>

        <HeroStatsBar />

        <div className="relative mx-auto mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {productStrip.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-5 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            >
              <span className="absolute right-3 top-3 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#fde68a] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-zinc-900">
                {c.badge}
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#fef3c7]/20 text-[11px] font-bold text-[#B8972E]">
                {c.icon}
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-[#0A1128]">{c.title}</h3>
              <p className="mt-2 text-sm leading-snug text-[#1E293B]">{c.desc}</p>
              <Link
                href="/eligibility"
                className="interactive-lift mt-4 inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/12 px-4 py-2 text-[13px] font-semibold text-[#B8972E] transition hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/20"
              >
                Apply now <span aria-hidden>{">"}</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroCopyBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-6"
    >
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0A1128]/20 bg-[#0A1128]/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0A1128] backdrop-blur-xl">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#fef3c7] shadow-[0_0_12px_rgba(212,175,55,0.65)]" />
        KLFPRO Consulting
      </span>

      <h1 className="max-w-[20ch] text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.03em] md:text-[3.25rem] lg:text-[3.5rem]">
        <span className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">Smarter Finance</span>
        <span className="mt-1 block bg-gradient-to-r from-[#fde68a] via-[#D4AF37] to-[#fef3c7] bg-clip-text text-transparent">Starts Here</span>
      </h1>

      <p className="max-w-xl text-[15px] leading-relaxed text-[#1E293B] md:text-[17px] md:leading-[1.65]">
        Compare loans, credit cards, and EMIs with AI-powered insights - built for clarity, speed, and trust.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/#products"
          className="interactive-lift inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#fde68a] px-8 py-3.5 text-[15px] font-semibold text-zinc-900 shadow-[0_0_40px_-10px_rgba(212,175,55,0.52)] transition hover:brightness-110"
        >
          Explore products
        </Link>
        <Link
          href="/eligibility"
          className="interactive-lift inline-flex items-center justify-center rounded-full border border-[#0A1128]/25 bg-[#0A1128]/5 px-8 py-3.5 text-[15px] font-semibold text-[#0A1128] backdrop-blur-xl transition hover:border-[#D4AF37]/45 hover:bg-[#0A1128]/5"
        >
          Check eligibility
        </Link>
      </div>
    </motion.div>
  );
}

type Accent = "gold" | "vanilla" | "amber";

function FloatingPanel({
  accent,
  title,
  subtitle,
  metric,
  metricLabel,
  href,
  small
}: {
  accent: Accent;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  href: string;
  small?: boolean;
}) {
  const ring =
    accent === "gold"
      ? "from-[#D4AF37]/40 to-[#D4AF37]/5"
      : accent === "vanilla"
        ? "from-[#fef3c7]/35 to-[#fef3c7]/5"
        : "from-amber-300/40 to-[#B8972E]/5";

  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.5)] backdrop-blur-xl transition hover:border-[#D4AF37]/30 ${small ? "p-4" : ""}`}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${ring} opacity-30 blur-2xl`} aria-hidden />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E293B]">{subtitle}</p>
          <p className={`mt-1 font-semibold tracking-tight text-[#0A1128] ${small ? "text-base" : "text-lg"}`}>{title}</p>
        </div>
        <span className="rounded-lg border border-[#0A1128]/15 bg-[#FDFBF7]/30 px-2 py-1 text-[10px] font-medium text-[#B8972E] backdrop-blur-md">Live</span>
      </div>
      <div className="relative mt-4 flex items-end justify-between border-t border-[#0A1128]/15 pt-4">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#1E293B]">{metricLabel}</p>
          <p className={`font-bold tabular-nums text-[#0A1128] ${small ? "text-xl" : "text-2xl"}`}>{metric}</p>
        </div>
        <span className="text-[#D4AF37]/70 transition group-hover:text-[#B8972E]" aria-hidden>
          {">"}
        </span>
      </div>
    </Link>
  );
}

function HeroStatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
    >
      {heroStats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.06 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          className="group rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-4 backdrop-blur-xl transition hover:border-[#D4AF37]/35 hover:shadow-[0_0_32px_-8px_rgba(212,175,55,0.28)]"
        >
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#0A1128]/15 bg-gradient-to-br from-white/10 to-transparent text-[#B8972E]">
              <s.Icon />
            </span>
            <div className="min-w-0">
              <p className="text-[13px] font-semibold leading-tight text-[#0A1128] md:text-sm">{s.label}</p>
              <p className="mt-1 text-[11px] text-[#1E293B]">{s.sub}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
