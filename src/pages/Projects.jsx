import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PROJECTS } from "@/data/site";
import { ProjectRow } from "@/components/ProjectRow";

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    let timeoutId;
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        timeoutId = setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
      }
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [location]);

  return (
    <div data-testid="page-projects" className="bg-cream">
      {/* HERO */}
      <section className="border-b border-forest/25">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-16">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta mb-6">
                — The work
              </div>
              <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-medium text-forest tracking-tighter text-balance">
                Projects.<br />
                <span className="italic">Six of them.</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="font-body text-base md:text-lg text-forest-light leading-relaxed">
                Each project is a promise we keep every week — with field teams, community
                elders, and volunteers who show up before we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        {PROJECTS.map((p, i) => (
          <div id={p.id} key={p.id}>
            <ProjectRow project={p} i={i} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
