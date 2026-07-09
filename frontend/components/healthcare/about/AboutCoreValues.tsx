"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, Users, Lightbulb, LineChart, Zap } from "lucide-react";

const coreValues = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Accuracy",
    description: "We are committed to delivering precise medical billing and coding services that reduce errors, improve claim acceptance rates, and maximize reimbursements.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Integrity & HIPAA Compliance",
    description: "Protecting patient information and maintaining strict compliance with healthcare regulations, including HIPAA, is at the core of everything we do.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client Partnership",
    description: "We build lasting relationships by working as an extension of your team, providing personalized support and solutions tailored to your practice's goals.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description: "We leverage advanced technology, automation, and industry best practices to improve efficiency, simplify workflows, and stay ahead of evolving healthcare standards.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Transparency",
    description: "We believe in complete visibility through accurate reporting, open communication, and real-time performance insights that help you make informed business decisions.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Excellence & Efficiency",
    description: "Our streamlined processes ensure faster claim submissions, quicker issue resolution, and optimized revenue cycles that support healthy and consistent cash flow.",
  },
];

export default function AboutCoreValues() {
  return (
    <section className="bg-transparent py-16 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[2px] w-8 bg-[#D4A937]"></div>
            <h2 className="text-sm lg:text-base font-bold tracking-[0.15em] text-[#D4A937] uppercase">
              Our Core Values
            </h2>
            <div className="h-[2px] w-8 bg-[#D4A937]"></div>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#1C2233] leading-tight"
          >
            The Principles That Drive KLF Pro Healthcare Solutions
          </motion.h3>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(28,34,51,0.04)] border border-transparent hover:border-[#F3E0C0] hover:shadow-[0_12px_40px_rgba(28,34,51,0.08)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FCF8F2] text-[#D4A937] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#D4A937] group-hover:text-white transition-all duration-300">
                {value.icon}
              </div>
              <h4 className="text-lg font-bold text-[#1C2233] mb-2.5">
                {value.title}
              </h4>
              <p className="text-[#5F6B7A] text-[14px] leading-[1.6]">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
