import { Metadata } from "next";

const defaultDomain = "https://www.klfpro.in";

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
    name: "KLFPRO Consulting",
    url: defaultDomain,
    logo: `${defaultDomain}/logo.png`,
    sameAs: [
      "https://www.facebook.com/klfpro",
      "https://www.linkedin.com/company/klfpro"
    ]
  };
}

export function generateLocalBusinessSchema(city: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `KLFPRO Consulting ${city}`,
    image: `${defaultDomain}/og-image.jpg`,
    "@id": `${defaultDomain}/locations/${city.toLowerCase()}`,
    url: `${defaultDomain}/locations/${city.toLowerCase()}`,
    telephone: "+919876543210",
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressCountry: "IN"
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
