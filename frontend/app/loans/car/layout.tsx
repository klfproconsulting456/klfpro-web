import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Loan in Gurgaon — Low EMI Options | KLFPRO Consulting",
  description: "Apply for Car Loan in Gurgaon with KLFPRO Consulting. Drive your dream car with low EMI options & interest rates from 9% p.a. New & used car loans in Gurugram.",
  alternates: { canonical: "https://klfpro.in/loans/car" },
  openGraph: {
    title: "Car Loan in Gurgaon — Low EMI Options | KLFPRO Consulting",
    description: "Car Loan with low EMI in Gurgaon. Rates from 9% p.a. for new & used cars.",
    url: "https://klfpro.in/loans/car",
    siteName: "KLFPRO Consulting",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Car Loan in Gurgaon | KLFPRO", description: "Car Loan with low EMI. Interest rates from 9% p.a." }
};

export default function CarLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
