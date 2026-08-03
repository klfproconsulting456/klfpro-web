import { Metadata } from "next";
import { siteConfig } from "@/content/site-data";

const defaultDomain = "https://klfpro.in";

export function generateSeoMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg"
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${defaultDomain}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "KLFPRO Consulting",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    legalName: siteConfig.legalName,
    url: defaultDomain,
    logo: `${defaultDomain}/logo.png`,
    foundingDate: String(siteConfig.foundingYear),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneSecondary,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"]
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressStreet,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry
    },
    sameAs: [
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.linkedin,
      siteConfig.socialLinks.instagram
    ]
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: defaultDomain,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${defaultDomain}/eligibility?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateLocalBusinessSchema(city?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: city ? `KLFPRO Consulting ${city}` : siteConfig.brandName,
    image: `${defaultDomain}/og-image.jpg`,
    "@id": `${defaultDomain}/#localbusiness`,
    url: defaultDomain,
    telephone: siteConfig.phoneSecondary,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressStreet,
      addressLocality: city || siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00"
      }
    ],
    areaServed: [
      { "@type": "City", name: "Gurugram" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Faridabad" },
      { "@type": "City", name: "Ghaziabad" }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Financial Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal Loan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Loan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Loan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loan Against Property" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Loan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Education Loan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "MSME Loan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Credit Card" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Balance Transfer" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "CIBIL Services" } }
      ]
    }
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: `${defaultDomain}${breadcrumb.item}`
    }))
  };
}

export function generateFinancialProductSchema({
  name,
  description,
  interestRate,
  url,
}: {
  name: string;
  description: string;
  interestRate: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name,
    description,
    url: `${defaultDomain}${url}`,
    provider: generateOrganizationSchema(),
    interestRate: {
      "@type": "QuantitativeValue",
      value: interestRate,
      unitText: "%",
    },
    feesAndCommissionsSpecification: "No hidden charges",
  };
}
