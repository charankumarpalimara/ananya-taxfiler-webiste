"use client";

import { motion } from "framer-motion";
import { Package, UserPlus, UploadCloud, Coffee, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Service",
    tag: "Step 01",
    description: "Select the professional solution that fits your goals.",
    icon: <Package className="w-6 h-6" />,
    perk: "Tailored Solutions",
  },
  {
    number: "02",
    title: "Consult With Our Experts",
    tag: "Step 02",
    description: "Receive expert advice tailored to your needs.",
    icon: <UserPlus className="w-6 h-6" />,
    perk: "1-on-1 Advice",
  },
  {
    number: "03",
    title: "Submit Your Information",
    tag: "Step 03",
    description: "Share your details securely and efficiently.",
    icon: <UploadCloud className="w-6 h-6" />,
    perk: "Encrypted & Secure",
  },
  {
    number: "04",
    title: "Relax & Grow",
    tag: "Step 04",
    description: "We handle the complexities while you focus on growth.",
    icon: <Coffee className="w-6 h-6" />,
    perk: "Hassle-Free Growth",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 relative overflow-hidden bg-white">
      {/* Background Subtle Tech Grid */}
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
            <span>THE ANANYA PROCESS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading leading-[1.15] mb-4">
            <span className="text-brand-primary">Your Financial Success in</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary">
              4 Simple Steps.
            </span>
          </h2>
        </motion.div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl p-7 border border-[#DCE6F2] hover:border-brand-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 relative flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top indicator border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary transition-all duration-500" />

              {/* Step number watermark */}
              <div className="absolute top-4 right-5 text-5xl font-black font-heading text-text-light/10 select-none group-hover:text-brand-primary/10 transition-colors">
                {step.number}
              </div>

              <div>
                {/* Icon */}
                <div className="w-13 h-13 rounded-2xl bg-brand-primary/10 border border-brand-primary/15 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  {step.icon}
                </div>

                {/* Step Badge */}
                <div className="text-[11px] font-bold uppercase tracking-wider text-brand-accent-dark bg-brand-accent/15 border border-brand-accent/25 px-2.5 py-0.5 rounded-full inline-block mb-3 font-heading">
                  {step.tag}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-brand-dark mb-2.5 font-heading group-hover:text-brand-primary transition-colors leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-text-mid text-xs sm:text-sm leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              {/* Bottom Feature Line */}
              <div className="pt-4 mt-6 border-t border-[#DCE6F2] flex items-center gap-2 text-xs font-semibold text-text-dark font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                <span>{step.perk}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


