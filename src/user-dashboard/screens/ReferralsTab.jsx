"use client";

import { useState, useEffect } from "react";
import { Share2, Copy, Mail, CheckCircle2, Gift, Plus, Loader2 } from "lucide-react";
import { getReferrals, createReferral } from "../../services/api";
import GlobalTable from "../../components/common/GlobalTable";

export default function ReferralsTab({ user }) {
  const [referrals, setReferrals] = useState([]);
  const [copied, setCopied] = useState(false);
  const [inviteName, setInviteName] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  const referralCode = user?.referralId || "IRS-2024-REF";

  const fetchReferralList = async () => {
    try {
      const res = await getReferrals();
      if (res && res.success && Array.isArray(res.data)) {
        setReferrals(res.data);
      }
    } catch (err) {
      console.error("Error fetching referrals:", err);
    }
  };

  useEffect(() => {
    fetchReferralList();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendInvite = async (e) => {
    e.preventDefault();
    if (!inviteEmail) return;

    setLoading(true);
    setMsg({ type: "", text: "" });
    try {
      const res = await createReferral({
        referredName: inviteName || "Invited Friend",
        referredEmail: inviteEmail,
        referralCode: referralCode,
      });

      if (res && res.success) {
        setMsg({ type: "success", text: `Invitation sent to ${inviteEmail}!` });
        setInviteName("");
        setInviteEmail("");
        fetchReferralList();
      } else {
        setMsg({ type: "error", text: res?.message || "Failed to create referral" });
      }
    } catch (err) {
      setMsg({ type: "error", text: "Failed to send referral." });
    } finally {
      setLoading(false);
    }
  };

  const mailtoUrl = `mailto:${inviteEmail || ''}?subject=Tax Filing Special Offer&body=Use my Ananya Tax Co referral code ${referralCode} to get $50 reward on your tax filing!`;

  const totalEarned = referrals.filter(r => r.rewardStatus === 'paid' || r.referralStatus === 'completed').length * 50;
  const completedCount = referrals.filter(r => r.referralStatus === 'completed').length;

  const columns = [
    {
      header: "Referred Contact",
      accessor: "referredName",
      cellClassName: "font-bold text-slate-900",
    },
    {
      header: "Email",
      accessor: "referredEmail",
      cellClassName: "text-slate-600",
    },
    {
      header: "Status",
      cell: (ref) => (
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold capitalize ${
          ref.referralStatus === 'completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
        }`}>
          {ref.referralStatus || 'pending'}
        </span>
      ),
    },
    {
      header: "Reward Amount",
      cell: (ref) => (
        <span className="font-bold text-slate-900">${ref.rewardAmount || 50}</span>
      ),
    },
    {
      header: "Payout Status",
      cell: (ref) => (
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
          ref.rewardStatus === 'paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
        }`}>
          {ref.rewardStatus || 'pending'}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-black text-slate-900 font-heading">Referral & Rewards Program</h2>
          <p className="text-xs text-slate-500 mt-1">Share your unique referral code with friends and family. Earn $50 for every completed tax return!</p>
        </div>

        {/* Code & Metrics Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-purple to-slate-900 text-white space-y-3 md:col-span-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">Your Referral Code</span>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2.5 rounded-xl bg-white/10 font-mono font-black text-lg text-white border border-white/20 tracking-wider">
                {referralCode}
              </div>
              <button
                onClick={copyToClipboard}
                className="p-3 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-brand-orange/30"
              >
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy Code"}</span>
              </button>
            </div>
            <p className="text-xs text-slate-300">Share this code with your contacts or generate a direct email invite below.</p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800">Total Rewards Earned</span>
              <Gift className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-900 font-heading">${totalEarned}</div>
              <div className="text-[11px] text-emerald-700 font-semibold mt-1">{completedCount} Completed Filings</div>
            </div>
          </div>
        </div>

        {msg.text && (
          <div className={`p-4 rounded-2xl text-xs font-bold flex items-center gap-2 ${
            msg.type === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"
          }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{msg.text}</span>
          </div>
        )}

        {/* Create Referral Form */}
        <form onSubmit={handleSendInvite} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-orange" />
            <span>Send Direct Referral Invitation</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700">Friend's Name</label>
              <input
                type="text"
                value={inviteName}
                onChange={(e) => setInviteName(e.target.value)}
                className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700">Friend's Email Address</label>
              <input
                type="email"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                placeholder="jane@example.com"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <a
              href={mailtoUrl}
              className="text-xs font-bold text-brand-purple hover:underline flex items-center gap-1"
            >
              <Share2 className="w-4 h-4" /> Open Email Client with Mailto Link
            </a>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
              <span>Send Invite</span>
            </button>
          </div>
        </form>

        {/* Referrals List Table */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b pb-2">Referrals Tracked ({referrals.length})</h3>
          <GlobalTable
            columns={columns}
            data={referrals}
            getRowKey={(ref) => ref._id || ref.id}
            enablePagination={true}
            defaultPageSize={5}
            searchable={true}
            searchPlaceholder="Search referrals..."
            emptyMessage="No referrals tracked yet. Send your first invite above!"
          />
        </div>
      </div>
    </div>
  );
}
