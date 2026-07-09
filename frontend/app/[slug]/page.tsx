import { notFound } from "next/navigation";
import { generateSeoMetadata, generateFinancialProductSchema, generateFaqSchema, generateLocalBusinessSchema } from "@/lib/seo";

// This simulates a server-side fetch to our NestJS API
async function getSeoPageData(slug: string) {
  try {
    const res = await fetch(`http://localhost:4000/api/leads/seo-page/${slug}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = await getSeoPageData(params.slug);
  if (!data) return {};

  const metadata = generateSeoMetadata({
    title: data.title,
    description: data.metaDescription,
    path: `/${params.slug}`,
  });

  if (data.status === "FALLBACK_NOINDEX") {
    metadata.robots = { index: false, follow: true };
  }

  return metadata;
}

export default async function ProgrammaticSeoPage({ params }: { params: { slug: string } }) {
  const data = await getSeoPageData(params.slug);
  if (!data) notFound();

  const financialSchema = generateFinancialProductSchema({
    name: data.title,
    description: data.metaDescription,
    interestRate: data.interestRate?.toString() || "10.5",
    url: `/${params.slug}`,
  });

  const localSchema = generateLocalBusinessSchema(data.city);
  const faqSchema = data.faqs ? generateFaqSchema(data.faqs) : null;

  return (
    <main className="min-h-screen bg-[#FAF6EE] pt-[100px] text-[#0A1128]">
      {/* Inject Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className="container-pro relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-sm font-semibold text-[#D4AF37]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4AF37]"></span>
            </span>
            Available in {data.city}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {data.h1}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#1E293B]">
            {data.metaDescription}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/login" className="rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8972E] px-8 py-4 font-bold text-zinc-950 shadow-[0_0_40px_-10px_rgba(212,175,55,0.5)] transition hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(212,175,55,0.7)]">
              Apply Now in {data.city}
            </a>
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-[#0A1128]/15 bg-[#FAF6EE] p-8 md:p-12">
          <div className="prose prose-invert max-w-none text-[#0F1C3F]" dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>

        {data.faqs && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {data.faqs.map((faq: any, idx: number) => (
                <div key={idx} className="rounded-2xl border border-[#0A1128]/15 bg-[#FAF6EE] p-6">
                  <h3 className="text-lg font-bold text-[#0A1128] mb-2">{faq.question}</h3>
                  <p className="text-[#1E293B]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
