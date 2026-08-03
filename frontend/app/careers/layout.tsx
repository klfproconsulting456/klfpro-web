import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at KLFPRO Consulting — Join Our Team in Gurgaon",
  description: "Explore career opportunities at KLFPRO Consulting in Gurugram. Join India's growing financial services company. Openings in sales, operations, and consulting.",
  alternates: { canonical: "https://klfpro.in/careers" },
  openGraph: {
    title: "Careers at KLFPRO Consulting | Gurgaon",
    description: "Join KLFPRO Consulting in Gurugram. Career opportunities in financial services.",
    url: "https://klfpro.in/careers",
    siteName: "KLFPRO Consulting",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Careers | KLFPRO Consulting", description: "Join our team in Gurugram." }
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
