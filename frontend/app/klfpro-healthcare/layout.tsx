import type { Metadata } from "next";
import { HealthcareNavbar } from "@/components/healthcare/HealthcareNavbar";
import { HealthcareFooter } from "@/components/healthcare/HealthcareFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.klfprohealthcare.com"),
  title: "KLFPRO Healthcare | Premium Revenue Cycle Management & Medical Billing USA",
  description: "End-to-end healthcare solutions, revenue cycle management, medical billing, medical coding, and BPO services in the USA to optimize your financial performance.",
  keywords: ["Revenue Cycle Management", "Medical Billing Services USA", "Healthcare BPO Services USA", "Medical Coding Services USA", "Healthcare IT Consulting", "Outsourced Medical Billing USA", "RCM Services"],
  authors: [{ name: "KLFPRO Healthcare" }],
  alternates: {
    canonical: "https://www.klfprohealthcare.com",
  },
  openGraph: {
    title: "KLFPRO Healthcare | Premium Revenue Cycle & Medical Billing USA",
    description: "End-to-end healthcare solutions, revenue cycle management, medical billing, and BPO services to optimize your financial performance.",
    url: "https://www.klfprohealthcare.com",
    siteName: "KLFPRO Healthcare",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KLFPRO Healthcare | Premium RCM & Medical Billing",
    description: "End-to-end healthcare solutions, revenue cycle management, medical billing, and BPO services in the USA.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "KLFPRO Healthcare",
  "url": "https://klfprohealthcare.com",
  "logo": "https://klfprohealthcare.com/healthcare-logo-full.png",
  "description": "Premium Revenue Cycle Management & Medical Billing Services for healthcare providers in the USA.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9711000680",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "OFFICE NO.1142, TOWER B3, SPAZE ITECH PARK, SECTOR 49",
    "addressLocality": "GURUGRAM",
    "addressRegion": "HARYANA",
    "postalCode": "122018",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/142878527/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BvfFwSIv4T1OUZ9UyUieiMg%3D%3D"
  ]
};

export default function HealthcareLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] font-sans antialiased text-[#0F172A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HealthcareNavbar />
      <main className="flex-1 w-full overflow-x-hidden">{children}</main>
      <HealthcareFooter />
    </div>
  );
}
