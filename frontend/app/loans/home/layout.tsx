import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan | KLFPRO Consulting",
  description: "Apply for a Home Loan with KLFPRO Consulting. Get loan amounts up to 5 Crore with attractive terms and transparent repayment support.",
  openGraph: {
    title: "Home Loan | KLFPRO Consulting",
    description: "Apply for a Home Loan with KLFPRO Consulting. Fast approvals and attractive terms.",
    type: "website"
  }
};

export default function HomeLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
