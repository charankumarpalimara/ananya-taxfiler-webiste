"use client";

import { useState } from "react";
import { Bell, CheckCircle2, AlertTriangle, Info, Clock, Trash2 } from "lucide-react";

export default function NotificationsTab() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "info", title: "Document Verified", text: "Your 2024 W-2 form was verified by tax preparer.", time: "2 hours ago", unread: true },
    { id: 2, type: "warning", title: "Missing Bank Details", text: "Please provide your Checking/Savings account info for IRS Direct Deposit.", time: "1 day ago", unread: true },
    { id: 3, type: "success", title: "Referral Reward Received", text: "Your $50 referral bonus for inviter code has been credited.", time: "3 days ago", unread: false },
    { id: 4, type: "info", title: "Consultation Reminder", text: "Upcoming consultation call scheduled for Oct 2 at 10:00 AM CST.", time: "4 days ago", unread: false },
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="space-y-8 font-sans">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell className="w-6 h-6 text-brand-orange" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white font-bold text-[10px] flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 font-heading">Notifications & Activity Stream</h2>
              <p className="text-xs text-slate-500 mt-0.5">Stay updated on document verification, filing alerts, and reward notices.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={markAllRead}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer"
            >
              Mark All Read
            </button>
            <button
              onClick={clearAll}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-red-50 text-red-600 font-bold text-xs transition-all cursor-pointer"
            >
              Clear All
            </button>
          </div>
        </div>

        {notifications.length === 0 ? (
          <p className="text-xs text-slate-400 italic py-8 text-center">No notifications at this time.</p>
        ) : (
          <div className="space-y-3">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`p-4 rounded-2xl border transition-all flex items-start justify-between gap-4 ${
                  n.unread
                    ? "bg-slate-50 border-brand-purple/30 ring-1 ring-brand-purple/10"
                    : "bg-white border-slate-200 opacity-80"
                }`}
              >
                <div className="flex items-start gap-3">
                  {n.type === 'warning' ? (
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  ) : n.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">{n.title}</span>
                      {n.unread && (
                        <span className="w-2 h-2 rounded-full bg-brand-orange" />
                      )}
                    </div>
                    <p className="text-xs text-slate-600 mt-1">{n.text}</p>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-semibold whitespace-nowrap">{n.time}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
