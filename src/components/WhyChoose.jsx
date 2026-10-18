"use client";

import { motion } from "framer-motion";
import {
  Award,
  Settings,
  ShieldCheck,
  MessageSquare,
  Zap,
  HeartHandshake,
  DollarSign,
  TrendingUp,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const advantages = [
  {
    number: "01",
    title: "Expertise You Can Trust",
    tag: "Certified Team",
    description: "Our team brings extensive experience in U.S. taxation, bookkeeping, payroll management, and financial compliance, ensuring accurate and reliable service every time.",
    icon: <Award className="w-6 h-6" />,
    highlight: "Deep Industry Experience",
  },
  {
    number: "02",
    title: "Personalized Solutions",
    tag: "Custom Fit",
    description: "Every business is unique. We tailor our services to meet your specific needs, helping you achieve your financial goals with confidence.",
    icon: <Settings className="w-6 h-6" />,
    highlight: "Tailored Financial Roadmap",
  },
  {
    number: "03",
    title: "Accuracy & Compliance",
    tag: "IRS Standards",
    description: "We stay current with the latest tax regulations and accounting standards, helping you minimize risks, avoid penalties, and remain fully compliant.",
    icon: <ShieldCheck className="w-6 h-6" />,
    highlight: "100% Tax & Rule Adherence",
  },
  {
    number: "04",
    title: "Transparent Communication",
    tag: "Clear & Honest",
    description: "We believe in clear, honest, and timely communication. You'll always know where your finances stand and receive prompt support whenever you need it.",
    icon: <MessageSquare className="w-6 h-6" />,
    highlight: "Real-Time Progress Updates",
  },
  {
    number: "05",
    title: "Technology-Driven Approach",
    tag: "Cloud & Automation",
    description: "By leveraging modern accounting tools and secure cloud-based systems, we deliver efficient, accurate, and streamlined financial management.",
    icon: <Zap className="w-6 h-6" />,
    highlight: "Automated & Secure Vaults",
  },
  {
    number: "06",
    title: "Dedicated Client Support",
    tag: "Long-Term Partner",
    description: "Your success is our priority. We build long-term relationships by providing responsive service, proactive guidance, and practical solutions.",
    icon: <HeartHandshake className="w-6 h-6" />,
    highlight: "Proactive Advisor Guidance",
  },
  {
    number: "07",
    title: "Cost-Effective Services",
    tag: "Smart Savings",
    description: "Receive professional accounting and tax expertise without the overhead cost of maintaining an in-house finance department.",
    icon: <DollarSign className="w-6 h-6" />,
    highlight: "Zero In-House Overhead",
  },
  {
    number: "08",
    title: "Your Growth Partner",
    tag: "Future Ready",
    description: "Whether you're a startup, small business, or growing enterprise, Ananya Tax Co is committed to helping you build a stronger financial future.",
    icon: <TrendingUp className="w-6 h-6" />,
    highlight: "Scalable Growth Focus",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-16 sm:py-20 relative overflow-hidden bg-white">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none bg-[linear-gradient(to_right,#EDF2F7_1px,transparent_1px),linear-gradient(to_bottom,#EDF2F7_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="section-tag inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span>Why Businesses Choose Ananya</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading leading-[1.15] mb-4">
            <span className="text-brand-primary">Why Businesses Choose</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary">
              Ananya Tax Co
            </span>
          </h2>

          <p className="text-lg sm:text-xl font-bold text-brand-secondary tracking-wide font-heading mt-2">
            Built on Trust. Driven by Results.
          </p>
        </motion.div>

        {/* 4-Column Grid of Modern Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.45 }}
              className="group bg-white rounded-3xl p-7 border border-[#DCE6F2] hover:border-brand-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 relative flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top gradient accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary transition-all duration-500" />

              <div>
                {/* Top Row: Icon + Number */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/15 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>

                  <span className="text-xs font-bold font-heading text-text-light/50">
                    {item.number}
                  </span>
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-brand-accent-dark bg-brand-accent/15 border border-brand-accent/25 px-2.5 py-0.5 rounded-full inline-block mb-3 font-heading">
                  {item.tag}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-brand-dark mb-2 font-heading group-hover:text-brand-primary transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-text-mid text-xs sm:text-sm leading-relaxed font-sans mb-5">
                  {item.description}
                </p>
              </div>

              {/* Bottom Feature Pill */}
              <div className="pt-3.5 border-t border-[#DCE6F2] flex items-center gap-2 text-xs font-semibold text-text-dark font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                <span>{item.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


