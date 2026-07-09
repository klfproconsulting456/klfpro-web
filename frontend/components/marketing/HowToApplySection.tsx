"use client";

import Image from "next/image";

export function HowToApplySection({ loanType = "Personal Loan" }: { loanType?: string }) {
  const steps = [
    {
      title: "Fill A Quick Online Form",
      desc: "Complete a form with your name, phone number, and city.",
      number: "1"
    },
    {
      title: "Get Verified",
      desc: "Our system processes and verifies your details instantly.",
      number: "2"
    },
    {
      title: "Get Instant Loan Assistance",
      desc: "Receive a call from loan experts within 24 hours.",
      number: "3"
    }
  ] as const;

  return (
    <section className="relative overflow-hidden border-t border-[#0A1128]/15 bg-[#FAF6EE] px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_85%_5%,rgba(212,175,55,0.08),transparent_50%)]" />
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-semibold text-[#0A1128]">
          How to Apply for a <span className="klf-gold-shimmer-text">{loanType}</span>
        </h2>
        <p className="mt-2 text-sm text-[#1E293B] md:text-[15px]">
          Get your loan approvals in 3 instant steps.
        </p>

        <div className="mt-12 grid items-start gap-10 text-left md:grid-cols-2">
          {/* Left: Steps */}
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex items-start gap-4 rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-5 shadow-[0_18px_36px_-24px_rgba(0,0,0,0.7)] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-l-xl before:bg-gradient-to-b before:from-amber-300 before:to-[#B8972E]"
              >
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg border border-[#0A1128]/15 bg-[#FAF6EE] text-sm font-semibold text-[#B8972E] shadow-sm">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0A1128] md:text-[15px]">{step.title}</h3>
                  <p className="mt-1 text-xs text-[#1E293B] md:text-[13px]">{step.desc}</p>
                </div>
                <div className="pointer-events-none absolute right-4 top-4 text-3xl font-bold text-[#0A1128]/10 opacity-70">
                  {step.number}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image / video placeholder */}
          <div className="h-full rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-1 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.75)] backdrop-blur-md">
            <div className="relative h-full min-h-[240px] overflow-hidden rounded-xl md:min-h-[260px]">
              <Image
                src="/images/marketing/home-loan.jpg"
                alt="People discussing loan application"
                fill
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="mt-10 rounded-full bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#B8972E] px-8 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_28px_-10px_rgba(212,175,55,0.55)] transition hover:scale-[1.02]"
        >
          Start Your Application →
        </button>
      </div>
    </section>
  );
}

