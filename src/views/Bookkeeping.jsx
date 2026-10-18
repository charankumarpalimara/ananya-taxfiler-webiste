"use client";

import { motion } from "framer-motion";
import SEO from "../components/SEO";
import {
  CheckCircle2,
  ArrowRight,
  BarChart2,
  FileText,
  Clock,
  ShieldCheck,
  TrendingUp,
  Users,
  Sparkles,
  DollarSign,
  PieChart,
  Download,
  CreditCard,
  ArrowUpRight,
  Layers,
  Phone,
  Calendar,
  Star
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    num: "01",
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Expert Transaction Categorization",
    description: "Every dollar is meticulously tracked, verified, and mapped according to standard IRS charts of accounts.",
    highlights: ["IRS Chart of Accounts", "Zero Uncategorized Backlog"]
  },
  {
    num: "02",
    icon: <FileText className="w-6 h-6" />,
    title: "Monthly P&L & Balance Sheets",
    description: "Gain actionable financial visibility with executive-ready Profit & Loss statements and Balance Sheets delivered on schedule.",
    highlights: ["Executive P&L Reports", "Balance Sheet Analysis"]
  },
  {
    num: "03",
    icon: <Clock className="w-6 h-6" />,
    title: "Daily & Weekly Bank Reconciliation",
    description: "Zero backlog. We reconcile your bank accounts, credit cards, and payment processors in real time.",
    highlights: ["Bank & Credit Cards", "Stripe, Square & PayPal"]
  },
  {
    num: "04",
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "100% Tax-Ready Ledgers",
    description: "Eliminate year-end chaos. Your records are maintained in audit-proof, tax-ready format all 12 months.",
    highlights: ["Audit-Proof Ledgers", "Zero April Surprises"]
  },
  {
    num: "05",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Cash Flow & Growth Advisory",
    description: "Understand your unit economics, burn rate, and profit margins with direct CPA financial analysis.",
    highlights: ["Profit Margin Insights", "Runway & Cash Forecasting"]
  },
  {
    num: "06",
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Texas CPA Team",
    description: "Direct one-on-one access to certified CPAs who understand your specific industry and state compliance.",
    highlights: ["Direct CPA Support", "2-Hour Response SLA"]
  },
];

const stats = [
  { value: "$25M+", label: "Transactions Reconciled", desc: "Across US Businesses" },
  { value: "99.9%", label: "Accuracy Rate", desc: "Audit-Proof Ledgers" },
  { value: "500+", label: "Active Businesses", desc: "Trust Our CPAs" },
  { value: "< 24hr", label: "Response Time", desc: "Dedicated Advisory" },
];

const sampleTransactions = [
  { name: "Stripe Online Sales", cat: "Revenue", amount: "+$12,450.00", date: "Today", positive: true },
  { name: "AWS Cloud Servers", cat: "SaaS & Ops", amount: "-$840.00", date: "Yesterday", positive: false },
  { name: "Client Retainer Direct Deposit", cat: "Consulting", amount: "+$8,900.00", date: "2 days ago", positive: true },
  { name: "Payroll & Contractor Payout", cat: "Operations", amount: "-$5,200.00", date: "3 days ago", positive: false },
];

