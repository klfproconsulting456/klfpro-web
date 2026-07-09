"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { api } from "../../../lib/api";

type Document = {
  id: string;
  name: string;
  type: string;
  status: string;
  fileUrl: string;
  note?: string;
};

type LeadWithDocuments = {
  leadId: string;
  loanType: string;
  status: string;
  documents: Document[];
};

export default function MyDocumentsPage() {
  const [leadsData, setLeadsData] = useState<LeadWithDocuments[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLeadId, setSelectedLeadId] = useState<string>("");
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const data = await api.get("/documents");
      setLeadsData(data);
      if (data.length > 0 && !selectedLeadId) {
        setSelectedLeadId(data[0].leadId);
      }
    } catch (e) {
      console.error("Failed to load documents", e);
    } finally {
      setLoading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    if (!selectedLeadId) return alert("Please select an application first.");
    if (file.size > 5 * 1024 * 1024) return alert("File size must be under 5MB");
    
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("leadId", selectedLeadId);
      formData.append("name", file.name);
      formData.append("type", "OTHER"); // We can enhance this to let user choose

      await api.uploadFile("/documents/upload", formData);
      alert("Document uploaded successfully!");
      await fetchDocuments();
    } catch (e: any) {
      alert("Failed to upload document: " + e.message);
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-[#1E293B]">Loading documents...</div>;
  }

  const selectedLead = leadsData.find((l) => l.leadId === selectedLeadId);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#0A1128]">My Documents</h1>
        <p className="mt-2 text-sm text-[#1E293B]">
          Upload and manage your KYC and income documents for fast loan approvals.
        </p>
      </div>

      {leadsData.length > 0 ? (
        <div className="mb-6">
          <label className="block text-sm font-semibold text-[#0F1C3F] mb-2">Select Application</label>
          <select 
            value={selectedLeadId}
            onChange={(e) => setSelectedLeadId(e.target.value)}
            className="w-full max-w-sm rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
          >
            {leadsData.map(l => (
              <option key={l.leadId} value={l.leadId}>
                Application #{l.leadId.slice(-6).toUpperCase()} ({l.status})
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="mb-6 rounded-xl bg-amber-50 p-4 border border-amber-200 text-[#B8972E] text-sm">
          You don't have any active loan applications yet.
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Document List */}
        <div className="lg:col-span-2 space-y-4">
          {selectedLead && selectedLead.documents.length === 0 && (
             <div className="p-8 text-center border border-dashed border-slate-300 rounded-2xl bg-white shadow-sm text-[#1E293B]">
               No documents uploaded for this application yet.
             </div>
          )}
          {selectedLead?.documents.map((doc) => (
            <div key={doc.id} className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4 p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                  doc.status === "VERIFIED" ? "bg-emerald-50 border-emerald-200 text-emerald-600" :
                  doc.status === "REJECTED" ? "bg-red-50 border-red-200 text-red-600" :
                  "bg-slate-50 border-slate-200 text-[#1E293B]"
                }`}>
                  {doc.status === "VERIFIED" ? "✓" : doc.status === "REJECTED" ? "✕" : "📄"}
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1128]">{doc.name}</h3>
                  <p className="text-xs text-[#1E293B] mt-1">Status: {doc.status.replace("_", " ")}</p>
                  {doc.status === "REJECTED" && doc.note && (
                    <p className="text-xs text-red-500 mt-1 font-medium">Note: {doc.note}</p>
                  )}
                </div>
              </div>
              
              <div>
                <a href={process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "") + doc.fileUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#D4AF37] hover:underline">
                  View File
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dropzone */}
        <div className="lg:col-span-1">
          <div
            className={`sticky top-32 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed p-10 text-center transition-all ${
              dragActive
                ? "border-[#D4AF37] bg-[#D4AF37]/5"
                : "border-slate-300 bg-white"
            } ${!selectedLeadId ? "opacity-50 pointer-events-none" : ""}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="mb-4 rounded-full bg-slate-50 p-4 text-3xl">📤</div>
            <h3 className="mb-2 text-lg font-bold text-[#0A1128]">Quick Upload</h3>
            <p className="mb-6 text-sm text-[#1E293B]">
              Drag and drop any requested document here, or click to browse.
            </p>
            <label className="cursor-pointer rounded-full bg-slate-100 px-6 py-2.5 text-sm font-semibold text-[#0F1C3F] transition hover:bg-slate-200">
              {uploading ? "Uploading..." : "Browse Files"}
              <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} disabled={uploading || !selectedLeadId} />
            </label>
            <p className="mt-4 text-[10px] uppercase tracking-wider text-[#1E293B]">
              Supports PDF, JPG, PNG up to 5MB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
