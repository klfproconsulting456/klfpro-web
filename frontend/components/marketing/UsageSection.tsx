"use client";

import { motion } from "framer-motion";

const usageCards = [
  {
    title: "Medical Emergencies",
    text: "Cover sudden medical expenses not fully supported by insurance.",
    icon: "medical"
  },
  {
    title: "Home Renovation",
    text: "Upgrade or repair your home with ease, from interiors to full remodeling.",
    icon: "home"
  },
  {
    title: "Wedding Expenses",
    text: "Manage wedding costs like venue, jewellery, and arrangements stress-free.",
    icon: "wedding"
  },
  {
    title: "Travel and Vacation",
    text: "Plan your dream trip without worrying about upfront costs.",
    icon: "travel"
  }
] as const;

function UsageIcon({ type }: { type: (typeof usageCards)[number]["icon"] }) {
  if (type === "medical") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#B8972E]/90" aria-hidden>
        <path d="M4 3h16a1 1 0 0 1 1 1v16h-6v-3H9v3H3V4a1 1 0 0 1 1-1Zm6 5v2H8v2h2v2h2v-2h2v-2h-2V8h-2Z" fill="currentColor" />
      </svg>
    );
  }
  if (type === "home") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#B8972E]/90" aria-hidden>
        <path d="M12 3 3 10h2v10h5v-6h4v6h5V10h2L12 3Z" fill="currentColor" />
      </svg>
    );
  }
  if (type === "wedding") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#B8972E]/90" aria-hidden>
        <path d="M12 4a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V20h-4v-8.5A4 4 0 0 1 8 8a4 4 0 0 1 4-4Zm-6 9h3v2H6v5H4v-5H1v-2h3V8h2v5Zm14 0h3v2h-3v5h-2v-5h-3v-2h3V8h2v5Z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#B8972E]/90" aria-hidden>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm7.5 9h-3.2a14 14 0 0 0-1.1-5A8 8 0 0 1 19.5 11ZM12 4.1A12 12 0 0 1 14.3 11H9.7A12 12 0 0 1 12 4.1ZM4.5 13h3.2a14 14 0 0 0 1.1 5 8 8 0 0 1-4.3-5Zm0-2a8 8 0 0 1 4.3-5 14 14 0 0 0-1.1 5H4.5Zm7.5 8.9A12 12 0 0 1 9.7 13h4.6A12 12 0 0 1 12 19.9Zm3.2-1.9a14 14 0 0 0 1.1-5h3.2a8 8 0 0 1-4.3 5Z" fill="currentColor" />
    </svg>
  );
}

export function UsageSection({ loanType = "Personal Loan" }: { loanType?: string }) {
  const isHomeLoan = loanType.toLowerCase().includes("home");
  const cards = isHomeLoan
    ? [
        { title: "Purchase New Home", text: "Fund apartment, independent house, or villa purchases with structured EMIs.", icon: "home" as const },
        { title: "Home Construction", text: "Build your dream home on owned land with stage-wise disbursal support.", icon: "medical" as const },
        { title: "Balance Transfer", text: "Transfer existing home loan to reduce interest burden and optimize tenure.", icon: "travel" as const },
        { title: "Renovation & Extension", text: "Upgrade interiors, expand rooms, or modernize your property comfortably.", icon: "wedding" as const }
      ]
    : usageCards;

  return (
    <section className="relative overflow-hidden border-t border-[#0A1128]/15 bg-[#FAF6EE] px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_10%_80%,rgba(153,27,51,0.06),transparent_45%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-4xl font-semibold leading-tight text-[#0A1128] md:text-[36px]">
            How to Use Your
            <br />
            <span className="klf-gold-shimmer-text">{loanType}</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#1E293B]">
            Are you facing unexpected expenses? KLFPRO Consulting helps you manage urgent financial needs with
            competitive offers. From essential purchases to major life goals, get funds quickly and easily.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {cards.map((card) => (
            <motion.article
              key={card.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ y: -6, boxShadow: "0 20px 48px -16px rgba(212,175,55,0.1)" }}
              className="rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-5 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.55)] backdrop-blur-md transition-colors duration-300 hover:border-[#D4AF37]/20"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5">
                <UsageIcon type={card.icon} />
              </div>
              <h3 className="mb-2 text-lg font-semibold leading-snug text-[#0A1128]">{card.title}</h3>
              <p className="text-sm leading-relaxed text-[#1E293B] line-clamp-3">{card.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
