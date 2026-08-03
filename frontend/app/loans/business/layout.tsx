import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Loan in Gurgaon — Fast Approval | KLFPRO Consulting",
  description: "Apply for Business Loan in Gurgaon with KLFPRO Consulting. Collateral-free business loans up to ₹50 Lakhs with quick approvals. Best Business Loan agency in Gurugram, Haryana.",
  alternates: { canonical: "https://klfpro.in/loans/business" },
  openGraph: {
    title: "Business Loan in Gurgaon — Fast Approval | KLFPRO Consulting",
    description: "Collateral-free Business Loan up to ₹50 Lakhs in Gurgaon. Quick approval & customized repayment.",
    url: "https://klfpro.in/loans/business",
    siteName: "KLFPRO Consulting",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Business Loan in Gurgaon | KLFPRO", description: "Business Loan up to ₹50 Lakhs. Fast approval & flexible repayment." }
};

export default function BusinessLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
