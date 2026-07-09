"use client";

import { motion } from "framer-motion";
import { Heart, Laptop, TrendingUp, Shield } from "lucide-react";

const perks = [
  {
    title: "Competitive Compensation",
    description: "We offer industry-leading salaries, performance bonuses, and regular appraisal cycles.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance covering you and your family for total peace of mind.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Flexible Work",
    description: "Enjoy remote and hybrid work options designed to give you a healthy work-life balance.",
    icon: <Laptop className="w-6 h-6" />,
  },
  {
    title: "Job Security & Growth",
    description: "A stable career path with continuous training and certifications for your professional growth.",
    icon: <Shield className="w-6 h-6" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CareersPerks() {
  return (
    <section className="py-16 lg:py-24 bg-transparent">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-[800] text-[#1C2233] mb-4">Why Join KLFPRO?</h2>
          <p className="text-[#5F6B7A] text-[16px] lg:text-[18px]">
            We invest heavily in our team because we know that our success is built on the talent, dedication, and well-being of our employees.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-[0_8px_30px_rgba(28,34,51,0.03)] hover:shadow-[0_12px_40px_rgba(28,34,51,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FCF8F2] text-[#D4A937] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#D4A937] group-hover:text-white transition-all duration-300">
                {perk.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1C2233] mb-3">{perk.title}</h3>
              <p className="text-[#5F6B7A] leading-relaxed text-[15px]">{perk.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
