import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-data";
import { healthcareServicesData } from "../data/healthcare-services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/loans/home",
    "/loans/personal-loan",
    "/loans/business",
    "/loans/car",
    "/loans/education",
    "/loans/loan-against-property",
    "/emi-calculator", 
    "/eligibility", 
    "/credit-score", 
    "/contact", 
    "/blog"
  ];

  const sitemapData: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));

  // KLFPRO Healthcare Routes
  sitemapData.push({
    url: "https://klfprohealthcare.com/klfpro-healthcare",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1
  });

  Object.keys(healthcareServicesData).forEach((slug) => {
    sitemapData.push({
      url: `https://klfprohealthcare.com/klfpro-healthcare/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    });
  });

  try {
    const res = await fetch("http://localhost:4000/api/leads/seo-pages/all", { next: { revalidate: 3600 } });
    if (res.ok) {
      const dynamicPages = await res.json();
      dynamicPages.forEach((page: any) => {
        sitemapData.push({
          url: `${siteConfig.domain}/${page.slug}`,
          lastModified: new Date(page.updatedAt),
          changeFrequency: "daily",
          priority: 0.9
        });
      });
    }
  } catch (e) {
    console.error("Failed to fetch dynamic sitemap pages", e);
  }

  return sitemapData;
}
