"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  User,
  Award,
  FileText,
  Phone,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  Sparkles,
  ChevronRight,
  Send,
  Calendar,
  Layers
} from "lucide-react";
import { servicesData } from "../data/servicesData";
import { useRegisterModal } from "../context/RegisterModalContext";
import { useEffect } from "react";

const serviceKeywordsMap = {
  "individual-tax": "individual tax preparation, personal tax return filing, 1040 tax preparation, ITIN W-7 application, FBAR FATCA reporting, tax refund optimization, CPA personal tax",
  "business-tax": "business tax preparation, 1120S S-Corp tax return, 1065 partnership tax return, 1120 corporate tax, LLC tax filing, small business CPA tax",
  "tax-planning": "strategic tax planning, tax reduction strategies, wealth advisory, tax avoidance legal methods, corporate tax planning, high net worth tax CPA",
  "irs-representation": "IRS audit defense, IRS tax relief, Offer in Compromise, IRS back taxes help, tax penalty abatement, CPA representation IRS",
  "bookkeeping": "small business bookkeeping, QuickBooks clean up, monthly accounting services, bank reconciliation, financial statements CPA, ledger maintenance",
  "payroll": "small business payroll services, direct deposit payroll, W2 1099 filing, payroll tax compliance, automated payroll processing, employee tax withholding",
  "entity-formation": "LLC formation, S-Corp election, business registration, EIN registration, corporate structure setup, business start tax consultation",
  "itin-services": "ITIN application W-7, ITIN renewal, certifying acceptance agent CAA, non resident tax filing, ITIN passport verification without mailing"
};

