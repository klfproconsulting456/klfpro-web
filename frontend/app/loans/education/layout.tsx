import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Loan in Gurgaon — Study Abroad Funding | KLFPRO Consulting",
  description: "Apply for Education Loan in Gurgaon with KLFPRO Consulting. Fund your studies in India & abroad with loans up to ₹2 Crore. Best Education Loan consultant in Gurugram.",
  alternates: { canonical: "https://klfpro.in/loans/education" },
  openGraph: {
    title: "Education Loan in Gurgaon — Study Abroad Funding | KLFPRO Consulting",
    description: "Education Loan up to ₹2 Crore in Gurgaon. Study in India & abroad with flexible repayment.",
    url: "https://klfpro.in/loans/education",
    siteName: "KLFPRO Consulting",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Education Loan in Gurgaon | KLFPRO", description: "Education Loan up to ₹2 Crore for India & abroad studies." }
};

export default function EducationLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
