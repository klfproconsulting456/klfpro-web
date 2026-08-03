import { notFound } from "next/navigation";
import { generateSeoMetadata, generateFinancialProductSchema, generateFaqSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { programmaticPages, targetCities } from "@/content/locations";
import { siteConfig } from "@/content/site-data";
import Link from "next/link";

export async function generateStaticParams() {
  return programmaticPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = programmaticPages.find(p => p.slug === params.slug);
  if (!data) return {};

  return generateSeoMetadata({
    title: data.title,
    description: data.metaDescription,
    path: `/${params.slug}`,
  });
}

export default function LocationLandingPage({ params }: { params: { slug: string } }) {
  const data = programmaticPages.find(p => p.slug === params.slug);
  if (!data) notFound();

  // Schemas
  const financialSchema = generateFinancialProductSchema({
    name: data.h1,
    description: data.metaDescription,
    interestRate: data.loan.baseRate,
    url: `/${params.slug}`,
  });

  const faqSchema = generateFaqSchema(data.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Locations", item: "/locations" }, // Assuming a theoretical locations hub
    { name: data.city.name, item: `/locations/${data.city.id}` },
    { name: data.h1, item: `/${params.slug}` }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": data.loan.name,
    "provider": {
      "@type": "Organization",
      "name": siteConfig.brandName
    },
    "areaServed": {
      "@type": "City",
      "name": data.city.name
    },
    "description": data.metaDescription
  };

  const nearbyCities = targetCities.filter(c => c.id !== data.city.id).slice(0, 4);

  return (
    <main className="min-h-screen bg-[#FAF6EE] pt-[100px] text-[#0A1128]">
      {/* 4 Page-Specific Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1240px] px-4 pt-4 pb-2 md:px-6">
        <ol className="flex flex-wrap items-center gap-1 text-[13px] text-[#0A1128]/60">
          <li className="flex items-center gap-1">
            <Link href="/" className="transition-colors hover:text-[#D4AF37]">Home</Link>
          </li>
          <span className="mx-1 text-[#0A1128]/30" aria-hidden="true">›</span>
          <li className="flex items-center gap-1">
            <span className="font-medium text-[#0A1128]/90" aria-current="page">{data.h1}</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="container-pro relative z-10 py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-sm font-semibold text-[#D4AF37]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4AF37]"></span>
            </span>
            Available directly in {data.city.name}, {data.city.state}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {data.h1}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#1E293B]">
            {data.metaDescription}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8972E] px-8 py-4 font-bold text-zinc-950 shadow-[0_0_40px_-10px_rgba(212,175,55,0.5)] transition hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(212,175,55,0.7)] text-center">
              Apply Now in {data.city.name}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content & Map Layout */}
      <div className="container-pro pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          {/* Main 1800+ word content */}
          <div className="rounded-3xl border border-[#0A1128]/15 bg-white p-8 md:p-12 shadow-sm">
            <div className="prose prose-lg max-w-none text-[#1E293B] prose-headings:text-[#0A1128] prose-a:text-[#D4AF37] prose-strong:text-[#0A1128]" dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Map Section */}
            <div className="overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-white shadow-sm">
              <div className="p-6 border-b border-[#0A1128]/10">
                <h3 className="text-lg font-bold text-[#0A1128]">Serving {data.city.name}</h3>
                <p className="text-sm text-[#1E293B] mt-1">Visit our local partners or apply online instantly.</p>
              </div>
              <iframe
                src={data.city.mapUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${data.city.name}`}
              ></iframe>
            </div>

            {/* Bank Availability Section */}
            <div className="rounded-2xl border border-[#0A1128]/15 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0A1128] mb-4">Top Partner Banks in {data.city.name}</h3>
              <ul className="space-y-3">
                {data.banks.map((bank, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#1E293B]">
                    <svg className="h-5 w-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {bank}
                  </li>
                ))}
              </ul>
            </div>

            {/* Internal Links (Nearby Cities) */}
            <div className="rounded-2xl border border-[#0A1128]/15 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0A1128] mb-4">Nearby Locations</h3>
              <ul className="space-y-3">
                {nearbyCities.map((city) => (
                  <li key={city.id}>
                    <Link href={`/${data.loan.id}-in-${city.id}`} className="flex items-center justify-between group">
                      <span className="text-[#1E293B] transition group-hover:text-[#D4AF37]">{data.loan.name} in {city.name}</span>
                      <span className="text-[#D4AF37] transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Dynamic FAQs */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-[#0A1128]">Frequently Asked Questions</h2>
          <div className="grid gap-4">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-[#0A1128]/15 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#0A1128] mb-3">{faq.question}</h3>
                <p className="text-[#1E293B] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
