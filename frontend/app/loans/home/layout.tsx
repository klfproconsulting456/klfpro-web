import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan in Gurgaon — Lowest Interest Rates | KLFPRO Consulting",
  description: "Apply for Home Loan in Gurgaon with KLFPRO Consulting. Get up to ₹5 Crore at interest rates starting 7.3% p.a. Compare offers from 30+ banks. Best Home Loan consultant in Gurugram.",
  alternates: { canonical: "https://klfpro.in/loans/home" },
  openGraph: {
    title: "Home Loan in Gurgaon — Lowest Interest Rates | KLFPRO Consulting",
    description: "Home Loan up to ₹5 Crore in Gurgaon. Rates from 7.3% p.a. Compare 30+ bank offers.",
    url: "https://klfpro.in/loans/home",
    siteName: "KLFPRO Consulting",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Home Loan in Gurgaon | KLFPRO", description: "Home Loan up to ₹5 Crore. Lowest rates from 7.3% p.a." }
};

export default function HomeLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
