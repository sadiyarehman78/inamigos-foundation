import React from "react";
import { motion } from "framer-motion";
import { TIMELINE, SITE } from "@/data/site";

const About = () => {
  const certifications = SITE?.certifications ?? [];

  return (
    <div data-testid="page-about" className="bg-cream grain grain-light">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-24">
        <div className="grid grid-cols-12 gap-8 items-end border-b border-forest/25 pb-10">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-terracotta text-sm tracking-widest">Chapter I</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-4">
              About the Foundation
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-medium text-forest tracking-tighter text-balance">
              A foundation, in the <span className="italic text-terracotta">literal</span> sense.
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-16">
          <div className="col-span-12 md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="drop-cap font-display text-2xl md:text-3xl leading-[1.15] text-forest font-normal text-balance"
            >
              InAmigos began as an idea passed between a few students in Bilaspur — that
              community was less a noun and more a verb. Something built by returning, again
              and again, to the same street, the same shelter, the same classroom, until the
              distance between "them" and "us" quietly disappeared.
            </motion.p>

            <p className="mt-8 font-body text-base md:text-lg text-forest-light leading-relaxed">
              What began as one bag of rice on one Sunday grew into six formal projects, a
              full field team, and a registered non-profit recognised across India for
              measurable, community-led work. We remain small enough to know the names of
              the people we serve, and large enough that our absence would be felt.
            </p>

            <p className="mt-6 font-body text-base md:text-lg text-forest-light leading-relaxed">
              We are Section 8 registered, 80G and 12A certified, CSR-1 registered, ISO
              9001:2015 accredited, and listed on NGO Darpan — but our real credentials are
              the elders who greet our volunteers by name, and the children who wait at the
              gate on Bachpanshala mornings.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="border-t border-forest/25 pt-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-4">
                At a glance
              </div>
              <ul className="space-y-4 font-body">
                {[
                  ["Founded", "2020"],
                  ["Headquarters", "Bilaspur, Chhattisgarh"],
                  ["Active projects", "6"],
                  ["Recognition", "Top 5 NGOs 2025"],
                  ["Reach", "Central India · Pan-India volunteer network"],
                ].map(([k, v]) => (
                  <li key={k} className="flex justify-between border-b border-forest/15 pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-forest-light">{k}</span>
                    <span className="text-sm text-forest text-right">{v}</span>
                  </li>
                ))}
              </ul>
              {certifications.length > 0 && (
                <>
                  <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">
                    Certifications
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {certifications.map((c, i) => (
                      <span
                        key={`${c}-${i}`}
                        className="font-mono text-[10px] uppercase tracking-widest border border-forest/40 text-forest px-2 py-1"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="mt-28">
          <div className="grid grid-cols-12 gap-8 items-end mb-12">
            <div className="col-span-12 md:col-span-2">
              <div className="font-mono text-terracotta text-sm tracking-widest">Chapter II</div>
            </div>
            <div className="col-span-12 md:col-span-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-4">
                The timeline
              </div>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9] font-medium text-forest tracking-tight text-balance">
                How <span className="italic text-terracotta">five years</span> quietly stack.
              </h2>
            </div>
          </div>

          <div className="divide-y divide-forest/25 border-t border-forest/25">
            {TIMELINE.map((t) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-12 gap-8 py-8 items-baseline group hover:bg-cream-200 transition-colors"
                data-testid={`timeline-${t.year}`}
              >
                <div className="col-span-12 md:col-span-2 font-mono text-2xl md:text-3xl text-terracotta tracking-tight">
                  {t.year}
                </div>
                <div className="col-span-12 md:col-span-10 font-display text-2xl md:text-4xl font-normal text-forest leading-tight text-balance">
                  {t.event}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
