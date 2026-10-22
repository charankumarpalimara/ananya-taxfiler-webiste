"use client";

import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Check,
  Globe,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Star,
  User,
  CalendarCheck,
} from "lucide-react";
import { useState, useMemo } from "react";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61556566266312",
    color: "#1877F2",
    svg: (
      <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nexgenaccountinggroup?stkn=djYxY2ZjcXR6a2J4",
    color: "#E1306C",
    svg: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/the-pumpkin-taxco/about/",
    color: "#0A66C2",
    svg: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
  },
];

// Exactly 3 CST time slots
const timeSlots = [
  "08:00 AM - 11:00 AM CST",
  "11:00 AM - 02:00 PM CST",
  "02:00 PM - 05:00 PM CST"
];

const servicesList = [
  "individual & Business Tax Filings",
  "Bookkeeping",
  "Payroll",
  "Tax Planning",
  "Consulation Call",
  // "Exit Strategy Consulting",
];

const leadSources = [
  "Google Search",
  "Social Media (Instagram / Facebook)",
  "LinkedIn",
  "CPA / Attorney Referral",
  "Friend or Colleague",
  "Billboard / Local Ad",
  "Other",
];

const STEPS = [
  { id: 1, title: "Date & Time", subtitle: "Choose Schedule", icon: Calendar },
  { id: 2, title: "Your Details", subtitle: "Contact & Needs", icon: User },
];

