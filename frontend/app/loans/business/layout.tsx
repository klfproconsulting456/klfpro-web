import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Loan | KLFPRO Consulting",
  description: "Grow your business with KLFPRO Consulting's Business Loans. Quick approvals and customized repayment options.",
  openGraph: {
    title: "Business Loan | KLFPRO Consulting",
    description: "Grow your business with KLFPRO Consulting's Business Loans.",
    type: "website"
  }
};

export default function BusinessLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
