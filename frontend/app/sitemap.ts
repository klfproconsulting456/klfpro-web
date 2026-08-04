import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-data";
import { programmaticPages } from "@/content/locations";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/loans/personal-loan", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/loans/home", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/loans/business", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/loans/car", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/loans/education", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/loans/loan-against-property", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/loans/commercial-vehicle", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/loans/used-car", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/loans/two-wheeler", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/emi-calculator", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/eligibility", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/credit-score", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "daily" as const },
    { path: "/careers", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const programmaticRoutes = programmaticPages.map(page => ({
    path: `/${page.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const
  }));

  const allRoutes = [...staticRoutes, ...programmaticRoutes];

  const sitemapData: MetadataRoute.Sitemap = allRoutes.map((route) => ({
    url: `${siteConfig.domain}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));

  return sitemapData;
}
