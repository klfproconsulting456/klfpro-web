"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  { name: "Home Loan", href: "/loans/home" },
  { name: "Personal Loan", href: "/loans/personal-loan" },
  { name: "Business Loan", href: "/loans/business" },
  { name: "Loan Against Property", href: "/loans/loan-against-property" },
  { name: "Car Loan", href: "/loans/car" },
  { name: "MSME Loan", href: "/loans/msme" },
  { name: "Commercial Vehicle Loan", href: "/loans/commercial-vehicle" },
  { name: "Education Loan", href: "/loans/education" }
] as const;

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact" },
  { name: "Careers", href: "/careers" },
  { name: "FAQs", href: "/#faq" }
] as const;

export function MarketingFooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-white/10 bg-[#081428] text-white shadow-[0_-24px_80px_-40px_rgba(0,0,0,0.5)]"
    >
      <div className="mx-auto grid grid-cols-1 max-w-[1170px] gap-10 px-5 py-10 md:grid-cols-[1.8fr_1fr_1fr] md:px-6">
        <div>
          <div className="flex items-center gap-3 group">
            <img src="/healthcare-logo.png" alt="KLFPRO mark" className="h-[40px] w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <span className="text-[24px] font-semibold leading-none tracking-tight text-white">klfpro consulting</span>
          </div>
          <p className="mt-4 max-w-[430px] text-[13px] leading-[1.8] text-white/60">
            KLFPRO Consulting is one of India&apos;s trusted and unbiased financial advisory platforms, offering the
            best deals across a wide range of loan products along with expert guidance. We serve as a one-stop
            solution for all your lending needs, managing the entire borrowing journey-from helping you choose the
            right financial product and lender to ensuring smooth and timely loan disbursement.
          </p>



          <h4 className="mt-6 text-[16px] font-semibold leading-none text-white">Contact Us</h4>
          <div className="mt-2 space-y-1 text-[13px] leading-7 text-white/70">
            <p>OFFICE NO.1142, TOWER B3, SPAZE ITECH PARK, GURUGRAM</p>
            <p>0124-4068700</p>
            <p>info@klfpro.in</p>
            <p>Mon-Sat: 10AM - 7PM</p>
          </div>

          <h4 className="mt-8 text-[18px] font-semibold leading-none text-white">Keep in Touch</h4>
          <div className="mt-4 flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-transform duration-200 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 hover:-translate-y-1"
              aria-label="X"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform duration-200 hover:-translate-y-1"
              aria-label="Facebook"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white transition-transform duration-200 hover:-translate-y-1"
              aria-label="Instagram"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
          
          <div className="mt-8">
            <p className="text-[11px] lg:text-[14px] font-bold uppercase tracking-wider text-white/50">
              CIN: U70200HR2025PTC138274
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-[16px] font-semibold leading-none tracking-wide text-white/50">PRODUCTS</h4>
          <ul className="mt-4 space-y-3 text-[13px] text-white/80">
            {products.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="transition hover:text-[#D4AF37]">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[16px] font-semibold leading-none tracking-wide text-white/50">COMPANY</h4>
          <ul className="mt-4 space-y-3 text-[13px] text-white/80">
            {companyLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="transition hover:text-[#D4AF37]">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1170px] flex-col justify-between gap-3 px-5 py-4 text-[13px] text-white/50 md:flex-row md:px-6">
          <p>© 2024 www.klfpro.in. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Link href="#" className="transition hover:text-[#D4AF37]">
              Terms and Conditions
            </Link>
            <span className="text-white/20">|</span>
            <Link href="#" className="transition hover:text-[#D4AF37]">
              Policy of Use
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
