import { siteConfig } from "@/content/site-data";
import { Metadata } from "next";
import { ContactFormClient } from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact Us | KLFPRO Consulting",
  description: "Get in touch with KLFPRO Consulting for expert financial advice, loan queries, and business support.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF6EE] min-h-screen py-16 sm:py-24">
      <div className="container-pro">
        
        <div className="mx-auto max-w-5xl rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-[#F3E0C0] flex flex-col lg:flex-row overflow-hidden">
          
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-[45%] bg-[#FCF8F2] p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(8,20,40,0.5) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-[#1C2233] mb-4">
                Let&apos;s <span className="text-[#D4AF37]">Connect</span>
              </h2>
              <p className="text-[15px] leading-[1.6] text-[#5F6B7A] mb-10">
                Whether you&apos;re looking for an instant personal loan, a business loan to expand your enterprise, or expert financial advice, our team is here to help. Reach out to us today—we&apos;re ready to support your financial journey.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-[13px] font-bold text-[#1C2233] uppercase tracking-wider mb-1 flex items-center gap-2">
                    <span>📧</span> Email Us
                  </h4>
                  <a href="mailto:support@klfpro.in" className="text-[16px] font-medium text-[#D4AF37] hover:underline">support@klfpro.in</a>
                </div>
                
                <div>
                  <h4 className="text-[13px] font-bold text-[#1C2233] uppercase tracking-wider mb-1 flex items-center gap-2">
                    <span>📞</span> Call Us
                  </h4>
                  <a href={`tel:${siteConfig.phonePrimary.replace(/\s/g, "")}`} className="text-[16px] font-medium text-[#5F6B7A] hover:text-[#1C2233]">{siteConfig.phonePrimary}</a>
                </div>

                <div>
                  <h4 className="text-[13px] font-bold text-[#1C2233] uppercase tracking-wider mb-1 flex items-center gap-2">
                    <span>📍</span> Corporate Office
                  </h4>
                  <p className="text-[15px] font-medium text-[#5F6B7A] leading-relaxed max-w-[280px]">
                    OFFICE NO.1142, TOWER B3, SPAZE ITECH PARK, SECTOR 49, GURUGRAM, HARYANA 122018
                  </p>
                </div>

                <div>
                  <h4 className="text-[13px] font-bold text-[#1C2233] uppercase tracking-wider mb-1 flex items-center gap-2">
                    <span>🕒</span> Business Hours
                  </h4>
                  <div className="text-[15px] text-[#5F6B7A] space-y-1">
                    <p>Monday – Saturday: <span className="font-medium text-[#1C2233]">10:00 AM – 7:00 PM (IST)</span></p>
                    <p>Sunday: <span className="font-medium text-[#1C2233]">Closed</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-[55%] p-8 sm:p-12 relative flex items-center bg-white">
            <ContactFormClient />
          </div>

        </div>
      </div>
    </div>
  );
}
