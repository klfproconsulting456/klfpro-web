"use client";

const FEATURES = [
  {
    title: "Easy, Hassle-Free Documentation",
    desc: "Apply online with minimal paperwork. Keep your ID, income, and address proof ready, and you’re set.",
    icon: "📝"
  },
  {
    title: "Total Freedom on How You Use It",
    desc: "Use your loan for home renovation, medical needs, travel, or anything else—no usage restrictions.",
    icon: "✨"
  },
  {
    title: "Repay at Your Own Pace",
    desc: "Choose flexible tenure options from 12 to 60 months so your EMIs fit comfortably in your budget.",
    icon: "📅"
  },
  {
    title: "Lightning-Fast Disbursal",
    desc: "Get funds in your account within hours of approval, so you never have to wait for urgent needs.",
    icon: "⚡"
  },
  {
    title: "Collateral-Free",
    desc: "No need to pledge assets or security. Your approval is based on your credit and financial profile.",
    icon: "🛡️",
    featured: true
  },
  {
    title: "Loan Amounts Tailored to You",
    desc: "Eligibility is based on income, profession, and credit profile, with loan amounts from ₹10,000 to ₹40 Lakhs.",
    icon: "🎯"
  }
];

export function KeyBenefitsSection({ loanType = "Personal Loan" }: { loanType?: string }) {
  return (
    <section className="relative overflow-hidden border-t border-[#0A1128]/15 bg-[#FAF6EE] px-4 sm:px-6 py-10 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_10%,rgba(212,175,55,0.08),transparent_52%)]" />
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0A1128]">
          Key Benefits and Features of{" "}
          <span className="klf-gold-shimmer-text">{loanType}</span>
        </h2>
        <p className="mt-2 text-[13px] text-[#1E293B] md:text-[15px]">
          Check all the perks of availing a {loanType} at a glance.
        </p>

        <div className="mt-8 md:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className={[
                "rounded-xl p-4 sm:p-5 shadow-sm transition-shadow hover:shadow-md",
                feature.featured
                  ? "border border-amber-300/20 bg-gradient-to-b from-amber-300/10 to-white/[0.03] md:scale-[1.02]"
                  : "border border-[#0A1128]/15 bg-[#0A1128]/5"
              ].join(" ")}
            >
              <div className="text-[18px] sm:text-xl text-[#B8972E]/90">{feature.icon}</div>
              <h3 className="mt-2 sm:mt-3 text-[15px] sm:text-lg font-semibold text-[#0A1128]">{feature.title}</h3>
              <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-sm leading-relaxed text-[#1E293B]">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

