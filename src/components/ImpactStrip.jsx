import React from "react";
import { motion } from "framer-motion";
import { IMPACT, TICKER_ITEMS } from "@/data/site";

export const ImpactStrip = () => {
  const tickerItems = TICKER_ITEMS ?? [
    "Uniting Minds For Change",
    "Become an Amigo",
    "80G Tax Exempt",
    "Section 8 Registered",
    "Top 5 NGOs of 2025",
    "CSR-1 · 12A · ISO 9001:2015",
  ];

  const impactData = IMPACT ?? [];

  return (
    <section data-testid="impact-strip" className="relative bg-forest text-cream grain overflow-hidden">
      {/* Marquee ticker */}
      <div className="relative z-10 border-b border-cream/15 py-5 overflow-hidden">
        <div
          aria-hidden="true"
          className="flex whitespace-nowrap animate-marquee gap-16 font-mono text-[11px] uppercase tracking-[0.28em] text-cream/70"
        >
          {Array(2).fill(0).map((_, k) => (
            <div key={k} className="flex gap-16 shrink-0">
              {tickerItems.map((item, i) => (
                <span key={`${k}-${i}`}>· {item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-8 items-end mb-16">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-terracotta text-sm tracking-widest">— 03</div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60 mb-4">
              Field ledger
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] font-medium text-cream text-balance">
              We do not measure <span className="italic text-terracotta">intent</span>.<br />
              We count the <span className="italic">lives touched</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-cream/15">
          {impactData.map((m, i) => (
            <motion.div
              key={m.tag ?? i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="bg-forest p-8 md:p-10"
              data-testid={`impact-metric-${i}`}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta">{m.tag}</div>
              <div className="font-mono text-5xl md:text-6xl lg:text-7xl mt-4 text-cream leading-none tracking-tighter">
                {m.value}
              </div>
              <div className="mt-4 font-display text-xl md:text-2xl text-cream leading-tight">
                {m.label}
              </div>
              <div className="mt-2 font-body text-sm text-cream/60 leading-snug">{m.context}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStrip;
