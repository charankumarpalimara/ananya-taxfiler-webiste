"use client";

import { DollarSign, ExternalLink } from "lucide-react";
import GlobalTable from "../../components/common/GlobalTable";

export default function TaxRefundTab() {
  const refundCards = [
    { title: "IRS Federal Tax Refund", amount: "$3,420", status: "Approved - E-Deposit Processing", estDate: "Oct 8, 2026", color: "bg-emerald-50 text-emerald-900 border-emerald-200" },
    { title: "State Tax Refund", amount: "$850", status: "Processing with State Treasury", estDate: "Oct 12, 2026", color: "bg-blue-50 text-blue-900 border-blue-200" },
    { title: "Amended Return (1040-X)", amount: "$0", status: "No active amendment filed", estDate: "N/A", color: "bg-slate-50 text-slate-700 border-slate-200" },
  ];

  const refundHistory = [
    { year: "2023", type: "Federal Direct Deposit", amount: "$3,150", date: "Feb 22, 2024", status: "Received" },
    { year: "2023", type: "State Refund Check", amount: "$720", date: "Mar 05, 2024", status: "Received" },
    { year: "2022", type: "Federal Direct Deposit", amount: "$2,890", date: "Feb 18, 2023", status: "Received" },
  ];

  const columns = [
    {
      header: "Tax Year",
      accessor: "year",
      cellClassName: "font-bold text-slate-900",
    },
    {
      header: "Refund Type",
      accessor: "type",
      cellClassName: "text-slate-700",
    },
    {
      header: "Amount",
      accessor: "amount",
      cellClassName: "font-bold text-emerald-600",
    },
    {
      header: "Received Date",
      accessor: "date",
      cellClassName: "text-slate-500",
    },
    {
      header: "Status",
      cell: (rh) => (
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
          {rh.status}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-900 font-heading">Tax Refund Tracking</h2>
            <p className="text-xs text-slate-500 mt-1">Real-time status of Federal, State, and 1040-X Amended tax refunds.</p>
          </div>
          <a
            href="https://www.irs.gov/refunds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-purple hover:bg-brand-purple-dark text-white font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            <span>IRS "Where's My Refund?" Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {refundCards.map((c, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border ${c.color} space-y-4 shadow-sm`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider">{c.title}</span>
                <DollarSign className="w-5 h-5 opacity-75" />
              </div>
              <div>
                <div className="text-3xl font-black font-heading">{c.amount}</div>
                <div className="text-xs font-semibold mt-1 opacity-90">{c.status}</div>
              </div>
              <div className="pt-3 border-t border-black/10 text-[11px] font-bold flex items-center justify-between">
                <span>Estimated Deposit:</span>
                <span>{c.estDate}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Refund History Log */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Historical Refund Deposit Log</h3>
          <GlobalTable
            columns={columns}
            data={refundHistory}
            getRowKey={(rh, idx) => `${rh.year}-${rh.type}-${idx}`}
            enablePagination={true}
            defaultPageSize={5}
            emptyMessage="No historical refund deposit records available."
          />
        </div>
      </div>
    </div>
  );
}
