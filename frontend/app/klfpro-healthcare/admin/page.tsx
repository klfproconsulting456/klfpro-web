"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Mail, CheckCircle, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function HealthcareAdminDashboard() {
  const [stats, setStats] = useState({
    activeJobs: 0,
    newSubmissions: 0,
    totalReviewed: 0,
  });

  useEffect(() => {
    const storedJobs = localStorage.getItem("klfpro_hc_jobs");
    const storedSubs = localStorage.getItem("klfpro_submissions");
    
    let active = 0;
    let newSubs = 0;
    let reviewed = 0;

    if (storedJobs) {
      const parsedJobs = JSON.parse(storedJobs);
      active = parsedJobs.filter((j: any) => j.status === "Active").length;
    }

    if (storedSubs) {
      const parsedSubs = JSON.parse(storedSubs);
      newSubs = parsedSubs.filter((s: any) => s.status === "New").length;
      reviewed = parsedSubs.filter((s: any) => s.status === "Reviewed").length;
    }

    setStats({ activeJobs: active, newSubmissions: newSubs, totalReviewed: reviewed });
  }, []);

  const cards = [
    {
      title: "Active Job Postings",
      value: stats.activeJobs,
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
      border: "border-blue-100",
      link: "/admin/jobs"
    },
    {
      title: "New Submissions",
      value: stats.newSubmissions,
      icon: <Mail className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50",
      border: "border-amber-100",
      link: "/admin/submissions"
    },
    {
      title: "Reviewed Submissions",
      value: stats.totalReviewed,
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      bg: "bg-green-50",
      border: "border-green-100",
      link: "/admin/submissions"
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0A1128] tracking-tight">
          Dashboard Overview
        </h1>
        <p className="text-slate-500 mt-1">
          Welcome to the KLFPRO Healthcare Admin Panel. Here is what's happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={card.link} className={`block p-6 rounded-2xl border ${card.border} ${card.bg} hover:shadow-md transition-all`}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{card.title}</p>
                  <h3 className="text-4xl font-black text-[#0A1128]">{card.value}</h3>
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {card.icon}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-[#D4A937]/10 rounded-xl">
            <TrendingUp className="w-6 h-6 text-[#D4A937]" />
          </div>
          <h2 className="text-xl font-bold text-[#0A1128]">Getting Started</h2>
        </div>
        <p className="text-slate-600 leading-relaxed max-w-3xl">
          Use the sidebar to navigate through the admin panel. 
          You can manage all career openings under the <strong>Job Postings</strong> tab, and review all incoming 
          job applications, contact requests, and FAQ questions under the <strong>Forms & Applications</strong> tab. 
          This panel is completely separate from the main KLFPRO Consulting admin dashboard.
        </p>
      </div>
    </div>
  );
}
