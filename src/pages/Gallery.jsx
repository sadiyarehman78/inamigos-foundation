import React from "react";
import { motion } from "framer-motion";
import { GALLERY } from "@/data/site";

const Gallery = () => {
  return (
    <div data-testid="page-gallery" className="bg-cream">
     {/* HERO */}

<section className="relative h-[80vh] overflow-hidden">

  <img
    src="/gallery/prakriti1.jpg"
    alt="InAmigos Foundation Gallery"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-black/55"></div>

  {/* Content */}

  <div className="relative z-10 h-full flex items-center">

    <div className="max-w-[1400px] mx-auto px-6 md:px-10">

      <div className="font-mono text-xs uppercase tracking-[0.35em] text-green-200 mb-6">

        OFFICIAL PHOTO GALLERY

      </div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] max-w-4xl"
      >
        Every Picture
        <br />
        <span className="italic text-green-300">
          Tells a Story
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .2, duration: .8 }}
        className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed"
      >
        Behind every smile, every tree planted, every rescued animal,
        and every empowered child is a team of volunteers working
        together to create lasting social impact.
      </motion.p>

    </div>

  </div>

</section>

      {/* GALLERY BY PROJECT */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28 space-y-24">
        {GALLERY.map((group, gi) => (
          <div key={group.projectId} id={group.projectId}>
            <div className="flex items-baseline justify-between border-b border-forest/25 pb-6 mb-8">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta mb-2">
                  0{gi + 1} · {group.kicker}
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-medium text-forest">
                  {group.projectName}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {group.photos.map((photo, pi) => (
                <motion.figure
                  key={`${group.projectId}-${pi}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: pi * 0.08 }}
                  data-testid={`gallery-photo-${group.projectId}-${pi}`}
                  className="group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-3">
                    <div className="font-body text-sm text-forest">{photo.caption}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-forest-light mt-1">
                      {photo.source}
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
