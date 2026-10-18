"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Calculator,
  HeartHandshake,
  Layers,
  Lock,
  BarChart3,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Accuracy & Compliance",
    tag: "Regulatory Compliance",
    description: "Reliable financial management with full regulatory compliance.",
    icon: <ShieldCheck className="w-6 h-6" />,
    perk: "Zero Penalties & Full Accuracy",
  },
  {
    number: "02",
    title: "Tax Optimization",
    tag: "Maximize Savings",
    description: "Strategic tax solutions designed to maximize savings.",
    icon: <Calculator className="w-6 h-6" />,
    perk: "Proactive Tax Reduction",
  },
  {
    number: "03",
    title: "Dedicated Support",
    tag: "Personalized Care",
    description: "Personalized assistance whenever your business needs it.",
    icon: <HeartHandshake className="w-6 h-6" />,
    perk: "Direct Specialist Access",
  },
  {
    number: "04",
    title: "Scalable Solutions",
    tag: "Every Growth Stage",
    description: "Services tailored to support businesses at every stage of growth.",
    icon: <Layers className="w-6 h-6" />,
    perk: "Flexible Business Scaling",
  },
  {
    number: "05",
    title: "Data Security",
    tag: "Confidential & Safe",
    description: "Confidential and secure handling of financial information.",
    icon: <Lock className="w-6 h-6" />,
    perk: "Bank-Grade Encryption",
  },
  {
    number: "06",
    title: "Growth-Focused Advisory",
    tag: "Strategic Insights",
    description: "Insights that help drive smarter business decisions.",
    icon: <BarChart3 className="w-6 h-6" />,
    perk: "Smarter Business Decisions",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 relative overflow-hidden bg-white">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[linear-gradient(to_right,#EDF2F7_1px,transparent_1px),linear-gradient(to_bottom,#EDF2F7_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Ambient Gradient Glows */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[450px] h-[450px] bg-brand-accent/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span>Key Advantages</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading leading-[1.15] mb-4"
          >
            <span className="text-brand-primary">The Key Advantages of</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary font-bold">
              Our Financial Expertise.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-mid text-base sm:text-lg font-sans leading-relaxed"
          >
            Combining strategic insight and regulatory precision to give your business an undeniable financial edge.
          </motion.p>
        </div>

        {/* 3-Column Modern Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="group bg-white rounded-2xl p-8 border border-[#DCE6F2] hover:border-brand-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 relative flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top indicator border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary transition-all duration-500" />

              {/* Corner soft glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/10 transition-all pointer-events-none" />

              <div>
                {/* Top Row: Icon + Number & Tag Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-brand-primary/10 border border-brand-primary/15 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    {feature.icon}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-accent/15 text-brand-accent-dark border border-brand-accent/25 tracking-wide">
                      {feature.tag}
                    </span>
                    <span className="text-sm font-bold text-text-light/50 font-heading">
                      {feature.number}
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-brand-dark mb-3 font-heading group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-text-mid text-sm sm:text-base leading-relaxed font-sans mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Row: Feature Perk */}
              <div className="pt-4 border-t border-[#DCE6F2] flex items-center gap-2 text-xs font-semibold text-text-dark font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                <span>{feature.perk}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


