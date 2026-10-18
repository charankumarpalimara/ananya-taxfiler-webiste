"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

const testimonialsRow1 = [
  {
    name: "Rakesh",
    initials: "R",
    location: "Houston, TX",
    tag: "Small Business Owner",
    review: "Very knowledgeable, fast and efficient team with great customer service. I would definitely recommend Ananya Tax Co to all my business partners.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Sekhar Chebrolu",
    initials: "SC",
    location: "Dallas, TX",
    tag: "Corporate Client",
    review: "I recently worked with Ananya Tax Co for my company tax preparation, and I couldn't be more satisfied with the professional service I received.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Siva Kavuri",
    initials: "SK",
    location: "Austin, TX",
    tag: "Personal Tax Filer",
    review: "Very knowledgeable and helpful. Great service! I strongly recommend Ananya Tax Co for personal tax filing and strategic financial advice.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    name: "Srinivasa Rao Nagineni",
    initials: "SN",
    location: "Cypress, TX",
    tag: "Annual Tax Client",
    review: "They are very professional, prompt and great people to work with. I will definitely use them again for 2024 and going forward.",
    rating: 5,
    date: "2 months ago"
  },
];

const testimonialsRow2 = [
  {
    name: "Ravi A",
    initials: "RA",
    location: "Tomball, TX",
    tag: "Bookkeeping Client",
    review: "Best bookkeeping and tax filing services in Tomball and Cypress. Outstanding attention to detail and tax savings guidance.",
    rating: 5,
    date: "1 week ago"
  },
  {
    name: "Kris Krishna",
    initials: "KK",
    location: "Katy, TX",
    tag: "Multi-State Filer",
    review: "Wonderful experience, very easily done. Took care of my multi-state corporate return effortlessly with maximum compliance.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    name: "Anitha Reddy",
    initials: "AR",
    location: "Sugar Land, TX",
    tag: "Healthcare Business",
    review: "Outstanding accounting team! They guided us through complex tax deductions and saved our business significant capital.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Vikram Sharma",
    initials: "VS",
    location: "Plano, TX",
    tag: "IT Consultant",
    review: "Extremely professional CPAs. They explained every detail clearly and helped streamline our annual tax strategy.",
    rating: 5,
    date: "2 weeks ago"
  },
];

// Duplicate items to ensure smooth seamless infinite scrolling
const fullRow1 = [...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1];
const fullRow2 = [...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2];

export default function Testimonials() {
  const [isHoveredRow1, setIsHoveredRow1] = useState(false);
  const [isHoveredRow2, setIsHoveredRow2] = useState(false);

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative overflow-hidden bg-white">
      {/* Background Soft Subtle Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-brand-secondary/5 via-brand-accent/5 to-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 border border-brand-primary/20 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            Client Reviews & Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4 text-brand-purple">
            What Our Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-green-light to-brand-secondary">
              Say About Us
            </span>
          </h2>
          <p className="text-text-mid text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Trusted by over 500+ small businesses, entrepreneurs, and individuals for fast, reliable, and expert CPA tax solutions.
          </p>

          {/* Trust Summary Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-6 px-6 py-2.5 bg-brand-light border border-[#DCE6F2] rounded-full text-xs sm:text-sm text-text-dark font-medium shadow-sm">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-1 text-brand-purple font-heading">4.9 / 5.0 Rating</span>
            </div>
            <span className="text-[#DCE6F2] hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-text-mid">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="w-4 h-4"
              />
              <span>100+ Verified Google Reviews</span>
            </div>
            <span className="text-[#DCE6F2] hidden sm:inline">|</span>
            <div className="flex items-center gap-1 text-emerald-600 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee Outer Container with Side Fade Masks */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Side Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        {/* Right Side Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* MARQUEE ROW 1 - Scrolling Left */}
        <div
          className="flex mb-6 overflow-hidden select-none"
          onMouseEnter={() => setIsHoveredRow1(true)}
          onMouseLeave={() => setIsHoveredRow1(false)}
        >
          <motion.div
            className="flex gap-6 shrink-0"
            animate={{
              x: isHoveredRow1 ? undefined : ["0%", "-33.333%"],
            }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {fullRow1.map((t, idx) => (
              <TestimonialCard key={`row1-${idx}`} testimonial={t} />
            ))}
          </motion.div>
        </div>

        {/* MARQUEE ROW 2 - Scrolling Right */}
        <div
          className="flex overflow-hidden select-none"
          onMouseEnter={() => setIsHoveredRow2(true)}
          onMouseLeave={() => setIsHoveredRow2(false)}
        >
          <motion.div
            className="flex gap-6 shrink-0"
            animate={{
              x: isHoveredRow2 ? undefined : ["-33.333%", "0%"],
            }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {fullRow2.map((t, idx) => (
              <TestimonialCard key={`row2-${idx}`} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

{/* Uniform, Sleek & Unique Testimonial Card Component */}
function TestimonialCard({ testimonial }) {
  return (
    <div className="w-[340px] sm:w-[380px] shrink-0 bg-white border border-[#DCE6F2] hover:border-brand-secondary/40 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between h-[230px]">
      {/* Background Accent Pill on Hover */}
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-brand-secondary/10 to-brand-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

      {/* Card Header: Avatar & Client Info */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {/* Avatar Circle with Initials */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary text-white font-bold text-sm font-heading flex items-center justify-center shadow-md shadow-brand-primary/20 shrink-0">
              {testimonial.initials}
            </div>
            <div>
              <h4 className="font-bold text-brand-purple font-heading text-base leading-snug group-hover:text-brand-secondary transition-colors">
                {testimonial.name}
              </h4>
              <p className="text-xs text-text-light font-sans">
                {testimonial.tag} • <span className="text-text-mid">{testimonial.location}</span>
              </p>
            </div>
          </div>

          {/* Google Review Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-brand-light border border-[#DCE6F2] rounded-full text-[11px] font-medium text-text-mid shrink-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="w-3.5 h-3.5"
            />
            <span>5.0</span>
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          </div>
        </div>

        {/* Review Quote Text */}
        <div className="relative">
          <Quote className="w-6 h-6 text-brand-accent/20 absolute -top-1 -left-1 pointer-events-none" />
          <p className="text-text-mid text-xs sm:text-sm font-sans italic leading-relaxed pl-5 line-clamp-3">
            "{testimonial.review}"
          </p>
        </div>
      </div>

      {/* Card Footer: Rating Stars & Verified Tag */}
      <div className="flex items-center justify-between border-t border-[#DCE6F2]/80 pt-3.5 mt-4">
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          <span>Verified Client</span>
        </div>
      </div>
    </div>
  );
}

