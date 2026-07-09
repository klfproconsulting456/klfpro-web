"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { EmiScheduleInputs } from "./EmiPaymentScheduleSection";

function clampNumber(n: number) {
  return Number.isFinite(n) ? n : 0;
}

function formatINR(value: number) {
  const v = Math.round(clampNumber(value));
  return `₹ ${v.toLocaleString("en-IN")}`;
}

function computeEmi({ loanAmount, annualRatePct, tenureMonths }: EmiScheduleInputs) {
  const P = clampNumber(loanAmount);
  const n = Math.max(1, Math.floor(clampNumber(tenureMonths)));
  const r = clampNumber(annualRatePct) / 12 / 100;
  const emi = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayable = emi * n;
  const totalInterest = Math.max(0, totalPayable - P);
  return { emi, totalPayable, totalInterest };
}

function Donut({ principal, interest }: { principal: number; interest: number }) {
  const total = Math.max(1, principal + interest);
  const principalPct = principal / total;
  const r = 44;
  const c = 2 * Math.PI * r;
  const principalDash = c * principalPct;
  const interestDash = c - principalDash;

  return (
    <svg viewBox="0 0 120 120" className="h-[190px] w-[190px]" role="img" aria-label="Payment breakup chart">
      <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="14" />
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke="#22c55e"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={`${principalDash} ${c}`}
        transform="rotate(-90 60 60)"
      />
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke="#4f46e5"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={`${interestDash} ${c}`}
        strokeDashoffset={-principalDash}
        transform="rotate(-90 60 60)"
      />
      <circle cx="60" cy="60" r="22" fill="#1f1f1f" />
    </svg>
  );
}

