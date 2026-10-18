"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function Packages() {
  const taxPackages = [
    { name: "Deliverables", solo: "Solo", partnership: "Partnership", llc: "LLC", scorp: "S-Corp" },
    { name: "Federal Tax Filing", solo: true, partnership: true, llc: true, scorp: true },
    { name: "State Tax Filing", solo: true, partnership: true, llc: true, scorp: true },
    { name: "Quarterly Estimates", solo: true, partnership: true, llc: true, scorp: true },
    { name: "Tax Planning", solo: true, partnership: true, llc: true, scorp: true },
    { name: "Audit Support", solo: true, partnership: true, llc: true, scorp: true },
    { name: "E-file Notification", solo: true, partnership: true, llc: true, scorp: true },
  ];

  return (
    <section id="packages" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-bg-light to-white" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag-orange">Our Plans</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-6 font-heading">Ananya Tax Packages</h2>
          <p className="text-lg text-text-mid font-sans">
            Tailored tax solutions for every business structure. Choose the plan that fits your growth.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-[2rem] shadow-2xl shadow-black/5 border border-black/5 bg-white"
        >
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-brand-purple text-white">
                <th className="p-8 text-left font-heading text-lg">Taxation Deliverables</th>
                <th className="p-8 text-center font-heading text-lg">Solo</th>
                <th className="p-8 text-center font-heading text-lg">Partnership</th>
                <th className="p-8 text-center font-heading text-lg">LLC</th>
                <th className="p-8 text-center font-heading text-lg">S-Corp</th>
              </tr>
            </thead>
            <tbody>
              {taxPackages.slice(1).map((pkg, idx) => (
                <tr key={idx} className="border-b border-black/5 hover:bg-brand-purple/[0.02] transition-colors group">
                  <td className="p-6 px-8 text-text-dark font-semibold font-sans group-hover:text-brand-purple transition-colors">{pkg.name}</td>
                  <td className="p-6 text-center">
                    <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto text-brand-orange">
                      <Check className="w-5 h-5" />
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto text-brand-orange">
                      <Check className="w-5 h-5" />
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto text-brand-orange">
                      <Check className="w-5 h-5" />
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto text-brand-orange">
                      <Check className="w-5 h-5" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6">
          <p className="text-text-light text-sm italic font-sans">
            * Detailed tables for Bookkeeping and Payroll are available during consultation.
          </p>
          <button className="bg-brand-purple text-white px-8 py-3 rounded-full font-bold hover:bg-brand-purple-dark transition-all hover:scale-105 shadow-lg shadow-brand-purple/20 font-sans">
            Download Full Price List
          </button>
        </div>
      </div>
    </section>
  );
}
