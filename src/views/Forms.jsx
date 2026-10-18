"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  RefreshCw,
  FileX,
  Clock,
  FileText,
  ShieldCheck,
  UserCheck,
  Copy,
  Check,
  Image as ImageIcon,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Link from "next/link";

const formsList = [
  {
    id: "f-w4",
    title: "Form W-4 (Employee Withholding)",
    formCode: "IRS-W4",
    image: "/images/forms/w4.jpg",
    prompt: "Modern minimalist 3D render illustration of an official U.S. IRS Form W-4 Employee's Withholding Certificate document lying on a clean white desk, with subtle blue vector graphics, tax checkmark badge, and professional financial aesthetic. Clean studio lighting, isometric view, high resolution.",
    icon: FileText,
    accentColor: "from-blue-600 via-sky-500 to-indigo-600",
    badgeStyle: "bg-blue-50 text-blue-700 border-blue-200/80",
    iconBg: "bg-blue-50 text-blue-600",
    fileType: "IRS Federal Form",
    turnaround: "Instant Download / Fill",
    description: "Official IRS Employee's Withholding Certificate used by employers to calculate correct federal income tax withholding from employee paychecks.",
    badge: "Payroll & Tax Withholding",
    highlights: [
      "Step-by-step federal withholding calculations",
      "Multiple jobs & spouse working adjustment",
      "Claiming dependents & tax credits (Step 3)",
      "Exemption status & extra withholding options"
    ]
  },
  {
    id: "f-w2",
    title: "Form W-2 Wage & Tax Filing",
    formCode: "IRS-W2",
    image: "/images/forms/w2.jpg",
    prompt: "Modern 3D render illustration of an official IRS Form W-2 Wage and Tax Statement tax document, with green and navy accents, financial charts icon, calculator on wooden office desk, crisp high resolution studio render.",
    icon: FileText,
    accentColor: "from-emerald-600 via-teal-500 to-sky-600",
    badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    iconBg: "bg-emerald-50 text-emerald-600",
    fileType: "Employer Payroll Return",
    turnaround: "1-2 Days Processing",
    description: "Annual wage and tax statement reporting employee gross earnings, federal income tax withheld, Social Security, Medicare, and state tax contributions.",
    badge: "Annual Tax Statement",
    highlights: [
      "Box 1-6 federal wages & tax withholding",
      "Social Security & Medicare wage verification",
      "SSA E-Filing & electronic employee delivery",
      "State & local tax reporting (Box 15-20)"
    ]
  },
  {
    id: "f-1099nec",
    title: "Form 1099-NEC Contractor Filing",
    formCode: "IRS-1099-NEC",
    image: "/images/forms/1099nec.jpg",
    prompt: "Professional 3D illustration of IRS Form 1099-NEC Nonemployee Compensation tax form, amber and gold theme, contractor compliance icon, modern corporate workspace desk background, high quality.",
    icon: FileText,
    accentColor: "from-amber-500 via-orange-500 to-brand-primary",
    badgeStyle: "bg-amber-50 text-amber-700 border-amber-200/80",
    iconBg: "bg-amber-50 text-amber-600",
    fileType: "Information Return",
    turnaround: "Same Day E-Filing",
    description: "Required IRS information return for reporting nonemployee compensation of $600 or more paid to independent contractors, freelancers, and vendors.",
    badge: "Contractor Compliance",
    highlights: [
      "Box 1 nonemployee compensation reporting",
      "TIN validation & W-9 verification check",
      "Direct IRS & State Tax Agency E-Filing",
      "Recipient Copy B digital delivery & mailing"
    ]
  },
  {
    id: "f-llc-formation",
    title: "Certificate of Formation - Limited Liability Company",
    formCode: "STATE-LLC-FORM",
    image: "/images/forms/llc_formation.jpg",
    prompt: "Elegant 3D render illustration of an official State Certificate of Formation for a Limited Liability Company (LLC), with golden wax seal, official parchment certificate style, corporate blue ribbon, studio lighting, top quality.",
    icon: Building2,
    accentColor: "from-blue-700 via-indigo-600 to-sky-500",
    badgeStyle: "bg-[#0E3E85]/10 text-[#0E3E85] border-[#0E3E85]/20",
    iconBg: "bg-blue-50 text-[#0E3E85]",
    fileType: "State Formation Intake",
    turnaround: "1-3 Days Turnaround",
    description: "Official legal document required to establish a new Limited Liability Company with the Secretary of State across all 50 U.S. jurisdictions.",
    badge: "Turnkey Setup",
    highlights: [
      "State Articles of Organization filing & approval",
      "Federal EIN / Tax ID Number assignment (CP575)",
      "Custom LLC Operating Agreement & Founder Bylaws",
      "Registered Agent compliance setup"
    ]
  },
  {
    id: "f-boir",
    title: "Details Required to File BOIR",
    formCode: "FINCEN-BOIR",
    image: "/images/forms/llc_formation.jpg",
    prompt: "3D render illustration of FinCEN BOIR Beneficial Ownership Information Reporting document with federal shield badge, security padlock, identity verification graphics, high resolution office background.",
    icon: ShieldCheck,
    accentColor: "from-violet-600 via-purple-600 to-indigo-600",
    badgeStyle: "bg-purple-50 text-purple-700 border-purple-200/80",
    iconBg: "bg-purple-50 text-purple-600",
    fileType: "FinCEN Mandatory Filing",
    turnaround: "24-48 Hours Compliance",
    description: "Mandatory Corporate Transparency Act beneficial ownership information reporting with FinCEN detailing entity beneficial owners, company applicants, and control persons.",
    badge: "Federal BOIR Filing",
    highlights: [
      "Beneficial Owner (25%+ equity or substantial control) identification",
      "Company Applicant identity & passport / driver license verification",
      "FinCEN ID assignment & secure e-filing submission",
      "Initial, updated, and corrected BOIR reporting compliance"
    ]
  },
  {
    id: "f-termination",
    title: "Certificate of Termination of a Domestic Entity",
    formCode: "STATE-TERM-CERT",
    image: "/images/forms/llc_formation.jpg",
    prompt: "Modern 3D render illustration of official Certificate of Termination document with formal state seal stamp, final tax clearance certificate, and corporate dissolution paper.",
    icon: FileX,
    accentColor: "from-rose-600 via-pink-600 to-red-600",
    badgeStyle: "bg-rose-50 text-rose-700 border-rose-200/80",
    iconBg: "bg-rose-50 text-rose-600",
    fileType: "State Termination Filing",
    turnaround: "2-4 Days Processing",
    description: "Official state filing required to formally terminate and surrender a domestic entity's legal charter, dissolving entity existence with state tax clearance.",
    badge: "Entity Termination",
    highlights: [
      "State Certificate of Termination / Dissolution preparation",
      "State Franchise Tax & Sales Tax Clearance Certificates",
      "Unanimous owner / member consent resolution drafting",
      "Final Secretary of State filing & acknowledgement certificate"
    ]
  },
  {
    id: "f-payroll-agreement",
    title: "Payroll Agreement",
    formCode: "NEX-PAYROLL-AGMT",
    image: "/images/forms/w2.jpg",
    prompt: "3D render illustration of a formal corporate Payroll Agreement document with salary schedules, direct deposit authorization, tax withholding charts, and executive pen.",
    icon: UserCheck,
    accentColor: "from-cyan-600 via-teal-500 to-emerald-600",
    badgeStyle: "bg-teal-50 text-teal-700 border-teal-200/80",
    iconBg: "bg-teal-50 text-teal-600",
    fileType: "Employer Payroll Setup",
    turnaround: "Same Day Setup",
    description: "Comprehensive payroll setup agreement establishing pay schedules, direct deposit authorizations, officer compensation policies, and tax withholding rules.",
    badge: "Payroll Setup",
    highlights: [
      "Direct Deposit Authorization & Bank Pay Agreements",
      "Officer Reasonable Salary & Compensation Terms",
      "Federal, State, and Local Tax Withholding Mandates",
      "Employee vs Independent Contractor Status Guidelines"
    ]
  },
  {
    id: "f-itin",
    title: "Form ITIN (IRS Form W-7)",
    formCode: "IRS-W7-ITIN",
    image: "/images/forms/itin.jpg",
    prompt: "3D render illustration of an official IRS Form W-7 ITIN Application for Individual Taxpayer Identification Number, with passport icon, security lock badge, teal and blue accents on office desk.",
    icon: ShieldCheck,
    accentColor: "from-teal-600 via-emerald-600 to-cyan-600",
    badgeStyle: "bg-teal-50 text-teal-700 border-teal-200/80",
    iconBg: "bg-teal-50 text-teal-600",
    fileType: "Federal ID Application",
    turnaround: "CAA Certified Review",
    description: "Application for IRS Individual Taxpayer Identification Number for foreign individuals, non-resident alien investors, and dependents ineligible for an SSN.",
    badge: "Taxpayer ID Setup",
    highlights: [
      "Certified Acceptance Agent (CAA) document audit",
      "Federal 1040 tax return attachment & filing",
      "Passport & foreign status verification",
      "ITIN renewal & family dependent processing"
    ]
  },
  {
    id: "f-ss5",
    title: "Form SS-5 (Social Security Card)",
    formCode: "SSA-SS5",
    image: "/images/forms/ss5.jpg",
    prompt: "3D render illustration of an official Form SS-5 Application for a Social Security Card, with classic blue Social Security card emblem, pen, clean modern tax desk setting.",
    icon: UserCheck,
    accentColor: "from-indigo-600 via-blue-600 to-sky-500",
    badgeStyle: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    iconBg: "bg-indigo-50 text-indigo-600",
    fileType: "SSA Official Form",
    turnaround: "Intake & Preparation",
    description: "Official Social Security Administration application to request an original Social Security card, replacement card, or legal name update.",
    badge: "Identity Registration",
    highlights: [
      "Original & replacement SSN card filing",
      "Legal name change & citizenship updates",
      "Required identity & age document checklist",
      "Pre-filled SSA field office submission package"
    ]
  },
  {
    id: "f-llc-closure",
    title: "LLC Closure & Dissolution",
    formCode: "NEX-LLC-CLOSE",
    image: "/images/forms/llc_formation.jpg",
    prompt: "Modern 3D render illustration of legal business dissolution document with formal closure stamp and IRS clearance confirmation.",
    icon: FileX,
    accentColor: "from-indigo-600 via-purple-600 to-pink-600",
    badgeStyle: "bg-purple-50 text-purple-700 border-purple-200/80",
    iconBg: "bg-purple-50 text-purple-600",
    fileType: "Dissolution Intake",
    turnaround: "2-5 Days Turnaround",
    description: "Formal state LLC dissolution filings, final business tax returns, state tax clearances, and complete liability release forms for clean entity shutdown.",
    badge: "Clean Shutdown",
    highlights: [
      "Articles of Dissolution / Cancellation",
      "Final Federal & State Business Tax Returns",
      "State Tax Clearance Certificate",
      "IRS Entity Closure Confirmation"
    ]
  },
  {
    id: "f-llc-reactivation",
    title: "LLC Reactivation & Reinstatement",
    formCode: "NEX-LLC-REACT",
    image: "/images/forms/llc_formation.jpg",
    prompt: "Modern 3D illustration of business restoration document with green checkmark seal and state tax clearance certificate.",
    icon: RefreshCw,
    accentColor: "from-amber-500 via-orange-500 to-emerald-600",
    badgeStyle: "bg-amber-50 text-amber-700 border-amber-200/80",
    iconBg: "bg-amber-50 text-amber-600",
    fileType: "Reinstatement Intake",
    turnaround: "3-7 Days Turnaround",
    description: "Reinstate administratively dissolved LLCs, resolve state tax holds, clear backlogged annual reports, and restore 100% legal good standing.",
    badge: "Entity Restoration",
    highlights: [
      "Reinstatement / Reactivation Application",
      "Delinquent Annual Report Filings",
      "State Tax Clearance & Good Standing Cert",
      "Penalty Abatement Requests"
    ]
  },
  {
    id: "f-llc-registration",
    title: "LLC Registration",
    formCode: "STATE-LLC-REG",
    image: "/images/forms/llc_formation.jpg",
    prompt: "3D render illustration of Single-Member & Multi-Member LLC Registration certificate with official state seal, blue corporate branding, IRS EIN confirmation letter, and operating agreement booklet on modern executive desk.",
    icon: Building2,
    accentColor: "from-blue-600 via-indigo-600 to-sky-500",
    badgeStyle: "bg-blue-50 text-blue-700 border-blue-200/80",
    iconBg: "bg-blue-50 text-blue-600",
    fileType: "State & Federal Setup",
    turnaround: "24-48 Hours Turnaround",
    description: "Fast 24-48 hour Single-Member & Multi-Member LLC formation across all 50 U.S. states, including state filing, official IRS EIN issuance, and Operating Agreement.",
    badge: "Turnkey LLC Setup",
    highlights: [
      "State Articles of Organization E-Filing (All 50 US States)",
      "Official IRS Federal EIN Confirmation Letter (CP575)",
      "Single & Multi-Member Customized Operating Agreement",
      "Registered Agent Service & State Compliance Setup"
    ]
  }
];

