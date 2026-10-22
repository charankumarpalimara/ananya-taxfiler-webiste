"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, Calculator, ShieldCheck, Lightbulb, Clock, BookOpen, Users, Star, CheckCircle2, Sparkles, Check, Filter } from "lucide-react";
import Link from "next/link";
import SEO from "../components/SEO";

const categories = ["All Solutions", "Preparation & Filing", "Strategy & Planning", "Resolution & Defense"];

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Effortless Tax Preparation & Filing",
    description: "Our experienced professionals handle all aspects of your tax return, ensuring accuracy and maximizing deductions.",
    categoryTag: "IRS E-File",
    tab: "Preparation & Filing",
    perk: "Direct IRS E-Submission & Fast Refund"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Strategic Tax Planning & Support",
    description: "We develop personalized tax strategies to minimize your burden and maximize long-term financial goals.",
    categoryTag: "Strategy",
    tab: "Strategy & Planning",
    perk: "Proactive Year-Round Tax Reduction"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Expert Tax Resolution",
    description: "Facing unexpected tax challenges? Our certified professionals advocate for you and navigate complexities.",
    categoryTag: "IRS Defense",
    tab: "Resolution & Defense",
    perk: "Full Audit Representation & Penalty Relief"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Extensive Tax Education & Resources",
    description: "Stay informed with our library of resources, articles, webinars, and FAQs.",
    categoryTag: "Advisory",
    tab: "Strategy & Planning",
    perk: "Clear Tax Guides & Deductions Checklist"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Tax Specialists",
    description: "Get personalized advice and support from our team of friendly and responsive tax professionals.",
    categoryTag: "CPA Team",
    tab: "Preparation & Filing",
    perk: "Assigned Senior US Certified CPA"
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Seamless Experience",
    description: "We take the complexity out of taxes, allowing you to focus on what matters most.",
    categoryTag: "Workflow",
    tab: "Preparation & Filing",
    perk: "100% Digital Secure Document Upload"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Expert Guidance",
    description: "Our team of experienced and certified professionals ensures accurate and efficient tax solutions.",
    categoryTag: "Accuracy",
    tab: "Resolution & Defense",
    perk: "100% Calculation & Compliance Guarantee"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Ongoing Support",
    description: "We're here for you throughout the year, answering your questions and providing guidance.",
    categoryTag: "Year-Round",
    tab: "Preparation & Filing",
    perk: "365-Day Direct Client Support"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Peace of Mind",
    description: "We handle your taxes with confidentiality and security, giving you the peace of mind you deserve.",
    categoryTag: "Security",
    tab: "Resolution & Defense",
    perk: "256-Bit Bank-Grade Data Protection"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Personalized Approach",
    description: "We tailor our services to your unique needs and goals.",
    categoryTag: "Custom Plan",
    tab: "Strategy & Planning",
    perk: "Customized Strategy for Global & US Assets"
  },
];

const stats = [
  { value: "$2M+", label: "Tax Savings Achieved" },
  { value: "100%", label: "Filing Accuracy" },
  { value: "15+", label: "Years of Expertise" },
  { value: "5★", label: "Client Rating" },
];

