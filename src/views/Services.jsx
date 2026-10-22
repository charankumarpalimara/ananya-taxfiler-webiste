"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SEO from "../components/SEO";
import {
  FileText,
  BookOpen,
  CreditCard,
  Globe,
  TrendingUp,
  Building2,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Maximize2,
  X,
  Layers,
  Clock,
  Shield,
  HelpCircle
} from "lucide-react";

export const allServicesList = [
  {
    id: "us-tax-filing",
    category: "tax",
    isCore: true,
    number: "01",
    title: "US Tax Filing",
    subtitle: "Individual & Business Tax Preparation",
    desc: "Complete Federal (Form 1040, 1120, 1120-S, 1065) and 50-state tax return preparation, itemized deductions, schedule filings, and maximum refund optimization.",
    icon: FileText,
    badge: "Most Requested",
    route: "/taxes",
    detailRoute: "/taxes",
    points: [
      "Individual Form 1040 (W-2, 1099, Investments, Rentals)",
      "Business Tax (LLC, S-Corp 1120-S, C-Corp 1120, Partnerships)",
      "Multi-State Apportionment & State Return Filings",
      "100% Accuracy Guarantee & Complete IRS E-Filing Support"
    ]
  },
  {
    id: "bookkeeping",
    category: "accounting",
    isCore: true,
    number: "02",
    title: "Bookkeeping",
    subtitle: "Accurate & Affordable Bookkeeping Services",
    desc: "Dependable monthly ledger reconciliation, QuickBooks setup & cleanup, real-time expense categorization, and executive financial statements.",
    icon: BookOpen,
    badge: "Accurate & Affordable",
    route: "/bookkeeping",
    detailRoute: "/bookkeeping",
    points: [
      "Monthly Bank & Credit Card Reconciliations",
      "QuickBooks Online & Desktop Setup / Clean-Up",
      "P&L, Balance Sheet & Cash Flow Reporting",
      "Audit-Ready Financials & Year-End Tax Prep"
    ]
  },
  {
    id: "itin-application",
    category: "compliance",
    isCore: true,
    number: "03",
    title: "ITIN Application",
    subtitle: "Start Your ITIN, and Documentation Step Support",
    desc: "Fast-track IRS Form W-7 processing with full documentation step support. Secure your Individual Taxpayer Identification Number smoothly without mailing original passports.",
    icon: CreditCard,
    badge: "Form W-7",
    route: "/contact",
    detailRoute: "/contact",
    points: [
      "Official IRS Form W-7 Preparation & Review",
      "Step-by-Step Documentation & ID Verification Support",
      "In-House Passport Verification (No Original Mailing)",
      "ITIN for Dependents, Non-Resident Spouses & Investors"
    ]
  },
  {
    id: "fbar-fatca",
    category: "compliance",
    isCore: true,
    number: "04",
    title: "FBAR & FATCA",
    subtitle: "Tax Filing Assistance & Compliance Support",
    desc: "Mandatory annual reporting and tax filing assistance for U.S. taxpayers holding foreign bank accounts, offshore investments, or foreign financial assets exceeding statutory limits.",
    icon: Globe,
    badge: "Global Compliance",
    route: "/taxes",
    detailRoute: "/taxes",
    points: [
      "FinCEN Form 114 (FBAR) Electronic Filing ($10k+ aggregate)",
      "IRS Form 8938 (FATCA) Foreign Assets Disclosure",
      "Peak Balance Calculations & Currency Conversion",
      "Streamlined Compliance & Penalty Relief Guidance"
    ]
  },
  {
    id: "tax-planning",
    category: "tax",
    isCore: true,
    number: "05",
    title: "Tax Planning",
    subtitle: "Strategic Planning for Maximum Savings",
    desc: "Proactive, customized tax strategies designed to reduce your effective tax rate legally, maximize deductions and credits, and keep more money in your business.",
    icon: TrendingUp,
    badge: "Maximum Savings",
    route: "/contact",
    detailRoute: "/contact",
    points: [
      "Proactive Pre-Year-End Tax Minimization Plans",
      "S-Corp Salary & Reasonable Compensation Audits",
      "Section 179 & Bonus Depreciation Planning",
      "Retirement & Long-Term Wealth Preservation Advisory"
    ]
  }
];

