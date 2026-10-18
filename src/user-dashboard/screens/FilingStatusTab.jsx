"use client";

import { Clock, CheckCircle2, AlertCircle, FileCheck, ArrowRight, ShieldCheck } from "lucide-react";

export default function FilingStatusTab() {
  const steps = [
    { step: 1, title: "Documents Submitted", desc: "Tax payer documents & identity forms uploaded to portal.", status: "completed", date: "Sep 25, 2026" },
    { step: 2, title: "Under Admin Review", desc: "Tax CPA reviewing form exemptions and credit eligibility.", status: "completed", date: "Sep 27, 2026" },
    { step: 3, title: "Admin Contact Scheduled", desc: "Consultation call scheduled for clarifying 1099 deductions.", status: "in-progress", date: "Sep 30, 2026 (Today)" },
    { step: 4, title: "Pricing & Summary Confirmed", desc: "Final tax preparation quote and breakdown approved by user.", status: "upcoming", date: "Est. Oct 2, 2026" },
    { step: 5, title: "Filing in Progress (Transmission)", desc: "Secure electronic transmission sent to IRS and State Revenue.", status: "upcoming", date: "Est. Oct 4, 2026" },
    { step: 6, title: "Filing Completed & Accepted", desc: "IRS acceptance acknowledgment code generated.", status: "upcoming", date: "Est. Oct 5, 2026" },
  ];

  const percentage = 50; // Step 3 of 6 completed/in-progress

  return (
    <div className="space-y-8 font-sans">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-900 font-heading">Filing Status Tracker</h2>
            <p className="text-xs text-slate-500 mt-1">Tax Year 2024 Return - Real-time progress timeline & stage verification.</p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 font-bold text-xs">
            <Clock className="w-4 h-4 animate-spin text-amber-600" />
            <span>Current Stage: Admin Contact Scheduled</span>
          </div>
        </div>

        {/* Percentage Bar */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-700">Filing Completion Progress</span>
            <span className="text-brand-purple">{percentage}% Completed</span>
          </div>
          <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-orange to-brand-purple transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium pt-1">
            <span>Started: Sep 25, 2026</span>
            <span>Target IRS E-Filing: Oct 5, 2026</span>
          </div>
        </div>

        {/* 6-Stage Vertical Progress Timeline */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
          {steps.map((s) => {
            const isCompleted = s.status === 'completed';
            const isInProgress = s.status === 'in-progress';
            return (
              <div key={s.step} className="relative group">
                <div className={`absolute -left-6 sm:-left-8 top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-md transition-all ${
                  isCompleted
                    ? "bg-emerald-500 text-white"
                    : isInProgress
                    ? "bg-amber-500 text-white ring-4 ring-amber-100"
                    : "bg-slate-200 text-slate-500"
                }`}>
                  {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : s.step}
                </div>

                <div className={`p-5 rounded-2xl border transition-all ${
                  isInProgress
                    ? "bg-amber-50/40 border-amber-300 ring-2 ring-amber-100"
                    : isCompleted
                    ? "bg-white border-slate-200"
                    : "bg-slate-50/50 border-slate-100 text-slate-400"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-sm text-slate-900">{s.title}</h3>
                    <span className="text-[11px] font-semibold text-slate-400">{s.date}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
