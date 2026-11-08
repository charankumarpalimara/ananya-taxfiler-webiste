"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  User, Mail, Phone, ShieldCheck, Lock, ArrowRight, Menu, LogOut, Bell
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useRegisterModal } from "../context/RegisterModalContext";
import { fetchUserProfile, getDocuments } from "../services/api";
import UserDashboardSidebar from "./UserDashboardSidebar";
import UserDashboardFooter from "./UserDashboardFooter";

// Screen Components
import DashboardHomeTab from "./screens/DashboardHomeTab";
import ProfileTab from "./screens/ProfileTab";
import AccountInformationWizard from "./screens/AccountInformationWizard";
import UploadDocumentsTab from "./screens/UploadDocumentsTab";
import SchedulingTab from "./screens/SchedulingTab";
import ReferralsTab from "./screens/ReferralsTab";
import FilingStatusTab from "./screens/FilingStatusTab";
import TaxSummaryTab from "./screens/TaxSummaryTab";
import TaxRefundTab from "./screens/TaxRefundTab";
import FinalReportsTab from "./screens/FinalReportsTab";
import NotificationsTab from "./screens/NotificationsTab";
import SupportTab from "./screens/SupportTab";

const VALID_TABS = [
  "dashboard-home",
  "profile",
  "account-info",
  "upload",
  "status",
  "tax-summary",
  "tax-refund",
  "reports",
  "scheduling",
  "referrals",
  "notifications",
  "support"
];

export default function UserDashboard() {
  const { token, user, isAuthenticated, logout, isJwtExpired } = useAuth();
  const { openRegisterModal } = useRegisterModal();

  const [mounted, setMounted] = useState(false);

  // Initialize tab from URL ?tab= or sessionStorage so refresh preserves current view
  const [activeTab, setActiveTabState] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlTab = params.get("tab");
      if (urlTab && VALID_TABS.includes(urlTab)) return urlTab;
      const stored = sessionStorage.getItem("dashboard_active_tab");
      if (stored && VALID_TABS.includes(stored)) return stored;
    }
    return "dashboard-home";
  });

  const setActiveTab = useCallback((tabId) => {
    if (!VALID_TABS.includes(tabId)) return;
    setActiveTabState(tabId);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("dashboard_active_tab", tabId);
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tabId);
      window.history.replaceState(null, "", url.toString());
    }
  }, []);

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(user);
  const [documentsCount, setDocumentsCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync tab with URL and history navigation (back/forward)
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    const syncTab = () => {
      const params = new URLSearchParams(window.location.search);
      const urlTab = params.get("tab");
      if (urlTab && VALID_TABS.includes(urlTab)) {
        setActiveTabState(urlTab);
      } else {
        const stored = sessionStorage.getItem("dashboard_active_tab");
        if (stored && VALID_TABS.includes(stored)) {
          setActiveTabState(stored);
        }
      }
    };
    syncTab();
    window.addEventListener("popstate", syncTab);
    return () => window.removeEventListener("popstate", syncTab);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const rawToken = typeof window !== 'undefined'
      ? (sessionStorage.getItem("user_token") || localStorage.getItem("user_token"))
      : null;

    if (!rawToken || isJwtExpired(rawToken)) {
      logout();
      setErrorMsg("Your session has expired or is invalid. Please log in to view your portal.");
      setLoading(false);
      return;
    }

    const loadData = async () => {
      setLoading(true);
      try {
        try {
          const profileRes = await fetchUserProfile();
          if (profileRes && (profileRes.data?.user || profileRes.data)) {
            setProfileData(profileRes.data.user || profileRes.data);
          }
        } catch {
          logout();
          setErrorMsg("Your authentication token has expired. Please log in again.");
          setLoading(false);
          return;
        }

        try {
          const docsRes = await getDocuments();
          if (docsRes && docsRes.success && Array.isArray(docsRes.data)) {
            setDocumentsCount(docsRes.data.length);
          }
        } catch {
          // ignore doc count error
        }
      } catch (err) {
        console.error("Dashboard data load error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [mounted, token]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="w-8 h-8 border-3 border-brand-orange border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const rawSessionToken = typeof window !== 'undefined'
    ? (sessionStorage.getItem("user_token") || localStorage.getItem("user_token"))
    : null;

  if (!isAuthenticated && (!rawSessionToken || isJwtExpired(rawSessionToken))) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col justify-between font-sans">
        <div className="flex-1 flex items-center justify-center p-4 pt-16 pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-200 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-medium text-brand-purple mb-2 font-heading">
              Access Restricted
            </h2>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {errorMsg || "Please log in to your Ananya Tax Co Client Portal to view your personal dashboard and tax records."}
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => openRegisterModal(2)}
                className="w-full py-3 bg-brand-orange text-white rounded-xl font-semibold text-sm shadow-lg shadow-brand-orange/20 hover:bg-brand-orange-dark transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Log In to Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
        <UserDashboardFooter />
      </div>
    );
  }

  const currentUser = profileData || user;
  const displayName = currentUser?.fullName || currentUser?.firstName ? `${currentUser.firstName || ''} ${currentUser.lastName || ''}`.trim() : currentUser?.email || "Taxpayer";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Sidebar Navigation */}
      <UserDashboardSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Main Content Area */}
      <div className="lg:pl-64 flex-1 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-4 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-lg font-medium text-slate-900 font-heading capitalize">
                {activeTab.replace("-", " ")}
              </h1>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Tax Year 2024 Client Portal & IRS E-Filing Hub
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab("notifications")}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all relative cursor-pointer"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-orange" />
            </button>

            <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200">
              <div className="w-8 h-8 rounded-xl bg-brand-purple text-white font-semibold text-xs flex items-center justify-center font-heading">
                {displayName[0]?.toUpperCase() || 'U'}
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-semibold text-slate-900 leading-tight">{displayName}</div>
                <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> E-Filer Verified
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Screen View */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto space-y-6">
          {loading ? (
            <div className="flex items-center justify-center py-20 text-slate-400 font-semibold text-sm">
              Loading Taxpayer Dashboard...
            </div>
          ) : (
            <>
              {activeTab === "dashboard-home" && (
                <DashboardHomeTab user={currentUser} documentsCount={documentsCount} setActiveTab={setActiveTab} />
              )}
              {activeTab === "profile" && (
                <ProfileTab user={currentUser} onProfileUpdated={(updated) => setProfileData(updated)} />
              )}
              {activeTab === "account-info" && (
                <AccountInformationWizard user={currentUser} />
              )}
              {activeTab === "upload" && (
                <UploadDocumentsTab />
              )}
              {activeTab === "scheduling" && (
                <SchedulingTab />
              )}
              {activeTab === "referrals" && (
                <ReferralsTab user={currentUser} />
              )}
              {activeTab === "status" && (
                <FilingStatusTab />
              )}
              {activeTab === "tax-summary" && (
                <TaxSummaryTab />
              )}
              {activeTab === "tax-refund" && (
                <TaxRefundTab />
              )}
              {activeTab === "reports" && (
                <FinalReportsTab />
              )}
              {activeTab === "notifications" && (
                <NotificationsTab />
              )}
              {activeTab === "support" && (
                <SupportTab />
              )}
            </>
          )}
        </main>

        <UserDashboardFooter />
      </div>
    </div>
  );
}
