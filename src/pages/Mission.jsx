import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";

const values = [
  { k: "Inclusivity", d: "No one is left at the edge of the table." },
  { k: "Empathy", d: "We listen before we help." },
  { k: "Collaboration", d: "Change is a chorus, not a solo." },
  { k: "Sustainability", d: "We plant what we can protect." },
  { k: "Compassion", d: "Kindness as infrastructure." },
  { k: "Empowerment", d: "We hand back what was always theirs." },
];

const Mission = () => {
  return (
    <div data-testid="page-mission" className="bg-cream">
      {/* HERO */}
      <section className="border-b border-forest/25">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta mb-8">
            — Our Mission
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.82] font-medium text-forest tracking-tighter text-balance">
            To turn <span className="italic text-terracotta">concern</span><br/>
            into <span className="italic">architecture</span>.
          </h1>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-terracotta text-sm tracking-widest">— 01</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mt-2">
              The mission
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display italic text-3xl md:text-5xl text-forest leading-[1.05] font-normal text-balance"
            >
              "{SITE.mission}"
            </motion.p>
            <p className="mt-10 font-body text-base md:text-lg text-forest-light leading-relaxed max-w-3xl drop-cap">
              We believe development is not something done to a community, but something done
              with it. Our mission is not to distribute charity, but to build systems of
              dignity — that education has a lower floor, that stray lives have a witness,
              that a woman's ambition is not a household decision, and that a forest is a
              civic project.
            </p>
          </div>
        </div>
      </section>

      {/* VISION - DARK */}
      <section className="bg-forest text-cream grain">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-2">
              <div className="font-mono text-terracotta text-sm tracking-widest">— 02</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60 mt-2">
                The vision
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9] font-medium text-cream text-balance">
                A country where <span className="italic text-terracotta">no one</span> is invisible on the map of care.
              </h2>
              <p className="mt-8 font-body text-base md:text-lg text-cream/80 leading-relaxed max-w-3xl">
                We imagine an India where a child's future is not decided by their pincode,
                where a woman's independence is a starting condition rather than a milestone,
                and where every stray life — human or otherwise — has a name spoken with warmth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-8 items-end mb-14">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-terracotta text-sm tracking-widest">— 03</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-4">
              Six values, one grammar
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] font-medium text-forest tracking-tight text-balance">
              The rules we <span className="italic text-terracotta">refuse</span> to break.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-forest/20 border-t border-forest/20">
          {values.map((v, i) => (
            <motion.div
              key={v.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              data-testid={`value-${v.k.toLowerCase()}`}
              className="bg-cream p-8 md:p-10"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta">
                0{i + 1}
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-medium text-forest mt-4">{v.k}.</h3>
              <p className="mt-4 font-body text-sm md:text-base text-forest-light leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROMISE / CTA */}
      <section className="bg-terracotta text-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80 mb-4">
                — The promise
              </div>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9] font-medium text-cream text-balance">
                We will keep showing up. <span className="italic">Will you?</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4">
              <Link
                to="/get-involved"
                data-testid="mission-cta-btn"
                className="inline-flex items-center justify-between w-full bg-forest text-cream px-6 py-5 font-body text-xs uppercase tracking-[0.22em] hover:bg-cream hover:text-forest transition-colors"
              >
                Become an Amigo <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
