import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppChrome } from "@/components/layout/AppChrome";
import { siteConfig } from "@/content/site-data";
import { CalculatorWrapper } from "@/components/calculators/CalculatorWrapper";
import { generateOrganizationSchema, generateWebSiteSchema, generateLocalBusinessSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: "KLFPRO Consulting — Personal Loan, Home Loan & Business Loan in Gurgaon | Apply Online",
  description:
    "KLFPRO Consulting is Gurgaon's trusted loan agency. Apply for Personal Loan, Home Loan, Business Loan, Loan Against Property, MSME Loan & more. Fast approval, lowest interest rates, expert financial consultants in Gurugram.",
  alternates: { canonical: "https://klfpro.in" },
  openGraph: {
    title: "KLFPRO Consulting — Personal Loan, Home Loan & Business Loan in Gurgaon",
    description: "Gurgaon's trusted loan agency. Apply for Personal, Home, Business Loans & more. Fast approval, lowest rates.",
    url: siteConfig.domain,
    siteName: "KLFPRO Consulting",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "KLFPRO Consulting | Loan Agency in Gurgaon",
    description: "Apply for Personal, Home, Business Loans in Gurgaon. Fast approval & lowest rates."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GT-WBK82X9C" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GT-WBK82X9C');
              gtag('config', 'G-JJY1EXQSY6');
              gtag('config', 'AW-17723359083');
            `
          }}
        />
      </head>
      <body className={`${inter.className} font-sans overflow-x-hidden w-full max-w-[100vw]`}>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
        />
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
        />
        <AppChrome>{children}</AppChrome>
        <CalculatorWrapper />
      </body>
    </html>
  );
}
