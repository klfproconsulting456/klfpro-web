"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export type EmiScheduleInputs = {
  loanAmount: number; // principal
  annualRatePct: number; // e.g. 9
  tenureMonths: number; // e.g. 60
};

type MonthlyRow = {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
};

type YearlyRow = {
  yearIndex: number;
  months: MonthlyRow[];
};

function clampNumber(n: number) {
  return Number.isFinite(n) ? n : 0;
}

function formatINR(value: number) {
  const v = Math.round(clampNumber(value));
  return `₹${v.toLocaleString("en-IN")}`;
}

function buildSchedule({ loanAmount, annualRatePct, tenureMonths }: EmiScheduleInputs) {
  const P = clampNumber(loanAmount);
  const n = Math.max(0, Math.floor(clampNumber(tenureMonths)));
  const r = clampNumber(annualRatePct) / 12 / 100;

  if (P <= 0 || n <= 0) return { emi: 0, monthlyRows: [] as MonthlyRow[], yearlyRows: [] as YearlyRow[] };

  const emi = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  const monthlyRows: MonthlyRow[] = [];
  let balance = P;

  for (let month = 1; month <= n; month++) {
    const interest = balance * r;
    const principal = emi - interest;
    balance = Math.max(0, balance - principal);

    monthlyRows.push({
      month,
      emi,
      principal: Math.max(0, principal),
      interest: Math.max(0, interest),
      balance
    });
  }

  const yearlyRows: YearlyRow[] = [];
  const years = Math.ceil(n / 12);
  for (let yearIndex = 0; yearIndex < years; yearIndex++) {
    const start = yearIndex * 12;
    const slice = monthlyRows.slice(start, start + 12);
    if (!slice.length) continue;

    yearlyRows.push({
      yearIndex,
      months: slice
    });
  }

  return { emi, monthlyRows, yearlyRows };
}

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function EmiPaymentScheduleSection(props: EmiScheduleInputs & { autoOpenSignal?: number }) {
  const { autoOpenSignal = 0, ...inputs } = props;
  const [openMain, setOpenMain] = useState(false);
  const [openYearIndex, setOpenYearIndex] = useState<number | null>(null);

  const { yearlyRows } = useMemo(
    () => buildSchedule(inputs),
    [inputs.loanAmount, inputs.annualRatePct, inputs.tenureMonths]
  );

  useEffect(() => {
    if (!yearlyRows.length) return;
    setOpenMain(true);
    setOpenYearIndex(0);
  }, [autoOpenSignal, yearlyRows.length]);

  return (
    <section
      id="emi-payment-schedule"
      className="border-t border-[#0A1128]/15 bg-[#FAF6EE] px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-[#0A1128]">EMI Payment Schedule</h2>
          <a
            href="/eligibility"
            className="rounded-xl bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-yellow-500"
          >
            Apply for this Loan
          </a>
        </div>

        <div className="rounded-2xl bg-[#0A1128]/5 ring-1 ring-[#0A1128]/5">
          <button
            type="button"
            onClick={() => setOpenMain((v) => !v)}
            className="flex w-full items-center justify-between rounded-2xl bg-white px-6 py-4 text-left text-[14px] font-semibold text-[#0A1128]/90 shadow-sm transition hover:bg-[#FDFBF7]"
          >
            <span>View Monthly and Yearly Payments</span>
            <motion.span
              animate={{ rotate: openMain ? 180 : 0 }}
              transition={{ duration: 0.18 }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FDFBF7]/25 text-[12px] text-[#0A1128]"
              aria-hidden
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openMain ? (
              <motion.div
                key="panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-3 px-6 pb-6 pt-4">
                  {!yearlyRows.length ? (
                    <div className="rounded-xl bg-[#FDFBF7]/20 px-4 py-5 text-[13px] text-[#0A1128]/65">
                      Enter loan details to view the EMI payment schedule.
                    </div>
                  ) : (
                    yearlyRows.map((yearRow) => {
                      const yearNumber = new Date().getFullYear() + yearRow.yearIndex + 1;
                      const isOpen = openYearIndex === yearRow.yearIndex;

                      return (
                        <div key={yearRow.yearIndex} className="overflow-hidden rounded-xl bg-white border border-[#0A1128]/5 shadow-sm">
                          <button
                            type="button"
                            onClick={() => setOpenYearIndex((prev) => (prev === yearRow.yearIndex ? null : yearRow.yearIndex))}
                            className="flex w-full items-center justify-between px-4 py-3 text-left text-[13px] text-[#0A1128]/90"
                          >
                            <div>
                              <div className="text-[15px] font-semibold text-[#0A1128]">{yearNumber}</div>
                              <div className="mt-0.5 text-[11px] text-[#0A1128]/60">Monthly payment</div>
                            </div>
                            <div className="flex items-center gap-2 text-[11px] font-semibold text-[#0A1128]/80">
                              <span>{isOpen ? "Hide Monthly Breakup" : "Show Monthly Breakup"}</span>
                              <motion.span
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.18 }}
                                className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FDFBF7]/30 text-[10px]"
                                aria-hidden
                              >
                                ▾
                              </motion.span>
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen ? (
                              <motion.div
                                key="months"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22, ease: "easeOut" }}
                                className="overflow-hidden border-t border-[#0A1128]/15 bg-[#FDFBF7]"
                              >
                                <div className="overflow-x-auto">
                                  <div className="min-w-[640px]">
                                    <div className="grid grid-cols-[1.2fr,1fr,1fr,1.1fr,1fr] border-b border-[#0A1128]/10 bg-[#0A1128]/5 px-4 py-2 text-[12px] font-semibold text-[#0A1128]/60">
                                      <div>Months</div>
                                      <div className="text-right">Principal</div>
                                      <div className="text-right">Interest</div>
                                      <div className="text-right">Total Payment</div>
                                      <div className="text-right">Balance</div>
                                    </div>
                                    <div className="text-[12px] text-[#0A1128]/80">
                                      {yearRow.months.map((m, idx) => {
                                        const label = MONTH_LABELS[idx % 12] ?? `Month ${m.month}`;
                                        const totalPayment = m.emi;
                                        return (
                                          <div
                                            key={m.month}
                                            className="grid grid-cols-[1.2fr,1fr,1fr,1.1fr,1fr] border-b border-[#0A1128]/5 px-4 py-2.5"
                                          >
                                            <div className="text-[#0A1128]/80">{label}</div>
                                            <div className="text-right tabular-nums">{formatINR(m.principal)}</div>
                                            <div className="text-right tabular-nums">{formatINR(m.interest)}</div>
                                            <div className="text-right tabular-nums">{formatINR(totalPayment)}</div>
                                            <div className="text-right tabular-nums">{formatINR(m.balance)}</div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>
                        </div>
                      );
                    })
                  )}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

