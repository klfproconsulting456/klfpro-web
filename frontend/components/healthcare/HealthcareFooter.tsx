"use client";

import Link from "next/link";
import { useState } from "react";
import { ContactModal } from "./ContactModal";

export function HealthcareFooter() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <footer className="bg-[#081428]">
      <div className="mx-auto max-w-[1440px] px-6 pt-10 pb-5 lg:pt-[48px] lg:pb-[32px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {/* LEFT COLUMN — Logo, Description, Social Icons */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <img 
                src="/healthcare-logo.png" 
                alt="KLFPRO Healthcare Logo" 
                className="h-9 w-auto object-contain" 
              />
              <span className="text-[16px] font-bold text-white">
                KLFPRO <span className="text-[#D4A937]">Healthcare</span>
              </span>
            </Link>

            <p className="mt-3 max-w-xs lg:max-w-sm text-[12px] lg:text-[14px] leading-[1.6] lg:leading-[24px] text-white/60">
              We are a premium healthcare business solutions provider, dedicated
              to delivering enterprise-grade operational excellence and world-class
              support services to our global partners.
            </p>

            {/* Social Icons — original brand colors by default, lift on hover */}
            <div className="mt-5 flex items-center gap-3">
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
                href="https://x.com/klfprohealth"
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
                href="https://www.facebook.com/profile.php?id=61591262501030"
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
                href="https://www.instagram.com/klfprohealthcare/"
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
            
            {/* CIN Number */}
            <div className="mt-6">
              <p className="text-[11px] lg:text-[15px] font-bold uppercase tracking-wider text-white/50">
                CIN: U70200HR2025PTC138274
              </p>
            </div>
          </div>

          {/* MIDDLE COLUMN — Quick Links */}
          <div>
            <h3 className="text-[11px] lg:text-[15px] font-bold uppercase tracking-wider text-white/50">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-[12px] lg:text-[14px]">
              <li>
                <Link
                  href="/services"
                  className="text-white/60 transition-colors hover:text-[#D4A937]"
                >
                  <span className="mr-2 text-white/40">&gt;</span>Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/60 transition-colors hover:text-[#D4A937]"
                >
                  <span className="mr-2 text-white/40">&gt;</span>About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#career"
                  className="text-white/60 transition-colors hover:text-[#D4A937]"
                >
                  <span className="mr-2 text-white/40">&gt;</span>Careers
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-white/60 transition-colors hover:text-[#D4A937] text-left"
                >
                  <span className="mr-2 text-white/40">&gt;</span>Contact
                </button>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/dir//KLFPRO+Consulting+private+limited,+11th+Floor,+Tower+B3,+Spaze+i-Tech+Park,+1142,+Badshahpur+Sohna+Rd,+Sector+49,+Gurugram,+Haryana+122018/@28.6457856,77.1948544,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d23cf10a10da1:0x9294b573c8fad20e!2m2!1d77.0438633!2d28.412598?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 transition-colors hover:text-[#D4A937]"
                >
                  <span className="mr-2 text-white/40">&gt;</span>Location
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN — Address & Contact */}
          <div>
            <h3 className="text-[11px] lg:text-[15px] font-bold uppercase tracking-wider text-white/50">
              Contact Us
            </h3>
            <div className="mt-4 max-w-sm text-[12px] lg:text-[14px] leading-[1.6] lg:leading-[24px] text-white/60">
              <p className="mb-1 font-semibold text-white">Corporate Office</p>
              <p>OFFICE NO.1142, TOWER B3, SPAZE I-TECH PARK</p>
              <p>GURUGRAM, HARYANA</p>

              <div className="mt-4 space-y-1">
                <p>
                  <span className="font-semibold text-[#D4A937]">Phone:</span>{" "}
                  0124-4068700
                </p>
                <p>
                  <span className="font-semibold text-[#D4A937]">Email:</span>{" "}
                  info@klfpro.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/40">
            &copy; 2026 KLFPRO Healthcare. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-[12px] text-white/40">
            <Link
              href="#privacy"
              className="transition-colors hover:text-[#D4A937]"
            >
              Privacy Policy
            </Link>
            <span className="text-white/15">|</span>
            <Link
              href="#terms"
              className="transition-colors hover:text-[#D4A937]"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </footer>
  );
}
