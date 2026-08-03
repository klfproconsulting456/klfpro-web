import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/seo";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = items.map((item) => ({
    name: item.name,
    item: item.href,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(schemaItems)),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1240px] px-4 pt-24 pb-2 md:px-6"
      >
        <ol className="flex flex-wrap items-center gap-1 text-[13px] text-[#0A1128]/60">
          {items.map((item, idx) => (
            <li key={item.href} className="flex items-center gap-1">
              {idx > 0 && (
                <span className="mx-1 text-[#0A1128]/30" aria-hidden="true">
                  ›
                </span>
              )}
              {idx === items.length - 1 ? (
                <span className="font-medium text-[#0A1128]/90" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[#D4AF37]"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
