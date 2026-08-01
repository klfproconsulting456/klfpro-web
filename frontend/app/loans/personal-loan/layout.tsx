import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Loan | KLFPRO Consulting",
  description: "Apply for a Personal Loan with KLFPRO Consulting. Get loan amounts up to 40 Lakhs with flexible repayment options and fast disbursal.",
  openGraph: {
    title: "Personal Loan | KLFPRO Consulting",
    description: "Apply for a Personal Loan with KLFPRO Consulting. Fast approvals and flexible repayment options.",
    type: "website"
  }
};

export default function PersonalLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
