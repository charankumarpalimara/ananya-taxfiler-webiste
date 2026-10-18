"use client";

import { Download, FileText } from "lucide-react";
import GlobalTable from "../../components/common/GlobalTable";

export default function FinalReportsTab() {
  const reports = [
    { year: "2024", type: "Form 1040 (Federal Draft)", filedDate: "Pending Final Approval", status: "Ready for Review", size: "2.4 MB", url: "#" },
    { year: "2023", type: "Form 1040 (Federal Complete)", filedDate: "Feb 15, 2024", status: "Filed & Accepted", size: "3.1 MB", url: "#" },
    { year: "2023", type: "State Tax Return (Form 540)", filedDate: "Feb 15, 2024", status: "Filed & Accepted", size: "1.8 MB", url: "#" },
    { year: "2022", type: "Form 1040 (Federal Complete)", filedDate: "Feb 10, 2023", status: "Filed & Accepted", size: "2.9 MB", url: "#" },
    { year: "2021", type: "Form 1040 (Federal Complete)", filedDate: "Feb 12, 2022", status: "Filed & Accepted", size: "2.7 MB", url: "#" },
  ];

  const handleDownloadReport = (type, year) => {
    alert(`Initiating secure download of ${type} for Tax Year ${year}...`);
  };

  const columns = [
    {
      header: "Tax Year",
      accessor: "year",
      cellClassName: "font-black text-brand-purple",
    },
    {
      header: "Document / Return Type",
      cell: (r) => (
        <div className="font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-4 h-4 text-brand-orange shrink-0" />
          <span>{r.type}</span>
        </div>
      ),
    },
    {
      header: "IRS Filing Date",
      accessor: "filedDate",
      cellClassName: "text-slate-600",
    },
    {
      header: "Status",
      cell: (r) => (
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
          r.status === 'Filed & Accepted' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
        }`}>
          {r.status}
        </span>
      ),
    },
    {
      header: "File Size",
      accessor: "size",
      cellClassName: "text-slate-500 font-mono text-[11px]",
    },
    {
      header: "Download",
      align: "right",
      cell: (r) => (
        <button
          onClick={() => handleDownloadReport(r.type, r.year)}
          className="px-3.5 py-1.5 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 ml-auto cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download PDF</span>
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-black text-slate-900 font-heading">Final Tax Reports & Filings</h2>
          <p className="text-xs text-slate-500 mt-1">Access and download finalized IRS Form 1040s, State Returns, and Audit Protection copies.</p>
        </div>

        <GlobalTable
          columns={columns}
          data={reports}
          getRowKey={(r, idx) => `${r.year}-${r.type}-${idx}`}
          enablePagination={true}
          defaultPageSize={5}
          emptyMessage="No final tax reports available yet."
        />
      </div>
    </div>
  );
}
