"use client";

import { useState } from "react";
import { EmiCalculator } from "@/components/emi/EmiCalculator";
import type { EmiScheduleInputs } from "@/components/emi/EmiPaymentScheduleSection";
import { EmiPaymentScheduleSection } from "@/components/emi/EmiPaymentScheduleSection";

export default function EmiCalculatorPage() {
  const [inputs, setInputs] = useState<EmiScheduleInputs>({
    loanAmount: 1553884,
    annualRatePct: 9,
    tenureMonths: 60
  });
  const [autoOpenSignal, setAutoOpenSignal] = useState(0);

  return (
    <main className="min-h-screen bg-[#FAF6EE] pb-10">
      <EmiCalculator
        onChange={setInputs}
        onViewSchedule={() => {
          const el = document.getElementById("emi-payment-schedule");
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
          setAutoOpenSignal((v) => v + 1);
        }}
      />
      <EmiPaymentScheduleSection {...inputs} autoOpenSignal={autoOpenSignal} />
    </main>
  );
}
