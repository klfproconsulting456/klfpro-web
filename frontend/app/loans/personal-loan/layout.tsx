import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Loan in Gurgaon — Apply Online | KLFPRO Consulting",
  description: "Apply for Personal Loan in Gurgaon with KLFPRO Consulting. Get up to ₹40 Lakhs with competitive interest rates starting 10.25% p.a., fast approval & minimal documentation. Best Personal Loan agency in Gurugram.",
  alternates: { canonical: "https://klfpro.in/loans/personal-loan" },
  openGraph: {
    title: "Personal Loan in Gurgaon — Apply Online | KLFPRO Consulting",
    description: "Get Personal Loan up to ₹40 Lakhs in Gurgaon. Fast approval, competitive rates, minimal documentation.",
    url: "https://klfpro.in/loans/personal-loan",
    siteName: "KLFPRO Consulting",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Personal Loan in Gurgaon | KLFPRO", description: "Apply for Personal Loan up to ₹40 Lakhs. Fast approval & low interest rates." }
};

export default function PersonalLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
