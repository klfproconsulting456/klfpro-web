"use client";

import Link from "next/link";
import { useState } from "react";

const LOAN_TYPES = ["Personal Loan", "Home Loan", "Business Loan", "Loan Against Property"] as const;
const CITIES = ["Mumbai", "Delhi NCR", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad"] as const;

export function KlfproHomeHero() {
  const [loanType, setLoanType] = useState<string>(LOAN_TYPES[0]);
  const [city, setCity] = useState<string>(CITIES[0]);
  const [mobile, setMobile] = useState("");

  return (
    <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#f9fafb] to-white pt-6 md:pt-8">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12 md:py-20">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-[#0A1128] md:text-5xl">
            Get the Best{" "}
            <span className="text-green-500">Personal Loan</span> Deals
          </h1>
          <p className="mt-4 max-w-xl text-base text-[#1E293B] md:text-lg">
            KLFPRO Consulting compares offers from trusted banks and NBFCs so you can choose lower rates, flexible tenure,
            and fast disbursal—without the hassle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/eligibility"
              className="inline-flex rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-[#0A1128] shadow-sm transition hover:bg-green-600"
            >
              Apply Now
            </Link>
            <a
              href="#emi-calculator"
              className="inline-flex rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-[#0A1128] transition hover:bg-slate-50"
            >
              Calculate EMI
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-[#0A1128]">Check eligibility in minutes</h2>
          <p className="mt-1 text-sm text-[#1E293B]">Tell us what you need—we&apos;ll connect you with the right lenders.</p>
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const productSlug = loanType.toLowerCase().replace(/ /g, "-");
              window.location.href = `/eligibility?product=${encodeURIComponent(productSlug)}&phone=${encodeURIComponent(mobile)}`;
            }}
          >
            <div>
              <label className="text-xs font-medium text-[#1E293B]">Loan type</label>
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#0A1128] outline-none ring-green-500/10 transition focus:border-green-500 focus:ring-2"
              >
                {LOAN_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-[#1E293B]">City</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#0A1128] outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-[#1E293B]">Mobile number</label>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="+91 10-digit mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#0A1128] outline-none placeholder:text-[#1E293B] focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-green-500 py-3 text-sm font-semibold text-[#0A1128] transition hover:bg-green-600"
            >
              Submit &amp; view offers
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
