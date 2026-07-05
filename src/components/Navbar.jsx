import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SITE } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/mission", label: "Mission" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/impact", label: "Impact" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      data-testid="navbar"
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "bg-cream/85 backdrop-blur-md border-forest/20" : "bg-cream border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between py-5">
        <Link to="/" data-testid="nav-logo" className="flex items-baseline gap-2 group">
          <span className="font-display text-3xl md:text-4xl font-medium leading-none text-forest tracking-tight">
            In<span className="italic text-terracotta">Amigos</span>
          </span>
          <span className="hidden md:inline font-mono text-[10px] uppercase tracking-[0.25em] text-forest-light">
            Foundation · Est. 2020
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `font-body text-[13px] uppercase tracking-[0.18em] transition-colors ${
                  isActive ? "text-terracotta" : "text-forest hover:text-terracotta"
                }`
              }
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/get-involved#donate"
            data-testid="nav-donate-btn"
            className="hidden md:inline-flex bg-forest text-cream px-6 py-3 font-body text-[12px] uppercase tracking-[0.2em] hover:bg-terracotta transition-colors"
          >
            Donate
          </Link>
          <button
            data-testid="nav-menu-toggle"
            className="lg:hidden text-forest p-2"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-cream border-t border-forest/15 px-6 py-6"
          data-testid="mobile-menu"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `font-display text-3xl leading-none ${isActive ? "text-terracotta italic" : "text-forest"}`
                }
                end={l.to === "/"}
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/get-involved#donate"
              data-testid="mobile-donate-btn"
              className="mt-4 inline-flex justify-center bg-terracotta text-cream px-6 py-4 font-body text-xs uppercase tracking-[0.2em]"
            >
              Donate
            </Link>
          </nav>
          {SITE?.contact?.email && (
            <div className="mt-6 font-mono text-[10px] uppercase tracking-widest text-forest-light">
              {SITE.contact.email}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