export default function Taxes() {
  const [activeTab, setActiveTab] = useState("All Solutions");

  const filteredFeatures = activeTab === "All Solutions"
    ? features
    : features.filter(f => f.tab === activeTab);

  return (
    <div className="min-h-screen bg-white pt-24">
      <SEO 
        title="Professional Tax Preparation & CPA Filing | Ananya Tax Co"
        description="Maximize tax savings and ensure 100% IRS compliance with our CPA tax preparation services for individuals, LLCs, S-Corps, and Corporations."
        keywords="CPA tax preparation, individual tax returns, 1120S S-Corp filing, 1065 partnership tax, LLC tax filing, federal state tax return, IRS audit representation, ITIN W-7 application, tax planning"
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
                Tax Services
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-brand-purple leading-[1.12] mb-4 font-heading tracking-tight">
                Expert Tax Solutions for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
                  Global Success.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-text-mid leading-relaxed mb-8 max-w-lg font-sans">
                Navigate the complexities of US and International tax compliance with our expert CPAs. We simplify filing, planning, and resolution for you.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:shadow-xl hover:shadow-brand-secondary/25 hover:scale-105 active:scale-95 transition-all group shadow-md"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-brand-purple bg-white border border-[#DCE6F2] hover:border-brand-primary/50 hover:bg-gradient-to-r hover:from-brand-primary/5 hover:to-brand-accent/5 hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  Explore Services
                </a>
              </div>

              {/* Sub-hero Feature Checklist Bar */}
              <div className="pt-6 border-t border-[#DCE6F2] grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-text-dark font-sans">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>100% Accuracy Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-text-dark font-sans">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Max Deductions Found</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-text-dark font-sans">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Dedicated US CPAs</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual: Modern 3D Tax Filing & IRS Image Presentation (6 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              {/* Soft Ambient Brand Glow Backdrops */}
              <div className="absolute -inset-4 bg-white rounded-[3rem] blur-2xl opacity-80 pointer-events-none" />

              <div className="relative rounded-[2.5rem] overflow-hidden bg-white p-3 sm:p-5 group transition-all duration-500">
                <div className="relative rounded-[2rem] overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/images/ananya_tax_preparation_irs_3d.png"
                    alt="Expert Tax Solutions & IRS Filing"
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
                    <span className="text-xs font-bold text-brand-purple">Max Legal Deductions</span>
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
                      <div className="text-[10px] font-bold text-text-light uppercase tracking-wider">IRS Compliance</div>
                      <div className="text-xs font-bold text-brand-purple">Audit Protection Included</div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────── */}
      <section className="py-10 bg-white">
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
      <section id="features" className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 border border-brand-primary/20 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              Tax Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight">
              <span className="text-brand-purple">Complete </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
                Tax Solutions
              </span>
            </h2>
            <p className="text-text-mid text-lg font-sans">
              Everything you need to stay compliant and maximize your financial health.
            </p>
          </motion.div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20 scale-105"
                    : "bg-[#F7FAFC] text-text-mid hover:bg-white hover:text-brand-purple border border-[#DCE6F2]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Modern 3-Column Neo-Card Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
          >
            <AnimatePresence mode="popLayout">
              {filteredFeatures.map((feature, idx) => (
                <motion.div
                  layout
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="bg-white rounded-[2rem] p-7 border border-[#DCE6F2] hover:border-brand-primary/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(10,37,64,0.09)] transition-all duration-300 relative group flex flex-col justify-between overflow-hidden hover:-translate-y-2"
                >
                  {/* Top Glowing Gradient Hover Line */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Soft Corner Glow */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-accent/15 transition-colors pointer-events-none" />

                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-[#F7FAFC] border border-[#DCE6F2] text-brand-primary flex items-center justify-center shrink-0 group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:text-white group-hover:border-transparent group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                        {feature.icon}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/10">
                          {feature.categoryTag}
                        </span>
                        <span className="text-xs font-black text-text-light/40 font-heading tracking-wider">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-brand-purple font-heading tracking-tight mb-3 group-hover:text-brand-primary transition-colors leading-snug">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-mid text-sm leading-relaxed font-sans mb-6">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Verified Benefit Badge */}
                  <div className="pt-4 border-t border-[#EDF2F7] flex items-center gap-2 text-xs font-semibold text-text-dark group-hover:text-brand-purple transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>{feature.perk}</span>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
              Expert Tax Resolution for <br className="hidden md:block" />Unexpected Challenges
            </h2>
            <p className="text-white/90 text-base sm:text-lg mb-8 max-w-xl mx-auto font-sans relative z-10 leading-relaxed font-medium">
              Our business tax specialists can guide you to a brighter financial future — stress-free and compliant.
            </p>
            <div className="relative z-10 flex items-center justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-brand-purple bg-white hover:bg-[#F7FAFC] transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 group text-sm sm:text-base"
              >
                <span>Get a Free Consultation Today</span>
                <ArrowRight className="w-4 h-4 ml-2 text-brand-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
