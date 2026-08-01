import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Loan | KLFPRO Consulting",
  description: "Drive your dream car with KLFPRO Consulting's affordable Car Loans.",
  openGraph: {
    title: "Car Loan | KLFPRO Consulting",
    description: "Affordable Car Loans from KLFPRO Consulting.",
    type: "website"
  }
};

export default function CarLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
