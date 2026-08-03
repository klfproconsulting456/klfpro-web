import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Two Wheeler Loan in Gurgaon | KLFPRO Consulting",
  description: "Get instant approval for a Two Wheeler Loan in Gurgaon. Finance up to 100% of your bike or scooter's on-road price with minimal documentation.",
  alternates: { canonical: "https://klfpro.in/loans/two-wheeler" },
  openGraph: {
    title: "Two Wheeler Loan in Gurgaon | KLFPRO Consulting",
    description: "Finance your bike or scooter with up to 100% on-road funding and low EMIs.",
    url: "https://klfpro.in/loans/two-wheeler",
    siteName: "KLFPRO Consulting",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Two Wheeler Loan in Gurgaon | KLFPRO", description: "Low EMI Bike & Scooter Loans in Gurugram." }
};

export default function TwoWheelerLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
