"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Mail, Briefcase, MessageCircle, Eye, X, Filter } from "lucide-react";

type SubmissionType = "Contact" | "Job Application" | "FAQ Question";

type Submission = {
  id: string;
  type: SubmissionType;
  name: string;
  email: string;
  phone?: string;
  date: string;
  subject?: string;
  message?: string;
  jobRole?: string;
  resumeUrl?: string;
  status: "New" | "Reviewed";
};

// Initial mock data
const INITIAL_SUBMISSIONS: Submission[] = [
  {
    id: "s1",
    type: "Job Application",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    date: "2026-07-08T10:30:00Z",
    jobRole: "Senior Medical Coder",
    resumeUrl: "#",
    status: "New",
  },
  {
    id: "s2",
    type: "Contact",
    name: "Jane Smith",
    email: "jane.s@hospital.org",
    phone: "+1 987 654 3210",
    date: "2026-07-07T14:15:00Z",
    subject: "Inquiry about Revenue Cycle Management",
    message: "We are looking to outsource our RCM process and would like a quote.",
    status: "Reviewed",
  },
  {
    id: "s3",
    type: "FAQ Question",
    name: "Michael Johnson",
    email: "michael.j@clinic.net",
    date: "2026-07-06T09:45:00Z",
    message: "Do you provide temporary staffing for front desk patient access?",
    status: "New",
  },
];

