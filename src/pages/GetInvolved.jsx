import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, ArrowRight, Check } from "lucide-react";
import { DONATION_TIERS, PROJECTS } from "@/data/site";
import { toast } from "sonner";

const DonateForm = () => {
  const [selected, setSelected] = useState(1);
  const [custom, setCustom] = useState("");
  const [cause, setCause] = useState("Where needed most");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState("once");

  const submit = (e) => {
    e.preventDefault();
    const amt = custom || DONATION_TIERS[selected].amount;
    if (!name || !email || !amt) {
      toast.error("Please add your name, email and choose an amount.");
      return;
    }
    toast.success(`Thank you, ${name}! ₹${amt} pledged toward ${cause}.`, {
      description: "This is a UI demo — no payment was actually processed.",
    });
  };

  return (
    <form onSubmit={submit} data-testid="donate-form" className="space-y-8">
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">
          Choose an amount (INR)
        </div>
        <div className="grid grid-cols-2 gap-3">
          {DONATION_TIERS.map((t, i) => (
            <button
              type="button"
              key={t.amount}
              data-testid={`donate-tier-${t.amount}`}
              onClick={() => { setSelected(i); setCustom(""); setCause(t.cause); }}
              className={`text-left p-5 border transition-colors ${
                selected === i && !custom
                  ? "bg-forest text-cream border-forest"
                  : "bg-cream text-forest border-forest/30 hover:border-forest"
              }`}
            >
              <div className="font-mono text-2xl md:text-3xl tracking-tighter">₹{t.amount.toLocaleString()}</div>
              <div className={`mt-2 font-body text-xs leading-snug ${selected === i && !custom ? "text-cream/80" : "text-forest-light"}`}>
                {t.gives}
              </div>
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-3">
          <label htmlFor="donate-custom-amount" className="font-mono text-[10px] uppercase tracking-widest text-forest-light">or custom</label>
          <input
            id="donate-custom-amount"
            name="customAmount"
            type="number"
            data-testid="donate-custom-amount"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder="Enter amount"
            className="flex-1 bg-transparent border-b border-forest px-2 py-2 font-mono text-lg text-forest focus:outline-none focus:border-terracotta"
          />
        </div>
      </div>

      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">Frequency</div>
        <div className="flex gap-3">
          {["once", "monthly"].map((f) => (
            <button
              type="button"
              key={f}
              data-testid={`donate-freq-${f}`}
              onClick={() => setFrequency(f)}
              aria-pressed={frequency === f}
              className={`px-6 py-3 font-body text-xs uppercase tracking-[0.2em] border ${
                frequency === f ? "bg-terracotta text-cream border-terracotta" : "border-forest text-forest"
              }`}
            >
              {f === "once" ? "One-time" : "Monthly"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="donate-cause" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">Allocate to</label>
        <select
          id="donate-cause"
          name="cause"
          data-testid="donate-cause"
          value={cause}
          onChange={(e) => setCause(e.target.value)}
          className="w-full bg-transparent border-b border-forest py-3 font-body text-forest focus:outline-none"
        >
          <option>Where needed most</option>
          {PROJECTS.map((p) => (
            <option key={p.id}>{p.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="donate-name" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">Your name</label>
          <input
            id="donate-name"
            name="name"
            type="text"
            data-testid="donate-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ritu Sharma"
            className="w-full bg-transparent border-b border-forest py-3 text-forest focus:outline-none focus:border-terracotta"
          />
        </div>
        <div>
          <label htmlFor="donate-email" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">Email</label>
          <input
            id="donate-email"
            name="email"
            type="email"
            data-testid="donate-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="w-full bg-transparent border-b border-forest py-3 text-forest focus:outline-none focus:border-terracotta"
          />
        </div>
      </div>

      <button
        type="submit"
        data-testid="donate-submit"
        className="w-full bg-terracotta text-cream px-8 py-5 font-body text-xs uppercase tracking-[0.24em] hover:bg-forest transition-colors flex items-center justify-center gap-3"
      >
        Complete donation <ArrowRight size={16} />
      </button>
      <div className="font-mono text-[10px] uppercase tracking-widest text-forest-light text-center">
        · 80G tax exempt · Secure · Demo UI (no payment processed)
      </div>
    </form>
  );
};

const VolunteerForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", interest: "Project Prakriti", message: "" });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return toast.error("Please add your name and email.");
    toast.success(`Welcome, Amigo ${form.name}!`, { description: "We'll be in touch within 48 hours." });
    setForm({ name: "", email: "", phone: "", city: "", interest: "Project Prakriti", message: "" });
  };
  return (
    <form onSubmit={submit} data-testid="volunteer-form" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="vol-name" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">Name</label>
          <input
            id="vol-name"
            name="name"
            data-testid="vol-name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border-b border-forest py-3 text-forest focus:outline-none focus:border-terracotta"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="vol-email" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">Email</label>
          <input
            id="vol-email"
            name="email"
            type="email"
            data-testid="vol-email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border-b border-forest py-3 text-forest focus:outline-none focus:border-terracotta"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label htmlFor="vol-phone" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">Phone</label>
          <input
            id="vol-phone"
            name="phone"
            data-testid="vol-phone"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-transparent border-b border-forest py-3 text-forest focus:outline-none focus:border-terracotta"
            placeholder="+91 ..."
          />
        </div>
        <div>
          <label htmlFor="vol-city" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">City</label>
          <input
            id="vol-city"
            name="city"
            data-testid="vol-city"
            value={form.city}
            onChange={e => setForm({ ...form, city: e.target.value })}
            className="w-full bg-transparent border-b border-forest py-3 text-forest focus:outline-none focus:border-terracotta"
            placeholder="Bilaspur"
          />
        </div>
      </div>
      <div>
        <label htmlFor="vol-interest" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">Project of interest</label>
        <select
          id="vol-interest"
          name="interest"
          data-testid="vol-interest"
          value={form.interest}
          onChange={e => setForm({ ...form, interest: e.target.value })}
          className="w-full bg-transparent border-b border-forest py-3 text-forest focus:outline-none"
        >
          {PROJECTS.map(p => <option key={p.id}>{p.name}</option>)}
          <option>Wherever needed</option>
        </select>
      </div>
      <div>
        <label htmlFor="vol-message" className="block font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">Why do you want to join?</label>
        <textarea
          id="vol-message"
          name="message"
          data-testid="vol-message"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          rows={3}
          className="w-full bg-transparent border-b border-forest py-3 text-forest focus:outline-none focus:border-terracotta"
          placeholder="Tell us in a few sentences..."
        />
      </div>
      <button type="submit" data-testid="vol-submit" className="w-full bg-forest text-cream px-8 py-5 font-body text-xs uppercase tracking-[0.24em] hover:bg-terracotta transition-colors flex items-center justify-center gap-3">
        Sign up as an Amigo <Users size={16} />
      </button>
    </form>
  );
};

const GetInvolved = () => {
  const location = useLocation();
  const [tab, setTab] = useState("donate");

  useEffect(() => {
    if (location.hash === "#volunteer") setTab("volunteer");
    else setTab("donate");

    let timeoutId;
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        timeoutId = setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
      }
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [location]);

  return (
    <div data-testid="page-get-involved" className="bg-cream">
      {/* HERO */}
      <section className="border-b border-forest/25">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-16">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta mb-6">
                — Two doors, one house
              </div>
              <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-medium text-forest tracking-tighter text-balance">
                Become an <span className="italic text-terracotta">Amigo</span>.
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="font-body text-base md:text-lg text-forest-light leading-relaxed">
                Give a rupee or a Saturday. Both change something. Both count.
              </p>
            </div>
          </div>

          <div className="mt-14 flex gap-2">
            <button
              data-testid="tab-donate"
              onClick={() => setTab("donate")}
              aria-pressed={tab === "donate"}
              className={`px-8 py-4 font-body text-xs uppercase tracking-[0.22em] border ${tab === "donate" ? "bg-forest text-cream border-forest" : "border-forest text-forest hover:bg-forest/5"}`}
            >
              <Heart size={14} className="inline mr-2 -mt-0.5" /> Donate
            </button>
            <button
              data-testid="tab-volunteer"
              onClick={() => setTab("volunteer")}
              aria-pressed={tab === "volunteer"}
              className={`px-8 py-4 font-body text-xs uppercase tracking-[0.22em] border ${tab === "volunteer" ? "bg-forest text-cream border-forest" : "border-forest text-forest hover:bg-forest/5"}`}
            >
              <Users size={14} className="inline mr-2 -mt-0.5" /> Volunteer
            </button>
          </div>
        </div>
      </section>

      <section id={tab === "donate" ? "donate" : "volunteer"} className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-12 gap-10 md:gap-16"
        >
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={tab === "donate"
                  ? "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwZGlzdHJpYnV0aW5nJTIwZm9vZCUyMGNvbW11bml0eXxlbnwwfHx8fDE3ODMwNjY3ODl8MA&ixlib=rb-4.1.0&q=85"
                  : "https://images.unsplash.com/photo-1758599668209-783bd3691ec8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBoZWxwaW5nJTIwcG9ydHJhaXQlMjBlbW90aW9uYWx8ZW58MHx8fHwxNzgzMDY2ODAyfDA&ixlib=rb-4.1.0&q=85"}
                alt={tab === "donate" ? "Volunteers distributing food to the community" : "Volunteer helping in the field"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 space-y-3">
              {[
                "80G Tax-Exempt Receipts",
                "100% of pooled funds → field programs",
                "Quarterly public impact reports",
                "Community-first, not organisation-first",
              ].map((x) => (
                <div key={x} className="flex items-start gap-3 font-body text-sm text-forest">
                  <Check size={16} className="mt-0.5 text-terracotta" /> {x}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest-light mb-3">
              {tab === "donate" ? "Complete donation" : "Volunteer registration"}
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1] font-medium text-forest mb-10 text-balance">
              {tab === "donate" ? <>Your <span className="italic text-terracotta">rupee</span> becomes rice, ink, and shade.</> : <>Your <span className="italic text-terracotta">Saturday</span> becomes someone's future.</>}
            </h2>
            {tab === "donate" ? <DonateForm /> : <VolunteerForm />}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default GetInvolved;
