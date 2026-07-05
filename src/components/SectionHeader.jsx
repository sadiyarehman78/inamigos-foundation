import React from "react";
import { motion } from "framer-motion";

export const SectionHeader = ({ index, kicker, title, subtitle, align = "left", light = false }) => {
  const color = light ? "text-cream" : "text-forest";
  const sub = light ? "text-cream/70" : "text-forest-light";
  const accent = "text-terracotta";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      data-testid="section-header"
      className={`grid grid-cols-12 gap-6 items-end ${align === "center" ? "text-center justify-items-center" : ""}`}
    >
      <div className="col-span-12 md:col-span-2">
        {index && (
          <div className={`font-mono text-sm tracking-widest ${accent}`}>— {index}</div>
        )}
      </div>
      <div className="col-span-12 md:col-span-7">
        {kicker && (
          <div className={`font-mono text-[10px] uppercase tracking-[0.3em] mb-4 ${sub}`}>{kicker}</div>
        )}
        <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] font-medium tracking-tight ${color} text-balance`}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <div className="col-span-12 md:col-span-3">
          <p className={`font-body text-sm md:text-base leading-relaxed ${sub}`}>{subtitle}</p>
        </div>
      )}
    </motion.div>
  );
};

export default SectionHeader;
