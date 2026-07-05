import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Facebook, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";

const socials = [
  { icon: Instagram, href: SITE?.socials?.instagram, label: "Instagram" },
  { icon: Linkedin, href: SITE?.socials?.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: SITE?.socials?.twitter, label: "Twitter" },
  { icon: Facebook, href: SITE?.socials?.facebook, label: "Facebook" },
].filter((s) => Boolean(s.href));

export const Footer = () => {
  const certifications = SITE?.certifications ?? [];

  return (
    <footer data-testid="footer" className="bg-forest text-cream relative overflow-hidden grain">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta mb-6">
              Take one step ·
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-medium">
              Concern is easy.<br />
              <span className="italic text-terracotta">Action</span> is rare.
            </h2>
            <p className="mt-8 font-body text-base md:text-lg text-cream/80 max-w-xl leading-relaxed">
              Become an Amigo. Volunteer a Saturday, sponsor a sapling, or share a story.
              The scale of change is decided by how many of us decide it matters.
            </p>
            <Link
              to="/get-involved"
              data-testid="footer-cta-btn"
              className="inline-flex items-center gap-3 mt-10 bg-terracotta text-cream px-7 py-4 font-body text-xs uppercase tracking-[0.22em] hover:bg-cream hover:text-forest transition-colors"
            >
              Become an Amigo <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-4">Reach</div>
            <ul className="space-y-4 font-body text-sm">
              {SITE?.contact?.email && (
                <li className="flex items-start gap-3">
                  <Mail size={14} className="mt-1 text-terracotta" />
                  <a href={`mailto:${SITE.contact.email}`} data-testid="footer-email" className="editorial-underline">
                    {SITE.contact.email}
                  </a>
                </li>
              )}
              {SITE?.contact?.phone && (
                <li className="flex items-start gap-3">
                  <Phone size={14} className="mt-1 text-terracotta" />
                  <a href={`tel:${SITE.contact.phone}`} data-testid="footer-phone" className="editorial-underline">
                    {SITE.contact.phone}
                  </a>
                </li>
              )}
              {SITE?.contact?.address && (
                <li className="flex items-start gap-3">
                  <MapPin size={14} className="mt-1 text-terracotta" />
                  <span className="text-cream/80">{SITE.contact.address}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-4">Follow</div>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                  className="flex items-center gap-3 text-sm text-cream/80 hover:text-terracotta transition-colors"
                >
                  <s.icon size={14} /> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Massive wordmark */}
        <div className="mt-24 border-t border-cream/20 pt-10 overflow-hidden">
          <div
            aria-hidden="true"
            className="font-display text-[18vw] leading-[0.85] font-medium tracking-tighter text-cream select-none"
          >
            In<span className="italic text-terracotta">Amigos</span>.
          </div>
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/60">
            {certifications.map((c, i) => (
              <span key={`${c}-${i}`}>· {c}</span>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-col md:flex-row justify-between gap-3 border-t border-cream/15 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/50">
          <span>© {new Date().getFullYear()} InAmigos Foundation — All rights reserved.</span>
          <span>{SITE?.recognition}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
