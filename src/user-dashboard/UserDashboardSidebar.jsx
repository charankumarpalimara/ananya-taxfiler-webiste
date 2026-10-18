"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  LayoutDashboard, User, ShieldCheck, FileText, UploadCloud, Calendar, 
  Share2, Clock, DollarSign, FileCheck, Bell, Headset, LogOut, X, ChevronRight, Briefcase
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function UserDashboardSidebar({ 
  activeTab, 
  setActiveTab, 
  isMobileOpen, 
  setIsMobileOpen 
}) {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    logout();
    router.push("/");
  };

  const navGroups = [
    {
      title: "Core Portal",
      items: [
        { id: "dashboard-home", label: "Dashboard Home", icon: LayoutDashboard },
        { id: "profile", label: "Profile Settings", icon: User },
        { id: "account-info", label: "Account Info Wizard", icon: Briefcase },
      ]
    },
    {
      title: "Tax Management",
      items: [
        { id: "upload", label: "Upload Documents", icon: UploadCloud },
        { id: "status", label: "Filing Status Tracker", icon: Clock },
        { id: "tax-summary", label: "Tax Summary & History", icon: FileText },
        { id: "tax-refund", label: "Tax Refund Tracker", icon: DollarSign },
        { id: "reports", label: "Final Reports", icon: FileCheck },
      ]
    },
    {
      title: "Services & Rewards",
      items: [
        { id: "scheduling", label: "Schedule Consultation", icon: Calendar },
        { id: "referrals", label: "Referral Program", icon: Share2 },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "support", label: "Support & Tickets", icon: Headset },
      ]
    }
  ];

  const displayName = user?.fullName || user?.firstName ? `${user.firstName || ''} ${user.lastName || ''}`.trim() : user?.email || "Taxpayer Portal";

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-slate-900 text-white flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 overflow-y-auto ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Header & Branding */}
        <div>
          <div className="p-5 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900 z-10">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/new-logo.jpeg"
                alt="Ananya Tax Co Logo"
                className="h-9 w-auto object-contain rounded-xl shadow-md border border-white/10 group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="font-black text-white text-sm font-heading block tracking-wide">ANANYA TAX CO</span>
                <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest block">Client Portal</span>
              </div>
            </Link>

            <button
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-4 font-sans text-xs">
            {navGroups.map((group, idx) => (
              <div key={idx} className="space-y-1">
                <div className="px-3 pt-2 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {group.title}
                </div>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsMobileOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
                        isActive
                          ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-brand-orange/80"}`} />
                        <span className="truncate">{item.label}</span>
                      </div>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 opacity-80 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom User Info & Logout */}
        <div className="p-4 border-t border-slate-800 space-y-3 bg-slate-900 sticky bottom-0">
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
            <div className="w-8 h-8 rounded-lg bg-brand-purple text-white font-bold text-xs flex items-center justify-center font-heading shrink-0 shadow-sm">
              {displayName[0]?.toUpperCase() || 'U'}
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-bold text-white truncate">{displayName}</div>
              <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                <span>Verified Taxpayer</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-red-500/20 text-slate-300 hover:text-red-400 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-700/60"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
