"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-data";

export function PartnerHqVisual() {
  return (
    <div className="relative flex h-full min-h-[320px] w-full flex-col items-center justify-center overflow-hidden px-6 py-12 md:min-h-[520px] md:px-10 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(250, 204, 21, 0.09) 0%, transparent 55%), radial-gradient(ellipse 55% 45% at 50% 100%, rgba(56, 189, 248, 0.06) 0%, transparent 50%)"
        }}
      />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[40%] h-[min(72vw,320px)] w-[min(72vw,320px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(250, 204, 21, 0.11) 0%, transparent 62%)"
        }}
        animate={{ opacity: [0.55, 0.9, 0.55], scale: [0.94, 1.03, 0.94] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-[#D4AF37]/10"
        aria-hidden
        viewBox="0 0 400 520"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M200 48 Q 200 140 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.35 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M200 200 L 120 320 M200 200 L 280 320"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.35"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.22 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      <div className="relative z-[1] flex flex-col items-center text-center">
        <motion.div
          className="relative mb-7 flex h-[76px] w-[76px] items-center justify-center md:mb-8 md:h-[88px] md:w-[88px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute inset-[-4px] rounded-full border border-[#D4AF37]/[0.18]"
              animate={{ scale: [1, 1.55 + i * 0.06], opacity: [0.35, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, delay: i * 0.85, ease: "easeOut" }}
            />
          ))}
          <span className="relative flex h-full w-full items-center justify-center rounded-full border border-[#0A1128]/15 bg-[#FAF6EE]/95 shadow-[0_0_48px_rgba(212,175,55,0.12),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-md">
            <span className="relative block h-11 w-11 md:h-12 md:w-12">
              <Image src="/klfpro-mark.png" alt="" fill className="object-contain" sizes="48px" />
            </span>
          </span>
        </motion.div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#0A1128]/55 md:text-[11px]">Head office</p>
        <h3 className="mt-2.5 font-semibold tracking-tight text-[#0A1128] text-[2rem] md:text-[2.35rem]">Gurgaon</h3>
        <p className="mt-1 text-sm text-[#1E293B]">Haryana · India</p>

        <motion.div
          className="mx-auto mt-9 max-w-[300px] border-t border-[#0A1128]/15 pt-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          <p className="text-center text-[12px] leading-relaxed text-[#1E293B] md:text-[13px]">{siteConfig.address}</p>
          <p className="mt-3 text-center text-[11px] tabular-nums text-[#1E293B]">{siteConfig.phonePrimary}</p>
          <p className="mt-1 text-center text-[11px] text-[#1E293B]">{siteConfig.hours}</p>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-10 hidden h-px w-20 bg-gradient-to-r from-[#D4AF37]/25 to-transparent md:block" />
      <div className="pointer-events-none absolute bottom-10 right-10 hidden h-px w-20 bg-gradient-to-l from-sky-400/20 to-transparent md:block" />
    </div>
  );
}
