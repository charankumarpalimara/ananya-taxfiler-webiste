"use client";

import { ShieldCheck, Lock } from "lucide-react";

export default function UserDashboardFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 py-6 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-light">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-accent" />
          <span className="text-text-mid font-medium">© {currentYear} Ananya Tax Co • Client Portal</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1 text-emerald-600 font-semibold">
            <Lock className="w-3 h-3" />
            256-Bit SSL Encrypted
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-text-light">IRS Compliant Data Protection</span>
        </div>
      </div>
    </footer>
  );
}
