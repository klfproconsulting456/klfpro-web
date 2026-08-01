"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    title: "Business Loan",
    desc: "Get the funds you need to grow your business.",
    image: "/assets/products/business_loan_card.jpg",
    btnClass: "bg-[#ffca28] text-gray-900 hover:bg-[#ffb300] shadow-sm",
    href: "/loans/business",
    badge: null,
    btnText: "Apply Now >"
  },
  {
    title: "Loan Against Property",
    desc: "Unlock the value of your property for bigger opportunities.",
    image: "/assets/products/lap_card.jpg",
    btnClass: "bg-[#ffca28] text-gray-900 hover:bg-[#ffb300] shadow-sm",
    href: "/loans/loan-against-property",
    badge: "Lowest EMI",
    btnText: "Apply Now >"
  },
  {
    title: "Home Loan",
    desc: "Turn your dream home into a reality.",
    image: "/assets/products/home_loan_card.jpg",
    btnClass: "bg-[#ffca28] text-gray-900 hover:bg-[#ffb300] shadow-sm",
    href: "/loans/home",
    badge: "Best Rates",
    btnText: "Explore >"
  },
  {
    title: "Education Loan",
    desc: "Invest in your future with the right education funding.",
    image: "/assets/products/education_loan_card.jpg",
    btnClass: "bg-[#ffca28] text-gray-900 hover:bg-[#ffb300] shadow-sm",
    href: "/loans/education",
    badge: "New",
    btnText: "Explore >"
  }
];

export function LightProductsBlock() {
  return (
    <section id="products" className="relative scroll-mt-24 bg-[#FAF6EE] py-16">
      <div className="relative mx-auto max-w-[1280px] px-4 text-center md:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] md:text-[40px]">
            Find the Right Financial <span className="text-[#ffca28]">Product</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[16px] text-gray-600 font-medium">
            Get started in minutes with our simple, fast and convenient application process.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image 
                  src={c.image} 
                  alt={c.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  unoptimized={true}
                />
                {c.badge && (
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-[#ffca28] px-3 py-1 text-[11px] font-bold text-gray-900 shadow-sm">
                    {c.badge}
                  </span>
                )}
              </div>
              
              {/* Content Section */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-[14px] text-gray-600 mb-6 flex-grow leading-relaxed">{c.desc}</p>
                
                <div className="flex justify-start">
                  <Link
                    href={c.href}
                    className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition ${c.btnClass}`}
                  >
                    {c.btnText}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
