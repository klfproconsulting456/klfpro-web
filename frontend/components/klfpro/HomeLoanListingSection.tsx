"use client";

import Link from "next/link";
import { useState } from "react";

export type HomeLoanLender = {
  bank: string;
  shortCode: string;
  salariedRoi: string;
  selfEmployedRoi: string;
  cibil: string;
  category: "PSU Bank" | "Private Bank" | "NBFC / HFC";
};

export const HOME_LOAN_BANKS: HomeLoanLender[] = [
  { bank: "Bank of Maharashtra", shortCode: "BOM", salariedRoi: "7.25%", selfEmployedRoi: "7.25%", cibil: "800", category: "PSU Bank" },
  { bank: "Central Bank of India", shortCode: "CBI", salariedRoi: "7.25%", selfEmployedRoi: "7.25%", cibil: "800", category: "PSU Bank" },
  { bank: "UCO Bank", shortCode: "UCO", salariedRoi: "7.25%", selfEmployedRoi: "7.25%", cibil: "850", category: "PSU Bank" },
  { bank: "Bajaj Housing Finance", shortCode: "BAJAJ", salariedRoi: "7.35%", selfEmployedRoi: "7.70%", cibil: "800", category: "NBFC / HFC" },
  { bank: "State Bank of India", shortCode: "SBI", salariedRoi: "7.40%", selfEmployedRoi: "7.40%", cibil: "800", category: "PSU Bank" },
  { bank: "HDFC Bank", shortCode: "HDFC", salariedRoi: "7.40%", selfEmployedRoi: "7.40%", cibil: "800", category: "Private Bank" },
  { bank: "Canara Bank", shortCode: "CANARA", salariedRoi: "7.40%", selfEmployedRoi: "7.40%", cibil: "800", category: "PSU Bank" },
  { bank: "Punjab National Bank", shortCode: "PNB", salariedRoi: "7.45%", selfEmployedRoi: "7.45%", cibil: "800", category: "PSU Bank" },
  { bank: "ICICI Bank", shortCode: "ICICI", salariedRoi: "7.60%", selfEmployedRoi: "7.60%", cibil: "800", category: "Private Bank" },
  { bank: "Muthoot Finance", shortCode: "MF", salariedRoi: "7.80%", selfEmployedRoi: "7.80%", cibil: "800", category: "NBFC / HFC" },
  { bank: "Axis Bank", shortCode: "AXIS", salariedRoi: "8.75%", selfEmployedRoi: "8.75%", cibil: "—", category: "Private Bank" },
  { bank: "Kotak Mahindra Prime", shortCode: "KMPL", salariedRoi: "8.75%", selfEmployedRoi: "8.75%", cibil: "800", category: "Private Bank" },
];

export function HomeLoanListingSection() {
  const [selectedProfile, setSelectedProfile] = useState<"all" | "salaried" | "self">("all");

  return (
    <section className="border-b border-[#0A1128]/10 bg-white py-16 md:py-20" id="home-loan-rates">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#FAF6EE] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#B8972E]">
            Verified Partner Bank Rates
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0A1128] md:text-4xl">
            Compare Top <span className="text-[#B8972E]">Home Loan</span> Interest Rates
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1E293B] md:text-base">
            Check live indicative interest rates for salaried &amp; self-employed profiles with CIBIL score requirements.
          </p>

          {/* Profile Filter Switch */}
          <div className="mt-6 inline-flex rounded-xl bg-[#FAF6EE] p-1.5 border border-[#0A1128]/10 shadow-inner">
            <button
              type="button"
              onClick={() => setSelectedProfile("all")}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                selectedProfile === "all"
                  ? "bg-[#0A1128] text-white shadow-sm"
                  : "text-[#0A1128] hover:text-[#B8972E]"
              }`}
            >
              All Rates
            </button>
            <button
              type="button"
              onClick={() => setSelectedProfile("salaried")}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                selectedProfile === "salaried"
                  ? "bg-[#0A1128] text-white shadow-sm"
                  : "text-[#0A1128] hover:text-[#B8972E]"
              }`}
            >
              Salaried (From 7.25%)
            </button>
            <button
              type="button"
              onClick={() => setSelectedProfile("self")}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                selectedProfile === "self"
                  ? "bg-[#0A1128] text-white shadow-sm"
                  : "text-[#0A1128] hover:text-[#B8972E]"
              }`}
            >
              Self-Employed (From 7.25%)
            </button>
          </div>
        </div>

        {/* Desktop / Tablet Table View */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#FAF6EE] border-b border-[#0A1128]/10 text-xs font-bold uppercase tracking-wider text-[#0A1128]">
                <tr>
                  <th className="px-6 py-4">Lender / Bank</th>
                  <th className="px-6 py-4">Bank Type</th>
                  {(selectedProfile === "all" || selectedProfile === "salaried") && (
                    <th className="px-6 py-4">Salaried ROI</th>
                  )}
                  {(selectedProfile === "all" || selectedProfile === "self") && (
                    <th className="px-6 py-4">Self-Employed ROI</th>
                  )}
                  <th className="px-6 py-4">Min CIBIL</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0A1128]/5 text-[#1E293B]">
                {HOME_LOAN_BANKS.map((b) => (
                  <tr key={b.shortCode} className="transition-colors hover:bg-[#FAF6EE]/50">
                    <td className="px-6 py-4 font-semibold text-[#0A1128]">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0A1128] text-[10px] font-bold text-white uppercase">
                          {b.shortCode.slice(0, 3)}
                        </span>
                        <div>
                          <div>{b.bank}</div>
                          <span className="text-[11px] font-normal text-gray-500">Code: {b.shortCode}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700">
                        {b.category}
                      </span>
                    </td>
                    {(selectedProfile === "all" || selectedProfile === "salaried") && (
                      <td className="px-6 py-4">
                        <span className="font-bold text-emerald-600 text-base">{b.salariedRoi}</span>
                      </td>
                    )}
                    {(selectedProfile === "all" || selectedProfile === "self") && (
                      <td className="px-6 py-4">
                        <span className="font-bold text-blue-600 text-base">{b.selfEmployedRoi}</span>
                      </td>
                    )}
                    <td className="px-6 py-4">
                      <span className="font-medium text-slate-800">
                        {b.cibil !== "—" ? `${b.cibil}+` : "Standard"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/eligibility?product=home-loan&bank=${b.shortCode.toLowerCase()}`}
                        className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B8972E] px-4 py-1.5 text-xs font-semibold text-zinc-950 shadow-sm transition hover:scale-105"
                      >
                        Apply Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500">
          *Indicative interest rates based on latest lender charts. Final rate depends on borrower profile, loan amount, and lender policy.
        </p>
      </div>
    </section>
  );
}
