"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import CoreServicesShowcase from "../components/CoreServicesShowcase";
import Features from "../components/Features";
import WhyChoose from "../components/WhyChoose";
import Process from "../components/Process";
import Packages from "../components/Packages";
import Deliverables from "../components/Deliverables";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div className="bg-white">
      <SEO 
        title="Ananya Tax Co | Trusted CPA Tax, Bookkeeping & Payroll Services"
        description="Expert CPA tax preparation, tax filing, bookkeeping, payroll, and strategic financial consulting for individuals & businesses nationwide. Schedule a free consultation today!"
        keywords="CPA tax filing, tax preparation services, online tax return, small business accounting, personal tax preparation, CPA firm near me, IRS tax relief, business tax returns, tax refund optimization, licensed Texas CPA, bookkeeping services"
      />
      <Hero />
      <About />
      <CoreServicesShowcase />
      <Features />
      <WhyChoose />
      <Process />
      {/* <Packages /> */}
      <Deliverables />
      <Testimonials />
      <Contact />
    </div>
  );
}
