import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Vehicle Loan in Gurgaon | KLFPRO Consulting",
  description: "Apply for a Commercial Vehicle Loan in Gurgaon with KLFPRO Consulting. Get fast approval and low interest rates for trucks, buses, and light commercial vehicles.",
  alternates: { canonical: "https://klfpro.in/loans/commercial-vehicle" },
  openGraph: {
    title: "Commercial Vehicle Loan in Gurgaon | KLFPRO Consulting",
    description: "Apply for a Commercial Vehicle Loan in Gurgaon. Get fast approval for trucks, buses, and light commercial vehicles.",
    url: "https://klfpro.in/loans/commercial-vehicle",
    siteName: "KLFPRO Consulting",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Commercial Vehicle Loan in Gurgaon | KLFPRO", description: "Fast approvals for commercial vehicles in Gurugram." }
};

export default function CommercialVehicleLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
