"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BANK_PARTNER_LOGOS } from "@/content/bank-partner-logos";
import { KlfReveal } from "@/components/marketing/KlfMotion";

function AmbientBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_0%_30%,rgba(212,175,55,0.15),transparent_52%),radial-gradient(ellipse_70%_50%_at_100%_70%,rgba(153,27,51,0.08),transparent_48%),linear-gradient(165deg,#FAF6EE_0%,#FFFFFF_45%,#FAF6EE_100%)]" />
      <svg className="absolute -left-8 top-0 h-full w-[min(52%,420px)] opacity-[0.4]" viewBox="0 0 400 640" preserveAspectRatio="none">
        <path
          d="M0 140 C90 100 130 220 50 280 S-10 360 70 420 S190 460 110 560 S40 620 140 640"
          fill="none"
          stroke="rgb(250 204 21)"
          strokeWidth="1"
        />
        <path
          d="M0 240 C110 200 150 300 70 360 S30 460 110 500 S210 540 130 620"
          fill="none"
          stroke="rgb(250 204 21)"
          strokeWidth="0.75"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}

export function BankingPartnersSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-8%" });

  return (
    <section id="banking-partners" className="relative overflow-hidden border-t border-[#0A1128]/15 py-16 md:py-24">
      <AmbientBackdrop />

      <div className="relative z-[1] mx-auto max-w-[1180px] px-5 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-14">
          <div className="lg:pt-1">
            <KlfReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#0A1128]/55">Lender network</p>
              <h2 className="mt-3 text-balance text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-[#0A1128] md:text-[2.1rem] lg:text-[2.35rem]">
                Banks &amp; <span className="text-[#B8972E]">NBFCs</span> we work with
              </h2>
            </KlfReveal>
            <p className="mt-4 max-w-[400px] text-[14px] leading-relaxed text-[#1E293B] md:text-[15px]">
              Representative partners from our active panel—each brand shown once. Your application can still be matched
              across a broader bank &amp; NBFC network when you move to sanction and disbursement.
            </p>
            <Link
              href="#banking-partners-grid"
              className="interactive-lift mt-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-gradient-to-r from-[#D4AF37] to-[#B8972E] px-6 py-2.5 text-[14px] font-semibold text-zinc-950 shadow-[0_0_28px_-8px_rgba(212,175,55,0.45)] transition hover:border-amber-300/60"
            >
              View panel
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </Link>
          </div>

          <div
            id="banking-partners-grid"
            ref={gridRef}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4"
          >
            {BANK_PARTNER_LOGOS.map((bank, i) => (
              <motion.div
                key={bank.id}
                initial={{ opacity: 0, y: 14 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group flex min-h-[100px] flex-col items-center justify-center rounded-2xl border border-[#0A1128]/15 bg-white/60 px-4 py-4 shadow-sm backdrop-blur-md transition-[border-color,box-shadow,background-color] duration-200 hover:bg-white hover:border-[#D4AF37]/35 hover:shadow-[0_12px_40px_-15px_rgba(212,175,55,0.25)]"
              >
                <div className="relative flex h-full w-full flex-1 items-center justify-center py-2">
                  <div className="relative h-14 w-full md:h-16">
                    <Image src={bank.image} alt={bank.name} fill className="object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 40vw, 180px" />
                  </div>
                </div>
                <span className="absolute bottom-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0A1128]/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {bank.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
