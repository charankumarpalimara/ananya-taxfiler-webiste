"use client";

import { useState } from "react";
import { Send, MessageSquare, PhoneCall, Mail, CheckCircle2, Loader2 } from "lucide-react";
import GlobalTable from "../../components/common/GlobalTable";

export default function SupportTab() {
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("Tax Preparation");
  const [priority, setPriority] = useState("Medium");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  const [tickets, setTickets] = useState([
    { id: "TCK-8902", subject: "W-2 Exemption Question", category: "Tax Preparation", priority: "Medium", status: "Open", date: "Sep 28, 2026" },
    { id: "TCK-7611", subject: "Direct Deposit Routing Verification", category: "Account & Bank", priority: "High", status: "Resolved", date: "Sep 20, 2026" },
  ]);

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    if (!subject || !message) return;

    setLoading(true);
    setTimeout(() => {
      const newTck = {
        id: `TCK-${Math.floor(1000 + Math.random() * 9000)}`,
        subject,
        category,
        priority,
        status: "Open",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      };
      setTickets([newTck, ...tickets]);
      setMsg({ type: "success", text: "Support ticket created successfully! Representative will reply shortly." });
      setSubject("");
      setMessage("");
      setLoading(false);
    }, 600);
  };

  const columns = [
    {
      header: "Ticket ID",
      accessor: "id",
      cellClassName: "font-mono font-bold text-brand-purple",
    },
    {
      header: "Subject",
      accessor: "subject",
      cellClassName: "font-bold text-slate-900",
    },
    {
      header: "Category",
      accessor: "category",
      cellClassName: "text-slate-600",
    },
    {
      header: "Priority",
      accessor: "priority",
      cellClassName: "text-slate-600",
    },
    {
      header: "Created Date",
      accessor: "date",
      cellClassName: "text-slate-500",
    },
    {
      header: "Status",
      cell: (t) => (
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${t.status === 'Resolved' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
          }`}>
          {t.status}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-black text-slate-900 font-heading">Customer Support & Ticketing</h2>
          <p className="text-xs text-slate-500 mt-1">Submit support tickets directly to your assigned tax representative or reach our support hotline.</p>
        </div>

        {msg.text && (
          <div className={`p-4 rounded-2xl text-xs font-bold flex items-center gap-2 ${msg.type === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"
            }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{msg.text}</span>
          </div>
        )}

        {/* Support Direct Contact Header Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-brand-orange text-white">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Direct Support Hotline</div>
              <div className="text-sm font-black text-brand-purple font-mono mt-0.5">+1 (800) 555-TAX-HELP</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-brand-purple text-white">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Dedicated Email Representative</div>
              <div className="text-xs font-bold text-slate-600 mt-0.5">info@nexgenaccountinggroup.com</div>
            </div>
          </div>
        </div>

        {/* Submit Ticket Form */}
        <form onSubmit={handleSubmitTicket} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-brand-purple" />
            <span>Create New Support Ticket</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                placeholder="Brief summary of inquiry"
                required
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
              >
                <option value="Tax Preparation">Tax Preparation</option>
                <option value="Document Upload">Document Upload</option>
                <option value="Account & Bank">Account & Bank</option>
                <option value="Billing & Pricing">Billing & Pricing</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700">Priority Level</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
            <div className="sm:col-span-3">
              <label className="text-xs font-bold text-slate-700">Detailed Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                placeholder="Describe your issue or question..."
                required
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              <span>Submit Ticket</span>
            </button>
          </div>
        </form>

        {/* Tickets List */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b pb-2">My Support Tickets ({tickets.length})</h3>
          <GlobalTable
            columns={columns}
            data={tickets}
            getRowKey={(t) => t.id}
            enablePagination={true}
            defaultPageSize={5}
            searchable={true}
            searchPlaceholder="Search support tickets..."
            emptyMessage="No support tickets created yet."
          />
        </div>
      </div>
    </div>
  );
}
