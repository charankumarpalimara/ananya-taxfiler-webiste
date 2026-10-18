"use client";

import { motion } from "framer-motion";
import { FileText, Building2, BadgePercent, CheckCircle, HelpCircle, Sparkles, ChevronRight } from "lucide-react";
import { useState } from "react";

const deliverables = [
  {
    title: "Income Tax Returns",
    description: "Comprehensive federal, state, and local income tax preparation for individuals and business entities.",
    icon: <FileText className="w-6 h-6" />,
    tag: "Individual & Business",
    items: [
      "Form 1040 (Schedule C/E/F): For sole proprietors, partners, and single-member LLCs.",
      "Form 1120: For C corporations with full multi-state apportionment.",
      "Form 1120-S: For S corporations and K-1 shareholder distributions.",
      "State and Local Income Tax Returns: Complete multi-state compliance and filing."
    ]
  },
  {
    title: "Employment & Payroll Taxes",
    description: "Manage team compensation, federal withholdings, and quarterly employment tax filings.",
    icon: <Building2 className="w-6 h-6" />,
    tag: "Payroll Compliance",
    items: [
      "Form 941 / 944: Employer's quarterly and annual federal tax return for wages.",
      "Form 940: Federal Unemployment Tax (FUTA) returns and state unemployment filings.",
      "Form W-2 & W-3: Annual wage and tax statement generation for employees.",
      "Form 1099-NEC & 1099-MISC: Independent contractor compensation statements."
    ]
  },
  {
    title: "Sales and Use Tax",
    description: "Stay fully compliant with nexus guidelines and local sales tax remittance.",
    icon: <BadgePercent className="w-6 h-6" />,
    tag: "Multi-State Nexus",
    items: [
      "Sales Tax Returns: Monthly, quarterly, or annual filings tailored to state requirements.",
      "Use Tax Filings: Out-of-state asset and equipment purchase tax reconciliation.",
      "E-Commerce Nexus Audits: Multi-state revenue threshold tracking for online stores."
    ]
  },
  {
    title: "Specialized Compliance & Filings",
    description: "Additional statutory filings to keep your business in good standing year-round.",
    icon: <HelpCircle className="w-6 h-6" />,
    tag: "Statutory Reporting",
    items: [
      "Estimated Quarterly Payments: Calculation and submission to prevent IRS underpayment penalties.",
      "BOI (Beneficial Ownership Information) Reports: FinCEN compliance for registered entities.",
      "Franchise Tax & Annual Reports: State business license renewals and corporate standing.",
      "Bookkeeping Ledgers: Reconciled trial balance, income statement, and balance sheet documentation."
    ]
  }
];

export default function Deliverables() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="deliverables" className="py-10 bg-white relative overflow-hidden">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none bg-[linear-gradient(to_right,#EDF2F7_1px,transparent_1px),linear-gradient(to_bottom,#EDF2F7_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="section-tag inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span>Forms & Deliverables</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight font-heading leading-[1.15] mb-4">
            <span className="text-brand-primary">Comprehensive Tax & Accounting</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-green-light to-brand-secondary font-bold">
              Deliverables & Filings.
            </span>
          </h2>

          <p className="text-text-mid text-base sm:text-lg font-sans leading-relaxed">
            We handle the numbers, you focus on growing your business. Our certified team handles every compliance detail with precision.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left Sidebar Cards Container (Horizontal Scroll on Mobile, Vertical Stack on Desktop) */}
          <div className="w-full lg:w-4/12 flex flex-row overflow-x-auto pb-2 lg:pb-0 lg:flex-col gap-3 scrollbar-none snap-x">
            {deliverables.map((category, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`shrink-0 lg:shrink min-w-[240px] sm:min-w-[280px] lg:min-w-0 lg:w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer relative overflow-hidden snap-start ${isActive
                    ? "bg-white border-brand-primary shadow-lg ring-1 ring-brand-primary/20"
                    : "bg-white border-[#DCE6F2] hover:border-brand-primary/40 hover:shadow-md"
                    }`}
                >
                  {/* Left accent indicator strip for active card */}
                  {isActive && (
                    <motion.div
                      layoutId="deliverable-active-strip"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-brand-accent to-brand-primary"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}

                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl shrink-0 flex items-center justify-center transition-all duration-300 ${isActive
                        ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                        : "bg-[#EDF2F7] text-brand-primary group-hover:bg-brand-primary group-hover:text-white"
                        }`}
                    >
                      {category.icon}
                    </div>

                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-accent-dark mb-0.5 font-heading">
                        {category.tag}
                      </div>
                      <h3
                        className={`text-xs sm:text-sm lg:text-base font-bold font-heading truncate transition-colors ${isActive ? "text-brand-primary" : "text-brand-dark group-hover:text-brand-primary"
                          }`}
                      >
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform ${isActive ? "text-brand-primary translate-x-1" : "text-text-light/40 group-hover:text-brand-primary"
                      }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Main Content Card */}
          <div className="w-full lg:w-8/12">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-[#DCE6F2] rounded-lg p-8 sm:p-10 shadow-lg relative overflow-hidden"
            >
              {/* Header inside right card */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-8 mb-8 border-b border-[#DCE6F2]">
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/15 text-brand-primary flex items-center justify-center shrink-0 shadow-sm">
                  {deliverables[activeTab].icon}
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-accent-dark bg-brand-accent/15 border border-brand-accent/25 px-3 py-0.5 rounded-full inline-block mb-2 font-heading">
                    {deliverables[activeTab].tag}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-brand-dark font-heading leading-tight mb-1">
                    {deliverables[activeTab].title}
                  </h3>
                  <p className="text-text-mid font-sans text-sm sm:text-base leading-relaxed">
                    {deliverables[activeTab].description}
                  </p>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deliverables[activeTab].items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: itemIdx * 0.06 }}
                    className="p-5 rounded-2xl bg-[#F7FAFC] border border-[#DCE6F2] hover:border-brand-primary/30 transition-all flex items-start gap-3.5 group shadow-xs"
                  >
                    <div className="w-7 h-7 rounded-lg bg-brand-accent/15 border border-brand-accent/30 text-brand-accent-dark flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                      <CheckCircle className="w-4 h-4 text-brand-accent group-hover:text-white" />
                    </div>
                    <span className="text-text-dark text-xs sm:text-sm font-medium leading-relaxed font-sans">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

