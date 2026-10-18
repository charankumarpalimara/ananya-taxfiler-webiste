"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  BookOpen,
  CreditCard,
  Globe,
  TrendingUp,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  ExternalLink,
  X,
  Maximize2
} from "lucide-react";
import { useRegisterModal } from "../context/RegisterModalContext";

export const coreServicesList = [
  {
    id: "us-tax-filing",
    number: "01",
    title: "US TAX FILING",
    subtitle: "Individual & Business Tax Preparation",
    desc: "Complete Federal (Form 1040, 1120, 1120-S, 1065) and 50-state tax return preparation, itemized deductions, schedule filings, and maximum refund optimization.",
    icon: FileText,
    badge: "Most Requested",
    route: "/taxes",
    points: [
      "Individual Form 1040 (W-2, 1099, Investments, Rentals)",
      "Business Tax (LLC, S-Corp 1120-S, C-Corp 1120, Partnerships)",
      "Multi-State Apportionment & State Return Filings",
      "100% Accuracy Guarantee & IRS Audit Support"
    ]
  },
  {
    id: "bookkeeping",
    number: "02",
    title: "BOOKKEEPING",
    subtitle: "Accurate & Affordable Bookkeeping Services",
    desc: "Dependable monthly ledger reconciliation, QuickBooks setup & cleanup, real-time expense categorization, and executive financial statements.",
    icon: BookOpen,
    badge: "Core Service",
    route: "/bookkeeping",
    points: [
      "Monthly Bank & Credit Card Reconciliations",
      "QuickBooks Online & Desktop Setup / Clean-up",
      "P&L, Balance Sheet & Cash Flow Reporting",
      "Audit-Ready Financials & Year-End Tax Prep"
    ]
  },
  {
    id: "itin-application",
    number: "03",
    title: "ITIN APPLICATION",
    subtitle: "Start Your ITIN, and Documentation Step Support",
    desc: "Fast-track IRS Form W-7 processing with complete document verification. Secure your Individual Taxpayer Identification Number smoothly and without mailing original passports.",
    icon: CreditCard,
    badge: "Fast Approval",
    route: "/services/individual-specialized-services",
    points: [
      "Official IRS Form W-7 Preparation & Document Review",
      "In-House ID & Passport Verification (No Original Mailing)",
      "ITIN for Dependents, Non-Resident Spouses & Investors",
      "Fast Turnaround & Synchronized Tax Filing"
    ]
  },
  {
    id: "fbar-fatca",
    number: "04",
    title: "FBAR & FATCA",
    subtitle: "Foreign Tax Filing Assistance & Compliance Support",
    desc: "Mandatory annual reporting for U.S. taxpayers holding foreign bank accounts, offshore investments, or foreign financial assets exceeding statutory limits.",
    icon: Globe,
    badge: "Global Tax",
    route: "/services/individual-specialized-services",
    points: [
      "FinCEN Form 114 (FBAR) Electronic Filing ($10k+ aggregate)",
      "IRS Form 8938 (FATCA) Foreign Assets Disclosure",
      "Peak Balance Calculations & Currency Conversion",
      "Streamlined Compliance for Delinquent Filers"
    ]
  },
  {
    id: "tax-planning",
    number: "05",
    title: "TAX PLANNING",
    subtitle: "Strategic Planning for Maximum Savings",
    desc: "Proactive, forward-looking tax strategies tailored to reduce your effective tax rate legally before year-end through tax credits, deductions, and entity structure optimization.",
    icon: TrendingUp,
    badge: "High ROI",
    route: "/services/tax-strategy-session",
    points: [
      "Proactive Pre-Year-End Tax Minimization Plans",
      "S-Corp Salary & Reasonable Compensation Audits",
      "Section 179 & Bonus Depreciation Planning",
      "Retirement & Wealth Preservation Advisory"
    ]
  },
  {
    id: "business-compliance",
    number: "06",
    title: "BUSINESS COMPLIANCE",
    subtitle: "Entity Formation, FinCEN BOIR & Corporate Standing",
    desc: "End-to-end business formation, FinCEN BOIR beneficial ownership reporting, franchise tax filings, and annual corporate renewals to keep your business in good standing.",
    icon: Building2,
    badge: "All 50 States",
    route: "/forms",
    points: [
      "LLC, S-Corp & C-Corp Formation with EIN Issuance",
      "FinCEN BOIR Mandatory Reporting & Compliance",
      "Annual Reports & State Franchise Tax Filings",
      "Operating Agreements & Good Standing Renewals"
    ]
  }
];

export default function CoreServicesShowcase() {
  const { openRegisterModal } = useRegisterModal();
  const [showFlyerModal, setShowFlyerModal] = useState(false);

  return (
    <section id="services-showcase" className="py-20 bg-slate-900 text-white relative overflow-hidden font-sans">
      {/* Background Glows & Architectural Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-widest mb-4 font-heading"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR CORE SERVICES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading leading-tight"
          >
            Your Trusted Partner For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-brand-gold">
              US Tax & Business Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-sans"
          >
            We handle the numbers, you focus on growing your business. Explore our 6 specialized practice areas.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {coreServicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-brand-orange/50 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-brand-orange/10 hover:-translate-y-1 relative"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-brand-orange to-amber-600 flex items-center justify-center text-white shadow-lg shadow-brand-orange/30 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/25 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <div className="text-xs font-bold text-brand-orange uppercase tracking-widest font-heading mb-1">
                      {service.number} • Service
                    </div>
                    <h3 className="text-xl font-extrabold text-white font-heading group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-400/90 font-heading mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 border-t border-slate-700/60 pt-4 mb-6">
                    {service.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Action */}
                <div className="pt-2">
                  <Link
                    href={service.route}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-700/60 hover:bg-brand-orange text-white text-xs font-bold font-heading uppercase tracking-wider transition-all duration-200 group-hover:shadow-md"
                  >
                    <span>View Service Scope</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Ananya Flyer & Advisor Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-black border border-brand-orange/30 p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Ring */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Official Poster Preview */}
            <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => setShowFlyerModal(true)}>
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
              <div className="text-center mt-2.5">
                <span className="text-[11px] text-slate-400 font-medium inline-flex items-center gap-1.5 hover:text-brand-orange transition-colors">
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
                    href="mailto:info@ananyataxco.com"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-brand-orange/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Official Email</div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors truncate max-w-[170px] sm:max-w-none">
                        info@ananyataxco.com
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
                  Book Your Free Consultation Today
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-bold font-heading transition-colors"
                >
                  <span>Schedule Online Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </motion.div>

      </div>

      {/* Lightbox Modal for services.jpeg flyer */}
      <AnimatePresence>
        {showFlyerModal && (
          <div
            onClick={() => setShowFlyerModal(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
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
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors"
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
    </section>
  );
}
