"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Cpu, CreditCard, FileCheck, UserCheck, ShieldCheck, BarChart2, HeartHandshake, Zap, Users, Sparkles } from "lucide-react";
import Link from "next/link";
import SEO from "../components/SEO";

const categories = [
  { id: "all", label: "All Capabilities", count: 12 },
  { id: "processing", label: "Payroll & Payouts", count: 4 },
  { id: "compliance", label: "Tax & Compliance", count: 4 },
  { id: "portal", label: "Employee & Portal", count: 4 },
];

const features = [
  { category: "processing", icon: <Cpu className="w-6 h-6" />, title: "Automated Payroll Processing", description: "Eliminate manual data entry and ensure error-free payroll with our AI-powered system.", badge: "100% Automated" },
  { category: "processing", icon: <CreditCard className="w-6 h-6" />, title: "Effortless Direct Deposit", description: "Streamline payments with secure and instant direct deposit options.", badge: "Instant ACH" },
  { category: "compliance", icon: <FileCheck className="w-6 h-6" />, title: "Seamless Tax Withholdings & Filings", description: "Stay compliant with automated tax calculations and filings for federal, state, and local taxes.", badge: "Auto Remittance" },
  { category: "compliance", icon: <FileCheck className="w-6 h-6" />, title: "Federal, State & Local Tax Forms", description: "Generate and file all necessary tax forms with precision and ease.", badge: "50-State Filing" },
  { category: "compliance", icon: <BarChart2 className="w-6 h-6" />, title: "Year-End Forms & Reporting", description: "Navigate year-end tasks effortlessly with automated W-2s and other critical reports.", badge: "W-2 & 1099 Ready" },
  { category: "processing", icon: <BarChart2 className="w-6 h-6" />, title: "Actionable Payroll Reports", description: "Gain valuable insights into your workforce with customizable and real-time reports.", badge: "Live Analytics" },
  { category: "portal", icon: <UserCheck className="w-6 h-6" />, title: "Employee Self-Service Portal", description: "Empower your employees with 24/7 access to paystubs, tax documents, and benefits information.", badge: "24/7 Portal" },
  { category: "portal", icon: <HeartHandshake className="w-6 h-6" />, title: "Optional Benefits Administration", description: "Simplify benefits management with integrated health insurance, retirement plans, and more.", badge: "Benefits Hub" },
  { category: "portal", icon: <ShieldCheck className="w-6 h-6" />, title: "Improved Security", description: "Benefit from industry-leading security protocols and data encryption.", badge: "256-Bit SSL" },
  { category: "compliance", icon: <UserCheck className="w-6 h-6" />, title: "Dedicated Payroll Specialist", description: "Get guidance and support of a dedicated payroll specialist who understands your unique needs.", badge: "Licensed CPA" },
  { category: "portal", icon: <Zap className="w-6 h-6" />, title: "24/7 Support", description: "Access instant answers and support through our intelligent chatbot or live representatives.", badge: "Zero Wait Time" },
  { category: "processing", icon: <CheckCircle2 className="w-6 h-6" />, title: "Scalability and Flexibility", description: "Our services adapt to your growing business needs and are easy to scale.", badge: "Enterprise Scale" },
];

const stats = [
  { value: "1000+", label: "Employees Managed" },
  { value: "100%", label: "Compliance Rate" },
  { value: "Zero", label: "Payroll Errors" },
  { value: "24/7", label: "AI Support" },
];

