import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used Car Loan in Gurgaon | KLFPRO Consulting",
  description: "Apply for a Used Car Loan in Gurgaon with KLFPRO Consulting. Get up to 100% financing on pre-owned cars with low EMIs and instant approval.",
  alternates: { canonical: "https://klfpro.in/loans/used-car" },
  openGraph: {
    title: "Used Car Loan in Gurgaon | KLFPRO Consulting",
    description: "Finance your pre-owned dream car. Up to 100% funding on used cars with low interest rates.",
    url: "https://klfpro.in/loans/used-car",
    siteName: "KLFPRO Consulting",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Used Car Loan in Gurgaon | KLFPRO", description: "Low EMI Used Car Loans in Gurugram." }
};

export default function UsedCarLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
