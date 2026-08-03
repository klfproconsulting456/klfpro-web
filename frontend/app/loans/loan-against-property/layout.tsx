import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Against Property in Gurgaon | KLFPRO Consulting",
  description: "Apply for Loan Against Property (LAP) in Gurgaon with KLFPRO Consulting. Unlock up to 70% property value with competitive rates. Best LAP consultant in Gurugram, Haryana.",
  alternates: { canonical: "https://klfpro.in/loans/loan-against-property" },
  openGraph: {
    title: "Loan Against Property in Gurgaon | KLFPRO Consulting",
    description: "Loan Against Property up to 70% value in Gurgaon. Competitive rates & fast processing.",
    url: "https://klfpro.in/loans/loan-against-property",
    siteName: "KLFPRO Consulting",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Loan Against Property Gurgaon | KLFPRO", description: "LAP up to 70% property value. Best rates in Gurugram." }
};

export default function LapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
