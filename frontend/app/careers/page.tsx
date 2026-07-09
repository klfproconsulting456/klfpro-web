"use client";

import { motion } from "framer-motion";
import { AppChrome } from "@/components/layout/AppChrome";
import { Briefcase, Heart, TrendingUp, Users, ArrowRight, Star } from "lucide-react";

const perks = [
  {
    title: "Accelerated Growth",
    description: "Work in a fast-paced environment where your career trajectory matches our company's exponential growth.",
    icon: <TrendingUp className="h-6 w-6 text-[#D4AF37]" />,
  },
  {
    title: "Performance Rewards",
    description: "Your hard work never goes unnoticed. We offer industry-leading incentives and performance bonuses.",
    icon: <Star className="h-6 w-6 text-[#D4AF37]" />,
  },
  {
    title: "Collaborative Culture",
    description: "Join a team of driven, supportive professionals who believe in succeeding together.",
    icon: <Users className="h-6 w-6 text-[#D4AF37]" />,
  },
  {
    title: "Impactful Work",
    description: "Help thousands of Indians make smarter financial decisions and achieve their dreams.",
    icon: <Briefcase className="h-6 w-6 text-[#D4AF37]" />,
  },
];

const jobs = [
  {
    title: "Financial Consultant",
    department: "Sales & Advisory",
    location: "Gurugram, HR (On-site)",
    type: "Full-time",
  },
  {
    title: "Credit Analyst",
    department: "Risk & Underwriting",
    location: "Gurugram, HR (On-site)",
    type: "Full-time",
  },
  {
    title: "Relationship Manager (B2B)",
    department: "Partnerships",
    location: "Delhi NCR (Hybrid)",
    type: "Full-time",
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <AppChrome>
      <main className="min-h-screen bg-[#FAF6EE] text-[#0A1128]">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.15),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(30,64,175,0.1),transparent_50%)]" />
          <div className="mx-auto max-w-5xl px-6 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#B8972E]"
            >
              Careers at KLFPRO
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-5xl font-bold tracking-tight md:text-7xl"
            >
              Build the future of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8C6D1F]">Financial Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-[#1E293B] md:text-xl"
            >
              We are on a mission to simplify lending and financial consulting for millions of Indians. Join our team and make a real impact.
            </motion.p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Work With Us?</h2>
              <p className="mt-4 text-lg text-slate-600">More than just a workplace. We offer an environment where you can thrive.</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {perks.map((perk, i) => (
                <motion.div 
                  key={perk.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:shadow-lg hover:border-[#D4AF37]/30"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                    {perk.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-[#0A1128]">{perk.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{perk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Open Positions</h2>
                <p className="mt-4 text-lg text-slate-600">Find your next big opportunity at KLFPRO.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {jobs.map((job, i) => (
                <motion.div 
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group flex flex-col justify-between gap-6 rounded-2xl border border-[#0A1128]/10 bg-white p-6 transition-all hover:border-[#D4AF37]/50 hover:shadow-[0_8px_30px_rgba(212,175,55,0.12)] md:flex-row md:items-center md:p-8"
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#0A1128] group-hover:text-[#B8972E] transition-colors">{job.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
                      <span className="rounded-full bg-slate-100 px-3 py-1">{job.department}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1">{job.location}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1">{job.type}</span>
                    </div>
                  </div>
                  
                  <button className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0A1128] px-6 py-3 font-semibold text-white transition hover:bg-[#1E293B]">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-8 text-center border border-[#D4AF37]/20">
              <h3 className="text-lg font-semibold text-[#0A1128]">Don't see a fit?</h3>
              <p className="mt-2 text-slate-600">We're always looking for talented individuals. Send your resume to <a href="mailto:careers@klfpro.com" className="font-semibold text-[#B8972E] hover:underline">careers@klfpro.com</a></p>
            </div>
          </div>
        </section>

      </main>
    </AppChrome>
  );
}
