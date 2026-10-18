"use client";

import { useState, useEffect } from "react";
import { createSubmission } from "../services/api";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, Clock, ArrowRight, Sparkles, CheckCircle2, MessageSquare } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Direct Phone",
    value: "+1 (331) 840-4241",
    href: "tel:+13318404241",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Official Email",
    value: "info@ananyataxco.com",
    href: "mailto:info@ananyataxco.com",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Business Hours",
    value: "Mon – Fri: 9AM – 6PM CST",
    href: null,
  },
];

const guaranteeCards = [
  {
    icon: "⚡",
    badge: "2-Hour Response",
    title: "Fast Expert Response",
    desc: "Our CPA advisors review and reply to all consultation inquiries within 2 business hours guaranteed.",
  },
  {
    icon: "🛡️",
    badge: "Bank-Grade Security",
    title: "Encrypted Document Portal",
    desc: "Strict client confidentiality & 256-bit encryption protocols keeping your tax data completely protected.",
  },
  {
    icon: "💰",
    badge: "Maximum Deductions",
    title: "Max Legal Tax Savings",
    desc: "Comprehensive review of all financial streams to legally maximize deductions and minimize tax liability.",
  },
  {
    icon: "👨‍💼",
    badge: "Certified CPAs",
    title: "1-on-1 Dedicated CPA Support",
    desc: "Work directly with Texas-licensed CPAs who understand corporate and individual tax codes in depth.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % guaranteeCards.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = e.target;
      const inputs = form.querySelectorAll('input, select, textarea');
      const serviceVal = inputs[4]?.value || 'General Inquiry';
      const serviceName = serviceVal === 'taxes' ? 'Personal & Corporate Tax Filing' :
        serviceVal === 'bookkeeping' ? 'Bookkeeping & Financial Statements' :
          serviceVal === 'payroll' ? 'Payroll & Compliance' :
            serviceVal === 'planning' ? 'Strategic Tax Planning' : 'Other Inquiry';

      const payload = {
        firstName: inputs[0]?.value || '',
        lastName: inputs[1]?.value || '',
        clientName: `${inputs[0]?.value || ''} ${inputs[1]?.value || ''}`.trim() || 'Website Visitor',
        email: inputs[2]?.value || '',
        phone: inputs[3]?.value || '',
        services: [serviceName],
        notes: inputs[5]?.value || 'Submitted via homepage quick contact form',
        scheduledDate: 'Not Scheduled',
        scheduledTime: 'Direct Message',
        leadSource: 'Homepage Contact Form',
        type: 'quick_contact',
      };

      await createSubmission(payload);
    } catch {
      // Silent fallback
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-10 sm:py-10 relative overflow-hidden bg-white">
      {/* Background Soft Subtle Glow Accents */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 border border-brand-primary/20 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-4">
            <span className="text-brand-primary">Ready to grow </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary font-bold">
              your business?
            </span>
          </h2>
          <p className="text-text-mid text-base sm:text-lg max-w-xl mx-auto font-sans leading-relaxed italic">
            "Every successful partnership begins with an Introduction."
          </p>
        </motion.div>

        {/* Main Grid Layout - Equal Height Stretched Columns */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">

          {/* Left Column — Contact Information & Auto-Scrolling Card (Matches Right Height) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col justify-between h-full gap-3.5"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white border border-[#DCE6F2] hover:border-brand-secondary/40 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group flex-1"
              >
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-gradient-to-br group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-text-light uppercase tracking-wider mb-0.5 font-heading">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-brand-purple text-sm font-semibold hover:text-brand-secondary transition-colors whitespace-pre-line leading-snug font-sans block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-brand-purple text-sm font-semibold whitespace-pre-line leading-snug font-sans">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Direct Consultation Link Banner */}
            <Link
              href="/contact"
              className="group flex items-center justify-between bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl p-4 sm:p-5 text-white hover:shadow-lg hover:scale-[1.01] transition-all duration-300 border border-white/10 shrink-0"
            >
              <div>
                <p className="font-bold font-heading text-sm sm:text-base leading-tight">Visit full contact page</p>
                <p className="text-white/80 text-xs mt-0.5 font-sans">Get in touch with our team</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-brand-primary transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Single Auto-Scrolling Guarantee Card (No Extra Heading, Clean 1-by-1 Slide) */}
            <div className="bg-white border border-[#DCE6F2] hover:border-brand-secondary/40 rounded-xl p-4 shadow-sm relative overflow-hidden transition-all duration-300 min-h-[105px] flex flex-col justify-between shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex flex-col justify-between h-full"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{guaranteeCards[activeCard].icon}</span>
                      <h4 className="font-bold text-xs sm:text-sm text-brand-purple font-heading">
                        {guaranteeCards[activeCard].title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-full shrink-0">
                      {guaranteeCards[activeCard].badge}
                    </span>
                  </div>
                  <p className="text-xs text-text-mid font-sans leading-relaxed">
                    {guaranteeCards[activeCard].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Slider Pagination Indicator Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-2 mt-2 border-t border-[#DCE6F2]/60">
                {guaranteeCards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCard(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === activeCard ? "w-5 bg-brand-accent" : "w-1.5 bg-[#DCE6F2] hover:bg-brand-primary/30"
                      }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column — Contact Form (Matches Left Height) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white border border-[#DCE6F2] rounded-2xl p-6 sm:p-8 shadow-xl shadow-brand-primary/5 flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DCE6F2]">
                <div className="w-10 h-10 rounded-full bg-brand-accent/15 flex items-center justify-center text-brand-accent shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-purple font-heading">Send Us a Direct Message</h3>
                  <p className="text-xs text-text-light font-sans">Fill in your details for a quick expert consultation.</p>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-purple font-heading mb-2">Message Received!</h4>
                  <p className="text-text-mid text-sm font-sans max-w-md mx-auto mb-6">
                    Thank you for reaching out. A dedicated CPA tax advisor will review your message and contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-brand-light border border-[#DCE6F2] rounded-xl text-sm font-semibold text-brand-primary hover:bg-brand-primary/5 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCE6F2] text-text-dark text-sm placeholder:text-text-light/60 focus:border-brand-secondary focus:bg-white focus:ring-4 focus:ring-brand-secondary/10 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCE6F2] text-text-dark text-sm placeholder:text-text-light/60 focus:border-brand-secondary focus:bg-white focus:ring-4 focus:ring-brand-secondary/10 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCE6F2] text-text-dark text-sm placeholder:text-text-light/60 focus:border-brand-secondary focus:bg-white focus:ring-4 focus:ring-brand-secondary/10 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        onChange={(e) => {
                          e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCE6F2] text-text-dark text-sm placeholder:text-text-light/60 focus:border-brand-secondary focus:bg-white focus:ring-4 focus:ring-brand-secondary/10 outline-none transition-all"
                        placeholder="1234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">
                      Service Needed
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCE6F2] text-text-dark text-sm focus:border-brand-secondary focus:bg-white focus:ring-4 focus:ring-brand-secondary/10 outline-none transition-all">
                      <option value="">Select a service category...</option>
                      <option value="taxes">Personal & Corporate Tax Filing</option>
                      <option value="bookkeeping">Bookkeeping & Financial Statements</option>
                      <option value="payroll">Payroll & Compliance</option>
                      <option value="planning">Strategic Tax Planning</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">
                      Message Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="3"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCE6F2] text-text-dark text-sm placeholder:text-text-light/60 focus:border-brand-secondary focus:bg-white focus:ring-4 focus:ring-brand-secondary/10 outline-none transition-all resize-none"
                      placeholder="Tell us about your business or specific tax needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-8 bg-gradient-to-r from-brand-accent to-brand-green-dark hover:from-brand-green-light hover:to-brand-accent text-white font-bold font-heading rounded-xl shadow-lg shadow-brand-accent/25 hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group text-base active:scale-[0.99] disabled:opacity-70 mt-2"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Let's Get Started</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