export default function Payroll() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <SEO 
        title="Full-Service Payroll Processing & Tax Compliance | Ananya Tax Co"
        description="Hassle-free payroll processing, automated tax withholdings, direct deposit, and year-end W-2/1099 reporting for growing small and medium businesses."
        keywords="small business payroll processing, direct deposit payroll, W-2 1099 filing, payroll tax calculation, employee payroll compliance, payroll accounting, automated payroll"
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-10 lg:pt-16 lg:pb-20 overflow-hidden bg-white">
        {/* Soft Ambient Brand Glows */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-brand-accent/8 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left text column (6 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/10 border border-brand-primary/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                Payroll Services
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-brand-purple leading-[1.12] mb-4 font-heading tracking-tight">
                Smart <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
                  Payroll Solutions.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-text-mid leading-relaxed mb-8 max-w-lg font-sans">
                Simplify your workforce management with our automated payroll system. Secure, compliant, and designed to scale with your business.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:shadow-xl hover:shadow-brand-secondary/25 hover:scale-105 active:scale-95 transition-all group shadow-md"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-brand-purple bg-white border border-[#DCE6F2] hover:border-brand-primary/50 hover:bg-gradient-to-r hover:from-brand-primary/5 hover:to-brand-accent/5 hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  See All Features
                </a>
              </div>

              {/* Sub-hero Feature Checklist Bar */}
              <div className="pt-6 border-t border-[#DCE6F2] grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-text-dark font-sans">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Auto Tax Withholdings</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-text-dark font-sans">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Instant Direct Deposit</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-text-dark font-sans">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>100% Tax Compliance</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual: Modern 3D Image Presentation (6 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              {/* Soft Ambient Brand Glow Backdrops */}
              <div className="absolute -inset-4 bg-white rounded-[3rem] blur-2xl opacity-80 pointer-events-none" />

              <div className="relative rounded-[2.5rem] overflow-hidden bg-white p-3 sm:p-5 group  transition-all duration-500">
                <div className="relative rounded-[2rem] overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/images/nexgen_payroll_automation_3d.png"
                    alt="Smart Payroll Solutions 3D Automation"
                    className="w-full h-auto max-h-[460px] object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Micro-Badge Top Right */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#DCE6F2] shadow-md flex items-center gap-2"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse"></span>
                    <span className="text-xs font-bold text-brand-purple">Next-Day Direct Deposit</span>
                  </motion.div>

                  {/* Floating Micro-Badge Bottom Left */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#DCE6F2] shadow-md flex items-center gap-2.5"
                  >
                    <div className="w-7 h-7 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-green-dark">
                      <ShieldCheck className="w-4 h-4 text-brand-accent" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-text-light uppercase tracking-wider">Compliance Guarantee</div>
                      <div className="text-xs font-bold text-brand-purple">Zero IRS Tax Penalties</div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────── */}
      <section className="py-10  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#DCE6F2]">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="py-4 md:py-2 px-4 text-center group"
              >
                <div className="text-4xl md:text-5xl font-black text-brand-purple font-heading tracking-tight mb-1.5 group-hover:text-brand-primary transition-colors">
                  {s.value}
                </div>
                <div className="text-sm font-semibold text-text-mid font-sans">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Grid ────────────────────────────────────── */}
      <section id="features" className="py-10 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 border border-brand-primary/20 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              Payroll Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight">
              <span className="text-brand-purple">Complete </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
                Payroll Automation
              </span>
            </h2>
            <p className="text-text-mid text-lg font-sans">
              Everything you need to manage your team effectively and compliantly.
            </p>
          </motion.div>

          {/* Modern 2-Column Horizontal Power-Tiles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 2) * 0.08 }}
                className="bg-[#F7FAFC] hover:bg-white rounded-2xl p-6 sm:p-7 border border-[#DCE6F2] hover:border-brand-primary/40 hover:shadow-[0_12px_30px_rgba(20,85,184,0.08)] transition-all duration-300 relative group flex items-start gap-5 overflow-hidden"
              >
                {/* Left Active Hover Accent Bar */}
                <div className="absolute left-0 inset-y-3 w-1 bg-gradient-to-b from-brand-primary to-brand-accent rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Left Glowing Icon Pod */}
                <div className="w-13 h-13 rounded-2xl bg-white border border-[#DCE6F2] text-brand-primary flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary group-hover:scale-105 group-hover:shadow-md transition-all duration-300 shadow-sm">
                  {feature.icon}
                </div>

                {/* Right Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-brand-purple font-heading tracking-tight group-hover:text-brand-primary transition-colors">
                      {feature.title}
                    </h3>
                    <span className="text-[11px] font-black text-text-light/50 font-heading tracking-widest shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-text-mid text-sm leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="pb-10 pt-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-3xl p-10 sm:p-14 overflow-hidden text-center shadow-2xl border border-white/20 text-white"
          >
            {/* Ambient Inner Lighting Overlay */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-primary/30 rounded-full blur-[80px] pointer-events-none" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-heading relative z-10 tracking-tight max-w-2xl mx-auto drop-shadow-sm">
              Ready to experience the future of payroll?
            </h2>
            <p className="text-white/90 text-base sm:text-lg mb-8 max-w-xl mx-auto font-sans relative z-10 leading-relaxed font-medium">
              Texas payroll success with AI! Our solutions help you focus on what matters. Explore payroll services powered by AI.
            </p>
            <div className="relative z-10 flex items-center justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-brand-purple bg-white hover:bg-[#F7FAFC] transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 group text-sm sm:text-base"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-4 h-4 ml-2 text-brand-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
