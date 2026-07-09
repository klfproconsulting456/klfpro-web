"use client";

import Link from "next/link";

const LENDERS = [
  { name: "State Bank of India", rate: "10.90% – 12.50% p.a.", tenure: "Up to 6 years" },
  { name: "HDFC Bank", rate: "10.75% – 14.25% p.a.", tenure: "Up to 5 years" },
  { name: "ICICI Bank", rate: "10.99% – 16.00% p.a.", tenure: "Up to 6 years" },
  { name: "Axis Bank", rate: "11.00% – 17.00% p.a.", tenure: "Up to 5 years" }
] as const;

export function HomeLoanListingSection() {
  return (
    <section className="border-b border-slate-200/80 bg-white py-16 md:py-20" id="loan-offers">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0A1128] md:text-4xl">
            Top <span className="text-green-500">Personal Loan</span> offers
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1E293B] md:text-base">
            Indicative rates and tenure—final offer depends on your profile and lender policy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LENDERS.map((l) => (
            <article
              key={l.name}
              className="flex flex-col rounded-xl border border-slate-200 bg-[#f9fafb] p-5 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-[#0A1128]">{l.name}</h3>
              <div className="mt-4 space-y-1 text-sm">
                <p className="text-[#1E293B]">Interest rate</p>
                <p className="font-medium text-[#0A1128]">{l.rate}</p>
              </div>
              <div className="mt-3 space-y-1 text-sm">
                <p className="text-[#1E293B]">Tenure</p>
                <p className="font-medium text-[#0A1128]">{l.tenure}</p>
              </div>
              <Link
                href="/loans/personal-loan"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-green-500 py-2.5 text-sm font-semibold text-[#0A1128] transition hover:bg-green-600"
              >
                Enquire Now
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
