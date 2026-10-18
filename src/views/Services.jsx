"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SEO from "../components/SEO";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
  ArrowUpRight
} from "lucide-react";
import { servicesData } from "../data/servicesData";
import { useRegisterModal } from "../context/RegisterModalContext";

import CoreServicesShowcase from "../components/CoreServicesShowcase";

export default function Services() {
  const { openRegisterModal } = useRegisterModal();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-20 font-sans">
      <SEO 
        title="Accounting & Tax Services | Ananya Tax Co"
        description="Comprehensive financial solutions including individual & business tax preparation, bookkeeping, payroll management, IRS audit defense, and strategic tax planning."
        keywords="CPA accounting services, professional tax services, tax filing packages, business accounting solutions, payroll services, bookkeeping options, CPA consultation, tax relief"
      />

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md font-heading"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full-Spectrum Financial Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading leading-tight"
          >
            Our Professional Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed font-sans"
          >
            Explore our core US tax & business solutions and specialized practice areas tailored for individuals and businesses across the US.
          </motion.p>
        </div>
      </section>

      {/* ── CORE 6 SERVICES & FLYER SHOWCASE ───────────────────── */}
      <CoreServicesShowcase />

      {/* ── SERVICE LISTING CATALOG ───────────────── */}
      <section id="service-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-30">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="section-tag !mb-3">Complete Service Catalog</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary mb-3 font-heading tracking-tight">
            Tailored Financial Solutions for Every Need
          </h2>
          <p className="text-text-mid text-xs sm:text-sm lg:text-base font-sans font-normal">
            Click on any service card below to view detailed scope, deliverables, turnaround timeline, and CPA guidance.
          </p>
        </div>

        {/* Services Grid with Responsive Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div
                id={service.id}
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (index % 3) * 0.08 }}
                className="bg-white rounded-3xl border border-[#D0DFE8] shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1.5 relative"
              >
                <div
                  onClick={() => router.push(`/services/${service.id}`)}
                  className="cursor-pointer"
                >
                  {/* Image Header with Badge Overlay */}
                  <div className="relative h-44 sm:h-48 lg:h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/30 to-transparent" />

                    {/* Top Badge */}
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-brand-primary/80 border border-white/20 backdrop-blur-md shadow-md font-heading">
                      {service.badge}
                    </div>

                    {/* Floating Icon Badge on Image Bottom */}
                    <div className="absolute bottom-3.5 left-4 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/95 border border-white/80 shadow-lg flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 z-10 backdrop-blur-md">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-6">
                    <div className="text-[11px] font-semibold text-brand-accent uppercase tracking-widest mb-1 font-heading">
                      {service.category.toUpperCase()}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-primary mb-2 font-heading tracking-tight group-hover:text-brand-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-mid text-xs sm:text-sm leading-relaxed font-sans font-normal line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 sm:px-6 py-4 bg-[#F8FAFC] border-t border-black/5 flex items-center justify-between gap-3">
                  <Link
                    href={`/services/${service.id}`}
                    className="text-xs font-bold text-brand-primary hover:text-brand-accent flex items-center gap-1.5 transition-colors font-heading"
                  >
                    View Details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => openRegisterModal(1)}
                    className="btn-orange text-xs !px-4 !py-2 font-bold cursor-pointer shadow-md font-heading"
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── FEATURED SERVICE SPOTLIGHT SHOWCASE ──────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6">
              <span className="section-tag !bg-white/10 !text-brand-accent !border-white/20">
                Specialized Solution Spotlight
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 font-heading">
                Turnkey LLC Registration & <br />
                Business Formation Services
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-8 font-sans">
                Launching a new business or converting your existing entity? We handle your complete Articles of Organization, Federal EIN acquisition, custom Operating Agreement, and registered agent setup across all 50 states.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "50-State Filing Support",
                  "Fast 24-48 Hour Delivery",
                  "Official IRS EIN Letter",
                  "Custom Operating Agreement"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-xs font-bold text-white font-heading">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/services/llc-registration"
                  className="btn-orange text-sm font-bold !px-8 !py-4 rounded-xl shadow-lg font-heading"
                >
                  View LLC Registration Details
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <img
                  src="/services/llc-registration.jpg"
                  alt="LLC Registration Services"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-brand-accent uppercase">All 50 States</div>
                    <div className="text-sm font-bold">100% Guaranteed State Compliance</div>
                  </div>
                  <Sparkles className="w-6 h-6 text-brand-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4-STEP PROCESS WORKFLOW ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Seamless Execution</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-4 font-heading">
            How We Work With You
          </h2>
          <p className="text-text-mid text-base font-sans">
            Our 4-step client onboarding and execution workflow guarantees zero stress, maximum accuracy, and complete transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Free Consultation",
              desc: "We discuss your financial needs, business goals, or tax situation in a 1-on-1 strategy call."
            },
            {
              step: "02",
              title: "Secure Onboarding",
              desc: "Upload required documents safely via our encrypted portal with 256-bit security."
            },
            {
              step: "03",
              title: "CPA Execution",
              desc: "Our certified CPAs prepare returns, perform bookkeeping, or submit LLC registration forms."
            },
            {
              step: "04",
              title: "Review & Filing",
              desc: "We review every line item with you before e-filing with the IRS or state authorities."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-[#D0DFE8] rounded-3xl p-7 shadow-premium hover:shadow-premium-hover transition-all duration-300 relative group">
              <div className="text-4xl font-extrabold text-brand-accent font-heading mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-2 font-heading">
                {item.title}
              </h3>
              <p className="text-xs text-text-mid leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <div className="bg-gradient-to-r from-brand-accent via-brand-gold-light to-brand-accent rounded-3xl p-8 sm:p-12 lg:p-16 text-brand-primary text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primary mb-4 font-heading">
            Ready to Accelerate Your Financial Success?
          </h2>
          <p className="text-brand-primary/90 text-base max-w-2xl mx-auto mb-8 font-sans font-semibold">
            Get started today with Ananya Tax Co. Register now to speak with a CPA or get your tax and bookkeeping filed on time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openRegisterModal(1)}
              className="bg-brand-primary text-white font-bold px-9 py-4 rounded-2xl shadow-xl hover:bg-brand-secondary transition-all cursor-pointer font-heading text-base flex items-center gap-2"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:+13318404241"
              className="bg-white/95 text-brand-primary font-bold px-9 py-4 rounded-2xl shadow-lg hover:bg-white transition-all font-heading text-base flex items-center gap-2"
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
