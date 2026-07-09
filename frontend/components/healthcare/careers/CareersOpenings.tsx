"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ApplicationModal } from "./ApplicationModal";

const openings = [
  {
    id: 1,
    title: "Senior Medical Coder",
    department: "Medical Coding",
    location: "Remote (India)",
    type: "Full-time",
    description: "Looking for a certified medical coder (AAPC or AHIMA) with 3+ years of experience in multi-specialty coding.",
  },
  {
    id: 2,
    title: "AR Caller / Specialist",
    department: "Accounts Receivable",
    location: "Remote (India)",
    type: "Full-time",
    description: "Seeking an experienced AR caller to handle denials, insurance follow-ups, and accelerate the revenue cycle.",
  },
  {
    id: 3,
    title: "RCM Manager",
    department: "Revenue Cycle Management",
    location: "Hybrid (Delhi, India)",
    type: "Full-time",
    description: "Lead a team of billing and coding specialists. Requires 5+ years in US Healthcare RCM operations.",
  },
  {
    id: 4,
    title: "Healthcare Customer Support",
    department: "Support",
    location: "Remote (India)",
    type: "Full-time",
    description: "Front-line support handling patient inquiries, appointment scheduling, and basic billing questions.",
  }
];

export default function CareersOpenings() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [activeJobs, setActiveJobs] = useState<any[]>(openings);

  useEffect(() => {
    const storedJobs = localStorage.getItem("klfpro_hc_jobs");
    if (storedJobs) {
      try {
        const parsedJobs = JSON.parse(storedJobs);
        const active = parsedJobs.filter((job: any) => job.status === "Active");
        setActiveJobs(active);
      } catch (e) {
        console.error("Failed to parse jobs", e);
      }
    }
  }, []);

  return (
    <section id="open-positions" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FCF8F2] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="mx-auto max-w-[1200px] px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-[800] text-[#1C2233] mb-4">Open Positions</h2>
            <p className="text-[#5F6B7A] text-[16px]">
              Ready to take the next step in your career? Explore our current openings and find where you fit best.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {activeJobs.length === 0 ? (
            <div className="text-center py-12 text-[#5F6B7A]">
              No active job openings at the moment. Please check back later!
            </div>
          ) : (
            activeJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(28,34,51,0.03)] hover:shadow-[0_12px_40px_rgba(28,34,51,0.08)] hover:border-[#D4A937]/30 transition-all duration-300 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="bg-[#FCF8F2] text-[#D4A937] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {job.department}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C2233] mb-3 group-hover:text-[#D4A937] transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-[#5F6B7A] text-[15px] mb-5 max-w-3xl">
                    {job.description || `Join our team in the ${job.department} department as a ${job.title}.`}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-2 text-sm text-[#8B95A5] font-medium">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#8B95A5] font-medium">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#8B95A5] font-medium">
                      <Briefcase className="w-4 h-4" />
                      Experience Required
                    </div>
                  </div>
                </div>
                
                <div className="shrink-0 mt-2 md:mt-0">
                  <button
                    onClick={() => setSelectedJob(job.title)}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#FCF8F2] text-[#1C2233] border border-[#F3E0C0] px-6 h-[44px] rounded-[40px] text-[14px] font-semibold group-hover:bg-[#D4A937] group-hover:border-[#D4A937] group-hover:text-white transition-all duration-300 shadow-sm"
                  >
                    Apply Now
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      <ApplicationModal 
        isOpen={!!selectedJob} 
        onClose={() => setSelectedJob(null)} 
        jobTitle={selectedJob || ""} 
      />
    </section>
  );
}
