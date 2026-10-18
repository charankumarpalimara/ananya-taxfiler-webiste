"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import GlobalTable from "../../components/common/GlobalTable";

export default function TaxSummaryTab() {
  const [selectedYear, setSelectedYear] = useState("2024");

  const taxHistory = [
    { year: "2024", agi: "$115,000", taxableIncome: "$98,400", deductions: "$16,600", federalTax: "$14,200", stateTax: "$4,850", status: "Drafting", pdfUrl: "#" },
    { year: "2023", agi: "$108,500", taxableIncome: "$94,600", deductions: "$13,900", federalTax: "$13,100", stateTax: "$4,200", status: "Completed", pdfUrl: "#" },
    { year: "2022", agi: "$95,000", taxableIncome: "$82,050", deductions: "$12,950", federalTax: "$11,400", stateTax: "$3,800", status: "Completed", pdfUrl: "#" },
    { year: "2021", agi: "$88,200", taxableIncome: "$75,700", deductions: "$12,550", federalTax: "$10,200", stateTax: "$3,450", status: "Completed", pdfUrl: "#" },
    { year: "2020", agi: "$82,000", taxableIncome: "$69,600", deductions: "$12,400", federalTax: "$9,100", stateTax: "$3,100", status: "Completed", pdfUrl: "#" },
  ];

  const filteredHistory = selectedYear === "ALL" ? taxHistory : taxHistory.filter(h => h.year === selectedYear);

  const columns = [
    {
      header: "Tax Year",
      accessor: "year",
      cellClassName: "font-black text-brand-purple",
    },
    {
      header: "AGI (Gross Income)",
      accessor: "agi",
      cellClassName: "text-slate-900 font-bold",
    },
    {
      header: "Taxable Income",
      accessor: "taxableIncome",
      cellClassName: "text-slate-700",
    },
    {
      header: "Deductions",
      accessor: "deductions",
      cellClassName: "text-slate-700",
    },
    {
      header: "Federal Tax",
      accessor: "federalTax",
      cellClassName: "text-blue-700 font-bold",
    },
    {
      header: "State Tax",
      accessor: "stateTax",
      cellClassName: "text-emerald-700 font-bold",
    },
    {
      header: "Status",
      cell: (item) => (
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
          item.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
        }`}>
          {item.status}
        </span>
      ),
    },
    {
      header: "Action",
      align: "right",
      cell: (item) => (
        <a
          href={item.pdfUrl}
          onClick={(e) => { e.preventDefault(); alert(`Downloading Tax Return Summary PDF for ${item.year}`); }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>PDF Summary</span>
        </a>
      ),
    },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-900 font-heading">Tax Summary & History</h2>
            <p className="text-xs text-slate-500 mt-1">View AGI, Taxable Income, Standard/Itemized Deductions, and Federal & State Tax breakdowns.</p>
          </div>

          {/* Year Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 rounded-2xl bg-slate-100 border border-slate-200/80">
            {["2024", "2023", "2022", "2021", "2020", "ALL"].map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedYear === y
                    ? "bg-brand-orange text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* History Table */}
        <GlobalTable
          columns={columns}
          data={filteredHistory}
          getRowKey={(item) => item.year}
          enablePagination={true}
          defaultPageSize={5}
          emptyMessage="No tax history records found for the selected year."
        />
      </div>
    </div>
  );
}
