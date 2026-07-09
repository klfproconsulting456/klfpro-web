"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    key: "01",
    title: "Eligibility",
    desc: "Tell us your requirement and complete quick details.",
    x: "left-[8%] top-[102px]",
    icon: "◎",
    align: "left"
  },
  {
    key: "02",
    title: "Compare",
    desc: "AI matched offers based on your profile and goals.",
    x: "right-[10%] top-[148px]",
    icon: "◍"
    ,
    align: "right"
  },
  {
    key: "03",
    title: "Apply",
    desc: "Digital application with paperless process.",
    x: "left-[11%] top-[344px]",
    icon: "◈",
    align: "left"
  },
  {
    key: "04",
    title: "Disbursement",
    desc: "Quick sanction and release with partner support.",
    x: "right-[10%] top-[420px]",
    icon: "▦"
    ,
    align: "right"
  }
] as const;

export function LoanProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#efefef] py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.08) 1px, transparent 1px), radial-gradient(circle at 1px 1px, rgba(212,175,55,0.14) 1px, transparent 1px)",
          backgroundSize: "18px 18px, 130px 130px",
          backgroundPosition: "0 0, 22px 30px"
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <div className="flex items-center gap-6 opacity-[0.10]">
          <span className="relative h-28 w-28">
            <Image src="/klfpro-mark.png" alt="" fill className="object-contain grayscale" sizes="112px" />
          </span>
          <span className="select-none text-center text-[138px] font-bold uppercase tracking-tight text-zinc-500">
            KLFPRO
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1170px] px-5 text-center md:px-6">
        <h2 className="text-[34px] font-semibold tracking-tight text-zinc-900 md:text-[52px]">
          Easy. Convenient <span className="text-[#D4AF37]">Quick.</span>
        </h2>
        <p className="mt-2 text-[16px] text-zinc-700">The simple and quick steps to your loan.</p>
      </div>

      <div className="mx-auto mt-8 grid max-w-[1170px] gap-6 px-5 md:hidden md:px-6">
        {steps.map((step, idx) => (
          <motion.article
            key={step.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="rounded-2xl border border-zinc-300/60 bg-white/60 p-4 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-[38px] font-bold leading-none text-[#d3f4ea]">{step.key}</span>
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-[#D4AF37] shadow-md">
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-[#D4AF37]/70"
                  animate={{ scale: [1, 1.32], opacity: [0.65, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: idx * 0.25, ease: "easeOut" }}
                />
                {step.icon}
              </span>
            </div>
            <h3 className="mt-2 text-[30px] font-semibold text-zinc-900">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-zinc-700">{step.desc}</p>
          </motion.article>
        ))}
      </div>

      <div className="relative mx-auto mt-10 hidden h-[520px] max-w-[1170px] px-5 md:mt-12 md:block md:h-[560px] md:px-6">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1170 560" preserveAspectRatio="none">
          <defs>
            <linearGradient id="processTracerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="35%" stopColor="#34d399" />
              <stop offset="62%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
          <path
            d="M118 130 H846 C906 130 930 158 930 198 C930 238 906 266 846 266 H276 C228 266 212 296 212 352 C212 408 228 438 276 438 H900"
            fill="none"
            stroke="#2f3b3b"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <motion.path
            d="M118 130 H846 C906 130 930 158 930 198 C930 238 906 266 846 266 H276 C228 266 212 296 212 352 C212 408 228 438 276 438 H900"
            fill="none"
            stroke="url(#processTracerGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="230 1490"
            animate={{ strokeDashoffset: [0, -1720] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {steps.map((step, idx) => (
          <motion.article
            key={step.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className={`absolute z-10 max-w-[240px] ${step.align === "right" ? "text-right" : "text-left"} ${step.x}`}
          >
            <div className={`flex items-center gap-3 ${step.align === "right" ? "justify-end" : ""}`}>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-[#D4AF37] shadow-md">
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-[#34d399]/70"
                  animate={{ scale: [1, 1.36], opacity: [0.75, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.22, ease: "easeOut" }}
                />
                {step.icon}
              </span>
              <span className="rounded-md bg-[#efefef] px-1.5 text-[52px] font-bold leading-none text-zinc-900">{step.key}</span>
            </div>
            <h3 className="mt-3 text-[44px] font-semibold text-zinc-900">{step.title}</h3>
            <p className={`mt-2 text-[16px] leading-relaxed text-zinc-700 ${step.align === "right" ? "ml-auto max-w-[220px]" : "max-w-[220px]"}`}>
              {step.desc}
            </p>
          </motion.article>
        ))}
      </div>

      <div className="relative mx-auto mt-2 flex max-w-[1170px] justify-center px-5 md:px-6">
        <Link
          href="/dashboard"
          className="interactive-lift rounded-full bg-zinc-900 px-10 py-3 text-[16px] font-medium text-[#0A1128] hover:bg-zinc-800"
        >
          Get Started <span aria-hidden>›</span>
        </Link>
      </div>
    </section>
  );
}
