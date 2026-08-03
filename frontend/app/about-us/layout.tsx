import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About KLFPRO Consulting — Leading Loan Agency in Gurgaon",
  description: "KLFPRO Consulting Private Limited is a trusted financial services company in Gurugram, Haryana. Expert loan consultants for Personal, Home, Business & MSME Loans since 2015.",
  alternates: { canonical: "https://klfpro.in/about-us" },
  openGraph: {
    title: "About KLFPRO Consulting — Leading Loan Agency in Gurgaon",
    description: "Trusted financial services company in Gurugram since 2015. Expert loan consultants.",
    url: "https://klfpro.in/about-us",
    siteName: "KLFPRO Consulting",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "About KLFPRO Consulting | Gurgaon", description: "Trusted financial services company in Gurugram since 2015." }
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