export default function SubmissionsViewer() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<SubmissionType | "All">("All");
  const [viewingSubmission, setViewingSubmission] = useState<Submission | null>(null);

  useEffect(() => {
    // Load from local storage or use initial
    const stored = localStorage.getItem("klfpro_submissions");
    if (stored) {
      setSubmissions(JSON.parse(stored));
    } else {
      setSubmissions(INITIAL_SUBMISSIONS);
      localStorage.setItem("klfpro_submissions", JSON.stringify(INITIAL_SUBMISSIONS));
    }
  }, []);

  const saveSubmissions = (newSubs: Submission[]) => {
    setSubmissions(newSubs);
    localStorage.setItem("klfpro_submissions", JSON.stringify(newSubs));
  };

  const handleView = (sub: Submission) => {
    setViewingSubmission(sub);
    // Mark as reviewed if it was new
    if (sub.status === "New") {
      const updated = submissions.map(s => s.id === sub.id ? { ...s, status: "Reviewed" as const } : s);
      saveSubmissions(updated);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this submission?")) {
      saveSubmissions(submissions.filter((s) => s.id !== id));
      if (viewingSubmission?.id === id) {
        setViewingSubmission(null);
      }
    }
  };

  const filteredSubmissions = submissions.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "All" || s.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getIconForType = (type: SubmissionType) => {
    switch (type) {
      case "Contact": return <Mail className="w-5 h-5 text-blue-500" />;
      case "Job Application": return <Briefcase className="w-5 h-5 text-purple-500" />;
      case "FAQ Question": return <MessageCircle className="w-5 h-5 text-amber-500" />;
    }
  };

  const formatDate = (isoString: string) => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', day: 'numeric', year: 'numeric', 
      hour: 'numeric', minute: 'numeric' 
    }).format(new Date(isoString));
  };

  return (
    <div className="p-6 lg:p-10 max-w-[1400px] mx-auto w-full">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0A1128] tracking-tight">
            Form Submissions
          </h1>
          <p className="text-slate-500 mt-1">
            Review contact requests, job applications, and FAQ inquiries.
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-sm border border-slate-200 w-full max-w-md">
          <Search className="w-5 h-5 text-slate-400 ml-2" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-sm text-slate-700 py-1"
          />
        </div>
        
        <div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-sm border border-slate-200 w-full sm:w-auto">
          <Filter className="w-5 h-5 text-slate-400 ml-2" />
          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as any)}
            className="bg-transparent border-none outline-none text-sm text-slate-700 py-1 pr-4 font-medium"
          >
            <option value="All">All Types</option>
            <option value="Contact">Contact Forms</option>
            <option value="Job Application">Job Applications</option>
            <option value="FAQ Question">FAQ Questions</option>
          </select>
        </div>
      </div>

      {/* Split Layout: List & Details */}
      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-280px)] min-h-[500px]">
        
        {/* List Section */}
        <div className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col ${viewingSubmission ? 'lg:w-1/3 hidden lg:flex' : 'w-full'}`}>
          <div className="p-4 border-b border-slate-100 bg-slate-50 font-semibold text-slate-700 flex justify-between items-center">
            <span>Inbox ({filteredSubmissions.length})</span>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filteredSubmissions.length === 0 ? (
              <div className="p-8 text-center text-slate-500">
                <p>No submissions found.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {filteredSubmissions.map((sub) => (
                  <div 
                    key={sub.id}
                    onClick={() => handleView(sub)}
                    className={`p-4 cursor-pointer transition-colors ${
                      viewingSubmission?.id === sub.id 
                        ? 'bg-amber-50 border-l-4 border-l-[#D4AF37]' 
                        : sub.status === 'New' ? 'bg-white hover:bg-slate-50 border-l-4 border-l-transparent font-semibold' : 'bg-white hover:bg-slate-50 border-l-4 border-l-transparent text-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        {getIconForType(sub.type)}
                        <span className="text-sm font-medium">{sub.name}</span>
                      </div>
                      {sub.status === 'New' && <span className="w-2 h-2 rounded-full bg-blue-500"></span>}
                    </div>
                    <div className="text-xs text-slate-500 mb-1 line-clamp-1">
                      {sub.type === "Job Application" ? `Application for ${sub.jobRole}` : sub.subject || sub.message}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {formatDate(sub.date)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Details Section */}
        {viewingSubmission ? (
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                {getIconForType(viewingSubmission.type)}
                <div>
                  <h2 className="text-lg font-bold text-[#0A1128]">{viewingSubmission.type}</h2>
                  <p className="text-xs text-slate-500">{formatDate(viewingSubmission.date)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleDelete(viewingSubmission.id)} className="px-3 py-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                  Delete
                </button>
                <button onClick={() => setViewingSubmission(null)} className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-colors lg:hidden">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 lg:p-8 flex-1 overflow-y-auto">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Sender Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-slate-500 mb-1">Name</span>
                    <span className="font-semibold text-slate-800">{viewingSubmission.name}</span>
                  </div>
                  <div>
                    <span className="block text-slate-500 mb-1">Email</span>
                    <a href={`mailto:${viewingSubmission.email}`} className="font-semibold text-blue-600 hover:underline">{viewingSubmission.email}</a>
                  </div>
                  {viewingSubmission.phone && (
                    <div>
                      <span className="block text-slate-500 mb-1">Phone</span>
                      <span className="font-semibold text-slate-800">{viewingSubmission.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Submission Content</h3>
                
                {viewingSubmission.type === "Job Application" && (
                  <div className="space-y-4">
                    <div>
                      <span className="block text-slate-500 text-sm mb-1">Applied Position</span>
                      <span className="font-semibold text-lg text-[#0A1128]">{viewingSubmission.jobRole}</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 text-sm mb-2">Resume / CV</span>
                      <a href={viewingSubmission.resumeUrl} className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37]/20 transition-colors">
                        View Attached Resume
                      </a>
                    </div>
                  </div>
                )}

                {(viewingSubmission.type === "Contact" || viewingSubmission.type === "FAQ Question") && (
                  <div className="space-y-4">
                    {viewingSubmission.subject && (
                      <div>
                        <span className="block text-slate-500 text-sm mb-1">Subject</span>
                        <span className="font-semibold text-[#0A1128]">{viewingSubmission.subject}</span>
                      </div>
                    )}
                    <div>
                      <span className="block text-slate-500 text-sm mb-2">Message</span>
                      <div className="p-4 bg-slate-50 rounded-lg text-slate-700 leading-relaxed border border-slate-100 whitespace-pre-wrap">
                        {viewingSubmission.message}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex flex-1 bg-slate-50 rounded-2xl border border-slate-200 border-dashed items-center justify-center flex-col text-slate-400">
            <Mail className="w-16 h-16 mb-4 opacity-20" />
            <p className="font-medium text-lg text-slate-500">Select a submission to view details</p>
            <p className="text-sm">Click on any item from the inbox list.</p>
          </div>
        )}
      </div>
    </div>
  );
}
