"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  BookOpen,
  Receipt,
  Calculator,
  Home,
  Building2,
  Send,
  ShieldCheck,
  ChevronRight,
  FileText
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();

  if (pathname?.startsWith("/dashboard")) {
    return null;
  }

  const handleNavClick = (e, path) => {
    if (path.startsWith("/#") || path.startsWith("#")) {
      e.preventDefault();
      const targetId = path.replace("/", "");
      if (pathname !== "/") {
        router.push("/" + targetId);
        setTimeout(() => {
          document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const links = {
    services: [
      { name: "All Services", path: "/services", icon: BookOpen },
      { name: "Tax Forms & Hub", path: "/forms", icon: FileText },
      { name: "Bookkeeping", path: "/bookkeeping", icon: BookOpen },
      { name: "Payroll", path: "/payroll", icon: Receipt },
      { name: "Tax Services", path: "/taxes", icon: Calculator },
    ],
    company: [
      { name: "Home", path: "/", icon: Home },
      { name: "About Us", path: "/#about", icon: Building2 },
      { name: "Contact", path: "/contact", icon: Send },
    ],
    social: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61556566266312",
        hoverBg: "hover:bg-[#1877F2] hover:border-[#1877F2]",
        d: "M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/nexgenaccountinggroup?stkn=djYxY2ZjcXR6a2J4",
        hoverBg: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent",
        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
      },
      {
        name: "Twitter / X",
        href: "https://twitter.com/PumpkinTaxco",
        hoverBg: "hover:bg-black hover:border-white/30",
        d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/the-pumpkin-taxco/about/",
        hoverBg: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
        d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
      },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-[#061524] via-[#0B2238] to-[#14385C] relative overflow-hidden text-white pt-20 pb-8 border-t border-white/10">
      {/* Ambient Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-8">

          {/* Brand Col (5 cols on lg) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <img
                src="/new-logo.jpeg"
                alt="Ananya Tax Co Logo"
                className="h-14 w-auto object-contain rounded-2xl shadow-lg border border-white/10 group-hover:scale-105 transition-all duration-300"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl font-heading tracking-tight text-white leading-tight">
                  ANANYA <span className="text-brand-orange">TAX CO</span>
                </span>
                <span className="text-[11px] font-medium text-white/70 uppercase tracking-widest leading-none mt-1">
                  Bookkeeping • Payroll • Taxes
                </span>
              </div>
            </Link>
            <p className="text-white/75 text-sm leading-relaxed mb-6 font-sans max-w-sm">
              Professional accounting, payroll, and tax services designed to simplify your finances and help your business grow with confidence.
            </p>

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-semibold mb-6 backdrop-blur-sm shadow-sm">
              <ShieldCheck className="w-4 h-4 text-brand-accent" />
              <span>100% Secure & IRS Compliant</span>
            </div>

            {/* Social Icons with individual brand colors */}
            <div className="flex gap-2.5">
              {links.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white/80 ${social.hoverBg} hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-white mb-6 font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              Services
            </h3>
            <ul className="space-y-3">
              {links.services.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="group flex items-center gap-3 p-2 -ml-2 rounded-xl hover:bg-white/10 transition-all text-white/75 hover:text-white text-sm font-sans"
                    >
                      <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-200 shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-white mb-6 font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              Company
            </h3>
            <ul className="space-y-3">
              {links.company.map((link) => {
                const Icon = link.icon;
                const isAnchor = link.path.startsWith("/#") || link.path.startsWith("#");
                return (
                  <li key={link.name}>
                    {isAnchor ? (
                      <a
                        href={link.path}
                        onClick={(e) => handleNavClick(e, link.path)}
                        className="group flex items-center gap-3 p-2 -ml-2 rounded-xl hover:bg-white/10 transition-all text-white/75 hover:text-white text-sm font-sans"
                      >
                        <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-200 shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                      </a>
                    ) : (
                      <Link
                        href={link.path}
                        className="group flex items-center gap-3 p-2 -ml-2 rounded-xl hover:bg-white/10 transition-all text-white/75 hover:text-white text-sm font-sans"
                      >
                        <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-200 shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Col (4 cols on lg) */}
          <div className="lg:col-span-4">
            <h3 className="text-base font-bold text-white mb-6 font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              Get In Touch
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="https://www.google.com/maps/place/6609+Firefly+Ln,+Montgomery,+AL+36116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-2.5 -ml-2.5 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/15 transition-all text-white/75 hover:text-white"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-sans leading-relaxed">
                    <span className="block text-white font-semibold mb-0.5">Montgomery Office</span>
                    <span className="text-white/75 group-hover:text-white/95">
                      6609 Firefly Lane<br />
                      Taylor Lakes Community<br />
                      Montgomery, AL 36116
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="tel:+13318404241"
                  className="group flex items-center gap-3 p-2.5 -ml-2.5 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/15 transition-all text-white/75 hover:text-white"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-sans">
                    <span className="block text-[11px] uppercase tracking-wider font-bold text-brand-accent">Call Us Directly</span>
                    <span className="text-white font-medium">+1 (331) 840-4241</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:annachi.pradeep@ananytaxco.com"
                  className="group flex items-center gap-3 p-2.5 -ml-2.5 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/15 transition-all text-white/75 hover:text-white"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-sans">
                    <span className="block text-[11px] uppercase tracking-wider font-bold text-brand-accent">Email Us</span>
                    <span className="text-white font-medium">annachi.pradeep@ananytaxco.com</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs font-sans text-center md:text-left">
            © {currentYear} <span className="text-white font-semibold">Ananya Tax Co</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/60 font-sans">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a href="#" className="hover:text-brand-accent transition-colors">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

