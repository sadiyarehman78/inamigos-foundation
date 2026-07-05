import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectRow = ({ project, i }) => {
  const flip = i % 2 === 1;
  const summaryTag = project?.summary?.split(",")[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`project-row-${project.id}`}
      className="border-t border-forest/25 py-12 md:py-16 group"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className={`md:col-span-1 ${flip ? "md:order-2" : ""}`}>
          <div className="font-mono text-terracotta text-lg tracking-widest">{project.index}</div>
        </div>

        <div className={`md:col-span-5 ${flip ? "md:order-3" : ""}`}>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-4">
            {project.kicker}
          </div>
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] font-medium text-forest tracking-tight text-balance">
            {project.name}.
          </h3>
          {project.tagline && (
            <p className="mt-5 font-display italic text-2xl md:text-3xl text-terracotta leading-tight text-balance">
              "{project.tagline}"
            </p>
          )}
          <p className="mt-6 font-body text-base md:text-lg leading-relaxed text-forest-light max-w-lg">
            {project.body}
          </p>
          <div className="mt-8 flex items-center gap-6">
            {project.metric && (
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light">Impact</div>
                <div className="font-mono text-xl md:text-2xl text-forest mt-1">{project.metric}</div>
              </div>
            )}
            <Link
              to="/get-involved#donate"
              data-testid={`project-support-${project.id}`}
              className="inline-flex items-center gap-2 border-b border-forest text-forest font-body text-xs uppercase tracking-[0.2em] pb-1 hover:text-terracotta hover:border-terracotta transition-colors"
            >
              Support this <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className={`md:col-span-6 ${flip ? "md:order-1" : ""}`}>
          <div className="relative overflow-hidden aspect-[4/5] md:aspect-[5/6] bg-cream-200">
            <img
              src={project.image}
              alt={project.name || "Project image"}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-forest/5" />
            {summaryTag && (
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-cream bg-forest/60 backdrop-blur px-3 py-1">
                {summaryTag}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectRow;