export default function Contact() {
  const today = new Date();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(today);
  const [isDateConfirmed, setIsDateConfirmed] = useState(false); // Controls hiding the calendar
  const [selectedTime, setSelectedTime] = useState("08:00 AM - 11:00 AM CST");
  const [calendarDate, setCalendarDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredLanguage: "English",
    services: ["Tax Preparation"],
    leadSource: "Google Search",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Toggle Services Checkboxes
  const toggleService = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  // Step 1 Validation
  const validateStep1 = () => {
    const errs = {};
    if (!selectedDate) errs.date = "Please select a date from the calendar";
    if (!selectedTime) errs.time = "Please choose a time slot";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Step 2 Validation (User Information Form)
  const validateStep2 = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = "First name is required";
    if (!formData.lastName.trim()) errs.lastName = "Last name is required";

    // Strict Email Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address (e.g. name@example.com)";
    }

    // Phone Number Validation (Exactly 10 digits)
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (phoneDigits.length !== 10) {
      errs.phone = "Please enter a valid 10-digit phone number";
    }

    if (formData.services.length === 0) {
      errs.services = "Please pick at least one service";
    }
    if (!formData.leadSource) {
      errs.leadSource = "Please select how you found us";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContinueToForm = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleBackToCalendar = () => {
    setErrors({});
    setCurrentStep(1);
  };

  // Direct Frontend Dispatch to Official Mail
  const NOTIFICATION_EMAIL = "Info@ananyataxco.com";
  const GOOGLE_SHEET_WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL || "";

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);

    const bookingPayload = {
      timestamp: new Date().toLocaleString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      clientName: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      preferredLanguage: formData.preferredLanguage || "English",
      scheduledDate: selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      scheduledTime: `${selectedTime} Central Time (CST)`,
      services: Array.isArray(formData.services) ? formData.services : [formData.services],
      leadSource: formData.leadSource,
      notes: formData.message || "None provided",
      type: "consultation",
    };

    // Direct Frontend Email Notification to Info@ananyataxco.com
    try {
      if (GOOGLE_SHEET_WEBHOOK_URL) {
        fetch(GOOGLE_SHEET_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingPayload),
        }).catch((e) => console.warn("Google Sheet Webhook error:", e));
      }

      const emailRes = await fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Ananya Tax Co Appointment: ${formData.firstName} ${formData.lastName}`,
          "Client Name": bookingPayload.clientName,
          "Client Email": bookingPayload.email,
          "Client Phone": bookingPayload.phone,
          "Preferred Language": bookingPayload.preferredLanguage,
          "Scheduled Date": bookingPayload.scheduledDate,
          "Scheduled Time": bookingPayload.scheduledTime,
          "Services Requested": bookingPayload.services.join(", "),
          "How Did You Find Us": bookingPayload.leadSource,
          "Client Notes": bookingPayload.notes,
          _replyto: bookingPayload.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      const emailData = await emailRes.json();
      console.log("FormSubmit Email Notification Response:", emailData);
    } catch (err) {
      console.error("External email notification error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setSelectedDate(today);
    setIsDateConfirmed(false);
    setSelectedTime("08:00 AM - 11:00 AM CST");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      preferredLanguage: "English",
      services: ["Tax Preparation"],
      leadSource: "Google Search",
      message: "",
    });
    setErrors({});
  };

  // Calendar calculations
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const calendarDays = useMemo(() => {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const days = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({ day: daysInPrevMonth - i, currentMonth: false, date: new Date(year, month - 1, daysInPrevMonth - i) });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, currentMonth: true, date: new Date(year, month, i) });
    }
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ day: i, currentMonth: false, date: new Date(year, month + 1, i) });
    }
    return days;
  }, [calendarDate]);

  const isSameDay = (a, b) =>
    a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const isPastDate = (date) => {
    const check = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return check < now;
  };

  const prevMonth = () => setCalendarDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const nextMonth = () => setCalendarDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));

  return (
    <div className="min-h-screen bg-[#FBFDFF] pt-24 pb-20 overflow-x-hidden">
      <SEO
        title="Contact Us & Book a Free CPA Consultation | Ananya Tax Co"
        description="Get in touch with licensed CPAs at Ananya Tax Co. Schedule a free consultation for tax filing, bookkeeping, or payroll services."
        keywords="contact CPA firm, free tax consultation, book accounting appointment, CPA near me, tax advisor contact, tax preparation quote, CPA phone number"
      />
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative py-10 lg:py-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 border border-brand-primary/20 mb-4 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              1-on-1 CPA Consultation
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-purple mb-3 font-heading"
            >
              Book Your Appointment With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
                Our Certified CPAs
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-text-mid font-sans max-w-2xl mx-auto"
            >
              Select your consultation date &amp; time slot, then provide your details for an instant CPA booking.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Main Layout: Form (Left) & Image Showcase (Right) ───────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* ══════════════════════════════════════════════════════════
              LEFT COLUMN: 
              Step 1: Calendar -> (on date click) hides calendar & shows only time slots
              Step 2: User Information Form + Submit
             ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-premium border border-slate-100 relative overflow-hidden">
              {/* Decorative soft glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-[90px] -mr-32 -mt-32 pointer-events-none" />

              {/* Progress Steps Header */}
              <div className="mb-6 relative z-10">
                <div className="grid grid-cols-2 gap-3 relative pb-3">
                  {STEPS.map((step) => {
                    const StepIcon = step.icon;
                    const isActive = currentStep === step.id;
                    const isCompleted = currentStep > step.id || isSubmitted;

                    return (
                      <div
                        key={step.id}
                        onClick={() => {
                          if (step.id < currentStep && !isSubmitted) {
                            setCurrentStep(step.id);
                          }
                        }}
                        className={`flex items-center gap-2.5 transition-all duration-300 ${step.id < currentStep && !isSubmitted ? "cursor-pointer" : ""
                          } ${isActive
                            ? "opacity-100"
                            : isCompleted
                              ? "opacity-90"
                              : "opacity-40"
                          }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs transition-all duration-300 shadow-xs shrink-0 ${isCompleted
                            ? "bg-emerald-500 text-white"
                            : isActive
                              ? "bg-brand-primary text-white ring-4 ring-brand-primary/15"
                              : "bg-slate-100 text-slate-500"
                            }`}
                        >
                          {isCompleted ? (
                            <Check className="w-4 h-4 stroke-[3]" />
                          ) : (
                            <StepIcon className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-text-light">
                            Step 0{step.id}
                          </p>
                          <p
                            className={`text-xs sm:text-sm font-bold font-heading line-clamp-1 ${isActive ? "text-brand-purple" : "text-slate-600"
                              }`}
                          >
                            {step.title}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Animated Horizontal Progress Bar */}
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-full"
                    initial={{ width: "50%" }}
                    animate={{
                      width: isSubmitted ? "100%" : currentStep === 1 ? "50%" : "100%",
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Step Content */}
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    /* ────────────────────────── SUCCESS CONFIRMATION ────────────────────────── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-6 text-center font-sans"
                    >
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/10">
                        <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
                      </div>

                      <span className="inline-block px-3 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider rounded-full mb-2">
                        Appointment Confirmed
                      </span>

                      <h2 className="text-2xl font-bold text-brand-purple mb-2 font-heading">
                        Thank You, {formData.firstName}!
                      </h2>

                      <p className="text-text-mid text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
                        Your consultation has been reserved. A confirmation receipt with meeting links has been sent to{" "}
                        <strong className="text-brand-purple">{formData.email}</strong>.
                      </p>

                      {/* Summary Box */}
                      <div className="bg-slate-50 border border-[#DCE6F2] rounded-2xl p-4 max-w-md mx-auto text-left mb-6 space-y-2.5 text-xs">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                          <span className="text-text-light font-semibold uppercase tracking-wider">Date</span>
                          <span className="font-bold text-brand-purple">
                            {selectedDate.toLocaleDateString("en-US", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                          <span className="text-text-light font-semibold uppercase tracking-wider">Time</span>
                          <span className="font-bold text-brand-secondary bg-brand-secondary/10 px-2 py-0.5 rounded-md">
                            {selectedTime} CST
                          </span>
                        </div>
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                          <span className="text-text-light font-semibold uppercase tracking-wider">Client</span>
                          <span className="font-bold text-slate-800">
                            {formData.firstName} {formData.lastName}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-text-light font-semibold uppercase tracking-wider">Services</span>
                          <span className="font-medium text-slate-700 text-right max-w-[200px] truncate">
                            {formData.services.join(", ")}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-primary text-white font-bold text-xs shadow-md hover:bg-brand-primary/90 transition-all cursor-pointer"
                        >
                          Book Another Appointment
                        </button>
                        <a
                          href="tel:+13318404241"
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-all text-center"
                        >
                          Call Us Directly
                        </a>
                      </div>
                    </motion.div>
                  ) : currentStep === 1 ? (
                    /* ────────────────────────── STEP 1: CALENDAR (HIDE ON SELECT) -> ONLY TIME SLOTS ────────────────────────── */
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-lg sm:text-xl font-black text-brand-purple font-heading">
                            {!isDateConfirmed ? "Select Date" : "Select Time Slot"}
                          </h2>
                          <p className="text-text-mid text-xs mt-0.5 font-sans">
                            {!isDateConfirmed
                              ? "Click a date from the calendar to view available time slots."
                              : "Choose one of the 3 available slots in Central Standard Time (CST)."}
                          </p>
                        </div>
                      </div>

                      {/* State A: CALENDAR (Shown before a date is selected, hidden after) */}
                      {!isDateConfirmed ? (
                        <motion.div
                          key="calendar-view"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4"
                        >
                          {/* Compact Calendar */}
                          <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 font-sans max-w-md mx-auto">
                            {/* Month Nav */}
                            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                                <span className="text-xs sm:text-sm font-bold text-brand-purple">
                                  {monthNames[calendarDate.getMonth()]} {calendarDate.getFullYear()}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={prevMonth}
                                  className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                                  title="Previous month"
                                >
                                  <ChevronLeft className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={nextMonth}
                                  className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                                  title="Next month"
                                >
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            {/* Weekday Labels */}
                            <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
                              {dayNames.map((d) => (
                                <div
                                  key={d}
                                  className="text-[10px] font-bold uppercase tracking-wider text-slate-400 py-0.5"
                                >
                                  {d}
                                </div>
                              ))}
                            </div>

                            {/* Compact Days Grid */}
                            <div className="grid grid-cols-7 gap-1">
                              {calendarDays.map((item, idx) => {
                                const isSelected = isSameDay(item.date, selectedDate);
                                const isToday = isSameDay(item.date, today);
                                const past = isPastDate(item.date);

                                return (
                                  <button
                                    type="button"
                                    key={idx}
                                    disabled={past}
                                    onClick={() => {
                                      setSelectedDate(item.date);
                                      setIsDateConfirmed(true); // Automatically hide calendar & show time slots!
                                      if (errors.date) setErrors((prev) => ({ ...prev, date: "" }));
                                    }}
                                    className={`w-8 h-8 sm:w-9 sm:h-9 mx-auto rounded-lg text-xs font-semibold transition-all duration-150 flex items-center justify-center cursor-pointer ${past
                                      ? "text-slate-300 opacity-30 cursor-not-allowed pointer-events-none"
                                      : isSelected
                                        ? "bg-brand-primary text-white shadow-sm shadow-brand-primary/30 font-bold scale-105"
                                        : isToday
                                          ? "bg-brand-primary/10 text-brand-primary border border-brand-primary/30 font-bold"
                                          : item.currentMonth
                                            ? "text-slate-700 hover:bg-white hover:shadow-xs"
                                            : "text-slate-300 pointer-events-none"
                                      }`}
                                  >
                                    {item.day}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <p className="text-center text-[11px] text-text-light font-sans">
                            👆 Click any available date to proceed directly to time slots.
                          </p>

                          {errors.date && (
                            <p className="text-red-500 text-xs font-medium text-center">{errors.date}</p>
                          )}
                        </motion.div>
                      ) : (
                        /* State B: ONLY TIME SLOTS (Calendar is hidden!) */
                        <motion.div
                          key="time-slots-view"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-4"
                        >
                          {/* Selected Date Banner with 'Change Date' Button to re-open calendar */}
                          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex items-center justify-between font-sans">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                                <Calendar className="w-5 h-5" />
                              </div>
                              <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                  Selected Date
                                </span>
                                <span className="text-sm font-bold text-brand-purple">
                                  {selectedDate.toLocaleDateString("en-US", {
                                    weekday: "long",
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  })}
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => setIsDateConfirmed(false)}
                              className="text-xs font-bold text-brand-secondary hover:text-brand-primary hover:underline px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-brand-secondary/40 transition-all cursor-pointer"
                            >
                              Change Date
                            </button>
                          </div>

                          {/* Exactly 3 Time Slots */}
                          <div className="bg-brand-primary/5 border border-brand-primary/15 rounded-2xl p-5 font-sans">
                            <label className="block text-xs font-bold text-brand-purple uppercase tracking-wider mb-3 flex items-center gap-2">
                              <Clock className="w-4 h-4 text-brand-primary" />
                              Select One Time Slot (Central Time)
                            </label>

                            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
                              {timeSlots.map((time) => {
                                const isSelected = selectedTime === time;
                                return (
                                  <button
                                    type="button"
                                    key={time}
                                    onClick={() => {
                                      setSelectedTime(time);
                                      if (errors.time) setErrors((prev) => ({ ...prev, time: "" }));
                                    }}
                                    className={`py-3.5 px-2 rounded-xl text-xs font-bold transition-all border cursor-pointer text-center flex flex-col items-center justify-center gap-1 ${isSelected
                                      ? "bg-brand-secondary text-white border-brand-secondary shadow-md shadow-brand-secondary/20 scale-102"
                                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                                      }`}
                                  >
                                    <span className="text-xs sm:text-sm font-bold">{time}</span>
                                    <span
                                      className={`text-[10px] font-medium uppercase tracking-wider ${isSelected ? "text-white/85" : "text-slate-400"
                                        }`}
                                    >
                                      Central
                                    </span>
                                  </button>
                                );
                              })}
                            </div>

                            {errors.time && (
                              <p className="text-red-500 text-xs font-medium mt-2">{errors.time}</p>
                            )}
                          </div>

                          {/* One Clear Button to Continue to Form */}
                          <div className="pt-2">
                            <button
                              type="button"
                              onClick={handleContinueToForm}
                              className="w-full py-3.5 px-6 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                              <span>Continue to Your Information</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ) : (
                    /* ────────────────────────── STEP 2: USER INFORMATION FORM ────────────────────────── */
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-lg sm:text-xl font-black text-brand-purple font-heading">
                            Enter Your Information
                          </h2>
                          <p className="text-text-mid text-xs mt-0.5 font-sans">
                            Complete your details to lock in your CPA consultation.
                          </p>
                        </div>
                      </div>

                      {/* Confirmed Slot Chip with Edit option */}
                      <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3 flex items-center justify-between font-sans">
                        <div className="flex items-center gap-2 text-xs text-emerald-950">
                          <CalendarCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>
                            Slot:{" "}
                            <strong>
                              {selectedDate.toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              })}
                            </strong>{" "}
                            at <strong>{selectedTime} CST</strong>
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={handleBackToCalendar}
                          className="text-[11px] font-bold text-brand-secondary hover:underline cursor-pointer"
                        >
                          Change Slot
                        </button>
                      </div>

                      <form onSubmit={handleFinalSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
                        {/* Name Fields */}
                        <div className="grid sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                              First Name <span className="text-brand-accent font-bold">*</span>
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                              <input
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => {
                                  setFormData({ ...formData, firstName: e.target.value });
                                  if (errors.firstName) setErrors({ ...errors, firstName: "" });
                                }}
                                className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border ${errors.firstName
                                  ? "border-red-400 focus:border-red-500 ring-2 ring-red-100"
                                  : "border-slate-200 focus:border-brand-primary"
                                  } text-xs text-text-dark placeholder:text-slate-400 focus:bg-white focus:outline-none transition-all`}
                                placeholder="Sarah"
                              />
                            </div>
                            {errors.firstName && (
                              <p className="text-red-500 text-[11px] mt-1">{errors.firstName}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                              Last Name <span className="text-brand-accent font-bold">*</span>
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                              <input
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => {
                                  setFormData({ ...formData, lastName: e.target.value });
                                  if (errors.lastName) setErrors({ ...errors, lastName: "" });
                                }}
                                className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border ${errors.lastName
                                  ? "border-red-400 focus:border-red-500 ring-2 ring-red-100"
                                  : "border-slate-200 focus:border-brand-primary"
                                  } text-xs text-text-dark placeholder:text-slate-400 focus:bg-white focus:outline-none transition-all`}
                                placeholder="Jenkins"
                              />
                            </div>
                            {errors.lastName && (
                              <p className="text-red-500 text-[11px] mt-1">{errors.lastName}</p>
                            )}
                          </div>
                        </div>

                        {/* Email & Phone */}
                        <div className="grid sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                              Email Address <span className="text-brand-accent font-bold">*</span>
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => {
                                  setFormData({ ...formData, email: e.target.value });
                                  if (errors.email) setErrors({ ...errors, email: "" });
                                }}
                                className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border ${errors.email
                                  ? "border-red-400 focus:border-red-500 ring-2 ring-red-100"
                                  : "border-slate-200 focus:border-brand-primary"
                                  } text-xs text-text-dark placeholder:text-slate-400 focus:bg-white focus:outline-none transition-all`}
                                placeholder="sarah@company.com"
                              />
                            </div>
                            {errors.email && (
                              <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                              Phone Number <span className="text-brand-accent font-bold">*</span>
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                              <input
                                type="tel"
                                maxLength={10}
                                value={formData.phone}
                                onChange={(e) => {
                                  const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                                  setFormData({ ...formData, phone: digitsOnly });
                                  if (errors.phone) setErrors({ ...errors, phone: "" });
                                }}
                                className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border ${errors.phone
                                  ? "border-red-400 focus:border-red-500 ring-2 ring-red-100"
                                  : "border-slate-200 focus:border-brand-primary"
                                  } text-xs text-text-dark placeholder:text-slate-400 focus:bg-white focus:outline-none transition-all`}
                                placeholder="1234567890"
                              />
                            </div>
                            {errors.phone && (
                              <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>
                            )}
                          </div>
                        </div>

                        {/* Preferred Language */}
                        {/* <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Globe className="w-3.5 h-3.5 text-brand-primary" />
                            Preferred Language
                          </label>
                          <div className="flex gap-2.5">
                            {["English", "Spanish"].map((lang) => {
                              const isSelected = formData.preferredLanguage === lang;
                              return (
                                <button
                                  type="button"
                                  key={lang}
                                  onClick={() => setFormData({ ...formData, preferredLanguage: lang })}
                                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${isSelected
                                    ? "bg-brand-primary text-white border-brand-primary shadow-xs"
                                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                                    }`}
                                >
                                  <span
                                    className={`w-3 h-3 rounded-full border flex items-center justify-center ${isSelected ? "border-white bg-white" : "border-slate-400"
                                      }`}
                                  >
                                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />}
                                  </span>
                                  {lang}
                                </button>
                              );
                            })}
                          </div>
                        </div> */}

                        {/* Services Grid */}
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                            Services Needed: <span className="text-brand-accent font-bold">*</span>
                          </label>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {servicesList.map((service) => {
                              const isChecked = formData.services.includes(service);
                              return (
                                <div
                                  key={service}
                                  onClick={() => {
                                    toggleService(service);
                                    if (errors.services) setErrors({ ...errors, services: "" });
                                  }}
                                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all select-none ${isChecked
                                    ? "bg-brand-primary/5 border-brand-primary text-brand-primary font-bold shadow-xs"
                                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                                    }`}
                                >
                                  <div
                                    className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 transition-colors ${isChecked
                                      ? "bg-brand-primary text-white"
                                      : "border border-slate-300 bg-white"
                                      }`}
                                  >
                                    {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                  </div>
                                  <span className="leading-tight">{service}</span>
                                </div>
                              );
                            })}
                          </div>
                          {errors.services && (
                            <p className="text-red-500 text-[11px] mt-1">{errors.services}</p>
                          )}
                        </div>

                        {/* How did you find us */}
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <HelpCircle className="w-3.5 h-3.5 text-brand-secondary" />
                            How did you find us? <span className="text-brand-accent font-bold">*</span>
                          </label>
                          <div className="relative">
                            <select
                              value={formData.leadSource}
                              onChange={(e) => {
                                setFormData({ ...formData, leadSource: e.target.value });
                                if (errors.leadSource) setErrors({ ...errors, leadSource: "" });
                              }}
                              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-text-dark focus:bg-white focus:border-brand-primary focus:outline-none transition-all appearance-none cursor-pointer"
                            >
                              <option value="">Select an option</option>
                              {leadSources.map((source) => (
                                <option key={source} value={source}>
                                  {source}
                                </option>
                              ))}
                            </select>
                            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none rotate-90" />
                          </div>
                          {errors.leadSource && (
                            <p className="text-red-500 text-[11px] mt-1">{errors.leadSource}</p>
                          )}
                        </div>

                        {/* Optional Notes */}
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                            Additional Notes (Optional)
                          </label>
                          <textarea
                            rows={2}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-text-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary focus:outline-none transition-all resize-none"
                            placeholder="Briefly describe your situation..."
                          />
                        </div>

                        {/* Buttons: Back + Submit */}
                        <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={handleBackToCalendar}
                            disabled={isSubmitting}
                            className="px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Back</span>
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 py-3 px-5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                          >
                            {isSubmitting ? (
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                              <>
                                <span>Confirm &amp; Book Appointment</span>
                                <Send className="w-3.5 h-3.5" />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              RIGHT COLUMN: Professional Image Showcase & Trust Cards
             ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">

            {/* Visual CPA Image Showcase Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-5 sm:p-6 shadow-premium border border-slate-100 relative overflow-hidden group"
            >
              {/* Ambient brand glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[90px] pointer-events-none -ml-20 -mb-20" />

              <div className="relative z-10">
                {/* Main Image Frame */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-brand-primary/5 to-slate-50 border border-slate-100 mb-4 aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
                  <img
                    src="/images/nexgen_senior_cpa_portrait.png"
                    alt="Senior CPA Expert Advisors"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Micro-Badge Top Left: Rating */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-slate-200/80 shadow-md flex items-center gap-1.5"
                  >
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-[11px] font-bold text-brand-purple">5.0 Star CPA Advisory</span>
                  </motion.div>

                  {/* Floating Micro-Badge Bottom Right: Response time */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-slate-200/80 shadow-md flex items-center gap-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                    <span className="text-[11px] font-bold text-brand-purple">2-Hour Fast Reply</span>
                  </motion.div>
                </div>

                {/* Team Tagline & Description */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <h3 className="text-base font-bold text-brand-purple font-heading">
                      Certified &amp; Texas-Licensed CPAs
                    </h3>
                  </div>
                  <p className="text-text-mid text-xs leading-relaxed font-sans">
                    Work directly with credentialed tax authorities. We optimize business deductions, manage IRS communications, and structure forward-looking wealth strategies.
                  </p>
                </div>

                {/* Direct Contact Links */}
                <div className="grid sm:grid-cols-2 gap-2.5 pt-3.5 border-t border-slate-100">
                  <a
                    href="tel:+13318404241"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 hover:bg-brand-primary/5 hover:border-brand-primary/30 border border-slate-200/80 transition-all group/call"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 group-hover/call:bg-brand-primary group-hover/call:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Direct Phone</p>
                      <p className="text-xs font-bold text-brand-purple">+1 (331) 840-4241</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@ananyataxco.com"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 hover:bg-brand-secondary/5 hover:border-brand-secondary/30 border border-slate-200/80 transition-all group/mail"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-secondary/10 text-brand-secondary flex items-center justify-center shrink-0 group-hover/mail:bg-brand-secondary group-hover/mail:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Official Email</p>
                      <p className="text-xs font-bold text-brand-purple truncate max-w-[160px] sm:max-w-none">
                        info@ananyataxco.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Office Location & Business Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-purple text-xs sm:text-sm font-heading">
                    Montgomery Headquarters
                  </h4>
                  <p className="text-text-mid text-xs font-sans mt-0.5 leading-snug">
                    6609 Firefly Lane, Taylor Lakes Community, Montgomery, AL 36116
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100">
                <div className="flex items-center gap-1.5 mb-2">
                  <Clock className="w-3.5 h-3.5 text-brand-secondary" />
                  <span className="text-xs font-bold text-brand-purple font-heading">Business Hours (CST)</span>
                </div>
                <div className="space-y-1 text-xs text-text-mid font-sans">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-bold text-slate-800">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-bold text-slate-800">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-rose-500 font-bold">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* ── Social Media Channels ────────────────────────────── */}
      <section className="mt-16 pt-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-base font-bold text-brand-purple mb-5 font-heading">
            Connect With Us Online
          </h3>
          <div className="flex justify-center gap-3.5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-text-light hover:text-brand-primary hover:shadow-md hover:-translate-y-0.5 transition-all border border-slate-200/80 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  {social.svg}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
