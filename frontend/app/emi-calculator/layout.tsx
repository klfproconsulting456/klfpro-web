import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMI Calculator | KLFPRO Consulting",
  description: "Calculate your monthly EMI for home loans, personal loans, and business loans easily with KLFPRO Consulting.",
};

export default function EMICalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