const categoryTabs = [
  { id: "all", label: "All Services (5)" },
  { id: "tax", label: "US Tax Filing & Planning" },
  { id: "accounting", label: "Bookkeeping Services" },
  { id: "compliance", label: "ITIN & FBAR/FATCA" }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("all");
  const [showFlyerModal, setShowFlyerModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredServices = allServicesList.filter((service) => {
    if (activeTab === "all") return true;
    return service.category === activeTab;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      <SEO
        title="Accounting & Tax Services | Ananya Tax Co"
        description="Comprehensive financial solutions including individual & business tax preparation, bookkeeping, payroll management, IRS audit defense, and strategic tax planning across all 50 states."
        keywords="CPA accounting services, professional tax services, tax filing packages, business accounting solutions, payroll services, bookkeeping options, CPA consultation, tax relief"
      />

      {/* ── SINGLE UNIFIED HERO SECTION ──────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A0D14] via-[#121722] to-[#0A0D14] text-white pt-32 pb-20 lg:pt-36 lg:pb-24">

        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-orange rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-amber-500 rounded-full blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6 font-heading"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ANANYA TAX CO • OUR SERVICES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 font-heading leading-tight max-w-4xl mx-auto"
          >
            Your Trusted Partner For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-brand-gold">
              US Tax & Business Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-10"
          >
            "We handle the numbers, you focus on growing your business." Explore our dedicated service offerings: US Tax Filing, Bookkeeping, ITIN Application, FBAR & FATCA Compliance, and Strategic Tax Planning.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300 font-medium"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-orange" />
              All 50 US States Covered
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-orange" />
              IRS Form W-7 In-House Verification
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-orange" />
              100% Accuracy Guarantee
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-orange" />
              Direct Senior Advisor Access
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── SINGLE UNIFIED SERVICES CATALOG SECTION ─────────────── */}
      <section id="services-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-20">

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold font-heading transition-all duration-200 cursor-pointer ${isActive
                  ? "bg-brand-primary text-white shadow-lg border border-brand-accent/40 ring-2 ring-brand-accent/20"
                  : "bg-white text-text-mid hover:text-brand-primary border border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: (index % 3) * 0.05 }}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1 relative"
                >
                  <div className="p-7">
                    {/* Top Header with Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-brand-orange to-amber-600 flex items-center justify-center text-white shadow-lg shadow-brand-orange/25 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 border border-brand-orange/25 px-3 py-1 rounded-full font-heading">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-3">
                      <div className="text-xs font-bold text-brand-orange uppercase tracking-widest font-heading mb-1">
                        {service.number} • Service
                      </div>
                      <h3 className="text-xl font-extrabold text-brand-primary font-heading group-hover:text-brand-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-text-mid/80 font-heading mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-text-mid leading-relaxed mb-5 font-sans">
                      {service.desc}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 border-t border-slate-100 pt-4">
                      {service.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-text-mid font-sans">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={service.detailRoute || service.route}
                      className="text-xs font-bold text-brand-primary hover:text-brand-accent flex items-center gap-1.5 transition-colors font-heading"
                    >
                      <span>Explore Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="btn-orange text-xs !px-4 !py-2 font-bold shadow-sm font-heading rounded-xl"
                    >
                      Book Consult
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* ── OFFICIAL PRACTICE FLYER & SENIOR ADVISOR SHOWCASE ─────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-black border border-brand-orange/30 p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Official Poster Preview */}
            <div
              className="lg:col-span-5 relative group cursor-pointer"
              onClick={() => setShowFlyerModal(true)}
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                <img
                  src="/services.jpeg"
                  alt="Ananya Tax Co - Official Services Overview"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold font-heading">
                  <Maximize2 className="w-4 h-4 text-brand-orange" />
                  <span>Click to Expand Poster</span>
                </div>
              </div>
              <div className="text-center mt-3">
                <span className="text-xs text-slate-400 font-medium inline-flex items-center gap-1.5 hover:text-brand-orange transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  Official Ananya Tax Co Practice Flyer
                </span>
              </div>
            </div>

            {/* Right Column: Advisor Details & Direct Booking */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3 font-heading">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Direct Senior Advisor Access</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-2">
                  Annachi Pradeep
                </h3>
                <p className="text-amber-400 font-bold text-sm font-heading mb-4">
                  Senior US Tax & Business Solutions Specialist • Ananya Tax Co
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                  "We handle the numbers, you focus on growing your business. Whether you need individual 1040 filing, corporate bookkeeping, ITIN issuance without mailing your passport, or FBAR/FATCA offshore compliance, our certified team is ready to assist you."
                </p>

                {/* Direct Contact Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <a
                    href="tel:+13318404241"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-brand-orange/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Direct Phone</div>
                      <div className="text-xs font-bold text-white group-hover:text-brand-orange transition-colors">
                        +1 (331) 840-4241
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:annachi.pradeep@ananyataxco.com"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-brand-orange/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Advisor Email</div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors truncate max-w-[200px] sm:max-w-none">
                        annachi.pradeep@ananyataxco.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
                <Link
                  href="/contact"
                  className="btn-orange !py-3.5 !px-8 text-sm font-bold rounded-2xl shadow-xl shadow-brand-orange/20 cursor-pointer"
                >
                  Book Free Consultation Today
                </Link>
                <a
                  href="tel:+13318404241"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-bold font-heading transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call +1 (331) 840-4241</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4-STEP PROCESS WORKFLOW ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-tag !mb-3">Seamless Execution</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary mb-3 font-heading tracking-tight">
            How We Work With You
          </h2>
          <p className="text-text-mid text-xs sm:text-sm lg:text-base font-sans font-normal">
            Our 4-step onboarding workflow ensures zero hassle, maximum precision, and full transparency from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Free Strategy Intake",
              desc: "Discuss your tax filing, corporate setup, or bookkeeping needs with an advisor to identify maximum savings."
            },
            {
              step: "02",
              title: "Encrypted Upload",
              desc: "Upload W-2s, 1099s, bank statements, or ID documents safely to our 256-bit secure client repository."
            },
            {
              step: "03",
              title: "CPA Preparation",
              desc: "Licensed professionals review, reconcile, and draft your complete returns and financial records."
            },
            {
              step: "04",
              title: "Line Review & E-File",
              desc: "We walk you through every deduction before direct electronic submission with IRS and state authorities."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-3xl p-7 shadow-premium hover:shadow-premium-hover transition-all duration-300 relative group"
            >
              <div className="text-4xl font-extrabold text-brand-accent font-heading mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-brand-primary mb-2 font-heading">
                {item.title}
              </h3>
              <p className="text-xs text-text-mid leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING CTA BANNER ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-gradient-to-r from-brand-accent via-brand-gold to-brand-accent rounded-3xl p-8 sm:p-12 lg:p-16 text-brand-primary text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primary mb-4 font-heading">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-brand-primary/90 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-sans font-semibold">
            Contact Ananya Tax Co today. Speak directly with a Senior Tax Specialist and get your taxes or corporate compliance handled accurately and on time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-brand-primary text-white font-bold px-9 py-4 rounded-2xl shadow-xl hover:bg-brand-secondary transition-all cursor-pointer font-heading text-sm sm:text-base flex items-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 text-brand-accent" />
            </Link>
            <a
              href="tel:+13318404241"
              className="bg-white text-brand-primary font-bold px-9 py-4 rounded-2xl shadow-lg hover:bg-slate-50 transition-all font-heading text-sm sm:text-base flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-accent" />
              Call +1 (331) 840-4241
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for services.jpeg flyer */}
      <AnimatePresence>
        {showFlyerModal && (
          <div
            onClick={() => setShowFlyerModal(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-2"
            >
              <button
                onClick={() => setShowFlyerModal(false)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src="/services.jpeg"
                alt="Ananya Tax Co Services"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div >
  );
}
