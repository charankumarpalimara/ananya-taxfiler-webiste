"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ShieldCheck, LogOut, User, FileText, Phone, Home, 
  ChevronDown, LayoutDashboard, Lock
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function UserDashboardNavbar({ activeTab, setActiveTab }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleSignOut = () => {
    logout();
    router.push("/");
  };

  const displayName = user?.fullName || user?.name || "Client Portal";

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">

          {/* Logo & Portal Branding */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img
                src="/new-logo.jpeg"
                alt="Ananya Tax Co Logo"
                className="h-10 sm:h-11 w-auto object-contain rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <div className="hidden xs:flex flex-col">
                <span className="font-extrabold text-sm sm:text-base font-heading tracking-tight text-brand-primary leading-tight">
                  ANANYA <span className="text-brand-orange">TAX CO</span>
                </span>
                <span className="text-[9px] font-semibold text-text-light uppercase tracking-widest leading-none">
                  Client Portal
                </span>
              </div>
            </Link>
            <div className="h-6 w-[1px] bg-slate-200 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold font-heading">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
              <span>Client Portal</span>
            </div>
          </div>

          {/* Navigation Links inside User Dashboard */}
          <nav className="hidden md:flex items-center gap-1 font-sans">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "profile"
                  ? "bg-brand-purple text-white shadow-md shadow-brand-purple/20"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview & Profile</span>
            </button>

            <button
              onClick={() => setActiveTab("submissions")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "submissions"
                  ? "bg-brand-purple text-white shadow-md shadow-brand-purple/20"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>My Filings</span>
            </button>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:bg-slate-100 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Representative</span>
            </Link>
          </nav>

          {/* User Profile Dropdown & Sign Out */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 transition-all cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-purple text-white font-bold text-xs flex items-center justify-center font-heading">
                  {displayName[0].toUpperCase()}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-slate-800 line-clamp-1">{displayName}</div>
                  <div className="text-[10px] text-slate-500 font-medium">Client Account</div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Profile Dropdown Menu */}
              {showProfileMenu && (
                <div 
                  className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-2 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setShowProfileMenu(false)}
                >
                  <div className="p-3 border-b border-slate-100">
                    <div className="text-xs font-bold text-slate-900">{displayName}</div>
                    <div className="text-[11px] text-slate-500 truncate">{user?.email}</div>
                  </div>

                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      setActiveTab("profile");
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer mt-1"
                  >
                    <User className="w-4 h-4 text-brand-purple" />
                    <span>My Profile</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      setActiveTab("submissions");
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-brand-purple" />
                    <span>My Tax Filings</span>
                  </button>

                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer mt-1 border-t border-slate-100 pt-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
