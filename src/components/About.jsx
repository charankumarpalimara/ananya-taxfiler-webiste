"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Award, Users, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function About() {
  const pillars = [
    {
      title: "Strategic Tax Advisory",
      description: "Proactive planning designed to reduce liabilities and maximize financial opportunities.",
    },
    {
      title: "Dedicated Financial Experts",
      description: "Personalized support from experienced professionals who understand your unique needs.",
    },
    {
      title: "Secure & Transparent Process",
      description: "Reliable, confidential, and technology-driven solutions you can trust.",
    },
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "10k+", label: "Filings Completed" },
    { number: "99.8%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-10 relative overflow-hidden bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column — Visual Image & Stats Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl bg-white p-2 border border-[#DCE6F2] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Ananya Tax Co Advisory Team"
                className="rounded-2xl w-full h-[460px] sm:h-[500px] object-cover"
              />
            </div>

            {/* Top Metric Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute top-6 left-6 bg-white/95 backdrop-blur-md border border-[#DCE6F2] px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-accent/15 flex items-center justify-center text-brand-accent-dark">
                <TrendingUp className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-text-light font-heading uppercase tracking-wider">Client Savings</div>
                <div className="text-sm font-extrabold text-brand-primary font-sans">$10M+ Retained</div>
              </div>
            </motion.div>

            {/* Bottom Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-3 sm:-right-6 bg-brand-primary text-white p-6 rounded-3xl shadow-xl z-20 border border-white/10 max-w-[230px]"
            >
              <div className="text-4xl font-extrabold font-heading text-white mb-1 leading-none">15+</div>
              <div className="text-white/90 text-sm font-semibold font-sans mb-1">Years of Excellence</div>
              <div className="text-white/60 text-xs font-sans">Serving 10,000+ satisfied clients</div>
            </motion.div>
          </motion.div>

          {/* Right Column — Content & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="section-tag flex items-center gap-2 w-fit mb-4">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <span>About Ananya Tax Co</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-primary tracking-tight mb-5 leading-[1.15] font-heading">
              Financial Expertise. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary font-bold">
                Trusted Guidance. Proven Results.
              </span>
            </h2>

            <p className="text-text-mid leading-relaxed mb-6 text-sm sm:text-base font-sans">
              At Ananya Tax Co, we specialize in simplifying complex tax structures, bookkeeping, and payroll workflows for individuals, startups, and enterprises across North America.
            </p>

            {/* Stats Row */}
            {/* <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-[#F7FAFC] border border-[#DCE6F2]">
              {stats.map((st, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-brand-primary font-heading">{st.number}</div>
                  <div className="text-[11px] font-semibold text-text-light font-sans">{st.label}</div>
                </div>
              ))}
            </div> */}

            {/* Pillars */}
            <div className="space-y-3 mb-8">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#DCE6F2] hover:border-brand-primary/30 transition-all flex items-start gap-3.5 group shadow-sm"
                >
                  <div className="w-8 h-8 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-brand-dark font-heading mb-0.5 group-hover:text-brand-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-mid font-sans leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic CTA Button */}
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary bg-[length:200%_auto] hover:bg-right transition-all duration-500 rounded-xl shadow-lg shadow-brand-accent/25 hover:shadow-brand-secondary/35 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}


