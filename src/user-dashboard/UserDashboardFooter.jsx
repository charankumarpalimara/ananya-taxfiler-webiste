"use client";

import { ShieldCheck, Lock } from "lucide-react";

export default function UserDashboardFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-6 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-orange" />
          <span>© {currentYear} Ananya Tax Co • Client Portal</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
            <Lock className="w-3 h-3" />
            256-Bit SSL Encrypted
          </span>
          <span className="text-slate-600">•</span>
          <span>IRS Compliant Data Protection</span>
        </div>
      </div>
    </footer>
  );
}
