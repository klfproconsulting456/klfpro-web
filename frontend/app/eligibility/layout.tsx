import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Loan Eligibility | KLFPRO Consulting",
  description: "Check your eligibility for home loans, personal loans, and business loans instantly with KLFPRO Consulting.",
};

export default function EligibilityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