export default function ServiceDetail() {
  const params = useParams();
  const serviceId = params?.serviceId;
  const router = useRouter();
  const { openRegisterModal } = useRegisterModal();

  const service = servicesData.find((s) => s.id === serviceId) ||
    (serviceId === "us-tax-filing" ? servicesData.find(s => s.id === "individual-tax") : null) ||
    (serviceId === "bookkeeping" ? servicesData.find(s => s.id === "accounting-bookkeeping") : null) ||
    (serviceId === "itin-application" ? servicesData.find(s => s.id === "individual-specialized") : null) ||
    (serviceId === "fbar-fatca" ? servicesData.find(s => s.id === "individual-specialized") : null) ||
    (serviceId === "tax-planning" ? servicesData.find(s => s.id === "tax-strategy") : null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const seoTitle = service 
    ? `${service.title} | Ananya Tax Co` 
    : "Service Details | Ananya Tax Co";
  
  const seoDescription = service 
    ? service.shortDesc || service.longDesc?.slice(0, 160) 
    : "Professional tax, bookkeeping & payroll services by licensed CPAs at Ananya Tax Co.";

  const seoKeywords = (serviceId && serviceKeywordsMap[serviceId]) 
    ? serviceKeywordsMap[serviceId] 
    : "CPA accounting services, tax preparation, bookkeeping, payroll, financial consulting";

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 font-sans flex items-center justify-center">
        <SEO title="Service Not Found | Ananya Tax Co" />
        <div className="max-w-md mx-auto text-center px-4 bg-white p-10 rounded-3xl border border-black/5 shadow-xl">
          <HelpCircle className="w-16 h-16 text-brand-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-brand-primary mb-2 font-heading">Service Not Found</h2>
          <p className="text-text-mid text-sm mb-6">
            The service page you are looking for does not exist or has been moved.
          </p>
          <Link href="/services" className="btn-primary">
            Back to All Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComp = service.icon;

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      <SEO 
        title={seoTitle} 
        description={seoDescription} 
        keywords={seoKeywords} 
      />

      {/* ── HERO BANNER ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A0D14] via-[#121722] to-[#0A0D14] text-white pt-28 sm:pt-36 pb-16 sm:pb-24">
        {/* Subtle Ambient Brand Glow Backdrops */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-orange rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-amber-500 rounded-full blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 font-heading">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 hover:text-brand-orange transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Services</span>
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-[200px] sm:max-w-none">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-7">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="px-3.5 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider font-heading">
                  {service.category.toUpperCase()}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/20 backdrop-blur-md">
                  {service.badge}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                  <span>CPA Verified</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 font-heading leading-tight tracking-tight">
                {service.title}
              </h1>

              {/* Short Intro */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-sans font-normal max-w-2xl">
                {service.shortDesc}
              </p>

              {/* Value Highlights */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-medium mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                  All 50 US States Covered
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                  100% CPA Accuracy Guarantee
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                  Direct Senior Advisor Access
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="btn-orange text-sm font-bold !px-8 !py-4 rounded-2xl shadow-xl shadow-brand-orange/25 flex items-center gap-2.5 cursor-pointer font-heading tracking-wide"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+13318404241"
                  className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2.5 font-heading tracking-wide"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  Call +1 (331) 840-4241
                </a>
              </div>
            </div>

            {/* Right Column: Service Visual Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 group">
                <img
                  src={service.image || "/services.jpeg"}
                  alt={service.title}
                  className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white backdrop-blur-md bg-black/50 border border-white/15 rounded-2xl p-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
                    <div>
                      <div className="font-bold font-heading text-white">IRS & State Compliant</div>
                      <div className="text-[10px] text-slate-300 font-sans">Licensed Texas CPAs</div>
                    </div>
                  </div>
                  <span className="text-brand-orange font-mono text-xs font-semibold px-2.5 py-1 rounded-lg bg-brand-orange/15 border border-brand-orange/30">Tax Year 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK STATS BAR ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-premium grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-primary/5 text-brand-accent flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-heading mb-0.5">Turnaround Timeline</div>
              <div className="text-sm font-bold text-brand-primary font-heading tracking-tight">{service.timeline}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-primary/5 text-brand-accent flex items-center justify-center shrink-0">
              <User className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-heading mb-0.5">Ideal For</div>
              <div className="text-sm font-bold text-brand-primary font-heading tracking-tight line-clamp-1">{service.idealFor}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-accent/15 text-brand-primary flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-heading mb-0.5">Guarantee & Support</div>
              <div className="text-sm font-bold text-brand-primary font-heading tracking-tight">100% CPA Accuracy Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT (FULL WIDTH) ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-14">
        <div className="space-y-12">

          {/* 1. Overview */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-premium">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary mb-4 font-heading tracking-tight flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-brand-primary/5 text-brand-accent flex items-center justify-center shrink-0">
                <IconComp className="w-5 h-5" />
              </div>
              Overview & Description
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans font-normal">
              {service.longDesc}
            </p>
          </div>

          {/* 2. Sub-Services Showcase (FBAR, ITIN, W4, 4868 Extension) */}
          {service.subServices && (
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-premium space-y-7">
              <div>
                <span className="section-tag !mb-3">Specialized Sub-Services</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary font-heading tracking-tight flex items-center gap-3">
                  <Layers className="w-7 h-7 text-brand-accent shrink-0" />
                  Specialized Sub-Services & Tax Form Support
                </h2>
                <p className="text-slate-500 text-base mt-2 font-sans font-normal">
                  Review or get started with our dedicated individual sub-services tailored for FBAR/FATCA, ITIN, W-4 withholding, and Form 4868 extensions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {service.subServices.map((sub, idx) => (
                  <div
                    key={sub.id || idx}
                    className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/60 flex flex-col justify-between hover:border-brand-accent/50 hover:bg-white transition-all duration-300 shadow-xs group"
                  >
                    <div>
                      {/* Sub-service Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <span className="px-3 py-1 rounded-full bg-brand-primary text-white text-[11px] font-semibold font-heading tracking-wide">
                          {sub.formCode}
                        </span>
                        {/* <span className="px-2.5 py-0.5 rounded-full bg-brand-accent/15 text-brand-primary text-[10px] font-bold uppercase tracking-wider font-heading">
                          {sub.badge}
                        </span> */}
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg font-bold text-brand-primary mb-2.5 font-heading tracking-tight group-hover:text-brand-accent transition-colors">
                        {sub.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 font-sans font-normal">
                        {sub.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6 font-sans">
                        {sub.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                            <span className="text-brand-accent font-bold shrink-0 mt-0.5">✓</span>
                            <span className="leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      href="/contact"
                      className="w-full btn-orange text-xs sm:text-sm font-bold py-3 rounded-xl cursor-pointer flex items-center justify-center gap-2 font-heading shadow-sm tracking-wide"
                    >
                      Start {sub.title}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Complete Scope of Work */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-premium">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary mb-6 font-heading tracking-tight flex items-center gap-3">
              <CheckCircle2 className="w-7 h-7 text-brand-accent" />
              Complete Scope of Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200/60 flex items-start gap-3.5 hover:border-brand-accent/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm font-medium text-slate-700 leading-snug font-sans">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Official Client Deliverables */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-premium">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary mb-6 font-heading tracking-tight flex items-center gap-3">
              <Award className="w-7 h-7 text-brand-accent" />
              Official Deliverables Package
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-5 rounded-2xl bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-sm font-semibold font-heading tracking-tight"
                >
                  <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Required Documents Checklist */}
          {service.requiredDocuments && (
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-premium">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary mb-6 font-heading tracking-tight flex items-center gap-3">
                <FileText className="w-7 h-7 text-brand-accent" />
                What You Need to Provide
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.requiredDocuments.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 text-sm font-medium text-slate-700 font-sans"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-accent shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Service-Specific FAQs */}
          {service.faqs && (
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-premium">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary mb-6 font-heading tracking-tight flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-accent" />
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/60 space-y-2.5">
                    <h3 className="text-base font-bold text-brand-primary font-heading tracking-tight flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-accent shrink-0" />
                      {faq.q}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed pl-5 font-sans font-normal">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. Bottom Call To Action Banner */}
          <div className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-2xl border border-white/15">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 font-heading tracking-tight">
                Ready to Get Started with {service.title}?
              </h2>
              <p className="text-white/90 text-sm sm:text-base mb-8 font-sans font-medium leading-relaxed">
                Connect directly with our licensed Texas CPAs and tax specialists to prepare your filings with 100% precision, guaranteed compliance, and maximum tax savings.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-brand-primary text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:bg-brand-secondary transition-all cursor-pointer font-heading text-sm sm:text-base flex items-center gap-2"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 text-brand-accent" />
                </Link>
                <a
                  href="tel:+13318404241"
                  className="bg-white text-brand-primary font-bold px-8 py-4 rounded-2xl shadow-lg hover:bg-slate-50 transition-all font-heading text-sm sm:text-base flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-accent" />
                  Call +1 (331) 840-4241
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
