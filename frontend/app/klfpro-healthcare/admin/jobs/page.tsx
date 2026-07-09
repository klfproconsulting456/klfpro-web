"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit2, Trash2, X, Search, Briefcase } from "lucide-react";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  status: "Active" | "Draft";
  postedDate: string;
};

// Initial mock data
const INITIAL_JOBS: Job[] = [
  {
    id: "1",
    title: "Senior Medical Coder",
    department: "Medical Coding",
    location: "Remote",
    type: "Full-time",
    status: "Active",
    postedDate: "2026-07-01",
  },
  {
    id: "2",
    title: "AR Caller",
    department: "Accounts Receivable",
    location: "On-site",
    type: "Full-time",
    status: "Active",
    postedDate: "2026-07-03",
  },
  {
    id: "3",
    title: "RCM Manager",
    department: "Revenue Cycle Management",
    location: "Hybrid",
    type: "Full-time",
    status: "Draft",
    postedDate: "2026-07-05",
  },
];

export default function JobPostingsManager() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-time",
    status: "Active" as "Active" | "Draft",
  });

  useEffect(() => {
    // Load from local storage or use initial
    const stored = localStorage.getItem("klfpro_hc_jobs");
    if (stored) {
      setJobs(JSON.parse(stored));
    } else {
      setJobs(INITIAL_JOBS);
      localStorage.setItem("klfpro_hc_jobs", JSON.stringify(INITIAL_JOBS));
    }
  }, []);

  const saveJobs = (newJobs: Job[]) => {
    setJobs(newJobs);
    localStorage.setItem("klfpro_hc_jobs", JSON.stringify(newJobs));
  };

  const handleOpenModal = (job?: Job) => {
    if (job) {
      setEditingJob(job);
      setFormData({
        title: job.title,
        department: job.department,
        location: job.location,
        type: job.type,
        status: job.status,
      });
    } else {
      setEditingJob(null);
      setFormData({
        title: "",
        department: "",
        location: "",
        type: "Full-time",
        status: "Active",
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingJob(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingJob) {
      // Update existing
      const updated = jobs.map((j) =>
        j.id === editingJob.id
          ? { ...j, ...formData }
          : j
      );
      saveJobs(updated);
    } else {
      // Create new
      const newJob: Job = {
        id: Math.random().toString(36).substr(2, 9),
        ...formData,
        postedDate: new Date().toISOString().split("T")[0],
      };
      saveJobs([newJob, ...jobs]);
    }
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this job posting?")) {
      saveJobs(jobs.filter((j) => j.id !== id));
    }
  };

  const filteredJobs = jobs.filter((j) =>
    j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    j.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-10 max-w-[1400px] mx-auto w-full">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0A1128] tracking-tight">
            Job Postings
          </h1>
          <p className="text-slate-500 mt-1">
            Manage career opportunities for the Healthcare division.
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center justify-center gap-2 bg-[#0A1128] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add New Job
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex items-center gap-4 bg-white p-2 rounded-xl shadow-sm border border-slate-200 w-full max-w-md">
        <Search className="w-5 h-5 text-slate-400 ml-2" />
        <input
          type="text"
          placeholder="Search jobs by title or department..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-sm text-slate-700 py-1"
        />
      </div>

      {/* Jobs Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Job Title</th>
                <th className="px-6 py-4 font-semibold">Department</th>
                <th className="px-6 py-4 font-semibold">Location / Type</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <AnimatePresence>
                {filteredJobs.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                      <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <p>No job postings found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredJobs.map((job) => (
                    <motion.tr
                      key={job.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="font-bold text-[#0A1128]">{job.title}</div>
                        <div className="text-xs text-slate-400 mt-0.5">Posted: {job.postedDate}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {job.department}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-600 font-medium">{job.location}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{job.type}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                            job.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {job.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenModal(job)}
                            className="p-2 text-slate-400 hover:text-[#0A1128] hover:bg-slate-100 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(job.id)}
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-full"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 shrink-0">
                <h2 className="text-xl font-bold text-[#0A1128]">
                  {editingJob ? "Edit Job Posting" : "Create New Job"}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col min-h-0 flex-1">
                <div className="p-6 overflow-y-auto flex-1">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Job Title</label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
                        placeholder="e.g. Senior Medical Coder"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Department</label>
                        <input
                          type="text"
                          required
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
                          placeholder="e.g. Medical Coding"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Location</label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
                          placeholder="e.g. Remote, On-site"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Employment Type</label>
                        <select
                          value={formData.type}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
                        >
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Status</label>
                        <select
                          value={formData.status}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value as "Active" | "Draft" })}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
                        >
                          <option value="Active">Active</option>
                          <option value="Draft">Draft</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-slate-100 shrink-0 flex items-center justify-end gap-3 bg-white">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0A1128] hover:bg-[#D4AF37] hover:text-[#0A1128] rounded-lg transition-colors shadow-sm"
                  >
                    {editingJob ? "Save Changes" : "Create Job"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
