"use client";

export function PersonalLoanEligibilitySection({ loanType = "Personal Loan" }: { loanType?: string }) {
  return (
    <section className="relative overflow-hidden border-t border-[#0A1128]/15 bg-[#FAF6EE] px-4 sm:px-6 py-10 sm:py-16 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_50%_0%,rgba(212,175,55,0.08),transparent_55%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0A1128]">
            <span className="klf-gold-shimmer-text">{loanType} Eligibility:</span>
            <br />
            <span className="mt-2 inline-block text-[#0A1128]">Clear, Simple, and Accessible</span>
          </h2>
          <p className="mt-3 sm:mt-4 mx-auto max-w-2xl text-[13px] sm:text-sm text-[#1E293B] md:text-[15px]">
            A {loanType} could be your financial solution if you meet the basic eligibility requirements. Here&apos;s a quick
            breakdown of the key criteria to help you prepare and apply with confidence.
          </p>
        </div>

        <div className="mt-8 md:mt-12 grid items-start gap-6 sm:gap-12 text-left md:grid-cols-2">
          {/* Left: Eligibility table */}
          <div className="space-y-3 sm:space-y-4 rounded-xl sm:rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-4 sm:p-5 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.75)] backdrop-blur-md">
            {[
              { label: "Age limit", desc: "Typically between 21 and 60 years" },
              { label: "Income", desc: "A steady income from employment or business" },
              { label: "Employment Type", desc: "Salaried, self-employed, or pensioners" },
              { label: "Credit Score", desc: "A good credit score (650+)" },
              { label: "Work Experience", desc: "Minimum 1–2 years experience" },
              { label: "Loan Amount", desc: "₹10,000 to ₹50 Lakhs" }
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-start justify-between gap-6 border-b border-[#0A1128]/15 pb-4 last:border-b-0"
              >
                <div className="w-1/3 text-xs font-medium uppercase tracking-wide text-[#1E293B] md:text-[11px]">
                  {row.label}
                </div>
                <div className="w-2/3 text-[13px] font-medium text-[#0A1128] md:text-[14px]">{row.desc}</div>
              </div>
            ))}
          </div>

          {/* Right: Eligibility video */}
          <div className="flex w-full items-center justify-center">
            <div className="relative h-[320px] w-full overflow-hidden rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 text-center text-[#1E293B] shadow-[0_24px_50px_-30px_rgba(0,0,0,0.75)] backdrop-blur-md">
              <video
                className="h-full w-full bg-[#FDFBF7] object-contain object-center"
                src="/assets/videos/loan video.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