export function EmiCalculator({
  onChange,
  onViewSchedule
}: {
  onChange?: (inputs: EmiScheduleInputs) => void;
  onViewSchedule?: () => void;
}) {
  const [loanAmount, setLoanAmount] = useState(1553884);
  const [annualRatePct, setAnnualRatePct] = useState(9);
  const [tenureYears, setTenureYears] = useState(5);

  const tenureMonths = tenureYears * 12;
  const inputs: EmiScheduleInputs = { loanAmount, annualRatePct, tenureMonths };

  const computed = useMemo(() => computeEmi(inputs), [loanAmount, annualRatePct, tenureMonths]);

  useMemo(() => {
    onChange?.(inputs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanAmount, annualRatePct, tenureMonths]);

  return (
    <section id="emi-calculator" className="scroll-mt-24 px-6 pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="relative grid overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-white shadow-md md:grid-cols-2">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            animate={{ scale: [1, 1.04, 1], x: [0, -18, 10, 0], y: [0, -8, 6, 0] }}
            transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
          >
            <div
              className="absolute inset-0 opacity-[0.55]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 18% 12%, rgba(34,197,94,0.14), transparent 52%), radial-gradient(circle at 88% 18%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(circle at 18% 88%, rgba(79,70,229,0.10), transparent 58%)"
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.30]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(120deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 10px)"
              }}
            />
          </motion.div>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.22]"
            animate={{ x: ["-14%", "14%"] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            style={{
              background:
                "linear-gradient(105deg, transparent 26%, rgba(34,197,94,0.12) 49%, rgba(34,197,94,0.16) 53%, transparent 76%)"
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,0,0,0.55), transparent 60%), radial-gradient(ellipse 85% 60% at 50% 110%, rgba(0,0,0,0.55), transparent 62%)"
            }}
          />
          {/* Left */}
          <div className="relative overflow-hidden px-6 py-10 md:px-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 10% 10%, rgba(34,197,94,0.14), transparent 55%), radial-gradient(circle at 0% 80%, rgba(255,255,255,0.06), transparent 55%)"
              }}
            />
            <div className="relative">
              <h1 className="text-[34px] font-semibold leading-tight text-[#0A1128] md:text-[44px]">
                Smart{" "}
                <span className="rounded-md bg-green-500 px-2 py-0.5 text-[#0A1128]">EMI Calculator</span>{" "}
                for Personal Loan
              </h1>

              <div className="mt-10 space-y-10">
                {/* Loan Amount */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-[14px] font-semibold text-[#0A1128]/85">Loan Amount</div>
                    <div className="rounded-lg bg-[#0A1128]/5 px-3 py-1 text-[12px] font-semibold text-[#0A1128]/80">
                      {formatINR(loanAmount)}
                    </div>
                  </div>
                  <input
                    type="range"
                    min={50000}
                    max={5000000}
                    step={1000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-green-500"
                    aria-label="Loan amount"
                  />
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-[14px] font-semibold text-[#0A1128]/85">Interest Rate</div>
                    <div className="flex items-center gap-2 rounded-lg bg-[#0A1128]/5 px-3 py-1 text-[12px] font-semibold text-[#0A1128]/80">
                      <span>{annualRatePct.toFixed(1)}</span>
                      <span className="text-[#0A1128]/60">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={6}
                    max={36}
                    step={0.1}
                    value={annualRatePct}
                    onChange={(e) => setAnnualRatePct(Number(e.target.value))}
                    className="w-full accent-green-500"
                    aria-label="Interest rate"
                  />
                </div>

                {/* Loan Term */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-[14px] font-semibold text-[#0A1128]/85">Loan Term</div>
                    <div className="rounded-lg bg-[#0A1128]/5 px-3 py-1 text-[12px] font-semibold text-[#0A1128]/80">
                      {tenureYears} Yr
                    </div>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={7}
                    step={1}
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full accent-green-500"
                    aria-label="Loan term in years"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="border-t border-[#0A1128]/15 bg-[#242424] px-6 py-10 md:border-l md:border-t-0 md:px-10">
            <div className="text-center">
              <div className="text-[14px] font-semibold text-[#0A1128]/80">Break-up of Total Payment</div>
              <div className="mt-6 flex justify-center">
                <Donut principal={loanAmount} interest={computed.totalInterest} />
              </div>

              <div className="mt-5 text-[28px] font-semibold text-[#0A1128]">
                {formatINR(computed.emi)}{" "}
                <span className="text-[13px] font-medium text-[#0A1128]/70">Per Month EMI for {tenureYears} Years</span>
              </div>

              <div className="mx-auto mt-4 max-w-[420px] rounded-full bg-[#0A1128]/5 px-4 py-2 text-[12px] font-semibold text-[#0A1128]/80">
                {formatINR(computed.emi).replace("₹ ", "").trim()}
              </div>

              <div className="mt-6 space-y-4 border-t border-[#0A1128]/15 pt-6 text-left">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" aria-hidden />
                  <div className="flex-1">
                    <div className="text-[12px] font-semibold text-[#0A1128]/80">Principal Amount (Total Amount for loan)</div>
                    <div className="mt-1 text-[16px] font-semibold text-[#0A1128]">{formatINR(loanAmount)}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4f46e5]" aria-hidden />
                  <div className="flex-1">
                    <div className="text-[12px] font-semibold text-[#0A1128]/80">
                      Interest Payable (Total Interest throughout the loan duration)
                    </div>
                    <div className="mt-1 text-[16px] font-semibold text-[#0A1128]">{formatINR(computed.totalInterest)}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-[#0A1128]/15 pt-4">
                  <div>
                    <div className="text-[12px] font-semibold text-[#0A1128]/70">Total Amount payable</div>
                    <div className="mt-1 text-[18px] font-semibold text-[#0A1128]">{formatINR(computed.totalPayable)}</div>
                  </div>
                  <button
                    type="button"
                    onClick={onViewSchedule}
                    className="text-[12px] font-semibold text-[#0A1128] underline transition hover:text-green-600"
                  >
                    View EMI Schedule
                  </button>
                </div>
                <div className="mt-4 pt-4 border-t border-[#0A1128]/15">
                  <button
                    type="button"
                    onClick={() => {
                      window.location.href = `/eligibility?product=personal-loan`;
                    }}
                    className="w-full rounded-full bg-green-500 px-6 py-3 text-[14px] font-bold text-[#0A1128] transition hover:bg-green-600 shadow-sm text-center"
                  >
                    Apply for this Loan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

