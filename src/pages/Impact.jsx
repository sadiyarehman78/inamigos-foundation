import React from "react";
import { motion } from "framer-motion";
import { STORIES, IMPACT } from "@/data/site";
import { ImpactStrip } from "@/components/ImpactStrip";

const Impact = () => {
  return (
    <div data-testid="page-impact" className="bg-cream">
      {/* HERO */}
      <section className="border-b border-forest/25">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta mb-8">
            — Field ledger
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-medium text-forest tracking-tighter text-balance">
            Impact, as we <span className="italic text-terracotta">count</span> it.
          </h1>
          <p className="mt-8 font-body text-base md:text-lg text-forest-light max-w-3xl leading-relaxed">
            We publish our numbers because trust is earned in decimals. Every metric below is
            drawn from our field logs, verified quarterly and audited annually.
          </p>
        </div>
      </section>

      <ImpactStrip />

      {/* STORIES */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-8 items-end mb-16">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-terracotta text-sm tracking-widest">— 04</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-4">
              Field Journal
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] font-medium text-forest tracking-tight text-balance">
              Stories, not <span className="italic text-terracotta">statistics</span>.
            </h2>
          </div>
        </div>

        <div className="space-y-24">
          {STORIES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              data-testid={`story-${i}`}
              className={`grid grid-cols-12 gap-8 items-start ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <div className="col-span-12 md:col-span-6 [direction:ltr]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-forest-light">
                  {s.where} · {s.author}
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 md:col-start-8 [direction:ltr]">
                <div className="font-mono text-terracotta text-sm tracking-widest mb-3">— {String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-3xl md:text-5xl leading-[1.05] font-medium text-forest text-balance">
                  "{s.title}"
                </h3>
                <p className="mt-6 font-body text-base md:text-lg text-forest-light leading-relaxed">{s.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* IMPACT TABLE */}
      <section className="bg-cream-200 grain grain-light">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta mb-4">Annexure</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight font-medium text-forest">The ledger, in full.</h2>
          <div className="mt-10 border-t border-forest/25">
            {IMPACT.map((m, i) => (
              <div key={m.label} className="grid grid-cols-12 gap-4 py-6 border-b border-forest/15 items-baseline">
                <div className="col-span-1 font-mono text-terracotta text-sm">0{i + 1}</div>
                <div className="col-span-11 md:col-span-4 font-display text-2xl md:text-3xl text-forest">{m.label}</div>
                <div className="col-span-6 md:col-span-4 font-body text-sm text-forest-light">{m.context}</div>
                <div className="col-span-6 md:col-span-3 font-mono text-2xl md:text-3xl text-forest text-right tracking-tighter">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
