"use client";

import { useState, useEffect } from "react";
import { UploadCloud, FileText, Trash2, CheckCircle2, User, Users, FileCheck, Loader2 } from "lucide-react";
import { uploadDocument, getDocuments, deleteDocument } from "../../services/api";

export default function UploadDocumentsTab() {
  const [docType, setDocType] = useState("W2-Wage Income");
  const [person, setPerson] = useState("Tax Payer");
  const [file, setFile] = useState(null);
  const [documentList, setDocumentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  const categories = [
    "W2-Wage Income",
    "Prior year Tax Return Copy",
    "1099-INT - Interest Income",
    "1099-DIV - Dividend Income",
    "1099-G - State Tax Refunds",
    "1099-MISC - Business Income",
    "1099-HC - MA State Health Coverage Document",
    "1099-B - Sale of Shares Statement",
    "1099-R - Retirement Distributions",
    "1098 - Home Mortgage Interest",
    "1098-E - Student Loan Interest",
    "1098-T - Tuition Fees Expenses",
    "1095-A - Health Insurance Market Place",
    "Foreign Income Document",
    "Personal Identification Document of Tax Payer",
    "Others",
  ];

  const fetchDocs = async () => {
    try {
      const res = await getDocuments();
      if (res && res.success && Array.isArray(res.data)) {
        setDocumentList(res.data);
      }
    } catch (err) {
      console.error("Error fetching document list:", err);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMsg({ type: "error", text: "Please select a document file to upload." });
      return;
    }

    setLoading(true);
    setMsg({ type: "", text: "" });
    try {
      const formData = new FormData();
      formData.append("documentType", docType);
      formData.append("person", person);
      formData.append("file", file);

      const res = await uploadDocument(formData);
      if (res && res.success) {
        setMsg({ type: "success", text: "Tax document uploaded successfully!" });
        setFile(null);
        fetchDocs();
      } else {
        setMsg({ type: "error", text: res?.message || "Failed to upload document." });
      }
    } catch (err) {
      setMsg({ type: "error", text: err.message || "Upload failed." });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this document?")) return;
    try {
      const res = await deleteDocument(id);
      if (res && res.success) {
        setMsg({ type: "success", text: "Document deleted." });
        fetchDocs();
      }
    } catch (err) {
      setMsg({ type: "error", text: "Failed to delete document." });
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-black text-slate-900 font-heading">Upload Documents Center</h2>
          <p className="text-xs text-slate-500 mt-1">Upload W-2s, 1099s, 1098s, and identification files securely for tax preparation.</p>
        </div>

        {msg.text && (
          <div className={`p-4 rounded-2xl text-xs font-bold flex items-center gap-2 ${
            msg.type === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"
          }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{msg.text}</span>
          </div>
        )}

        {/* Upload Form */}
        <form onSubmit={handleUpload} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700">Document Type Category</label>
              <select
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                className="w-full mt-1.5 px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-brand-purple/20 bg-white"
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700">Person Assignment</label>
              <select
                value={person}
                onChange={(e) => setPerson(e.target.value)}
                className="w-full mt-1.5 px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-brand-purple/20 bg-white"
              >
                <option value="Tax Payer">Tax Payer</option>
                <option value="Spouse">Spouse</option>
                <option value="Both">Both</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700">Select File (PDF, PNG, JPG)</label>
            <div className="mt-1.5 flex items-center justify-center p-6 border-2 border-dashed border-slate-300 rounded-2xl bg-white hover:border-brand-orange transition-colors">
              <div className="text-center space-y-2">
                <UploadCloud className="w-8 h-8 text-brand-orange mx-auto" />
                <input
                  type="file"
                  accept="application/pdf,image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="text-xs text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-brand-orange file:text-white cursor-pointer"
                />
                {file && (
                  <p className="text-xs font-bold text-brand-purple mt-2">
                    Selected: {file.name} ({(file.size / 1024).toFixed(1)} KB)
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading || !file}
              className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl font-bold text-xs shadow-lg shadow-brand-orange/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
              <span>Upload Document</span>
            </button>
          </div>
        </form>

        {/* Uploaded Documents List */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b pb-2">
            <FileCheck className="w-4 h-4 text-emerald-500" />
            <span>Uploaded Tax Files ({documentList.length})</span>
          </h3>

          {documentList.length === 0 ? (
            <p className="text-xs text-slate-400 italic py-4 text-center">No tax documents uploaded yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documentList.map((doc) => (
                <div key={doc._id || doc.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 truncate max-w-[200px]">{doc.fileName}</div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        {doc.documentType} • <span className="text-brand-purple font-bold">{doc.person}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(doc._id || doc.id)}
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