export default function Forms() {
  const [copiedId, setCopiedId] = useState(null);
  const [expandedPromptId, setExpandedPromptId] = useState(null);

  const handleCopyPrompt = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const togglePrompt = (id) => {
    setExpandedPromptId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <SEO
        title="Tax Forms & LLC Resource Hub | Ananya Tax Co"
        description="Access official tax forms and business formation resources including Form W-4, W-2, 1099-NEC, Certificate of Formation LLC, Details Required to File BOIR, Certificate of Termination, Payroll Agreement, ITIN, SS-5, LLC Closure, Reactivation, and LLC Registration."
        keywords="Form W4, W2 filing, 1099-NEC filing, Certificate of Formation LLC, Details Required to File BOIR, Certificate of Termination of a Domestic Entity, Payroll Agreement, ITIN, SS5, LLC closure, LLC reactivation, LLC registration"
      />

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-12 lg:pt-16 lg:pb-16 overflow-hidden bg-white">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-brand-accent/8 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 border border-brand-primary/20 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              Official Business & Tax Resource Hub
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-primary font-heading tracking-tight leading-[1.15]"
            >
              Essential Tax & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary font-bold">
                Business Formation Forms.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-mid text-base sm:text-lg font-sans leading-relaxed max-w-2xl mx-auto"
            >
              Explore official document requirements for Form W-4, W-2, 1099-NEC, LLC Certificate of Formation, ITIN (W-7), SS-5, and entity maintenance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Main Forms Cards Grid Section ────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formsList.map((item, idx) => {
              const IconComponent = item.icon;
              const isPromptOpen = expandedPromptId === item.id;
              const isCopied = copiedId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-2xl hover:border-brand-primary/40 transition-all duration-300 relative flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
                >
                  {/* Top Accent Gradient Line */}
                  <div className={`h-1.5 bg-gradient-to-r ${item.accentColor}`} />

                  {/* Card Banner Image Header */}
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback styling if image path is reloaded
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Form Badges Overlay */}
                    <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-sm backdrop-blur-md bg-white/95 ${item.badgeStyle}`}>
                        {item.badge}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-900/90 text-white shadow-sm">
                        {item.formCode}
                      </span>
                    </div>

                    {/* Form Icon Overlay */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-md`}>
                        <IconComponent className="w-5 h-5 shrink-0" />
                      </div>
                      <span className="text-xs font-bold text-white shadow-sm font-heading">
                        {item.fileType}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark mb-2.5 font-heading leading-snug group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-mid text-xs sm:text-sm leading-relaxed font-sans mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Turnaround Time Footer Info - Always Pushed to Bottom */}
                    <div className="pt-3 mt-auto border-t border-[#EDF2F7] flex items-center justify-between gap-3 text-xs text-text-light font-sans font-medium">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                        <span>{item.turnaround}</span>
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#EDF2F7] text-text-mid">
                        Official Requirement
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Help / Contact Banner ────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="max-w-xl text-center md:text-left relative z-10">
              <h2 className="text-2xl text-white sm:text-3xl font-extrabold mb-2 font-heading tracking-tight">
                Need Help Selecting or Filing Any of These Forms?
              </h2>
              <p className="text-white/90 text-sm sm:text-base font-sans leading-relaxed">
                Our CPAs can review your tax document requirements, calculate withholdings, and ensure accurate federal & state filing.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-brand-dark bg-white hover:bg-[#F7FAFC] transition-all shadow-xl hover:scale-105 active:scale-95 group text-sm font-heading"
              >
                <span>Consult Our Specialists</span>
                <ArrowRight className="w-4 h-4 ml-2 text-brand-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
