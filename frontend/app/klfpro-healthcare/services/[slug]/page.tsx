import { notFound } from "next/navigation";
import { healthcareServicesData } from "../../../../data/healthcare-services";
import { ServiceDetailHero } from "../../../../components/healthcare/services/ServiceDetailHero";
import { ServiceOfferings } from "../../../../components/healthcare/services/ServiceOfferings";
import { ServiceCTA } from "../../../../components/healthcare/services/ServiceCTA";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = healthcareServicesData[params.slug as keyof typeof healthcareServicesData];
  
  if (!service) {
    return {
      title: "Service Not Found - KLFPRO Healthcare",
    };
  }

  const url = `https://www.klfprohealthcare.com/services/${params.slug}`;

  return {
    title: `${service.title} | KLFPRO Healthcare`,
    description: service.description,
    keywords: [service.title, "Healthcare Services", "KLFPRO Healthcare", "USA"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service.title} | KLFPRO Healthcare`,
      description: service.description,
      url: url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | KLFPRO Healthcare`,
      description: service.description,
    }
  };
}

export function generateStaticParams() {
  return Object.keys(healthcareServicesData).map((slug) => ({
    slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = healthcareServicesData[params.slug as keyof typeof healthcareServicesData];

  if (!service) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen">
      <ServiceDetailHero 
        title={service.title}
        heading={service.heading}
        description={service.description}
        heroImage={(service as any).heroImage}
      />
      
      {/* Background Image Container for the rest of the page */}
      <div 
        className="relative flex-1 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/service-detail-bg.jpg')" }}
      >
        {/* Subtle white overlay to ensure content is perfectly readable */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 pb-16 lg:pb-24">
          <ServiceOfferings offerings={service.offerings} />
          <ServiceCTA />
        </div>
      </div>
    </main>
  );
}