export default function Bookkeeping() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <SEO
        title="Professional Bookkeeping & Financial Reporting | Ananya Tax Co"
        description="Keep your business finances accurate and audit-ready with monthly bookkeeping, QuickBooks setup, financial statements, and bank reconciliation by CPAs."
        keywords="small business bookkeeping, QuickBooks accounting services, monthly financial statements, bank reconciliation, ledger cleanup, CPA bookkeeping firm, chart of accounts, P&L reporting"
      />

      {/* ── HERO SECTION ─────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-white">
        {/* Soft Ambient Brand Glows */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-brand-accent/8 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content Column (7 cols on lg) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              {/* Section Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 border border-brand-primary/20 mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                <span>Accurate & Real-Time Bookkeeping</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-purple tracking-tight mb-6 leading-[1.12] font-heading">
                Crystal-Clear Books,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-green-light to-brand-secondary">
                  Zero Tax Surprises
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-text-mid mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Never stress over receipts or disorganized ledgers again. Our CPA-led team automates transaction categorization, daily reconciliations, and provides executive P&L statements tailored for growing businesses.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-accent to-brand-green-dark hover:from-brand-green-light hover:to-brand-accent rounded-xl shadow-lg shadow-brand-accent/25 hover:shadow-xl transition-all duration-300 cursor-pointer group active:scale-95"
                >
                  Schedule Free Bookkeeping Review
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-brand-primary bg-white border border-[#DCE6F2] hover:border-brand-secondary/40 rounded-xl hover:bg-brand-primary/5 transition-all shadow-sm"
                >
                  Explore Capabilities
                </a>
              </div>

              {/* Trust Value Points Card Container */}
              <div className="bg-white border border-[#DCE6F2] hover:border-brand-secondary/40 rounded-lg p-4 sm:p-5 shadow-sm transition-all duration-300 mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left">
                  {[
                    "QuickBooks & Xero Pro",
                    "Monthly P&L & Balance Sheet",
                    "100% Tax-Ready Ledgers",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-text-dark font-sans">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200/70 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Financial Command Center (5 cols on lg) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Dashboard Container */}
              <div className="bg-white border border-[#DCE6F2] rounded-3xl p-6 sm:p-7 shadow-2xl shadow-brand-primary/10 relative overflow-hidden">
                {/* Header of Command Center */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#DCE6F2]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-sm shadow-md shadow-brand-primary/20">
                      <PieChart className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-brand-purple font-heading leading-tight">Financial Command Hub</h3>
                      <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live Synchronized & Reconciled
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2.5 py-1 rounded-full">
                    Q3 2024
                  </span>
                </div>

                {/* KPI Metrics Cards */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3.5 bg-brand-light border border-[#DCE6F2] rounded-2xl">
                    <span className="text-[10px] font-bold text-text-light uppercase tracking-wider block mb-1">
                      Net Monthly Profit
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-extrabold text-brand-purple font-heading">$48,290</span>
                      <span className="text-[11px] font-bold text-emerald-600 flex items-center">
                        <ArrowUpRight className="w-3 h-3" /> +28.4%
                      </span>
                    </div>
                  </div>
                  <div className="p-3.5 bg-brand-light border border-[#DCE6F2] rounded-2xl">
                    <span className="text-[10px] font-bold text-text-light uppercase tracking-wider block mb-1">
                      Reconciliation
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-extrabold text-brand-accent font-heading">100%</span>
                      <span className="text-[11px] font-medium text-text-mid">Clean</span>
                    </div>
                  </div>
                </div>

                {/* Live Transactions Feed */}
                <div className="space-y-2.5 mb-5">
                  <div className="flex items-center justify-between text-xs font-bold text-text-light uppercase tracking-wider mb-2 font-heading">
                    <span>Recent Categorized Entries</span>
                    <span className="text-brand-secondary font-sans font-semibold text-[11px]">Auto-Synced</span>
                  </div>
                  {sampleTransactions.map((tx, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 bg-white border border-[#DCE6F2] hover:border-brand-secondary/40 rounded-xl transition-colors text-xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${tx.positive ? "bg-emerald-50 text-emerald-600 border border-emerald-200/60" : "bg-blue-50 text-brand-primary border border-blue-200/60"
                          }`}>
                          {tx.positive ? <DollarSign className="w-3.5 h-3.5" /> : <CreditCard className="w-3.5 h-3.5" />}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-brand-purple truncate text-xs">{tx.name}</p>
                          <span className="text-[10px] text-text-light">{tx.cat} • {tx.date}</span>
                        </div>
                      </div>
                      <span className={`font-bold font-heading shrink-0 text-xs ${tx.positive ? "text-emerald-600" : "text-text-dark"
                        }`}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Report Ready Card */}
                <div className="p-3 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 border border-[#DCE6F2] rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-brand-primary" />
                    <div>
                      <p className="font-bold text-xs text-brand-purple font-heading">Monthly P&L Report Generated</p>
                      <p className="text-[10px] text-text-mid font-sans">Ready for CPA Tax Filing & Audit</p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-white shadow-sm border border-[#DCE6F2] flex items-center justify-center text-brand-primary shrink-0">
                    <Download className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Floating Highlight Badge 1 (Top Right) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white border border-[#DCE6F2] rounded-2xl p-3 shadow-xl hidden sm:flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-brand-purple font-heading">Audit-Proof Guaranteed</p>
                  <p className="text-[10px] text-text-light font-sans">CPA Verified Standard</p>
                </div>
              </motion.div>

              {/* Floating Highlight Badge 2 (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white border border-[#DCE6F2] rounded-2xl p-3 shadow-xl hidden sm:flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-brand-purple font-heading">QuickBooks & Xero Synced</p>
                  <p className="text-[10px] text-emerald-600 font-semibold font-sans">Real-time Bank Feeds</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="py-12 border-y border-[#DCE6F2] bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#DCE6F2] rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl sm:text-4xl font-black text-brand-primary font-heading mb-1">{s.value}</div>
                <div className="text-brand-purple text-sm font-bold font-heading mb-0.5">{s.label}</div>
                <div className="text-text-light text-xs font-sans">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ────────────────────────────────────── */}
      <section id="features" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 border border-brand-primary/20 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              Comprehensive Bookkeeping Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-4 font-heading">
              Everything Your Business Needs to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-green-light to-brand-secondary">
                Scale Profitably
              </span>
            </h2>
            <p className="text-text-mid text-base sm:text-lg max-w-2xl mx-auto font-sans">
              Precision accounting infrastructure customized for your workflow, tax goals, and reporting needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white border border-[#DCE6F2] hover:border-brand-secondary/50 rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Subtle Ambient Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-brand-secondary/10 to-brand-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Card Header: Icon & Number Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10 border border-[#DCE6F2] flex items-center justify-center text-brand-primary group-hover:bg-gradient-to-br group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:text-white group-hover:scale-105 group-hover:shadow-md transition-all duration-300 shadow-sm shrink-0">
                      {feature.icon}
                    </div>
                    <span className="font-mono text-xs font-extrabold text-brand-primary/70 bg-brand-primary/5 border border-brand-primary/15 px-3 py-1 rounded-full shrink-0">
                      {feature.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-brand-purple font-heading group-hover:text-brand-secondary transition-colors mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-text-mid text-sm leading-relaxed font-sans mb-6">
                    {feature.description}
                  </p>

                  {/* Feature Highlights Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {feature.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brand-light border border-[#DCE6F2] text-[11px] font-semibold text-text-dark font-sans"
                      >
                        <CheckCircle2 className="w-3 h-3 text-brand-accent shrink-0" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Interactive Included Badge */}
                <div className="flex items-center justify-between pt-4 border-t border-[#DCE6F2]/70 mt-auto">
                  <span className="text-xs font-bold font-heading text-brand-primary group-hover:text-brand-accent transition-colors flex items-center gap-1">
                    CPA Managed Standard
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-light group-hover:bg-brand-primary group-hover:text-white flex items-center justify-center text-text-light transition-all shadow-sm">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="pb-24 pt-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#0C3474] via-[#1455B8] to-[#08224D] rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/15 text-white"
          >
            {/* Ambient Multi-layer Glows */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-brand-secondary/25 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-white/10 border border-white/20 mb-6 backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                <span>Free 30-Minute Financial Assessment</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 font-heading tracking-tight leading-[1.15]">
                Ready to Simplify Your Bookkeeping &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-green-light to-white">
                  Maximize Profits?
                </span>
              </h2>

              {/* Description */}
              <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto font-sans leading-relaxed">
                Connect directly with our Texas-licensed CPAs. We'll clean up historical accounts, automate your software sync, and ensure your business is permanently tax-ready.
              </p>

              {/* Value Highlight Pills */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10 text-xs sm:text-sm font-semibold text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Zero Setup Fees & No Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>100% CPA Accuracy Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>24-Hour Onboarding</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-accent to-brand-green-dark hover:from-brand-green-light hover:to-brand-accent rounded-xl shadow-lg shadow-brand-accent/30 hover:shadow-xl transition-all duration-300 cursor-pointer group active:scale-95"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+13348404241"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl backdrop-blur-md transition-all shadow-sm active:scale-95"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand-accent" />
                  Call: +1 (334) 840-4241
                </a>
              </div>

              {/* Social Proof Trust Ribbon */}
              <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70 font-sans">
                <div className="flex items-center gap-1 text-amber-300 font-semibold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  ))}
                  <span className="ml-1 text-white font-medium">4.9/5 Rating</span>
                </div>
                <span className="text-white/20 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-accent" />
                  <span>Bank-Grade 256-Bit Security</span>
                </div>
                <span className="text-white/20 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-accent" />
                  <span>Response in &lt; 2 Hours</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

