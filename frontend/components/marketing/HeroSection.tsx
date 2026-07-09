"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { EnquiryModal } from "./EnquiryModal";

function HeroFintechVisual() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] lg:aspect-[5/4] lg:max-w-none" aria-hidden>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.15),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(153,27,51,0.12),transparent_42%)]" />
      <motion.div
        className="absolute left-[8%] top-[12%] w-[58%] rounded-2xl border border-[#0A1128]/20 bg-[#0A1128]/5 p-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)] backdrop-blur-xl"
        animate={{ y: [0, -10, 0], rotate: [-2, -1, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "center center" }}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="h-2 w-10 rounded-full bg-gradient-to-r from-amber-300 to-[#B8972E]" />
          <span className="h-2 w-16 rounded-full bg-[#0A1128]/5" />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-3/4 rounded bg-[#0A1128]/5" />
          <div className="h-2 w-1/2 rounded bg-[#0A1128]/5" />
        </div>
        <div className="mt-4 flex gap-2">
          <span className="h-8 flex-1 rounded-lg bg-[#D4AF37]/20" />
          <span className="h-8 w-14 rounded-lg bg-sky-500/15" />
        </div>
      </motion.div>
      <motion.div
        className="absolute right-[4%] top-[38%] w-[52%] rounded-2xl border border-[#D4AF37]/25 bg-[#FAF6EE]/90 p-4 shadow-[0_20px_50px_-12px_rgba(212,175,55,0.2)] backdrop-blur-xl"
        animate={{ y: [0, 12, 0], rotate: [2, 3, 2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <div className="mb-3 h-2 w-24 rounded-full bg-[#D4AF37]/30" />
        <div className="h-8 w-2/3 rounded-lg bg-[#0A1128]/5" />
        <div className="mt-3 h-2 w-full rounded bg-[#0A1128]/5" />
        <div className="mt-2 h-2 w-4/5 rounded bg-[#0A1128]/5" />
      </motion.div>
      <motion.div
        className="absolute bottom-[10%] left-[18%] w-[44%] rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-3 backdrop-blur-md"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300" aria-hidden>
            <span className="h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 border-emerald-300" />
          </span>
          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-2 w-3/4 rounded bg-[#0A1128]/15" />
            <div className="h-2 w-1/2 rounded bg-[#0A1128]/5" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl"
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function HeroSection({ loanType = "Personal Loan" }: { loanType?: string }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [telFocused, setTelFocused] = useState(false);
  const [telValue, setTelValue] = useState("");
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: parallaxRef, offset: ["start start", "end start"] });
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 42]);

  const container = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 }
    }
  };
  const child = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
  };

  const labelFloat = telFocused || telValue.length > 0;

  return (
    <section ref={parallaxRef} className="relative overflow-hidden border-b border-[#0A1128]/15 bg-[#FAF6EE] pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(212,175,55,0.15),transparent_50%),radial-gradient(ellipse_60%_50%_at_100%_30%,rgba(212,175,55,0.08),transparent_45%),linear-gradient(180deg,#FAF6EE_0%,#FFFFFF_50%,#FAF6EE_100%)]" />
        <div className="absolute inset-0 opacity-[0.6] [background-image:radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
        >
          <div className="max-w-[640px]">
            <motion.h1
              variants={child}
              className="text-balance text-[2.25rem] font-semibold leading-[1.12] tracking-tight text-[#0A1128] md:text-[2.75rem] lg:text-[3.1rem]"
            >
              Get Your {loanType} with{" "}
              <span className="klf-gold-shimmer-text font-semibold">Interest Rates</span>
            </motion.h1>

            <motion.p variants={child} className="mt-5 text-[17px] leading-relaxed text-[#1E293B] md:text-lg">
              Apply for {loanType} to fulfill all your financial needs
            </motion.p>

            <motion.div variants={child} className="mt-8 max-w-[540px]">
              <div className="relative">
                <label
                  htmlFor="hero-mobile"
                  className={`pointer-events-none absolute left-4 transition-all duration-200 ${
                    labelFloat ? "top-2 text-[11px] font-semibold uppercase tracking-wider text-[#B8972E]/90" : "top-1/2 -translate-y-1/2 text-[15px] text-[#1E293B]"
                  }`}
                >
                  Enter Mobile Number
                </label>
                <input
                  id="hero-mobile"
                  type="tel"
                  placeholder=" "
                  aria-describedby="hero-mobile-hint"
                  value={telValue}
                  onChange={(e) => setTelValue(e.target.value)}
                  onFocus={() => setTelFocused(true)}
                  onBlur={() => setTelFocused(false)}
                  className={`h-[3.75rem] w-full rounded-2xl border bg-[#0A1128]/5 px-4 text-[16px] text-[#0A1128] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-transparent focus:bg-[#0A1128]/5 ${
                    telFocused
                      ? "border-[#D4AF37]/50 shadow-[0_0_0_3px_rgba(212,175,55,0.12),0_0_40px_-8px_rgba(212,175,55,0.15)]"
                      : "border-[#0A1128]/15 hover:border-[#0A1128]/25"
                  } ${labelFloat ? "pt-5" : ""}`}
                />
              </div>
              <p id="hero-mobile-hint" className="mt-2 px-1 text-[13px] text-[#1E293B]">
                +91 Enter Aadhaar linked Mobile Number
              </p>

              <label className="mt-4 flex cursor-pointer items-start gap-3 text-[13px] leading-snug text-[#1E293B]">
                <input type="checkbox" defaultChecked className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#0A1128]/25 bg-[#0A1128]/5 accent-amber-400" />
                <span>I agree to receive promotional message from WhatsApp/RCS/SMS</span>
              </label>

              <motion.a
                href={`/eligibility?product=${(loanType || "personal-loan").toLowerCase().replace(/ /g, "-")}`}
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px -6px rgba(212,175,55,0.45)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="mt-8 inline-flex h-14 min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#B8972E] px-10 text-[17px] font-semibold text-zinc-950 shadow-[0_12px_40px_-10px_rgba(212,175,55,0.45)] transition"
              >
                Apply Now <span className="ml-1.5" aria-hidden>→</span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div style={{ y: yVisual }} className="relative mx-auto w-full max-w-[540px] lg:ml-auto lg:mr-0">
            <HeroFintechVisual />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
