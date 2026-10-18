"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SEO from "../components/SEO";
import {
  Sparkles,
  Stethoscope,
  Laptop,
  Utensils,
  Rocket,
  Globe,
  ArrowRight,
  Phone,
  ShieldCheck,
  Award,
  ArrowUpRight
} from "lucide-react";
import { useRegisterModal } from "../context/RegisterModalContext";

export const industriesData = [
  {
    id: "healthcare",
    title: "Healthcare & Medical Practices",
    subtitle: "Physicians, Dental Clinics, Private Practices, & Specialists",
    badge: "Medical & Dental",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    description: "Specialized accounting, medical equipment depreciation write-offs, and physician tax minimization strategies.",
    services: [
      "Physician Tax Minimization Blueprint",
      "HIPAA-Compliant Revenue Bookkeeping",
      "Medical Equipment Sec. 179 Depreciation",
      "Locum Tenens & 1099 Partner Filings"
    ]
  },
  {
    id: "it-tech",
    title: "IT Companies & SaaS Software",
    subtitle: "Software Developers, MSPs, & Tech Agencies",
    badge: "Tech & Software",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    description: "Modern cloud accounting, multi-state software sales tax tracking, R&D tax credit claims, and equity tax filings.",
    services: [
      "R&D Tax Credit Claims & Payroll Offset",
      "SaaS Recurring Revenue (MRR) ASC 606",
      "Multi-State Software Sales Tax Nexus",
      "RSU / ISO Stock Option Tax Filings"
    ]
  },
  {
    id: "restaurants-hotels",
    title: "Restaurants & Hotels",
    subtitle: "Fine Dining, Fast Casual, Franchise Outlets, & Hospitality",
    badge: "Food & Hospitality",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    description: "Daily POS automated integration, tip allocation reporting, FICA tip credit claims, and food COGS margin optimization.",
    services: [
      "Toast / Square POS Daily Automated Sync",
      "Federal FICA Tip Tax Credit Claims",
      "Weekly Food & Beverage COGS Margins",
      "Hourly Payroll & Tip Pooling Automation"
    ]
  },
  {
    id: "startups",
    title: "Startups & High-Growth",
    subtitle: "Pre-Seed, Seed Stage, Series A, & Innovation Labs",
    badge: "Early-Stage & VC",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    description: "Financial clarity to extend cash runway, impress VC investors, scale rapidly, and setup turnkey incorporation.",
    services: [
      "Turnkey Delaware C-Corp / LLC Setup",
      "Cash Runway & Burn Rate Dashboards",
      "Cap Table & SAFE Note Accounting",
      "Investor Board Deck Financial Reports"
    ]
  },
  {
    id: "exports-imports",
    title: "Exports & Imports",
    subtitle: "International Distributors, E-Commerce Importers, & Freight",
    badge: "Global Trade",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    description: "Cross-border trade currency conversions, customs duties, transfer pricing, and FBAR/FATCA offshore compliance.",
    services: [
      "Customs Duty & Supply Chain Costing",
      "FBAR & FATCA Foreign Account Filings",
      "IC-DISC Export Tax Incentive Relief",
      "Foreign Currency Gain/Loss Reconciliation"
    ]
  }
];

export default function Industries() {
  const { openRegisterModal } = useRegisterModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-20 font-sans">
      <SEO 
        title="Industry-Specific Accounting & Tax Solutions | Ananya Tax Co"
        description="Specialized accounting, tax strategy, and bookkeeping tailored for real estate, healthcare, e-commerce, technology, and retail industries."
        keywords="industry specific accounting, real estate CPA tax, healthcare accounting firm, e-commerce tax services, tech startup tax advisory, retail bookkeeping, specialized tax strategy"
      />

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-brand-accent text-xs font-semibold uppercase tracking-widest mb-5 backdrop-blur-md font-heading"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Industry Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 font-heading"
          >
            Industries We Serve
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base text-white/85 leading-relaxed font-sans font-normal"
          >
            Specialized CPA tax compliance, bookkeeping, and financial strategies built for key sectors across the United States.
          </motion.p>
        </div>
      </section>

      {/* ── COMPACT INDUSTRY GRID ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="section-tag !mb-3">Specialized Sector Expertise</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary mb-3 font-heading tracking-tight">
            Tailored CPA Financial Solutions
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-sans font-normal">
            Click on any industry below to consult with our specialized CPAs or request custom industry advice.
          </p>
        </div>

        {/* Compact Cards Grid (3 Cols on LG, 2 Cols on MD) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {industriesData.map((ind, index) => {
            const IconComp = ind.icon;

            return (
              <motion.div
                id={ind.id}
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (index % 3) * 0.08 }}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Image Header */}
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/85 via-brand-primary/30 to-transparent" />

                    {/* Top Badge */}
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-brand-primary/80 border border-white/20 backdrop-blur-md shadow-md font-heading">
                      {ind.badge}
                    </div>

                    {/* Floating Icon Badge */}
                    <div className="absolute bottom-3.5 left-4 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/95 border border-white/80 shadow-lg flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 z-10 backdrop-blur-md">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="text-[11px] font-semibold text-brand-accent uppercase tracking-wider mb-1 font-heading">
                      {ind.subtitle}
                    </div>
                    <h3 className="text-xl font-bold text-brand-primary mb-2 font-heading tracking-tight group-hover:text-brand-accent transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans mb-4 font-normal line-clamp-2">
                      {ind.description}
                    </p>

                    {/* Compact Checklist */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 font-sans">
                      {ind.services.map((serv, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <span className="text-brand-accent font-bold shrink-0">✓</span>
                          <span className="truncate">{serv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Compact Card Action Footer */}
                <div className="px-6 py-4 bg-[#F8FAFC] border-t border-slate-200/60 flex items-center justify-between gap-3">
                  <Link
                    href="/contact"
                    className="w-full btn-orange text-xs font-bold py-2.5 rounded-xl cursor-pointer flex items-center justify-center gap-2 font-heading shadow-xs tracking-wide"
                  >
                    Consult Industry CPA
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* ── COMPACT BOTTOM CTA BANNER ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary rounded-3xl p-8 text-white text-center relative overflow-hidden shadow-xl">
          <h2 className="text-2xl text-white font-extrabold mb-2 font-heading tracking-tight relative z-10">
            Need Custom Industry Accounting Support?
          </h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto mb-6 font-sans font-normal leading-relaxed relative z-10">
            Our CPA team provides tailored tax minimization and financial advisory across real estate, e-commerce, healthcare, tech, and trade.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="btn-orange text-xs font-bold !px-6 !py-3 rounded-xl shadow-lg flex items-center gap-2 font-heading cursor-pointer tracking-wide"
            >
              Get Custom Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+13318404241"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs transition-all flex items-center gap-2 font-heading tracking-wide"
            >
              <Phone className="w-4 h-4 text-brand-accent" />
              Call +1 (331) 840-4241
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
