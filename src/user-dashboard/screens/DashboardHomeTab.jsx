"use client";

import { motion } from "framer-motion";
import {
  FileText, CheckCircle2, Clock, FileCheck, ArrowRight, ShieldCheck,
  Bell, UploadCloud, Calendar, ChevronRight, AlertCircle
} from "lucide-react";

export default function DashboardHomeTab({ user, documentsCount = 0, setActiveTab }) {
  const userName = user?.fullName || user?.firstName ? `${user.firstName || ''} ${user.lastName || ''}`.trim() : user?.email || "Taxpayer";

  const metrics = [
    { title: "Documents Uploaded", value: documentsCount, sub: "Total Files On Record", icon: FileText, color: "bg-blue-50 text-blue-600 border-blue-200" },
    { title: "Verification Status", value: "Verified", sub: "SSN & Identity Confirmed", icon: ShieldCheck, color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
    { title: "Current Filing Stage", value: "Step 3 of 6", sub: "Admin Review & Contact", icon: Clock, color: "bg-amber-50 text-amber-600 border-amber-200" },
    { title: "Final Reports", value: "1 Ready", sub: "Tax Year 2024 Draft", icon: FileCheck, color: "bg-purple-50 text-purple-600 border-purple-200" },
  ];

  const timelineSteps = [
    { step: 1, title: "Documents Submitted", desc: "W-2, 1099, and Identification uploaded", done: true, current: false },
    { step: 2, title: "Under Admin Review", desc: "Tax expert reviewing exemptions and deductions", done: true, current: false },
    { step: 3, title: "Admin Contact Scheduled", desc: "Consultation booked for detail confirmation", done: false, current: true },
    { step: 4, title: "Pricing Confirmed", desc: "Transparent fee approval prior to transmission", done: false, current: false },
    { step: 5, title: "Filing in Progress", desc: "Direct electronic transmission to IRS & State", done: false, current: false },
    { step: 6, title: "Filing Completed", desc: "IRS acceptance confirmation & final copy download", done: false, current: false },
  ];

  const notifications = [
    { id: 1, type: "info", title: "Document Review Complete", time: "2 hours ago", msg: "Your 2024 W-2 form has been verified by your dedicated tax accountant." },
    { id: 2, type: "warning", title: "Action Required", time: "1 day ago", msg: "Please complete your Bank Direct Deposit details under Account Info." },
    { id: 3, type: "success", title: "Referral Bonus Credited", time: "3 days ago", msg: "You earned $50 reward for referring Mark S." },
  ];

  return (
    <div className="space-y-8 font-sans">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-brand-purple p-8 text-white shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-orange text-xs font-bold backdrop-blur-md">
            <ShieldCheck className="w-4 h-4" /> IRS Authorized E-File Provider
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-heading tracking-tight leading-tight">
            <span style={{ color: 'white' }}>Welcome back,</span> <span className="text-brand-orange">{userName}</span>!
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Your 2024 Tax Return filing process is currently in progress. Track your status, upload pending documents, or schedule a consultation with your tax consultant below.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setActiveTab("upload")}
              className="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs shadow-lg shadow-brand-orange/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <UploadCloud className="w-4 h-4" />
              <span>Upload Tax Docs</span>
            </button>
            <button
              onClick={() => setActiveTab("scheduling")}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer border border-white/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">{m.title}</span>
                <div className={`p-2 rounded-xl border ${m.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 font-heading">{m.value}</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">{m.sub}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 6-Step Interactive Filing Timeline */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl font-black text-slate-900 font-heading">Interactive Tax Filing Timeline</h2>
            <p className="text-xs text-slate-500 mt-1">Real-time status tracking for your Tax Year 2024 return</p>
          </div>
          <button
            onClick={() => setActiveTab("status")}
            className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Full Progress Details</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {timelineSteps.map((item) => (
            <div
              key={item.step}
              className={`p-4 rounded-2xl border transition-all ${item.current
                ? "bg-amber-50/50 border-amber-300 ring-2 ring-amber-200"
                : item.done
                  ? "bg-slate-50/80 border-slate-200 opacity-90"
                  : "bg-white border-slate-100 text-slate-400"
                }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${item.done ? "bg-emerald-100 text-emerald-700" : item.current ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-500"
                  }`}>
                  Step {item.step}
                </span>
                {item.done ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                ) : item.current ? (
                  <Clock className="w-5 h-5 text-amber-500 animate-pulse" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-slate-300" />
                )}
              </div>
              <div className="font-bold text-sm text-slate-900">{item.title}</div>
              <div className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications Stream */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-brand-orange" />
            <h2 className="text-lg font-black text-slate-900 font-heading">Latest Notifications Stream</h2>
          </div>
          <button
            onClick={() => setActiveTab("notifications")}
            className="text-xs font-bold text-brand-purple hover:underline cursor-pointer"
          >
            View All
          </button>
        </div>
        <div className="space-y-3">
          {notifications.map((n) => (
            <div key={n.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
              <AlertCircle className={`w-5 h-5 shrink-0 mt-0.5 ${n.type === 'warning' ? 'text-amber-500' : n.type === 'success' ? 'text-emerald-500' : 'text-blue-500'
                }`} />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">{n.title}</span>
                  <span className="text-[10px] text-slate-400 font-semibold">{n.time}</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">{n.msg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
