"use client";

import { motion } from "framer-motion";

const requirements = [
  { title: "Employment", icon: "briefcase" },
  { title: "Age", icon: "user" },
  { title: "Minimum Monthly Income", icon: "coins" },
  { title: "Credit Score", icon: "gauge" }
] as const;

function RequirementIcon({ type }: { type: (typeof requirements)[number]["icon"] }) {
  if (type === "briefcase") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#0A1128]" aria-hidden>
        <path
          d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v2H3V9a2 2 0 0 1 2-2h3Zm2 0h4V6h-4v1Zm11 5v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5h8v1h2v-1h8Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (type === "user") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#0A1128]" aria-hidden>
        <path
          d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-7 14a7 7 0 0 1 14 0v2H5v-2Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (type === "coins") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#0A1128]" aria-hidden>
        <path
          d="M12 4c3.3 0 6 1.34 6 3s-2.7 3-6 3-6-1.34-6-3 2.7-3 6-3Zm-6 6.5c1.2.9 3.5 1.5 6 1.5s4.8-.6 6-1.5V13c0 1.66-2.7 3-6 3s-6-1.34-6-3v-2.5Zm0 5c1.2.9 3.5 1.5 6 1.5s4.8-.6 6-1.5V18c0 1.66-2.7 3-6 3s-6-1.34-6-3v-2.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#0A1128]" aria-hidden>
      <path
        d="M12 5a8 8 0 1 0 8 8h-2a6 6 0 1 1-1.76-4.24L14 11h6V5l-2.34 2.34A7.96 7.96 0 0 0 12 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function EligibilitySection({ loanType = "Personal Loan" }: { loanType?: string }) {
  return (
    <section className="relative overflow-hidden border-t border-[#0A1128]/15 bg-[#FAF6EE] px-6 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_0%,rgba(212,175,55,0.06),transparent_50%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="max-w-lg text-4xl font-semibold leading-tight text-[#0A1128] md:text-[38px]">
            How to Check Your
            <br />
            <span className="klf-gold-shimmer-text">{loanType} Eligibility</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#1E293B]">
            Find out how much {loanType.toLowerCase()} you can avail instantly based on your income, profile, and credit score.
          </p>

          <h3 className="mt-10 text-[28px] font-semibold text-[#0A1128]">Requirements</h3>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07 } }
            }}
            className="mt-5 grid gap-3 sm:grid-cols-2"
          >
            {requirements.map((item) => (
              <motion.div
                key={item.title}
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, boxShadow: "0 16px 40px -12px rgba(212,175,55,0.12)" }}
                className="flex items-center gap-3 rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-4 shadow-[0_12px_32px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-colors hover:border-[#D4AF37]/20"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#0A1128]/15 bg-zinc-900/80">
                  <RequirementIcon type={item.icon} />
                </span>
                <span className="text-[18px] font-medium text-[#0A1128]">{item.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto w-full max-w-md rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/15 via-amber-500/5 to-transparent p-[1px] shadow-[0_32px_64px_-28px_rgba(0,0,0,0.75)]"
        >
          <div className="rounded-2xl border border-[#0A1128]/15 bg-[#FAF6EE]/95 p-6 backdrop-blur-xl">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="h-12 w-full rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 px-3 text-[14px] text-[#0A1128] placeholder:text-[#1E293B] outline-none transition focus:border-[#D4AF37]/40 focus:ring-2 focus:ring-amber-400/20"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Mobile No."
                className="h-12 w-full rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 px-3 text-[14px] text-[#0A1128] placeholder:text-[#1E293B] outline-none transition focus:border-[#D4AF37]/40 focus:ring-2 focus:ring-amber-400/20"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="h-12 w-full rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 px-3 text-[14px] text-[#0A1128] placeholder:text-[#1E293B] outline-none transition focus:border-[#D4AF37]/40 focus:ring-2 focus:ring-amber-400/20"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="PAN Number"
                className="h-12 w-full rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 px-3 text-[14px] text-[#0A1128] placeholder:text-[#1E293B] outline-none transition focus:border-[#D4AF37]/40 focus:ring-2 focus:ring-amber-400/20"
              />
              <input
                type="text"
                placeholder="Pincode"
                className="h-12 w-full rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 px-3 text-[14px] text-[#0A1128] placeholder:text-[#1E293B] outline-none transition focus:border-[#D4AF37]/40 focus:ring-2 focus:ring-amber-400/20"
              />
            </div>
          </div>

          <label className="mt-4 flex items-center gap-2.5 text-[12px] text-[#1E293B]">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-amber-400" />
            <span>I agree to receive promotional message from WhatsApp/RCS/SMS.</span>
          </label>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02, boxShadow: "0 18px 40px -8px rgba(212,175,55,0.35)" }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#B8972E] px-4 text-sm font-semibold text-zinc-950 shadow-lg transition-all duration-300"
          >
            Submit &amp; View Offers <span className="ml-1" aria-hidden>→</span>
          </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
