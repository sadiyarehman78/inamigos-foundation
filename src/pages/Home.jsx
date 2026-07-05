import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Heart } from "lucide-react";
import { SITE, PROJECTS, STORIES } from "@/data/site";
import { ImpactStrip } from "@/components/ImpactStrip";

const Home = () => {
  return (
    <div data-testid="page-home">
      {/* HERO */}
      <section className="relative bg-cream grain overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-16 md:pb-24">
          {/* Top meta strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-10 border-b border-forest/25">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light">
              Volume 05 · Winter Field Report
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light">
              Bilaspur · Chhattisgarh · India
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta">
              {SITE.recognition}
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-10 mt-14 md:mt-20 items-start">
            <div className="col-span-12 md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-terracotta mb-6">
                  — Uniting minds for change.
                </div>
                <h1
                  data-testid="hero-headline"
                  className="font-display text-[13vw] md:text-[9vw] lg:text-[7.2rem] leading-[0.85] font-medium text-forest tracking-tighter text-balance"
                >
                  A registered non-profit,{" "}
                  <span className="italic text-terracotta">acting</span>{" "}
                  on it.
                </h1>
                <p className="mt-8 font-body text-base md:text-lg leading-relaxed text-forest-light max-w-xl">
                  InAmigos Foundation is a Section 8 registered non-profit based in Bilaspur,
                  Chhattisgarh — 80G and 12A certified, CSR-1 registered, and ISO 9001:2015
                  accredited. We work across education, women's empowerment, animal welfare,
                  and environmental action, one project at a time.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/get-involved#donate"
                    data-testid="hero-donate-btn"
                    className="inline-flex items-center gap-3 bg-terracotta text-cream px-8 py-4 font-body text-xs uppercase tracking-[0.22em] hover:bg-forest transition-colors"
                  >
                    <Heart size={14} /> Donate now
                  </Link>
                  <Link
                    to="/projects"
                    data-testid="hero-projects-btn"
                    className="inline-flex items-center gap-3 border border-forest text-forest px-8 py-4 font-body text-xs uppercase tracking-[0.22em] hover:bg-forest hover:text-cream transition-colors"
                  >
                    See the work <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="col-span-12 md:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc8e-qTUZ4vLSaJWwrJwVU_uAzGoEimDJIMXOP1GK_A&s=10"
                    alt="InAmigos Foundation field activity"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 bg-cream px-3 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-forest border border-forest">
                  Field / Project Jeev
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div className="font-body text-xs text-forest-light max-w-[220px]">
                    "Over 50+ stray dogs cared for through Project Jeev — one adoption drive at a time."
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-forest-light">— Gallery →</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stat teasers */}
          <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-forest/20">
            {[
              ["20,000+", "Saplings planted"],
              ["900+", "Girls empowered"],
              ["50+", "Animals fed daily"],
              ["6", "Active projects"],
            ].map(([v, l]) => (
              <div key={l} className="bg-cream p-6">
                <div className="font-mono text-3xl md:text-4xl text-forest tracking-tighter">{v}</div>
                <div className="font-body text-xs uppercase tracking-widest text-forest-light mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION EDITORIAL */}
      <section className="bg-cream-200 grain grain-light">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-2">
              <div className="font-mono text-terracotta text-sm tracking-widest">— 01</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light">
                What we believe
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className="drop-cap font-display text-3xl md:text-5xl leading-[1.05] text-forest font-normal text-balance">
                We were never meant to be spectators of each other's lives. InAmigos exists because a village
                elder asked us for shade, a girl asked for a book, and a stray asked for a name — and we
                decided that a country is only as gentle as its answers to those questions.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  to="/mission"
                  data-testid="home-read-mission"
                  className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] text-forest border-b border-forest pb-1 hover:text-terracotta hover:border-terracotta"
                >
                  Read our mission <ArrowUpRight size={14} />
                </Link>
                <div className="font-mono text-[10px] uppercase tracking-widest text-forest-light">
                  Est. 2020 · Bilaspur, CG
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT PREVIEW */}
      <section className="bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-8 items-end mb-12">
            <div className="col-span-12 md:col-span-2">
              <div className="font-mono text-terracotta text-sm tracking-widest">— 02</div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-4">
                The six pillars
              </div>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.92] font-medium text-forest tracking-tight text-balance">
                Six projects. <span className="italic text-terracotta">One promise</span>.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-3">
              <p className="font-body text-sm text-forest-light leading-relaxed">
                Each project began with a person, not a plan. Read how a foundation is built
                street by street, name by name.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {/* Featured big */}
            <Link
              to="/projects#prakriti"
              data-testid="home-project-prakriti"
              className="col-span-12 md:col-span-7 group"
            >
              <div className="relative overflow-hidden aspect-[16/11]">
                <img src={PROJECTS[0].image} alt={PROJECTS[0].name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta">
                    {PROJECTS[0].index} · {PROJECTS[0].kicker}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-medium text-forest mt-2">{PROJECTS[0].name}</h3>
                </div>
                <div className="font-mono text-sm text-forest">{PROJECTS[0].metric}</div>
              </div>
              <p className="mt-3 font-body text-sm text-forest-light max-w-lg">{PROJECTS[0].summary}</p>
            </Link>

            {/* Right column */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
              {PROJECTS.slice(1, 3).map((p) => (
                <Link
                  to={`/projects#${p.id}`}
                  key={p.id}
                  data-testid={`home-project-${p.id}`}
                  className="group border-t border-forest/25 pt-6 flex gap-6"
                >
                  <div className="w-32 h-40 overflow-hidden shrink-0">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta">
                      {p.index} · {p.kicker}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-medium text-forest mt-2">{p.name}</h3>
                    <p className="mt-2 font-body text-sm text-forest-light">{p.summary}</p>
                    <div className="mt-3 font-mono text-xs text-forest">{p.metric}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom three */}
            {PROJECTS.slice(3).map((p) => (
              <Link
                to={`/projects#${p.id}`}
                key={p.id}
                data-testid={`home-project-${p.id}`}
                className="col-span-12 md:col-span-4 group border-t border-forest/25 pt-6"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="mt-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta">{p.index} · {p.kicker}</div>
                  <h3 className="font-display text-2xl font-medium text-forest mt-2">{p.name}</h3>
                  <p className="mt-2 font-body text-sm text-forest-light">{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              to="/projects"
              data-testid="home-view-all-projects"
              className="inline-flex items-center gap-3 border border-forest text-forest px-8 py-4 font-body text-xs uppercase tracking-[0.22em] hover:bg-forest hover:text-cream transition-colors"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <ImpactStrip />

      {/* EDITORIAL STORY */}
      <section className="bg-cream grain grain-light">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-6">
              <img
                src={STORIES[0].image}
                alt={STORIES[0].title}
                className="w-full aspect-[4/5] object-cover grayscale"
              />
              <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-forest-light">
                {STORIES[0].where} · {STORIES[0].author}
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <div className="font-mono text-terracotta text-sm tracking-widest mb-4">— 04</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-6">
                Story of the season
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] font-medium text-forest text-balance">
                "{STORIES[0].title}"
              </h2>
              <p className="mt-8 font-body text-base md:text-lg text-forest-light leading-relaxed">
                {STORIES[0].excerpt}
              </p>
              <Link
                to="/impact"
                data-testid="home-read-story"
                className="mt-8 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] text-forest border-b border-forest pb-1 hover:text-terracotta hover:border-terracotta"
              >
                Read more stories <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta text-cream grain">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80 mb-6">
                — Take one step
              </div>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-medium text-cream text-balance">
                Give ₹500. Feed ten <span className="italic">streets</span>.
              </h2>
              <p className="mt-6 font-body text-lg text-cream/90 max-w-2xl">
                Every rupee is pooled and allocated across food, education, animal care, and afforestation.
                Every donation is 80G tax-exempt.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
              <Link
                to="/get-involved#donate"
                data-testid="cta-donate-btn"
                className="inline-flex items-center justify-between bg-forest text-cream px-6 py-5 font-body text-xs uppercase tracking-[0.22em] hover:bg-cream hover:text-forest transition-colors"
              >
                Donate now <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/get-involved#volunteer"
                data-testid="cta-volunteer-btn"
                className="inline-flex items-center justify-between bg-cream text-forest px-6 py-5 font-body text-xs uppercase tracking-[0.22em] hover:bg-forest hover:text-cream transition-colors"
              >
                Volunteer with us <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
